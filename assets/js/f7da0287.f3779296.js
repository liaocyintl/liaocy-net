"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[4237],{

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

/***/ 65154:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'Win10 Linux 子系统(WSL)缓慢及卡顿的解决方法',date:new Date('2018-06-13T14:50:17.000Z'),lang:'zh-Hans',tags:['Windows','Ubuntu','Windows子系统 WLS'],categories:['开发 Development','Windows']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/wslslow","id":"archieved/2018/wslslow","title":"Win10 Linux 子系统(WSL)缓慢及卡顿的解决方法","description":"Windows 10 Linux 子系统 (Windows Subsystem for Linux, WSL)允许在windows内建Ubuntu系统并使用Bash命令，极大地方便了用户特别是开发者。","source":"@site/docs/archieved/2018/20180613-wslslow.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/wslslow","permalink":"/liaocy-net/docs/archieved/2018/wslslow","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180613-wslslow.md","tags":[{"label":"Windows","permalink":"/liaocy-net/docs/tags/windows"},{"label":"Ubuntu","permalink":"/liaocy-net/docs/tags/ubuntu"},{"label":"Windows子系统 WLS","permalink":"/liaocy-net/docs/tags/windows子系统-wls"}],"version":"current","sidebarPosition":20180613,"frontMatter":{"title":"Win10 Linux 子系统(WSL)缓慢及卡顿的解决方法","date":"2018-06-13T14:50:17.000Z","lang":"zh-Hans","tags":["Windows","Ubuntu","Windows子系统 WLS"],"categories":["开发 Development","Windows"]},"sidebar":"tutorialSidebar","previous":{"title":"在Hexo + GithubPage中使用个人域名","permalink":"/liaocy-net/docs/archieved/2018/privatedomain"},"next":{"title":"求若干坐标点最近邻区间分界线:用Python计算Voronoi图","permalink":"/liaocy-net/docs/archieved/2018/voronoi"}};var assets={};var toc=[{value:'关闭 Antimalware Service Excutable',id:'关闭-antimalware-service-excutable',level:3},{value:'卸载360安全卫士与360杀毒',id:'卸载360安全卫士与360杀毒',level:3},{value:'结果和感想',id:'结果和感想',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Windows 10 Linux \u5B50\u7CFB\u7EDF (Windows Subsystem for Linux, WSL)\u5141\u8BB8\u5728windows\u5185\u5EFAUbuntu\u7CFB\u7EDF\u5E76\u4F7F\u7528Bash\u547D\u4EE4\uFF0C\u6781\u5927\u5730\u65B9\u4FBF\u4E86\u7528\u6237\u7279\u522B\u662F\u5F00\u53D1\u8005\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F46\u662F\uFF0C\u7B14\u8005\u5728\u4F7F\u7528WSl\u65F6\u53D1\u73B0\u5947\u6162\uFF0C\u5361\u987F\u975E\u5E38\u4E25\u91CD\u3002\n\u6BD4\u5982\u8BF4\u5728PowerShell\u4E2D\u542F\u52A8Ubuntu\uFF0C\u7ADF\u7136\u9700\u898130\u79D2\u4EE5\u4E0A\uFF1BApt-get\u66F4\u662F\u6162\u7684\u60CA\u4EBA\uFF0C\u534A\u5C0F\u65F6\u4EE5\u4E0A\u751A\u81F3\u6709\u65F6\u5019\u76F4\u63A5\u5361\u6B7B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7B14\u8005\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"关闭-antimalware-service-excutable"},"\u5173\u95ED Antimalware Service Excutable"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Antimalware Service Excutable (ASE) \u662F Windows \u5185\u7F6E\u7684\u5B89\u5168\u9632\u62A4\u8F6F\u4EF6\uFF0C\u5728\u8FD0\u884CWSL\u65F6\uFF0C\u53EF\u4EE5\u770B\u5230ASE\u5728\u540E\u53F0\u8FD0\u884C\u5360\u7528CPU\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"ASE阻碍WSL",src:(__webpack_require__(70463)/* ["default"] */ .Z),title:"ASE\u963B\u788DWSL",width:"1191",height:"217"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u56E0\u6B64\u6211\u4EEC\u4FEE\u6539\u6CE8\u518C\u8868\u628A\u5B83\u5173\u6389\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\u610F\uFF1A\u5173\u95EDASE\u4F1A\u9020\u6210\u4E00\u5B9A\u7684\u5B89\u5168\u98CE\u9669\uFF0C\u8981\u614E\u91CD\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u64CD\u4F5C\u6B65\u9AA4\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u6309Win+R\u6253\u5F00\u8FD0\u884C\u5BF9\u8BDD\u6846\uFF0C\u8F93\u5165 regedit \u70B9\u51FB\u786E\u5B9A\u6253\u5F00\u6CE8\u518C\u8868\u7BA1\u7406\u5668\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728\u5DE6\u4FA7\u627E\u5230 HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows Defender \u76EE\u5F55\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728\u7A97\u53E3\u5DE6\u4FA7\u53F3\u51FB Windows Defender \uFF0C\u9009\u62E9 \u201C\u65B0\u5EFA\u201D\uFF0C \u521B\u5EFA\u4E00\u4E2A DWORD \u952E\u503C\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u952E\u503C\u540D\u79F0\u4E3A DisableAntiSpyware \uFF0C \u5176\u503C\u8BBE\u7F6E\u4E3A 1\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u91CD\u542F\u8BA1\u7B97\u673A\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53C2\u8003\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://answers.microsoft.com/en-us/protect/forum/all/how-to-kill-antimalware-service-executable/b5ce5b46-a65b-460c-b4cd-e2cca50358cf?page=1"},"\u300AHow to kill \"Antimalware Service Executable\"\u300B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"卸载360安全卫士与360杀毒"},"\u5378\u8F7D360\u5B89\u5168\u536B\u58EB\u4E0E360\u6740\u6BD2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5B9E\u8BDD\u8BF4360\u5B89\u5168\u536B\u58EB\u4E0E360\u6740\u6BD2\u90FD\u662F\u975E\u5E38\u597D\u7528\u7684\u9632\u62A4\u8F6F\u4EF6\uFF0C\u8FD9\u91CC\u5378\u8F7D\u5B9E\u5C5E\u8FEB\u4E0D\u5F97\u5DF2\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53E6\u4E00\u4E2A\u6321\u5728WSL\u524D\u9762\u7684\u8FDB\u7A0B\u662F\u201C360\u5B89\u5168\u536B\u58EB\u4E3B\u52A8\u9632\u62A4\u201D\uFF0C\u6211\u5C1D\u8BD5\u5C06WSL\u52A0\u5165\u5230360\u6728\u9A6C\u9632\u62A4\u767D\u540D\u5355\uFF0C\u4F46\u662F\u6CA1\u6709\u6539\u5584\u3002\n\u4E0D\u5F97\u5DF2\u5C06360\u5B89\u5168\u536B\u58EB\u4E0E360\u6740\u6BD2\u5378\u8F7D\u4E86\u7528\u522B\u7684\u6740\u6BD2\u8F6F\u4EF6\u4EE3\u66FF\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5E0C\u671B\u4EE5\u540E360\u4F1A\u9488\u5BF9WSL\u505A\u4F18\u5316\uFF0C\u90A3\u65F6\u5019\u518D\u56DE\u6765\u7528\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"结果和感想"},"\u7ED3\u679C\u548C\u611F\u60F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7ECF\u8FC7\u4EE5\u4E0A\u64CD\u4F5C\uFF0CWSL\u5065\u6B65\u5982\u98DE\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F5C\u8005\u4E0D\u4FDD\u8BC1\u8FD9\u4E9B\u65B9\u6CD5\u9002\u5408\u6240\u6709\u7528\u6237\u3002\n\u9047\u5230WSL\u7F13\u6162\u6216\u5361\u987F\u7684\u8BFB\u8005\u8FD8\u662F\u8981\u6839\u636E\u4EFB\u52A1\u7BA1\u7406\u5668\u4E2D\u5404\u8FDB\u7A0B\u7684CPU\u5360\u7528\u7387\uFF0C\n\u81EA\u5DF1\u5206\u6790\u963B\u788DWSL\u8FD0\u884C\u7684\u8FDB\u7A0B\uFF0C\u5E76\u91C7\u53D6\u76F8\u5E94\u7684\u63AA\u65BD\u3002"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 70463:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/20180613001-bdcc315cf3059df3c03d47a969642a58.png");

/***/ })

}]);