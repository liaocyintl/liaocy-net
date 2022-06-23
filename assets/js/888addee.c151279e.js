"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[2664],{

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

/***/ 57256:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'一个可以输出具体变化字符的编辑距离改进算法',date:new Date('2018-07-03T16:04:00.000Z'),lang:'zh-Hans',tags:['编辑距离 Edit Distance','莱温斯坦距离 Levenshtein Distance','动态规划 Dynamic Programming'],categories:['研究 Research','语言处理 Language Processing']};var contentTitle='代码';var metadata={"unversionedId":"archieved/2018/detaileditdistance","id":"archieved/2018/detaileditdistance","title":"一个可以输出具体变化字符的编辑距离改进算法","description":"https://github.com/liaocyintl/detaileditdistance","source":"@site/docs/archieved/2018/20180703-detaileditdistance.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/detaileditdistance","permalink":"/liaocy-net/docs/archieved/2018/detaileditdistance","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180703-detaileditdistance.md","tags":[{"label":"编辑距离 Edit Distance","permalink":"/liaocy-net/docs/tags/编辑距离-edit-distance"},{"label":"莱温斯坦距离 Levenshtein Distance","permalink":"/liaocy-net/docs/tags/莱温斯坦距离-levenshtein-distance"},{"label":"动态规划 Dynamic Programming","permalink":"/liaocy-net/docs/tags/动态规划-dynamic-programming"}],"version":"current","sidebarPosition":20180703,"frontMatter":{"title":"一个可以输出具体变化字符的编辑距离改进算法","date":"2018-07-03T16:04:00.000Z","lang":"zh-Hans","tags":["编辑距离 Edit Distance","莱温斯坦距离 Levenshtein Distance","动态规划 Dynamic Programming"],"categories":["研究 Research","语言处理 Language Processing"]},"sidebar":"tutorialSidebar","previous":{"title":"怀孕日语词汇","permalink":"/liaocy-net/docs/archieved/2018/pregnantjapanese"},"next":{"title":"一种网页分割算法 Web Segment","permalink":"/liaocy-net/docs/archieved/2018/websegment"}};var assets={};var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"代码"},"\u4EE3\u7801"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/liaocyintl/detail_edit_distance"},"https://github.com/liaocyintl/detail_edit_distance")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"介绍"},"\u4ECB\u7ECD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6B64\u7B97\u6CD5\u4E3A\u7F16\u8F91\u8DDD\u79BB\uFF08Edit Distance\uFF09\u53C8\u79F0\u83B1\u6587\u65AF\u5766\u8DDD\u79BB(Levenshtein distance, LD ","[1]",")\u7B97\u6CD5\u7684\u6539\u826F\u7248\u672C\u3002\n\u4F20\u7EDF\u7684\u7F16\u8F91\u8DDD\u79BB\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u5F97\u51FA\u4ECE\u539F\u5B57\u7B26\u4E32source\u53D8\u66F4\u4E3A\u76EE\u6807target\u5B57\u7B26\u4E32\uFF0C\u6240\u9700\u8981\u6700\u5C11\u7684\u53D8\u66F4\u6B65\u9AA4\uFF0C\u6216\u79F0\u6210\u672C\uFF08cost\uFF09\u3002\n\u6211\u4EEC\u7684\u6539\u826F\u7B97\u6CD5\u9664\u4E86\u80FD\u591F\u8F93\u51FA\u6700\u5C0F\u6210\u672C\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u7ED9\u51FA\u5177\u4F53\u90A3\u4E9B\u5B57\u7B26\u4EA7\u751F\u4E86\u53D8\u66F4\uFF0C\u5305\u62EC\u63D2\u5165\uFF08insertions\uFF09\uFF0C\u5220\u9664\uFF08deletions\uFF09\u548C\u4EA4\u6362\uFF08substitutions\uFF09."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F8B\u5982, \u5B57\u7B26\u4E32\"kitten\"\u4E0E\"sitting\"\u7684\u7F16\u8F91\u8DDD\u79BB\u662F3\u3002\n\u6211\u4EEC\u7684\u7B97\u6CD5\u53EF\u4EE5\u5177\u4F53\u5730\u7ED9\u51FA\u54EA\u4E9B\u5B57\u7B26\u53D1\u751F\u4E86\u53D8\u66F4\uFF0C\u5982\u4E0B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"kitten \u2192 sitten (\u4EA4\u6362\"k\"\u4E3A\"s\")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"sitten \u2192 sittin (\u4EA4\u6362\"e\"\u4E3A\"i\")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"sittin \u2192 sitting (\u63D2\u5165\"g\"\u5728\u6700\u540E)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5173\u4E8E\u7F16\u8F91\u8DDD\u79BB:\n(Levenshtein distance)","[https://en.wikipedia.org/wiki/Levenshtein_distance]"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53C2\u8003\u6587\u732E:\n","[1]"," LEVENSHTEIN, Vladimir I. Binary codes capable of correcting deletions, insertions, and reversals. Soviet physics doklady. Vol.10, No.8, pp.707-710, 1966."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"快速开始"},"\u5FEB\u901F\u5F00\u59CB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u514B\u9686\u4EE3\u7801\u5230\u672C\u5730"),"\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"git clone https://github.com/liaocyintl/detail_edit_distance\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u4F8B1.")," \u83B7\u53D6\u5B57\u7B26\u4E32\"kitten\"\u4E0E\"sitting\"\u7684\u8BE6\u7EC6\u53D8\u5316:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Python code:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"from distance import ded\nsource = \"kitten\"\ntarget = \"sitting\"\nrs = ded(source=source, target=target)\nprint(rs)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8F93\u51FA (rs):"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"detail\": [\n      {\"type\": \"sub\", \"src_i\": [0], \"tgt\": \"s\", \"src\": \"k\", \"tgt_i\": [0], \"cost\": 1}, \n      {\"type\": \"none\", \"src_i\": [1, 2, 3], \"tgt\": \"itt\", \"src\": \"itt\", \"tgt_i\": [1, 2, 3], \"cost\": 0}, \n      {\"type\": \"sub\", \"src_i\": [4], \"tgt\": \"i\", \"src\": \"e\", \"tgt_i\": [4], \"cost\": 1}, \n      {\"type\": \"none\", \"src_i\": [5], \"tgt\": \"n\", \"src\": \"n\", \"tgt_i\": [5], \"cost\": 0},\n      {\"type\": \"ins\", \"src_i\": [], \"tgt\": \"g\", \"src\": \"\", \"tgt_i\": [6], \"cost\": 1}\n  ], \n  \"cost\": 3\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"detail\":  \u5B57\u7B26\u4E32\"kitten\"\u4E0E\"sitting\"\u7684\u8BE6\u7EC6\u53D8\u5316\u3002",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"type\"\u7684\u503C\u53EF\u4EE5\u662F ","[\"none\", \"ins\", \"del\", \"sub\"]","\uFF0C \u5176\u4E2D\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"'none\":  \u65E0\u53D8\u66F4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"ins\": \u53D1\u751F\u4E86\u63D2\u5165"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"'del': \u53D1\u751F\u4E86\u5220\u9664"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"sub\": \u53D1\u751F\u4E86\u4EA4\u6362"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"src\" and \"tgt\": \u53D1\u751F\u53D8\u5316\u7684\u5B50\u5B57\u7B26\u4E32\uFF08\u539F\u5B57\u7B26\u4E32\u548C\u76EE\u6807\u5B57\u7B26\u4E32\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"src_i\" and \"tgt_i\": \u53D1\u751F\u53D8\u5316\u7684\u5B50\u5B57\u7B26\u4E32\uFF08\u539F\u5B57\u7B26\u4E32\u548C\u76EE\u6807\u5B57\u7B26\u4E32\uFF09\u7684\u4E0B\u811A\u6807"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"cost\": \u8BE5\u53D8\u66F4\u4EA7\u751F\u591A\u5C11\u6210\u672C"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\"cost\": \u603B\u6210\u672C")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u4F8B2.")," \u83B7\u53D6\u5206\u8BCD\u540E\u5B57\u7B26\u4E32\u7684\u8BE6\u7EC6\u53D8\u5316\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4EE5\u8BCD\u4E3A\u5355\u4F4D\u6BD4\u8F83\u4E24\u4E2A\u53E5\u5B50\uFF0C\u53EF\u4EE5\u628A\u5206\u597D\u8BCD\u7684\u53E5\u5B50\u4F5C\u4E3A\u8F93\u5165\uFF0C\u4F8B\u5982\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"from distance import ded\nsource = 'I have a dream'\nsource = source.split(\" \") #\u6309\u7A7A\u683C\u5C06\u53E5\u5B50\u5206\u6210[\"I\", \"have\", \"a\", \"dream\"]\ntarget = 'I had a dream about you'\ntarget = target.split(\" \")\nrs = ded(source=source, target=target)\nprint(rs)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8F93\u51FA:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"cost\": 3, \n  \"detail\": [\n      {\"src_i\": [0], \"src\": \"i\", \"tgt_i\": [0], \"tgt\": \"i\", \"type\": \"none\", \"cost\": 0}, \n      {\"src_i\": [1], \"src\": \"have\", \"tgt_i\": [1], \"tgt\": \"had\", \"type\": \"sub\", \"cost\": 1}, \n      {\"src_i\": [2, 3], \"src\": \"adream\", \"tgt_i\": [2, 3], \"tgt\": \"adream\", \"type\": \"none\", \"cost\": 0}, \n      {\"src_i\": [], \"src\": \"\", \"tgt_i\": [4, 5], \"tgt\": \"aboutyou\", \"type\": \"ins\", \"cost\": 2}\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u4F8B3.")," \u6309\u5B57\u7B26\u4E00\u4E2A\u4E00\u4E2A\u8F93\u51FA\u7ED3\u679C\uFF0C\u4E0D\u8981\u628A\u76F8\u90BB\u76F8\u540C\u7684\u53D8\u66F4\u8FDB\u884C\u5408\u5E76:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BBE\u5B9A 'is_combine_LCS' \u4E3A 'False' \u5219\u6309\u5B57\u7B26\u4E00\u4E2A\u4E00\u4E2A\u8F93\u51FA\u7ED3\u679C\uFF0C\u4E0D\u4F1A\u628A\u76F8\u90BB\u76F8\u540C\u7684\u53D8\u66F4\u8FDB\u884C\u5408\u5E76\u3002\n\u9ED8\u8BA4\u4E3A 'True'\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"from distance import ded\nsource = \"kitten\"\ntarget = \"sitting\"\nrs = ded(source=source, target=target, is_combine_LCS=False)\nprint(rs)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8F93\u51FA:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"cost\": 3, \n  \"detail\": [\n      {\"src\": \"k\", \"cost\": 1, \"type\": \"sub\", \"tgt_i\": [0], \"src_i\": [0], \"tgt\": \"s\"}, \n      {\"src\": \"i\", \"cost\": 0, \"type\": \"none\", \"tgt_i\": [1], \"src_i\": [1], \"tgt\": \"i\"}, \n      {\"src\": \"t\", \"cost\": 0, \"type\": \"none\", \"tgt_i\": [2], \"src_i\": [2], \"tgt\": \"t\"}, \n      {\"src\": \"t\", \"cost\": 0, \"type\": \"none\", \"tgt_i\": [3], \"src_i\": [3], \"tgt\": \"t\"}, \n      {\"src\": \"e\", \"cost\": 1, \"type\": \"sub\", \"tgt_i\": [4], \"src_i\": [4], \"tgt\": \"i\"}, \n      {\"src\": \"n\", \"cost\": 0, \"type\": \"none\", \"tgt_i\": [5], \"src_i\": [5], \"tgt\": \"n\"}, \n      {\"src\": \"\", \"cost\": 1, \"type\": \"ins\", \"tgt_i\": [6], \"src_i\": [], \"tgt\": \"g\"}\n  ]}\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53EF\u4EE5\u770B\u51FA\u5B50\u5B57\u7B26\u4E32\"itt\"\u88AB\u62C6\u5206\u6210\u4E00\u4E2A\u4E00\u4E2A\u5355\u5B57"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u4F8B4.")," \u6309\u7167\u539F\u5B57\u7B26\u4E32\u7684\u6700\u5C0F\u6210\u672C\u8F93\u51FA:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F8B\u5982\u5728\u201C\u6253\u5B57\u7EC3\u4E60\u201D\u7684\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u8BA1\u7B97\u7528\u6237\u6709\u6548\u8F93\u5165\u7684\u5F97\u5206\u3002\n\u6253\u5B57\u7EC3\u4E60\u7684\u6559\u6750\u53EF\u80FD\u5305\u542B\u5F88\u957F\u7684\u5185\u5BB9\uFF0C\u7528\u6237\u8F93\u5165\u53EA\u662F\u5176\u4E2D\u7684\u4E00\u90E8\u5206\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u65F6\u5019\uFF0C\u6211\u4EEC\u5C06\u7528\u6237\u8F93\u5165\u5185\u5BB9\u4F5C\u4E3Asource\u8F93\u5165\uFF1B\n\u5C06\u6559\u6750\u4F5C\u4E3Atarget\u8F93\u5165\uFF1B\n\u8BBE\u7F6E 'as_least_cost' \u4E3A 'True'\uFF0C \u8FD9\u6837\u7B97\u6CD5\u4F1A\u6309\u7167\u5728source\u5B57\u7B26\u4E32\u7684\u6700\u5C0F\u6210\u672C\u8FDB\u884C\u8F93\u51FA\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"from distance import ded\nsource = \"I had a dream that my\"\ntarget = \"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.\"\nrs = ded(source=source.split(\" \"), target=target.split(\" \"), as_least_cost=True)\nprint(rs)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"detail\": [\n    {\"tgt_i\": [0], \"src\": \"i\", \"type\": \"none\", \"src_i\": [0], \"tgt\": \"i\", \"cost\": 0}, \n    {\"tgt_i\": [1], \"src\": \"had\", \"type\": \"sub\", \"src_i\": [1], \"tgt\": \"have\", \"cost\": 1}, \n    {\"tgt_i\": [2, 3, 4, 5], \"src\": \"adreamthatmy\", \"type\": \"none\", \"src_i\": [2, 3, 4, 5], \"tgt\": \"adreamthatmy\", \"cost\": 0}\n  ], \n  \"cost\": 1\n}\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5176\u5B9E\u5728source\u91CC\u9762\uFF0C\u53EA\u6709\"had\"\u4E00\u5904\u9519\u8BEF\u3002\n\u56E0\u6B64\u6709\u6548\u8F93\u5165\u5355\u8BCD\u6570\u91CF\u4E3A len(source) - rs","[\"cost\"]"," = 6 - 1 = 5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"引用"},"\u5F15\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u8BE5\u7B97\u6CD5\u5BF9\u60A8\u6709\u5E2E\u52A9\u7684\u8BDD\u8BF7\u5F15\u7528\u6211\u4EEC\u7684\u8BBA\u6587\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"@article{liao2013,\n    title={Development of the Japanese Input Training System: Four Types of Training and the Fast Algorithm for Automatic Scoring},\n    author={Liao, Chenyi and Minoura, Emiko and Takeoka, Saori and Ozaki Masahiro},\n    journal={Proceedings of the 75th National Convention of IPSJ},\n    pages={655--656},\n    year={2013}\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);