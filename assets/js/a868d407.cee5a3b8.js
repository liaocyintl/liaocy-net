"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[1419],{

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

/***/ 78743:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'在Ubuntu 18.04部署SCWS-1.2.3中文分词与PHP支持',date:new Date('2018-07-24T10:20:17.000Z'),lang:'zh-Hans',tags:['PHP','Ubuntu','SCWS','形态分析 Morphological Analysis'],categories:['开发 Development','SCWS']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/07/ubuntuscws","id":"archieved/2018/07/ubuntuscws","title":"在Ubuntu 18.04部署SCWS-1.2.3中文分词与PHP支持","description":"问题背景","source":"@site/docs/archieved/2018/07/24-ubuntuscws.md","sourceDirName":"archieved/2018/07","slug":"/archieved/2018/07/ubuntuscws","permalink":"/liaocy-net/docs/archieved/2018/07/ubuntuscws","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/07/24-ubuntuscws.md","tags":[{"label":"PHP","permalink":"/liaocy-net/docs/tags/php"},{"label":"Ubuntu","permalink":"/liaocy-net/docs/tags/ubuntu"},{"label":"SCWS","permalink":"/liaocy-net/docs/tags/scws"},{"label":"形态分析 Morphological Analysis","permalink":"/liaocy-net/docs/tags/形态分析-morphological-analysis"}],"version":"current","sidebarPosition":24,"frontMatter":{"title":"在Ubuntu 18.04部署SCWS-1.2.3中文分词与PHP支持","date":"2018-07-24T10:20:17.000Z","lang":"zh-Hans","tags":["PHP","Ubuntu","SCWS","形态分析 Morphological Analysis"],"categories":["开发 Development","SCWS"]},"sidebar":"tutorialSidebar","previous":{"title":"自动为Word文档中的日文汉字注音(ふりがな)的VBA脚本","permalink":"/liaocy-net/docs/archieved/2018/wordautofurigana"},"next":{"title":"Ubuntu 18.04设置Apache的HTTP与HTTPS反向代理","permalink":"/liaocy-net/docs/archieved/2018/07/ubuntuapacheproxy"}};var assets={};var toc=[{value:'问题背景',id:'问题背景',level:2},{value:'系统环境',id:'系统环境',level:2},{value:'解决方案',id:'解决方案',level:2},{value:'安装依赖包',id:'安装依赖包',level:3},{value:'下载、编译、安装 SCWS 1.2.3 到系统',id:'下载编译安装-scws-123-到系统',level:3},{value:'安装词库',id:'安装词库',level:3},{value:'安装PHP支持',id:'安装php支持',level:3},{value:'尝试用PHP分词',id:'尝试用php分词',level:3},{value:'参考资料',id:'参考资料',level:2},{value:'结果和感想',id:'结果和感想',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"问题背景"},"\u95EE\u9898\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9700\u8981\u7528PHP\u7CFB\u7EDF\u5168\u6587\u68C0\u7D22\u65F6\uFF0C\u901A\u5E38\u8981\u5148\u5BF9\u6587\u672C\u8FDB\u884C\u5206\u8BCD\u64CD\u4F5C\u3002\n\u672C\u6587\u4ECB\u7ECD\u4E00\u4E2ALinux\u73AF\u5883\u4E0B\uFF0C\u652F\u6301PHP\u5206\u8BCD\u7684\u5DE5\u5177\u2014\u2014SCWS\uFF0C\u4EE5\u53CA\u5176\u5B89\u88C5\u90E8\u7F72\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://blog.csdn.net/hanzengyi/article/details/51736130"},"\u672C\u6587\u53C2\u8003")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"系统环境"},"\u7CFB\u7EDF\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Ubuntu 18.04"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"SCWS 1.2.3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"PHP 7.2")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"解决方案"},"\u89E3\u51B3\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"安装依赖包"},"\u5B89\u88C5\u4F9D\u8D56\u5305"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# \u66F4\u65B0\u6E90\nsudo apt update\n# \u5B89\u88C5\u7F16\u8BD1\u4F9D\u8D56\u5305\nsudo apt install build-essential\n# \u5B89\u88C5PHP\u73AF\u5883\nsudo apt install php7.2\n# \u5B89\u88C5Apache\u670D\u52A1\u5668\nsudo apt install apache2\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\u610F\uFF0C\u5982\u679C\u5DF2\u914D\u7F6E\u6709Apache\u548CPHP\uFF0C\u5219\u53EF\u7701\u7565\u540E\u4E24\u90E8\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"下载编译安装-scws-123-到系统"},"\u4E0B\u8F7D\u3001\u7F16\u8BD1\u3001\u5B89\u88C5 SCWS 1.2.3 \u5230\u7CFB\u7EDF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# \u4E0B\u8F7DSCWS\u7684\u6E90\u7801\nwget http://www.xunsearch.com/scws/down/scws-1.2.3.tar.bz2\n# \u89E3\u538B\u7F29\ntar xvjf scws-1.2.3.tar.bz2\n# \u8FDB\u5165\u76EE\u5F55\ncd \n# \u7F16\u8BD1\n./configure --prefix=/usr/local/scws\nmake\n# \u5B89\u88C5\nsudo make install\n# \u9A8C\u8BC1\u5B89\u88C5\nls -al /usr/local/scws/lib/libscws.la\n# \u8BD5\u6267\u884Cscws-cli\u6587\u4EF6\n/usr/local/scws/bin/scws -h\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\u610F\uFF0Cprefix\u4E3ASCWS\u7684\u5B89\u88C5\u76EE\u5F55\u3002\n\u8BD5\u6267\u884Cscws-cli\u6587\u4EF6\u540E\uFF0C\u5982\u51FA\u73B0\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"scws (scws-cli/1.2.3)\nSimple Chinese Word Segmentation - Command line usage.\nCopyright (C)2007 by hightman.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8868\u793A\u5B89\u88C5\u6B63\u786E\uFF01"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"安装词库"},"\u5B89\u88C5\u8BCD\u5E93"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# \u8FDB\u5165\u76EE\u5F55\ncd /usr/local/scws/etc\n# \u5B89\u88C5GBK\u7F16\u7801\u8BCD\u5E93\nsudo wget http://www.xunsearch.com/scws/down/scws-dict-chs-gbk.tar.bz2\nsudo tar xvjf scws-dict-chs-gbk.tar.bz2\n# \u5B89\u88C5UTF-8\u7F16\u7801\u8BCD\u5E93\nsudo wget http://www.xunsearch.com/scws/down/scws-dict-chs-utf8.tar.bz2\nsudo tar xvjf scws-dict-chs-utf8.tar.bz2\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"安装php支持"},"\u5B89\u88C5PHP\u652F\u6301"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# \u56DE\u5230\u6E90\u7801\u76EE\u5F55\ncd ~/scws-1.2.3/phpext/\n# \u6267\u884Cphpize \uFF08\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u53EF\u80FD\u8981\u6C42\u5B89\u88C5php7.2-dev\uFF0Csudo apt install php7.2-dev\uFF09\nphpize\n# \u8BBE\u5B9A\u5B89\u88C5\u76EE\u5F55\n./configure --with-scws=/usr/local/scws\n# \u7F16\u8BD1\nmake\n# \u5B89\u88C5\nsudo make install\n# \u5728php.ini\u4E2D\u542F\u7528\u63D2\u4EF6\nsudo nano /etc/php/7.2/apache2/php.ini\n# \u5728\u6700\u4E0B\u9762\u52A0\u5165\nextension = scws.so\nscws.default.charset = utf-8\nscws.default.fpath = /usr/local/scws/etc\n# \u91CD\u542FApache\nsudo service apache2 restart\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E4B\u540E\u5982\u679C\u8FDB\u5165phpinfo()\u9875\u9762\u53EF\u4EE5\u770B\u5230\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"SCWS插件已安装",src:(__webpack_require__(68167)/* ["default"] */ .Z),width:"937",height:"264"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"尝试用php分词"},"\u5C1D\u8BD5\u7528PHP\u5206\u8BCD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5EFA\u7ACBPHP\u5206\u8BCD\u9875\u9762"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"cd /var/www/html/\nsudo nano scws.php\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8F93\u5165\u4EE5\u4E0BPHP\u4EE3\u7801\uFF0C\u5C1D\u8BD5\u7ECF\u5178\u5206\u8BCD\u6848\u4F8B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-php"},"<?php\n    ini_set('display_errors', 1);\n    $so = scws_new();\n    $so->set_charset('utf-8');\n    $so->add_dict(ini_get('scws.default.fpath') . '/dict.utf8.xdb');\n    $so->set_rule(ini_get('scws.default.fpath') . '/rules.utf8.ini');\n    $so->set_ignore(true);\n    $so->set_multi(false);\n    $so->set_duality(false);\n    $so->send_text(\"\u6B66\u6C49\u5E02\u957F\u6C5F\u5927\u6865\uFF0C\u6211\u4EEC\u4E2D\u51FA\u4E86\u4E00\u4E2A\u53DB\u5F92\u3002\");\n    $words_array = $so->get_result();\n    $words = \"\";\n    foreach ($words_array as $v) {\n       // \u8F93\u51FA\u5206\u8BCD\u7ED3\u679C\n       echo var_dump($v) . \"<br />\";\n    }\n    $so->close();\n?>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7528\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(83333)/* ["default"] */ .Z),width:"921",height:"410"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5206\u8BCD\u6210\u529F\uFF01\uFF08\u6211\u8FD9\u513F\u662F\u56E0\u4E3Anano\u7F16\u8F91\u5668\u7684\u539F\u56E0\uFF0C\u6240\u4EE5\u987A\u5E8F\u6709\u70B9\u602A\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BF4\u660E\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"word\uFF1A \u8BCD\uFF0CSurface\u8868\u5C42\u683C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"off\uFF1A \u8BCD\u504F\u79FB\u91CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"len\uFF1A \u8BCD\u957F\u5EA6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"idf\uFF1A \u9006\u5411\u6587\u4EF6\u9891\u7387\uFF0C\u672A\u505A\u5F52\u4E00\u5316\uFF0C\u8D8A\u5927\u8BF4\u660E\u8BE5\u8BCD\u8D8A\u91CD\u8981\u3002\u5E94\u8BE5\u662F\u8BAD\u7EC3\u6587\u672C\u4E2D\u7684\u9891\u7387\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"attr\uFF1A \u8BCD\u6027")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://www.xunsearch.com/scws/"},"SCWS")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://blog.csdn.net/hanzengyi/article/details/51736130"},"\u53C2\u8003\u8D44\u6599")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/hightman/scws/blob/master/phpext/README.md"},"PHP\u63D2\u4EF6\u53C2\u8003\u8D44\u6599")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"结果和感想"},"\u7ED3\u679C\u548C\u611F\u60F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u6D77\u5916\u4E0B\u8F7D\u8D44\u6E90\u771F\u6162\u3002"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 83333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/2b184cde_2-17a8378df0bcb3e0527acbd0538b9da2.png");

/***/ }),

/***/ 68167:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/fcc912dc-2e4817a9f06c49594e0019c03669f169.png");

/***/ })

}]);