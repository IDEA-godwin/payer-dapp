"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+window-metadata@1.0.1";
exports.ids = ["vendor-chunks/@walletconnect+window-metadata@1.0.1"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@walletconnect+window-metadata@1.0.1/node_modules/@walletconnect/window-metadata/dist/cjs/index.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@walletconnect+window-metadata@1.0.1/node_modules/@walletconnect/window-metadata/dist/cjs/index.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getWindowMetadata = void 0;\nconst window_getters_1 = __webpack_require__(/*! @walletconnect/window-getters */ \"(ssr)/../../node_modules/.pnpm/@walletconnect+window-getters@1.0.1/node_modules/@walletconnect/window-getters/dist/cjs/index.js\");\nfunction getWindowMetadata() {\n    let doc;\n    let loc;\n    try {\n        doc = window_getters_1.getDocumentOrThrow();\n        loc = window_getters_1.getLocationOrThrow();\n    }\n    catch (e) {\n        return null;\n    }\n    function getIcons() {\n        const links = doc.getElementsByTagName(\"link\");\n        const icons = [];\n        for (let i = 0; i < links.length; i++) {\n            const link = links[i];\n            const rel = link.getAttribute(\"rel\");\n            if (rel) {\n                if (rel.toLowerCase().indexOf(\"icon\") > -1) {\n                    const href = link.getAttribute(\"href\");\n                    if (href) {\n                        if (href.toLowerCase().indexOf(\"https:\") === -1 &&\n                            href.toLowerCase().indexOf(\"http:\") === -1 &&\n                            href.indexOf(\"//\") !== 0) {\n                            let absoluteHref = loc.protocol + \"//\" + loc.host;\n                            if (href.indexOf(\"/\") === 0) {\n                                absoluteHref += href;\n                            }\n                            else {\n                                const path = loc.pathname.split(\"/\");\n                                path.pop();\n                                const finalPath = path.join(\"/\");\n                                absoluteHref += finalPath + \"/\" + href;\n                            }\n                            icons.push(absoluteHref);\n                        }\n                        else if (href.indexOf(\"//\") === 0) {\n                            const absoluteUrl = loc.protocol + href;\n                            icons.push(absoluteUrl);\n                        }\n                        else {\n                            icons.push(href);\n                        }\n                    }\n                }\n            }\n        }\n        return icons;\n    }\n    function getWindowMetadataOfAny(...args) {\n        const metaTags = doc.getElementsByTagName(\"meta\");\n        for (let i = 0; i < metaTags.length; i++) {\n            const tag = metaTags[i];\n            const attributes = [\"itemprop\", \"property\", \"name\"]\n                .map((target) => tag.getAttribute(target))\n                .filter((attr) => {\n                if (attr) {\n                    return args.includes(attr);\n                }\n                return false;\n            });\n            if (attributes.length && attributes) {\n                const content = tag.getAttribute(\"content\");\n                if (content) {\n                    return content;\n                }\n            }\n        }\n        return \"\";\n    }\n    function getName() {\n        let name = getWindowMetadataOfAny(\"name\", \"og:site_name\", \"og:title\", \"twitter:title\");\n        if (!name) {\n            name = doc.title;\n        }\n        return name;\n    }\n    function getDescription() {\n        const description = getWindowMetadataOfAny(\"description\", \"og:description\", \"twitter:description\", \"keywords\");\n        return description;\n    }\n    const name = getName();\n    const description = getDescription();\n    const url = loc.origin;\n    const icons = getIcons();\n    const meta = {\n        description,\n        url,\n        icons,\n        name,\n    };\n    return meta;\n}\nexports.getWindowMetadata = getWindowMetadata;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K3dpbmRvdy1tZXRhZGF0YUAxLjAuMS9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3Qvd2luZG93LW1ldGFkYXRhL2Rpc3QvY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHlCQUF5QjtBQUN6Qix5QkFBeUIsbUJBQU8sQ0FBQyxzS0FBK0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCIiwic291cmNlcyI6WyIvaG9tZS91ZG8vd29yay9wYXllci1kYXBwL25vZGVfbW9kdWxlcy8ucG5wbS9Ad2FsbGV0Y29ubmVjdCt3aW5kb3ctbWV0YWRhdGFAMS4wLjEvbm9kZV9tb2R1bGVzL0B3YWxsZXRjb25uZWN0L3dpbmRvdy1tZXRhZGF0YS9kaXN0L2Nqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0V2luZG93TWV0YWRhdGEgPSB2b2lkIDA7XG5jb25zdCB3aW5kb3dfZ2V0dGVyc18xID0gcmVxdWlyZShcIkB3YWxsZXRjb25uZWN0L3dpbmRvdy1nZXR0ZXJzXCIpO1xuZnVuY3Rpb24gZ2V0V2luZG93TWV0YWRhdGEoKSB7XG4gICAgbGV0IGRvYztcbiAgICBsZXQgbG9jO1xuICAgIHRyeSB7XG4gICAgICAgIGRvYyA9IHdpbmRvd19nZXR0ZXJzXzEuZ2V0RG9jdW1lbnRPclRocm93KCk7XG4gICAgICAgIGxvYyA9IHdpbmRvd19nZXR0ZXJzXzEuZ2V0TG9jYXRpb25PclRocm93KCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJY29ucygpIHtcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuICAgICAgICBjb25zdCBpY29ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaV07XG4gICAgICAgICAgICBjb25zdCByZWwgPSBsaW5rLmdldEF0dHJpYnV0ZShcInJlbFwiKTtcbiAgICAgICAgICAgIGlmIChyZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImljb25cIikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiaHR0cHM6XCIpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiaHR0cDpcIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZi5pbmRleE9mKFwiLy9cIikgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWJzb2x1dGVIcmVmID0gbG9jLnByb3RvY29sICsgXCIvL1wiICsgbG9jLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYuaW5kZXhPZihcIi9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzb2x1dGVIcmVmICs9IGhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gbG9jLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmluYWxQYXRoID0gcGF0aC5qb2luKFwiL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJzb2x1dGVIcmVmICs9IGZpbmFsUGF0aCArIFwiL1wiICsgaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnMucHVzaChhYnNvbHV0ZUhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaHJlZi5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhYnNvbHV0ZVVybCA9IGxvYy5wcm90b2NvbCArIGhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnMucHVzaChhYnNvbHV0ZVVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29ucy5wdXNoKGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpY29ucztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0V2luZG93TWV0YWRhdGFPZkFueSguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG1ldGFUYWdzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibWV0YVwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRhVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGFnID0gbWV0YVRhZ3NbaV07XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW1wiaXRlbXByb3BcIiwgXCJwcm9wZXJ0eVwiLCBcIm5hbWVcIl1cbiAgICAgICAgICAgICAgICAubWFwKCh0YXJnZXQpID0+IHRhZy5nZXRBdHRyaWJ1dGUodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3MuaW5jbHVkZXMoYXR0cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoICYmIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGFnLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgICAgICBsZXQgbmFtZSA9IGdldFdpbmRvd01ldGFkYXRhT2ZBbnkoXCJuYW1lXCIsIFwib2c6c2l0ZV9uYW1lXCIsIFwib2c6dGl0bGVcIiwgXCJ0d2l0dGVyOnRpdGxlXCIpO1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSBkb2MudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldFdpbmRvd01ldGFkYXRhT2ZBbnkoXCJkZXNjcmlwdGlvblwiLCBcIm9nOmRlc2NyaXB0aW9uXCIsIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiLCBcImtleXdvcmRzXCIpO1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSBnZXROYW1lKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBnZXREZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IHVybCA9IGxvYy5vcmlnaW47XG4gICAgY29uc3QgaWNvbnMgPSBnZXRJY29ucygpO1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB1cmwsXG4gICAgICAgIGljb25zLFxuICAgICAgICBuYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIG1ldGE7XG59XG5leHBvcnRzLmdldFdpbmRvd01ldGFkYXRhID0gZ2V0V2luZG93TWV0YWRhdGE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@walletconnect+window-metadata@1.0.1/node_modules/@walletconnect/window-metadata/dist/cjs/index.js\n");

/***/ })

};
;