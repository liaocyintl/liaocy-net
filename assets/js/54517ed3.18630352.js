"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[9279],{

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

/***/ 40791:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 13 ネットワークデバイスのセキュリティ',date:'2019-07-22 15:45',lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 13 ネットワークデバイスのセキュリティ","description":"パスワードによる管理アクセスの保護、管理アクセスに対するセキュリティの強化、スイッチのセキュリティ機能、未使用サービスの無効化","source":"@site/docs/archieved/2019/07/22-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/22-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":22,"frontMatter":{"title":"CCNA試験のまとめノート 13 ネットワークデバイスのセキュリティ","date":"2019-07-22 15:45","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'コンソールパスワード',id:'コンソールパスワード',level:2},{value:'特権モードのパスワード',id:'特権モードのパスワード',level:2},{value:'コンフィギュレーションファイルのパスワード暗号化',id:'コンフィギュレーションファイルのパスワード暗号化',level:2},{value:'ユーザ認証による管理アクセスの保護',id:'ユーザ認証による管理アクセスの保護',level:2},{value:'認証サーバ',id:'認証サーバ',level:2},{value:'SSHを使用した管理アクセス',id:'sshを使用した管理アクセス',level:2},{value:'EXECセッションのタイムアウト',id:'execセッションのタイムアウト',level:2},{value:'バナーメッセージの設定',id:'バナーメッセージの設定',level:2},{value:'スイッチのポートセキュリティ',id:'スイッチのポートセキュリティ',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30D1\u30B9\u30EF\u30FC\u30C9\u306B\u3088\u308B\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u306E\u4FDD\u8B77\u3001\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u306B\u5BFE\u3059\u308B\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u5F37\u5316\u3001\u30B9\u30A4\u30C3\u30C1\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u6A5F\u80FD\u3001\u672A\u4F7F\u7528\u30B5\u30FC\u30D3\u30B9\u306E\u7121\u52B9\u5316"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"パスワードによる管理アクセスの保護"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u306B\u3088\u308B\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u306E\u4FDD\u8B77"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"コンソールパスワード"},"\u30B3\u30F3\u30BD\u30FC\u30EB\u30D1\u30B9\u30EF\u30FC\u30C9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8A2D\u5B9A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch(config)#line console 0\nSwitch(config-line)#password 123456\nSwitch(config-line)#login\nSwitch(config-line)#end\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u78BA\u8A8D\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch#show running-config\n!\nline con 0\n password 123456\n login\n!\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"特権モードのパスワード"},"\u7279\u6A29\u30E2\u30FC\u30C9\u306E\u30D1\u30B9\u30EF\u30FC\u30C9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A4\u30CD\u30FC\u30D6\u30EB\u30D1\u30B9\u30EF\u30FC\u30C9\uFF1A\u8A2D\u5B9A\u3057\u305F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6697\u53F7\u5316\u3057\u306A\u3044")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch(config)#enable password 123456\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A4\u30CD\u30FC\u30D6\u30EB\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u30D1\u30B9\u30EF\u30FC\u30C9\uFF1AMD5\u3092\u4F7F\u3063\u3066\u3001\u8A2D\u5B9A\u3057\u305F\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4FDD\u5B58\u3059\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch(config)#enable secret 12345678\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"コンフィギュレーションファイルのパスワード暗号化"},"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u30EF\u30FC\u30C9\u6697\u53F7\u5316"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch(config)#service password-encryption\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"管理アクセスに対するセキュリティの強化"},"\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u306B\u5BFE\u3059\u308B\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u5F37\u5316"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ユーザ認証による管理アクセスの保護"},"\u30E6\u30FC\u30B6\u8A8D\u8A3C\u306B\u3088\u308B\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u306E\u4FDD\u8B77"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30ED\u30FC\u30AB\u30EB\u8A8D\u8A3C")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch(config)#username admin1 password admin1 \u3000<---\u3000\u30E6\u30FC\u30B6\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210\nSwitch(config)#username admin2 secret admin2\nSwitch(config)#line console 0\nSwitch(config-line)#login local \u3000<---\u3000\u30B3\u30F3\u30BD\u30FC\u30EB\u63A5\u7D9A\u6642\u306B\u30ED\u30FC\u30AB\u30EB\u8A8D\u8A3C\u3092\u884C\u3046\nSwitch(config-line)#line vty 0 4\nSwitch(config-line)#login local \u3000<---\u3000Telnet\u63A5\u7D9A\u6642\u306B\u30ED\u30FC\u30AB\u30EB\u8A8D\u8A3C\u3092\u884C\u3046\nSwitch(config-line)#end\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"認証サーバ"},"\u8A8D\u8A3C\u30B5\u30FC\u30D0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u8A8D\u8A3C\u30B5\u30FC\u30D0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"RADIUS: Remote Authentication Dial-In User Service"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"TACACS+: Terminal Access Controller Access-Control System+"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"AAA: Authentication\u3001Authorization\u3001Accounting"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u7279\u6A29\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"0\u3000Router>\u30005\u3064\u306E\u30B3\u30DE\u30F3\u30C9\uFF08disable\u3001enable\u3001exit\u3001help\u3001logout\uFF09\u3001\u3042\u307E\u308A\u4F7F\u308F\u306A\u3044\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"1\u3000Router>\u3000\u7279\u6A29\u306A\u3057"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"15 Router#\u3000\u7279\u6A29\u3042\u308A\u3002\u3059\u3079\u3066\u306E\u7BA1\u7406\u8005\u30EC\u30D9\u30EB\u30B3\u30DE\u30F3\u30C9\u3092\u542B\u3080"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u30EC\u30D9\u30EB\u3092\u6307\u5B9A\u3057\u305F\u7279\u6A29\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u8A2D\u5B9A"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch(config)#enable secret 15 pass123456\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u73FE\u5728\u306E\u7279\u6A29\u30EC\u30D9\u30EB\u3092\u8868\u793A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch#show privilege\nCurrent privilege level is 15\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u6A29EXEC\u30E2\u30FC\u30C9\u3078\u79FB\u884C")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Switch>enable 15\nPassword: \n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"sshを使用した管理アクセス"},"SSH\u3092\u4F7F\u7528\u3057\u305F\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30BF\u306E\u8A2D\u5B9A\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#username sshuser password cisco   <--\u30E6\u30FC\u30B6\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u8A2D\u5B9A\nRouter(config)#hostname RT1   <--\u30DB\u30B9\u30C8\u540D\u306E\u8A2D\u5B9A\nRT1(config)#ip domain-name example.com   <--\u30C9\u30E1\u30A4\u30F3\u540D\u306E\u8A2D\u5B9A\nRT1(config)#crypto key generate rsa   <--\u516C\u958B\u9375\u6697\u53F7\u306E\u305F\u3081\u306B\u30DA\u30A2\u306E\u9375\u3092\u751F\u6210\nThe name for the keys will be: RT1.example.com\nChoose the size of the key modulus in the range of 360 to 2048 for your\n  General Purpose Keys. Choosing a key modulus greater than 512 may take\n  a few minutes.\n\nHow many bits in the modulus [512]: 1024   <--\u9375\u306E\u9577\u3055\u3092\u6307\u5B9A\n% Generating 1024 bit RSA keys, keys will be non-exportable...[OK]\n\n\nRT1(config)#ip ssh version 2   <--SSH\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\uFF12\u306B\u8A2D\u5B9A\n*3 1 0:1:32.797: %SSH-5-ENABLED: SSH 1.99 has been enabled\nRT1(config)#line vty 0 4   <--VTY\u56DE\u7DDA\u306E\u8A2D\u5B9A\u30E2\u30FC\u30C9\u306B\u5165\u308B\nRT1(config-line)#transport input ssh   <--SSH\u63A5\u7D9A\u306E\u307F\u8A31\u53EF\nRT1(config-line)#login local   <--\u30ED\u30FC\u30AB\u30EB\u8A8D\u8A3C\u3092\u6709\u52B9\u5316\nRT1(config-line)#end\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"transport input"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"transport input ssh: SSH\u306E\u307F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"transport input telnet: Telnet\u306E\u307F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"transport input ssh telnet: SSH\u3068Telnet\u4E21\u65B9\u3092\u8A31\u53EF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"transport input all: \u3059\u3079\u3066\u8A31\u53EF"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"SSH\u30B5\u30FC\u30D0\u6A5F\u80FD\u306E\u691C\u8A3C"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show crypto key mypubkey rsa   <--\u516C\u958B\u9375\u306E\u78BA\u8A8D\n% Key pair was generated at: 0:1:16 UTC 3 1 1993\nKey name: RT1.example.com   <--\u9375\u306E\u540D\u524D\n Storage Device: not specified\n Usage: General Purpose Key\n Key is not exportable.\n Key Data:\n 000071f1  00006f29  000074d9  00000cf4  0000258d  000063b3  00005163  0000101c\n 00007c04  000041c0  00000f26  00005a55  00007113  00004caa  00000063  00005fef\n 00002695  0000626e  00000071  00006ef1  0000524a  00004261  00006fa7  4b68\n% Key pair was generated at: 0:1:16 UTC 3 1 1993\nKey name: RT1.example.com.server\nTemporary key\n Usage: Encryption Key\n Key is not exportable.\n Key Data:\n 000038d8  00002c1e  0000267c  000065ff  00005a0f  00006ac3  000023ed  000060d0\n 00003271  0000205d  00007b1f  0000567a  000035f2  000065a0  00004446  00001774\n 000067fc  000011dc  000014c5  000051a1  000034b6  00003f2c  00004297  5624\n\nRT1#show ip ssh   <--SSH\u306E\u8A2D\u5B9A\u60C5\u5831\u3092\u8868\u793A\nSSH Enabled - version 2.0\nAuthentication timeout: 120 secs; Authentication retries: 3\n\nRT1#show ssh   <--SSH\u63A5\u7D9A\u306E\u72B6\u614B\u3092\u8868\u793A\n%No SSHv2 server connections running.\n%No SSHv1 server connections running.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Attention: for SSH connection, you need to access from any common ethernet port (interface) in IP address."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"execセッションのタイムアウト"},"EXEC\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config-line)#exec-timeout 15 5 #15\u52065\u79D2\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"バナーメッセージの設定"},"\u30D0\u30CA\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30EB\u30FC\u30BF\u306B\u7BA1\u7406\u63A5\u7D9A\u3057\u305F\u3068\u304D\u306B\u8868\u793A\u3055\u308C\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u3053\u3068"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5206\u985E\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"motd: \u7BA1\u7406\u8005\u9593\u3067\u5171\u6709\u60C5\u5831\u3092\u4F1D\u3048\u308B\u30E1\u30C3\u30BB\u30FC\u30B8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"login: \u5909\u66F4\u983B\u5EA6\u306E\u4F4E\u3044\u60C5\u5831\u3092\u4F7F\u3048\u308B\u3068\u304D\u306B\u5229\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"exec: \u6B63\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u5165\u529B\u5F8C\u306B\u8868\u793A\u3055\u308C\u308B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5909\u66F4\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config)#banner motd $\nEnter TEXT message.  End with the character '$'.\n\n+++++++++++MOTD BANNER++++++++++\n\n$\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"スイッチのセキュリティ機能"},"\u30B9\u30A4\u30C3\u30C1\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u6A5F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"スイッチのポートセキュリティ"},"\u30B9\u30A4\u30C3\u30C1\u306E\u30DD\u30FC\u30C8\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1A\u30B9\u30A4\u30C3\u30C1\u306E\u7269\u7406\u30DD\u30FC\u30C8\u306B\u8A31\u53EF\u3059\u308BMAC\u30A2\u30C9\u30EC\u30B9\u3092\u767B\u9332\u3057\u3001\u8A31\u53EF\u3057\u3066\u3044\u306A\u3044\u9001\u4FE1\u5143MAC\u30A2\u30C9\u30EC\u30B9\u306E\u30D5\u30EC\u30FC\u30E0\u3092\u7834\u68C4\u3059\u308B\u6A5F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30EB\u30FC\u30BF\u306B\u306F\u8A2D\u5B9A\u3067\u304D\u306A\u3044"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30BB\u30AD\u30E5\u30A2MAC\u30A2\u30C9\u30EC\u30B9\u306E\u30BF\u30A4\u30D7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\uFF1A\u624B\u52D5\u3067\u767B\u9332\uFF1BMAC\u30A2\u30C9\u30EC\u30B9\u30C6\u30FC\u30D6\u30EB\u3068running-config\u4FDD\u5B58\u3055\u308C\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\uFF1A\u30D5\u30EC\u30FC\u30E0\u3092\u53D7\u4FE1\u3059\u308B\u3053\u3068\u3067\u81EA\u52D5\u53CE\u96C6\u3002\u518D\u8D77\u52D5\u6642\u306B\u6D88\u53BB\u3055\u308C\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30C6\u30A3\u30C3\u30AD\u30FC\uFF1A\u81EA\u52D5\u53CE\u96C6\u3067running-config\u306B\u4FDD\u5B58\u3055\u308C\u308B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30BB\u30AD\u30E5\u30A2MAC\u30A2\u30C9\u30EC\u30B9\u306E\u6700\u5927\u6570\u3092\u6307\u5B9A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config-if)#switchport port-security maximum 1 #\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\uFF11\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9055\u53CD\u30E2\u30FC\u30C9\u306E\u8A2D\u5B9A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config-if)#switchport port-security violation {protect | restrict | shutdown | shutdown lan}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30BB\u30AD\u30E5\u30A2MAC\u30A2\u30C9\u30EC\u30B9\u306E\u8A2D\u5B9A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config-if)#switchport port-security mac-address <mac-address>\n(config-if)#switchport port-security mac-address sticky\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DD\u30FC\u30C8\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u6709\u52B9\u5316")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config-if)#switchport port-security\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30BB\u30AD\u30E5\u30A2MAC\u30A2\u30C9\u30EC\u30B9\u306E\u8868\u793A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config-if)#show port-security address\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"未使用サービスの無効化"},"\u672A\u4F7F\u7528\u30B5\u30FC\u30D3\u30B9\u306E\u7121\u52B9\u5316"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"CDP\u306E\u7121\u52B9\u5316:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config) #no cdp run\n\u307E\u305F\u306F\n(config-if) #no cdp enable\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"HTTPS (SSL) \u3092\u4F7F\u7528")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"# HTTP\u30B5\u30FC\u30D0\u306E\u7121\u52B9\u5316\n(config) #no ip http server\n\n# HTTPS\u30B5\u30FC\u30D0\u306E\u6709\u52B9\u5316\n(config) #ip http secure-server\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"TCP/UDP\u30B9\u30E2\u30FC\u30EB\u30B5\u30FC\u30D0\u306E\u7121\u52B9\u5316\uFF1A\u30EB\u30FC\u30BF\u5185\u306E\u30E1\u30E2\u30EA\u306B\u5E38\u99D0\u3057\u3066\u69D8\u3005\u306A\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3059\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u3067\u3042\u308A\u8A3A\u65AD\u51E6\u7406\u306A\u3069\u306B\u5F79\u306B\u7ACB\u3064\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"# TCP\u30B9\u30E2\u30FC\u30EB\u30B5\u30FC\u30D0\u306E\u7121\u52B9\u5316\n(config)# no service tcp-small-servers\n\n#UDP\u30B9\u30E2\u30FC\u30EB\u30B5\u30FC\u30D0\u306E\u7121\u52B9\u5316\n(config)# no service udp-small-servers\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);