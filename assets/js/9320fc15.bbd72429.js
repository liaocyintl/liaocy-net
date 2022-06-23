"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[6639],{

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

/***/ 74715:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 12 RIPv2',date:'2019-07-22 10:43',lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 12 RIPv2","description":"ディスタンスベクター、RIPv2の特徴、RIPv2の特徴、RIPv2のオプション設定","source":"@site/docs/archieved/2019/07/21-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/21-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":21,"frontMatter":{"title":"CCNA試験のまとめノート 12 RIPv2","date":"2019-07-22 10:43","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'ディスタンスベクター',id:'ディスタンスベクター',level:2},{value:'Distance Vectorの問題点と解決法',id:'distance-vectorの問題点と解決法',level:2},{value:'特徴',id:'特徴',level:2},{value:'検証',id:'検証',level:2},{value:'RIPv2の経路集約',id:'ripv2の経路集約',level:2},{value:'パッシブインターフェイス　（Passive interface）',id:'パッシブインターフェイスpassive-interface',level:2},{value:'RIPのデフォルトルート',id:'ripのデフォルトルート',level:2},{value:'RIPタイマーの変更',id:'ripタイマーの変更',level:2},{value:'RIP認証',id:'rip認証',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\u30D9\u30AF\u30BF\u30FC\u3001RIPv2\u306E\u7279\u5FB4\u3001RIPv2\u306E\u7279\u5FB4\u3001RIPv2\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ディスタンスベクトル"},"\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\u30D9\u30AF\u30C8\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ディスタンスベクター"},"\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\u30D9\u30AF\u30BF\u30FC"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u8DDD\u96E2\uFF08Distance\uFF09\u3068\u65B9\u5411\uFF08Vector\uFF09\u306B\u57FA\u3065\u3044\u3066\u5B9B\u5148\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3078\u306E\u6700\u9069\u7D4C\u8DEF\u3092\u6C7A\u5B9A\u3059\u308B\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u624B\u9806\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u76F4\u63A5\u63A5\u7D9A\u3055\u308C\u305F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u5B66\u7FD2",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30BF\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306BIP\u30A2\u30C9\u30EC\u30B9\u304C\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u3068\u3001\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u76F4\u63A5\u63A5\u7D9A\u3055\u308C\u305F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u60C5\u5831\u304C\u5B66\u7FD2\u3055\u308C\u308B\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u96A3\u63A5\u30EB\u30FC\u30BF\u306B\u901A\u4FE1",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u81EA\u8EAB\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u3042\u308B\u7D4C\u8DEF\u60C5\u5831\u306B\u30E1\u30C8\u30EA\u30C3\u30AF\uFF08\u30DB\u30C3\u30D7\u30AB\u30A6\u30F3\u30C8\uFF09\u30921\u52A0\u7B97\u3001\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30A2\u30C3\u30D7\u30C7\u30FC\u30BF\u3092\u30A2\u30C9\u30D0\u30A4\u30B9\u3059\u308B\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u671F\u7684\u306B\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u9001\u4FE1",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B8C\u5168\u306A\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u5B9A\u671F\u7684\u306B\u751F\u6210\u3057\u3001\u96A3\u63A5\u30EB\u30FC\u30BF\u306B\u30A2\u30C9\u30D0\u30BF\u30A4\u30BA\u3059\u308B\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306E\u4FDD\u5B88",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53D7\u4FE1\u3057\u305F\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3067\u65E2\u5B58\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306E\u5185\u5BB9\u3068\u6BD4\u8F03\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E1\u30C8\u30EA\u30C3\u30AF\u304C\u5C0F\u3055\u3044\u65B9\u3092\u3088\u308A\u9069\u5207\u306A\u7D4C\u8DEF\u3067\u3042\u308B\u3068\u66F4\u65B0\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53D7\u4FE1\u3057\u305F\u7D4C\u8DEF\u60C5\u5831\u306B\u65E2\u77E5\u306E\u7D4C\u8DEF\u60C5\u5831\u304C\u542B\u307E\u308C\u306A\u304F\u306A\u3063\u305F\u5834\u5408\u3001\u305D\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u304C\u30C0\u30A6\u30F3\u3057\u305F\u3068\u307F\u306A\u3057\u3066\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u524A\u9664")))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"distance-vectorの問題点と解決法"},"Distance Vector\u306E\u554F\u984C\u70B9\u3068\u89E3\u6C7A\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7121\u9650\u30AB\u30A6\u30F3\u30C8\uFF1A\u6700\u5927\u5024\u5B9A\u7FA9\uFF08\u30DB\u30C3\u30D7\u6570\u306E\u4E0A\u9650\u306F\u901A\u5E38\uFF11\uFF15\u306B\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30EB\u30FC\u30D7\u306E\u554F\u984C\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30D7\u30EA\u30C3\u30C8\u30DB\u30E9\u30A4\u30BA\u30F3\uFF1ASplit horizon\uFF1B\u3042\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u304B\u3089\u53D7\u4FE1\u3057\u305F\u7D4C\u8DEF\u60C5\u5831\uFF08\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\uFF09\u3092\u540C\u3058\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u304B\u3089\u9001\u308A\u8FD4\u3055\u306A\u3044\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C8\u30DD\u30A4\u30BA\u30CB\u30F3\u30B0\uFF1ARoot poisoning\uFF1B\u30E1\u30C8\u30EA\u30C3\u30AF\u3092\u6700\u5927\u5024\u306B\u3057\u3066\u3001\u96A3\u63A5\u30EB\u30FC\u30BF\u306B\u7D4C\u8DEF\u60C5\u5831\u304C\u3060\u3046\u3093\u3057\u305F\u3053\u3068\u3092\u901A\u77E5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DD\u30A4\u30BA\u30F3\u30EA\u30D0\u30FC\u30B9\uFF1APoisoning Reverse\uFF1B\u30E1\u30C8\u30EA\u30C3\u30AF\u304C\u6700\u5927\u5024\uFF08\uFF11\uFF15\uFF09\u306E\u7D4C\u8DEF\u60C5\u5831\u3092\u53D7\u4FE1\u3059\u308B\u3068\u3001\u540C\u3058\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u304B\u3089\u305D\u306E\u7D4C\u8DEF\u60C5\u5831\u306E\u30E1\u30C8\u30EA\u30C3\u30AF\u3092\u6700\u5927\u5024\u306E\u307E\u307E\u9001\u308A\u8FD4\u3059\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DB\u30FC\u30EB\u30C9\u30C0\u30A6\u30F3\u30BF\u30A4\u30DE\u30FC\uFF1AHold down timer\uFF1B\u30C0\u30A6\u30F3\u3057\u305F\u7D4C\u8DEF\u60C5\u5831\u304C\u9593\u9055\u3048\u3066\u518D\u767B\u9332\u3055\u308C\u308B\u306E\u3092\u9632\u3050\u305F\u3081\u306E\u5F85\u3061\u6642\u9593\u3092\u4F5C\u308B\u6A5F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C8\u30EA\u30AC\u30FC\u30C9\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\u30D9\u30AF\u30BF\u30FC\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u30BF\u30A4\u30DE\u30FC",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Update\uFF0830\u79D2\uFF09\uFF1A\u30A2\u30C9\u30D0\u30BF\u30A4\u30BA"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Invalid\uFF08180\u79D2\uFF09\uFF1A\u30A2\u30C9\u30D0\u30BF\u30A4\u30BA\u3092\u53D7\u4FE1\u3057\u306A\u3044\u307E\u307E\u3001\u305D\u306E\u30EB\u30FC\u30C8\u3092\u7121\u52B9\u3060\u3068\u8A8D\u8B58\u3059\u308B\u307E\u3067\u306E\u6642\u9593"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Hold down\uFF08180\u79D2\uFF09\uFF1A\u3042\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3078\u306E\u30EB\u30FC\u30C8\u304C\u30C0\u30A6\u30F3\u3057\u305F\u6642\u3001\u8AA4\u3063\u305F\u7D4C\u8DEF\u60C5\u5831\u3092\u53D7\u4FE1\u3057\u3066\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u518D\u5B66\u7FD2\u3057\u306A\u3044\u3088\u3046\u306B\u3001\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u3057\u3070\u3089\u304F\u7121\u8996\u3057\u3066\u3001\u305D\u306E\u7D4C\u8DEF\u60C5\u5831\u3092\u4FDD\u6301\u3059\u308B\u6642\u9593\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Flush\uFF08Flushed after\uFF09\uFF1A\u53D7\u4FE1\u3057\u305F\u7D4C\u8DEF\u60C5\u5831\u3092\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u4FDD\u6301\u3067\u304D\u308B\u6642\u9593\u3002")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ripv2の特徴"},"RIPv2\u306E\u7279\u5FB4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"特徴"},"\u7279\u5FB4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"RFC\u6A19\u6E96\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\u30D9\u30AF\u30BF\u30FC\u578B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E1\u30C8\u30EA\u30C3\u30AF\u306F\u30DB\u30C3\u30D7\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DB\u30C3\u30D7\u6570\u306E\u4E0A\u9650\u306F15"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"30\u79D2\u9593\u9694\u3067\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u9001\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7B49\u30E1\u30C8\u30EA\u30C3\u30AF\u306E\u30ED\u30FC\u30C9\u30D0\u30E9\u30F3\u30B7\u30F3\u30B0\uFF1A\u30E1\u30C8\u30EA\u30C3\u30AF\u306E\u7B49\u3057\u3044\u6700\u9069\u7D4C\u8DEF\u304C\u8907\u6570\u3042\u308B\u5834\u5408\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u6700\u59274\u7D4C\u8DEF\u3092\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u5B66\u7FD2\u3057\u3066\u30ED\u30FC\u30C9\u30D0\u30E9\u30F3\u30B7\u30F3\u30B0\u3092\u884C\u3046\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9\u30EC\u30B9\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\uFF1AVLSM\u3084\u4E0D\u9023\u7D9A\u30B5\u30D6\u30CD\u30C3\u30C8\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3001IP\u30A2\u30C9\u30EC\u30B9\u3092\u52B9\u7387\u7684\u306B\u4F7F\u7528\u3067\u304D\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\u8A8D\u8A3C\u30B5\u30DD\u30FC\u30C8")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ripv2の基本設定"},"RIPv2\u306E\u57FA\u672C\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"トポロジ",src:(__webpack_require__(78433)/* ["default"] */ .Z),width:"715",height:"172"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"For each router:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RTn(config)#router rip\nRTn(config-router)#version 2\nRTn(config-router)#network 172.16.0.0\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip route \n\nGateway of last resort is not set\n\n     172.16.0.0/16 is variably subnetted, 4 subnets, 2 masks\nC       172.16.2.0/24 is directly connected, GigabitEthernet0/0/1\nL       172.16.2.1/32 is directly connected, GigabitEthernet0/0/1\nR       172.16.3.0/24 [120/1] via 172.16.2.2, 00:00:16, GigabitEthernet0/0/1\nR       172.16.4.0/24 [120/2] via 172.16.2.2, 00:00:16, GigabitEthernet0/0/1\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"RIP\u8A2D\u5B9A\u306E\u524A\u9664\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config)#no router rip\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ripv2の検証"},"RIPv2\u306E\u691C\u8A3C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"検証"},"\u691C\u8A3C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"show ip protocols")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip protocols\n\nRouting Protocol is \"rip\"\nSending updates every 30 seconds, next due in 21 seconds\nInvalid after 180 seconds, hold down 180, flushed after 240\nOutgoing update filter list for all interfaces is not set\nIncoming update filter list for all interfaces is not set\nRedistributing: rip\nDefault version control: send version 2, receive 2             #RIP\u304C\u6709\u52B9\u306A\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\u540D\u3068\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u8868\u793A\n  Interface             Send  Recv  Triggered RIP  Key-chain\n  GigabitEthernet0/0/1  2     2     \nAutomatic network summarization is in effect\nMaximum path: 4\nRouting for Networks:\n    172.16.0.0\nPassive Interface(s):\nRouting Information Sources:\n    Gateway         Distance      Last Update\n    172.16.2.2           120      00:00:29\nDistance: (default is 120)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"show ip route rip")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip route rip\n     172.16.0.0/16 is variably subnetted, 4 subnets, 2 masks\nR       172.16.3.0/24 [120/1] via 172.16.2.2, 00:00:27, GigabitEthernet0/0/1\nR       172.16.4.0/24 [120/2] via 172.16.2.2, 00:00:27, GigabitEthernet0/0/1\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"show ip rip database")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip rip database\n172.16.2.0/24    auto-summary\n172.16.2.0/24    directly connected, GigabitEthernet0/0/1\n172.16.3.0/24    auto-summary\n172.16.3.0/24\n    [1] via 172.16.2.2, 00:00:14, GigabitEthernet0/0/1\n172.16.4.0/24    auto-summary\n172.16.4.0/24\n    [2] via 172.16.2.2, 00:00:14, GigabitEthernet0/0/1\n    \n\u6CE8\u610F\uFF1A\n    [2]:\u5B9B\u5148\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u307E\u3067\u306E\u30E1\u30C8\u30EA\u30C3\u30AF\u5024\n    172.16.2.2\uFF1A\u30CD\u30AF\u30B9\u30C8\u30DB\u30C3\u30D7\u30A2\u30C9\u30EC\u30B9\n    00:00:14\uFF1A\u7D4C\u8DEF\u60C5\u5831\u3092\u53D7\u4FE1\u3057\u3066\u304B\u3089\u7D4C\u904E\u3057\u305F\u6642\u9593\n    GigabitEthernet0/0/1\uFF1A\u30D1\u30B1\u30C3\u30C8\u306E\u51FA\u529B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"debug ip rip")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#debug ip rip\nRIP protocol debugging is on\nRT1#RIP: received v2 update from 172.16.2.2 on GigabitEthernet0/0/1\n      172.16.3.0/24 via 0.0.0.0 in 1 hops\n      172.16.4.0/24 via 0.0.0.0 in 2 hops\nRIP: received v2 update from 172.16.2.2 on GigabitEthernet0/0/1\n      172.16.3.0/24 via 0.0.0.0 in 1 hops\n      172.16.4.0/24 via 0.0.0.0 in 2 hops\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ripv2のオプション設定"},"RIPv2\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ripv2の経路集約"},"RIPv2\u306E\u7D4C\u8DEF\u96C6\u7D04"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u81EA\u52D5\u7D4C\u8DEF\u96C6\u7D04\u306E\u7121\u52B9\u5316\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config-router)#no auto-summary\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u78BA\u8A8D\uFF1A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip protocols\nRouting Protocol is \"rip\"\nSending updates every 30 seconds, next due in 24 seconds\nInvalid after 180 seconds, hold down 180, flushed after 240\nOutgoing update filter list for all interfaces is not set <-------\u624B\u52D5\u7D4C\u8DEF\u96C6\u7D04\nIncoming update filter list for all interfaces is not set <-------\u624B\u52D5\u7D4C\u8DEF\u96C6\u7D04\nRedistributing: rip\nDefault version control: send version 2, receive 2\n  Interface             Send  Recv  Triggered RIP  Key-chain\n  GigabitEthernet0/0/1  2     2     \nAutomatic network summarization is not in effect\nMaximum path: 4\nRouting for Networks:\n    172.16.0.0\nPassive Interface(s):\nRouting Information Sources:\n    Gateway         Distance      Last Update\n    172.16.2.2           120      00:00:04\nDistance: (default is 120)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7D4C\u8DEF\u96C6\u7D04\u306E\u8A2D\u5B9A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config-if)#ip summary-address rip <address> <mask>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"パッシブインターフェイスpassive-interface"},"\u30D1\u30C3\u30B7\u30D6\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u3000\uFF08Passive interface\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u6307\u5B9A\u3057\u305F\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\u304B\u3089\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u304C\u9001\u4FE1\u3055\u308C\u308B\u306E\u3092\u6291\u5236\u3059\u308B\u6A5F\u80FD")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config-router)#passive-interface GigabitEthernet 0/0/0\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip protocols \n\nDefault version control: send version 2, receive 2\n  Interface             Send  Recv  Triggered RIP  Key-chain\n  GigabitEthernet0/0/1  2     2     \nAutomatic network summarization is not in effect\nMaximum path: 4\nRouting for Networks:\n    172.16.0.0\nPassive Interface(s):   <----------\u30D1\u30C3\u30B7\u30D6\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9\n    GigabitEthernet0/0/0\nRouting Information Sources:\n    Gateway         Distance      Last Update\n    172.16.2.2           120      00:00:16\nDistance: (default is 120)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ripのデフォルトルート"},"RIP\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30EB\u30FC\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F79\u5272\uFF1A\u30C7\u30D5\u30A9\u30EB\u30C8\u30EB\u30FC\u30C8\u3092\u914D\u5E03\u3057\u3001\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u3092\u5C0F\u3055\u304F\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"RIP\u306B\u3088\u308B\u30C7\u30D5\u30A9\u30EB\u30C8\u30EB\u30FC\u30C8\u306E\u914D\u5E03")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config-router)#default-information originate\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ripタイマーの変更"},"RIP\u30BF\u30A4\u30DE\u30FC\u306E\u5909\u66F4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1(config-router)#timers basic 5 15 15 30 # update, invalid, holddown, flush\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip protocols\nRouting Protocol is \"rip\"\nSending updates every 5 seconds, next due in 0 seconds\nInvalid after 15 seconds, hold down 15, flushed after 30\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"rip認証"},"RIP\u8A8D\u8A3C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7565"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 78433:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ })

}]);