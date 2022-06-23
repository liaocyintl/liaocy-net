"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[5818],{

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

/***/ 85217:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'Docker容器内设置全局代理',date:new Date('2019-04-30T12:19:25.000Z'),lang:'zh-Hans',tags:['Docker','Proxy'],categories:['开发 Development','Docker']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/04/containerproxy","id":"archieved/2019/04/containerproxy","title":"Docker容器内设置全局代理","description":"本文介绍如何设置Docker容器的全局代理。通过在Docker容器内设置全局代理，可以让容器内的应用程序通过代理获取网络资源。","source":"@site/docs/archieved/2019/04/30-containerproxy.md","sourceDirName":"archieved/2019/04","slug":"/archieved/2019/04/containerproxy","permalink":"/liaocy-net/docs/archieved/2019/04/containerproxy","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/04/30-containerproxy.md","tags":[{"label":"Docker","permalink":"/liaocy-net/docs/tags/docker"},{"label":"Proxy","permalink":"/liaocy-net/docs/tags/proxy"}],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Docker容器内设置全局代理","date":"2019-04-30T12:19:25.000Z","lang":"zh-Hans","tags":["Docker","Proxy"],"categories":["开发 Development","Docker"]},"sidebar":"tutorialSidebar","previous":{"title":"在Ubuntu上用Apache运行Flask网站","permalink":"/liaocy-net/docs/archieved/2019/04/ubuntuapacheslask"},"next":{"title":"CentOS系统设置虚拟内存SWAP","permalink":"/liaocy-net/docs/archieved/2019/05/centosswap"}};var assets={};var toc=[{value:'参考资料',id:'参考资料',level:2},{value:'系统环境',id:'系统环境',level:2},{value:'解决方案',id:'解决方案',level:2},{value:'创建Dockerfile文件',id:'创建dockerfile文件',level:3},{value:'编译容器',id:'编译容器',level:3},{value:'运行容器',id:'运行容器',level:3},{value:'测试',id:'测试',level:3},{value:'结果',id:'结果',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u8BBE\u7F6EDocker\u5BB9\u5668\u7684\u5168\u5C40\u4EE3\u7406\u3002\u901A\u8FC7\u5728Docker\u5BB9\u5668\u5185\u8BBE\u7F6E\u5168\u5C40\u4EE3\u7406\uFF0C\u53EF\u4EE5\u8BA9\u5BB9\u5668\u5185\u7684\u5E94\u7528\u7A0B\u5E8F\u901A\u8FC7\u4EE3\u7406\u83B7\u53D6\u7F51\u7EDC\u8D44\u6E90\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.cnblogs.com/dazhoushuoceshi/p/7066041.html"},"\u53C2\u8003\u8D44\u65991"),"\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://kebingzao.com/2019/02/22/docker-container-proxy/"},"\u53C2\u8003\u8D44\u65992")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"系统环境"},"\u7CFB\u7EDF\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Docker 18.09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"解决方案"},"\u89E3\u51B3\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"创建dockerfile文件"},"\u521B\u5EFADockerfile\u6587\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-Dockerfile:","metastring":"Dockerfile","Dockerfile":true},"FROM Ubuntu:18.04\nENV MY_PROXY_URL=\"http://{username}:{password}@{proxy_ip}:{proxy_port}/\"\nENV HTTP_PROXY=$MY_PROXY_URL \\\n    HTTPS_PROXY=$MY_PROXY_URL \\\n    FTP_PROXY=$MY_PROXY_URL \\\n    http_proxy=$MY_PROXY_URL \\\n    https_proxy=$MY_PROXY_URL \\\n    ftp_proxy=$MY_PROXY_URL\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5176\u4E2D\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"{username}: \u4EE3\u7406\u670D\u52A1\u5668\u7528\u6237\u540D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"{password}: \u4EE3\u7406\u670D\u52A1\u5668\u5BC6\u7801"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"{proxy_ip}: \u4EE3\u7406\u670D\u52A1\u5668IP\u5730\u5740"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"{proxy_port}: \u4EE3\u7406\u670D\u52A1\u5668\u7AEF\u53E3")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\u610F\uFF1A\n\u8FD9\u4E2A\u7A0B\u5E8F\u6BB5\u5E94\u8BE5\u653E\u5728RUN apt-get ... \u548C CMD \u4E4B\u95F4\uFF0C\u8FD9\u6837\u6BCF\u6B21\u66F4\u6539\u4EE3\u7406\u670D\u52A1\u5668\u4E0D\u4F1A\u5F71\u54CD\u7F16\u8BD1\u901F\u5EA6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"编译容器"},"\u7F16\u8BD1\u5BB9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker build -t proxy-test .\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"运行容器"},"\u8FD0\u884C\u5BB9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker run -it --rm --name proxy-test proxy-test /bin/bash\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"测试"},"\u6D4B\u8BD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ curl cip.cc\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8F93\u51FA\uFF1A\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(23140)/* ["default"] */ .Z),width:"338",height:"138"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"结果"},"\u7ED3\u679C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7406\u8BBE\u7F6E\u6210\u529F\uFF0C\u5BB9\u5668\u5185\u7684\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u901A\u8FC7\u4EE3\u7406\u8BBF\u95EE\u4E92\u8054\u7F51\u4E86"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 23140:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/b700cb03-fe16059d7e1f3ed8d756513dffe3b11f.png");

/***/ })

}]);