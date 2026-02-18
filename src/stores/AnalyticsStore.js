import { flow, isAlive, types } from "mobx-state-tree";
import getLogger from "../tools/getLogger";
import { ErrorWithCode } from "../tools/errors";

const globalContext = typeof window !== 'undefined' ? window : self;
const ga = globalContext.ga || function () {
  (globalContext.ga.q = globalContext.ga.q || []).push(arguments);
};
globalContext.ga = ga;

const logger = getLogger('AnalyticsStore');

/**
 * @typedef {{}} AnalyticsStore
 * @property {string} [state]
 * @property {function:Promise} init
 */
const AnalyticsStore = types.model('AnalyticsStore', {
  state: types.optional(types.enumeration(['idle', 'pending', 'done', 'error']), 'idle'),
}).actions(self => {
  return {
    init: flow(function* () {
      // In Service Worker we cannot inject script tags or use window.ga
      if (typeof window === 'undefined') {
        // We are in Service Worker
        return;
      }

      if (self.state !== 'idle') return;

      self.state = 'pending';
      try {
        yield fetch('https://www.google-analytics.com/analytics.js', {
          method: 'HEAD'
        }).then((response) => {
          if (!response.ok) {
            throw new ErrorWithCode('Head is not ok', 'HEAD_ERROR');
          }

          initGa();
        });

        if (isAlive(self)) {
          self.state = 'done';
        }
      } catch (err) {
        if (err.code === 'HEAD_ERROR') {
          logger.warn('init error', err);
        } else {
          logger.error('init error', err);
        }
        if (isAlive(self)) {
          self.state = 'error';
        }
      }
    }),
  };
});

const initGa = () => {
  // Legacy Google Analytics script injection is disabled for Manifest V3.
  // Use Measurement Protocol (fetch) instead.
  /*
if (typeof window === 'undefined') return;

window.GoogleAnalyticsObject = 'ga';
const ga = window.ga;

ga.l = Date.now();
ga('create', 'UA-10717861-22', 'auto');
ga('set', 'forceSSL', true);
ga('set', 'checkProtocolTask', null);
ga('set', 'appName', 'tms');
ga('set', 'appId', 'tms-v3');
ga('set', 'appVersion', BUILD_ENV.version);
ga('require', 'displayfeatures');
ga('send', 'pageview');

const gas = document.createElement('script');
gas.src = 'https://www.google-analytics.com/analytics.js';
document.head.appendChild(gas);
*/
};

export default AnalyticsStore;