"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[5418],{

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

/***/ 67139:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 10 IPv4アクセスリスト',date:'2019-07-19 11:43',lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 10 IPv4アクセスリスト","description":"IPv4アクセスリストの概要、ワイルドカードマスク、番号付き標準ACL、名前付き標準ACL、ACLの検証、ACLのトラブルシューティング","source":"@site/docs/archieved/2019/07/19-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/19-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":19,"frontMatter":{"title":"CCNA試験のまとめノート 10 IPv4アクセスリスト","date":"2019-07-19 11:43","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'ACLとは',id:'aclとは',level:2},{value:'種類',id:'種類',level:2},{value:'ACLの識別方法',id:'aclの識別方法',level:2},{value:'適用',id:'適用',level:2},{value:'インバウンドACLとアウトバウンドACL',id:'インバウンドaclとアウトバウンドacl',level:2},{value:'ACL設定の注意事項',id:'acl設定の注意事項',level:2},{value:'ワイルドカードマスク',id:'ワイルドカードマスク-1',level:2},{value:'ワイルドカードマスクによるIPアドレスの指定',id:'ワイルドカードマスクによるipアドレスの指定',level:2},{value:'作成',id:'作成',level:2},{value:'ACLのインターフェイスの適用',id:'aclのインターフェイスの適用',level:2},{value:'名前付きACLの作成',id:'名前付きaclの作成',level:2},{value:'名前付きACLの適用',id:'名前付きaclの適用',level:2},{value:'コマンド',id:'コマンド',level:2},{value:'ACLカウント数のクリア',id:'aclカウント数のクリア',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"IPv4\u30A2\u30AF\u30BB\u30B9\u30EA\u30B9\u30C8\u306E\u6982\u8981\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u30DE\u30B9\u30AF\u3001\u756A\u53F7\u4ED8\u304D\u6A19\u6E96ACL\u3001\u540D\u524D\u4ED8\u304D\u6A19\u6E96ACL\u3001ACL\u306E\u691C\u8A3C\u3001ACL\u306E\u30C8\u30E9\u30D6\u30EB\u30B7\u30E5\u30FC\u30C6\u30A3\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ipv4アクセスリストの概要"},"IPv4\u30A2\u30AF\u30BB\u30B9\u30EA\u30B9\u30C8\u306E\u6982\u8981"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"aclとは"},"ACL\u3068\u306F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1AAccess Control List\u3002\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF\u3092\u8B58\u5225\u3057\u3001\u5236\u5FA1\u3059\u308B\u305F\u3081\u6761\u4EF6\u3092\u8A18\u8FF0\u3057\u305F\u30EA\u30B9\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F79\u5272\uFF1A\u7279\u5B9A\u306E\u30DB\u30B9\u30C8\u304C\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u306E\u3069\u306E\u30CE\u30FC\u30C9\u306B\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u308B\u304B\u3092\u5236\u5FA1\u3057\u305F\u308A\u3001\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF\u306E\u7A2E\u985E\u3054\u3068\u306B\u4F1D\u9001\u3092\u8A31\u53EF\u3059\u308B\u304B\u62D2\u5426\u3059\u308B\u304B\u3092\u6307\u5B9A\u3057\u305F\u308A\u3067\u304D\u308B\u3002\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u78BA\u4FDD\u3067\u304D\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"種類"},"\u7A2E\u985E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A19\u6E96ACL\uFF1A\u9001\u4FE1\u5143IP\u30A2\u30C9\u30EC\u30B9\u3060\u3051\u3092\u6307\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u62E1\u5F35ACL\uFF1A\u9001\u4FE1\u5143IP\u3001\u5B9B\u5148IP\u3001\u30D7\u30ED\u30C8\u30B3\u30EB\u3001\u9001\u4FE1\u5143\u30DD\u30FC\u30C8\u3001\u5B9B\u5148\u30DD\u30FC\u30C8\u3092\u8A31\u53EF\u307E\u305F\u306F\u62D2\u5426\u3092\u6307\u5B9A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"aclの識別方法"},"ACL\u306E\u8B58\u5225\u65B9\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u756A\u53F7\u4ED8\u304DACL\uFF1A\u756A\u53F7\u3092\u6307\u5B9A\u3057\u3066\u3001\u4F5C\u6210\u3057\u305FACL",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IPv4\u6A19\u6E96\uFF1A1\uFF5E99, 1300\uFF5E1999"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IPv4\u62E1\u5F35\uFF1A100\uFF5E199\u30012000\uFF5E2699"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"AppleTalk\uFF1A600\uFF5E699"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IPX\u6A19\u6E96\uFF1A800\uFF5E899"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IPX\u62E1\u5F35\uFF1A900\uFF5E999"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u540D\u524D\u4ED8\u304DACL\uFF1A\u4EFB\u610F\u306E\u540D\u524D\u304C\u4ED8\u3051\u3089\u308C\u308B\u3002FTP-Filter\u306A\u3069")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"適用"},"\u9069\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u7740\u4FE1\u3068\u767A\u4FE1\u306E\u5404\u65B9\u5411\u306B\uFF11\u3064\u305A\u3064\u9069\u7528\u3067\u304D\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\uFF11\u3064\u306EACL\u3092\u8907\u6570\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B\u9069\u7528\u308C\u304D\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"インバウンドaclとアウトバウンドacl"},"\u30A4\u30F3\u30D0\u30A6\u30F3\u30C9ACL\u3068\u30A2\u30A6\u30C8\u30D0\u30A6\u30F3\u30C9ACL"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Inbound:\u30EB\u30FC\u30BF\u306F\u30D1\u30B1\u30C3\u30C8\u3092\u53D7\u4FE1\u3059\u308B\u6642\u3002ACL\u7167\u5408\uFF1D\uFF1E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u53C2\u7167"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Outbound:\u30EB\u30FC\u30BF\u306F\u767A\u4FE1\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u3092\u6C7A\u5B9A\u3059\u308B\u3068\u3001\u305D\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u306B\u9069\u7528\u3055\u308C\u305F\u30A2\u30A6\u30C8\u30D0\u30A6\u30F3\u30C9ACL\u3002\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u53C2\u7167\uFF1D\uFF1EACL\u7167\u5408")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"acl設定の注意事項"},"ACL\u8A2D\u5B9A\u306E\u6CE8\u610F\u4E8B\u9805"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u306E\u9806\u756A\uFF1A\u5404\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\uFF08\u6761\u4EF6\u6587\uFF09\u306F\u30B7\u30FC\u30B1\u30F3\u30B9\u30D0\u30F3\u756A\u53F7\u304C\u6307\u5B9A\u3067\u304D\u308B\u3002\u964D\u9806\u306B\u884C\u3046\u3002\u30C7\u30D5\u30A9\u30EB\u30C810\xD7i\u3002\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u306E\u6761\u4EF6\u3068\u4E00\u81F4\u3057\u305F\u30D1\u30B1\u30C3\u30C8\u306F\u305D\u306E\u6642\u70B9\u3067\u8A31\u53EF\u307E\u305F\u306F\u62D2\u5426\u306E\u51E6\u7406\u304C\u884C\u308F\u308C\u3001\u4EE5\u964D\u306E\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u306F\u7121\u8996\u3055\u308C\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u300C\u6697\u9ED9\u306EDeny\u300D\uFF1A\u672B\u5C3E\uFF08\u307E\u3064\u3073\uFF09\u306B\u3001\u30D1\u30B1\u30C3\u30C8\u306B\u62D2\u5426\u3059\u308B\u30B9\u30C6\u30FC\u30C8\u30E1\u30F3\u30C8\u304C\u5B58\u5728\u3059\u308B\u3002Permit\u884C\u304C\u6700\u4F4E1\u884C\u306F\u5FC5\u8981\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9069\u7528\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ACL\u306E\u914D\u7F6E\uFF1A\u9001\u4FE1\u5143\u3068\u53D7\u4FE1\u5143\u4E21\u65B9\u914D\u7F6E\u3059\u308B\u3053\u3068\u3002",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A19\u6E96ACL\uFF1D\uFF1E\u30D1\u30B1\u30C3\u30C8\u306E\u5B9B\u5148\u8FD1\u304F\u306B\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u62E1\u5F35ACL\uFF1D\uFF1E\u30D1\u30B1\u30C3\u30C8\u306E\u9001\u4FE1\u5143\u8FD1\u304F\u306B\u914D\u7F6E\uFF08\u63A8\u5968\uFF09"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0\u306E\u5BFE\u8C61\u30D1\u30B1\u30C3\u30C8\uFF1AICMP\u306E\u30D1\u30B1\u30C3\u30C8\u3092\u5BFE\u8C61\u3059\u308B\u306A\u3069\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ワイルドカードマスク"},"\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u30DE\u30B9\u30AF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ACL\u6761\u4EF6\u6587\u306E\u4E2D\u3067IP\u30A2\u30C9\u30EC\u30B9\u3092\u6307\u5B9A\u3059\u308B\u5834\u5408\u3001\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u30DE\u30B9\u30AF\u3092\u4F7F\u7528\u3059\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ワイルドカードマスク-1"},"\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u30DE\u30B9\u30AF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30C6\u30C3\u30D7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\uFF13\uFF12\u30D3\u30C3\u30C8\u306E\u5024"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\uFF18\u30D3\u30C3\u30C8\u305A\u3064\u30C9\u30C3\u30C8\uFF08.\uFF09\u3067\u533A\u5207\u3063\u3066\uFF11\uFF10\u9032\u6570\u3067\u8868\u8A18"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u300C0\u300D\u3092\u6307\u5B9A\u3057\u305F\u3089\u3001\u5BFE\u5FDC\u3059\u308B\u30D3\u30C3\u30C8\u4E00\u81F4\uFF08\u30C1\u30A7\u30C3\u30AF\uFF09\uFF1B\u300C1\u300D\u306A\u3089\u7121\u8996\uFF08\u30C1\u30A7\u30C3\u30AF\u3057\u306A\u3044\uFF09")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ワイルドカードマスクによるipアドレスの指定"},"\u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u30DE\u30B9\u30AF\u306B\u3088\u308BIP\u30A2\u30C9\u30EC\u30B9\u306E\u6307\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DB\u30B9\u30C8\u30A2\u30C9\u30EC\u30B9\u306E\u6307\u5B9A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"0.0.0.0:\u3000\u3059\u3079\u3066\u30C1\u30A7\u30C3\u30AF\u3092\u3059\u308B\u3002\u7701\u7565\uFF1Ahost"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"255.255.255.255: \u3059\u3079\u3066\u7121\u8996\u3092\u3059\u308B\u3002\u7701\u7565\uFF1Aany")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"番号付き標準acl"},"\u756A\u53F7\u4ED8\u304D\u6A19\u6E96ACL"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"作成"},"\u4F5C\u6210"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config)#access-list ACL\u756A\u53F7 {permit | deny | remark} \u9001\u4FE1\u5143IP \u30EF\u30A4\u30EB\u30C9\u30AB\u30FC\u30C9\u30DE\u30B9\u30AF\uFF08\u7701\u75650.0.0.0\uFF09 log\u4E00\u81F4\u3059\u308B\u5834\u5408\u30ED\u30B0\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"トポロジ",src:(__webpack_require__(63484)/* ["default"] */ .Z),width:"806",height:"394"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config)#access-list 1 deny 10.1.1.1 0.0.0.0\nRT1(config)#access-list 1 deny host 10.1.1.1\n\nRT1(config)#access-list 1 deny 10.2.2.1 0.0.0.0\nRT1(config)#access-list 1 deny host 10.2.2.1\n\n\nC:\\>ping 10.2.2.1\n\nPinging 10.2.2.1 with 32 bytes of data:\n\nRequest timed out.\n\nPing statistics for 10.2.2.1:\n    Packets: Sent = 2, Received = 0, Lost = 2 (100% loss),\n\n\nRT1(config)#access-list 1 permit 0.0.0.0 255.255.255.255\nRT1(config)#access-list 1 permit any\n\nRT1#show access-lists \nStandard IP access list 1\n    10 deny host 10.1.1.1\n    20 deny host 10.2.2.1\n    30 permit any\n\nRT1(config)#no access-list 1 deny 10.2.2.1 0.0.0.0\nRT1(config)#no access-list 1 deny host 10.1.1.1\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"aclのインターフェイスの適用"},"ACL\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u306E\u9069\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config-if)#ip access-group <acl-number> {in | out}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"名前付き標準acl"},"\u540D\u524D\u4ED8\u304D\u6A19\u6E96ACL"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"名前付きaclの作成"},"\u540D\u524D\u4ED8\u304DACL\u306E\u4F5C\u6210"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config)#ip access-list standard <acl-name>\n(config-std-nacl)#\u30B7\u30FC\u30B1\u30F3\u30B9\u756A\u53F7\uFF08\u30AA\u30D7\u30B7\u30E7\u30F3\uFF09 {permit | deny | remark} <source> <wildcard> [log]\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"名前付きaclの適用"},"\u540D\u524D\u4ED8\u304DACL\u306E\u9069\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config-if)#ip access-group <acl-name> {in | out}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"aclの検証"},"ACL\u306E\u691C\u8A3C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"コマンド"},"\u30B3\u30DE\u30F3\u30C9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"show access-lists: ACL\u6761\u4EF6\u306E\u78BA\u8A8D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"show ip interface\uFF1AACL\u9069\u7528\u306E\u78BA\u8A8D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"show running-config: ACL\u6761\u4EF6\u306E\u78BA\u8A8D\u3001ACL\u9069\u7528\u306E\u78BA\u8A8D")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"aclカウント数のクリア"},"ACL\u30AB\u30A6\u30F3\u30C8\u6570\u306E\u30AF\u30EA\u30A2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"#clear access-list counter [<acl-number> | <acl_name>]\n")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 63484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/2019072201-32a7e6a232f80bf40f5797fc87822341.png");

/***/ })

}]);