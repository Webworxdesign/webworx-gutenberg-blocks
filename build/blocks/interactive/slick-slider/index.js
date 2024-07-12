/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/interactive/slick-slider/components/arrows.js":
/*!******************************************************************!*\
  !*** ./src/blocks/interactive/slick-slider/components/arrows.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arrows = {};
arrows.defaultPrev = '<svg class="slick-prev" viewBox="-9 -9 36 36"><path d="M12.416,17.938l2.105-2.105L7.689,9l6.833-6.831l-2.105-2.105L3.478,9L12.416,17.938z"/></svg>';
arrows.defaultNext = '<svg class="slick-next" viewBox="-9 -9 36 36"><path d="M5.583,0.063L3.478,2.168l6.833,6.833l-6.833,6.831l2.105,2.105l8.938-8.937L5.583,0.063z"/></svg>';
arrows.slimPrev = '<svg class="slick-prev" viewBox="-9 -9 36 36"><polygon points="13.643,0.747 12.961,0.064 4.004,9.021 12.961,17.979 13.643,17.297 5.367,9.021 "/></svg>';
arrows.slimNext = '<svg class="slick-next" viewBox="-9 -9 36 36"><polygon points="4.004,17.297 4.686,17.979 13.643,9.022 4.686,0.064 4.004,0.746 12.28,9.022 "/></svg>';
arrows.minimalPrev = '<svg class="slick-prev" viewBox="-9 -9 36 36"><path d="M12.449,0.109c0.512,0,1.024,0.198,1.415,0.588c0.781,0.781,0.781,2.05,0,2.832l-5.48,5.479l5.48,5.48 c0.781,0.781,0.781,2.05,0,2.832c-0.782,0.781-2.05,0.781-2.831,0l-6.896-6.896c-0.783-0.782-0.783-2.05,0-2.832l6.896-6.896 C11.424,0.307,11.937,0.109,12.449,0.109z"/></svg>';
arrows.minimalNext = '<svg class="slick-next" viewBox="-9 -9 36 36"><path d="M5.551,17.906c-0.512,0-1.024-0.198-1.416-0.588c-0.781-0.781-0.781-2.05,0-2.832l5.48-5.479l-5.48-5.48 c-0.781-0.781-0.781-2.05,0-2.832c0.782-0.781,2.05-0.781,2.832,0l6.896,6.896c0.783,0.783,0.783,2.05,0,2.832l-6.896,6.896 C6.577,17.708,6.064,17.906,5.551,17.906z"/></svg>';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrows);

/***/ }),

/***/ "./src/blocks/interactive/slick-slider/edit.js":
/*!*****************************************************!*\
  !*** ./src/blocks/interactive/slick-slider/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_arrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/arrows */ "./src/blocks/interactive/slick-slider/components/arrows.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);








