"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[7685],{

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

/***/ 29617:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'一种网页分割算法 Web Segment',date:new Date('2018-07-08T17:22:17.000Z'),lang:'zh-Hans',tags:['网页分割 Web Segment','数据挖掘 Data Mining','算法 Algorithm','Python','爬虫 Crawler'],categories:['研究 Research','数据挖掘 Data Mining']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/websegment","id":"archieved/2018/websegment","title":"一种网页分割算法 Web Segment","description":"介绍","source":"@site/docs/archieved/2018/20180708-websegment.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/websegment","permalink":"/liaocy-net/docs/archieved/2018/websegment","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180708-websegment.md","tags":[{"label":"网页分割 Web Segment","permalink":"/liaocy-net/docs/tags/网页分割-web-segment"},{"label":"数据挖掘 Data Mining","permalink":"/liaocy-net/docs/tags/数据挖掘-data-mining"},{"label":"算法 Algorithm","permalink":"/liaocy-net/docs/tags/算法-algorithm"},{"label":"Python","permalink":"/liaocy-net/docs/tags/python"},{"label":"爬虫 Crawler","permalink":"/liaocy-net/docs/tags/爬虫-crawler"}],"version":"current","sidebarPosition":20180708,"frontMatter":{"title":"一种网页分割算法 Web Segment","date":"2018-07-08T17:22:17.000Z","lang":"zh-Hans","tags":["网页分割 Web Segment","数据挖掘 Data Mining","算法 Algorithm","Python","爬虫 Crawler"],"categories":["研究 Research","数据挖掘 Data Mining"]},"sidebar":"tutorialSidebar","previous":{"title":"一个可以输出具体变化字符的编辑距离改进算法","permalink":"/liaocy-net/docs/archieved/2018/detaileditdistance"},"next":{"title":"Ubuntu 18.04 LTS 设置为默认启动命令行模式","permalink":"/liaocy-net/docs/archieved/2018/ubuntureboottoterminal"}};var assets={};var toc=[{value:'介绍',id:'介绍',level:2},{value:'快速开始',id:'快速开始',level:2},{value:'输出结果',id:'输出结果',level:2},{value:'result.json',id:'resultjson',level:3},{value:'screenshot.png',id:'screenshotpng',level:3},{value:'images (文件夹)',id:'images-文件夹',level:3},{value:'一些算法细节',id:'一些算法细节',level:2},{value:'引用',id:'引用',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"介绍"},"\u4ECB\u7ECD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"HTML\u6587\u6863\u662F\u4E00\u79CD\u534A\u7ED3\u6784\u5316\uFF08semi-structured\uFF09\u6570\u636E\uFF0C\u8FD9\u79CD\u6570\u636E\u76F4\u63A5\u5904\u7406\u662F\u5F88\u56F0\u96BE\u7684\u3002\n\u6211\u4EEC\u8BBE\u8BA1\u4E00\u79CD\u7F51\u9875\u5206\u5272\u7B97\u6CD5\uFF0C\u8BD5\u56FE\u81EA\u52A8\u5730\u5C06\u534A\u7ED3\u6784\u5316\u7684HTML\u6587\u6863\u8F6C\u6362\u4E3A\u7ED3\u6784\u5316\u6570\u636E\u3002\n\u901A\u8FC7\u8FD9\u4E2A\u7B97\u6CD5\uFF0C\u4E00\u4E2AHTML\u6587\u6863\u88AB\u5206\u5272\u6210\u201C\u5206\u5272\uFF08Segment\uFF09\u201D\u4E0E\u201C\u8BB0\u5F55\uFF08Record\uFF09\u201D\uFF0C\u5206\u522B\u5BF9\u5E94\u7ED3\u6784\u5316\u6570\u636E\u5E93\u4E2D\u7684\u201C\u8868\u201D\u548C\u201C\u884C\u201D\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F8B\u5982\u4E0B\u9762\u7684\u4E8B\u4F8B\uFF0C\u4E00\u5F20\u7F51\u9875\u88AB\u5206\u5272\u6210 Segment 1\uFF0C\u5176\u4E2D\u5305\u542BRecord 1-6\uFF1B\u548CSegment 2\uFF0C\u5176\u4E2D\u5305\u62ECRecord 7-12\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\487e62df.png",alt:"\u7F51\u9875\u5206\u5272\u7684\u4F8B\u5B50",title:"\u7F51\u9875\u5206\u5272\u7684\u4F8B\u5B50"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5BF9\u5E94\u5230\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF0C\u8868\u793A\u4E3A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Segment 1:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"Record ID"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"Images"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"Texts"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"td","href":"https://img.alicdn.com/imgextr"},"https://img.alicdn.com/imgextr"),"..."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u4F18\u7F8E\u5587\u53ED\u8896\u6E05\u65B0\u788E\u82B1...")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"td","href":"https://img.alicdn.com/imgextr"},"https://img.alicdn.com/imgextr"),"..."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"D&G\u7D2B\u8272\u624B\u63D0\u5305")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"..."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"..."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"...")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Segment 2:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"Record ID"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"Images"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"Texts"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"7"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"td","href":"https://img.alicdn.com/imgextr"},"https://img.alicdn.com/imgextr"),"..."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6F6E\u8303\u65F6\u5149\u673A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"td","href":"https://img.alicdn.com/imgextr"},"https://img.alicdn.com/imgextr"),"..."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u653E\u98DE\u81EA\u6211\u7684\u5154\u5C0F\u59D0")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"..."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"..."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"...")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u7684\u7B97\u6CD5\u53EF\u4EE5\u81EA\u52A8\u5730\u5C06\u7F51\u9875\u8F6C\u6362\u6210\u4E0A\u9762\u7684\u5F62\u5F0F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"快速开始"},"\u5FEB\u901F\u5F00\u59CB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6211\u4EEC\u7684\u6D4B\u8BD5\u73AF\u5883\uFF08\u672C\u7B97\u6CD5\u4E5F\u53EF\u4EE5\u517C\u5BB9Linux\u6216Mac\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u64CD\u4F5C\u7CFB\u7EDF\uFF1A Microsoft Windows 10 Pro"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Python\uFF1A 3.6.5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Chrome\uFF1A 67.0.3396.79 (Official Build) (64-bit)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Chrome-driver: 2.4"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u4ECEGithub\u4E0A\u514B\u9686\u4EE3\u7801")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ git clone --recursive https://github.com/liaocyintl/WebSegment.git\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u8C03\u6574 setting.py"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"CHROME_BINARY_LOCATION \u662FChrome\u7684\u5E94\u7528\u7A0B\u5E8F\u8DEF\u5F84",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Windows\u9ED8\u8BA4\u5B89\u88C5\u7684\u60C5\u51B5\u4E0B\u662F \"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\""),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Linux\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F \"/usr/bin/google-chrome\"\uFF0C\u5B89\u88C5\u65B9\u6CD5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://qiita.com/shinsaka/items/37436e256c813d277d6d"},"\u53C2\u8003\u8FD9\u91CC")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Mac OS\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F \"/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary\"\uFF0C\u5B89\u88C5\u65B9\u6CD5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://duo.com/decipher/driving-headless-chrome-with-python"},"\u53C2\u8003\u8FD9\u91CC")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"DRIVER_PATH: \u8FD9\u662FChrome\u65E0\u5934\u6D4F\u89C8\u5668\u7684\u9A71\u52A8\uFF0C\u60A8\u9700\u8981",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://chromedriver.storage.googleapis.com/index.html?path=2.40/"},"\u4E0B\u8F7D\u5BF9\u5E94\u60A8\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7248\u672C"),"\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5B8C\u6210\u4E0A\u9762\u7684\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"demo.py")," \u4E2D\u7684\u4EE3\u7801\u5C1D\u8BD5\u5206\u5272\u4E00\u4E2A\u7F51\u9875"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"from segment import Segment\nspliter = Segment()\nspliter.segment(url=\"http://www.sukiya.jp/\", output_folder=\"data/sukiya\", is_output_images=True)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53C2\u6570\u8BBE\u5B9A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u53C2\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u89E3\u91CA"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"url"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u60A8\u9700\u8981\u5206\u5272\u7684\u7F51\u9875\u5730\u5740")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"output_folder"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u8F93\u51FA\u5206\u5272\u7ED3\u679C\u7684\u6587\u4EF6\u5939\u8DEF\u5F84")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"is_output_images"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u662F\u5426\u8F93\u51FA\u7F51\u9875\u56FE\u7247\uFF0C\u9ED8\u8BA4\u4E3A\"False\"")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"输出结果"},"\u8F93\u51FA\u7ED3\u679C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"resultjson"},"result.json"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"result.json \u662F\u6700\u4E3B\u8981\u7684\u8F93\u51FA\u6587\u4EF6\uFF0C\u5176\u4E2D\u5305\u542B\u8F6C\u5316\u4E3A\u7ED3\u6784\u5316\u6570\u636E\u7684\u7F51\u9875\u5185\u5BB9\u3002\u5176\u4F8B\u5B50\u4E3A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-json"},"{\n  \"title\":\"\u6DD8\u5B9D\",\n  \"url\":\"http://taobao.com/\",\n  \"segments\": [\n    {\n      \"records\": [\n        {\n          \"texts\": [\"\u6DD8\u5B9D\u7F51\"],\n          \"css_selectors\": [\n            \"html > body:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div\"\n          ],\n          \"links\": [\n            {\n              \"href\": \"http://www.taobao.com/\"\n            }\n          ],\n          \"images\": [\n            {\n              \"alt\": \"\",\n              \"src\": \"http://www.taobao.com/common/img/hd_logo.png\",\n              \"path\": \"data/taobao/images/66_0.png\",\n              \"bg_color\": \"255,255,255\"\n            }\n          ],\n          \"record_id\": 66\n        }\n      ],\n      \"segment_id\": 13,\n      \"css_selector\": \"html > body:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div\"\n    }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5176\u7ED3\u6784\u4E3A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"title: \u7F51\u9875\u7684\u6807\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"url: \u7F51\u9875\u7684URL"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"segments: Segment\u7684\u96C6\u5408\uFF0C\u5305\u542B\u591A\u4E2ARecord",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"segment_id: \u8BE5Segment\u7684ID\uFF0C\u5728result.json\u4E2D\u7684\u552F\u4E00\u6807\u8BC6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"css_selector: \u8BE5Segment\u7684css_selector\u8DEF\u5F84\uFF08\u6BCF\u4E2ASegment\u4EC5\u6709\u4E00\u4E2A\u6839\u8282\u70B9\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"records: Record\u7684\u96C6\u5408\uFF0C\u5C5E\u4E8E\u8BE5Segment",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"record_id: \u8BE5Record\u7684ID\uFF0C\u5728result.json\u4E2D\u7684\u552F\u4E00\u6807\u8BC6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"css_selectors: \u8BE5Record\u7684css_selector\u8DEF\u5F84\uFF08\u4E00\u4E2ARecord\u53EF\u80FD\u5305\u542B\u591A\u4E2A\u6839\u8282\u70B9\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"texts: Record\u4E2D\u5305\u542B\u7684\u6587\u5B57\u7684\u96C6\u5408"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"links: Record\u4E2D\u5305\u542B\u7684\u8D85\u94FE\u63A5\u7684\u96C6\u5408",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"href: \u8D85\u94FE\u63A5\u7684URL (\u5DF2\u5168\u90E8\u8F6C\u5316\u4E3A\u7EDD\u5BF9URL)"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"images: Record\u4E2D\u5305\u542B\u7684\u56FE\u7247\u96C6\u5408",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"alt: \u56FE\u7247\u7684alt\u5C5E\u6027"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"src: \u56FE\u7247\u7684URL (\u5DF2\u5168\u90E8\u8F6C\u5316\u4E3A\u7EDD\u5BF9URL)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"path: \u56FE\u7247\u5728\u672C\u5730\u8F6C\u5B58\u7684\u8DEF\u5F84\uFF08\u4EC5\u5F53\u8BBE\u7F6Eis_output_images\u4E3ATrue\u65F6\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"bg_color: \u56FE\u7247\u7684\u80CC\u666F\u989C\u8272\uFF0C\u8868\u793A\u4E3A","[R,G,B]")))))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"screenshotpng"},"screenshot.png"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7F51\u9875\u622A\u5C4F\u5FEB\u7167"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"images-文件夹"},"images (\u6587\u4EF6\u5939)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5F53\u8BBE\u7F6Eis",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"output_images\u4E3ATrue\u65F6\uFF0C\u7F51\u9875\u56FE\u7247\u88AB\u4E0B\u8F7D\u5E76\u8F6C\u5B58\u5230\u8FD9\u91CC\uFF0C\u5E76\u5168\u90E8\u8F6C\u5316\u4E3AJPG\u683C\u5F0F\uFF08\u53EF\u5728Setting\u4E2D\u8BBE\u7F6E\uFF09\u3002\n\u6587\u4EF6\u540D\u683C\u5F0F\u4E3A\u201CRecodeID"),"\u5E8F\u6570.jpg\u201D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"一些算法细节"},"\u4E00\u4E9B\u7B97\u6CD5\u7EC6\u8282"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u67D0\u4E9B\u7F51\u9875\u56FE\u7247\u4F1A\u9690\u85CF\u5728\u8282\u70B9CSS\u7684Background image\u5F53\u4E2D\uFF0C\u5F53\u5176\u5B58\u5728\u65F6\u6211\u4EEC\u7684\u722C\u866B\u4F1A\u62BD\u53D6\u8FD9\u4E9B\u56FE\u7247\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u67D0\u4E9B\u6709\u900F\u660E\u80CC\u666F\u7684PNG\u56FE\u7247\u4F1A\u4EE5\u81EA\u8EAB\u989C\u8272\u548C\u80CC\u666F\u989C\u8272\u5171\u540C\u663E\u793A\u56FE\u6848\uFF0C\u4F8B\u5982\u767D\u8272\u6587\u5B57\u7EFF\u8272\u80CC\u666F\u3002\u6211\u4EEC\u7684\u722C\u866B\u4F1A\u63A2\u6D4B\u5176\u80CC\u666F\u989C\u8272\uFF0C\u5E76\u62BD\u53D6\u56FE\u5C42\u5408\u5E76\u540E\u7684\u56FE\u7247\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"引用"},"\u5F15\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5982\u679C\u60A8\u559C\u6B22\u6211\u4EEC\u7684\u5DE5\u4F5C\uFF0C\u8BF7\u5F15\u7528\u6211\u4EEC\u7684\u8BBA\u6587\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"@article{websegment,\n  title={An Event Data Extraction Method Based on HTML Structure Analysis and Machine Learning},\n  author={Liao, Chenyi and Hiroi, Kei and Kaji, Katsuhiko and Kawaguchi, Nobuo},\n  journal={Computer Software and Applications Conference (COMPSAC)},\n  volume={3},\n  pages = {217-222},\n  year={2015}\n}\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);