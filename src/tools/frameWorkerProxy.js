import getLogger from "./getLogger";
const logger = getLogger('frameWorkerProxy');

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const proxies = new Map();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.target === 'background' && msg.action === 'workerAction') {
        const proxy = proxies.get(msg.workerId);
        if (proxy) {
            proxy.handleAction(msg.fn, msg.args).then(result => sendResponse({ result })).catch(err => sendResponse({ error: err.toString() }));
            return true;
        } else {
            logger.warn('Proxy not found for workerAction', msg.workerId);
            sendResponse({ error: 'Proxy not found' });
        }
    }
});

let creatingOffscreenParams = null;

class FrameWorkerProxy {
    constructor(query, actions) {
        this.id = uuidv4();
        this.query = query;
        this.actions = actions;
        this.isInitialized = false;

        proxies.set(this.id, this);

        this.init();
    }

    async handleAction(fn, args) {
        // Resolve path in actions
        const parts = fn.split('.');
        let scope = this.actions;
        let func = null;
        let context = this.actions;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (i === parts.length - 1) {
                func = scope[part];
            } else {
                scope = scope[part];
                context = scope;
            }
            if (!scope) throw new Error(`Action path ${fn} not found`);
        }

        if (typeof func !== 'function') {
            throw new Error(`Action ${fn} is not a function`);
        }

        return func.apply(context, args);
    }

    async ensureOffscreen() {
        if (await chrome.offscreen.hasDocument()) return;

        if (creatingOffscreenParams) {
            await creatingOffscreenParams;
            return;
        }

        creatingOffscreenParams = chrome.offscreen.createDocument({
            url: 'offscreen.html',
            reasons: [chrome.offscreen.Reason.DOM_SCRAPING],
            justification: 'Running sandbox for torrent trackers',
        });

        try {
            await creatingOffscreenParams;
        } finally {
            creatingOffscreenParams = null;
        }
    }

    async init() {
        try {
            await this.ensureOffscreen();

            const response = await chrome.runtime.sendMessage({
                target: 'offscreen',
                action: 'initWorker',
                workerId: this.id,
                query: this.query
            });

            if (response && response.error) {
                throw new Error(response.error);
            }
            this.isInitialized = true;
        } catch (err) {
            logger.error('init proxy error', err);
        }
    }

    async callFn(event, args) {
        if (!this.isInitialized) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({
                target: 'offscreen',
                action: 'callFn',
                workerId: this.id,
                event: event,
                args: args
            }, response => {
                if (chrome.runtime.lastError) {
                    // Offscreen might have died
                    logger.warn('offscreen communication error, retrying init', chrome.runtime.lastError);
                    this.isInitialized = false;
                    return reject(chrome.runtime.lastError);
                }
                if (!response) {
                    return reject(new Error('Empty response from offscreen'));
                }
                if (response.error) {
                    return reject(new Error(response.error));
                }
                resolve(response.result);
            });
        });
    }

    destroy() {
        proxies.delete(this.id);
        chrome.runtime.sendMessage({
            target: 'offscreen',
            action: 'destroyWorker',
            workerId: this.id
        });
    }
}

export default FrameWorkerProxy;
