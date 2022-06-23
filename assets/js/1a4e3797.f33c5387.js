"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[7920],{

/***/ 88824:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ usePluralForm; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52263);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
var OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(function(pf){return pluralForms.includes(pf);});}// Hardcoded english/fallback implementation
var EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:function select(count){return count===1?'one':'other';}};function createLocalePluralForms(locale){var pluralRules=new Intl.PluralRules(locale);return{locale:locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:function select(count){return pluralRules.select(count);}};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(),currentLocale=_useDocusaurusContext.i18n.currentLocale;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){try{return createLocalePluralForms(currentLocale);}catch(err){console.error("Failed to use Intl.PluralRules for locale \""+currentLocale+"\".\nDocusaurus will fallback to the default (English) implementation.\nError: "+err.message+"\n");return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){var separator='|';var parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error("For locale="+localePluralForms.locale+", a maximum of "+localePluralForms.pluralForms.length+" plural forms are expected ("+localePluralForms.pluralForms.join(',')+"), but the message contains "+parts.length+": "+pluralMessages);}var pluralForm=localePluralForms.select(count);var pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){var localePluralForm=useLocalePluralForms();return{selectMessage:function selectMessage(count,pluralMessages){return selectPluralMessage(pluralMessages,count,localePluralForm);}};}

/***/ }),

