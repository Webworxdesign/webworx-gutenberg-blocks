(()=>{"use strict";const e=window.React,t=window.lodash,{createHigherOrderComponent:l}=wp.compose,{Fragment:o}=wp.element,{InspectorControls:a,BlockListBlock:n}=wp.blockEditor,{PanelBody:r,SelectControl:i}=wp.components,{addFilter:c}=wp.hooks,{__}=wp.i18n,s=["core/paragraph","core/heading","core/button","core/categories","core/code","core/list","core/pullquote","core/quote","core/subhead","core/table"];c("blocks.registerBlockType","wwx/attribute/font-settings",((e,l)=>s.includes(l)?(e.attributes=(0,t.assign)(e.attributes,{fontSize:{type:"string"}}),e):e)),c("editor.BlockEdit","wwx/with-animate-control",l((t=>l=>{if(!s.includes(l.name))return(0,e.createElement)(t,{...l});const{fontSize:n}=l.attributes;return(0,e.createElement)(o,null,(0,e.createElement)(t,{...l}),(0,e.createElement)(a,null,(0,e.createElement)(r,{title:__("Font Settings"),initialOpen:!1},(0,e.createElement)(i,{label:"Font Size",value:n,options:[{label:"default",value:""},{label:"Jumbo",value:"jumbo"},{label:"H1",value:"h-1"},{label:"H2",value:"h-2"},{label:"H3",value:"h-3"},{label:"H4",value:"h-4"},{label:"Body Normal",value:"body"},{label:"Body Medium",value:"body-m"},{label:"Body Large",value:"body-l"},{label:"Body XLarge",value:"body-xl"}],onChange:e=>{l.setAttributes({fontSize:e})}}))))}),"withFontSettings")),c("blocks.getSaveContent.extraProps","wwx/apply-extra-class",((e,t,l)=>(s.includes(t.name)&&l.fontSize&&(e.className=`${e.className}`.trim()),e)))})();