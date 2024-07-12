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
/*!*****************************************************************!*\
  !*** ./src/blocks/non-interactive/animations-settings/index.js ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */
//  import './style.scss';


const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  RangeControl
} = wp.components;
const {
  addFilter
} = wp.hooks;
const {
  __
} = wp.i18n;

// Enable attribute control on the following blocks
const enableControlOnBlocks = ['core/image', 'core/group', 'core/cover', 'core/paragraph', 'core/heading', 'core/button', 'core/buttons', 'core/categories', 'core/code', 'core/column', 'core/columns', 'core/coverImage', 'core/gallery', 'core/latestPosts', 'core/list', 'core/preformatted', 'core/pullquote', 'core/quote', 'core/separator', 'core/spacer', 'core/subhead', 'core/table'];

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
    triggerIn: {
      type: 'boolean'
    },
    inName: {
      type: 'string'
    },
    inSpeed: {
      type: 'string'
    },
    inDelay: {
      type: 'string'
    },
    triggerOut: {
      type: "boolean"
    },
    outName: {
      type: 'string'
    },
    outSpeed: {
      type: 'string'
    },
    outDelay: {
      type: 'string'
    },
    threshold: {
      type: 'number',
      default: 7.5
    }
  });
  return settings;
};
addFilter('blocks.registerBlockType', 'wwx/attribute/animate', addControlAttribute);

/**
 * Create HOC to add hover and scroll control to inspector controls of block.
 */
const withAnimateControl = createHigherOrderComponent(BlockEdit => {
  return props => {
    // Do nothing if it's another block than our defined ones.
    if (!enableControlOnBlocks.includes(props.name)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      triggerIn,
      inSpeed,
      inDelay,
      inName,
      threshold
    } = props.attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Animation Settings'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Animate In",
      checked: triggerIn,
      onChange: v => {
        props.setAttributes({
          triggerIn: v
        });
      }
    }), triggerIn && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Animation Type",
      value: inName,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Fade In',
        value: 'animate__fadeIn'
      }, {
        label: 'Fade In Up',
        value: 'animate__fadeInUp'
      }, {
        label: 'Fade In Down',
        value: 'animate__fadeInDown'
      }, {
        label: 'Fade In Left',
        value: 'animate__fadeInLeft'
      }, {
        label: 'Fade In Right',
        value: 'animate__fadeInRight'
      }],
      onChange: v => {
        props.setAttributes({
          inName: v
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Animation Speed",
      help: __('Determines how quickly the element animates into position'),
      value: inSpeed,
      options: [{
        label: 'Default',
        value: ''
      }, {
        label: 'Slow',
        value: 'animate__slow'
      }, {
        label: 'Slower',
        value: 'animate__slower'
      }, {
        label: 'Fast',
        value: 'animate__fast'
      }, {
        label: 'Faster',
        value: 'animate__faster'
      }],
      onChange: v => {
        props.setAttributes({
          inSpeed: v
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Animation Delay",
      help: __('Adds a delay before the element animates into position'),
      value: inDelay,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: '0.5 Second',
        value: 'animate__delay-1s'
      }, {
        label: '1 Second',
        value: 'animate__delay-2s'
      }, {
        label: '1.5 Seconds',
        value: 'animate__delay-3s'
      }, {
        label: '2 Seconds',
        value: 'animate__delay-4s'
      }, {
        label: '2.5 Seconds',
        value: 'animate__delay-5s'
      }],
      onChange: v => {
        props.setAttributes({
          inDelay: v
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: "Threshold (%)",
      help: __('The percentage of the screen which the animation begins'),
      value: threshold,
      onChange: v => {
        props.setAttributes({
          threshold: v
        });
      },
      min: 5,
      max: 100,
      step: 5
    })))));
  };
}, 'withAnimateControl');
addFilter('editor.BlockEdit', 'wwx/with-animate-control', withAnimateControl);

/**
 * Add inline style attribute to save element of block.
 *
 * @param {object} saveElementProps Props of save element.
 * @param {Object} blockType Block type information.
 * @param {Object} attributes Attributes of block.
 *
 * @returns {object} Modified props of save element.
 */
const addExtraProps = (saveElementProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableControlOnBlocks.includes(blockType.name)) {
    return saveElementProps;
  }
  const {
    triggerIn,
    inName,
    inSpeed,
    inDelay,
    threshold
  } = attributes;
  let propsObj = {};
  if (triggerIn) {
    propsObj['animate-in'] = inName;
    propsObj['animate-speed'] = inSpeed;
    propsObj['animate-delay'] = inDelay;
    propsObj['animate-threshold'] = threshold;
  }
  if (propsObj) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.assign)(saveElementProps, propsObj);
  }
  return saveElementProps;
};
addFilter('blocks.getSaveContent.extraProps', 'wwx/get-save-content/extra-animate-props', addExtraProps);
/******/ })()
;
//# sourceMappingURL=index.js.map