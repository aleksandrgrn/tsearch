import FrameWorker from "../tools/frameWorker";
import getLogger from "../tools/getLogger";

const logger = getLogger('offscreen');
const workers = new Map();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.target !== 'offscreen') return;

    handleMessage(msg).then(result => {
        sendResponse({ result });
    }).catch(err => {
        sendResponse({ error: err.message || err.toString() });
    });

    return true; // Keep channel open for async response
});

async function handleMessage(msg) {
    switch (msg.action) {
        case 'initWorker': {
            const { workerId, query } = msg;
            if (workers.has(workerId)) {
                return;
            }

            logger.debug('initWorker', workerId);

            const createProxy = (path = []) => {
                return new Proxy(() => { }, {
                    get: (target, prop) => {
                        return createProxy([...path, prop]);
                    },
                    apply: (target, thisArg, args) => {
                        const fn = path.join('.');
                        return new Promise((resolve, reject) => {
                            chrome.runtime.sendMessage({
                                target: 'background',
                                action: 'workerAction',
                                workerId: workerId,
                                fn: fn,
                                args: args
                            }, response => {
                                if (chrome.runtime.lastError) {
                                    return reject(chrome.runtime.lastError);
                                }
                                if (!response) {
                                    return reject(new Error('Empty response from background'));
                                }
                                if (response.error) {
                                    return reject(new Error(response.error));
                                }
                                resolve(response.result);
                            });
                        });
                    }
                });
            };

            const actions = createProxy();

            const worker = new FrameWorker(query, actions);
            workers.set(workerId, worker);
            return true;
        }

        case 'callFn': {
            const { workerId, event, args } = msg;
            const worker = workers.get(workerId);
            if (!worker) {
                throw new Error(`Worker ${workerId} not found`);
            }

            return worker.callFn(event, args);
        }

        case 'destroyWorker': {
            const { workerId } = msg;
            const worker = workers.get(workerId);
            if (worker) {
                worker.destroy();
                workers.delete(workerId);
            }
            return true;
        }

        default:
            throw new Error(`Unknown action ${msg.action}`);
    }
}

// Keep-alive mechanism for offscreen document
setInterval(() => {
    // Just a heartbeat if needed, but for offscreen docs created with specific reasoning, they should stay alive as long as SW is alive or until 30s of inactivity? 
    // Actually offscreen docs have a lifetime managed by the creating context.
    // We should be fine for now.
}, 10000);
