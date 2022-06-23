"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[2019],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 95222:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": function() { return /* binding */ assets; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'什么是日本的确定据出年金（確定拠出年金401K）',date:new Date('2020-04-06T20:30:00.000Z'),lang:'zh-Hans',tags:['日本文化'],categories:['日本文化']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2020/04/defined-contribution-pension","id":"archieved/2020/04/defined-contribution-pension","title":"什么是日本的确定据出年金（確定拠出年金401K）","description":"在日本工作的朋友可能会接触到一种叫做“确定据出年金（確定拠出年金401K）”的新的退休金制度，。","source":"@site/docs/archieved/2020/04/06-defined-contribution-pension.md","sourceDirName":"archieved/2020/04","slug":"/archieved/2020/04/defined-contribution-pension","permalink":"/liaocy-net/docs/archieved/2020/04/defined-contribution-pension","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2020/04/06-defined-contribution-pension.md","tags":[{"label":"日本文化","permalink":"/liaocy-net/docs/tags/日本文化"}],"version":"current","sidebarPosition":6,"frontMatter":{"title":"什么是日本的确定据出年金（確定拠出年金401K）","date":"2020-04-06T20:30:00.000Z","lang":"zh-Hans","tags":["日本文化"],"categories":["日本文化"]},"sidebar":"tutorialSidebar","previous":{"title":"統計検定2級メモ","permalink":"/liaocy-net/docs/archieved/2020/03/toukei-2"},"next":{"title":"统计学常用公式汇总","permalink":"/liaocy-net/docs/archieved/2020/05/statistics-formula"}};var assets={};var toc=[{value:'先来理解日本的退休金（年金）制度吧',id:'先来理解日本的退休金年金制度吧',level:2},{value:'确定给付企业年金和确定据出企业年金的区别',id:'确定给付企业年金和确定据出企业年金的区别',level:2},{value:'确定据出年金将来能得到什么？',id:'确定据出年金将来能得到什么',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u65E5\u672C\u5DE5\u4F5C\u7684\u670B\u53CB\u53EF\u80FD\u4F1A\u63A5\u89E6\u5230\u4E00\u79CD\u53EB\u505A\u201C\u786E\u5B9A\u636E\u51FA\u5E74\u91D1\uFF08\u78BA\u5B9A\u62E0\u51FA\u5E74\u91D1401K\uFF09\u201D\u7684\u65B0\u7684\u9000\u4F11\u91D1\u5236\u5EA6\uFF0C\u3002\n\u672C\u6587\u4ECB\u7ECD\u8FD9\u79CD\u786E\u5B9A\u636E\u51FA\u5E74\u91D1\u4FDD\u9669\u5236\u5EA6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53C2\u8003\u8D44\u6599\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.resona-tb.co.jp/401k/begin/about/"},"\u308F\u304B\u308A\u3084\u3059\u304F\u89E3\u8AAC\uFF01\u306F\u3058\u3081\u3066\u306E\u78BA\u5B9A\u62E0\u51FA\u5E74\u91D1")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://www.smbc.co.jp/kojin/401k/kakutei/"},"\u4E09\u4E95\u4F4F\u53CB\u9280\u884C - \u78BA\u5B9A\u62E0\u51FA\u5E74\u91D1\u3068\u306F"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"确定据出年金401k是一种什么制度"},"\u786E\u5B9A\u636E\u51FA\u5E74\u91D1401k\u662F\u4E00\u79CD\u4EC0\u4E48\u5236\u5EA6\uFF1F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"先来理解日本的退休金年金制度吧"},"\u5148\u6765\u7406\u89E3\u65E5\u672C\u7684\u9000\u4F11\u91D1\uFF08\u5E74\u91D1\uFF09\u5236\u5EA6\u5427"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BA9\u6211\u4EEC\u5148\u6765\u4E86\u89E3\u4E00\u4E0B\u65E5\u672C\u6700\u521D\u7684\u9000\u4F11\u91D1\u5236\u5EA6\u3002\n\u65E5\u672C\u9000\u4F11\u91D1\u5236\u5EA6\u7531\u4E09\u4E2A\u90E8\u5206\u6784\u6210\uFF0C\u56E0\u6B64\u79F0\u4E3A\u201C\u4E09\u9636\u5C42\u201D\u5236\u5EA6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9996\u5148\uFF0C\u7B2C\u4E00\u90E8\u5206\u53EB\u505A\u201C\u56FD\u6C11\u5E74\u91D1\u201D\u3002\n\u6240\u670920\u5C81\u4EE5\u4E0A\u7684\u65E5\u672C\u56FD\u6C11\u90FD\u8981\u52A0\u5165\u3002\n\u53C8\u52A0\u5165\u65F6\u95F4\u7684\u957F\u77ED\u6765\u51B3\u5B9A\u4E4B\u540E\u80FD\u591F\u62FF\u5230\u7684\u91D1\u989D\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5176\u6B21\uFF0C\u7B2C\u4E8C\u90E8\u5206\u5305\u62EC\u201C\u539A\u751F\u5E74\u91D1\u4FDD\u9669\u201D\u548C\u201C\u56FD\u6C11\u5E74\u91D1\u57FA\u91D1\u201D\u3002\n\u201C\u539A\u751F\u5E74\u91D1\u4FDD\u9669\u201D\u662F\u6307\u6C11\u95F4\u7684\u4F01\u4E1A\u5458\u5DE5\u3001\u516C\u52A1\u5458\u7B49\u52A0\u5165\u7684\u5E74\u91D1\u5236\u5EA6\uFF1B\u201C\u56FD\u6C11\u5E74\u91D1\u57FA\u91D1\u201D\u662F\u4E2A\u4F53\u6237\uFF0C\u81EA\u7531\u804C\u4E1A\u52A0\u5165\u7684\u5E74\u91D1\u5236\u5EA6\u3002\n\u201C\u539A\u751F\u5E74\u91D1\u4FDD\u9669\u201D\u662F\u5F3A\u5236\u52A0\u5165\u7684\u3002\n2015\u5E74\u4E4B\u524D\u516C\u52A1\u5458\u8FD8\u8981\u52A0\u5165\u201C\u5171\u6D4E\u5E74\u91D1\u201D\uFF0C2015\u5E74\u540E\u7EDF\u4E00\u6210\u201C\u539A\u751F\u5E74\u91D1\u4FDD\u9669\u201D\u3002\n\u201C\u56FD\u6C11\u5E74\u91D1\u57FA\u91D1\u201D\u662F\u81EA\u7531\u52A0\u5165\u7684\u3002\n\u52A0\u5165\u4EE5\u540E\u9700\u8981\u7F34\u7EB3\u8D39\u7528\uFF0C\u597D\u5904\u662F\u5C06\u6765\u5F97\u5230\u7684\u9000\u4F11\u91D1\u4E5F\u4F1A\u589E\u52A0\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6700\u540E\uFF0C\u7B2C\u4E09\u90E8\u5206\u662F\u201C\u4F01\u4E1A\u5E74\u91D1\u5236\u5EA6\u201D\u3002\n\u662F\u4F01\u4E1A\u9488\u5BF9\u4F01\u4E1A\u5458\u5DE5\u81EA\u4E3B\u8FD0\u8425\u7684\u9000\u4F11\u91D1\u4FDD\u9669\u5236\u5EA6\u3002\n\u56E0\u6B64\u6709\u4E9B\u4F01\u4E1A\u4F1A\u5BF9\u5458\u5DE5\u652F\u4ED8\u9AD8\u989D\u9000\u4F11\u91D1\u3002\n\u6B64\u5916\u516C\u52A1\u5458\u8F9E\u804C\u7684\u8BDD\uFF0C\u4E5F\u4F1A\u9000\u8FD8\u4E4B\u524D\u652F\u4ED8\u7684\u4FDD\u8D39\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u52A0\u4E0A\u8FD9\u4E9B\u9000\u4F11\u91D1\uFF0C\u4E2A\u4EBA\u79EF\u6512\u7684\u201C\u786E\u5B9A\u636E\u51FA\u5E74\u91D1\u201D\u5C31\u767B\u573A\u4E86\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"确定给付企业年金和确定据出企业年金的区别"},"\u786E\u5B9A\u7ED9\u4ED8\u4F01\u4E1A\u5E74\u91D1\u548C\u786E\u5B9A\u636E\u51FA\u4F01\u4E1A\u5E74\u91D1\u7684\u533A\u522B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u8981\u7406\u89E3\u786E\u5B9A\u636E\u51FA\u5E74\u91D1\u7684\u8BDD\uFF0C\u5148\u8981\u4E86\u89E3\u5B83\u548C\u786E\u5B9A\u7ED9\u4ED8\u4F01\u4E1A\u5E74\u91D1\u7684\u533A\u522B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u786E\u5B9A\u7ED9\u4ED8\u4F01\u4E1A\u5E74\u91D1\uFF1A\u4F01\u4E1A\u5C06\u4FDD\u8D39\u4EA4\u7ED9\u91D1\u878D\u673A\u6784\u8FD0\u8425\u3002\u91D1\u878D\u673A\u6784\u8FD0\u8425\u7684\u6210\u679C\u4F1A\u5DE6\u53F3\u4FDD\u8D39\u7684\u6536\u53D6\u548C\u53D1\u653E\u72B6\u51B5\u3002\u4F46\u662F\u5C06\u6765\u8FD4\u8FD8\u7684\u9000\u4F11\u91D1\u4F1A\u7EA6\u675F\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u3002\u6709\u70B9\u50CF\u4FDD\u9669\u516C\u53F8\u63D0\u4F9B\u7684\u4E2A\u4EBA\u9000\u4F11\u91D1\u4FDD\u9669\u6216\u8005\u5B66\u8D44\u4FDD\u9669\u3002\u4E00\u76F4\u4EE5\u6765\uFF0C\u5982\u679C\u5728\u65E5\u672C\u76F4\u63A5\u8BF4\u201C\u5E74\u91D1\u201D\u7684\u8BDD\uFF0C\u6307\u7684\u5C31\u662F\u201C\u786E\u5B9A\u7ED9\u4ED8\u4F01\u4E1A\u5E74\u91D1\u201D\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u786E\u5B9A\u636E\u51FA\u5E74\u91D1\uFF1A\u4F01\u4E1A\u548C\u88AB\u4FDD\u9669\u4EBA\u6BCF\u4E2A\u6708\u7F34\u7EB3\u4E00\u5B9A\u7684\u4FDD\u8D39\uFF0C\u7531\u4ED6\u4EEC\u81EA\u5DF1\u53BB\u8FD0\u8425\u3002\u6362\u53E5\u8BDD\u6570\u88AB\u4FDD\u9669\u4EBA\u5C06\u4FDD\u8D39\u79EF\u6512\u5728\u81EA\u5DF1\u7684\u8D26\u6237\u4E2D\uFF0C\u5C06\u6765\u83B7\u5F97\u8FD0\u8425\u540E\u7684\u8D39\u7528\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"确定据出年金将来能得到什么"},"\u786E\u5B9A\u636E\u51FA\u5E74\u91D1\u5C06\u6765\u80FD\u5F97\u5230\u4EC0\u4E48\uFF1F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u52A0\u5165\u786E\u5B9A\u636E\u51FA\u5E74\u91D1\u4E4B\u540E\uFF0C\u5C06\u6765\u80FD\u5F97\u5230\u4EC0\u4E48\uFF1F\u8BF7\u8BB0\u4F4F\u4EE5\u4E0B\u4E09\u70B9\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u517B\u8001\u91D1\uFF1A\u539F\u5219\u4E0A\u4ECE60\u5C81\u5F00\u59CB\uFF0C\u6309\u5E74\u6216\u8005\u4E00\u6B21\u6027\u7ED9\u4E0E\u94B1\u6B3E\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6B8B\u75BE\u4FDD\u9669\uFF1A\u9AD8\u5EA6\u81F4\u6B8B\u65F6\uFF0C\u6309\u5E74\u6216\u8005\u4E00\u6B21\u6027\u7ED9\u4E0E\u94B1\u6B3E\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6B7B\u4EA1\u4E00\u6B21\u6027\u4FDD\u9669\uFF1A\u6B7B\u4EA1\u65F6\u4E00\u6B21\u6027\u7ED9\u4E0E\u94B1\u6B3E\uFF1B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u203B60\u5C81\u65F6\u5982\u679C\u52A0\u5165\u786E\u5B9A\u636E\u51FA\u5E74\u91D1\u4E0D\u8DB3\u5341\u5E74\uFF0C\u652F\u4ED8\u5F00\u59CB\u5E74\u9F84\u4F1A\u5EF6\u540E\uFF0C\u4F46\u4E0D\u8D85\u8FC765\u5C81\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672A\u5B8C\u5F85\u7EED\u3002\u3002\u3002"));};MDXContent.isMDXComponent=true;

/***/ })

}]);