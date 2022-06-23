"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[993],{

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

/***/ 18431:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'統計検定2級メモ',date:new Date('2020-03-31T15:00:00.000Z'),lang:'ja',tags:['ノート'],categories:['資格試験','統計検定']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2020/03/toukei-2","id":"archieved/2020/03/toukei-2","title":"統計検定2級メモ","description":"統計検定 2 級的一些知识点备忘","source":"@site/docs/archieved/2020/03/31-toukei-2.md","sourceDirName":"archieved/2020/03","slug":"/archieved/2020/03/toukei-2","permalink":"/liaocy-net/docs/archieved/2020/03/toukei-2","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2020/03/31-toukei-2.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":31,"frontMatter":{"title":"統計検定2級メモ","date":"2020-03-31T15:00:00.000Z","lang":"ja","tags":["ノート"],"categories":["資格試験","統計検定"]},"sidebar":"tutorialSidebar","previous":{"title":"树莓派（Raspberry PI）用VNC无法链接显示Error in TightVNC Viewer No security types supported的解决方案","permalink":"/liaocy-net/docs/archieved/2020/03/raspi-vnc"},"next":{"title":"什么是日本的确定据出年金（確定拠出年金401K）","permalink":"/liaocy-net/docs/archieved/2020/04/defined-contribution-pension"}};var assets={};var toc=[{value:'変数の分類',id:'変数の分類',level:2},{value:'量的データの分布',id:'量的データの分布',level:2},{value:'分布の特長を表す指標',id:'分布の特長を表す指標',level:2},{value:'量的データの要約とグラフ表現',id:'量的データの要約とグラフ表現',level:2},{value:'質的テータの度数表現とフラフ表現',id:'質的テータの度数表現とフラフ表現',level:2},{value:'二変数データの記述と要約',id:'二変数データの記述と要約',level:2},{value:'相関係数',id:'相関係数',level:2},{value:'時系列データの記述と簡単な分析',id:'時系列データの記述と簡単な分析',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7D71\u8A08\u691C\u5B9A 2 \u7D1A\u7684\u4E00\u4E9B\u77E5\u8BC6\u70B9\u5907\u5FD8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"データの記述と要約"},"\u30C7\u30FC\u30BF\u306E\u8A18\u8FF0\u3068\u8981\u7D04"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"変数の分類"},"\u5909\u6570\u306E\u5206\u985E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u500B\u4F53\uFF08\u30B1\u30FC\u30B9\uFF09\uFF1A\u8ABF\u67FB\u3055\u308C\u305F\u500B\u500B\u306E\u5BFE\u8C61\u3001\u884C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5909\u6570\uFF1A\u8ABF\u6574\u3055\u308C\u305F\u9805\u76EE\u3001\u5217\u3001\u5BB6\u8CC3\u3001\u9593\u53D6\u308A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8CEA\u7684\u5909\u6570\uFF1A\u30AB\u30C6\u30B4\u30EA\u3067\u793A\u3055\u308C\u308B\u5909\u6570\u3001\u9593\u53D6\u308A\u3001\u65B9\u89D2",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u540D\u7FA9\u5C3A\u5EA6\uFF08\u540D\u76EE\u5C3A\u5EA6\uFF09\uFF1A\u6027\u5225\u3001\u8077\u696D\u3001\u56FD\u7C4D\uFF1B\u4E8C\u5024\u3001\u591A\u5024\u5909\u6570\uFF1B\u983B\u5EA6\u3001\u6700\u983B\u5024\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9806\u5E8F\u5C3A\u5EA6\uFF1A\u6210\u7E3E\u8A55\u4FA1\uFF08ABCD\uFF09\uFF1B\u4E2D\u592E\u5024\u3001\u56DB\u5206\u4F4D\u6570\uFF1B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u91CF\u7684\u5909\u6570\uFF1A\u89B3\u6E2C\u5024\u3067\u793A\u3055\u308C\u308B\u5909\u6570\u3001\u5BB6\u8CC3\u3001\u9762\u7A4D",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9593\u9694\u5C3A\u5EA6\uFF1A0 \u306F\u7D76\u5BFE\u610F\u5473\u6301\u305F\u306A\u3044\uFF1B\u6E29\u5EA6\u3001\u504F\u5DEE\u5024\uFF1B\u5E73\u5747\u3001\u6A19\u6E96\u504F\u5DEE\uFF1B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F8B\u3048\u3070\u300130\u2103 \u306F 15\u2103 \u306E 2 \u500D\u3068\u306F\u8A00\u3048\u306A\u3044\u304B\u3089\u3001\u6BD4\u4F8B\u3092\u6301\u305F\u306A\u3044\uFF08\u7D76\u5BFE\u57FA\u6E96\u70B9\uFF10\u3092\u6301\u305F\u306A\u3044\uFF09"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6BD4\u4F8B\u5C3A\u5EA6\uFF1A0 \u306F\u7D76\u5BFE\u610F\u5473\u6301\u3064\uFF1B\u8EAB\u9577\u3001\u4F53\u91CD\u3001\u5E74\u9F62\uFF1B\u5909\u52D5\u4FC2\u6570\u3001\u5E7E\u4F55\u5E73\u5747"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5909\u6570\u306E\u4ED6\u306E\u5206\u985E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u96E2\u6563\u5909\u6570\uFF08discrete variable\uFF09\uFF1A1 \u30F6\u6708\u8AAD\u3093\u3060\u672C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9023\u7D9A\u5909\u6570\uFF08continuous Variable\uFF09\uFF1A\u6E29\u5EA6")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"量的データの分布"},"\u91CF\u7684\u30C7\u30FC\u30BF\u306E\u5206\u5E03"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\uFF08Histogram\uFF09\u306E\u4F5C\u6210",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6982\u5FF5\uFF1A\u5EA6\u6570\u5206\u5E03\u8868\u306F\u6700\u5C0F\u5024\u3068\u6700\u5927\u5024\u306E\u9593\u3092\u3044\u304F\u3064\u304B\u306E\u968E\u7D1A\uFF08\u7D1A\u3001\u30AF\u30E9\u30B9\u3001CLASS\uFF09\u306B\u5206\u3051\u3001\u305D\u308C\u305E\u308C\u306E\u968E\u7D1A\u306B\u542B\u307E\u308C\u308B\u5EA6\u6570\uFF08\u983B\u5EA6\u3001frequency\uFF09\u3092\u6570\u3048\u4E0A\u3052\u3001\u5404\u968E\u7D1A\u306E\u5272\u5408\u3092\u793A\u3059\u3082\u306E\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30FC\u30BF\u306E\u5927\u304D\u3055:$n$\u3001$N$\u3067\u8868\u793A\uFF1B\u30C7\u30FC\u30BF\u306E\u6570\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7B49\u9593\u9694\u3067\u3042\u308B\u3068\u306F\u9650\u3089\u305A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D9\u30EB\u578B\uFF1A\u5DE6\u53F3\u5BFE\u79F0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53F3\u306B\u88FE\uFF08\u3059\u305D\u3001\u8863\u895F\uFF0C\u672B\u7AEF\uFF09\u304C\u9577\u3044\uFF1A\u30D4\u30FC\u30AF\u5DE6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5DE6\u306B\u88FE\u304C\u9577\u3044\uFF1A\u30D4\u30FC\u30AF\u53F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E00\u69D8\uFF1A\u7BC4\u56F2\u5185\u540C\u7A0B\u5EA6"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u305D\u306E\u4ED6\u306E\u56F3\u8868\u306E\u4F5C\u6210",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5E79\u8449\u56F3\uFF08\u307F\u304D\u306F\u30FB\u304B\u3093\u3088\u3046\uFF09 stem and leaf plots"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7D2F\u8A08\u76F8\u5BFE\u5EA6\u6570 cumulative ralative frequency:",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u76F8\u5BF9\u5EA6\u6570\u7684\u7D2F\u8BA1\u503C\uFF0C\u4E0B\u4F4D\u5F00\u59CB\u7D2F\u8BA1\u6BD4\u7387"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7D2F\u8A08\u5206\u5E03 cumulative distribution \u90E8\u4EF6\u6570\u306E\u5272\u5408\u306E\u7D2F\u8A08\u63A8\u79FB\u3002",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53F3\u306E\u307B\u3046\u304C\u3001\u5927\u304D\u3044\u5024\u304C\u591A\u3044\u3068\u8A00\u3048\u308B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30ED\u30FC\u30EC\u30F3\u30C4\u66F2\u7DDA\uFF08Lorenz curve, \u6D1B\u4F26\u5179\u66F2\u7EBF\uFF09\uFF1A\u683C\u5DEE\u8A55\u4FA1",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F8B\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"X \u8EF8\uFF1A\u4EBA\u6570\u306E\u7D2F\u8A08\u76F8\u5BFE\u4FC2\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Y \u8EF8\uFF1A\u5E74\u53CE\u306E\u7D2F\u8A08\u76F8\u5BFE\u4FC2\u6570"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B8C\u5168\u5E73\u7B49\u7DDA\u3001complete equality line: $y=x$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B8\u30CB\u4FC2\u6570\u3000 Gini's coefficient\uFF1A\u5B8C\u5168\u5E73\u7B49\u7DDA\u3068\u5F27\uFF08\u3053\uFF09\u3068\u56F2\u307E\u308C\u305F\u9762\u7A4D\u306E 2 \u500D\u3001$gini \\in ","[0,1]","$")))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"分布の特長を表す指標"},"\u5206\u5E03\u306E\u7279\u9577\u3092\u8868\u3059\u6307\u6A19"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5E73\u5747\u30FB\u5206\u6563\u30FB\u6A19\u6E96\u504F\u5DEE",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5E73\u5747 mean\uFF1A$\\bar{x} = \\frac{1}{n}(x",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"1+x_2+...+x_n)=\\frac{1}{n}\\sum "),"{i=1} ^{n} {x_i}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u504F\u5DEE deviation: $(x_i-\\bar{x})$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5206\u6563 variance: $s^2=\\frac{1}{n}\\sum _{i=1} ^{n} {(x_i-\\bar{x})^2}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A19\u6E96\u504F\u5DEE\uFF1A$s=\\sqrt{s^2}=\\sqrt{\\frac{1}{n}\\sum _{i=1} ^{n} {(x_i-\\bar{x})^2}}$\uFF1B\u6563\uFF08\u3061\uFF09\u3089\u3070\u308A\u8A55\u4FA1"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A19\u6E96\u5316\u5F97\u70B9\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Z\u5F97\u70B9\uFF1A(\u89B3\u6E2C\u5024-\u5E73\u5747)/\u6A19\u6E96\u504F\u5DEE=$\\frac{x_i-\\bar{x}}{s} (i=1,2,...,n)$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A19\u6E96\u5316\u5F97\u70B9\uFF11\uFF1A\u5E73\u5747\u3088\u308A\u6A19\u6E96\u504F\u5DEE\u4E00\u3064\u5206\u5927\u304D\u3044\n\u2010 \u6A5F\u80FD\uFF1A\u5358\u4F4D\u306E\u7570\u306A\u3063\u305F\u30C7\u30FC\u30BF\u6BD4\u8F03\uFF1B\u5916\u308C\u5024\u691C\u51FA"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5909\u52D5\u4FC2\u6570\uFF08CV, coefficient of variation\uFF09\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$CV=\\frac{s}{\\bar{x}}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1A\u91CF\u306E\u7570\u306A\u308B\u30C7\u30FC\u30BF\u306E\u504F\u5DEE\u3092\u6BD4\u8F03\uFF1B\u8EAB\u9577\u3068\u8DB3\u306E\u30B5\u30FC\u30BA"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E2D\u592E\u5024\u30FB\u6700\u983B\u5024",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E2D\u592E\u5024 \u4E2D\u4F4D\u6570 median: \u89B3\u6E2C\u5024\u3092\u5C0F\u3055\u3044\u9806\u306B\u4E26\u3079\u3001\u3061\u3087\u3063\u3069\u771F\u3093\u4E2D\u306B\u4F4D\u7F6E\u3059\u308B\u89B3\u6E2C\u5024\uFF1B\u5076\u6570\u306E\u5834\u5408\u306F\uFF12\u3064\u306E\u5E73\u5747"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6700\u983B\u5024\uFF1A\u6700\u3082\u591A\u3044\u89B3\u6E2C\u5024"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7BC4\u56F2\u30FB\u56DB\u5206\u4F4D\u7BC4\u56F2",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7BC4\u56F2\uFF1A$R=max-min$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u56DB\u5206\u4F4D(\u3057\u3076\u3093\u3044)\u7BC4\u56F2\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"25%, 50%, 75%: \u7B2C\u4E00\u3001\u7B2C\u4E8C\u3001\u7B2C\u4E09\u5206\u4F4D\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u56DB\u5206\u4F4D\u7BC4\u56F2 interquartile range\uFF1A$IQR=Q3-Q1$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1A\u6B6A\uFF08\u3086\u304C\uFF09\u307F\u3092\u8A55\u4FA1")))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"量的データの要約とグラフ表現"},"\u91CF\u7684\u30C7\u30FC\u30BF\u306E\u8981\u7D04\u3068\u30B0\u30E9\u30D5\u8868\u73FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"5\u6570\u8981\u7D04 five-numbers summary:\u3000\u6700\u5C0F\u5024\u3001\u7B2C\u4E00\u56DB\u5206\u4F4D\u6570\u3001\u7B2C\u4E8C\u56DB\u5206\u4F4D\u6570\uFF08\u4E2D\u592E\u5024\uFF09\u3001\u7B2C\u4E09\u56DB\u5206\u4F4D\u6570\u3001\u6700\u5927\u5024"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://mathtrain.jp/hakohige"},"\u7BB1\u3072\u3052\u56F3"),"\uFF1A5\u6570\u8981\u7D04\u3092\u8868\u73FE\u306E\u56F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5916\u308C\u5024\uFF1A\u4F8B $x < Q1-1.5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"IQR$ || $x > Q1+1.5"),"IQR$")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"質的テータの度数表現とフラフ表現"},"\u8CEA\u7684\u30C6\u30FC\u30BF\u306E\u5EA6\u6570\u8868\u73FE\u3068\u30D5\u30E9\u30D5\u8868\u73FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u68D2\u30B0\u30E9\u30D5\uFF1A\u5EA6\u6570\u8868\u73FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5186\u30B0\u30E9\u30D5\uFF1A\u76F8\u5BFE\u5EA6\u6570\u8868\u73FE")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"二変数データの記述と要約"},"\u4E8C\u5909\u6570\u30C7\u30FC\u30BF\u306E\u8A18\u8FF0\u3068\u8981\u7D04"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u76F8\u95A2 correlation\u3001\u6563\u5E03\u56F3 scatter diagram\u3001\u6B63\u306E\u76F8\u95A2\u3001\u8CA0\u306E\u76F8\u95A2\u3001\u7565")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"相関係数"},"\u76F8\u95A2\u4FC2\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5171\u5206\u6563\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$s",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{xy}=\\frac{1}{n}\\sum "),"{i=1} ^{n} {(x_i-\\bar{x})(y_i-\\bar{y})}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1A\u6B63\u306A\u3089\u3070\u6B63\u306E\u76F8\u95A2\u304C\u3001\u8CA0\u306A\u3089\u3070\u8CA0\u306E\u76F8\u95A2\u304C\u3042\u308B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u76F8\u95A2\u4FC2\u6570\u3000\u30D4\u30A2\u30BD\u30F3\u306E\u7A4D\u7387\u76F8\u95A2\u4FC2\u6570 correlation coefficient",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5171\u5206\u6563/\u6A19\u6E96\u504F\u5DEE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$r",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{xy}=\\frac{s"),"{xy}}{s_xs_y}$ "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$r",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{xy}=\\frac{\\frac{1}{n}\\sum "),"{i=1} ^{n} {(x_i-\\bar{x})(y_i-\\bar{y})}}{s_xs_y}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$r",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{xy}=\\frac{1}{n}\\sum "),"{i=1} ^{n} {\\frac{(x_i-\\bar{x})}{s_x}\\frac{(y_i-\\bar{y})}{s_y}}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7BC4\u56F2 $\\in ","[-1, 1]","$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"1\u306A\u3089\u5F37\u3044\u6B63\u76F8\u95A2\uFF1B-1\u306A\u3089\u5F37\u3044\u8CA0\u76F8\u95A2"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u504F\u76F8\u95A2 partial correlation",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$r",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{(yz\xB7x)} = \\frac{r"),"{yz} - r",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{xy}r{xz}}{\\sqrt{1-r^2"),"{xy}}\\sqrt{1-r^2_{xz}}}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1A\u5909\u6570x\u306E\u5F71\u97FF\u3092\u9664\u3044\u3066\u3001\u5909\u6570yz\u306E\u76F8\u95A2\u3092\u6C42\u3081\u308B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u56DE\u5E30\u76F4\u7DDA",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8AAC\u660E\u5909\u6570\uFF08\u72EC\u7ACB\u5909\u6570 explanatory variable, \u4E88\u6E2C\u5909\u6570 independent variable\uFF09\uFF1Ax\uFF1B\u90E8\u5C4B\u306E\u5927\u304D\u3055"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5FDC\u7B54\u5909\u6570\uFF08\u76EE\u7684\u5909\u6570\u3001response variable\u3001dependent variable\u3001explained variable\uFF09\uFF1Ay\uFF1B\u90E8\u5C4B\u306E\u5BB6\u8CC3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u56DE\u5E30\u76F4\u7DDA\uFF1A $y= \\alpha + \\beta x$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$\\alpha$\u3001$\\beta$\uFF1A\u56DE\u5E30\u4FC2\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$\\alpha$\uFF1A\u304B\u305F\u3080\u304D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$\\beta$: \u305B\u3063\u307A\u3093"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6B8B\u5DEE residual\uFF1A\u89B3\u6E2C\u5024\u3068\u5B9F\u969B\u5024\u306E\u5DEE $e_i = y_i - \\hat{y}_i (i = 1, 2)$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6B8B\u5DEE\u5E73\u65B9\u548C\uFF1A$S(\\hat{\\alpha}, \\hat{\\beta})=\\sum ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{i=1} ^{n} {(y_i-\\hat{y_i})^2}=\\sum "),"{i=1} ^{n} {","[y_i-(\\hat{\\alpha} + \\hat{\\beta} x)]","^2}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6700\u5C0F\u4E8C\u4E57\u6CD5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$\\hat{\\beta}=\\frac{\\sum{(y",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"i-\\hat{y})(x_i-\\hat{x})}}{\\sum{(x_i-\\hat{x})^2}}=\\frac{x"),"{xy}}{s",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{xx}}=r"),"{xy}\\frac{\\sqrt{s",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{yy}}}{\\sqrt{s"),"{xx}}}=r_{xy}\\frac{s_y}{s_x}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$\\hat{\\alpha}=\\bar{y}-\\hat{\\beta}\\bar{x}$"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://toukeigaku-jouhou.info/2018/09/09/cross-table/"},"\u8CEA\u7684\u30C7\u30FC\u30BF\u306E\u30AF\u30ED\u30B9\u96C6\u8A08\u8868"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"時系列データの記述と簡単な分析"},"\u6642\u7CFB\u5217\u30C7\u30FC\u30BF\u306E\u8A18\u8FF0\u3068\u7C21\u5358\u306A\u5206\u6790"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6642\u7CFB\u5217\u30C7\u30FC\u30BF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"time series data: \u6642\u9593\u306E\u9806\u306B\u5F97\u3089\u308C\u305F\u30C7\u30FC\u30BF"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6307\u6570\u5316\u3068\u5E7E\u4F55\u5E73\u5747"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5909\u5316\u7387\uFF08\u4F38\u3073\u7387\uFF09\uFF1A$r",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"t = (y"),"{t+1}-y_y)/y_t$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6307\u6570\u5316\uFF1A\u6642\u7CFB\u5217\u9593\u306E\u5024\u306E\u5927\u304D\u3055\u3092\u305D\u308D\u3048\u308B\u305F\u3081\u3001\u3042\u308B\u6642\u70B9\u3092\u57FA\u6E96\u6642\u3068\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$q_t = y_t / y_s (t=0,1,2,...,T)$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F38\u3073\u7387\u5E7E\u4F55\u5E73\u5747\uFF1A$r",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"G = (\\prod"),"{t=1}^{T}r_t)^{1/T}$"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6642\u7CFB\u5217\u30C7\u30FC\u30BF\u306E\u5909\u52D5\u5206\u89E3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u50BE\u5411\u5909\u52D5(TC trend-cycle variation): \u57FA\u672C\u7684\u306A\u9577\u671F\u306B\u6E21\u308B\u52D5\u304D\u3092\u8868\u3059\u5909\u52D5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B63\u7BC0\u5909\u52D5(S)\uFF1A1\u5E74\u3092\u5468\u671F\u3068\u3057\u3066\u5FAA\u74B0\u3092\u7E70\u308A\u8FD4\u3059\u5909\u52D5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E0D\u898F\u5247\u5909\u52D5(I)\uFF1A\u898F\u5247\u3067\u306F\u306A\u3044\u5909\u52D5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7D44\u307F\u5408\u308F\u305B\uFF1A$y_t = TC_t + S_t + I_t (t=1,2,...,T)$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$TC_t$\u3092\u62BD\u51FA\u3001\u79FB\u52D5\u5E73\u5747\u6CD5(moving average method)\u3001\u6307\u6570\u5E73\u6ED1\u6CD5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$\\hat{TC",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"t} = \\sum"),"{s=t-k}^{t+k}\\frac{y_s}{sk + 1}$  "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$m=2k+1$ "))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B63\u7BC0\u5909\u52D5\uFF0B\u4E0D\u898F\u5247\u5909\u52D5: $w_t = y_t - \\hat{TC_t}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$w_t$\u306E\u6708\u5225\u5E73\u5747: $\\bar{w_M} = \\frac{\\sum{w_t}}{m}$  $(t \\in M)$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$\\hat{I_t} = y_t - \\hat{TC_t} - \\hat{S_t}$"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u81EA\u5DF1\u76F8\u95A2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6982\u5FF5\uFF1A\u540C\u3058\u6642\u7CFB\u5217\u306E\u6642\u70B9\u3092\u305A\u3089\u3057\u305F\u6642\u7CFB\u5217\u3068\u306E\u76F8\u95A2\u95A2\u4FC2\uFF1B\u6642\u70B9\u5DEE\u3067\u306E\u76F8\u95A2\u95A2\u4FC2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5143\u306E\u6642\u7CFB\u5217\uFF1A{y_t, t = 1,2,...,T}"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$h$\u305A\u3089\u3057\u305F\u6642\u7CFB\u5217\uFF1A{y_{t+h}, t = 1,2,...,T-h}"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u81EA\u5DF1\u76F8\u95A2\u95A2\u6570 autocorrelation function\uFF1A\u4E0A\u8A18\u306E\u4E8C\u3064\u306E\u76F8\u95A2\u95A2\u4FC2\u3092\u6C42\u3081\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$C",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"h = \\frac{1}{T}\\sum^{T-h}"),"{t=1}{(y",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"t - \\bar{y})(y"),"{t+h}-\\bar{y})}$ $(h=0,1,2,...)$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$r_h = \\frac{C_h}{C_0}$"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6307\u6570\u306E\u4F5C\u6210\u3068\u5229\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1A\u7570\u306A\u3063\u305F\u6642\u70B9\u9593\u307E\u305F\u306F\u5730\u57DF\u9593\u306B\u304A\u3051\u308B\u6570\u91CF\u3084\u4FA1\u683C\u3092\u6BD4\u8F03\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6307\u6570 index number\uFF1A\u591A\u6570\u306E\u540C\u7A2E\u306E\u30C7\u30FC\u30BF\u3092\u6BD4\u8F03\u3059\u308B\u305F\u3081\u306B\u3001\u3042\u308B\u5024\u3092\u57FA\u6E96\u306B\u3057\u3066\u4ED6\u306E\u5024\u3092\u57FA\u6E96\u5024\u306B\u5BFE\u3059\u308B\u6BD4\u3067\u8868\u3057\u305F\u3082\u306E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E9\u30B9\u30D1\u30A4\u30EC\u30B9\u6307\u6570 (Laspeyres Index)\uFF1A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$\\sum",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{i}{w_i(p"),"{ti}/p",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"{0i})}/\\sum"),"{i}{w_i}$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$w = pq$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$p$: \u4FA1\u683C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$q$: \u6570\u91CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$p_{ti}$: $t$\u6642\u70B9\u7B2C$i$\u54C1\u76EE\u306E\u4FA1\u683C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$w_i$\uFF1A$i$\u54C1\u76EE\u306E\u91CD\u307F\u3001i\u54C1\u76EE\u306E\u7DCF\u652F\u51FA\u984D")))))));};MDXContent.isMDXComponent=true;

/***/ })

}]);