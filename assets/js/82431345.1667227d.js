"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[389],{

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

/***/ 27108:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'使用 Data Brewery 挖掘A股数据之Cubes篇（持续更新）',date:new Date('2018-07-30T17:19:25.000Z'),lang:'zh-Hans',tags:['Python','Data Mining','Data Brewery','Cubes','SQLLite','在线数据分析 OLAP'],categories:['研究 Research','数据挖掘 Data Mining']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/07/stockdatamining","id":"archieved/2018/07/stockdatamining","title":"使用 Data Brewery 挖掘A股数据之Cubes篇（持续更新）","description":"问题背景","source":"@site/docs/archieved/2018/07/30-stockdatamining.md","sourceDirName":"archieved/2018/07","slug":"/archieved/2018/07/stockdatamining","permalink":"/liaocy-net/docs/archieved/2018/07/stockdatamining","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/07/30-stockdatamining.md","tags":[{"label":"Python","permalink":"/liaocy-net/docs/tags/python"},{"label":"Data Mining","permalink":"/liaocy-net/docs/tags/data-mining"},{"label":"Data Brewery","permalink":"/liaocy-net/docs/tags/data-brewery"},{"label":"Cubes","permalink":"/liaocy-net/docs/tags/cubes"},{"label":"SQLLite","permalink":"/liaocy-net/docs/tags/sql-lite"},{"label":"在线数据分析 OLAP","permalink":"/liaocy-net/docs/tags/在线数据分析-olap"}],"version":"current","sidebarPosition":30,"frontMatter":{"title":"使用 Data Brewery 挖掘A股数据之Cubes篇（持续更新）","date":"2018-07-30T17:19:25.000Z","lang":"zh-Hans","tags":["Python","Data Mining","Data Brewery","Cubes","SQLLite","在线数据分析 OLAP"],"categories":["研究 Research","数据挖掘 Data Mining"]},"sidebar":"tutorialSidebar","previous":{"title":"Ubuntu 18.04设置Apache的HTTP与HTTPS反向代理","permalink":"/liaocy-net/docs/archieved/2018/07/ubuntuapacheproxy"},"next":{"title":"以太坊学习资料汇总","permalink":"/liaocy-net/docs/archieved/2018/07/ethresource"}};var assets={};var toc=[{value:'问题背景',id:'问题背景',level:2},{value:'参考资料',id:'参考资料',level:2},{value:'实验环境及说明',id:'实验环境及说明',level:2},{value:'Cubes介绍',id:'cubes介绍',level:2},{value:'为什么要使用Cubes',id:'为什么要使用cubes',level:3},{value:'数据立方体， 多维度， Facts， 与度量',id:'数据立方体-多维度-facts-与度量',level:3},{value:'特征概览',id:'特征概览',level:3},{value:'模型',id:'模型',level:3},{value:'浏览器',id:'浏览器',level:3},{value:'后端',id:'后端',level:3},{value:'服务器',id:'服务器',level:3},{value:'安装 Cubes 并测试',id:'安装-cubes-并测试',level:2},{value:'对股票数据挖掘',id:'对股票数据挖掘',level:2},{value:'(未完待续)',id:'未完待续',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("script",{text:"text/javascript",src:"/lib/jquery/index.js"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"问题背景"},"\u95EE\u9898\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u6587\u5E76\u975E\u80A1\u7968\u91CF\u5316\u4EA4\u6613\u6559\u7A0B\uFF0C\u800C\u662F\u901A\u8FC7\u80A1\u7968\u6570\u636E\u6316\u6398\u7684\u4F8B\u5B50\uFF0C\u6765\u5B66\u4E60 Cubes \u7684\u7B14\u8BB0\u3002\n\u76EE\u524D\u5173\u4E8ECubes\u7684\u4E2D\u6587\u8D44\u6599\u4E0D\u591A\uFF0C\u5F53\u7136\u672C\u6587\u4E5F\u4E0D\u53EF\u80FD\u5305\u542BCubes\u7684\u5168\u90E8\u7279\u6027\uFF0C\u53EA\u80FD\u901A\u8FC7\u4F8B\u5B50\u4ECB\u7ECD\u4E00\u90E8\u5206\u5E38\u7528\u529F\u80FD\u3002\n\u5E0C\u671B\u5BF9\u8BFB\u8005\u6709\u6240\u5E2E\u52A9\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://databrewery.org/"},"Data Brewery \u5B98\u7F51")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://cubes.databrewery.org/"},"Cubes")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://cubes.readthedocs.io/en/v1.1/"},"Cubes \u6587\u6863")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://myweb.sabanciuniv.edu/rdehkharghani/files/2016/02/The-Morgan-Kaufmann-Series-in-Data-Management-Systems-Jiawei-Han-Micheline-Kamber-Jian-Pei-Data-Mining.-Concepts-and-Techniques-3rd-Edition-Morgan-Kaufmann-2011.pdf"},"\u6570\u636E\u6316\u6398\u6559\u79D1\u4E66: Data Mining. Concepts and Techniques, 3rd Edition")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"实验环境及说明"},"\u5B9E\u9A8C\u73AF\u5883\u53CA\u8BF4\u660E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Python 3.6.1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Cubes 1.1")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cubes\u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684Python\u6846\u67B6\uFF0C\u4E5F\u662F\u4E00\u4E2A\u5DE5\u5177\u96C6\u3002\n\u7528\u6765\u5F00\u53D1\u6570\u636E\u62A5\u544A\u4E0E\u6570\u636E\u5206\u6790\u5E94\u7528\u3001\u5728\u7EBF\u5206\u6790(OLAP)\u3001\u591A\u7EF4\u5EA6\u6570\u636E\u5206\u6790\u548C\u6570\u636E\u805A\u5408\u3002\n\u5B83\u662FData Brewery\u9879\u76EE\u7684\u4E00\u4E2A\u5B50\u96C6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"SQLLite 3")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"http://tushare.org/"},"Tushare 0.4.3"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Tushare\u662F\u4E00\u4E2A\u514D\u8D39\u3001\u5F00\u6E90\u7684python\u8D22\u7ECF\u6570\u636E\u63A5\u53E3\u5305\u3002\u4E3B\u8981\u5B9E\u73B0\u5BF9\u80A1\u7968\u7B49\u91D1\u878D\u6570\u636E\u4ECE\u6570\u636E\u91C7\u96C6\u3001\u6E05\u6D17\u52A0\u5DE5 \u5230 \u6570\u636E\u5B58\u50A8\u7684\u8FC7\u7A0B\uFF0C\u80FD\u591F\u4E3A\u91D1\u878D\u5206\u6790\u4EBA\u5458\u63D0\u4F9B\u5FEB\u901F\u3001\u6574\u6D01\u3001\u548C\u591A\u6837\u7684\u4FBF\u4E8E\u5206\u6790\u7684\u6570\u636E\uFF0C\u4E3A\u4ED6\u4EEC\u5728\u6570\u636E\u83B7\u53D6\u65B9\u9762\u6781\u5927\u5730\u51CF\u8F7B\u5DE5\u4F5C\u91CF\uFF0C\u4F7F\u4ED6\u4EEC\u66F4\u52A0\u4E13\u6CE8\u4E8E\u7B56\u7565\u548C\u6A21\u578B\u7684\u7814\u7A76\u4E0E\u5B9E\u73B0\u4E0A\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cubes介绍"},"Cubes\u4ECB\u7ECD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"为什么要使用cubes"},"\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528Cubes"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cubes \u662F\u4E00\u4E2A\u6846\u67B6\uFF0C\u8BE5\u6846\u67B6\u9762\u5411\u5206\u6790\u5E08\u548C\u7528\u6237\u7EC8\u7AEF\u7A0B\u5E8F\uFF0C\u63D0\u4F9B\u5BF9\u4E8E\u6570\u636E\u7ACB\u65B9\u4F53\uFF08\u591A\u7EF4\u6570\u636E\u5B9E\u4F53\uFF09\u53EF\u7406\u89E3\u7684\u3001\u81EA\u7136\u7684\u9014\u5F84\u3002\n\u5B83\u53EF\u4EE5\u88AB\u63D0\u4F9B\u5206\u6790\u65B9\u6CD5\u7684\u5E94\u7528\u7A0B\u5E8F\u8BBE\u8BA1\u5E08\u5229\u7528\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7279\u70B9:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u88AB\u5206\u6790\u6570\u636E\u7684\u903B\u8F91\u89C6\u56FE\uFF1A \u5206\u6790\u5E08\u5982\u4F55\u770B\u5F85\u6570\u636E\u800C\u4E0D\u662F\u6570\u636E\u7269\u7406\u5730\u5B58\u653E\u5728\u5B58\u50A8\u5668\u4E2D\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5728\u7EBF\u6570\u636E\u5904\u7406\uFF08OLAP\uFF09\u548C\u805A\u5408\u6D4F\u89C8\uFF0C\u9ED8\u8BA4\u7684\u540E\u7AEF\u662F\u5173\u7CFB\u578B\u6570\u636E\u5E93 - ROLAP\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5C42\u6B21\u7EF4\u5EA6\uFF1A \u5C5E\u6027\u53EF\u4EE5\u6309\u5C42\u6B21\u72EC\u7ACB\u5B58\u5728\uFF0C\u4F8B\u5982\u7C7B-\u5B50\u7C7B\uFF0C\u56FD\u5BB6-\u5730\u533A\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E00\u4E2A\u7EF4\u5EA6\u4E0A\u521B\u5EFA\u591A\u4E2A\u5206\u5C42\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53EF\u5B9A\u4F4D\u7684\u5143\u6570\u636E\uFF08metadata\uFF09\u4E0E\u6570\u636E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6570\u636E\u7ACB\u65B9\u4F53\u5305\u542B\u6570\u636E\u7684\u8BA4\u53EF\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53EF\u62D6\u62FD\u7684\u6570\u636E\u4ED3\u5E93\uFF1A \u62FD\u5165\u5176\u5B83\u7684\u6570\u636E\u96C6")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BE5\u6846\u67B6\u662F\u53EF\u6269\u5C55\u7684\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"数据立方体-多维度-facts-与度量"},"\u6570\u636E\u7ACB\u65B9\u4F53\uFF0C \u591A\u7EF4\u5EA6\uFF0C Facts\uFF0C \u4E0E\u5EA6\u91CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u6846\u67B6\u63D0\u4F9B\u5BF9\u591A\u7EF4\u5EA6\u6570\u636E\u7ACB\u65B9\u4F53\u7684\u5EFA\u6A21\u3002\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(8019)/* ["default"] */ .Z),width:"770",height:"456"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Fact\u662F\u6307\u6570\u636E\u6700\u57FA\u672C\u7684\u5355\u5143\u3002Fact\u53EF\u4EE5\u662F\u4E00\u4E2A\u5408\u540C\uFF0C\u53D1\u8D27\u5355\uFF0C\u5F00\u9500\uFF0C\u4EFB\u52A1\u7B49\u7B49\u3002\n\u6BCF\u4E00\u4E2AFact\u62E5\u6709\u4E00\u4E2A\u5EA6\u91CF\uFF1A\u5EA6\u91CF\u662F\u4E00\u4E2A\u53EF\u4EE5\u88AB\u6D4B\u91CF\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982\u8BF4\u4EF7\u683C\uFF0C\u6570\u91CF\uFF0C\u6536\u76CA\uFF0C\u6301\u7EED\u65F6\u95F4\uFF0C\u7A0E\uFF0C\u6298\u6263\uFF0C\u7B49\u7B49\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7EF4\u5EA6\u4E3AFact\u63D0\u4F9B\u4E0A\u4E0B\u6587\uFF0C\u4F8B\u5982\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8FC7\u6EE4\u68C0\u7D22\u6216\u62A5\u544A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u63A7\u5236Fact\u805A\u5408\u7684\u8303\u56F4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7528\u4E8E\u6392\u5E8F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u4E49\u4E3B\u660E\u7EC6\u5F0F\u5173\u7CFB")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7EF4\u5EA6\u53EF\u4EE5\u5305\u542B\u591A\u4E2A\u5206\u5C42\uFF0C\u6BD4\u5982\u4E00\u4E2A\u65F6\u95F4\u7EF4\u5EA6\u53EF\u4EE5\u6309\u5E74\u5206\u5C42\uFF0C\u6309\u6708\u5206\u5C42\uFF0C\u548C\u6309\u5929\u5206\u5C42\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"特征概览"},"\u7279\u5F81\u6982\u89C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5DE5\u4F5C\u7A7A\u95F4\uFF1A\u7ACB\u65B9\u4F53\u5206\u6790\u5DE5\u4F5C\u7A7A\u95F4\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A21\u578B\uFF1A\u5B9A\u4E49\u6570\u636E\u4E0EMeta\u6570\u636E\uFF0C\u5305\u62EC\uFF1A\u6570\u636E\u7ACB\u65B9\u4F53\uFF0C\u7EF4\u5EA6\uFF0C\u5206\u5C42\uFF0C\u5C5E\u6027\uFF0C\u6807\u7B7E\uFF0C\u5B9A\u4F4D\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6D4F\u89C8\u5668\uFF1A\u805A\u5408\u6D4F\u89C8\uFF0C\u5207\u7247\uFF0C\u4E0B\u94BB\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u540E\u7AEF\uFF1A\u5177\u4F53\u5B9E\u73B0\u805A\u5408\u7684\u5E94\u7528\u65B9\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u670D\u52A1\u5668\uFF1A\u57FA\u4E8EWSGI\u7684HTTP\u670D\u52A1\u5668\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u683C\u5F0F\u5316\u5668\uFF1A\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u683C\u5F0F\u5316\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"slicer\uFF1A \u547D\u4EE4\u884C\u5DE5\u5177")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"模型"},"\u6A21\u578B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u903B\u8F91\u6A21\u578B\u4ECE\u5206\u6790\u5E08\u7684\u900F\u89C6\u56FE\u5B9A\u4E49\u6570\u636E\uFF0C\u5305\u62EC\u6570\u636E\u5982\u4F55\u5EA6\u91CF\u3001\u805A\u5408\u548C\u62A5\u544A\u3002\n\u6A21\u578B\u72EC\u7ACB\u4E8E\u6570\u636E\u7684\u7269\u7406\u7ED3\u6784\u3002\n\u8FD9\u79CD\u72EC\u7ACB\u4F7F\u5F97\u5206\u6790\u5E08\u53EF\u4EE5\u66F4\u52A0\u4E13\u6CE8\u4E8E\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u5982\u4F55\u4ECE\u96BE\u4EE5\u7406\u89E3\u7684\u8868\u5355\u4E2D\u83B7\u53D6\u6570\u636E\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"浏览器"},"\u6D4F\u89C8\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6570\u636E\u7ACB\u65B9\u4F53\u5206\u6790\u529F\u80FD\u7684\u6838\u5FC3\u662F\u805A\u5408\u6D4F\u89C8\u5668\u3002\n\u8FD9\u4E2A\u6D4F\u89C8\u5668\u6A21\u578B\u5305\u542B\u5B9E\u7528\u7684\u7C7B\u548C\u65B9\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"后端"},"\u540E\u7AEF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u540E\u7AEF\u63D0\u4F9B\u5B9E\u9645\u7684\u6570\u636E\u805A\u5408\u4E0E\u6D4F\u89C8\u65B9\u6CD5\u3002\n\u6570\u636E\u7ACB\u65B9\u4F53\u88AB\u521B\u5EFA\u4E3A \u5173\u7CFB\u578B\u5728\u7EBF\u6570\u636E\u5206\u6790\u8FC7\u7A0B ROLAP \u540E\u7AEF\uFF0C\u8BE5\u540E\u7AEF\u5B9E\u7528\u4EE5 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://www.sqlalchemy.org/download.html"},"SQLAlchemy")," \u9A71\u52A8\u7684 SQL \u6570\u636E\u5E93\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BE5\u6846\u67B6\u662F\u6A21\u5757\u5316\u7684\uFF0C\u56E0\u6B64\u53EF\u4EE5\u652F\u6301\u591A\u6570\u636E\u5E93\u540E\u7AEF\uFF0C\u53EF\u4EE5\u6709\u591A\u79CD\u7ACB\u65B9\u4F53\u8BA1\u7B97\u65B9\u6CD5\u4E0E\u6570\u636E\u805A\u5408\u6D4F\u89C8\u65B9\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"服务器"},"\u670D\u52A1\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cubes\u6709\u4E00\u4E2A\u5185\u7F6E\u7684WSGI HTTP\u670D\u52A1\u5668\uFF0C\u53EB\u505A slicer \u547D\u4EE4\u884C\u5DE5\u5177\u3002\n\u5BF9\u4E8E\u5927\u591A\u6570\u7684\u6846\u67B6\u529F\u80FD\uFF0C\u5B83\u90FD\u63D0\u4F9BJSON API\u3002\n\u8FD9\u4E2A\u670D\u52A1\u5668\u57FA\u4E8EWerkzeug WSGI\u6846\u67B6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"安装-cubes-并测试"},"\u5B89\u88C5 Cubes \u5E76\u6D4B\u8BD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F7F\u7528pip\u5B89\u88C5\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# \u5B89\u88C5cubes\uFF0C \u5305\u542B\u5168\u90E8\u6A21\u5757\npip install cubes[all]\n\n# \u514B\u9686\u4EE3\u7801\u5E76\u8FDB\u5165\u4F8B\u5B50\ngit clone git://github.com/DataBrewery/cubes.git\ncd cubes\ncd examples/hello_world\n\n# \u51C6\u5907\u6570\u636E\u5E76\u8FD0\u884COLAP\u670D\u52A1\u5668\uFF1A\npython prepare_data.py\nslicer serve slicer.ini\n\n# \u5C1D\u8BD5\u4E00\u4E9B\u67E5\u8BE2\uFF1A\ncurl \"http://localhost:5000/cube/irbd_balance/aggregate\"\ncurl \"http://localhost:5000/cube/irbd_balance/aggregate?drilldown=year\"\ncurl \"http://localhost:5000/cube/irbd_balance/aggregate?drilldown=item\"\ncurl \"http://localhost:5000/cube/irbd_balance/aggregate?drilldown=item&cut=item:e\"\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6216\u4F7F\u7528\u6E90\u4EE3\u7801\u5B89\u88C5\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"git clone git://github.com/DataBrewery/cubes.git\ncd cubes\npip install -r requirements.txt\npip install -r requirements-optional.txt\npython setup.py install\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"对股票数据挖掘"},"\u5BF9\u80A1\u7968\u6570\u636E\u6316\u6398"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u540C\u4E00\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA stock_model.json \uFF0C\u8FD9\u662F\u6A21\u578B\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u8F93\u5165\u4E0B\u9762\u5185\u5BB9\u5E76\u4FDD\u5B58\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"dimensions\": [\n    {\n      \"# \u65E5\u671F\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u7EF4\u5EA6\": \"\",\n      \"name\": \"date\",\n      \"# \u8BBE\u7F6E\u8FD9\u4E2A\u7EF4\u5EA6\u7684\u89C4\u5219\u4E3A\u65F6\u95F4\uFF0C\u76EE\u524D\u4E5F\u4EC5\u6709\u65F6\u95F4\u8FD9\u4E00\u4E2A\u89C4\u5219 https://cubes.readthedocs.io/en/latest/model.html?highlight=role\": \"Comment\",\n      \"role\": \"time\"\n    },\n    {\n      \"# \u6536\u76D8\u4EF7\u4F5C\u4E3A\u53E6\u4E00\u4E2A\u7EF4\u5EA6\": \"\",\n      \"name\": \"close\"\n    }\n  ],\n  \"cubes\": [\n    {\n      \"# \u6570\u636E\u7ACB\u65B9\u4F53\u540D\u79F0\uFF0C\u9700\u8981\u548C\u6570\u636E\u5E93\u4E2D\u90A3\u4E2A\u8868\u7EDF\u4E00\": \"\",\n      \"name\": \"stock_601398\",\n      \"dimensions\": [\n      ],\n      \"# \u6211\u4EEC\u6682\u65F6\u53EA\u6D4B\u91CF\u6536\u76D8\u4EF7\": \"\",\n      \"measures\": [\n        {\n          \"name\":\"close\",\n          \"label\":\"close\"\n        }\n      ],\n      \"aggregates\": [\n        {\n          \"# \u805A\u5408\u8BB0\u5F55\u6570\u91CF\uFF08\u65E5\u7EBF\u6570\u636E\u7684\u8BDD\u8868\u793A\u4EA4\u6613\u5929\u6570\uFF09\": \"function For example: sum, min, max.\",\n          \"name\": \"record_count\",\n          \"function\": \"count\"\n        },\n        {\n          \"# \u805A\u5408\u6536\u76D8\u4EF7\u6700\u5927\u503C\": \"\",\n          \"name\": \"close_max\",\n          \"function\": \"max\",\n          \"# \u8FD9\u4E2A\u5C31\u662F\u6211\u4EEC\u7684\u6D4B\u91CF\u503C\": \"\",\n          \"measure\": \"close\"\n        },\n        {\n          \"# \u805A\u5408\u6536\u76D8\u4EF7\u6700\u5C0F\u503C\": \"\",\n          \"name\": \"close_min\",\n          \"function\": \"min\",\n          \"measure\": \"close\"\n        }\n      ],\n      \"mappings\": {\n      }\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u540C\u4E00\u6587\u4EF6\u5939\u4E0B\uFF0C\u7528\u4E0B\u9762\u7684Notebook\u6267\u884C\u6316\u6398\u4EFB\u52A1\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53EF\u4EE5\u770B\u5230\uFF0C\u4ECE2015\u5E741\u67081\u65E5\u81F3\u4ECA\uFF082018\u5E747\u670831\u65E5\uFF09\uFF0C\u5DE5\u5546\u94F6\u884C\u5171\u4EA4\u6613\u4E86872\u5929\uFF0C\u6536\u76D8\u4EF7\u6700\u9AD87.421\u5143/\u80A1\uFF0C\u6700\u4F4E3.383\u5143/\u80A1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"未完待续"},"(\u672A\u5B8C\u5F85\u7EED)"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 8019:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/13a998f7-e77ef8df415b2b79f9615a6d81f2e7a2.png");

/***/ })

}]);