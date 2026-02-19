import FrameWorker from "./frameWorker";
import exKitRequest from "./exKitRequest";
import exKitBuildConnectRe from "./exKitBuildConnectRe";
import getLogger from "./getLogger";

const logger = getLogger('moduleWorker');

class ModuleWorker {
  constructor(module, profileOptions) {
    this.module = module;
    this.profileOptions = null;

    this.worker = null;

    this.requests = [];

    this.connectRe = null;

    this.setProfileOptions(profileOptions);

    this.api = {
      request: (details) => {
        return exKitRequest(this, details);
      },
      debugDump: (payload) => {
        try {
          if (!this.profileOptions || !this.profileOptions.debugDumps) {
            return true;
          }

          if (typeof globalThis !== 'undefined') {
            globalThis.__tsearchDebugHtml = globalThis.__tsearchDebugHtml || [];
            globalThis.__tsearchDebugHtml.push({
              ...payload,
              timestamp: Date.now(),
            });

            // Avoid unbounded growth in long sessions
            const maxItems = 20;
            if (globalThis.__tsearchDebugHtml.length > maxItems) {
              globalThis.__tsearchDebugHtml.splice(0, globalThis.__tsearchDebugHtml.length - maxItems);
            }
          }
          console.warn('[tsearch-debug] dump', payload);
        } catch (err) {
          console.warn('[tsearch-debug] debugDump handler error', err);
        }
        return true;
      }
    };
  }
  init() {
    const module = this.module;
    this.connectRe = exKitBuildConnectRe(module.meta.connect);
    this.worker = new FrameWorker({
      moduleId: module.id
    }, this.api);
    const info = {
      locale: module.meta.locale,
      profileOptions: this.profileOptions || {},
    };
    return this.worker.callFn('init', [module.code, module.meta.require, info]).catch(err => {
      this.destroyWorker();
      throw err;
    });
  }
  setProfileOptions(profileOptions) {
    this.profileOptions = profileOptions || {};

    // If sandbox is already initialized, update its info dynamically,
    // so diagnostic flags can be toggled without reloading worker.
    try {
      if (this.worker) {
        this.worker.callFn('setInfo', [{
          locale: this.module && this.module.meta ? this.module.meta.locale : undefined,
          profileOptions: this.profileOptions || {},
        }]);
      }
    } catch (err) {
      // ignore - info update is best-effort
    }
  }
  callFn(event, args) {
    return this.worker.callFn(event, args);
  }
  abortAllRequests() {
    this.requests.splice(0).forEach(req => {
      req.abort();
    });
  }
  destroyWorker() {
    if (this.worker) {
      this.worker.destroy();
      this.worker = null;
    }
  }
  destroy() {
    this.destroyWorker();
    this.abortAllRequests();
  }
}

export default ModuleWorker;