"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[4131],{

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

/***/ 10933:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'自动为Word文档中的日文汉字注音(ふりがな)的VBA脚本',date:new Date('2018-07-20T22:18:17.000Z'),lang:'zh-Hans',tags:['VBA','Word','Office'],categories:['日语 Japanese','阅读 Reading']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/wordautofurigana","id":"archieved/2018/wordautofurigana","title":"自动为Word文档中的日文汉字注音(ふりがな)的VBA脚本","description":"介绍","source":"@site/docs/archieved/2018/20180720-wordautofurigana.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/wordautofurigana","permalink":"/liaocy-net/docs/archieved/2018/wordautofurigana","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180720-wordautofurigana.md","tags":[{"label":"VBA","permalink":"/liaocy-net/docs/tags/vba"},{"label":"Word","permalink":"/liaocy-net/docs/tags/word"},{"label":"Office","permalink":"/liaocy-net/docs/tags/office"}],"version":"current","sidebarPosition":20180720,"frontMatter":{"title":"自动为Word文档中的日文汉字注音(ふりがな)的VBA脚本","date":"2018-07-20T22:18:17.000Z","lang":"zh-Hans","tags":["VBA","Word","Office"],"categories":["日语 Japanese","阅读 Reading"]},"sidebar":"tutorialSidebar","previous":{"title":"Git子项目的创建与克隆","permalink":"/liaocy-net/docs/archieved/2018/gitsubmodule"},"next":{"title":"在Ubuntu 18.04部署SCWS-1.2.3中文分词与PHP支持","permalink":"/liaocy-net/docs/archieved/2018/07/ubuntuscws"}};var assets={};var toc=[{value:'介绍',id:'介绍',level:2},{value:'问题背景',id:'问题背景',level:2},{value:'开发及测试环境',id:'开发及测试环境',level:2},{value:'解决方案',id:'解决方案',level:2},{value:'1、 打开Word的“开发工具”菜单',id:'1-打开word的开发工具菜单',level:3},{value:'2、代码',id:'2代码',level:3},{value:'3、运行',id:'3运行',level:3},{value:'参考资料',id:'参考资料',level:2},{value:'结果和感想',id:'结果和感想',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"介绍"},"\u4ECB\u7ECD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u6587\u4EE3\u7801\u57FA\u4E8E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.ka-net.org/blog/?p=7576"},"\u304D\u306C\u3042\u3055\u7684\u4EE3\u7801"),"\u8FDB\u884C\u6539\u826F\uFF0C\u5411\u539F\u4F5C\u8005\u8868\u793A\u81F4\u656C\uFF0C\u8F6C\u53D1\u6B64\u6587\u8BF7\u4E00\u5E76\u8F6C\u53D1\u539F\u4F5C\u8005\u5730\u5740\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\uFF1A\u539F\u4F5C\u8005\u7684\u4EE3\u7801\u9047\u5230\u627E\u4E0D\u5230\u6CE8\u97F3\u7684\u6C49\u5B57\u4F1A\u6B7B\u5FAA\u73AF\u5361\u5728\u90A3\u91CC\u3002\n\u6211\u4FEE\u6B63\u4E86\u8FD9\u4E2A\u95EE\u9898\u3002\n\u4FEE\u6B63\u540E\u7684\u7248\u672C\u5982\u679C\u9047\u5230\u627E\u4E0D\u5230\u6CE8\u97F3\u7684\u6C49\u5B57\uFF0C\u5C31\u8DF3\u8FC7\u5B83\u800C\u4E0D\u662F\u5361\u5728\u90A3\u91CC\u3002\n\u5F53\u7136\u8FD9\u79CD\u60C5\u51B5\u5F88\u5C11\uFF0C\u5B8C\u5168\u4E0D\u5F71\u54CD\u9605\u8BFB\uFF0C\u56E0\u6B64\u53EF\u4EE5\u65E0\u4EBA\u503C\u5B88\u5730\u8F6C\u6362Word\u957F\u6587\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"问题背景"},"\u95EE\u9898\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F17\u6240\u5468\u77E5Word\u6709\u81EA\u52A8\u7ED9\u65E5\u6587\u6C49\u5B57\u6CE8\u97F3\u7684\u529F\u80FD\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Word中给汉字注音的传统方法1/2",src:(__webpack_require__(35026)/* ["default"] */ .Z),width:"1588",height:"565"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u70B9\u51FB\u786E\u5B9A\u4EE5\u540E\uFF0C\u76F8\u5E94\u7684\u6C49\u5B57\u5C31\u88AB\u6CE8\u97F3\u4E86\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"Word中给汉字注音的传统方法2/2",src:(__webpack_require__(65186)/* ["default"] */ .Z),width:"810",height:"408"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u79CD\u65B9\u6CD5\u5BF9\u65E5\u8BED\u5B66\u4E60\u8005\u5F88\u6709\u5E2E\u52A9\u3002\n\u4F46\u662F\u53EF\u4EE5\u53D1\u73B0\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u65E0\u6CD5\u5BF9\u5927\u6BB5\u7684\u6587\u5B57\u540C\u65F6\u6CE8\u97F3\uFF0C\u6BCF\u6B21\u53EA\u80FD\u6CE8\u97F3\u4E00\u4E24\u53E5\u8BDD\u3002\n\u5373\u4F7F\u4F60\u9009\u62E9\u4E86\u5927\u6BB5\u7684\u6587\u5B57\uFF0C\u4E5F\u53EA\u80FD\u5BF9\u524D\u4E00\u4E24\u53E5\u8BDD\u8FDB\u884C\u6CE8\u97F3\u3002\n\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5199\u4E00\u4E2AWord\u6587\u6863\u5185\u7F6E\u7684Visual Basic for Applications (VBA)\u811A\u672C\uFF0C\u6765\u5B9E\u73B0\u5BF9\u5927\u6BB5\u6587\u5B57\u6216\u5168\u6587\u7684\u6CE8\u97F3\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"开发及测试环境"},"\u5F00\u53D1\u53CA\u6D4B\u8BD5\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Microsoft Office Word 2013")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"解决方案"},"\u89E3\u51B3\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9996\u5148\uFF0C\u6211\u4EEC\u8BBE\u7F6E\u6587\u7AE0\u7684\u8BED\u8A00\u4E3A\u65E5\u8BED\uFF0C\u5426\u5219\u67D0\u4E9B\u6C49\u5B57\u53EF\u80FD\u88AB\u5F53\u505A\u4E2D\u6587\u540E\u6807\u8BB0\u4E3A\u6C49\u8BED\u62FC\u97F3\u3002\n\u6309Ctrl+A\u5168\u9009\u6587\u672C\uFF0C\u70B9\u51FB\u201C\u5BA1\u9605\u201D\u9009\u9879\u5361\uFF0C\u70B9\u51FB\u201C\u8BED\u8A00\u201D\u6309\u94AE\uFF0C\u5728\u5F39\u51FA\u7684\u83DC\u5355\u4E2D\u9009\u62E9\u201C\u8BBE\u7F6E\u6821\u5BF9\u8BED\u8A00\u201D\u9009\u9879\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(1006)/* ["default"] */ .Z),width:"1577",height:"886"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u5F39\u51FA\u7684\u201C\u8BED\u8A00\u201D\u5BF9\u8BDD\u6846\u4E2D\uFF0C\u9009\u62E9\u65E5\u8BED\uFF0C\u52FE\u9009\u201C\u4E0D\u68C0\u67E5\u62FC\u5199\u6216\u8BED\u6CD5\u201D\uFF0C\u4E0D\u8981\u52FE\u9009\u201C\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00\u201D\uFF0C\u70B9\u51FB\u786E\u5B9A\u4FDD\u5B58\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(50055)/* ["default"] */ .Z),width:"1268",height:"827"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u6837\u4E00\u6765\uFF0C\u5168\u4F53\u6587\u672C\u5C31\u88AB\u8BBE\u7F6E\u4E3A\u65E5\u8BED\u4E86\u3002\n\u4E4B\u540E\uFF0C\u6839\u636E\u4E0B\u9762\u6B65\u9AA4\u5BF9\u6587\u672C\u8FDB\u884C\u6CE8\u97F3\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"1-打开word的开发工具菜单"},"1\u3001 \u6253\u5F00Word\u7684\u201C\u5F00\u53D1\u5DE5\u5177\u201D\u83DC\u5355"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u90E8\u5206Word\u7684\u201C\u5F00\u53D1\u5DE5\u5177\u201D\u9ED8\u8BA4\u662F\u4E0D\u663E\u793A\u7684\uFF0C\u6211\u4EEC\u5728\u8BBE\u7F6E\u91CC\u6253\u5F00\u5B83\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9996\u5148\uFF0C\u70B9\u51FBword\u5DE6\u4E0A\u89D2\u7684\u201C\u6587\u4EF6\u201D\u6309\u94AE\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(12203)/* ["default"] */ .Z),width:"511",height:"322"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7136\u540E\uFF0C\u70B9\u51FB\u201C\u9009\u9879\u201D\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(74460)/* ["default"] */ .Z),width:"807",height:"329"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E4B\u540E\uFF0C\u5728\u5F39\u5F00\u7684\u201CWord\u9009\u9879\u201D\u5BF9\u8BDD\u6846\u4E2D\uFF0C\u4F9D\u6B21\u9009\u62E9\u201C\u81EA\u5B9A\u4E49\u529F\u80FD\u533A\u201D\uFF0C\u52FE\u9009\u201C\u5F00\u53D1\u5DE5\u5177\u201D\uFF0C\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u4FDD\u5B58\u8BBE\u7F6E\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(18293)/* ["default"] */ .Z),width:"1062",height:"856"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6700\u540E\uFF0C\u53EF\u4EE5\u5728Word\u7684\u9876\u90E8\u83DC\u5355\u4E2D\u770B\u5230\u201C\u5F00\u53D1\u5DE5\u5177\u201D\u9009\u9879\u5361\uFF0C\u9009\u62E9\u5B83\uFF0C\u5E76\u70B9\u51FB\u6309\u94AE\u201CVisual Basic\u201D\u6253\u5F00VBA\u7F16\u8F91\u5668\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(19863)/* ["default"] */ .Z),width:"1043",height:"492"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"2代码"},"2\u3001\u4EE3\u7801"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u6253\u5F00\u7684VBA\u7F16\u8F91\u5668\u4E2D\uFF0C\u7C98\u8D34\u4EE5\u4E0B\u4EE3\u7801\uFF08\u6309\u4EE3\u7801\u4E0B\u9762\u7684\u56FE\u793A\uFF09\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-VB"},"Option Explicit\n  \nPublic Sub FuriganaSelectedRange()\n  SetPhoneticRange Selection.Range\nEnd Sub\n \nPublic Sub FuriganaAllDocument()\n  SetPhoneticRange ActiveDocument.Range\nEnd Sub\n \nPrivate Sub SetPhoneticRange(ByVal rng As Word.Range)\n  Dim r As Word.Range\n  Dim past_r As String\n  For Each r In rng.Words\n    If r.Fields.Count < 1 Then\n      If ChkKanjiRange(r) = True And r <> past_r Then\n        past_r = r\n        r.Select\n        Application.Dialogs(wdDialogPhoneticGuide).Show 1\n      End If\n    End If\n  Next\n  \n  For Each r In rng.Characters\n    If r.Fields.Count < 1 Then\n      If ChkKanjiRange(r) = True Then\n        r.Select\n        Application.Dialogs(wdDialogPhoneticGuide).Show 1\n      End If\n    End If\n  Next\nEnd Sub\n  \nPrivate Function ChkKanjiRange(ByVal rng As Word.Range) As Boolean\n  Dim ret As Boolean\n  Dim i As Long\n   \n  ret = True\n  For i = 1 To Len(rng.Text)\n    If IsKanji(Mid(rng.Text, i, 1)) = False Then\n      ret = False\n      Exit For\n    End If\n  Next\n  ChkKanjiRange = ret\nEnd Function\n  \nPrivate Function IsKanji(ByVal char As String) As Boolean\n  Dim cc As Variant\n  Dim ret As Boolean\n   \n  ret = True\n  cc = Val(\"&H\" & Hex(AscW(char)) & \"&\")\n  Select Case cc\n    Case 63744 To 64255\n    Case 13312 To 19903\n    Case 19968 To 40959\n    Case 131072 To 173791\n    Case 173824 To 177983\n    Case 177984 To 178207\n    Case 194560 To 195103\n    Case Else\n      ret = False\n  End Select\n  IsKanji = ret\nEnd Function\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5C06\u4E0A\u9762\u4EE3\u7801\u7C98\u8D34\u5728\u4EE3\u7801\u533A\u57DF\uFF0C\u5E76\u70B9\u51FB\u7EFF\u8272\u4E09\u89D2\u5F62\u201C\u8FD0\u884C\u201D\u6309\u94AE\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(6411)/* ["default"] */ .Z),width:"1764",height:"878"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"3运行"},"3\u3001\u8FD0\u884C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u70B9\u51FB\u70B9\u51FB\u7EFF\u8272\u4E09\u89D2\u5F62\u201C\u8FD0\u884C\u201D\u6309\u94AE\u540E\uFF0C\u51FA\u73B0\u5BF9\u8BDD\u6846\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9009\u62E9\u201CFuriganaAllDocument\u201D\u7684\u8BDD\u5219\u4F1A\u5BF9\u5168\u6587\u6863\u6CE8\u97F3\uFF08\u63A8\u8350\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9009\u62E9\u201CFuriganaSelectedRange\u201D\u7684\u8BDD\u5219\u53EA\u4F1A\u5BF9\u9009\u62E9\u6587\u5B57\u6CE8\u97F3\n\u9009\u62E9\u5B8C\u6210\u540E\u70B9\u51FB\u201C\u8FD0\u884C\u201D\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(85167)/* ["default"] */ .Z),width:"1249",height:"644"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u70B9\u51FB\u201C\u8FD0\u884C\u201D\u540E\u5F00\u59CB\u6CE8\u97F3\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(56729)/* ["default"] */ .Z),width:"1225",height:"637"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\u97F3\u8FC7\u7A0B\u4E2D\u70B9\u51FB\u952E\u76D8\u201CESC\u201D\u952E\u53EF\u4EE5\u4E2D\u9014\u9000\u51FA\u3002\n\u8BE5\u7B97\u6CD5\u652F\u6301\u65AD\u70B9\u91CD\u65B0\u5F00\u59CB\uFF0C\u6240\u4EE5\u4E0D\u7528\u62C5\u5FC3\u4E2D\u9014\u9000\u51FA\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.ka-net.org/blog/?p=7576"},"\u4EE3\u7801\u53C2\u8003\u8D44\u6599")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://jingyan.baidu.com/article/9f7e7ec05965d46f28155496.html"},"\u5F00\u53D1\u5DE5\u5177\u83DC\u5355\u5F00\u542F\u5F15\u7528\u8D44\u6599")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"结果和感想"},"\u7ED3\u679C\u548C\u611F\u60F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5173\u4E8E\u6267\u884C\u6548\u7387\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\u97F3\u590F\u76EE\u6F31\u77F3\u7684\u300C\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u300D\u7B2C\u4E00\u7AE0\uFF0C\u5305\u542B13,622\u4E2A\u5B57\u7B26\uFF08\u5305\u542B\u5047\u540D\uFF09\uFF0C\n\u6267\u884C\u4E00\u904D\u5927\u7EA6\u9700\u898115\u5206\u949F\u3002"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 1006:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/1f84e296-7160d398efe3d1e57885c898688f3e26.png");

/***/ }),

/***/ 18293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/2333e88c-b11ac8d2479e17a64d53be430e95d2d5.png");

/***/ }),

/***/ 19863:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/548797ff-5de269adedcf3d0ecf15d58217d720bf.png");

/***/ }),

/***/ 65186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/5a5e52ad-1a1612a57af5803146c29b256c64a5fd.png");

/***/ }),

/***/ 50055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/7eb6fb20-33723aa9555aff8b84d32a2ce766dd27.png");

/***/ }),

/***/ 6411:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/8511bcb4-ede3d34061de376afbb3cabbb9364830.png");

/***/ }),

/***/ 85167:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/aed595aa-183bd7b8f860dcbce5776fe3bc230346.png");

/***/ }),

/***/ 74460:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/b3aab0b3-1dc077c569794038846248fdef488e7f.png");

/***/ }),

/***/ 12203:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/d992ce56-f9bba29eb0bc44f103e70722bec7ce1d.png");

/***/ }),

/***/ 35026:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/fbcd6570-e0555cef5d961e73cd59073884cdd930.png");

/***/ }),

/***/ 56729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/wordfurigana-2f753b72860490356f48c71c2945ce96.gif");

/***/ })

}]);