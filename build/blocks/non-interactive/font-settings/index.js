/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************************************!*\
  !*** ./src/blocks/non-interactive/font-settings/index.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls,
  BlockListBlock
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl
} = wp.components;
const {
  addFilter
} = wp.hooks;
const {
  __
} = wp.i18n;

// Enable attribute control on the following blocks
const enableControlOnBlocks = ['core/paragraph', 'core/heading', 'core/button', 'core/categories', 'core/code', 'core/list', 'core/pullquote', 'core/quote', 'core/subhead', 'core/table'];

/**
 * Add scroll controls attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addControlAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableControlOnBlocks.includes(name)) {
    return settings;
  }

  // Use Lodash's assign to gracefully handle if attributes are undefined
  settings.attributes = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.assign)(settings.attributes, {
    fontSize: {
      type: 'string'
    }
  });
  return settings;
};
addFilter('blocks.registerBlockType', 'wwx/attribute/font-settings', addControlAttribute);

/**
 * Create HOC to add hover and scroll control to inspector controls of block.
 */
const withFontSettings = createHigherOrderComponent(BlockEdit => {
  return props => {
    // Do nothing if it's another block than our defined ones.
    if (!enableControlOnBlocks.includes(props.name)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      fontSize
    } = props.attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Font Settings'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Font Size",
      value: fontSize,
      options: [{
        label: 'default',
        value: ''
      }, {
        label: 'Jumbo',
        value: 'jumbo'
      }, {
        label: 'H1',
        value: 'h-1'
      }, {
        label: 'H2',
        value: 'h-2'
      }, {
        label: 'H3',
        value: 'h-3'
      }, {
        label: 'H4',
        value: 'h-4'
      }, {
        label: 'Body Normal',
        value: 'body'
      }, {
        label: 'Body Medium',
        value: 'body-m'
      }, {
        label: 'Body Large',
        value: 'body-l'
      }, {
        label: 'Body XLarge',
        value: 'body-xl'
      }],
      onChange: v => {
        props.setAttributes({
          fontSize: v
        });
      }
    }))));
  };
}, 'withFontSettings');
addFilter('editor.BlockEdit', 'wwx/with-animate-control', withFontSettings);

/**
 * Apply extra class in save element.
 */
const addExtraClass = (extraProps, blockType, attributes) => {
  if (enableControlOnBlocks.includes(blockType.name) && attributes.fontSize) {
    extraProps.className = `${extraProps.className}`.trim();
  }
  return extraProps;
};
addFilter('blocks.getSaveContent.extraProps', 'wwx/apply-extra-class', addExtraClass);
/******/ })()
;
//# sourceMappingURL=index.js.map