/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************************************!*\
  !*** ./src/blocks/interactive/responsive-spacer-block/build/index.js ***!
  \***********************************************************************/
/******/(() => {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/"./src/edit.js": (
    /*!*********************!*\
      !*** ./src/edit.js ***!
      \*********************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_289__) => {
      __nested_webpack_require_289__.r(__nested_webpack_exports__);
      /* harmony export */
      __nested_webpack_require_289__.d(__nested_webpack_exports__, {
        /* harmony export */"default": () => ( /* binding */Edit)
        /* harmony export */
      });
      /* harmony import */
      var react__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_289__( /*! react */"react");
      /* harmony import */
      var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_289__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_289__( /*! @wordpress/i18n */"@wordpress/i18n");
      /* harmony import */
      var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_289__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */
      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_289__( /*! @wordpress/block-editor */"@wordpress/block-editor");
      /* harmony import */
      var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_289__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */
      var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_289__( /*! @wordpress/components */"@wordpress/components");
      /* harmony import */
      var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_289__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

      /**
       * Retrieves the translation of text.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
       */

      /**
       * React hook that is used to mark the block wrapper element.
       * It provides all the necessary props like the class name.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
       */

      /**
       * The edit function describes the structure of your block in the context of the
       * editor. This represents what the editor will render when the block is used.
       *
       * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
       *
       * @param {Object}   props               Properties passed to the function.
       * @param {Object}   props.attributes    Available block attributes.
       * @param {Function} props.setAttributes Function that updates individual attributes.
       *
       * @return {Element} Element to render.
       */

      function Edit({
        attributes,
        setAttributes
      }) {
        const blockProps = (0, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
        const {
          desktopHeight,
          tabletHeight,
          mobileHeight
        } = attributes;
        return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacer Settings', 'my-responsive-spacer-block')
        }, (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Desktop Height (px)', 'my-responsive-spacer-block'),
          value: desktopHeight,
          onChange: value => setAttributes({
            desktopHeight: value
          }),
          min: 0,
          max: 500
        }), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tablet Height (px)', 'my-responsive-spacer-block'),
          value: tabletHeight,
          onChange: value => setAttributes({
            tabletHeight: value
          }),
          min: 0,
          max: 500
        }), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mobile Height (px)', 'my-responsive-spacer-block'),
          value: mobileHeight,
          onChange: value => setAttributes({
            mobileHeight: value
          }),
          min: 0,
          max: 500
        }))), (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          ...blockProps,
          style: {
            height: desktopHeight
          }
        }));
      }

      /***/
    }),
    /***/"./src/index.js": (
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_5355__) => {
      __nested_webpack_require_5355__.r(__nested_webpack_exports__);
      /* harmony import */
      var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5355__( /*! @wordpress/blocks */"@wordpress/blocks");
      /* harmony import */
      var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_5355__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_5355__( /*! ./style.scss */"./src/style.scss");
      /* harmony import */
      var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_5355__( /*! ./editor.scss */"./src/editor.scss");
      /* harmony import */
      var _edit__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_5355__( /*! ./edit */"./src/edit.js");
      /* harmony import */
      var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_5355__( /*! ./block.json */"./src/block.json");
      /**
       * Registers a new block provided a unique name and an object defining its behavior.
       *
       * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
       */

      /**
       * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
       * All files containing `style` keyword are bundled together. The code used
       * gets applied both to the front of your site and to the editor. All other files
       * get applied to the editor only.
       *
       * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
       */

      /**
       * Internal dependencies
       */

      /**
       * Every block starts by registering a new block type definition.
       *
       * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
       */
      (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
        /**
         * @see ./edit.js
         */
        edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
      });

      /***/
    }),
    /***/"./src/editor.scss": (
    /*!*************************!*\
      !*** ./src/editor.scss ***!
      \*************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_7653__) => {
      __nested_webpack_require_7653__.r(__nested_webpack_exports__);
      // extracted by mini-css-extract-plugin

      /***/
    }),
    /***/"./src/style.scss": (
    /*!************************!*\
      !*** ./src/style.scss ***!
      \************************/
    /***/
    (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_7989__) => {
      __nested_webpack_require_7989__.r(__nested_webpack_exports__);
      // extracted by mini-css-extract-plugin

      /***/
    }),
    /***/"react": (
    /*!************************!*\
      !*** external "React" ***!
      \************************/
    /***/
    module => {
      module.exports = window["React"];

      /***/
    }),
    /***/"@wordpress/block-editor": (
    /*!*************************************!*\
      !*** external ["wp","blockEditor"] ***!
      \*************************************/
    /***/
    module => {
      module.exports = window["wp"]["blockEditor"];

      /***/
    }),
    /***/"@wordpress/blocks": (
    /*!********************************!*\
      !*** external ["wp","blocks"] ***!
      \********************************/
    /***/
    module => {
      module.exports = window["wp"]["blocks"];

      /***/
    }),
    /***/"@wordpress/components": (
    /*!************************************!*\
      !*** external ["wp","components"] ***!
      \************************************/
    /***/
    module => {
      module.exports = window["wp"]["components"];

      /***/
    }),
    /***/"@wordpress/i18n": (
    /*!******************************!*\
      !*** external ["wp","i18n"] ***!
      \******************************/
    /***/
    module => {
      module.exports = window["wp"]["i18n"];

      /***/
    }),
    /***/"./src/block.json": (
    /*!************************!*\
      !*** ./src/block.json ***!
      \************************/
    /***/
    module => {
      module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/responsive-spacer-block","version":"0.1.0","title":"Responsive Spacer Block","category":"design","icon":"editor-expand","description":"An spacer block with the Interactivity API","example":{},"supports":{"interactivity":true},"attributes":{"desktopHeight":{"type":"number","default":100},"tabletHeight":{"type":"number"},"mobileHeight":{"type":"number"}},"textdomain":"responsive-spacer-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScriptModule":"file:./view.js"}');

      /***/
    })

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_10491__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_10491__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __nested_webpack_require_10491__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/
  (() => {
    /******/var deferred = [];
    /******/
    __nested_webpack_require_10491__.O = (result, chunkIds, fn, priority) => {
      /******/if (chunkIds) {
        /******/priority = priority || 0;
        /******/
        for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
        /******/
        deferred[i] = [chunkIds, fn, priority];
        /******/
        return;
        /******/
      }
      /******/
      var notFulfilled = Infinity;
      /******/
      for (var i = 0; i < deferred.length; i++) {
        /******/var [chunkIds, fn, priority] = deferred[i];
        /******/
        var fulfilled = true;
        /******/
        for (var j = 0; j < chunkIds.length; j++) {
          /******/if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__nested_webpack_require_10491__.O).every(key => __nested_webpack_require_10491__.O[key](chunkIds[j]))) {
            /******/chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/fulfilled = false;
            /******/
            if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/
        if (fulfilled) {
          /******/deferred.splice(i--, 1);
          /******/
          var r = fn();
          /******/
          if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/
      return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/
  (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__nested_webpack_require_10491__.n = module => {
      /******/var getter = module && module.__esModule ? /******/() => module['default'] : /******/() => module;
      /******/
      __nested_webpack_require_10491__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_10491__.d = (exports, definition) => {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_10491__.o(definition, key) && !__nested_webpack_require_10491__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/__nested_webpack_require_10491__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/ // define __esModule on exports
    /******/__nested_webpack_require_10491__.r = exports => {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/
  (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/var installedChunks = {
      /******/"index": 0,
      /******/"./style-index": 0
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/
    __nested_webpack_require_10491__.O.j = chunkId => installedChunks[chunkId] === 0;
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/
    var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/var [chunkIds, moreModules, runtime] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/
      var moduleId,
        chunkId,
        i = 0;
      /******/
      if (chunkIds.some(id => installedChunks[id] !== 0)) {
        /******/for (moduleId in moreModules) {
          /******/if (__nested_webpack_require_10491__.o(moreModules, moduleId)) {
            /******/__nested_webpack_require_10491__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/
        if (runtime) var result = runtime(__nested_webpack_require_10491__);
        /******/
      }
      /******/
      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/
      for (; i < chunkIds.length; i++) {
        /******/chunkId = chunkIds[i];
        /******/
        if (__nested_webpack_require_10491__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/installedChunks[chunkId][0]();
          /******/
        }
        /******/
        installedChunks[chunkId] = 0;
        /******/
      }
      /******/
      return __nested_webpack_require_10491__.O(result);
      /******/
    };
    /******/
    /******/
    var chunkLoadingGlobal = globalThis["webpackChunkresponsive_spacer_block"] = globalThis["webpackChunkresponsive_spacer_block"] || [];
    /******/
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/
  var __nested_webpack_exports__ = __nested_webpack_require_10491__.O(undefined, ["./style-index"], () => __nested_webpack_require_10491__("./src/index.js"));
  /******/
  __webpack_exports__ = __nested_webpack_require_10491__.O(__nested_webpack_exports__);
  /******/
  /******/
})();
/******/ })()
;
//# sourceMappingURL=index.js.map