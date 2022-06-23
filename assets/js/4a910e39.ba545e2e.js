"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[3076],{

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

/***/ 16117:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'在Ubuntu下使用Let\'s Encrypt对Apache进行免费HTTPS加密的最简便方法',date:new Date('2018-06-12T13:06:22.000Z'),lang:'zh-Hans',tags:['Let\'s Encrypt','Ubuntu','Apache','HTTPS'],categories:['开发 Development','Apache']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/mostsimpleletsencrypt","id":"archieved/2018/mostsimpleletsencrypt","title":"在Ubuntu下使用Let's Encrypt对Apache进行免费HTTPS加密的最简便方法","description":"Let's Encrypt 提供了免费的网站HTTPS加密证书。","source":"@site/docs/archieved/2018/20180612-mostsimpleletsencrypt.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/mostsimpleletsencrypt","permalink":"/liaocy-net/docs/archieved/2018/mostsimpleletsencrypt","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180612-mostsimpleletsencrypt.md","tags":[{"label":"Let's Encrypt","permalink":"/liaocy-net/docs/tags/lets-encrypt"},{"label":"Ubuntu","permalink":"/liaocy-net/docs/tags/ubuntu"},{"label":"Apache","permalink":"/liaocy-net/docs/tags/apache"},{"label":"HTTPS","permalink":"/liaocy-net/docs/tags/https"}],"version":"current","sidebarPosition":20180612,"frontMatter":{"title":"在Ubuntu下使用Let's Encrypt对Apache进行免费HTTPS加密的最简便方法","date":"2018-06-12T13:06:22.000Z","lang":"zh-Hans","tags":["Let's Encrypt","Ubuntu","Apache","HTTPS"],"categories":["开发 Development","Apache"]},"sidebar":"tutorialSidebar","previous":{"title":"Archieved","permalink":"/liaocy-net/docs/category/archieved"},"next":{"title":"在Hexo + GithubPage中使用个人域名","permalink":"/liaocy-net/docs/archieved/2018/privatedomain"}};var assets={};var toc=[{value:'测试环境',id:'测试环境',level:2},{value:'部署Let&#39;s Encrypt源文件',id:'部署lets-encrypt源文件',level:2},{value:'部署前准备',id:'部署前准备',level:2},{value:'创建HTTPS证书并部署到Apache',id:'创建https证书并部署到apache',level:2},{value:'这一步的常见提示以及报错信息',id:'这一步的常见提示以及报错信息',level:4},{value:'自动定期更新证书',id:'自动定期更新证书',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://letsencrypt.org/"},"Let's Encrypt")," \u63D0\u4F9B\u4E86\u514D\u8D39\u7684\u7F51\u7AD9HTTPS\u52A0\u5BC6\u8BC1\u4E66\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u6587\u4ECB\u7ECD\u4E00\u79CD\u4F5C\u8005\u8BA4\u4E3A\u6700\u7B80\u5355\u7684\u8BC1\u4E66\u90E8\u7F72\u65B9\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u6587\u53C2\u8003\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.vultr.com/docs/setup-lets-encrypt-with-apache-on-ubuntu-16-04"},"Setup Let's Encrypt With Apache on Ubuntu 16.04")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"测试环境"},"\u6D4B\u8BD5\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"OS: Ubuntu 18.04 LTS\nWeb Server: Apache2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"部署lets-encrypt源文件"},"\u90E8\u7F72Let's Encrypt\u6E90\u6587\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# apt-get install git\n# git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u8BF4\u660E\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5B89\u88C5git"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5C06Let's Encrypt\u514B\u9686\u5230/opt/letsencrypt")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"部署前准备"},"\u90E8\u7F72\u524D\u51C6\u5907"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u52A1\u5FC5\u786E\u8BA4\u76EE\u524DApache\u5DF2\u5305\u542BHTTP\u7AD9\u70B9\u914D\u7F6E\uFF0C\u5E76\u5DF2\u7ECF\u80FD\u901A\u8FC7HTTP\u65B9\u5F0F\u6210\u529F\u8BBF\u95EE\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u542F\u52A8apache\u7684ssl\u7EC4\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# sudo a2enmod ssl\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"创建https证书并部署到apache"},"\u521B\u5EFAHTTPS\u8BC1\u4E66\u5E76\u90E8\u7F72\u5230Apache"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# cd /opt/letsencrypt/\n# ./letsencrypt-auto --apache -d yourubuntuserver.example\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u8BF4\u660E\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u8FDB\u5165Let's Encrypt\u6E90\u6587\u4EF6\u76EE\u5F55/opt/letsencrypt/"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u6267\u884C\u81EA\u52A8\u521B\u5EFA\u8BC1\u4E66\u5E76\u914D\u7F6E\u5230apache\uFF0C\u5176\u4E2Dyourubuntuserver.example\u4E3A\u4F60\u7684\u57DF\u540D")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u203B \u5F53\u5B58\u5728\u591A\u4E2A\u57DF\u540D\u65F6\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u4EE3\u7801"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# ./letsencrypt-auto --apache -d yourubuntuserver.example -d www.yourubuntuserver.example -d anotherwebsite.example\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"这一步的常见提示以及报错信息"},"\u8FD9\u4E00\u6B65\u7684\u5E38\u89C1\u63D0\u793A\u4EE5\u53CA\u62A5\u9519\u4FE1\u606F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u57DF\u540DDNS\u672A\u8BBE\u7F6E\u6216\u89E3\u6790\u672A\u751F\u6548\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"域名DNS未设置或未生效",src:(__webpack_require__(84566)/* ["default"] */ .Z),title:"\u57DF\u540DDNS\u672A\u8BBE\u7F6E\u6216\u89E3\u6790\u672A\u751F\u6548",width:"514",height:"96"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u89E3\u51B3\u529E\u6CD5\uFF1A\u53BB\u57DF\u540D\u63D0\u4F9B\u5546\u7F51\u7AD9\u8BBE\u7F6E\u57DF\u540DDNS\uFF0C\u5DF2\u7ECF\u8BBE\u7F6E\u7684\u7B49\u5F85\u57DF\u540D\u89E3\u6790\u751F\u6548\u3002\u5C1D\u8BD5\u5728\u670D\u52A1\u5668Ping\u57DF\u540D\u786E\u8BA4\u662F\u5426\u89E3\u6790\u5DF2\u751F\u6548\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{"start":2},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u662F\u5426\u91CD\u5B9A\u5411\u5168\u90E8HTTP\u8BF7\u6C42\u5230HTTPS\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"是否重定向全部HTTP请求到HTTPS",src:(__webpack_require__(30911)/* ["default"] */ .Z),title:"\u662F\u5426\u91CD\u5B9A\u5411\u5168\u90E8HTTP\u8BF7\u6C42\u5230HTTPS",width:"656",height:"119"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BF4\u660E\uFF1A\u5982\u679C\u9009\u62E92\uFF0C\u5219\u901A\u8FC7http\u65B9\u5F0F\u8BBF\u95EE\u7F51\u7AD9\u65F6\uFF0C\u8BF7\u6C42\u4F1A\u81EA\u52A8\u91CD\u5B9A\u5411\u5230https\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{"start":3},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u90E8\u7F72\u6210\u529F\u4FE1\u606F\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"部署成功信息",src:(__webpack_require__(98901)/* ["default"] */ .Z),title:"\u90E8\u7F72\u6210\u529F\u4FE1\u606F",width:"608",height:"306"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{"start":4},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u6210\u529F\u8BBF\u95EE\u52A0\u5BC6\u7684\u7F51\u7AD9")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"成功访问加密的网站",src:(__webpack_require__(2406)/* ["default"] */ .Z),title:"\u6210\u529F\u8BBF\u95EE\u52A0\u5BC6\u7684\u7F51\u7AD9",width:"512",height:"303"}),"\n\u7528\u6D4F\u89C8\u5668\u8BBF\u95EE\u7F51\u7AD9\uFF0C\u663E\u793A\u52A0\u5BC6\u6210\u529F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"自动定期更新证书"},"\u81EA\u52A8\u5B9A\u671F\u66F4\u65B0\u8BC1\u4E66"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"HTTPS\u8BC1\u4E66\u9ED8\u8BA4\u6709\u4E09\u4E2A\u6708\u7684\u6709\u6548\u671F\uFF0C\u5FC5\u987B\u5B9A\u671F\u66F4\u65B0\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9996\u5148\u6253\u5F00Cron\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# crontab -e\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u6700\u4E0B\u65B9\u6DFB\u52A0\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"15 5 * * 5 /opt/letsencrypt/letsencrypt-auto renew >> /var/log/le-renew.log\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE3\u7801\u8BF4\u660E\uFF1A\u5728\u6BCF\u5468\u4E94\u4E0A\u53485\u65F615\u5206\u81EA\u52A8\u66F4\u65B0\u8BC1\u4E66\uFF0C\u5E76\u5199\u5165\u65E5\u5FD7/var/log/le-renew.log"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 84566:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ }),

/***/ 30911:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/20180612002-23363d91dc1aebb1a21577cf7e7d9bc3.png");

/***/ }),

/***/ 98901:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/20180612003-be7d8ead7b0e7359f6a158a63d338c6d.png");

/***/ }),

/***/ 2406:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/20180612004-924d4f332c46abf14cacff594e9ddc6c.png");

/***/ })

}]);