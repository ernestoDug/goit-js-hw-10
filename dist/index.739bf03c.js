// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j9r0q":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loaderVar", ()=>loaderVar);
parcelHelpers.export(exports, "selecter", ()=>selecter);
parcelHelpers.export(exports, "catHub", ()=>catHub);
parcelHelpers.export(exports, "URL_FOR_INFOCAT", ()=>URL_FOR_INFOCAT);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _catApiJs = require("./cat-api.js");
var _slimSelect = require("slim-select");
var _slimSelectDefault = parcelHelpers.interopDefault(_slimSelect);
var _notiflixNotifyAio = require("notiflix/build/notiflix-notify-aio");
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
const URL_FOR_INFOCAT = "https://api.thecatapi.com/v1/images/search";
// для фото кота
const catHub = document.querySelector(".cat-info");
// для опису кота
const miuD = document.querySelector(".miuDescr");
// для індикатору завантаження
const loaderVar = document.querySelector(".loaderWrap");
// виклик функції отримання пород
(0, _catApiJs.fetchBreeds)();
function selecter(data) {
    console.log("масив для списку кошаків:", data);
    data.map(({ id, name })=>{
        // // додаємо до селекту опції
        (0, _catApiJs.selectVar).add(new Option(`${name}`, `${id}`));
    });
    // створення екзепляру селекту бібліотеки
    new (0, _slimSelectDefault.default)({
        select: (0, _catApiJs.selectVar),
        settings: {
            allowDeselect: true,
            showSearch: true,
            searchText: "котяра не знайден",
            searchPlaceholder: "розпочати котопошук",
            searchHighlight: true
        }
    });
}
// слухач сеLекта
(0, _catApiJs.selectVar).addEventListener("change", onChange);
// обробник селекта
function onChange(event) {
    const idBreed = event.target.value;
    // console.log(opt[vib], "555555555555555555");****************************************
    console.log("ай ді як ев таргет:", idBreed);
    console.log("ай ді у велью опшин  по кліку:", (0, _catApiJs.selectVar).value);
    // виклик функцію створення досьє кота післі запиту
    (0, _catApiJs.fetchCatByBreed)(idBreed);
}

},{"axios":"jo6P5","./cat-api.js":"5IWAT","slim-select":"lzHUr","notiflix/build/notiflix-notify-aio":"eXQLZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jo6P5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, mergeConfig } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"63MyY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63MyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"5By4s","./helpers/bind.js":"haRQb","./core/Axios.js":"cpqD8","./core/mergeConfig.js":"b85oP","./defaults/index.js":"hXfHM","./helpers/formDataToJSON.js":"01RfH","./cancel/CanceledError.js":"9PwCG","./cancel/CancelToken.js":"45wzn","./cancel/isCancel.js":"a0VmF","./env/data.js":"h29L9","./helpers/toFormData.js":"ajoez","./core/AxiosError.js":"3u8Tl","./helpers/spread.js":"dyQ8N","./helpers/isAxiosError.js":"eyiLq","./core/AxiosHeaders.js":"cgSSx","./helpers/HttpStatusCode.js":"fdR61","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5By4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
};

},{"./helpers/bind.js":"haRQb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haRQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cpqD8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        contextHeaders && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"5By4s","../helpers/buildURL.js":"3bwC2","./InterceptorManager.js":"1VRIM","./dispatchRequest.js":"6sjJ6","./mergeConfig.js":"b85oP","./buildFullPath.js":"1I5TW","../helpers/validator.js":"9vgkY","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}

},{"../utils.js":"5By4s","../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hz84m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"ajoez","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajoez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]")) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","../platform/node/classes/FormData.js":"aFlee","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3u8Tl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFlee":[function(require,module,exports) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VRIM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sjJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"eRqJY","../cancel/isCancel.js":"a0VmF","../defaults/index.js":"hXfHM","../cancel/CanceledError.js":"9PwCG","../core/AxiosHeaders.js":"cgSSx","../adapters/adapters.js":"d7JxI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRqJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"./../utils.js":"5By4s","../defaults/index.js":"hXfHM","../core/AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXfHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
"use strict";
const DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            }
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = (0, _utilsJsDefault.default).merge(DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","./transitional.js":"lM32f","../helpers/toFormData.js":"ajoez","../helpers/toURLEncodedForm.js":"9hjry","../platform/index.js":"7tDev","../helpers/formDataToJSON.js":"01RfH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lM32f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hjry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}

},{"../utils.js":"5By4s","./toFormData.js":"ajoez","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tDev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _indexJsDefault.default));
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"./node/index.js":"cVeqE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVeqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"5cIHE","./classes/FormData.js":"7i1jd","./classes/Blob.js":"8chF6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cIHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7i1jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof FormData !== "undefined" ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8chF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof Blob !== "undefined" ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01RfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgSSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders.prototype);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"5By4s","../helpers/parseHeaders.js":"kqDd5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqDd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0VmF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PwCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"3u8Tl","../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7JxI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default)
};
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
exports.default = {
    getAdapter: (adapters)=>{
        adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, _utilsJsDefault.default).isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, _axiosErrorJsDefault.default)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, _utilsJsDefault.default).hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, _utilsJsDefault.default).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: knownAdapters
};

},{"../utils.js":"5By4s","./http.js":"aFlee","./xhr.js":"ldm57","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldm57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _cookiesJs = require("./../helpers/cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildURLJs = require("./../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _isURLSameOriginJs = require("./../helpers/isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _speedometerJs = require("../helpers/speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
"use strict";
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, _utilsJsDefault.default).isFormData(requestData)) {
            if ((0, _indexJsDefault.default).isStandardBrowserEnv || (0, _indexJsDefault.default).isStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, _indexJsDefault.default).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, _isURLSameOriginJsDefault.default)(fullPath)) && config.xsrfCookieName && (0, _cookiesJsDefault.default).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(fullPath);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"./../utils.js":"5By4s","./../core/settle.js":"dD9aC","./../helpers/cookies.js":"4WJjt","./../helpers/buildURL.js":"3bwC2","../core/buildFullPath.js":"1I5TW","./../helpers/isURLSameOrigin.js":"lxXtv","../defaults/transitional.js":"lM32f","../core/AxiosError.js":"3u8Tl","../cancel/CanceledError.js":"9PwCG","../helpers/parseProtocol.js":"7NfWU","../platform/index.js":"7tDev","../core/AxiosHeaders.js":"cgSSx","../helpers/speedometer.js":"gQeo1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD9aC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}

},{"./AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WJjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, _utilsJsDefault.default).isString(path)) cookie.push("path=" + path);
            if ((0, _utilsJsDefault.default).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1I5TW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"jD6NM","../helpers/combineURLs.js":"brOWK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jD6NM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brOWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxXtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NfWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQeo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b85oP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"5By4s","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vgkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"h29L9","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h29L9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.4.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45wzn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"9PwCG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyQ8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyiLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdR61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IWAT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BASE_URL", ()=>BASE_URL);
parcelHelpers.export(exports, "MY_KEY", ()=>MY_KEY);
parcelHelpers.export(exports, "selectVar", ()=>selectVar);
parcelHelpers.export(exports, "fetchBreeds", ()=>fetchBreeds);
parcelHelpers.export(exports, "fetchCatByBreed", ()=>fetchCatByBreed);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _indexJs = require("./index.js");
var _notiflixNotifyAio = require("notiflix/build/notiflix-notify-aio");
const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const MY_KEY = "live_Bvmmb25LUgn0kerowwQa8P9jXzhxZ7PQweZaoNBCqAfNembGTRKEXQZy885vOj5o";
const selectVar = document.querySelector(".breed-select");
// функція  наповнення селекта
function fetchBreeds() {
    // +- класу селекта
    selectVar.classList.remove("breed-select");
    selectVar.classList.add("breed-select--hidden");
    // запит
    (0, _axiosDefault.default).get(`${BASE_URL}?api-key=${MY_KEY}`, {
    }).then((response)=>{
        // + - класи лоадера  та списку
        selectVar.classList.remove("breed-select--hidden");
        selectVar.classList.add("breed-select");
        (0, _indexJs.loaderVar).classList.remove("loaderWrap");
        (0, _indexJs.loaderVar).classList.add("loaderWrap--hidden");
        return response.data;
    }).then((0, _indexJs.selecter)).catch((error)=>{
        (0, _notiflixNotifyAio.Notify).warning(`❌ Oops! Something went wrong! Try reloading the page!`);
    });
}
// функція примайння айді для запиту досьє котів
function fetchCatByBreed(idBreed) {
    // +- класів лоадера та карток
    (0, _indexJs.catHub).classList.remove("cat-info");
    (0, _indexJs.catHub).classList.add("cat-info--hidden");
    (0, _indexJs.loaderVar).classList.remove("loaderWrap--hidden");
    (0, _indexJs.loaderVar).classList.add("loaderWrap");
    (0, _axiosDefault.default).get(`${(0, _indexJs.URL_FOR_INFOCAT)}?breed_ids=${idBreed}&api_key=${MY_KEY}`, {
        params: {
            has_breeds: 1
        }
    }).then((response)=>{
        console.log("айді в ЗЕН після рендеру картки", idBreed);
        (0, _indexJs.catHub).classList.remove("cat-info--hidden");
        (0, _indexJs.catHub).classList.add("cat-info");
        (0, _indexJs.loaderVar).classList.remove("loaderWrap");
        (0, _indexJs.loaderVar).classList.add("loaderWrap--hidden");
        console.log("респонс для картки:", response.data);
        response.data.map(({ url, breeds: [{ id, name, description, temperament }] })=>{
            // додаємо дщсьє кошаків
            (0, _indexJs.catHub).innerHTML = `<div class = "wrapp">
        <h1 class="catName"> ${name} </h1>
       <h2 class="catDescr"> ${description}</h2>
       <h3 class="catTemp">${temperament}</h3>
       
       </div>
       <div class="photoCatWrap"> <img class="catPortret" src="${url}" alt="${name}"</div>`;
        });
    }).catch((error)=>{
        (0, _notiflixNotifyAio.Notify).warning(`❌ Oops! Something went wrong! Try reloading the page!`);
    });
}

},{"axios":"jo6P5","./index.js":"ebWYT","notiflix/build/notiflix-notify-aio":"eXQLZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXQLZ":[function(require,module,exports) {
var global = arguments[3];
/*
* Notiflix Notify AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.6
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/ /* global define */ (function(root, factory) {
    if (typeof define === "function" && define.amd) define([], function() {
        return factory(root);
    });
    else if (typeof module.exports === "object") module.exports = factory(root);
    else root.Notiflix = factory(root);
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : this, function(window1) {
    "use strict";
    // COMMON: SSR check: begin
    if (typeof window1 === "undefined" && typeof window1.document === "undefined") return false;
    // COMMON: SSR check: end
    // COMMON: Variables: begin
    var notiflixNamespace = "Notiflix";
    var notiflixConsoleDocs = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation";
    var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
    // COMMON: Variables: end
    // NOTIFY: Default Settings: begin
    var typesNotify = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    };
    var newNotifySettings;
    var notifySettings = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: false,
        timeout: 3000,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: true,
        showOnlyTheLastOne: false,
        clickToClose: false,
        pauseOnHover: true,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: true,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: false,
        useIcon: true,
        useFontAwesome: false,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
            background: "#32c682",
            textColor: "#fff",
            childClassName: "notiflix-notify-success",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-check-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            background: "#ff5549",
            textColor: "#fff",
            childClassName: "notiflix-notify-failure",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-times-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            background: "#eebf31",
            textColor: "#fff",
            childClassName: "notiflix-notify-warning",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-exclamation-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            background: "#26c0d3",
            textColor: "#fff",
            childClassName: "notiflix-notify-info",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-info-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    };
    // NOTIFY: Default Settings: end
    // COMMON: Console Error: begin
    var commonConsoleError = function(message) {
        return console.error("%c " + notiflixNamespace + " Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + message + notiflixConsoleDocs);
    };
    // COMMON: Console Error: end
    // COMMON: Check Head or Body: begin
    var commonCheckHeadOrBody = function(element) {
        if (!element) element = "head";
        if (window1.document[element] === null) {
            commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
            return false;
        }
        return true;
    };
    // COMMON: Check Head or Body: end
    // COMMON: Set Internal CSS Codes: begin
    var commonSetInternalCSSCodes = function(getInternalCSSCodes, styleElementId) {
        // check doc head
        if (!commonCheckHeadOrBody("head")) return false;
        // internal css
        if (getInternalCSSCodes() !== null && !window1.document.getElementById(styleElementId)) {
            var internalCSS = window1.document.createElement("style");
            internalCSS.id = styleElementId;
            internalCSS.innerHTML = getInternalCSSCodes();
            window1.document.head.appendChild(internalCSS);
        }
    };
    // COMMON: Set Internal CSS Codes: end
    // COMMON: Extend Options: begin
    var commonExtendOptions = function() {
        // variables
        var extended = {};
        var deep = false;
        var i = 0;
        // check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }
        // merge the object into the extended object
        var merge = function(obj) {
            for(var prop in obj)if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // if property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
                else extended[prop] = obj[prop];
            }
        };
        // loop through each object and conduct a merge
        for(; i < arguments.length; i++)merge(arguments[i]);
        return extended;
    };
    // COMMON: Extend Options: end
    // COMMON: Get Plaintext: begin
    var commonGetPlaintext = function(html) {
        var htmlPool = window1.document.createElement("div");
        htmlPool.innerHTML = html;
        return htmlPool.textContent || htmlPool.innerText || "";
    };
    // COMMON: Get Plaintext: end
    // NOTIFY: Get Internal CSS Codes: begin
    var notifyGetInternalCSSCodes = function() {
        var notifyCSS = '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
        return notifyCSS || null;
    };
    // NOTIFY: Get Internal CSS Codes: end
    // NOTIFY: Create: begin
    var notifyCreateCounter = 0;
    var notifyCreate = function(notifyType, message, callbackOrOptions, options) {
        // check doc body
        if (!commonCheckHeadOrBody("body")) return false;
        // if not initialized pretend like init
        if (!newNotifySettings) Notiflix.Notify.init({});
        // create a backup for new settings
        var newNotifySettingsBackup = commonExtendOptions(true, newNotifySettings, {});
        // check callbackOrOptions and options: begin
        if (typeof callbackOrOptions === "object" && !Array.isArray(callbackOrOptions) || typeof options === "object" && !Array.isArray(options)) {
            // new options
            var newOptions = {};
            if (typeof callbackOrOptions === "object") newOptions = callbackOrOptions;
            else if (typeof options === "object") newOptions = options;
            // extend new settings with the new options
            newNotifySettings = commonExtendOptions(true, newNotifySettings, newOptions);
        }
        // check callbackOrOptions and options: end
        // notify type
        var theType = newNotifySettings[notifyType.toLocaleLowerCase("en")];
        // notify counter
        notifyCreateCounter++;
        // check the message: begin
        if (typeof message !== "string") message = "Notiflix " + notifyType;
        // check the message: end
        // if plainText is true => HTML tags not allowed: begin
        if (newNotifySettings.plainText) message = commonGetPlaintext(message); // message plain text
        // if plainText is true => HTML tags not allowed: end
        // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: begin
        if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
            // extend settings for error massege
            newNotifySettings = commonExtendOptions(true, newNotifySettings, {
                closeButton: true,
                messageMaxLength: 150
            });
            // error message
            message = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.';
        }
        // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: end
        // check message max length: begin
        if (message.length > newNotifySettings.messageMaxLength) message = message.substring(0, newNotifySettings.messageMaxLength) + "...";
        // check message max length: end
        // font awesome icon style: begin
        if (newNotifySettings.fontAwesomeIconStyle === "shadow") theType.fontAwesomeIconColor = theType.background;
        // font awesome icon style: end
        // if cssAnimaion is false => duration: begin
        if (!newNotifySettings.cssAnimation) newNotifySettings.cssAnimationDuration = 0;
        // if cssAnimaion is false => duration: end
        // notify wrap: begin
        var ntflxNotifyWrap = window1.document.getElementById(notifySettings.wrapID) || window1.document.createElement("div");
        ntflxNotifyWrap.id = notifySettings.wrapID;
        ntflxNotifyWrap.style.width = newNotifySettings.width;
        ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
        ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;
        // wrap position: begin
        if (newNotifySettings.position === "center-center") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.margin = "auto";
            ntflxNotifyWrap.classList.add("nx-flex-center-center");
            ntflxNotifyWrap.style.maxHeight = "calc((100vh - " + newNotifySettings.distance + ") - " + newNotifySettings.distance + ")";
            ntflxNotifyWrap.style.display = "flex";
            ntflxNotifyWrap.style.flexWrap = "wrap";
            ntflxNotifyWrap.style.flexDirection = "column";
            ntflxNotifyWrap.style.justifyContent = "center";
            ntflxNotifyWrap.style.alignItems = "center";
            ntflxNotifyWrap.style.pointerEvents = "none";
        } else if (newNotifySettings.position === "center-top") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = "auto";
            ntflxNotifyWrap.style.margin = "auto";
        } else if (newNotifySettings.position === "center-bottom") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.margin = "auto";
        } else if (newNotifySettings.position === "right-bottom") {
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.left = "auto";
        } else if (newNotifySettings.position === "left-top") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = "auto";
            ntflxNotifyWrap.style.bottom = "auto";
        } else if (newNotifySettings.position === "left-bottom") {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = "auto";
            ntflxNotifyWrap.style.right = "auto";
        } else {
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.left = "auto";
            ntflxNotifyWrap.style.bottom = "auto";
        }
        // wrap position: end
        // if background overlay is true: begin
        if (newNotifySettings.backOverlay) {
            var ntflxNotifyOverlay = window1.document.getElementById(notifySettings.overlayID) || window1.document.createElement("div");
            ntflxNotifyOverlay.id = notifySettings.overlayID;
            ntflxNotifyOverlay.style.width = "100%";
            ntflxNotifyOverlay.style.height = "100%";
            ntflxNotifyOverlay.style.position = "fixed";
            ntflxNotifyOverlay.style.zIndex = newNotifySettings.zindex - 1;
            ntflxNotifyOverlay.style.left = 0;
            ntflxNotifyOverlay.style.top = 0;
            ntflxNotifyOverlay.style.right = 0;
            ntflxNotifyOverlay.style.bottom = 0;
            ntflxNotifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
            ntflxNotifyOverlay.className = newNotifySettings.cssAnimation ? "nx-with-animation" : "";
            ntflxNotifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + "ms" : "";
            if (!window1.document.getElementById(notifySettings.overlayID)) window1.document.body.appendChild(ntflxNotifyOverlay);
        }
        // if background overlay is true: end
        if (!window1.document.getElementById(notifySettings.wrapID)) window1.document.body.appendChild(ntflxNotifyWrap);
        // notify wrap: end
        // notify content: begin
        var ntflxNotify = window1.document.createElement("div");
        ntflxNotify.id = newNotifySettings.ID + "-" + notifyCreateCounter;
        ntflxNotify.className = newNotifySettings.className + " " + theType.childClassName + " " + (newNotifySettings.cssAnimation ? "nx-with-animation" : "") + " " + (newNotifySettings.useIcon ? "nx-with-icon" : "") + " nx-" + newNotifySettings.cssAnimationStyle + " " + (newNotifySettings.closeButton && typeof callbackOrOptions !== "function" ? "nx-with-close-button" : "") + " " + (typeof callbackOrOptions === "function" ? "nx-with-callback" : "") + " " + (newNotifySettings.clickToClose ? "nx-notify-click-to-close" : "");
        ntflxNotify.style.fontSize = newNotifySettings.fontSize;
        ntflxNotify.style.color = theType.textColor;
        ntflxNotify.style.background = theType.background;
        ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
        ntflxNotify.style.pointerEvents = "all";
        // rtl: begin
        if (newNotifySettings.rtl) {
            ntflxNotify.setAttribute("dir", "rtl");
            ntflxNotify.classList.add("nx-rtl-on");
        }
        // rtl: end
        // font-family: begin
        ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '", ' + defaultFontFamily;
        // font-family: end
        // use css animation: begin
        if (newNotifySettings.cssAnimation) ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + "ms";
        // use css animation: end
        // close button element: begin
        var closeButtonHTML = "";
        if (newNotifySettings.closeButton && typeof callbackOrOptions !== "function") closeButtonHTML = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + theType.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
        // close buttpon element: end
        // use icon: begin
        if (newNotifySettings.useIcon) {
            // use font awesome
            if (newNotifySettings.useFontAwesome) ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + "; font-size:" + newNotifySettings.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + theType.fontAwesomeClassName + " " + (newNotifySettings.fontAwesomeIconStyle === "shadow" ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
            else {
                var svgIcon = "";
                if (notifyType === typesNotify.Success) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
                else if (notifyType === typesNotify.Failure) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
                else if (notifyType === typesNotify.Warning) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
                else if (notifyType === typesNotify.Info) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
                ntflxNotify.innerHTML = svgIcon + '<span class="nx-message nx-with-icon">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
            }
        } else ntflxNotify.innerHTML = '<span class="nx-message">' + message + "</span>" + (newNotifySettings.closeButton ? closeButtonHTML : "");
        // use icon: end
        // notify content: end
        // notify append or prepend: begin
        if (newNotifySettings.position === "left-bottom" || newNotifySettings.position === "right-bottom") {
            var notifyWrap = window1.document.getElementById(notifySettings.wrapID);
            notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
        } else window1.document.getElementById(notifySettings.wrapID).appendChild(ntflxNotify);
        // notify append or prepend: end
        // remove by timeout or click: begin
        var eachNotifyElement = window1.document.getElementById(ntflxNotify.id);
        if (eachNotifyElement) {
            // timeout variables
            var timeoutHide;
            var timeoutRemove;
            // hide notify elm and hide overlay: begin
            var hideNotifyElementsAndOverlay = function() {
                eachNotifyElement.classList.add("nx-remove");
                var removeOverlay = window1.document.getElementById(notifySettings.overlayID);
                if (removeOverlay && ntflxNotifyWrap.childElementCount <= 0) removeOverlay.classList.add("nx-remove");
                clearTimeout(timeoutHide);
            };
            // hide notify elm and hide overlay: end
            // remove notify elm and wrapper: begin
            var removeNotifyElmentsAndWrapper = function() {
                if (eachNotifyElement && eachNotifyElement.parentNode !== null) eachNotifyElement.parentNode.removeChild(eachNotifyElement);
                if (ntflxNotifyWrap.childElementCount <= 0 && ntflxNotifyWrap.parentNode !== null) {
                    ntflxNotifyWrap.parentNode.removeChild(ntflxNotifyWrap);
                    var removeOverlay = window1.document.getElementById(notifySettings.overlayID);
                    if (removeOverlay && removeOverlay.parentNode !== null) removeOverlay.parentNode.removeChild(removeOverlay);
                }
                clearTimeout(timeoutRemove);
            };
            // remove notify elm and wrapper: end
            // if has close button and callbackOrOptions is not a function: begin
            if (newNotifySettings.closeButton && typeof callbackOrOptions !== "function") {
                var closeButtonElm = window1.document.getElementById(ntflxNotify.id).querySelector("span.nx-close-button");
                closeButtonElm.addEventListener("click", function() {
                    hideNotifyElementsAndOverlay();
                    var clickToCloseTimeout = setTimeout(function() {
                        removeNotifyElmentsAndWrapper();
                        clearTimeout(clickToCloseTimeout);
                    }, newNotifySettings.cssAnimationDuration);
                });
            }
            // if has close button and callbackOrOptions is not a function: end
            // if callbackOrOptions or click to close: begin
            if (typeof callbackOrOptions === "function" || newNotifySettings.clickToClose) eachNotifyElement.addEventListener("click", function() {
                if (typeof callbackOrOptions === "function") callbackOrOptions();
                hideNotifyElementsAndOverlay();
                var callbackTimeout = setTimeout(function() {
                    removeNotifyElmentsAndWrapper();
                    clearTimeout(callbackTimeout);
                }, newNotifySettings.cssAnimationDuration);
            });
            // if callbackOrOptions or click to close: end
            // else auto remove: begin
            if (!newNotifySettings.closeButton && typeof callbackOrOptions !== "function") {
                // auto remove: begin
                var autoRemove = function() {
                    timeoutHide = setTimeout(function() {
                        hideNotifyElementsAndOverlay();
                    }, newNotifySettings.timeout);
                    timeoutRemove = setTimeout(function() {
                        removeNotifyElmentsAndWrapper();
                    }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
                };
                autoRemove();
                // auto remove: end
                // pause auto remove: begin
                if (newNotifySettings.pauseOnHover) {
                    eachNotifyElement.addEventListener("mouseenter", function() {
                        eachNotifyElement.classList.add("nx-paused");
                        clearTimeout(timeoutHide);
                        clearTimeout(timeoutRemove);
                    });
                    eachNotifyElement.addEventListener("mouseleave", function() {
                        eachNotifyElement.classList.remove("nx-paused");
                        autoRemove();
                    });
                }
            // pause auto remove: end
            }
        // else auto remove: end
        }
        // remove by timeout or click: end
        // notify - show only the last one: begin
        if (newNotifySettings.showOnlyTheLastOne && notifyCreateCounter > 0) {
            var allNotifyElmNotTheLastOne = window1.document.querySelectorAll("[id^=" + newNotifySettings.ID + "-]:not([id=" + newNotifySettings.ID + "-" + notifyCreateCounter + "])");
            for(var i = 0; i < allNotifyElmNotTheLastOne.length; i++){
                var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
                if (eachNotifyElmNotLastOne.parentNode !== null) eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
            }
        }
        // notify - show only the last one: end
        // extend new settings with the backup settings
        newNotifySettings = commonExtendOptions(true, newNotifySettings, newNotifySettingsBackup);
    };
    // NOTIFY: Create: end
    var Notiflix = {
        Notify: {
            // Init
            init: function(userNotifyOptions) {
                // extend options
                newNotifySettings = commonExtendOptions(true, notifySettings, userNotifyOptions);
                // internal css if exist
                commonSetInternalCSSCodes(notifyGetInternalCSSCodes, "NotiflixNotifyInternalCSS");
            },
            // Merge First Init
            merge: function(userNotifyExtendOptions) {
                // if initialized already
                if (newNotifySettings) newNotifySettings = commonExtendOptions(true, newNotifySettings, userNotifyExtendOptions);
                else {
                    commonConsoleError("You have to initialize the Notify module before call Merge function.");
                    return false;
                }
            },
            // Success
            success: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Success, message, callbackOrOptions, options);
            },
            // Failure
            failure: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Failure, message, callbackOrOptions, options);
            },
            // Warning
            warning: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Warning, message, callbackOrOptions, options);
            },
            // Info
            info: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Info, message, callbackOrOptions, options);
            }
        }
    };
    if (typeof window1.Notiflix === "object") return commonExtendOptions(true, window1.Notiflix, {
        Notify: Notiflix.Notify
    });
    else return {
        Notify: Notiflix.Notify
    };
});

},{}],"lzHUr":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function generateID() {
        return Math.random().toString(36).substring(2, 10);
    }
    function hasClassInTree(element, className) {
        function hasClass(e, c) {
            if (c && e && e.classList && e.classList.contains(c)) return e;
            if (c && e && e.dataset && e.dataset.id && e.dataset.id === className) return e;
            return null;
        }
        function parentByClass(e, c) {
            if (!e || e === document) return null;
            else if (hasClass(e, c)) return e;
            else return parentByClass(e.parentNode, c);
        }
        return hasClass(element, className) || parentByClass(element, className);
    }
    function debounce(func, wait = 50, immediate = false) {
        let timeout;
        return function(...args) {
            const context = self;
            const later = ()=>{
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    function isEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    function kebabCase(str) {
        const result = str.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, (match)=>"-" + match.toLowerCase());
        return str[0] === str[0].toUpperCase() ? result.substring(1) : result;
    }
    class Settings {
        constructor(settings){
            this.id = "";
            this.style = "";
            this.class = [];
            this.isMultiple = false;
            this.isOpen = false;
            this.isFullOpen = false;
            this.intervalMove = null;
            if (!settings) settings = {};
            this.id = "ss-" + generateID();
            this.style = settings.style || "";
            this.class = settings.class || [];
            this.disabled = settings.disabled !== undefined ? settings.disabled : false;
            this.alwaysOpen = settings.alwaysOpen !== undefined ? settings.alwaysOpen : false;
            this.showSearch = settings.showSearch !== undefined ? settings.showSearch : true;
            this.searchPlaceholder = settings.searchPlaceholder || "Search";
            this.searchText = settings.searchText || "No Results";
            this.searchingText = settings.searchingText || "Searching...";
            this.searchHighlight = settings.searchHighlight !== undefined ? settings.searchHighlight : false;
            this.closeOnSelect = settings.closeOnSelect !== undefined ? settings.closeOnSelect : true;
            this.contentLocation = settings.contentLocation || document.body;
            this.contentPosition = settings.contentPosition || "absolute";
            this.openPosition = settings.openPosition || "auto";
            this.placeholderText = settings.placeholderText !== undefined ? settings.placeholderText : "Select Value";
            this.allowDeselect = settings.allowDeselect !== undefined ? settings.allowDeselect : false;
            this.hideSelected = settings.hideSelected !== undefined ? settings.hideSelected : false;
            this.showOptionTooltips = settings.showOptionTooltips !== undefined ? settings.showOptionTooltips : false;
            this.minSelected = settings.minSelected || 0;
            this.maxSelected = settings.maxSelected || 1000;
            this.timeoutDelay = settings.timeoutDelay || 200;
            this.maxValuesShown = settings.maxValuesShown || 20;
            this.maxValuesMessage = settings.maxValuesMessage || "{number} selected";
        }
    }
    class Optgroup {
        constructor(optgroup){
            this.id = !optgroup.id || optgroup.id === "" ? generateID() : optgroup.id;
            this.label = optgroup.label || "";
            this.selectAll = optgroup.selectAll === undefined ? false : optgroup.selectAll;
            this.closable = optgroup.closable || "off";
            this.options = [];
            if (optgroup.options) for (const o of optgroup.options)this.options.push(new Option(o));
        }
    }
    class Option {
        constructor(option){
            this.id = !option.id || option.id === "" ? generateID() : option.id;
            this.value = option.value === undefined ? option.text : option.value;
            this.text = option.text || "";
            this.html = option.html || "";
            this.selected = option.selected !== undefined ? option.selected : false;
            this.display = option.display !== undefined ? option.display : true;
            this.disabled = option.disabled !== undefined ? option.disabled : false;
            this.mandatory = option.mandatory !== undefined ? option.mandatory : false;
            this.placeholder = option.placeholder !== undefined ? option.placeholder : false;
            this.class = option.class || "";
            this.style = option.style || "";
            this.data = option.data || {};
        }
    }
    class Store {
        constructor(type, data){
            this.selectType = "single";
            this.data = [];
            this.selectType = type;
            this.setData(data);
        }
        validateDataArray(data) {
            if (!Array.isArray(data)) return new Error("Data must be an array");
            for (let dataObj of data){
                if (dataObj instanceof Optgroup || "label" in dataObj) {
                    if (!("label" in dataObj)) return new Error("Optgroup must have a label");
                    if ("options" in dataObj && dataObj.options) {
                        for (let option of dataObj.options)return this.validateOption(option);
                    }
                } else if (dataObj instanceof Option || "text" in dataObj) return this.validateOption(dataObj);
                else return new Error("Data object must be a valid optgroup or option");
            }
            return null;
        }
        validateOption(option) {
            if (!("text" in option)) return new Error("Option must have a text");
            return null;
        }
        partialToFullData(data) {
            let dataFinal = [];
            data.forEach((dataObj)=>{
                if (dataObj instanceof Optgroup || "label" in dataObj) {
                    let optOptions = [];
                    if ("options" in dataObj && dataObj.options) dataObj.options.forEach((option)=>{
                        optOptions.push(new Option(option));
                    });
                    if (optOptions.length > 0) dataFinal.push(new Optgroup(dataObj));
                }
                if (dataObj instanceof Option || "text" in dataObj) dataFinal.push(new Option(dataObj));
            });
            return dataFinal;
        }
        setData(data) {
            this.data = this.partialToFullData(data);
            if (this.selectType === "single") this.setSelectedBy("value", this.getSelected());
        }
        getData() {
            return this.filter(null, true);
        }
        getDataOptions() {
            return this.filter(null, false);
        }
        addOption(option) {
            this.setData(this.getData().concat(new Option(option)));
        }
        setSelectedBy(selectedType, selectedValues) {
            let firstOption = null;
            let hasSelected = false;
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup) for (let option of dataObj.options){
                    if (!firstOption) firstOption = option;
                    option.selected = hasSelected ? false : selectedValues.includes(option[selectedType]);
                    if (option.selected && this.selectType === "single") hasSelected = true;
                }
                if (dataObj instanceof Option) {
                    if (!firstOption) firstOption = dataObj;
                    dataObj.selected = hasSelected ? false : selectedValues.includes(dataObj[selectedType]);
                    if (dataObj.selected && this.selectType === "single") hasSelected = true;
                }
            }
            if (this.selectType === "single" && firstOption && !hasSelected) firstOption.selected = true;
        }
        getSelected() {
            let selectedOptions = this.getSelectedOptions();
            let selectedValues = [];
            selectedOptions.forEach((option)=>{
                selectedValues.push(option.value);
            });
            return selectedValues;
        }
        getSelectedOptions() {
            return this.filter((opt)=>{
                return opt.selected;
            }, false);
        }
        getSelectedIDs() {
            let selectedOptions = this.getSelectedOptions();
            let selectedIDs = [];
            selectedOptions.forEach((op)=>{
                selectedIDs.push(op.id);
            });
            return selectedIDs;
        }
        getOptgroupByID(id) {
            for (let dataObj of this.data){
                if (dataObj instanceof Optgroup && dataObj.id === id) return dataObj;
            }
            return null;
        }
        getOptionByID(id) {
            let options = this.filter((opt)=>{
                return opt.id === id;
            }, false);
            return options.length ? options[0] : null;
        }
        search(search, searchFilter) {
            search = search.trim();
            if (search === "") return this.getData();
            return this.filter((opt)=>{
                return searchFilter(opt, search);
            }, true);
        }
        filter(filter, includeOptgroup) {
            const dataSearch = [];
            this.data.forEach((dataObj)=>{
                if (dataObj instanceof Optgroup) {
                    let optOptions = [];
                    dataObj.options.forEach((option)=>{
                        if (!filter || filter(option)) {
                            if (!includeOptgroup) dataSearch.push(new Option(option));
                            else optOptions.push(new Option(option));
                        }
                    });
                    if (optOptions.length > 0) {
                        let optgroup = new Optgroup(dataObj);
                        optgroup.options = optOptions;
                        dataSearch.push(optgroup);
                    }
                }
                if (dataObj instanceof Option) {
                    if (!filter || filter(dataObj)) dataSearch.push(new Option(dataObj));
                }
            });
            return dataSearch;
        }
        getSelectType() {
            return this.selectType;
        }
    }
    class Render {
        constructor(settings, store, callbacks){
            this.classes = {
                main: "ss-main",
                placeholder: "ss-placeholder",
                values: "ss-values",
                single: "ss-single",
                max: "ss-max",
                value: "ss-value",
                valueText: "ss-value-text",
                valueDelete: "ss-value-delete",
                valueOut: "ss-value-out",
                deselect: "ss-deselect",
                deselectPath: "M10,10 L90,90 M10,90 L90,10",
                arrow: "ss-arrow",
                arrowClose: "M10,30 L50,70 L90,30",
                arrowOpen: "M10,70 L50,30 L90,70",
                content: "ss-content",
                openAbove: "ss-open-above",
                openBelow: "ss-open-below",
                search: "ss-search",
                searchHighlighter: "ss-search-highlight",
                searching: "ss-searching",
                addable: "ss-addable",
                addablePath: "M50,10 L50,90 M10,50 L90,50",
                list: "ss-list",
                optgroup: "ss-optgroup",
                optgroupLabel: "ss-optgroup-label",
                optgroupLabelText: "ss-optgroup-label-text",
                optgroupActions: "ss-optgroup-actions",
                optgroupSelectAll: "ss-selectall",
                optgroupSelectAllBox: "M60,10 L10,10 L10,90 L90,90 L90,50",
                optgroupSelectAllCheck: "M30,45 L50,70 L90,10",
                optgroupClosable: "ss-closable",
                option: "ss-option",
                optionDelete: "M10,10 L90,90 M10,90 L90,10",
                highlighted: "ss-highlighted",
                open: "ss-open",
                close: "ss-close",
                selected: "ss-selected",
                error: "ss-error",
                disabled: "ss-disabled",
                hide: "ss-hide"
            };
            this.store = store;
            this.settings = settings;
            this.callbacks = callbacks;
            this.main = this.mainDiv();
            this.content = this.contentDiv();
            this.updateClassStyles();
            this.updateAriaAttributes();
            this.settings.contentLocation.appendChild(this.content.main);
        }
        enable() {
            this.main.main.classList.remove(this.classes.disabled);
            this.content.search.input.disabled = false;
        }
        disable() {
            this.main.main.classList.add(this.classes.disabled);
            this.content.search.input.disabled = true;
        }
        open() {
            this.main.arrow.path.setAttribute("d", this.classes.arrowOpen);
            this.main.main.classList.add(this.settings.openPosition === "up" ? this.classes.openAbove : this.classes.openBelow);
            this.main.main.setAttribute("aria-expanded", "true");
            this.moveContent();
            const selectedOptions = this.store.getSelectedOptions();
            if (selectedOptions.length) {
                const selectedId = selectedOptions[selectedOptions.length - 1].id;
                const selectedOption = this.content.list.querySelector('[data-id="' + selectedId + '"]');
                if (selectedOption) this.ensureElementInView(this.content.list, selectedOption);
            }
        }
        close() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.setAttribute("aria-expanded", "false");
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.main.arrow.path.setAttribute("d", this.classes.arrowClose);
        }
        updateClassStyles() {
            this.main.main.className = "";
            this.main.main.removeAttribute("style");
            this.content.main.className = "";
            this.content.main.removeAttribute("style");
            this.main.main.classList.add(this.classes.main);
            this.content.main.classList.add(this.classes.content);
            if (this.settings.style !== "") {
                this.main.main.style.cssText = this.settings.style;
                this.content.main.style.cssText = this.settings.style;
            }
            if (this.settings.class.length) {
                for (const c of this.settings.class)if (c.trim() !== "") {
                    this.main.main.classList.add(c.trim());
                    this.content.main.classList.add(c.trim());
                }
            }
            if (this.settings.contentPosition === "relative") this.content.main.classList.add("ss-" + this.settings.contentPosition);
        }
        updateAriaAttributes() {
            this.main.main.role = "combobox";
            this.main.main.setAttribute("aria-haspopup", "listbox");
            this.main.main.setAttribute("aria-controls", this.content.main.id);
            this.main.main.setAttribute("aria-expanded", "false");
            this.content.main.setAttribute("role", "listbox");
        }
        mainDiv() {
            var _a;
            const main = document.createElement("div");
            main.dataset.id = this.settings.id;
            main.id = this.settings.id;
            main.tabIndex = 0;
            main.onkeydown = (e)=>{
                switch(e.key){
                    case "ArrowUp":
                    case "ArrowDown":
                        this.callbacks.open();
                        e.key === "ArrowDown" ? this.highlight("down") : this.highlight("up");
                        return false;
                    case "Tab":
                        this.callbacks.close();
                        return true;
                    case "Enter":
                    case " ":
                        this.callbacks.open();
                        const highlighted = this.content.list.querySelector("." + this.classes.highlighted);
                        if (highlighted) highlighted.click();
                        return false;
                    case "Escape":
                        this.callbacks.close();
                        return false;
                }
            };
            main.onclick = (e)=>{
                if (this.settings.disabled) return;
                this.settings.isOpen ? this.callbacks.close() : this.callbacks.open();
            };
            const values = document.createElement("div");
            values.classList.add(this.classes.values);
            main.appendChild(values);
            const deselect = document.createElement("div");
            deselect.classList.add(this.classes.deselect);
            const selectedOptions = (_a = this.store) === null || _a === void 0 ? void 0 : _a.getSelectedOptions();
            if (!this.settings.allowDeselect || this.settings.isMultiple && selectedOptions && selectedOptions.length <= 0) deselect.classList.add(this.classes.hide);
            else deselect.classList.remove(this.classes.hide);
            deselect.onclick = (e)=>{
                e.stopPropagation();
                if (this.settings.disabled) return;
                let shouldDelete = true;
                const before = this.store.getSelectedOptions();
                const after = [];
                if (this.callbacks.beforeChange) shouldDelete = this.callbacks.beforeChange(after, before) === true;
                if (shouldDelete) {
                    if (this.settings.isMultiple) {
                        this.callbacks.setSelected([], false);
                        this.updateDeselectAll();
                    } else this.callbacks.setSelected([
                        ""
                    ], false);
                    if (this.settings.closeOnSelect) this.callbacks.close();
                    if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                }
            };
            const deselectSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            deselectSvg.setAttribute("viewBox", "0 0 100 100");
            const deselectPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            deselectPath.setAttribute("d", this.classes.deselectPath);
            deselectSvg.appendChild(deselectPath);
            deselect.appendChild(deselectSvg);
            main.appendChild(deselect);
            const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            arrow.classList.add(this.classes.arrow);
            arrow.setAttribute("viewBox", "0 0 100 100");
            const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            arrowPath.setAttribute("d", this.classes.arrowClose);
            if (this.settings.alwaysOpen) arrow.classList.add(this.classes.hide);
            arrow.appendChild(arrowPath);
            main.appendChild(arrow);
            return {
                main: main,
                values: values,
                deselect: {
                    main: deselect,
                    svg: deselectSvg,
                    path: deselectPath
                },
                arrow: {
                    main: arrow,
                    path: arrowPath
                }
            };
        }
        mainFocus(eventType) {
            if (eventType !== "click") this.main.main.focus({
                preventScroll: true
            });
        }
        placeholder() {
            const placeholderOption = this.store.filter((o)=>o.placeholder, false);
            let placeholderText = this.settings.placeholderText;
            if (placeholderOption.length) {
                if (placeholderOption[0].html !== "") placeholderText = placeholderOption[0].html;
                else if (placeholderOption[0].text !== "") placeholderText = placeholderOption[0].text;
            }
            const placeholder = document.createElement("div");
            placeholder.classList.add(this.classes.placeholder);
            placeholder.innerHTML = placeholderText;
            return placeholder;
        }
        renderValues() {
            if (!this.settings.isMultiple) {
                this.renderSingleValue();
                return;
            }
            this.renderMultipleValues();
        }
        renderSingleValue() {
            const selected = this.store.filter((o)=>{
                return o.selected && !o.placeholder;
            }, false);
            const selectedSingle = selected.length > 0 ? selected[0] : null;
            if (!selectedSingle) this.main.values.innerHTML = this.placeholder().outerHTML;
            else {
                const singleValue = document.createElement("div");
                singleValue.classList.add(this.classes.single);
                if (selectedSingle.html) singleValue.innerHTML = selectedSingle.html;
                else singleValue.innerText = selectedSingle.text;
                this.main.values.innerHTML = singleValue.outerHTML;
            }
            if (!this.settings.allowDeselect || !selected.length) this.main.deselect.main.classList.add(this.classes.hide);
            else this.main.deselect.main.classList.remove(this.classes.hide);
        }
        renderMultipleValues() {
            let currentNodes = this.main.values.childNodes;
            let selectedOptions = this.store.filter((opt)=>{
                return opt.selected && opt.display;
            }, false);
            if (selectedOptions.length === 0) {
                this.main.values.innerHTML = this.placeholder().outerHTML;
                return;
            } else {
                const placeholder = this.main.values.querySelector("." + this.classes.placeholder);
                if (placeholder) placeholder.remove();
            }
            if (selectedOptions.length > this.settings.maxValuesShown) {
                const singleValue = document.createElement("div");
                singleValue.classList.add(this.classes.max);
                singleValue.textContent = this.settings.maxValuesMessage.replace("{number}", selectedOptions.length.toString());
                this.main.values.innerHTML = singleValue.outerHTML;
                return;
            } else {
                const maxValuesMessage = this.main.values.querySelector("." + this.classes.max);
                if (maxValuesMessage) maxValuesMessage.remove();
            }
            let removeNodes = [];
            for(let i = 0; i < currentNodes.length; i++){
                const node = currentNodes[i];
                const id = node.getAttribute("data-id");
                if (id) {
                    const found = selectedOptions.filter((opt)=>{
                        return opt.id === id;
                    }, false);
                    if (!found.length) removeNodes.push(node);
                }
            }
            for (const n of removeNodes){
                n.classList.add(this.classes.valueOut);
                setTimeout(()=>{
                    if (this.main.values.hasChildNodes() && this.main.values.contains(n)) this.main.values.removeChild(n);
                }, 100);
            }
            currentNodes = this.main.values.childNodes;
            for(let d = 0; d < selectedOptions.length; d++){
                let shouldAdd = true;
                for(let i = 0; i < currentNodes.length; i++)if (selectedOptions[d].id === String(currentNodes[i].dataset.id)) shouldAdd = false;
                if (shouldAdd) {
                    if (currentNodes.length === 0) this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
                    else if (d === 0) this.main.values.insertBefore(this.multipleValue(selectedOptions[d]), currentNodes[d]);
                    else currentNodes[d - 1].insertAdjacentElement("afterend", this.multipleValue(selectedOptions[d]));
                }
            }
            this.updateDeselectAll();
        }
        multipleValue(option) {
            const value = document.createElement("div");
            value.classList.add(this.classes.value);
            value.dataset.id = option.id;
            const text = document.createElement("div");
            text.classList.add(this.classes.valueText);
            text.innerText = option.text;
            value.appendChild(text);
            if (!option.mandatory) {
                const deleteDiv = document.createElement("div");
                deleteDiv.classList.add(this.classes.valueDelete);
                deleteDiv.onclick = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.settings.disabled) return;
                    let shouldDelete = true;
                    const before = this.store.getSelectedOptions();
                    const after = before.filter((o)=>{
                        return o.selected && o.id !== option.id;
                    }, true);
                    if (this.settings.minSelected && after.length < this.settings.minSelected) return;
                    if (this.callbacks.beforeChange) shouldDelete = this.callbacks.beforeChange(after, before) === true;
                    if (shouldDelete) {
                        let selectedValues = [];
                        for (const o of after){
                            if (o instanceof Optgroup) for (const c of o.options)selectedValues.push(c.value);
                            if (o instanceof Option) selectedValues.push(o.value);
                        }
                        this.callbacks.setSelected(selectedValues, false);
                        if (this.settings.closeOnSelect) this.callbacks.close();
                        if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                        this.updateDeselectAll();
                    }
                };
                const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                deleteSvg.setAttribute("viewBox", "0 0 100 100");
                const deletePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                deletePath.setAttribute("d", this.classes.optionDelete);
                deleteSvg.appendChild(deletePath);
                deleteDiv.appendChild(deleteSvg);
                value.appendChild(deleteDiv);
            }
            return value;
        }
        contentDiv() {
            const main = document.createElement("div");
            main.dataset.id = this.settings.id;
            main.id = this.settings.id;
            const search = this.searchDiv();
            main.appendChild(search.main);
            const list = this.listDiv();
            main.appendChild(list);
            return {
                main: main,
                search: search,
                list: list
            };
        }
        moveContent() {
            if (this.settings.contentPosition === "relative") {
                this.moveContentBelow();
                return;
            }
            if (this.settings.openPosition === "down") {
                this.moveContentBelow();
                return;
            } else if (this.settings.openPosition === "up") {
                this.moveContentAbove();
                return;
            }
            if (this.putContent() === "up") this.moveContentAbove();
            else this.moveContentBelow();
        }
        searchDiv() {
            const main = document.createElement("div");
            const input = document.createElement("input");
            const addable = document.createElement("div");
            main.classList.add(this.classes.search);
            const searchReturn = {
                main,
                input
            };
            if (!this.settings.showSearch) {
                main.classList.add(this.classes.hide);
                input.readOnly = true;
            }
            input.type = "search";
            input.placeholder = this.settings.searchPlaceholder;
            input.tabIndex = -1;
            input.setAttribute("aria-label", this.settings.searchPlaceholder);
            input.setAttribute("autocapitalize", "off");
            input.setAttribute("autocomplete", "off");
            input.setAttribute("autocorrect", "off");
            input.oninput = debounce((e)=>{
                this.callbacks.search(e.target.value);
            }, 100);
            input.onkeydown = (e)=>{
                switch(e.key){
                    case "ArrowUp":
                    case "ArrowDown":
                        e.key === "ArrowDown" ? this.highlight("down") : this.highlight("up");
                        return false;
                    case "Tab":
                        this.callbacks.close();
                        return true;
                    case "Escape":
                        this.callbacks.close();
                        return false;
                    case "Enter":
                    case " ":
                        if (this.callbacks.addable && e.ctrlKey) {
                            addable.click();
                            return false;
                        } else {
                            const highlighted = this.content.list.querySelector("." + this.classes.highlighted);
                            if (highlighted) {
                                highlighted.click();
                                return false;
                            }
                        }
                        return true;
                }
            };
            main.appendChild(input);
            if (this.callbacks.addable) {
                addable.classList.add(this.classes.addable);
                const plus = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                plus.setAttribute("viewBox", "0 0 100 100");
                const plusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
                plusPath.setAttribute("d", this.classes.addablePath);
                plus.appendChild(plusPath);
                addable.appendChild(plus);
                addable.onclick = (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if (!this.callbacks.addable) return;
                    const inputValue = this.content.search.input.value.trim();
                    if (inputValue === "") {
                        this.content.search.input.focus();
                        return;
                    }
                    const runFinish = (oo)=>{
                        let newOption = new Option(oo);
                        this.callbacks.addOption(newOption);
                        if (this.settings.isMultiple) {
                            let values = this.store.getSelected();
                            values.push(newOption.value);
                            this.callbacks.setSelected(values, true);
                        } else this.callbacks.setSelected([
                            newOption.value
                        ], true);
                        this.callbacks.search("");
                        if (this.settings.closeOnSelect) setTimeout(()=>{
                            this.callbacks.close();
                        }, 100);
                    };
                    const addableValue = this.callbacks.addable(inputValue);
                    if (addableValue === false || addableValue === undefined || addableValue === null) return;
                    if (addableValue instanceof Promise) addableValue.then((value)=>{
                        if (typeof value === "string") runFinish({
                            text: value,
                            value: value
                        });
                        else runFinish(value);
                    });
                    else if (typeof addableValue === "string") runFinish({
                        text: addableValue,
                        value: addableValue
                    });
                    else runFinish(addableValue);
                    return;
                };
                main.appendChild(addable);
                searchReturn.addable = {
                    main: addable,
                    svg: plus,
                    path: plusPath
                };
            }
            return searchReturn;
        }
        searchFocus() {
            this.content.search.input.focus();
        }
        getOptions(notPlaceholder = false, notDisabled = false, notHidden = false) {
            let query = "." + this.classes.option;
            if (notPlaceholder) query += ":not(." + this.classes.placeholder + ")";
            if (notDisabled) query += ":not(." + this.classes.disabled + ")";
            if (notHidden) query += ":not(." + this.classes.hide + ")";
            return Array.from(this.content.list.querySelectorAll(query));
        }
        highlight(dir) {
            const options = this.getOptions(true, true, true);
            if (options.length === 0) return;
            if (options.length === 1) {
                if (!options[0].classList.contains(this.classes.highlighted)) {
                    options[0].classList.add(this.classes.highlighted);
                    return;
                }
            }
            for(let i = 0; i < options.length; i++)if (options[i].classList.contains(this.classes.highlighted)) {
                const prevOption = options[i];
                prevOption.classList.remove(this.classes.highlighted);
                const prevParent = prevOption.parentElement;
                if (prevParent && prevParent.classList.contains(this.classes.open)) {
                    const optgroupLabel = prevParent.querySelector("." + this.classes.optgroupLabel);
                    if (optgroupLabel) optgroupLabel.click();
                }
                let selectOption = options[dir === "down" ? i + 1 < options.length ? i + 1 : 0 : i - 1 >= 0 ? i - 1 : options.length - 1];
                selectOption.classList.add(this.classes.highlighted);
                this.ensureElementInView(this.content.list, selectOption);
                const selectParent = selectOption.parentElement;
                if (selectParent && selectParent.classList.contains(this.classes.close)) {
                    const optgroupLabel = selectParent.querySelector("." + this.classes.optgroupLabel);
                    if (optgroupLabel) optgroupLabel.click();
                }
                return;
            }
            options[dir === "down" ? 0 : options.length - 1].classList.add(this.classes.highlighted);
            this.ensureElementInView(this.content.list, options[dir === "down" ? 0 : options.length - 1]);
        }
        listDiv() {
            const options = document.createElement("div");
            options.classList.add(this.classes.list);
            return options;
        }
        renderError(error) {
            this.content.list.innerHTML = "";
            const errorDiv = document.createElement("div");
            errorDiv.classList.add(this.classes.error);
            errorDiv.textContent = error;
            this.content.list.appendChild(errorDiv);
        }
        renderSearching() {
            this.content.list.innerHTML = "";
            const searchingDiv = document.createElement("div");
            searchingDiv.classList.add(this.classes.searching);
            searchingDiv.textContent = this.settings.searchingText;
            this.content.list.appendChild(searchingDiv);
        }
        renderOptions(data) {
            this.content.list.innerHTML = "";
            if (data.length === 0) {
                const noResults = document.createElement("div");
                noResults.classList.add(this.classes.search);
                noResults.innerHTML = this.settings.searchText;
                this.content.list.appendChild(noResults);
                return;
            }
            for (const d of data){
                if (d instanceof Optgroup) {
                    const optgroupEl = document.createElement("div");
                    optgroupEl.classList.add(this.classes.optgroup);
                    const optgroupLabel = document.createElement("div");
                    optgroupLabel.classList.add(this.classes.optgroupLabel);
                    optgroupEl.appendChild(optgroupLabel);
                    const optgroupLabelText = document.createElement("div");
                    optgroupLabelText.classList.add(this.classes.optgroupLabelText);
                    optgroupLabelText.textContent = d.label;
                    optgroupLabel.appendChild(optgroupLabelText);
                    const optgroupActions = document.createElement("div");
                    optgroupActions.classList.add(this.classes.optgroupActions);
                    optgroupLabel.appendChild(optgroupActions);
                    if (this.settings.isMultiple && d.selectAll) {
                        const selectAll = document.createElement("div");
                        selectAll.classList.add(this.classes.optgroupSelectAll);
                        let allSelected = true;
                        for (const o of d.options)if (!o.selected) {
                            allSelected = false;
                            break;
                        }
                        if (allSelected) selectAll.classList.add(this.classes.selected);
                        const selectAllText = document.createElement("span");
                        selectAllText.textContent = "Select All";
                        selectAll.appendChild(selectAllText);
                        const selectAllSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        selectAllSvg.setAttribute("viewBox", "0 0 100 100");
                        selectAll.appendChild(selectAllSvg);
                        const selectAllBox = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        selectAllBox.setAttribute("d", this.classes.optgroupSelectAllBox);
                        selectAllSvg.appendChild(selectAllBox);
                        const selectAllCheck = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        selectAllCheck.setAttribute("d", this.classes.optgroupSelectAllCheck);
                        selectAllSvg.appendChild(selectAllCheck);
                        selectAll.addEventListener("click", (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            const currentSelected = this.store.getSelected();
                            if (allSelected) {
                                const newSelected = currentSelected.filter((s)=>{
                                    for (const o of d.options){
                                        if (s === o.value) return false;
                                    }
                                    return true;
                                });
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            } else {
                                const newSelected = currentSelected.concat(d.options.map((o)=>o.value));
                                this.callbacks.setSelected(newSelected, true);
                            }
                        });
                        optgroupActions.appendChild(selectAll);
                    }
                    if (d.closable !== "off") {
                        const optgroupClosable = document.createElement("div");
                        optgroupClosable.classList.add(this.classes.optgroupClosable);
                        const optgroupClosableSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        optgroupClosableSvg.setAttribute("viewBox", "0 0 100 100");
                        optgroupClosableSvg.classList.add(this.classes.arrow);
                        optgroupClosable.appendChild(optgroupClosableSvg);
                        const optgroupClosableArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        optgroupClosableSvg.appendChild(optgroupClosableArrow);
                        if (d.options.some((o)=>o.selected) || this.content.search.input.value.trim() !== "") {
                            optgroupClosable.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                        } else if (d.closable === "open") {
                            optgroupEl.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                        } else if (d.closable === "close") {
                            optgroupEl.classList.add(this.classes.close);
                            optgroupClosableArrow.setAttribute("d", this.classes.arrowClose);
                        }
                        optgroupLabel.addEventListener("click", (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            if (optgroupEl.classList.contains(this.classes.close)) {
                                optgroupEl.classList.remove(this.classes.close);
                                optgroupEl.classList.add(this.classes.open);
                                optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
                            } else {
                                optgroupEl.classList.remove(this.classes.open);
                                optgroupEl.classList.add(this.classes.close);
                                optgroupClosableArrow.setAttribute("d", this.classes.arrowClose);
                            }
                        });
                        optgroupActions.appendChild(optgroupClosable);
                    }
                    optgroupEl.appendChild(optgroupLabel);
                    for (const o of d.options)optgroupEl.appendChild(this.option(o));
                    this.content.list.appendChild(optgroupEl);
                }
                if (d instanceof Option) this.content.list.appendChild(this.option(d));
            }
        }
        option(option) {
            if (option.placeholder) {
                const placeholder = document.createElement("div");
                placeholder.classList.add(this.classes.option);
                placeholder.classList.add(this.classes.hide);
                return placeholder;
            }
            const optionEl = document.createElement("div");
            optionEl.dataset.id = option.id;
            optionEl.id = option.id;
            optionEl.classList.add(this.classes.option);
            optionEl.setAttribute("role", "option");
            if (option.class) option.class.split(" ").forEach((dataClass)=>{
                optionEl.classList.add(dataClass);
            });
            if (option.style) optionEl.style.cssText = option.style;
            if (this.settings.searchHighlight && this.content.search.input.value.trim() !== "") optionEl.innerHTML = this.highlightText(option.html !== "" ? option.html : option.text, this.content.search.input.value, this.classes.searchHighlighter);
            else if (option.html !== "") optionEl.innerHTML = option.html;
            else optionEl.textContent = option.text;
            if (this.settings.showOptionTooltips && optionEl.textContent) optionEl.setAttribute("title", optionEl.textContent);
            if (!option.display) optionEl.classList.add(this.classes.hide);
            if (option.disabled) optionEl.classList.add(this.classes.disabled);
            if (option.selected && this.settings.hideSelected) optionEl.classList.add(this.classes.hide);
            if (option.selected) {
                optionEl.classList.add(this.classes.selected);
                optionEl.setAttribute("aria-selected", "true");
                this.main.main.setAttribute("aria-activedescendant", optionEl.id);
            } else {
                optionEl.classList.remove(this.classes.selected);
                optionEl.setAttribute("aria-selected", "false");
            }
            optionEl.addEventListener("click", (e)=>{
                e.preventDefault();
                e.stopPropagation();
                const selectedOptions = this.store.getSelected();
                const element = e.currentTarget;
                const elementID = String(element.dataset.id);
                if (option.disabled || option.selected && !this.settings.allowDeselect) return;
                if (this.settings.isMultiple && this.settings.maxSelected <= selectedOptions.length && !option.selected || this.settings.isMultiple && this.settings.minSelected >= selectedOptions.length && option.selected) return;
                let shouldUpdate = false;
                const before = this.store.getSelectedOptions();
                let after = [];
                if (this.settings.isMultiple) {
                    if (option.selected) after = before.filter((o)=>o.id !== elementID);
                    else after = before.concat(option);
                }
                if (!this.settings.isMultiple) {
                    if (option.selected) after = [];
                    else after = [
                        option
                    ];
                }
                if (!this.callbacks.beforeChange) shouldUpdate = true;
                if (this.callbacks.beforeChange) {
                    if (this.callbacks.beforeChange(after, before) === false) shouldUpdate = false;
                    else shouldUpdate = true;
                }
                if (shouldUpdate) {
                    if (!this.store.getOptionByID(elementID)) this.callbacks.addOption(option);
                    this.callbacks.setSelected(after.map((o)=>o.value), false);
                    if (this.settings.closeOnSelect) this.callbacks.close();
                    if (this.callbacks.afterChange) this.callbacks.afterChange(after);
                }
            });
            return optionEl;
        }
        destroy() {
            this.main.main.remove();
            this.content.main.remove();
        }
        highlightText(str, search, className) {
            let completedString = str;
            const regex = new RegExp("(" + search.trim() + ")(?![^<]*>[^<>]*</)", "i");
            if (!str.match(regex)) return str;
            const matchStartPosition = str.match(regex).index;
            const matchEndPosition = matchStartPosition + str.match(regex)[0].toString().length;
            const originalTextFoundByRegex = str.substring(matchStartPosition, matchEndPosition);
            completedString = completedString.replace(regex, `<mark class="${className}">${originalTextFoundByRegex}</mark>`);
            return completedString;
        }
        moveContentAbove() {
            const mainHeight = this.main.main.offsetHeight;
            const contentHeight = this.content.main.offsetHeight;
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.classList.add(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.content.main.classList.add(this.classes.openAbove);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = "-" + (mainHeight + contentHeight - 1) + "px 0px 0px 0px";
            this.content.main.style.top = containerRect.top + containerRect.height + window.scrollY + "px";
            this.content.main.style.left = containerRect.left + window.scrollX + "px";
            this.content.main.style.width = containerRect.width + "px";
        }
        moveContentBelow() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.add(this.classes.openBelow);
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.add(this.classes.openBelow);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = "-1px 0px 0px 0px";
            if (this.settings.contentPosition !== "relative") {
                this.content.main.style.top = containerRect.top + containerRect.height + window.scrollY + "px";
                this.content.main.style.left = containerRect.left + window.scrollX + "px";
                this.content.main.style.width = containerRect.width + "px";
            }
        }
        ensureElementInView(container, element) {
            const cTop = container.scrollTop + container.offsetTop;
            const cBottom = cTop + container.clientHeight;
            const eTop = element.offsetTop;
            const eBottom = eTop + element.clientHeight;
            if (eTop < cTop) container.scrollTop -= cTop - eTop;
            else if (eBottom > cBottom) container.scrollTop += eBottom - cBottom;
        }
        putContent() {
            const mainHeight = this.main.main.offsetHeight;
            const mainRect = this.main.main.getBoundingClientRect();
            const contentHeight = this.content.main.offsetHeight;
            const spaceBelow = window.innerHeight - (mainRect.top + mainHeight);
            if (spaceBelow <= contentHeight) {
                if (mainRect.top > contentHeight) return "up";
                else return "down";
            }
            return "down";
        }
        updateDeselectAll() {
            if (!this.store || !this.settings) return;
            const selected = this.store.getSelectedOptions();
            const hasSelectedItems = selected && selected.length > 0;
            const isMultiple = this.settings.isMultiple;
            const allowDeselect = this.settings.allowDeselect;
            const deselectButton = this.main.deselect.main;
            const hideClass = this.classes.hide;
            if (allowDeselect && !(isMultiple && !hasSelectedItems)) deselectButton.classList.remove(hideClass);
            else deselectButton.classList.add(hideClass);
        }
    }
    class Select {
        constructor(select){
            this.listen = false;
            this.observer = null;
            this.select = select;
            this.select.addEventListener("change", this.valueChange.bind(this), {
                passive: true
            });
            this.observer = new MutationObserver(this.observeCall.bind(this));
            this.changeListen(true);
        }
        enable() {
            this.select.disabled = false;
        }
        disable() {
            this.select.disabled = true;
        }
        hideUI() {
            this.select.tabIndex = -1;
            this.select.style.display = "none";
            this.select.setAttribute("aria-hidden", "true");
        }
        showUI() {
            this.select.removeAttribute("tabindex");
            this.select.style.display = "";
            this.select.removeAttribute("aria-hidden");
        }
        changeListen(listen) {
            this.listen = listen;
            if (listen) {
                if (this.observer) this.observer.observe(this.select, {
                    subtree: true,
                    childList: true,
                    attributes: true
                });
            }
            if (!listen) {
                if (this.observer) this.observer.disconnect();
            }
        }
        valueChange(ev) {
            if (this.listen && this.onValueChange) this.onValueChange(this.getSelectedValues());
            return true;
        }
        observeCall(mutations) {
            if (!this.listen) return;
            let classChanged = false;
            let disabledChanged = false;
            let optgroupOptionChanged = false;
            for (const m of mutations){
                if (m.target === this.select) {
                    if (m.attributeName === "disabled") disabledChanged = true;
                    if (m.attributeName === "class") classChanged = true;
                }
                if (m.target.nodeName === "OPTGROUP" || m.target.nodeName === "OPTION") optgroupOptionChanged = true;
            }
            if (classChanged && this.onClassChange) this.onClassChange(this.select.className.split(" "));
            if (disabledChanged && this.onDisabledChange) {
                this.changeListen(false);
                this.onDisabledChange(this.select.disabled);
                this.changeListen(true);
            }
            if (optgroupOptionChanged && this.onOptionsChange) {
                this.changeListen(false);
                this.onOptionsChange(this.getData());
                this.changeListen(true);
            }
        }
        getData() {
            let data = [];
            const nodes = this.select.childNodes;
            for (const n of nodes){
                if (n.nodeName === "OPTGROUP") data.push(this.getDataFromOptgroup(n));
                if (n.nodeName === "OPTION") data.push(this.getDataFromOption(n));
            }
            return data;
        }
        getDataFromOptgroup(optgroup) {
            let data = {
                id: optgroup.id,
                label: optgroup.label,
                selectAll: optgroup.dataset ? optgroup.dataset.selectall === "true" : false,
                closable: optgroup.dataset ? optgroup.dataset.closable : "off",
                options: []
            };
            const options = optgroup.childNodes;
            for (const o of options)if (o.nodeName === "OPTION") data.options.push(this.getDataFromOption(o));
            return data;
        }
        getDataFromOption(option) {
            return {
                id: option.id,
                value: option.value,
                text: option.text,
                html: option.dataset && option.dataset.html ? option.dataset.html : "",
                selected: option.selected,
                display: option.style.display === "none" ? false : true,
                disabled: option.disabled,
                mandatory: option.dataset ? option.dataset.mandatory === "true" : false,
                placeholder: option.dataset.placeholder === "true",
                class: option.className,
                style: option.style.cssText,
                data: option.dataset
            };
        }
        getSelectedValues() {
            let values = [];
            const options = this.select.childNodes;
            for (const o of options){
                if (o.nodeName === "OPTGROUP") {
                    const optgroupOptions = o.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === "OPTION") {
                        const option = oo;
                        if (option.selected) values.push(option.value);
                    }
                }
                if (o.nodeName === "OPTION") {
                    const option = o;
                    if (option.selected) values.push(option.value);
                }
            }
            return values;
        }
        setSelected(value) {
            this.changeListen(false);
            const options = this.select.childNodes;
            for (const o of options){
                if (o.nodeName === "OPTGROUP") {
                    const optgroup = o;
                    const optgroupOptions = optgroup.childNodes;
                    for (const oo of optgroupOptions)if (oo.nodeName === "OPTION") {
                        const option = oo;
                        option.selected = value.includes(option.value);
                    }
                }
                if (o.nodeName === "OPTION") {
                    const option = o;
                    option.selected = value.includes(option.value);
                }
            }
            this.changeListen(true);
        }
        updateSelect(id, style, classes) {
            this.changeListen(false);
            if (id) this.select.dataset.id = id;
            if (style) this.select.style.cssText = style;
            if (classes) {
                this.select.className = "";
                classes.forEach((c)=>{
                    if (c.trim() !== "") this.select.classList.add(c.trim());
                });
            }
            this.changeListen(true);
        }
        updateOptions(data) {
            this.changeListen(false);
            this.select.innerHTML = "";
            for (const d of data){
                if (d instanceof Optgroup) this.select.appendChild(this.createOptgroup(d));
                if (d instanceof Option) this.select.appendChild(this.createOption(d));
            }
            this.select.dispatchEvent(new Event("change"));
            this.changeListen(true);
        }
        createOptgroup(optgroup) {
            const optgroupEl = document.createElement("optgroup");
            optgroupEl.id = optgroup.id;
            optgroupEl.label = optgroup.label;
            if (optgroup.selectAll) optgroupEl.dataset.selectAll = "true";
            if (optgroup.closable !== "off") optgroupEl.dataset.closable = optgroup.closable;
            if (optgroup.options) for (const o of optgroup.options)optgroupEl.appendChild(this.createOption(o));
            return optgroupEl;
        }
        createOption(info) {
            const optionEl = document.createElement("option");
            optionEl.id = info.id;
            optionEl.value = info.value;
            optionEl.innerHTML = info.text;
            if (info.html !== "") optionEl.setAttribute("data-html", info.html);
            if (info.selected) optionEl.selected = info.selected;
            if (info.disabled) optionEl.disabled = true;
            if (info.display === false) optionEl.style.display = "none";
            if (info.placeholder) optionEl.setAttribute("data-placeholder", "true");
            if (info.mandatory) optionEl.setAttribute("data-mandatory", "true");
            if (info.class) info.class.split(" ").forEach((optionClass)=>{
                optionEl.classList.add(optionClass);
            });
            if (info.data && typeof info.data === "object") Object.keys(info.data).forEach((key)=>{
                optionEl.setAttribute("data-" + kebabCase(key), info.data[key]);
            });
            return optionEl;
        }
        destroy() {
            this.changeListen(false);
            this.select.removeEventListener("change", this.valueChange.bind(this));
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
            delete this.select.dataset.id;
            this.showUI();
        }
    }
    class SlimSelect {
        constructor(config){
            var _a;
            this.events = {
                search: undefined,
                searchFilter: (opt, search)=>{
                    return opt.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
                },
                addable: undefined,
                beforeChange: undefined,
                afterChange: undefined,
                beforeOpen: undefined,
                afterOpen: undefined,
                beforeClose: undefined,
                afterClose: undefined
            };
            this.windowResize = debounce(()=>{
                if (!this.settings.isOpen && !this.settings.isFullOpen) return;
                this.render.moveContent();
            });
            this.windowScroll = debounce(()=>{
                if (!this.settings.isOpen && !this.settings.isFullOpen) return;
                this.render.moveContent();
            });
            this.documentClick = (e)=>{
                if (!this.settings.isOpen) return;
                if (e.target && !hasClassInTree(e.target, this.settings.id)) this.close(e.type);
            };
            this.windowVisibilityChange = ()=>{
                if (document.hidden) this.close();
            };
            this.selectEl = typeof config.select === "string" ? document.querySelector(config.select) : config.select;
            if (!this.selectEl) {
                if (config.events && config.events.error) config.events.error(new Error("Could not find select element"));
                return;
            }
            if (this.selectEl.tagName !== "SELECT") {
                if (config.events && config.events.error) config.events.error(new Error("Element isnt of type select"));
                return;
            }
            if (this.selectEl.dataset.ssid) this.destroy();
            this.settings = new Settings(config.settings);
            const debounceEvents = [
                "afterChange",
                "beforeOpen",
                "afterOpen",
                "beforeClose",
                "afterClose"
            ];
            for(const key in config.events){
                if (!config.events.hasOwnProperty(key)) continue;
                if (debounceEvents.indexOf(key) !== -1) this.events[key] = debounce(config.events[key], 100);
                else this.events[key] = config.events[key];
            }
            this.settings.disabled = ((_a = config.settings) === null || _a === void 0 ? void 0 : _a.disabled) ? config.settings.disabled : this.selectEl.disabled;
            this.settings.isMultiple = this.selectEl.multiple;
            this.settings.style = this.selectEl.style.cssText;
            this.settings.class = this.selectEl.className.split(" ");
            this.select = new Select(this.selectEl);
            this.select.updateSelect(this.settings.id, this.settings.style, this.settings.class);
            this.select.hideUI();
            this.select.onValueChange = (values)=>{
                this.setSelected(values);
            };
            this.select.onClassChange = (classes)=>{
                this.settings.class = classes;
                this.render.updateClassStyles();
            };
            this.select.onDisabledChange = (disabled)=>{
                if (disabled) this.disable();
                else this.enable();
            };
            this.select.onOptionsChange = (data)=>{
                this.setData(data);
            };
            this.store = new Store(this.settings.isMultiple ? "multiple" : "single", config.data ? config.data : this.select.getData());
            if (config.data) this.select.updateOptions(this.store.getData());
            const callbacks = {
                open: this.open.bind(this),
                close: this.close.bind(this),
                addable: this.events.addable ? this.events.addable : undefined,
                setSelected: this.setSelected.bind(this),
                addOption: this.addOption.bind(this),
                search: this.search.bind(this),
                beforeChange: this.events.beforeChange,
                afterChange: this.events.afterChange
            };
            this.render = new Render(this.settings, this.store, callbacks);
            this.render.renderValues();
            this.render.renderOptions(this.store.getData());
            const selectAriaLabel = this.selectEl.getAttribute("aria-label");
            const selectAriaLabelledBy = this.selectEl.getAttribute("aria-labelledby");
            if (selectAriaLabel) this.render.main.main.setAttribute("aria-label", selectAriaLabel);
            else if (selectAriaLabelledBy) this.render.main.main.setAttribute("aria-labelledby", selectAriaLabelledBy);
            if (this.selectEl.parentNode) this.selectEl.parentNode.insertBefore(this.render.main.main, this.selectEl.nextSibling);
            document.addEventListener("click", this.documentClick);
            window.addEventListener("resize", this.windowResize, false);
            if (this.settings.openPosition === "auto") window.addEventListener("scroll", this.windowScroll, false);
            document.addEventListener("visibilitychange", this.windowVisibilityChange);
            if (this.settings.disabled) this.disable();
            if (this.settings.alwaysOpen) this.open();
            this.selectEl.slim = this;
        }
        enable() {
            this.settings.disabled = false;
            this.select.enable();
            this.render.enable();
        }
        disable() {
            this.settings.disabled = true;
            this.select.disable();
            this.render.disable();
        }
        getData() {
            return this.store.getData();
        }
        setData(data) {
            const selected = this.store.getSelected();
            const err = this.store.validateDataArray(data);
            if (err) {
                if (this.events.error) this.events.error(err);
                return;
            }
            this.store.setData(data);
            const dataClean = this.store.getData();
            this.select.updateOptions(dataClean);
            this.render.renderValues();
            this.render.renderOptions(dataClean);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        getSelected() {
            return this.store.getSelected();
        }
        setSelected(value, runAfterChange = true) {
            const selected = this.store.getSelected();
            this.store.setSelectedBy("value", Array.isArray(value) ? value : [
                value
            ]);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            if (this.render.content.search.input.value !== "") this.search(this.render.content.search.input.value);
            else this.render.renderOptions(data);
            if (runAfterChange && this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        addOption(option) {
            const selected = this.store.getSelected();
            if (!this.store.getDataOptions().some((o)=>{
                var _a;
                return o.value === ((_a = option.value) !== null && _a !== void 0 ? _a : option.text);
            })) this.store.addOption(option);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            this.render.renderOptions(data);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) this.events.afterChange(this.store.getSelectedOptions());
        }
        open() {
            if (this.settings.disabled || this.settings.isOpen) return;
            if (this.events.beforeOpen) this.events.beforeOpen();
            this.render.open();
            if (this.settings.showSearch) this.render.searchFocus();
            this.settings.isOpen = true;
            setTimeout(()=>{
                if (this.events.afterOpen) this.events.afterOpen();
                if (this.settings.isOpen) this.settings.isFullOpen = true;
            }, this.settings.timeoutDelay);
            if (this.settings.contentPosition === "absolute") {
                if (this.settings.intervalMove) clearInterval(this.settings.intervalMove);
                this.settings.intervalMove = setInterval(this.render.moveContent.bind(this.render), 500);
            }
        }
        close(eventType = null) {
            if (!this.settings.isOpen || this.settings.alwaysOpen) return;
            if (this.events.beforeClose) this.events.beforeClose();
            this.render.close();
            if (this.render.content.search.input.value !== "") this.search("");
            this.render.mainFocus(eventType);
            this.settings.isOpen = false;
            this.settings.isFullOpen = false;
            setTimeout(()=>{
                if (this.events.afterClose) this.events.afterClose();
            }, this.settings.timeoutDelay);
            if (this.settings.intervalMove) clearInterval(this.settings.intervalMove);
        }
        search(value) {
            if (this.render.content.search.input.value !== value) this.render.content.search.input.value = value;
            if (!this.events.search) {
                this.render.renderOptions(value === "" ? this.store.getData() : this.store.search(value, this.events.searchFilter));
                return;
            }
            this.render.renderSearching();
            const searchResp = this.events.search(value, this.store.getSelectedOptions());
            if (searchResp instanceof Promise) {
                searchResp.then((data)=>{
                    this.render.renderOptions(this.store.partialToFullData(data));
                }).catch((err)=>{
                    this.render.renderError(typeof err === "string" ? err : err.message);
                });
                return;
            } else if (Array.isArray(searchResp)) this.render.renderOptions(this.store.partialToFullData(searchResp));
            else this.render.renderError("Search event must return a promise or an array of data");
        }
        destroy() {
            document.removeEventListener("click", this.documentClick);
            window.removeEventListener("resize", this.windowResize, false);
            if (this.settings.openPosition === "auto") window.removeEventListener("scroll", this.windowScroll, false);
            document.removeEventListener("visibilitychange", this.windowVisibilityChange);
            this.store.setData([]);
            this.render.destroy();
            this.select.destroy();
        }
    }
    return SlimSelect;
});

},{}]},["j9r0q","ebWYT"], "ebWYT", "parcelRequired7c6")

//# sourceMappingURL=index.739bf03c.js.map
