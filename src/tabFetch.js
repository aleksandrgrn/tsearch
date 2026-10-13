import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import {StatusCodeError} from "./tools/errors";
import arrayBufferToBase64 from "./tools/arrayBufferToBase64";

const serializeError = require('serialize-error');

!window.tabFetch && (() => {
  const idController = new Map();

  const serializeResult = () => {
    return [
      result => ({result}),
      err => ({error: serializeError(err)})
    ];
  };

  const isHttp = (protocol) => {
    return /^https?:/.test(protocol);
  };

  window.tabFetch = (id, url, fetchOptions, isSameOrigin, sessionId) => {
    const previous = idController.get(id);
    const controller = new AbortController();
    idController.set(id, {controller, sessionId});
    if (previous) previous.controller.abort();
    return Promise.resolve().then(() => {

      const uri = new URL(url);
      if (isSameOrigin && uri.host !== location.host) {
        throw new Error('Tracker tab navigated to another host');
      }
      if (isSameOrigin && uri.origin !== location.origin) {
        url = location.origin + url.substr(uri.origin.length);
      } else
      if (uri.protocol !== location.protocol && isHttp(uri.protocol) && isHttp(location.protocol)) {
        url = location.protocol + url.substr(uri.protocol.length);
      }

      const method = (fetchOptions.method || 'GET').toUpperCase();
      const options = {
        method,
        headers: fetchOptions.headers,
        signal: controller.signal
      };
      if (method !== 'GET' && method !== 'HEAD') {
        options.body = fetchOptions.body;
      }
      const request = fetch(url, options);

      return request.then(response => {
        if (!response.ok) {
          throw new StatusCodeError(response.status, null, null, response);
        }

        const safeResponse = {
          url: response.url,
          status: response.status,
          statusText: response.statusText,
          headers: Array.from(response.headers.entries())
        };

        return response.arrayBuffer().then(arrayBuffer => {
          return {response: safeResponse, base64: arrayBufferToBase64(arrayBuffer)};
        });
      });
    }).then(...serializeResult()).then((result) => {
      const current = idController.get(id);
      if (!current || current.controller !== controller) return;
      idController.delete(id);
      chrome.runtime.sendMessage({
        id: id,
        sessionId,
        action: 'tabFetchResponse',
        result,
      });
    });
  };

  window.tabFetchAbort = (id, sessionId) => {
    return Promise.resolve().then(() => {
      const current = idController.get(id);
      if (current && (sessionId === undefined || sessionId === current.sessionId)) {
        current.controller.abort();
      }
    });
  };

})();