/***/ 51473:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ theme_SearchPage; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(74165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(52263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 65 modules
var Layout = __webpack_require__(77649);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(35742);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(95999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(88824);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(76775);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(10412);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/hooks/useSearchQuery.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SEARCH_PARAM_QUERY="q";function useSearchQuery(){var history=(0,react_router/* useHistory */.k6)();var location=(0,react_router/* useLocation */.TH)();var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;return{searchValue:ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM&&new URLSearchParams(location.search).get(SEARCH_PARAM_QUERY)||"",updateSearchPath:function updateSearchPath(searchValue){var searchParams=new URLSearchParams(location.search);if(searchValue){searchParams.set(SEARCH_PARAM_QUERY,searchValue);}else{searchParams.delete(SEARCH_PARAM_QUERY);}history.replace({search:searchParams.toString()});},generateSearchPageLink:function generateSearchPageLink(searchValue){// Refer to https://github.com/facebook/docusaurus/pull/2838
return baseUrl+"search?q="+encodeURIComponent(searchValue);}};}/* harmony default export */ var hooks_useSearchQuery = (useSearchQuery);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/fetchIndexes.js
var fetchIndexes = __webpack_require__(90022);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/SearchSourceFactory.js + 6 modules
var SearchSourceFactory = __webpack_require__(98202);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight.js
var highlight = __webpack_require__(82539);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed.js + 1 modules
var highlightStemmed = __webpack_require__(10726);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions.js
var getStemmedPositions = __webpack_require__(91073);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing.jsx + 1 modules
var LoadingRing = __webpack_require__(80311);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var SearchPage_module = ({"searchQueryInput":"searchQueryInput_CFBF","searchResultItem":"searchResultItem_U687","searchResultItemPath":"searchResultItemPath_uIbk","searchResultItemSummary":"searchResultItemSummary_oZHr"});
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/concatDocumentPath.js
var concatDocumentPath = __webpack_require__(73926);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.jsx
function SearchPage(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;var _usePluralForm=(0,usePluralForm/* usePluralForm */.c)(),selectMessage=_usePluralForm.selectMessage;var _useSearchQuery=hooks_useSearchQuery(),searchValue=_useSearchQuery.searchValue,updateSearchPath=_useSearchQuery.updateSearchPath;var _useState=(0,react.useState)(searchValue),searchQuery=_useState[0],setSearchQuery=_useState[1];var _useState2=(0,react.useState)(),searchSource=_useState2[0],setSearchSource=_useState2[1];var _useState3=(0,react.useState)(),searchResults=_useState3[0],setSearchResults=_useState3[1];var pageTitle=(0,react.useMemo)(function(){return searchQuery?(0,Translate/* translate */.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:searchQuery}):(0,Translate/* translate */.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"});},[searchQuery]);(0,react.useEffect)(function(){updateSearchPath(searchQuery);if(searchSource){if(searchQuery){searchSource(searchQuery,function(results){setSearchResults(results);});}else{setSearchResults(undefined);}}// `updateSearchPath` should not be in the deps,
// otherwise will cause call stack overflow.
},[searchQuery,searchSource]);var handleSearchInputChange=(0,react.useCallback)(function(e){setSearchQuery(e.target.value);},[]);(0,react.useEffect)(function(){if(searchValue&&searchValue!==searchQuery){setSearchQuery(searchValue);}},[searchValue]);(0,react.useEffect)(function(){function doFetchIndexes(){return _doFetchIndexes.apply(this,arguments);}function _doFetchIndexes(){_doFetchIndexes=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(){var _yield$fetchIndexes,wrappedIndexes,zhDictionary;return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return (0,fetchIndexes/* fetchIndexes */.w)(baseUrl);case 2:_yield$fetchIndexes=_context.sent;wrappedIndexes=_yield$fetchIndexes.wrappedIndexes;zhDictionary=_yield$fetchIndexes.zhDictionary;setSearchSource(function(){return (0,SearchSourceFactory/* SearchSourceFactory */.v)(wrappedIndexes,zhDictionary,100);});case 6:case"end":return _context.stop();}}},_callee);}));return _doFetchIndexes.apply(this,arguments);}doFetchIndexes();},[baseUrl]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{property:"robots",content:"noindex, follow"}),/*#__PURE__*/react.createElement("title",null,pageTitle)),/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("h1",null,pageTitle),/*#__PURE__*/react.createElement("input",{type:"search",name:"q",className:SearchPage_module.searchQueryInput,"aria-label":"Search",onChange:handleSearchInputChange,value:searchQuery,autoComplete:"off",autoFocus:true}),!searchSource&&searchQuery&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(LoadingRing/* default */.Z,null)),searchResults&&(searchResults.length>0?/*#__PURE__*/react.createElement("p",null,selectMessage(searchResults.length,(0,Translate/* translate */.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:searchResults.length}))): true?/*#__PURE__*/react.createElement("p",null,(0,Translate/* translate */.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})):/*#__PURE__*/0),/*#__PURE__*/react.createElement("section",null,searchResults&&searchResults.map(function(item){return/*#__PURE__*/react.createElement(SearchResultItem,{key:item.document.i,searchResult:item});}))));}function SearchResultItem(_ref){var _ref$searchResult=_ref.searchResult,document=_ref$searchResult.document,type=_ref$searchResult.type,page=_ref$searchResult.page,tokens=_ref$searchResult.tokens,metadata=_ref$searchResult.metadata;var isTitle=type===0;var isContent=type===2;var pathItems=(isTitle?document.b:page.b).slice();var articleTitle=isContent?document.s:document.t;if(!isTitle){pathItems.push(page.t);}return/*#__PURE__*/react.createElement("article",{className:SearchPage_module.searchResultItem},/*#__PURE__*/react.createElement("h2",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:document.u+(document.h||""),dangerouslySetInnerHTML:{__html:isContent?(0,highlight/* highlight */.C)(articleTitle,tokens):(0,highlightStemmed/* highlightStemmed */.o)(articleTitle,(0,getStemmedPositions/* getStemmedPositions */.m)(metadata,"t"),tokens,100)}})),pathItems.length>0&&/*#__PURE__*/react.createElement("p",{className:SearchPage_module.searchResultItemPath},(0,concatDocumentPath/* concatDocumentPath */.e)(pathItems)),isContent&&/*#__PURE__*/react.createElement("p",{className:SearchPage_module.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,highlightStemmed/* highlightStemmed */.o)(document.t,(0,getStemmedPositions/* getStemmedPositions */.m)(metadata,"t"),tokens,100)}}));}
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/index.js
/* harmony default export */ var theme_SearchPage = (SearchPage);

/***/ })

}]);