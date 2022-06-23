"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[1313],{

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

/***/ 65383:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'在Ubuntu 16.04 上部署微软机器学习服务器',date:new Date('2018-07-12T16:33:00.000Z'),lang:'zh-Hans',tags:['Ubuntu','微软机器学习服务器 Microsoft Machine Learning Server','机器学习 Machine Learning'],categories:['研究 Research','机器学习 Machine Learning']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/ubuntuwindowsmlserver","id":"archieved/2018/ubuntuwindowsmlserver","title":"在Ubuntu 16.04 上部署微软机器学习服务器","description":"问题背景","source":"@site/docs/archieved/2018/20180712-ubuntuwindowsmlserver.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/ubuntuwindowsmlserver","permalink":"/liaocy-net/docs/archieved/2018/ubuntuwindowsmlserver","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180712-ubuntuwindowsmlserver.md","tags":[{"label":"Ubuntu","permalink":"/liaocy-net/docs/tags/ubuntu"},{"label":"微软机器学习服务器 Microsoft Machine Learning Server","permalink":"/liaocy-net/docs/tags/微软机器学习服务器-microsoft-machine-learning-server"},{"label":"机器学习 Machine Learning","permalink":"/liaocy-net/docs/tags/机器学习-machine-learning"}],"version":"current","sidebarPosition":20180712,"frontMatter":{"title":"在Ubuntu 16.04 上部署微软机器学习服务器","date":"2018-07-12T16:33:00.000Z","lang":"zh-Hans","tags":["Ubuntu","微软机器学习服务器 Microsoft Machine Learning Server","机器学习 Machine Learning"],"categories":["研究 Research","机器学习 Machine Learning"]},"sidebar":"tutorialSidebar","previous":{"title":"Ubuntu 18.04 LTS 设置为默认启动命令行模式","permalink":"/liaocy-net/docs/archieved/2018/ubuntureboottoterminal"},"next":{"title":"在 Ubuntu 18.04 上安装部署 Airflow 1.9.0","permalink":"/liaocy-net/docs/archieved/2018/airflowdeploy"}};var assets={};var toc=[{value:'问题背景',id:'问题背景',level:2},{value:'环境',id:'环境',level:2},{value:'解决方案',id:'解决方案',level:2},{value:'软件包列表',id:'软件包列表',level:3},{value:'安装步骤',id:'安装步骤',level:3},{value:'常见问题',id:'常见问题',level:3},{value:'有效化Web服务部署与远程连接',id:'有效化web服务部署与远程连接',level:3},{value:'结果和感想',id:'结果和感想',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"问题背景"},"\u95EE\u9898\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"环境"},"\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Ubuntu 16.04 Server\uFF0CDesktop\u7248\u5E94\u8BE5\u4E5F\u53EF\u4EE5\u3002\u4F46\u662F\uFF0CUbuntu 18.04 LTS\u5B89\u88C5\u4E0D\u4E86\uFF0C\u4E0D\u8981\u6D6A\u8D39\u65F6\u95F4\u4E86\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u786C\u4EF6\u8981\u6C42\uFF08\u5B98\u65B9\uFF09\uFF1A\u6700\u5C0F2GB\u5185\u5B58\uFF0C500MB\u786C\u76D8\uFF08\u63A8\u83508GB\u4EE5\u4E0A\u786C\u76D8\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"解决方案"},"\u89E3\u51B3\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.microsoft.com/en-us/machine-learning-server/install/machine-learning-server-linux-offline"},"\u539F\u6587\u5730\u5740")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"软件包列表"},"\u8F6F\u4EF6\u5305\u5217\u8868"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5168\u90E8\u8F6F\u4EF6\u5305\u7684\u5217\u8868\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"microsoft-mlserver-packages-r-9.3.0         ** \u6838\u5FC3\n microsoft-mlserver-python-9.3.0            ** \u6838\u5FC3\n microsoft-mlserver-packages-py-9.3.0       ** \u6838\u5FC3\n microsoft-mlserver-mml-r-9.3.0             ** microsoftml for R (\u53EF\u9009)\n microsoft-mlserver-mml-py-9.3.0            ** microsoftml for Python (\u53EF\u9009)\n microsoft-mlserver-mlm-r-9.3.0             ** pre-trained models (\u9700\u8981 mml)\n microsoft-mlserver-mlm-py-9.3.0            ** pre-trained models (\u9700\u8981 mml)\n microsoft-mlserver-hadoop-9.3.0            ** hadoop (\u9700\u8981 for hadoop)\n microsoft-mlserver-adminutil-9.3           ** operationalization (\u53EF\u9009)\n microsoft-mlserver-computenode-9.3         ** operationalization (\u53EF\u9009)\n microsoft-mlserver-config-rserve-9.3       ** operationalization (\u53EF\u9009) \n microsoft-mlserver-dotnet-9.3              ** operationalization (\u53EF\u9009)\n microsoft-mlserver-webnode-9.3             ** operationalization (\u53EF\u9009)\n azure-cli-2.0.25-1.el7.x86_64              ** operationalization (\u53EF\u9009)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"安装步骤"},"\u5B89\u88C5\u6B65\u9AA4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"\n# \u4EE5root\u65B9\u5F0F\u5B89\u88C5\nsudo su\n\n# \u53EF\u9009\u6B65\u9AA4, \u5982\u679C\u4F60\u7684\u7CFB\u7EDF\u6CA1\u6709https apt transport\u7684\u8BDD\napt-get install apt-transport-https\n\n# \u589E\u52A0 **azure-cli** \u4ED3\u5E93\u5230\u4F60\u7684apt\u8D44\u6E90\u5217\u8868\nAZ_REPO=$(lsb_release -cs)\n\necho \"deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main\" | sudo tee /etc/apt/sources.list.d/azure-cli.list\n\n# \u8FD9\u91CC\u7684\u4F8B\u5B50\u7279\u6307ubuntu 16.04\uFF0C \u4F60\u53EF\u4EE5\u628A16.04\u66F4\u6362\u6210\u4F60\u5E0C\u671B\u7684\u7CFB\u7EDF\u7248\u672C\nwget https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb\n\n# \u6CE8\u518C\u8BE5\u5E93\ndpkg -i packages-microsoft-prod.deb\n\n# \u786E\u8BA4\"microsoft-prod.list\"\u914D\u7F6E\u6587\u4EF6\u5B58\u5728\nls -la /etc/apt/sources.list.d/\n\n# \u589E\u52A0\u5FAE\u8F6F\u516C\u5171\u7B7E\u540D Secure APT\napt-key adv --keyserver packages.microsoft.com --recv-keys 52E16F86FEE04B979B07E28DB02C46DF417A0893\n\n# \u66F4\u65B0apt\u8F6F\u4EF6\u5305\u5217\u8868\napt-get update\n\n# \u5B89\u88C5\u670D\u52A1\u5668\uFF0C\u5168\u90E8\u8F6F\u4EF6\u5305\uFF0C\u5927\u7EA610GB\u5DE6\u53F3\uFF0C\u5B9E\u9645\u4E0A\u4E0D\u9700\u8981\u8FD9\u4E48\u5B89\u88C5\n# apt-get install microsoft-mlserver-all-9.3.0\n# \u5B89\u88C5\u670D\u52A1\u5668\uFF0C\u53EA\u5B89\u88C5python\u5305\uFF0C\u5176\u5B83\u5305\u53C2\u8003\u4E0A\u9762\u8F6F\u4EF6\u5305\u5217\u8868\napt-get install microsoft-mlserver-python-9.3.0\napt-get install microsoft-mlserver-packages-py-9.3.0\n\n# \u6FC0\u6D3BPython\u7248\u672C\u670D\u52A1\u5668\uFF0C\u6839\u636E\u63D0\u793A\u6309[Enter]\u770B\u534F\u8BAE\uFF0C\u6309\u4F4F[Ctrl+v]\u4E00\u76F4\u8DF3\u5230\u6700\u540E\uFF0C\u6309[q]\u8DF3\u51FA\uFF0C\u8F93\u5165[y]\u540C\u610F\u534F\u8BAE\n/opt/microsoft/mlserver/9.3.0/bin/python/activate.sh\n# \u6216\u8005\uFF0C\u6FC0\u6D3BR\u7248\u672C\u670D\u52A1\u5668\n# /opt/microsoft/mlserver/9.3.0/bin/R/activate.sh\n\n# \u5217\u51FA\u5B89\u88C5\u597D\u7684\u5217\u8868\u4EE5\u786E\u8BA4\napt list --installed | grep microsoft\n\n# \u8F93\u51FA\u67D0\u4E2A\u7279\u5B9A\u5B89\u88C5\u5305\u7684\u4FE1\u606F\ndpkg --status microsoft-mlserver-packages-py-9.3.0\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u663E\u793A\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u7ED3\u679C\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\a509738d.png",alt:"\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305",title:"\u5DF2\u5B89\u88C5\u7684\u8F6F\u4EF6\u5305"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"常见问题"},"\u5E38\u89C1\u95EE\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"dpkg: error processing package microsoft-mlserver-hadoop-9.3.0 (--configure):")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u539F\u56E0\uFF1A microsoft-mlserver-hadoop-9.3.0\u8F6F\u4EF6\u5305\u9700\u8981hadoop\uFF0C\u5982\u679C\u7CFB\u7EDF\u4E0A\u6CA1\u6709\u5C31\u4F1A\u62A5\u9519\n\u89E3\u51B3\u65B9\u6848\uFF1A\u4E0D\u8981\u5B89\u88C5microsoft-mlserver-hadoop-9.3.0\u8F6F\u4EF6\u5305\u6216\u8005\u4E8B\u5148\u5B89\u88C5hadoop"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"有效化web服务部署与远程连接"},"\u6709\u6548\u5316Web\u670D\u52A1\u90E8\u7F72\u4E0E\u8FDC\u7A0B\u8FDE\u63A5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5F53\u4F60\u786E\u8BA4\u5B8C\u6210\u4E86\u4E0A\u8FF0\u7684\u57FA\u672C\u5B89\u88C5\u4E4B\u540E\uFF0C\u7EE7\u7EED\u4E0B\u9762\u7684\u6B65\u9AA4\u90E8\u7F72Web\u670D\u52A1\uFF082019/07/12 \u5E94\u6881\u946B\u8F89\u5148\u751F\u7684\u5EFA\u8BAE\u4FEE\u6B63\uFF0C\u53C2\u8003\u8BC4\u8BBA\u533A\uFF09\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728\u7EC8\u7AEF\u8F93\u5165 az ml admin bootstrap"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u8F93\u5165\u5BC6\u7801\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\37fa7f8b.png",alt:"\u914D\u7F6EWeb\u670D\u52A1\u5BC6\u7801",title:"\u914D\u7F6EWeb\u670D\u52A1\u5BC6\u7801"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"结果和感想"},"\u7ED3\u679C\u548C\u611F\u60F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"\u6CE8\u610F\uFF1AUbuntu 18.04 LTS \u65E0\u6CD5\u901A\u8FC7\u4E0A\u9762\u6B65\u9AA4\u90E8\u7F72\uFF0C\u4E0D\u8981\u6D6A\u8D39\u65F6\u95F4\u4E86!")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5FAE\u8F6F\u505A\u7684\u4E1C\u897F\u8FD8\u662F\u505A\u5F97\u5F88\u65B9\u4FBF\u7684\u3002"));};MDXContent.isMDXComponent=true;

/***/ })

}]);