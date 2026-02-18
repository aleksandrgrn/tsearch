// ==UserScript==
// @name __MSG_name__
// @downloadURL https://raw.githubusercontent.com/Feverqwe/tSearch/master/src/explorerModules/ggGamesTop.js
// @connect *://gameguru.ru/*
// @connect *://*.gameguru.ru/*
// @version 1.6
// @cacheTTL 86400
// @locale ru {"name": "Игры: Лучшие"}
// @locale en {"name": "Games: Best"}
// @defaultLocale en
// ==/UserScript==

const spaceReplace = text => {
  return text.replace(/[\s\xA0]/g, ' ');
};

const validateItem = item => {
  Object.keys(item).forEach(key => {
    if (!item[key]) {
      throw new Error(`Item ${key} is empty!`);
    }
  });
};

const text = node => {
  return node && node.textContent || '';
};

const normText = node => {
  return spaceReplace(text(node)).trim();
};

const toAbsUrl = (href, baseUrl) => {
  try {
    return new URL(href, baseUrl).toString();
  } catch (err) {
    return null;
  }
};

const isDataUrl = url => {
  return /^data:/i.test(url || '');
};

const hasPosterCandidate = (scope) => {
  if (!scope || !scope.querySelector) return false;
  return !!scope.querySelector(
    'img, source[srcset], [data-src], [data-srcset], [data-original], [data-lazy], [data-url], [data-src-small], [data-bg], [data-background], [data-image], [data-poster], [style*="background"]'
  );
};

const findScopeWithPoster = (node, maxDepth = 4) => {
  let scope = node;
  for (let i = 0; i <= maxDepth && scope; i++) {
    if (hasPosterCandidate(scope)) return scope;
    scope = scope.parentElement;
  }
  return node;
};

const parseSrcset = (srcset, baseUrl) => {
  if (!srcset) return null;
  const parts = srcset.split(',').map(part => part.trim()).filter(Boolean);
  for (let i = parts.length - 1; i >= 0; i--) {
    const urlPart = parts[i].split(/\s+/)[0];
    const absUrl = toAbsUrl(urlPart, baseUrl);
    if (absUrl && !isDataUrl(absUrl)) return absUrl;
  }
  return null;
};

const extractBgUrl = (style, baseUrl) => {
  if (!style) return null;
  const m = /url\((['"]?)([^'")]+)\1\)/i.exec(style);
  if (!m) return null;
  return toAbsUrl(m[2], baseUrl);
};

const getPoster = (node, baseUrl) => {
  if (!node) return null;
  const scope = findScopeWithPoster(node);

  const pictureSource = scope.querySelector && scope.querySelector('source[srcset]');
  if (pictureSource) {
    const urlFromSource = parseSrcset(pictureSource.getAttribute('srcset'), baseUrl);
    if (urlFromSource) return urlFromSource;
  }

  const img = (scope.querySelector && scope.querySelector('img')) || (node.querySelector && node.querySelector('img'));
  if (img) {
    const srcsetUrl = parseSrcset(img.getAttribute('data-srcset') || img.getAttribute('srcset'), baseUrl);
    if (srcsetUrl) return srcsetUrl;

    const dataSrc = img.getAttribute('data-src') ||
      img.getAttribute('data-original') ||
      img.getAttribute('data-lazy') ||
      img.getAttribute('data-url') ||
      img.getAttribute('data-src-small');
    const dataSrcUrl = toAbsUrl(dataSrc, baseUrl);
    if (dataSrcUrl && !isDataUrl(dataSrcUrl)) return dataSrcUrl;

    const src = img.getAttribute('src');
    const srcUrl = toAbsUrl(src, baseUrl);
    if (srcUrl && !isDataUrl(srcUrl)) return srcUrl;
    if (srcUrl) return srcUrl;
  }

  const bgNode = (scope.querySelector && scope.querySelector('[style*="background"]')) ||
    (node.querySelector && node.querySelector('[style*="background"]'));
  if (bgNode) {
    const bgUrl = extractBgUrl(bgNode.getAttribute('style'), baseUrl);
    if (bgUrl && !isDataUrl(bgUrl)) return bgUrl;
  }

  const dataBgNode = (scope.querySelector && scope.querySelector('[data-bg], [data-background]')) ||
    (node.querySelector && node.querySelector('[data-bg], [data-background]'));
  if (dataBgNode) {
    const dataBg = dataBgNode.getAttribute('data-bg') || dataBgNode.getAttribute('data-background');
    const dataBgUrl = toAbsUrl(dataBg, baseUrl);
    if (dataBgUrl && !isDataUrl(dataBgUrl)) return dataBgUrl;
  }

  return null;
};

const getTitle = (node) => {
  const titleText = normText(node);
  if (titleText) return titleText;
  const titleAttr = node.getAttribute && node.getAttribute('title');
  if (titleAttr) return spaceReplace(titleAttr).trim();
  const img = node.querySelector && node.querySelector('img');
  const alt = img && img.getAttribute('alt');
  return alt ? spaceReplace(alt).trim() : '';
};

const parseItems = (doc, baseUrl) => {
  const root = doc.querySelector('main') || doc.body || doc;
  const results = [];
  const ddBl = {};
  Array.from(root.querySelectorAll('a[href]')).forEach(link => {
    try {
      const href = link.getAttribute('href');
      if (!href || !/\/game\//.test(href)) return;
      const url = toAbsUrl(href, baseUrl);
      if (!url || ddBl[url]) return;
      const title = getTitle(link);
      if (!title) return;
      const result = { title, url };
      const poster = getPoster(link, baseUrl);
      if (poster) {
        result.poster = poster;
      }
      validateItem(result);
      ddBl[url] = true;
      results.push(result);
    } catch (err) {
      console.error('Parse item error', err);
    }
  });
  return results;
};

const onPageLoad = response => {
  const content = response.body;
  const doc = API_getDoc(content, response.url);
  return parseItems(doc, response.url);
};

const buildPageUrl = (baseUrl, page) => {
  if (page <= 1) return baseUrl;
  const sep = baseUrl.indexOf('?') === -1 ? '?' : '&';
  return `${baseUrl}${sep}page=${page}`;
};

const getItems = () => {
  const items = [];
  const seen = {};
  let stop = false;
  const baseUrl = 'https://gameguru.ru/games/platform_pc/rating_80-100/';
  let promise = Promise.resolve();
  [1, 2, 3, 4, 5].forEach(page => {
    promise = promise.then(() => {
      if (stop) return;
      const url = buildPageUrl(baseUrl, page);
      return API_request({
        method: 'GET',
        url: url,
      }).then(onPageLoad).then(_items => {
        _items.forEach(item => {
          if (!seen[item.url]) {
            seen[item.url] = true;
            items.push(item);
          }
        });
      }).catch(err => {
        if (err && err.statusCode === 404) {
          stop = true;
          return;
        }
        throw err;
      });
    });
  });
  return promise.then(() => items);
};

API_event('getItems', () => {
  return getItems().then(items => {
    return {
      success: true,
      items
    };
  });
});
