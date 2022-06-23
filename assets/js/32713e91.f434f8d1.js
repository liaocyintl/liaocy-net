"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[1513],{

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

/***/ 3282:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 04 IPアドレスとサブネット',date:new Date('2019-07-13T20:33:00.000Z'),lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 04 IPアドレスとサブネット","description":"IPv4アドレス、サブネットワーク、IPアドレッシング、VLSM","source":"@site/docs/archieved/2019/07/13-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/13-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":13,"frontMatter":{"title":"CCNA試験のまとめノート 04 IPアドレスとサブネット","date":"2019-07-13T20:33:00.000Z","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'構成要素',id:'構成要素',level:2},{value:'アドレスクラス',id:'アドレスクラス',level:2},{value:'予約済IPアドレス',id:'予約済ipアドレス',level:2},{value:'グローバルアドレスとプライベートIPアドレス',id:'グローバルアドレスとプライベートipアドレス',level:2},{value:'サブネットワーク',id:'サブネットワーク',level:2},{value:'IPアドレッシングの計算（試験問題）',id:'ipアドレッシングの計算試験問題',level:2},{value:'VLSM',id:'vlsm',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"IPv4\u30A2\u30C9\u30EC\u30B9\u3001\u30B5\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3001IP\u30A2\u30C9\u30EC\u30C3\u30B7\u30F3\u30B0\u3001VLSM"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ipv4アドレス"},"IPv4\u30A2\u30C9\u30EC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"構成要素"},"\u69CB\u6210\u8981\u7D20"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u968E\u5C64\u578B\u30A2\u30C9\u30EC\u30B9\uFF1AIP\u30A2\u30C9\u30EC\u30B9\u306F32\u30D3\u30C3\u30C8\uFF1B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\u3068\u30DB\u30B9\u30C8\u90E8",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\uFF1A\u6240\u5C5E\u3059\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u793A\u3059"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DB\u30B9\u30C8\u90E8\uFF1A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306B\u6240\u5C5E\u3059\u308B\u30DB\u30B9\u30C8\u3092\u8B58\u5225")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"アドレスクラス"},"\u30A2\u30C9\u30EC\u30B9\u30AF\u30E9\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9A\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7B2C\uFF11\u30AA\u30AF\u30C6\u30C3\u30C8\u306E\u5148\u982D\u306F0\u306B\u56FA\u5B9A\uFF0800000000\uFF5E01111111\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6709\u52B9\u306A\u7BC4\u56F2\u306F1.0.0.0\u3000\uFF5E\u3000126.255.255.255"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\u306F8\u30D3\u30C3\u30C8\u3001\u30DB\u30B9\u30C8\u90E8\u306F24\u30D3\u30C3\u30C8\uFF1B\u30DB\u30B9\u30C8\u6570\u306F2^24-2=16777214"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9B\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7B2C\uFF11\u30AA\u30AF\u30C6\u30C3\u30C8\u306E\u5148\u982D\u306F10\u306B\u56FA\u5B9A\uFF0810000000\uFF5E10111111\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6709\u52B9\u306A\u7BC4\u56F2\u306F128.0.0.0\u3000\uFF5E\u3000191.255.255.255"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\u306F16\u30D3\u30C3\u30C8\u3001\u30DB\u30B9\u30C8\u90E8\u306F16\u30D3\u30C3\u30C8\uFF1B\u30DB\u30B9\u30C8\u6570\u306F2^16-2=65534"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9C\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7B2C\uFF11\u30AA\u30AF\u30C6\u30C3\u30C8\u306E\u5148\u982D\u306F110\u306B\u56FA\u5B9A\uFF0811000000\uFF5E11011111\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6709\u52B9\u306A\u7BC4\u56F2\u306F192.0.0.0\u3000\uFF5E\u3000223.255.255.255"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\u306F24\u30D3\u30C3\u30C8\u3001\u30DB\u30B9\u30C8\u90E8\u306F8\u30D3\u30C3\u30C8\uFF1B\u30DB\u30B9\u30C8\u6570\u306F2^8-2=254"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9D\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7B2C\uFF11\u30AA\u30AF\u30C6\u30C3\u30C8\u306E\u5148\u982D\u306F1110\u306B\u56FA\u5B9A\uFF0811100000\uFF5E11101111\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6709\u52B9\u306A\u7BC4\u56F2\u306F224.0.0.0\u3000\uFF5E\u3000239.255.255.255"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"224.0.0.0\u3000\uFF5E\u3000224.0.0.255\u306F\u540C\u4E00\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u3067\u306E\u307F\u9001\u4FE1\u3055\u308C\u3001\u30EB\u30FC\u30BF\u306B\u3088\u3063\u3066\u4F1D\u9001\u3055\u308C\u306A\u3044\u3002")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"予約済ipアドレス"},"\u4E88\u7D04\u6E08IP\u30A2\u30C9\u30EC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30DB\u30B9\u30C8\u90E8\u306E\u30D3\u30C3\u30C8\u3092\u3059\u3079\u3066\uFF10"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F79\u5272\uFF1A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u81EA\u4F53\u3092\u8868\u3059"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5834\u5408\uFF1A\u30EB\u30FC\u30BF\u304C\u7D4C\u8DEF\u5236\u5FA1\u3059\u308B\u3068\u304D"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u30A2\u30C9\u30EC\u30B9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30DB\u30B9\u30C8\u90E8\u306E\u30D3\u30C3\u30C8\u3092\u3059\u3079\u3066\uFF11"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5834\u5408\uFF1A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u5185\u3059\u3079\u3066\u306E\u7AEF\u672B\u306B\u9001\u4FE1"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C0\u30A4\u30EC\u30AF\u30C8\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u30A2\u30C9\u30EC\u30B9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u53D7\u4FE1\u8005\u304C\u6240\u5C5E\u3057\u3066\u3044\u306A\u3044\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3078\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u30A2\u30C9\u30EC\u30B9\u3078\u9001\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30EB\u30FC\u30C8\u306B\u3088\u308B\u4F1D\u9001\u53EF\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6CE8\u610F\uFF1ACisco\u30EB\u30FC\u30BF\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067OFF\u306B\u306A\u3063\u3066\u3044\u308B\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30D7\u30D0\u30C3\u30AF\u30A2\u30C9\u30EC\u30B9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u7B2C\uFF11\u30AA\u30AF\u30C6\u30C3\u30C8\u304C127\u3067\u59CB\u307E\u308B\uFF08127.0.0.1\uFF5E127.255.255.254\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F79\u5272\uFF1A\u6A5F\u5668\u306E\u81EA\u5206\u81EA\u8EAB\u3092\u8868\u3059\u4EEE\u60F3\u7684\u306A\u30A2\u30C9\u30EC\u30B9")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"PS C:\\> ping 127.255.255.254\n\n\u6B63\u5728 Ping 127.255.255.254 \u5177\u6709 32 \u5B57\u8282\u7684\u6570\u636E:\n\u6765\u81EA 127.255.255.254 \u7684\u56DE\u590D: \u5B57\u8282=32 \u65F6\u95F4<1ms TTL=128\n\u6765\u81EA 127.255.255.254 \u7684\u56DE\u590D: \u5B57\u8282=32 \u65F6\u95F4<1ms TTL=128\n\u6765\u81EA 127.255.255.254 \u7684\u56DE\u590D: \u5B57\u8282=32 \u65F6\u95F4<1ms TTL=128\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u81EA\u52D5\u8A2D\u5B9A\u30A2\u30C9\u30EC\u30B9 APIPA(Automatic Private IP Addressing)",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5834\u5408\uFF1ADHCP\u306A\u3069\u304B\u3089IP\u30A2\u30C9\u30EC\u30B9\u53D6\u5F97\u306B\u5931\u6557\u3057\u305F\u5834\u5408"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7BC4\u56F2\uFF1A169.254.0.0/16\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B9\u7BC4\u56F2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30EB\u30FC\u30BF\u306B\u3088\u308B\u4F1D\u9001\u3067\u304D\u306A\u3044\u3002\u540C\u4E00\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u5185\u3067\u306E\u307F\u901A\u4FE1\u3092\u884C\u3046\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5225\u540D\uFF1A\u30EA\u30F3\u30AF\u30ED\u30FC\u30AB\u30EB\u30A2\u30C9\u30EC\u30B9")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"グローバルアドレスとプライベートipアドレス"},"\u30B0\u30ED\u30FC\u30D0\u30EB\u30A2\u30C9\u30EC\u30B9\u3068\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8IP\u30A2\u30C9\u30EC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7BA1\u7406\u7D44\u7E54\uFF1AIANA\uFF08Internet Assigned Number Authority\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u76EE\u7684\uFF1AIP\u30A2\u30C9\u30EC\u30B9\u67AF\u6E34\uFF08\u3053\u304B\u3064\uFF09\u306E\u554F\u984C\u3092\u5BFE\u5FDC\u3059\u308B\u305F\u3081"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B0\u30ED\u30FC\u30D0\u30EBIP\uFF1A\u30A4\u30F3\u30BF\u30CD\u30C3\u30C8\u3067\u5229\u7528\u53EF\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8IP\u30A2\u30C9\u30EC\u30B9\uFF1A\u7D44\u7E54\u5185\u90E8\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3067\u306E\u307F\u5229\u7528\u53EF\u80FD",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7BC4\u56F2(RFC1918\u3067\u5B9A\u7FA9)\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9A\uFF1A10.0.0.0 \uFF5E 10.255.255.255"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9B\uFF1A172.16.0.0 \uFF5E 172.31.255.255"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9C\uFF1A192.168.0.0 \uFF5E 192.168.255.255"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"NAT\uFF1ANetwork Address Translation\uFF1B\u9001\u4FE1\u5143\u30A2\u30C9\u30EC\u30B9\u3092\u30B0\u30ED\u30FC\u30D0\u30EBIP\u30A2\u30C9\u30EC\u30B9\u306B\u5909\u63DB\uFF1B\u5185\u90E8\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3067\u4F7F\u7528\u3057\u3066\u3044\u308B\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8IP\u30A2\u30C9\u30EC\u30B9\u3092\u3001\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u4E0A\u3067\u4F7F\u7528\u53EF\u80FD\u306A\u30B0\u30ED\u30FC\u30D0\u30EBIP\u30A2\u30C9\u30EC\u30B9\u306B\u76F8\u4E92\u5909\u63DB\u3059\u308B\u4ED5\u7D44\u307F")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"サブネットワーク"},"\u30B5\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u3042\u308B\uFF11\u3064\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u8907\u6570\u306B\u5206\u5272\u3057\u305F\u5C0F\u3055\u306A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u6307\u3059"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5229\u70B9\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u591A\u304F\u306E\u7AEF\u672B\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u30C9\u30E1\u30A4\u30F3\u3092\u5206\u5272\u53EF\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF\u3092\u5C40\u6240\u5316\u3002\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u6539\u5584"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u69CB\u6210\u67D4\u8EDF\u3001\u7BA1\u7406\u306E\u624B\u9593\u304C\u8EFD\u6E1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF\u5206\u96E2\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306E\u9069\u7528\u304C\u5BB9\u6613"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B5\u30D6\u30CD\u30C3\u30C8\u5316",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\uFF11\u3064\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u5C0F\u3055\u306A\u30B5\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306B\u5206\u5272"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6CE8\u610F\uFF1A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\u306FIANA\u306B\u3088\u3063\u3066\u5272\u308A\u5F53\u3066\u3089\u308C\u3066\u3044\u308B\u305F\u3081\u5909\u66F4\u3067\u304D\u306A\u3044"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u65B9\u6CD5\uFF1A\u30B5\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\u306F\u30DB\u30B9\u30C8\u90E8\u306E\u30D3\u30C3\u30C8\u304B\u3089\u4EFB\u610F\u306E\u30D3\u30C3\u30C8\u9577\u3092\u501F\u308A\u3066\u62E1\u5F35\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A08\u7B97\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$${\u30B5\u30D6\u30CD\u30C3\u30C8\u6570} = 2^s$$ (s=\u30B5\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\u306E\u30D3\u30C3\u30C8\u6570)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"$${\u30DB\u30B9\u30C8\u30A2\u30C9\u30EC\u30B9\u6570 = 2^h-2$$ (h\u306F\u30DB\u30B9\u30C8\u90E8\u306E\u30D3\u30C3\u30C8\u6570)"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B5\u30D6\u30CD\u30C3\u30C8\uFF10\u3001\u30B5\u30D6\u30CD\u30C3\u30C8\uFF11\u306E\u4F7F\u7528",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"TFC950\u306F\u4F7F\u7528\u3057\u306A\u3044\u3088\u3046\u3067\u5F37\u304F\u63A8\u5968\u3057\u3066\u3044\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u3057\u304B\u3057\u5168\u4F53\u5229\u7528\u3057\u3066\u3044\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B5\u30D6\u30CD\u30C3\u30C8\uFF10\uFF1A\u30BC\u30ED\u30B5\u30D6\u30CD\u30C3\u30C8\u3002\u30B5\u30D6\u30CD\u30C3\u30C8\u5316\u3057\u305F\u6642\u306B\u5F97\u3089\u308C\u308B\u6700\u521D\u306E\u30B5\u30D6\u30CD\u30C3\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B5\u30D6\u30CD\u30C3\u30C8\uFF11\uFF1A\u30B5\u30D6\u30CD\u30C3\u30C8\u5316\u3057\u305F\u3068\u304D\u5F97\u3089\u308C\u308B\u6700\u5F8C\u306E\u30B5\u30D6\u30CD\u30C3\u30C8\u3092\u6307\u3059\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B5\u30D6\u30CD\u30C3\u30C8\u30DE\u30B9\u30AF",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CA\u30C1\u30E5\u30E9\u30EB\u30DE\u30B9\u30AF\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9A\uFF1A255.0.0.0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9B\uFF1A255.255.0.0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9C\uFF1A255.255.255.0"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30EC\u30D5\u30A3\u30C3\u30AF\u30B9(Prefix)\u9577",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9\u3092\u793A\u3059\u30D3\u30C3\u30C8\u306E\u9577\u3055\u3092\u8868\u3059"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F8B\uFF1A\u300C192.168.0.1/24\u300D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5225\u540D\uFF1ACIDR\uFF08Classless Inter-Domain Routing\uFF09")))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ipアドレッシングの計算試験問題"},"IP\u30A2\u30C9\u30EC\u30C3\u30B7\u30F3\u30B0\u306E\u8A08\u7B97\uFF08\u8A66\u9A13\u554F\u984C\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7565"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"vlsm"},"VLSM"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6982\u8981",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"VLSM\uFF08Variable Length Subnet Mask\uFF1A\u53EF\u5909\u9577\u30B5\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B5\u30D6\u30CD\u30C3\u30C8\u3054\u3068\u306B\u7570\u306A\u308B\u30B5\u30D6\u30CD\u30C3\u30C8\u30DE\u30B9\u30AF\u3092\u4F7F\u3046\u6280\u8853"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5229\u70B9\uFF1A\u63A5\u7D9A\u3059\u308B\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306E\u53F0\u6570\u306B\u5FDC\u3058\u305F\u30B5\u30D6\u30CD\u30C3\u30C8\u30DE\u30B9\u30AF\u304C\u5229\u7528\u3067\u304D\u3001IP\u30A2\u30C9\u30EC\u30B9\u3092\u7121\u99C4\u306A\u304F\u5229\u7528\u3067\u304D\u308B\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"FLSM\uFF08Fixed Length Subnet Mask\uFF1A\u56FA\u5B9A\u9577\u30B5\u30D6\u30CD\u30C3\u30C8\u30DE\u30B9\u30AF\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6B20\u70B9\uFF1A\u672A\u4F7F\u7528\u306E\u30A2\u30C9\u30EC\u30B9\u304C\u591A\u3044\u53EF\u80FD")))))));};MDXContent.isMDXComponent=true;

/***/ })

}]);