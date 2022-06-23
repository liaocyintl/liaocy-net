"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[9837],{

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

/***/ 6509:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'Ubuntu 18.04 LTS 设置为默认启动命令行模式',date:new Date('2018-07-12T12:39:17.000Z'),lang:'zh-Hans',tags:['Ubuntu'],categories:['开发 Development','Ubuntu']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/ubuntureboottoterminal","id":"archieved/2018/ubuntureboottoterminal","title":"Ubuntu 18.04 LTS 设置为默认启动命令行模式","description":"问题背景","source":"@site/docs/archieved/2018/20180712-ubuntureboottoterminal.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/ubuntureboottoterminal","permalink":"/liaocy-net/docs/archieved/2018/ubuntureboottoterminal","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180712-ubuntureboottoterminal.md","tags":[{"label":"Ubuntu","permalink":"/liaocy-net/docs/tags/ubuntu"}],"version":"current","sidebarPosition":20180712,"frontMatter":{"title":"Ubuntu 18.04 LTS 设置为默认启动命令行模式","date":"2018-07-12T12:39:17.000Z","lang":"zh-Hans","tags":["Ubuntu"],"categories":["开发 Development","Ubuntu"]},"sidebar":"tutorialSidebar","previous":{"title":"一种网页分割算法 Web Segment","permalink":"/liaocy-net/docs/archieved/2018/websegment"},"next":{"title":"在Ubuntu 16.04 上部署微软机器学习服务器","permalink":"/liaocy-net/docs/archieved/2018/ubuntuwindowsmlserver"}};var assets={};var toc=[{value:'问题背景',id:'问题背景',level:2},{value:'解决方案',id:'解决方案',level:2},{value:'原理',id:'原理',level:3},{value:'改变启动后的运行级',id:'改变启动后的运行级',level:3},{value:'永久改变开机启动运行级与目标系统',id:'永久改变开机启动运行级与目标系统',level:3},{value:'复原',id:'复原',level:3},{value:'结果和感想',id:'结果和感想',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"问题背景"},"\u95EE\u9898\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F7F\u7528Desktop\u7248\u5B89\u88C5Ubuntu\u975E\u5E38\u65B9\u4FBF\uFF0C\u4F46\u5982\u679C\u4F5C\u4E3A\u670D\u52A1\u5668\u4F7F\u7528\uFF0C\u542F\u52A8Desktop\u672A\u5FC5\u592A\u7D2F\u8D58\u4E86\uFF0C\u56E0\u6B64\u8981\u5C06Ubuntu\u8BBE\u7F6E\u6210\u9ED8\u8BA4\u542F\u52A8\u65F6\u8FDB\u5165\u547D\u4EE4\u884C\uFF0C\u4E0D\u52A0\u8F7DDesktop\u7A0B\u5E8F\u3002\n\u4EE5\u524D\u7684\u7248\u672C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 /etc/default/grub \u6765\u5B9E\u73B0\uFF0C\u4F4618.04LTS\u7248\u672C\u4E0B\u4F3C\u4E4E\u4E0D\u592A\u7BA1\u7528\u3002\n\u672C\u6587\u89E3\u51B3\u8FD9\u4E24\u4E2A\u95EE\u9898\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"解决方案"},"\u89E3\u51B3\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.systutorials.com/239880/change-systemd-boot-target-linux/"},"\u539F\u6587\u5730\u5740")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"原理"},"\u539F\u7406"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F17\u591A\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4F8B\u5982RHEL/CentOS 7, Fedora, Ubuntu\uFF0C\u4F7F\u7528systemd\u4EE3\u66FFinit\u4F5C\u4E3A\u7CFB\u7EDF\u521D\u59CB\u5316\u3002\n\u7528\u6237\u53EF\u4EE5\u6309\u201CGUI\u201D\u6216\u201CText\u201D\u6A21\u5F0F\u542F\u52A8\u7CFB\u7EDF\u3002\n\u5728\u4EE5\u524D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u2018/etc/inittab\u2019\u6765\u66F4\u6539\u542F\u52A8\u7EA7\u522B\uFF0C\u4F46\u8FD9\u79CD\u65B9\u6CD5\u5728sytemd\u7CFB\u7EDF\u4E0A\u65E0\u6548\u3002\n\u672C\u6587\u4ECB\u7ECD\u4E00\u79CD\u5728sytemd\u7CFB\u7EDF\u4E0A\u4FEE\u6539\u201C\u8FD0\u884C\u7EA7\uFF08runlevels\uFF09\u201D\u7684\u65B9\u6CD5\uFF0C\u4EE5\u9ED8\u8BA4\u542F\u52A8\u547D\u4EE4\u884C\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5BF9\u4E8Esystemd\u7CFB\u7EDF\uFF0C\u8FD0\u884C\u7EA7\u7684\u6982\u5FF5\u88AB\u66FF\u6362\u4E3A\u7EC4\uFF08term\uFF09\u7684\u201Ctargets\u201D\u3002\n\u8FD9\u662F\u4E00\u79CD\u521D\u59CB\u5316\u8FD0\u884C\u7EA7\u4E0E\u521D\u59CB\u5316\u76EE\u6807\uFF08targets\uFF09\u7684\u5BF9\u5E94\u5173\u7CFB\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u8FD0\u884C\u7EA7"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u521D\u59CB\u5316\u76EE\u6807"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"poweroff.target")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"rescue.target")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"2, 3, 4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"multi-user.target")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"graphical.target")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"reboot.target")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5176\u4E2D\u4E24\u4E2ATargets\u662F\u6700\u5E38\u7528\u7684"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"multi-user.target\uFF1A\u5C5E\u4E8E\u8FD0\u884C\u7EA7 3\uFF0C \u6587\u5B57\u6A21\u5F0F\uFF08\u547D\u4EE4\u884C\u6A21\u5F0F\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"graphical.target\uFF1A\u5C5E\u4E8E\u8FD0\u884C\u7EA7 5\uFF0C GUI \u6A21\u5F0F\u6216\u684C\u9762\u6A21\u5F0F\uFF08X server\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\7a5c7eea.png",alt:"\u7CFB\u7EDF\u67B6\u6784",title:"\u7CFB\u7EDF\u67B6\u6784"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"改变启动后的运行级"},"\u6539\u53D8\u542F\u52A8\u540E\u7684\u8FD0\u884C\u7EA7"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5F53Linux\u7CFB\u7EDF\u542F\u52A8\u5E76\u8FDB\u5165\u4E00\u4E2A\u76EE\u6807\u7CFB\u7EDF\u540E\uFF0C\u4F60\u53EF\u4EE5\u6539\u53D8\u5176\u76EE\u6807\u7CFB\u7EDF\u53CA\u8FD0\u884C\u7EA7\u3002\n\u6BD4\u5982\u8BF4\uFF0C\u6539\u53D8\u5F53\u524D\u76EE\u6807\u7CFB\u7EDF\u5230\u201Cmulti-user\u201D\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# systemctl isolate multi-user.target\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5355\u72EC\u4F7F\u7528\u8BE5\u547D\u4EE4\uFF0C\u5B83\u5C06\u542F\u52A8\u4E00\u4E2A\u547D\u4EE4\u884C\u5E76\u5173\u95ED\u5176\u4ED6\u5168\u90E8\u5E94\u7528\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"永久改变开机启动运行级与目标系统"},"\u6C38\u4E45\u6539\u53D8\u5F00\u673A\u542F\u52A8\u8FD0\u884C\u7EA7\u4E0E\u76EE\u6807\u7CFB\u7EDF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u5C1D\u8BD5\u6539\u53D8\u9ED8\u8BA4\u5F00\u673A\u542F\u52A8\u76EE\u6807\u7CFB\u7EDF\u3002\n\u6BD4\u5982\uFF0C\u6211\u4EEC\u8BA9\u201Cmulti-user.target\u201D\u6210\u4E3A\u5F00\u673A\u9ED8\u8BA4\u8FD0\u884C\u7EA7\u522B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# systemctl enable multi-user.target\n# systemctl set-default multi-user.target\n# reboot\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u6837\uFF0C\u91CD\u542F\u540E\u5C31\u4F1A\u8FDB\u5165\u547D\u4EE4\u884C\u6A21\u5F0F\u800C\u4E0D\u662FGUI\u6A21\u5F0F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"复原"},"\u590D\u539F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# systemctl enable graphical.target\n# systemctl set-default graphical.target\n# reboot\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u6837\uFF0C\u91CD\u542F\u540E\u5C31\u4F1A\u9ED8\u8BA4\u8FDB\u5165GUI\u6A21\u5F0F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"结果和感想"},"\u7ED3\u679C\u548C\u611F\u60F3"));};MDXContent.isMDXComponent=true;

/***/ })

}]);