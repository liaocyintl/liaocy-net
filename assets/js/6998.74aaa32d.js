"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[6998],{

/***/ 92503:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Heading; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86668);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_LWe7","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_WYt5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var _excluded=["as","id"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Heading(_ref){var As=_ref.as,id=_ref.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;// H1 headings do not need an id because they don't appear in the TOC.
if(As==='h1'||!id){return/*#__PURE__*/react.createElement(As,(0,esm_extends/* default */.Z)({},props,{id:undefined}));}return/*#__PURE__*/react.createElement(As,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)('anchor',hideOnScroll?styles_module.anchorWithHideOnScrollNavbar:styles_module.anchorWithStickyNavbar),id:id}),props.children,/*#__PURE__*/react.createElement("a",{className:"hash-link",href:"#"+id,title:(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"\u200B"));}

/***/ }),

/***/ 40076:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MDXContent; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(35742);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Head.js
var _excluded=["mdxType","originalType"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// MDX elements are wrapped through the MDX pragma. In some cases (notably usage
// with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element){var _element$props;if((_element$props=element.props)!=null&&_element$props.mdxType&&element.props.originalType){var _element$props2=element.props,mdxType=_element$props2.mdxType,originalType=_element$props2.originalType,newProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_element$props2,_excluded);return/*#__PURE__*/react.createElement(element.props.originalType,newProps);}return element;}function MDXHead(props){var unwrappedChildren=react.Children.map(props.children,function(child){return/*#__PURE__*/react.isValidElement(child)?unwrapMDXElement(child):child;});return/*#__PURE__*/react.createElement(Head/* default */.Z,props,unwrappedChildren);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js + 17 modules
var CodeBlock = __webpack_require__(13066);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Code.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXCode(props){var inlineElements=['a','b','big','i','span','em','strong','sup','sub','small'];var shouldBeInline=react.Children.toArray(props.children).every(function(el){return typeof el==='string'&&!el.includes('\n')||/*#__PURE__*/(0,react.isValidElement)(el)&&inlineElements.includes(el.props.mdxType);});return shouldBeInline?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock/* default */.Z,props);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/A.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXA(props){return/*#__PURE__*/react.createElement(Link/* default */.Z,props);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Pre.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPre(props){var _props$children$props;return/*#__PURE__*/react.createElement(CodeBlock/* default */.Z// If this pre is created by a ``` fenced codeblock, unwrap the children
,/*#__PURE__*/(0,react.isValidElement)(props.children)&&((_props$children$props=props.children.props)==null?void 0:_props$children$props.originalType)==='code'?props.children.props:Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(72389);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(86043);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
var Details_excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){var summary=_ref.summary,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,Details_excluded);var isBrowser=(0,useIsBrowser/* default */.Z)();var detailsRef=(0,react.useRef)(null);var _useCollapsible=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
var _useState=(0,react.useState)(props.open),open=_useState[0],setOpen=_useState[1];return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
react.createElement("details",(0,esm_extends/* default */.Z)({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,clsx_m/* default */.Z)(styles_module.details,isBrowser&&styles_module.isBrowser,props.className),onMouseDown:function onMouseDown(e){var target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:function onClick(e){e.stopPropagation();// For isolation of multiple nested details/summary
var target=e.target;var shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}}}),summary!=null?summary:/*#__PURE__*/react.createElement("summary",null,"Details"),/*#__PURE__*/react.createElement(Collapsible/* Collapsible */.z,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,disableSSRStyle:true// Allows component to work fine even with JS disabled!
,onCollapseTransitionEnd:function onCollapseTransitionEnd(newCollapsed){setCollapsed(newCollapsed);setOpen(!newCollapsed);}},/*#__PURE__*/react.createElement("div",{className:styles_module.collapsibleContent},children))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Details_styles_module = ({"details":"details_b_Ee"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
var InfimaClasses='alert alert--info';function Details_Details(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement(Details,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)(InfimaClasses,Details_styles_module.details,props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXDetails(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
var summary=items.find(function(item){var _item$props;return/*#__PURE__*/react.isValidElement(item)&&((_item$props=item.props)==null?void 0:_item$props.mdxType)==='summary';});var children=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(function(item){return item!==summary;}));return/*#__PURE__*/react.createElement(Details_Details,(0,esm_extends/* default */.Z)({},props,{summary:summary}),children);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(92503);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Heading.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXHeading(props){return/*#__PURE__*/react.createElement(Heading/* default */.Z,props);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Ul_styles_module = ({"containsTaskList":"containsTaskList_mC6p"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformUlClassName(className){return (0,clsx_m/* default */.Z)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
(className==null?void 0:className.includes('contains-task-list'))&&Ul_styles_module.containsTaskList);}function MDXUl(props){return/*#__PURE__*/react.createElement("ul",(0,esm_extends/* default */.Z)({},props,{className:transformUlClassName(props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Img_styles_module = ({"img":"img_ev3q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformImgClassName(className){return (0,clsx_m/* default */.Z)(className,Img_styles_module.img);}function MDXImg(props){return/*#__PURE__*/ (// eslint-disable-next-line jsx-a11y/alt-text
react.createElement("img",(0,esm_extends/* default */.Z)({loading:"lazy"},props,{className:transformImgClassName(props.className)})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MDXComponents={head:MDXHead,code:MDXCode,a:MDXA,pre:MDXPre,details:MDXDetails,ul:MDXUl,img:MDXImg,h1:function h1(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h1"},props));},h2:function h2(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h2"},props));},h3:function h3(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h3"},props));},h4:function h4(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h4"},props));},h5:function h5(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h5"},props));},h6:function h6(props){return/*#__PURE__*/react.createElement(MDXHeading,(0,esm_extends/* default */.Z)({as:"h6"},props));}};/* harmony default export */ var theme_MDXComponents = (MDXComponents);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXContent(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(esm/* MDXProvider */.Zo,{components:theme_MDXComponents},children);}

/***/ }),

/***/ 39407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TOC; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(93743);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tableOfContents":"tableOfContents_bqdL","docItemContainer":"docItemContainer_F8PC"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
var LINK_CLASS_NAME='table-of-contents__link toc-highlight';var LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){var className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.tableOfContents,'thin-scrollbar',className)},/*#__PURE__*/react.createElement(TOCItems/* default */.Z,(0,esm_extends/* default */.Z)({},props,{linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})));}

/***/ }),

/***/ 93743:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TOCItems; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
var _excluded=["parentIndex"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function treeifyTOC(flatTOC){var headings=flatTOC.map(function(heading){return Object.assign({},heading,{parentIndex:-1,children:[]});});// Keep track of which previous index would be the current heading's direct
// parent. Each entry <i> is the last index of the `headings` array at heading
// level <i>. We will modify these indices as we iterate through all headings.
// e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
// indices 0 and 1 will remain unused.
var prevIndexForLevel=Array(7).fill(-1);headings.forEach(function(curr,currIndex){// Take the last seen index for each ancestor level. the highest index will
// be the direct ancestor of the current heading.
var ancestorLevelIndexes=prevIndexForLevel.slice(2,curr.level);curr.parentIndex=Math.max.apply(Math,ancestorLevelIndexes);// Mark that curr.level was last seen at the current index.
prevIndexForLevel[curr.level]=currIndex;});var rootNodes=[];// For a given parentIndex, add each Node into that parent's `children` array
headings.forEach(function(heading){var parentIndex=heading.parentIndex,rest=(0,objectWithoutPropertiesLoose/* default */.Z)(heading,_excluded);if(parentIndex>=0){headings[parentIndex].children.push(rest);}else{rootNodes.push(rest);}});return rootNodes;}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */function useTreeifiedTOC(toc){return useMemo(function(){return treeifyTOC(toc);},[toc]);}function filterTOC(_ref){var toc=_ref.toc,minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;function isValid(item){return item.level>=minHeadingLevel&&item.level<=maxHeadingLevel;}return toc.flatMap(function(item){var filteredChildren=filterTOC({toc:item.children,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});if(isValid(item)){return[Object.assign({},item,{children:filteredChildren})];}return filteredChildren;});}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */function useFilteredAndTreeifiedTOC(_ref2){var toc=_ref2.toc,minHeadingLevel=_ref2.minHeadingLevel,maxHeadingLevel=_ref2.maxHeadingLevel;return (0,react.useMemo)(function(){return filterTOC({toc:treeifyTOC(toc),minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});},[toc,minHeadingLevel,maxHeadingLevel]);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86668);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */function getVisibleBoundingClientRect(element){var rect=element.getBoundingClientRect();var hasNoHeight=rect.top===rect.bottom;if(hasNoHeight){return getVisibleBoundingClientRect(element.parentNode);}return rect;}/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */function isInViewportTopHalf(boundingRect){return boundingRect.top>0&&boundingRect.bottom<window.innerHeight/2;}function getAnchors(_ref){var minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;var selectors=[];for(var i=minHeadingLevel;i<=maxHeadingLevel;i+=1){selectors.push("h"+i+".anchor");}return Array.from(document.querySelectorAll(selectors.join()));}function getActiveAnchor(anchors,_ref2){var _anchors2;var anchorTopOffset=_ref2.anchorTopOffset;// Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
// under the viewport top boundary. It does not mean this anchor is visible
// yet, but if user continues scrolling down, it will be the first to become
// visible
var nextVisibleAnchor=anchors.find(function(anchor){var boundingRect=getVisibleBoundingClientRect(anchor);return boundingRect.top>=anchorTopOffset;});if(nextVisibleAnchor){var _anchors;var boundingRect=getVisibleBoundingClientRect(nextVisibleAnchor);// If anchor is in the top half of the viewport: it is the one we consider
// "active" (unless it's too close to the top and and soon to be scrolled
// outside viewport)
if(isInViewportTopHalf(boundingRect)){return nextVisibleAnchor;}// If anchor is in the bottom half of the viewport, or under the viewport,
// we consider the active anchor is the previous one. This is because the
// main text appearing in the user screen mostly belong to the previous
// anchor. Returns null for the first anchor, see
// https://github.com/facebook/docusaurus/issues/5318
return(_anchors=anchors[anchors.indexOf(nextVisibleAnchor)-1])!=null?_anchors:null;}// No anchor under viewport top (i.e. we are at the bottom of the page),
// highlight the last anchor found
return(_anchors2=anchors[anchors.length-1])!=null?_anchors2:null;}function getLinkAnchorValue(link){return decodeURIComponent(link.href.substring(link.href.indexOf('#')+1));}function getLinks(linkClassName){return Array.from(document.getElementsByClassName(linkClassName));}function getNavbarHeight(){// Not ideal to obtain actual height this way
// Using TS ! (not ?) because otherwise a bad selector would be un-noticed
return document.querySelector('.navbar').clientHeight;}function useAnchorTopOffsetRef(){var anchorTopOffsetRef=(0,react.useRef)(0);var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;(0,react.useEffect)(function(){anchorTopOffsetRef.current=hideOnScroll?0:getNavbarHeight();},[hideOnScroll]);return anchorTopOffsetRef;}/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */function useTOCHighlight(config){var lastActiveLinkRef=(0,react.useRef)(undefined);var anchorTopOffsetRef=useAnchorTopOffsetRef();(0,react.useEffect)(function(){if(!config){// No-op, highlighting is disabled
return function(){};}var linkClassName=config.linkClassName,linkActiveClassName=config.linkActiveClassName,minHeadingLevel=config.minHeadingLevel,maxHeadingLevel=config.maxHeadingLevel;function updateLinkActiveClass(link,active){if(active){if(lastActiveLinkRef.current&&lastActiveLinkRef.current!==link){lastActiveLinkRef.current.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);lastActiveLinkRef.current=link;// link.scrollIntoView({block: 'nearest'});
}else{link.classList.remove(linkActiveClassName);}}function updateActiveLink(){var links=getLinks(linkClassName);var anchors=getAnchors({minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var activeAnchor=getActiveAnchor(anchors,{anchorTopOffset:anchorTopOffsetRef.current});var activeLink=links.find(function(link){return activeAnchor&&activeAnchor.id===getLinkAnchorValue(link);});links.forEach(function(link){updateLinkActiveClass(link,link===activeLink);});}document.addEventListener('scroll',updateActiveLink);document.addEventListener('resize',updateActiveLink);updateActiveLink();return function(){document.removeEventListener('scroll',updateActiveLink);document.removeEventListener('resize',updateActiveLink);};},[config,anchorTopOffsetRef]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
function TOCItemTree(_ref){var toc=_ref.toc,className=_ref.className,linkClassName=_ref.linkClassName,isChild=_ref.isChild;if(!toc.length){return null;}return/*#__PURE__*/react.createElement("ul",{className:isChild?undefined:className},toc.map(function(heading){return/*#__PURE__*/react.createElement("li",{key:heading.id},/*#__PURE__*/react.createElement("a",{href:"#"+heading.id,className:linkClassName!=null?linkClassName:undefined// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react.createElement(TOCItemTree,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName}));}));}// Memo only the tree root is enough
/* harmony default export */ var Tree = (/*#__PURE__*/react.memo(TOCItemTree));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
var TOCItems_excluded=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCItems(_ref){var toc=_ref.toc,_ref$className=_ref.className,className=_ref$className===void 0?'table-of-contents table-of-contents__left-border':_ref$className,_ref$linkClassName=_ref.linkClassName,linkClassName=_ref$linkClassName===void 0?'table-of-contents__link':_ref$linkClassName,_ref$linkActiveClassN=_ref.linkActiveClassName,linkActiveClassName=_ref$linkActiveClassN===void 0?undefined:_ref$linkActiveClassN,minHeadingLevelOption=_ref.minHeadingLevel,maxHeadingLevelOption=_ref.maxHeadingLevel,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,TOCItems_excluded);var themeConfig=(0,useThemeConfig/* useThemeConfig */.L)();var minHeadingLevel=minHeadingLevelOption!=null?minHeadingLevelOption:themeConfig.tableOfContents.minHeadingLevel;var maxHeadingLevel=maxHeadingLevelOption!=null?maxHeadingLevelOption:themeConfig.tableOfContents.maxHeadingLevel;var tocTree=useFilteredAndTreeifiedTOC({toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var tocHighlightConfig=(0,react.useMemo)(function(){if(linkClassName&&linkActiveClassName){return{linkClassName:linkClassName,linkActiveClassName:linkActiveClassName,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);useTOCHighlight(tocHighlightConfig);return/*#__PURE__*/react.createElement(Tree,(0,esm_extends/* default */.Z)({toc:tocTree,className:className,linkClassName:linkClassName},props));}

/***/ })

}]);