function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const {
    slickOptions,
    arrowStyle,
    arrowPosition,
    arrowPositionX,
    arrowPositionY,
    arrowStack,
    arrowSize,
    arrowWrap,
    theme,
    dotsSize,
    editOffset
  } = attributes;
  const updateOptions = (id, value) => {
    const options = {
      ...slickOptions,
      [id]: value
    };
    if (value === '' || value === false) {
      delete options[id];
    }
    setAttributes({
      slickOptions: options
    });
  };
  const updateResponsiveBreakpoint = value => {
    const options = {
      ...slickOptions
    };
    options.responsive[0].breakpoint = value || 0;
    setAttributes({
      slickOptions: options
    });
  };
  const updateResponsiveSettings = (id, value) => {
    const options = {
      ...slickOptions
    };
    options.responsive[0].settings[id] = value;
    if (value === '' || value === false) {
      delete options.responsive[0].settings[id];
    }
    setAttributes({
      slickOptions: options
    });
  };
  const updateArrows = style => {
    const options = {
      ...slickOptions
    };
    switch (style) {
      case 'arrows-default':
        options.prevArrow = _components_arrows__WEBPACK_IMPORTED_MODULE_1__["default"].defaultPrev;
        options.nextArrow = _components_arrows__WEBPACK_IMPORTED_MODULE_1__["default"].defaultNext;
        break;
      case 'arrows-slim':
        options.prevArrow = _components_arrows__WEBPACK_IMPORTED_MODULE_1__["default"].slimPrev;
        options.nextArrow = _components_arrows__WEBPACK_IMPORTED_MODULE_1__["default"].slimNext;
        break;
      case 'arrows-minimal':
        options.prevArrow = _components_arrows__WEBPACK_IMPORTED_MODULE_1__["default"].minimalPrev;
        options.nextArrow = _components_arrows__WEBPACK_IMPORTED_MODULE_1__["default"].minimalNext;
        break;
      case 'arrows-custom':
        delete options.prevArrow;
        delete options.nextArrow;
        break;
      default:
        options.prevArrow = _components_arrows__WEBPACK_IMPORTED_MODULE_1__["default"].defaultPrev;
        options.nextArrow = _components_arrows__WEBPACK_IMPORTED_MODULE_1__["default"].defaultNext;
    }
    setAttributes({
      slickOptions: options,
      arrowStyle: style
    });
  };
  const TEMPLATE = [['create-block/slick-item', {}, [['core/paragraph', {
    placeholder: 'Add slide 1 content here...'
  }]]], ['create-block/slick-item', {}, [['core/paragraph', {
    placeholder: 'Add slide 2 content here...'
  }]]], ['create-block/slick-item', {}, [['core/paragraph', {
    placeholder: 'Add slide 3 content here...'
  }]]], ['create-block/slick-item', {}, [['core/paragraph', {
    placeholder: 'Add slide 4 content here...'
  }]]]];
  const {
    blockCount
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    blockCount: select('core/block-editor').getBlockCount(attributes.clientId)
  }));
  const handleNextSlide = () => {
    if (blockCount / slickOptions.slidesToShow >= editOffset) {
      setAttributes({
        editOffset: editOffset + 1
      });
    } else {
      setAttributes({
        editOffset: 1
      });
    }
  };
  const handlePrevSlide = () => {
    if (1 == editOffset) {
      setAttributes({
        editOffset: blockCount / slickOptions.slidesToShow
      });
    } else {
      setAttributes({
        editOffset: editOffset - 1
      });
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    const options = {
      ...slickOptions,
      responsive: slickOptions.responsive || [{
        breakpoint: 1,
        settings: {
          slidesToShow: 1
        }
      }]
    };
    setAttributes({
      slickOptions: options
    });
  }, []);

  // add classes to blockProps 
  blockProps.className += ' ' + theme;
  blockProps.className += ' ' + 'slides-visible-' + slickOptions.slidesToShow;
  blockProps.className += ' edit-offset-' + editOffset;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    label: "Navigate Previous Slide",
    onClick: handlePrevSlide
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Dashicon, {
    icon: "arrow-left-alt"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    label: "Navigate Next Slide",
    onClick: handleNextSlide
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Dashicon, {
    icon: "arrow-right-alt"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    label: "Add Slide",
    onClick: handleNextSlide
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Dashicon, {
    icon: "plus-alt"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Display Settings', 'slick-slider')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color Scheme', 'slick-slider'),
    value: theme,
    options: [{
      label: 'Light',
      value: 'theme-light'
    }, {
      label: 'Dark',
      value: 'theme-dark'
    }],
    onChange: value => setAttributes({
      theme: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides in view', 'slick-slider'),
    value: slickOptions.slidesToShow,
    min: 1,
    max: 12,
    onChange: value => updateOptions('slidesToShow', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dot Navigation', 'slick-slider'),
    checked: slickOptions.dots,
    onChange: value => updateOptions('dots', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Navigation', 'slick-slider'),
    checked: slickOptions.arrows,
    onChange: value => updateOptions('arrows', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center Mode', 'slick-slider'),
    checked: slickOptions.centerMode,
    onChange: value => updateOptions('centerMode', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loop Slides', 'slick-slider'),
    checked: slickOptions.infinite,
    onChange: value => updateOptions('infinite', value)
  })), slickOptions.arrows && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Arrow Settings', 'slick-slider')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Style', 'slick-slider'),
    value: arrowStyle,
    options: [{
      label: 'Default',
      value: 'arrows-default'
    }, {
      label: 'Slim',
      value: 'arrows-slim'
    }, {
      label: 'Minimal',
      value: 'arrows-minimal'
    }, {
      label: 'Custom',
      value: 'arrows-custom'
    }],
    onChange: updateArrows
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Size', 'slick-slider'),
    value: arrowSize,
    options: [{
      label: 'Small',
      value: 'arrows-small'
    }, {
      label: 'Medium',
      value: 'arrows-medium'
    }, {
      label: 'Large',
      value: 'arrows-large'
    }],
    onChange: value => setAttributes({
      arrowSize: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Wrap', 'slick-slider'),
    value: arrowWrap,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: 'Arrow Wrap 1',
      value: 'arrow-wrap-1'
    }, {
      label: 'Arrow Wrap 2',
      value: 'arrow-wrap-2'
    }],
    onChange: value => setAttributes({
      arrowWrap: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arrow Stack', 'slick-slider'),
    value: arrowStack,
    options: [{
      label: 'Horizontal',
      value: 'arrows-stack-horizontal'
    }, {
      label: 'Vertical',
      value: 'arrows-stack-vertical'
    }],
    onChange: value => setAttributes({
      arrowStack: value
    })
  })), slickOptions.dots && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slider Dots Settings', 'slick-slider')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dot Size', 'slick-slider'),
    value: dotsSize,
    options: [{
      label: 'Small',
      value: 'dots-small'
    }, {
      label: 'Medium',
      value: 'dots-medium'
    }, {
      label: 'Large',
      value: 'dots-large'
    }],
    onChange: value => setAttributes({
      dotsSize: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: "Slider Animation Settings",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: "Fade",
    checked: slickOptions.fade,
    onChange: value => updateOptions('fade', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: "CSS Ease",
    value: slickOptions.cssEase,
    options: [{
      label: 'Linear',
      value: 'linear'
    }, {
      label: 'Ease',
      value: 'ease'
    }, {
      label: 'Ease In',
      value: 'ease-in'
    }, {
      label: 'Ease Out',
      value: 'ease-out'
    }, {
      label: 'Ease In Out',
      value: 'ease-in-out'
    }],
    onChange: value => updateOptions('cssEase', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: "Adaptive Height",
    checked: slickOptions.adaptiveHeight,
    value: slickOptions.adaptiveHeight,
    onChange: value => updateOptions('adaptiveHeight', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: "Pause on Hover",
    checked: slickOptions.pauseOnHover,
    value: slickOptions.pauseOnHover,
    onChange: value => updateOptions('pauseOnHover', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: "Pause on Focus",
    checked: slickOptions.pauseOnFocus,
    value: slickOptions.pauseOnFocus,
    onChange: value => updateOptions('pauseOnFocus', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: "Focus on Select",
    checked: slickOptions.focusOnSelect,
    value: slickOptions.focusOnSelect,
    onChange: value => updateOptions('focusOnSelect', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: "Amount of slides to scroll by",
    min: 1,
    max: 12,
    value: slickOptions.slidesToScroll,
    onChange: value => updateOptions('slidesToScroll', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: "Scroll by speed (ms)",
    value: slickOptions.speed,
    step: 1000,
    min: 0,
    max: 50000,
    onChange: value => updateOptions('speed', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: "Autoplay slides",
    checked: slickOptions.autoplay,
    onChange: value => updateOptions('autoplay', value)
  }), slickOptions.autoplay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: "Autoplay speed (ms)",
    value: slickOptions.autoplaySpeed,
    min: 0,
    max: 5000,
    onChange: value => updateOptions('autoplaySpeed', value)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Responsive Settings', 'slick-slider'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Breakpoint', 'slick-slider'),
    value: slickOptions.responsive[0].breakpoint,
    min: 1,
    max: 12,
    onChange: updateResponsiveBreakpoint
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides in view (responsive)', 'slick-slider'),
    value: slickOptions.responsive[0].settings.slidesToShow,
    min: 1,
    max: 12,
    onChange: value => updateResponsiveSettings('slidesToShow', value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slides to scroll (responsive)', 'slick-slider'),
    value: slickOptions.responsive[0].settings.slidesToScroll,
    onChange: value => updateResponsiveSettings('slidesToScroll', value)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    template: TEMPLATE,
    allowedBlocks: ['create-block/slick-item'],
    renderAppender: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender, null)
  })));
}

/***/ }),

/***/ "./src/blocks/interactive/slick-slider/index.js":
/*!******************************************************!*\
  !*** ./src/blocks/interactive/slick-slider/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/interactive/slick-slider/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/interactive/slick-slider/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/blocks/interactive/slick-slider/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/interactive/slick-slider/block.json");







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/blocks/interactive/slick-slider/editor.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/interactive/slick-slider/editor.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/interactive/slick-slider/style.scss":
/*!********************************************************!*\
  !*** ./src/blocks/interactive/slick-slider/style.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/interactive/slick-slider/block.json":
/*!********************************************************!*\
  !*** ./src/blocks/interactive/slick-slider/block.json ***!
  \********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/slick-slider","version":"0.1.0","title":"Slick Slider","category":"widgets","icon":"media-interactive","description":"An interactive slider block with the Interactivity API","textdomain":"slick-slider","supports":{"interactivity":true,"align":["full","wide"]},"attributes":{"editOffset":{"type":"number","default":1},"slickOptions":{"type":"object","default":{"slidesToShow":2,"slidesToScroll":1,"fade":false,"cssEase":"ease","speed":300,"arrows":true,"dots":false,"infinite":true,"focusOnSelect":false,"pauseOnHover":true,"pauseOnFocus":true,"adaptiveHeight":false,"autoplay":false,"responsive":[{"breakpoint":1,"settings":{"slidesToShow":1}}]}},"arrowStyle":{"type":"string","default":""},"arrowPosition":{"type":"string","default":"arrows-inside"},"arrowPositionY":{"type":"string","default":""},"arrowPositionX":{"type":"string","default":""},"arrowStack":{"type":"string","default":"arrows-stack-horizontal"},"dotsSize":{"type":"string","default":"dots-medium"},"arrowSize":{"type":"string","default":"arrows-medium"},"arrowWrap":{"type":"string","default":""},"theme":{"type":"string","default":"theme-dark"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScriptModule":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/interactive/slick-slider/index": 0,
/******/ 			"blocks/interactive/slick-slider/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwebworx_gutenberg_blocks"] = globalThis["webpackChunkwebworx_gutenberg_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/interactive/slick-slider/style-index"], () => (__webpack_require__("./src/blocks/interactive/slick-slider/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map