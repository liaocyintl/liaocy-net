"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[9048],{

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

/***/ 25946:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CentOS设置Apache的HTTP与HTTPS反向代理',date:new Date('2019-03-13T18:19:25.000Z'),lang:'zh-Hans',tags:['CentOS','Apache','反向代理 Reverse Proxy'],categories:['开发 Development','Apache']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/03/centosapacheproxy","id":"archieved/2019/03/centosapacheproxy","title":"CentOS设置Apache的HTTP与HTTPS反向代理","description":"以前写过一篇在Ubuntu下配置Apache反向代理的文章。","source":"@site/docs/archieved/2019/03/13-centosapacheproxy.md","sourceDirName":"archieved/2019/03","slug":"/archieved/2019/03/centosapacheproxy","permalink":"/liaocy-net/docs/archieved/2019/03/centosapacheproxy","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/03/13-centosapacheproxy.md","tags":[{"label":"CentOS","permalink":"/liaocy-net/docs/tags/cent-os"},{"label":"Apache","permalink":"/liaocy-net/docs/tags/apache"},{"label":"反向代理 Reverse Proxy","permalink":"/liaocy-net/docs/tags/反向代理-reverse-proxy"}],"version":"current","sidebarPosition":13,"frontMatter":{"title":"CentOS设置Apache的HTTP与HTTPS反向代理","date":"2019-03-13T18:19:25.000Z","lang":"zh-Hans","tags":["CentOS","Apache","反向代理 Reverse Proxy"],"categories":["开发 Development","Apache"]},"sidebar":"tutorialSidebar","previous":{"title":"Laravel命令快查","permalink":"/liaocy-net/docs/archieved/2019/02/laravel"},"next":{"title":"在Ubuntu上用Apache运行Flask网站","permalink":"/liaocy-net/docs/archieved/2019/04/ubuntuapacheslask"}};var assets={};var toc=[{value:'参考资料',id:'参考资料',level:2},{value:'系统环境',id:'系统环境',level:2},{value:'解决方案',id:'解决方案',level:2},{value:'安装Apache',id:'安装apache',level:3},{value:'安装Apache代理插件',id:'安装apache代理插件',level:3},{value:'配置门户服务器Apache的HTTP与HTTPS配置文件',id:'配置门户服务器apache的http与https配置文件',level:3},{value:'被代理机设置',id:'被代理机设置',level:2},{value:'结果和感想',id:'结果和感想',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EE5\u524D\u5199\u8FC7\u4E00\u7BC7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/2018/07/25-ubuntuapacheproxy/"},"\u5728Ubuntu\u4E0B\u914D\u7F6EApache\u53CD\u5411\u4EE3\u7406"),"\u7684\u6587\u7AE0\u3002\n\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u5728CentOS\u73AF\u5883\u4E0B\u914D\u7F6EApache\u53CD\u5411\u4EE3\u7406\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5047\u8BBE\u4F60\u6709\u4E00\u53F0\u95E8\u6237\u670D\u52A1\u5668\uFF0C\u5185\u7F51\u6709\u82E5\u5E72\u53F0\u7F51\u9875\u670D\u52A1\u5668\u3002\n\u4F60\u9700\u8981\u5C06\u57DF\u540Dproxy.liaocy.net\u53CD\u5411\u4EE3\u7406\u5230IP\u5730\u5740\u4E3A192.168.0.2\u7684\u7F51\u9875\u670D\u52A1\u5668\u4E0A\uFF0C\u5206\u522B\u4EE3\u7406HTTP\uFF0880\u7AEF\u53E3\uFF09\u548CHTTPS\uFF08443\u7AEF\u53E3\uFF09\u3002\n\u4F60\u53EF\u4EE5\u901A\u8FC7\u672C\u6587\u4ECB\u7ECD\u7684\u65B9\u6CD5\u8FDB\u884C\u53CD\u5411\u4EE3\u7406\u8BBE\u7F6E\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://qiita.com/Esfahan/items/364462502b6d19dea1fe"},"\u53C2\u8003\u8D44\u65991"),"\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.digitalocean.com/community/tutorials/how-to-use-apache-as-a-reverse-proxy-with-mod_proxy-on-centos-7"},"\u53C2\u8003\u8D44\u65992")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"系统环境"},"\u7CFB\u7EDF\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"CentOS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Apache 2")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"解决方案"},"\u89E3\u51B3\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"安装apache"},"\u5B89\u88C5Apache"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728CentOS\u4E0B\uFF0CApache\u4E0D\u53EBApache\uFF0C\u53EBhttpd\u3002\n\u901A\u8FC7yum\u547D\u4EE4\u5B89\u88C5\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ sudo yum install -y httpd\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u542F\u52A8Apache\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ sudo service httpd start\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u67E5\u770BApache\u7248\u672C\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ httpd -v\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"安装apache代理插件"},"\u5B89\u88C5Apache\u4EE3\u7406\u63D2\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9996\u5148\u901A\u8FC7\u547D\u4EE4\u67E5\u770B\u5DF2\u7ECFApache\u63D2\u4EF6\u72B6\u6001\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ httpd -M\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4F1A\u770B\u5230\u4E00\u4E2A\u53EF\u7528\u7684\u63D2\u4EF6\u5217\u8868\uFF0C\u5176\u4E2D\u4F5C\u4E3A\u4EE3\u7406\u670D\u52A1\u5668\u9700\u8981\u7528\u5230\u4E0B\u9762\u56DB\u4E2A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"Output\n. . .\n proxy_module (shared)\n. . . \n lbmethod_byrequests_module (shared)\n. . . \n proxy_balancer_module (shared)\n. . . \n proxy_http_module (shared)\n. . . \n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"CentOS\u4E0B\u63D2\u4EF6\u7684\u542F\u7528\u662F\u901A\u8FC7\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u53CD\u6CE8\u91CA\u63D2\u4EF6\u8DEF\u5F84\u7684\u5F31\u667A\u65B9\u6CD5\u5B9E\u73B0\u7684\uFF0C\n\u56E0\u6B64\uFF0C\u6211\u4EEC\u5148\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\uFF08\u8FD9\u4E2A\u6587\u4EF6\u5E94\u8BE5\u5DF2\u7ECF\u5B58\u5728\uFF09\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"$ sudo nano /etc/httpd/conf.modules.d/00-proxy.conf\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u8BE5\u6587\u4EF6\u4E2D\u8BB2\u4E0B\u9762\u63D2\u4EF6\u524D\u9762\u7684 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"#")," \u4E95\u53F7\u53BB\u6389\uFF0C\u5E76\u4FDD\u5B58\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text:","metastring":"/etc/httpd/conf.modules.d/00-proxy.conf","/etc/httpd/conf.modules.d/00-proxy.conf":true},". . . \nLoadModule proxy_module modules/mod_proxy.so\n. . . \nLoadModule lbmethod_byrequests_module modules/mod_lbmethod_byrequests.so\n. . . \nLoadModule proxy_balancer_module modules/mod_proxy_balancer.so\n. . . \nLoadModule proxy_http_module modules/mod_proxy_http.so\n. . . \n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7136\u540E\u91CD\u542FApache\uFF0C\u6CA1\u9519\u8BEF\u7684\u8BDD\u63D2\u4EF6\u5C31\u542F\u7528\u6210\u529F\u4E86\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"$ sudo systemctl restart httpd\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"配置门户服务器apache的http与https配置文件"},"\u914D\u7F6E\u95E8\u6237\u670D\u52A1\u5668Apache\u7684HTTP\u4E0EHTTPS\u914D\u7F6E\u6587\u4EF6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u914D\u7F6EHTTP\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Apache\u4F1A\u8BFB\u53D6/etc/httpd/conf.d/\u76EE\u5F55\u4E0B\u9762\u5168\u90E8.conf\u914D\u7F6E\u6587\u4EF6\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"sudo nano /etc/httpd/conf.d/http.conf\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8F93\u5165\u4EE5\u4E0B\u914D\u7F6E\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"<VirtualHost *:80>\n    ServerAdmin info@liaocy.net\n    ServerName proxy.liaocy.net\n    ServerAlias proxy.liaocy.net\n    ProxyRequests Off\n    ProxyMaxForwards 100\n    ProxyPreserveHost On\n    ProxyPass / http://192.168.0.2/\n    ProxyPassReverse / http://192.168.0.2/\n    <Proxy *>\n        Order Deny,Allow\n        Allow from all\n    </Proxy>\n</VirtualHost>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u914D\u7F6EHTTPS\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"sudo nano /etc/httpd/conf.d/https.conf\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8F93\u5165\u4EE5\u4E0B\u914D\u7F6E\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"<IfModule mod_ssl.c>\n    <VirtualHost *:443>\n        ServerAdmin info@liaocy.net\n        ServerName proxy.liaocy.net\n        ServerAlias proxy.liaocy.net\n        SSLEngine on\n        SSLProxyEngine On\n        SSLProxyVerify none\n        SSLCertificateFile /etc/ssl/certs/ssl-cert-snakeoil.pem\n        SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key\n        <Proxy *>\n           Order deny,allow\n           Allow from all\n        </Proxy>\n        ProxyPreserveHost On\n        ProxyRequests Off\n        ProxyPass /  https://192.168.0.2:443/\n        ProxyPassReverse / https://192.168.0.2:443/\n    </VirtualHost>\n</IfModule>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\uFF1A\u88AB\u8BA4\u8BC1\u7684SSL\u52A0\u5BC6\u8BC1\u4E66\u914D\u7F6E\u5728\u95E8\u6237\u673A\u5373\u53EF\uFF0C\u4F3C\u4E4E\u4E0D\u7528\u914D\u7F6E\u5728\u88AB\u4EE3\u7406\u670D\u52A1\u5668\u4E0A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7136\u540E\u91CD\u542FApache\uFF0C\u6CA1\u9519\u8BEF\u7684\u8BDD\u518D\u4F7F\u7528proxy.liaocy.net\u8BBF\u95EE\u8FDB\u884C\u6D4B\u8BD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"$ sudo systemctl restart httpd\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"被代理机设置"},"\u88AB\u4EE3\u7406\u673A\u8BBE\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u88AB\u4EE3\u7406\u673A\u6B63\u5E38\u8BBE\u7F6E\u7F51\u9875\u670D\u52A1\u5373\u53EF\uFF0C\u4E0D\u4E00\u5B9A\u975E\u5F97\u662FApache\u3002\n\u670D\u52A1\u5F00\u901A HTTP 80 \u7AEF\u53E3\u548C HTTPS 443 \u7AEF\u53E3\u5373\u53EF\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"结果和感想"},"\u7ED3\u679C\u548C\u611F\u60F3"));};MDXContent.isMDXComponent=true;

/***/ })

}]);