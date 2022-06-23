"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[2794],{

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

/***/ 44733:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'创建本地OSRM实例，用OSM做导航数据',date:new Date('2018-10-08T17:40:22.000Z'),lang:'zh-Hans',tags:['OSRM','Python','深度学习 Deep Learning'],categories:['开发 Development','Open Street Map (OSM)']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/10/osrmlocalinstance","id":"archieved/2018/10/osrmlocalinstance","title":"创建本地OSRM实例，用OSM做导航数据","description":"介绍","source":"@site/docs/archieved/2018/10/08-osrmlocalinstance.md","sourceDirName":"archieved/2018/10","slug":"/archieved/2018/10/osrmlocalinstance","permalink":"/liaocy-net/docs/archieved/2018/10/osrmlocalinstance","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/10/08-osrmlocalinstance.md","tags":[{"label":"OSRM","permalink":"/liaocy-net/docs/tags/osrm"},{"label":"Python","permalink":"/liaocy-net/docs/tags/python"},{"label":"深度学习 Deep Learning","permalink":"/liaocy-net/docs/tags/深度学习-deep-learning"}],"version":"current","sidebarPosition":8,"frontMatter":{"title":"创建本地OSRM实例，用OSM做导航数据","date":"2018-10-08T17:40:22.000Z","lang":"zh-Hans","tags":["OSRM","Python","深度学习 Deep Learning"],"categories":["开发 Development","Open Street Map (OSM)"]},"sidebar":"tutorialSidebar","previous":{"title":"Tensorflow学习（二） -- 基本分类器","permalink":"/liaocy-net/docs/archieved/2018/09/tensorflowtutorial02"},"next":{"title":"Tensorflow学习（三） -- 基本文本分类任务","permalink":"/liaocy-net/docs/archieved/2018/10/tensorflowtutorial03"}};var assets={};var toc=[{value:'介绍',id:'介绍',level:2},{value:'参考文献',id:'参考文献',level:2},{value:'系统环境',id:'系统环境',level:2},{value:'构建OSRM',id:'构建osrm',level:2},{value:'导入Open Street Map地图数据',id:'导入open-street-map地图数据',level:2},{value:'提取导航数据',id:'提取导航数据',level:2},{value:'创建数据',id:'创建数据',level:2},{value:'启动服务',id:'启动服务',level:2},{value:'调用接口',id:'调用接口',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"介绍"},"\u4ECB\u7ECD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Open Source Routing Machine (OSRM) \u662F\u4E00\u4E2A\u5BFC\u822A\u8DEF\u5F84\u8BA1\u7B97\u5E93\u3002\n\u7ED9\u5B9A\u4E24\u4E2A\u5730\u7406\u5750\u6807\uFF0C\u901A\u8FC7OSRM\u53EF\u4EE5\u8BA1\u7B97\u5176\u95F4\u7684\u8DEF\u5F84\u3001\u8DDD\u79BB\u3001\u4EA4\u901A\u65F6\u95F4\uFF0C\u5E76\u63D0\u4F9B HTTP \u548C C++ \u7684\u63A5\u53E3\u3002\n\u7531\u4E8E\u5B83\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5E93\uFF0C\u4F60\u53EF\u4EE5\u628A\u5B83\u7684\u5B9E\u4F8B\u5B89\u88C5\u5728\u672C\u5730\uFF0C\u4EE5\u6784\u6210\u4E00\u4E2A\u5BFC\u822A\u670D\u52A1\u3002\n\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u5B98\u65B9\u670D\u52A1\u5668\u7684\u9650\u989D\u95EE\u9898\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考文献"},"\u53C2\u8003\u6587\u732E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://datawookie.netlify.com/blog/2017/09/building-a-local-osrm-instance/"},"Building a Local OSRM Instance"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"系统环境"},"\u7CFB\u7EDF\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Ubuntu: 18.04 LTS (OSRM\u5BF9\u4E8E\u5185\u5B58\u7684\u8981\u6C42\u8F83\u9AD8\uFF0C\u56E0\u6B64\u81F3\u5C11\u4FDD\u8BC14GB\u7684swap\u7A7A\u95F4)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"构建osrm"},"\u6784\u5EFAOSRM"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5B89\u88C5\u7CFB\u7EDF\u4F9D\u8D56\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"apt update\napt install -y git cmake build-essential jq htop\napt install -y liblua5.2-dev libboost-all-dev libprotobuf-dev libtbb-dev libstxxl-dev libbz2-dev\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u514B\u9686\u4EE3\u7801\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"git clone https://github.com/Project-OSRM/osrm-backend.git\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FDB\u5165\u6587\u4EF6\u5939\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"cd osrm-backend/\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u6D4B\u8BD5\u7684\u65F6\u5019\u4F7F\u7528\u7248\u672Cv5.18.0\uFF0C\u56E0\u6B64\u6211\u4EEC\u5C06\u4EE3\u7801\u5207\u6362\u5230v5.18.0\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"git checkout v5.18.0\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u521B\u5EFAbuild\u6587\u4EF6\u5939\u5E76\u7F16\u8BD1\u4EE3\u7801\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"mkdir build\ncd build/\ncmake ..\nmake\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5B89\u88C5\u7F16\u8BD1\u597D\u7684\u7A0B\u5E8F\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"make install\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"导入open-street-map地图数据"},"\u5BFC\u5165Open Street Map\u5730\u56FE\u6570\u636E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6253\u5F00",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://www.openstreetmap.org/export"},"\u5BFC\u51FA\u5730\u56FE\u6570\u636E\u7684\u7F51\u9875"),"\uFF0C\n\u5728\u8FD9\u4E2A\u9875\u9762\u91CC\uFF0C\u53EF\u89C1\u5730\u56FE\u7684\u5750\u6807\u8303\u56F4\u663E\u793A\u5728\u5DE6\u9762\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"导出香港的数据",src:(__webpack_require__(55753)/* ["default"] */ .Z),width:"1918",height:"1041"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\uFF0C\u4E0B\u8F7D\u76F8\u5E94\u7684\u5730\u56FE\u6570\u636E\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"wget -O map.xml http://overpass-api.de/api/map?bbox=114.4306,22.1327,113.8607,22.5398\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5176\u4E2D\u56DB\u4E2A\u5750\u6807\u5206\u522B\u662F \u53F3\uFF0C\u4E0B\uFF0C\u5DE6\uFF0C\u4E0A\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5C06\u4E0B\u8F7D\u597D\u7684map.xml\u6587\u4EF6\u653E\u5728osrm-backend\u6587\u4EF6\u5939\u4E0B\u9762\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"提取导航数据"},"\u63D0\u53D6\u5BFC\u822A\u6570\u636E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728osrm-backend\u6587\u4EF6\u5939\u4E0B\u6267\u884C\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"osrm-extract map.xml -p profiles/car.lua\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"创建数据"},"\u521B\u5EFA\u6570\u636E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u521B\u5EFA\u7ED3\u6784\u5316\u6570\u636E\u4EE5\u652F\u6301\u9AD8\u901F\u63D0\u53D6\u5BFC\u822A\u6700\u77ED\u8DEF\u5F84\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"osrm-contract map.xml.osrm\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"启动服务"},"\u542F\u52A8\u670D\u52A1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u542F\u52A8HTTP\u670D\u52A1\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"osrm-routed map.xml.osrm\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"调用接口"},"\u8C03\u7528\u63A5\u53E3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E4B\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u6309\u7167",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://project-osrm.org/docs/v5.15.2/api/"},"OSRM\u7684\u63A5\u53E3"),"\u8FDB\u884C\u8C03\u7528\u4E86\u3002\n\u53EA\u8981\u628AURL\u6539\u6210\u6211\u4EEC\u670D\u52A1\u5668\u7684\u5730\u5740\uFF0C\u9ED8\u8BA4\u4E3A\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://127.0.0.1:5000/"},"http://127.0.0.1:5000/")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 55753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/8924e14c-b6823c290f145b47f853436584bcfffa.png");

/***/ })

}]);