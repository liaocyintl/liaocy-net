"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[5587],{

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

/***/ 40804:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CentOS系统设置虚拟内存SWAP',date:new Date('2019-05-13T20:54:25.000Z'),lang:'zh-Hans',tags:['CentOS','SWAP'],categories:['开发 Development','CentOS','SWAP']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/05/centosswap","id":"archieved/2019/05/centosswap","title":"CentOS系统设置虚拟内存SWAP","description":"CentOS默认是没有设定虚拟内存SWAP的，系统运行到内存不足的时候，oom killer机制会保护性的杀掉某些进程。","source":"@site/docs/archieved/2019/05/13-centosswap.md","sourceDirName":"archieved/2019/05","slug":"/archieved/2019/05/centosswap","permalink":"/liaocy-net/docs/archieved/2019/05/centosswap","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/05/13-centosswap.md","tags":[{"label":"CentOS","permalink":"/liaocy-net/docs/tags/cent-os"},{"label":"SWAP","permalink":"/liaocy-net/docs/tags/swap"}],"version":"current","sidebarPosition":13,"frontMatter":{"title":"CentOS系统设置虚拟内存SWAP","date":"2019-05-13T20:54:25.000Z","lang":"zh-Hans","tags":["CentOS","SWAP"],"categories":["开发 Development","CentOS","SWAP"]},"sidebar":"tutorialSidebar","previous":{"title":"Docker容器内设置全局代理","permalink":"/liaocy-net/docs/archieved/2019/04/containerproxy"},"next":{"title":"Linux 命令速查","permalink":"/liaocy-net/docs/archieved/2019/05/linuxcmd"}};var assets={};var toc=[{value:'参考资料',id:'参考资料',level:2},{value:'系统环境',id:'系统环境',level:2},{value:'解决方案',id:'解决方案',level:2},{value:'查看目前内存状态',id:'查看目前内存状态',level:3},{value:'创建SWAP文件',id:'创建swap文件',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"CentOS\u9ED8\u8BA4\u662F\u6CA1\u6709\u8BBE\u5B9A\u865A\u62DF\u5185\u5B58SWAP\u7684\uFF0C\u7CFB\u7EDF\u8FD0\u884C\u5230\u5185\u5B58\u4E0D\u8DB3\u7684\u65F6\u5019\uFF0Coom killer\u673A\u5236\u4F1A\u4FDD\u62A4\u6027\u7684\u6740\u6389\u67D0\u4E9B\u8FDB\u7A0B\u3002\n\u6240\u4EE5\u8BBE\u7F6E\u865A\u62DF\u5185\u5B58SWAP\u7EDD\u5BF9\u662F\u6709\u610F\u4E49\u7684\u3002\n\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u8BBE\u7F6ECentOS\u7684SWAP\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://qiita.com/wmx/items/631222f2e5a9e7a59fb4"},"\u53C2\u8003\u8D44\u65991"),"\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://blog.csdn.net/orchidcat/article/details/78497724"},"\u53C2\u8003\u8D44\u65992")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"系统环境"},"\u7CFB\u7EDF\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"CentOS")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"解决方案"},"\u89E3\u51B3\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"查看目前内存状态"},"\u67E5\u770B\u76EE\u524D\u5185\u5B58\u72B6\u6001"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ free -m\n\n              total        used        free      shared  buff/cache   available\nMem:            957         136         441           0         379         639\nSwap:             0           0           0\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53EF\u4EE5\u770B\u5230\u76EE\u524DSWAP\u7684\u91CF\u662F0\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"创建swap文件"},"\u521B\u5EFASWAP\u6587\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728CentOS\u91CC\uFF0CSWAP\u662F\u4EE5\u6587\u4EF6\u7684\u5F62\u5F0F\u5B58\u5728\u7684\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"1\u3001\u4E0B\u9762\u7684\u4F8B\u5B50\u7528\u6765\u521B\u5EFA1GB\u7684SWAP\u6587\u4EF6\uFF08\u6BCF\u4E2ABlock 1MB\uFF0C\u4E00\u5171\u521B\u5EFA1,024\u4E2A\uFF09\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"[root@localhost ~]# dd if=/dev/zero of=/swapfile bs=1M count=1024\n\n1024+0 records in\n1024+0 records out\n1073741824 bytes (1.1 GB) copied, 2.56416 s, 419 MB/s\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E00\u822C\u5EFA\u8BAE\u521B\u5EFA\u865A\u62DF\u5185\u5B58\u5927\u5C0F\u4E3A\u65E0\u529B\u5185\u5B58\u76842\u500D\u3002\u6BD4\u59821GB\u7684\u673A\u5668\uFF0C\u53EF\u4EE5\u521B\u5EFA2GB\u7684\u865A\u62DF\u5185\u5B58\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\uFF12\u3001\u53D8\u66F4SWAP\u6587\u4EF6\u7684\u6743\u9650\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"[root@localhost ~]# chmod 600 /swapfile\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\uFF13\u3001\u5C06\u6587\u4EF6\u7C7B\u578B\u8F6C\u6362\u4E3ASWAP"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"[root@localhost ~]# mkswap /swapfile\n\nSetting up swapspace version 1, size = 1048572 KiB\nno label, UUID=d0519bf6-8abf-4c0d-9375-8068c9e5e9a1\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"4\u3001\u6FC0\u6D3BSWAP"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"[root@localhost ~]# swapon /swapfile\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u786E\u8BA4\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"[root@localhost ~]# free -m\n\n              total        used        free      shared  buff/cache   available\nMem:            741          76          57           9         606         537\nSwap:          1023           0        1023\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"5\u3001\u6301\u4E45\u5316SWAP"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E0A\u9762\u7684\u8FC7\u7A0B\u521B\u5EFA\u7684SWAP\uFF0C\u4E00\u65E6\u7CFB\u7EDF\u91CD\u542F\u5C31\u6D88\u5931\u4E86\uFF0C\u56E0\u6B64\u6211\u4EEC\u901A\u8FC7\u4E0B\u9762\u7684\u6B65\u9AA4\u6765\u5BF9SWAP\u8FDB\u884C\u6301\u4E45\u5316\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7F16\u8F91 /etc/fstab \u5728\u5176\u4E2D\u8FFD\u52A0\u4E00\u884C\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"/swapfile                                 swap                    swap    defaults        0 0\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);