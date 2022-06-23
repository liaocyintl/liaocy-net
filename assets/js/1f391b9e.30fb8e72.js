"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[3085],{

/***/ 14247:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MDXPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 65 modules
var Layout = __webpack_require__(77649);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 15 modules
var MDXContent = __webpack_require__(40076);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(39407);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"mdxPageWrapper":"mdxPageWrapper_j9I6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPage(props){var MDXPageContent=props.content;var _MDXPageContent$metad=MDXPageContent.metadata,title=_MDXPageContent$metad.title,description=_MDXPageContent$metad.description,frontMatter=_MDXPageContent$metad.frontMatter;var wrapperClassName=frontMatter.wrapperClassName,hideTableOfContents=frontMatter.hide_table_of_contents;return/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(wrapperClassName!=null?wrapperClassName:ThemeClassNames/* ThemeClassNames.wrapper.mdxPages */.k.wrapper.mdxPages,ThemeClassNames/* ThemeClassNames.page.mdxPage */.k.page.mdxPage)},/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title,description:description}),/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement("main",{className:"container container--fluid margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('row',styles_module.mdxPageWrapper)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',!hideTableOfContents&&'col--8')},/*#__PURE__*/react.createElement(MDXContent/* default */.Z,null,/*#__PURE__*/react.createElement(MDXPageContent,null))),!hideTableOfContents&&MDXPageContent.toc&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},/*#__PURE__*/react.createElement(TOC/* default */.Z,{toc:MDXPageContent.toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level}))))));}

/***/ })

}]);