"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[1684],{

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

/***/ 81476:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 02 イーサネット',date:new Date('2019-07-11T11:33:00.000Z'),lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 02 イーサネット","description":"イーサネット、CSMA・CD、ネットワーク機器、レイヤ２スイッチンぐ","source":"@site/docs/archieved/2019/07/11-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/11-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":11,"frontMatter":{"title":"CCNA試験のまとめノート 02 イーサネット","date":"2019-07-11T11:33:00.000Z","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'概要',id:'概要',level:2},{value:'MAC副層とLLC副層',id:'mac副層とllc副層',level:2},{value:'イーサネットフレーム',id:'イーサネットフレーム',level:2},{value:'MACアドレスの構成',id:'macアドレスの構成',level:2},{value:'イーサネットの規格',id:'イーサネットの規格',level:2},{value:'概要、動作',id:'概要動作',level:2},{value:'リピータハブを使用した10BASE-TにおけるCDMA/CD',id:'リピータハブを使用した10base-tにおけるcdmacd',level:2},{value:'リピータ、ハブ',id:'リピータハブ',level:2},{value:'ブリッジ・スイッチ',id:'ブリッジスイッチ',level:2},{value:'ルータ、レイヤ3スイッチ',id:'ルータレイヤ3スイッチ',level:2},{value:'スイッチの基本機能',id:'スイッチの基本機能',level:2},{value:'MACアドレスの学習',id:'macアドレスの学習',level:2},{value:'フィルタリング',id:'フィルタリング',level:2},{value:'フラッディング（Flooding）',id:'フラッディングflooding',level:2},{value:'全二重通信(Full duplex)',id:'全二重通信full-duplex',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u3001CSMA\u30FBCD\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u6A5F\u5668\u3001\u30EC\u30A4\u30E4\uFF12\u30B9\u30A4\u30C3\u30C1\u30F3\u3050"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"イーサネットの概要"},"\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u306E\u6982\u8981"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"概要"},"\u6982\u8981"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A19\u6E96\u5316\uFF1AIEEE802.3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"DIX\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"mac副層とllc副層"},"MAC\u526F\u5C64\u3068LLC\u526F\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"MAC\uFF08Media Access Control\uFF09\u526F\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"LLC\uFF08Logical Link Control\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"イーサネットフレーム"},"\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u30D5\u30EC\u30FC\u30E0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7A2E\u985E\uFF1ADIX\u3068IEEE 802.3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9B\u5148MAC\u30A2\u30C9\u30EC\u30B9\uFF1A\uFF16\u30D0\u30A4\u30C8\uFF1B\u5B9B\u5148\u306EMAC\u30A2\u30C9\u30EC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9001\u4FE1\u5143MAC\u30A2\u30C9\u30EC\u30B9\uFF1A\uFF16\u30D0\u30A4\u30C8\uFF1B\u9001\u4FE1\u5143\u306EMAC\u30A2\u30C9\u30EC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30BF\u30A4\u30D7\uFF1A\uFF12\u30D0\u30A4\u30C8\uFF1B\u4E0A\u4F4D\u5C64\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u8B58\u5225\u756A\u53F7\u3002\u4F8B\u3048\u3070IPv4\u306A\u3089\u300C0x0800\u300D\u3001ARP\u3001IPv6\u306A\u3069"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9577\u3055/\u30BF\u30A4\u30D7\uFF1A\uFF12\u30D0\u30A4\u30C8\uFF1B\u30C7\u30FC\u30BF\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u9577\u3055\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30FC\u30BF\uFF1A\uFF14\uFF16\uFF5E\uFF11\uFF15\uFF10\uFF10\u30D0\u30A4\u30C8\uFF1B\uFF14\uFF16\u30D0\u30A4\u30C8\u306B\u6E80\u305F\u306A\u3044\u5834\u54080\u3092\u5165\u308C\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"802.2\u30D8\u30C3\u30C0\uFF1AIEEE802.2\u898F\u683C\u306E\u30B5\u30FC\u30D3\u30B9\u8B58\u5225\u60C5\u5831"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"FCS\uFF1A\uFF14\u30D0\u30A4\u30C8\u3002\u30A8\u30E9\u30FC\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u305F\u3081\u306ECRC\u5024\u3002")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"macアドレスの構成"},"MAC\u30A2\u30C9\u30EC\u30B9\u306E\u69CB\u6210"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"OUI(Organizationally Unique Identifier)\uFF1A\u524D\u534A\u306E24\u30D3\u30C3\u30C8\u306F\u6A5F\u5668\u306E\u30D9\u30F3\u30C0\u3092\u793A\u3059\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5206\u985E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E6\u30CB\u30AD\u30E3\u30B9\u30C8MAC\u30A2\u30C9\u30EC\u30B9\uFF1A\u7279\u5B9A\u30CE\u30FC\u30C9\u3078\u306E\u901A\u4FE1\uFF081\u5BFE1\uFF09\u306B\u4F7F\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DE\u30EB\u30C1\u30AD\u30E3\u30B9\u30C8MAC\u30A2\u30C9\u30EC\u30B9\uFF1A1\u5BFEN"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8MAC\u30A2\u30C9\u30EC\u30B9\uFF1A1\u5BFE\u5168")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"イーサネットの規格"},"\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u306E\u898F\u683C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\uFF0810Mb\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D5\u30A1\u30B9\u30C8\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\uFF08100Mb\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AE\u30AC\u30D3\u30C3\u30C8\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\uFF081Gb\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"10\u30AE\u30AC\u30D3\u30C3\u30C8\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\uFF0810Gb\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"csmacd"},"CSMA/CD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"概要動作"},"\u6982\u8981\u3001\u52D5\u4F5C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"CSMA/CD(Carrier Sense Multiple Access with Collision Detection)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u540D\u524D\uFF1A\u642C\u9001\u6CE2\u611F\u77E5\u591A\u91CD\u30A2\u30AF\u30BB\u30B9/\u885D\u7A81\uFF08\u3057\u3087\u3046\u3068\u3064\uFF09\u691C\u51FA\u65B9\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F79\u5272\uFF1A\u8907\u6570\u306E\u30DB\u30B9\u30C8\u3067\u5171\u6709\u3057\u3066\u3044\u308B\u30B1\u30FC\u30D6\u30EB\u306A\u3069\u306E\u4F1D\u9001\u5A92\u4F53\u306B\u3069\u306E\u3088\u3046\u306A\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u30D5\u30EC\u30FC\u30E0\u306E\u9001\u4FE1\u3092\u5236\u5FA1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E09\u8981\u7D20\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"CS\uFF08\u30AD\u30E3\u30EA\u30A2\u3000\u30BB\u30F3\u30B9\uFF09\uFF1A\u30B1\u30FC\u30D6\u30EB\u4E0A\u306B\u4FE1\u53F7\u304C\u6D41\u308C\u3066\u3044\u306A\u3044\u304B\u78BA\u8A8D\u3059\u308B\u51E6\u7406\u3002",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A2\u30A4\u30C9\u30EB\uFF1A\u4FE1\u53F7\u304C\u6D41\u308C\u3066\u3044\u306A\u3044"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IFG\uFF08Interframe Gap\uFF09\uFF1A\u30D5\u30EC\u30FC\u30E0\u9593\u9694\u306E\u6700\u5C0F\u6642\u9593"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"MA\uFF08Multiple Access:MA\u3001\u591A\u91CD\u30A2\u30AF\u30BB\u30B9\uFF09\uFF1A\u3059\u3079\u3066\u306E\u30DB\u30B9\u30C8\u306B\u5BFE\u3057\u3066\u9001\u4FE1\u6A29\u5229\u304C\u5E73\u7B49\u306B\u4E0E\u3048\u3089\u308C\u3066\u3044\u308B\u3053\u3068"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"CD\uFF08Collision Detection:CD\u3001\u885D\u7A81\u691C\u51FA\uFF09\uFF1A2\u53F0\u4EE5\u4E0A\u306E\u30DB\u30B9\u30C8\u304C\u540C\u6642\u306B\u30AD\u30E3\u30EA\u30A2\u30BB\u30F3\u30B9\u3057\u3066\u9001\u4FE1\u958B\u59CB\uFF1B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B8\u30E3\u30E0\uFF08jam\uFF09\u4FE1\u53F7\uFF1A\u885D\u7A81\u691C\u51FA\u3057\u305F\u3089\u3001\u9001\u4FE1\u3092\u505C\u6B62\u3057\u300132\u30D3\u30C3\u30C8\u9577\u306E\u30B8\u30E3\u30E0\u4FE1\u53F7\u3092\u9001\u4FE1\u3057\u3066\u3001\u885D\u7A81\u30AB\u30A6\u30F3\u30BF\u306F1\u5897\u52A0\u3001\u3059\u3079\u3066\u306E\u30DB\u30B9\u30C8\u306B\u78BA\u5B9F\u306B\u4F1D\u3048\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u885D\u7A81\u30AB\u30A6\u30F3\u30BF\u306F16\u306B\u306A\u3063\u305F\u5834\u5408\u30D5\u30EC\u30FC\u30E0\u3092\u7834\u68C4\u3059\u308B\u3002")))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"リピータハブを使用した10base-tにおけるcdmacd"},"\u30EA\u30D4\u30FC\u30BF\u30CF\u30D6\u3092\u4F7F\u7528\u3057\u305F10BASE-T\u306B\u304A\u3051\u308BCDMA/CD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7565"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ネットワーク機器"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u6A5F\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"リピータハブ"},"\u30EA\u30D4\u30FC\u30BF\u3001\u30CF\u30D6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EA\u30D4\u30FC\u30BF\uFF1A\u96FB\u6C17\u4FE1\u53F7\u3092\u5897\u5E45\u3057\u6CE2\u5F62\u3092\u518D\u751F\u3057\u3066\u4E2D\u7D99\u3092\u884C\u3046\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CF\u30D6\uFF1A\u30EA\u30D4\u30FC\u30BF\u306E\u6A5F\u80FD\u3092\u6301\u3061\u3001\u30EA\u30D4\u30FC\u30BF\u30CF\u30D6\u3068\u547C\u3070\u308C\u3001\u53D7\u4FE1\u30DD\u30FC\u30C8\u3092\u9664\u304F\u3059\u3079\u3066\u306E\u30DD\u30FC\u30C8\u306B\u4FE1\u53F7\u3092\u4E2D\u7D99"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B3\u30EA\u30B8\u30E7\u30F3\u30C9\u30E1\u30A4\u30F3(Collision domain\u3001\u51B2\u7A81\u57DF): \u96FB\u6C17\u4FE1\u53F7\u306E\u885D\u7A81\u304C\u4F1D\u308F\u308B\u7BC4\u56F2\u306E\u3053\u3068")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ブリッジスイッチ"},"\u30D6\u30EA\u30C3\u30B8\u30FB\u30B9\u30A4\u30C3\u30C1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DD\u30B8\u30B7\u30E7\u30F3\uFF1AMAC\u30A2\u30C9\u30EC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u30D5\u30EC\u30FC\u30E0\u306E\u4E2D\u7D99\u3092\u884C\u3046\u30C7\u30FC\u30BF\u30EA\u30F3\u30AF\u5C64\u3067\u64CD\u4F5C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D6\u30EA\u30C3\u30B8\u3068\u30B9\u30A4\u30C3\u30C1\u306E\u9055\u3044",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30A4\u30C3\u30C1\u306F\u30DE\u30EB\u30C1\u30DD\u30FC\u30C8\u3067\u3042\u308A\u3001\u3069\u306E\u30DD\u30FC\u30C8\u306B\u30D5\u30EC\u30FC\u30E0\u3092\u4E2D\u7D99\u3059\u308B\u304B\u307E\u3067\u5224\u65AD\u3059\u308B")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ルータレイヤ3スイッチ"},"\u30EB\u30FC\u30BF\u3001\u30EC\u30A4\u30E43\u30B9\u30A4\u30C3\u30C1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30BF\uFF1AIP\u30A2\u30C9\u30EC\u30B9\u306A\u3069\u306E\u8AD6\u7406\u30A2\u30C9\u30EC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u30D1\u30B1\u30C3\u30C8\u3092\u4E2D\u7D99\u3059\u308B\u3002",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\uFF1A\u30D1\u30B1\u30C3\u30C8\u306E\u30D8\u30C3\u30C0\u306B\u542B\u307E\u308C\u308B\u5B9B\u5148\u30A2\u30C9\u30EC\u30B9\u3092\u57FA\u306B\u3001\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u3092\u53C2\u7167\u3057\u3001\u6700\u9069\u7D4C\u8DEF\u3092\u9078\u629E\u3057\u3066\u30D1\u30B1\u30C3\u30C8\u3092\u4F1D\u9001\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7570\u306A\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u76F8\u4E92\u306B\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u30C9\u30E1\u30A4\u30F3\u3092\u5206\u5272"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EC\u30A4\u30E4\uFF13\u30B9\u30A4\u30C3\u30C1\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30BF\u3068\u306E\u9055\u3044")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u30EB\u30FC\u30BF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u30EC\u30A4\u30E43\u30B9\u30A4\u30C3\u30C1"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u901F\u5EA6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u4F4E\u3044\uFF08\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u51E6\u7406\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u9AD8\u901F\uFF08\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u51E6\u7406\u3001ASIC\uFF1Aapplication specific integrated circuit\u3001\u7279\u5B9A\u7528\u9014\u5411\u3051\u96C6\u7A4D\u56DE\u8DEF\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u3001\u30B7\u30EA\u30A2\u30EB\u306A\u3069"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30DD\u30FC\u30C8\u5358\u4FA1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u9AD8\u3044"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u4F4E\u3044")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u5834\u6240"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"WAN"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u4F01\u696D\u5185\u306ELAN\u306E\u69CB\u7BC9")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u30C9\u30E1\u30A4\u30F3\uFF08\u5E7F\u64AD\u57DF\uFF09\uFF1A\u540C\u3058\u30B5\u30D6\u30CD\u30C3\u30C8\u3067\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u3067\u304D\u308B\u5730\u57DF\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"デフォルトゲートウェイ"},"\u30C7\u30D5\u30A9\u30EB\u30C8\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30EB\u30FC\u30BF\u306F\u7570\u306A\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3078\u306E\u300C\u51FA\u5165\u53E3\u300D")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"レイヤ2スイッチング"},"\u30EC\u30A4\u30E42\u30B9\u30A4\u30C3\u30C1\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"スイッチの基本機能"},"\u30B9\u30A4\u30C3\u30C1\u306E\u57FA\u672C\u6A5F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"MAC\u30A2\u30C9\u30EC\u30B9\u5B66\u7FD2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5168\u4E8C\u91CD\u901A\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DE\u30A4\u30AF\u30ED\u30BB\u30B0\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"macアドレスの学習"},"MAC\u30A2\u30C9\u30EC\u30B9\u306E\u5B66\u7FD2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"MAC\u30A2\u30C9\u30EC\u30B9\u30C6\u30FC\u30D6\u30EB\uFF1AMAC\u30A2\u30C9\u30EC\u30B9\u3068\u30DD\u30FC\u30C8\u306E\u5BFE\u5FDC\u8868"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B7\u30B9\u30B3\u306E\u5834\u5408\uFF1ACAM\u30C6\u30FC\u30D6\u30EB\uFF08Content-Addressable Memory Table\uFF09\u3068\u3044\u3046"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u52D5\u7684\uFF1A\u30B9\u30A4\u30C3\u30C1\u81EA\u52D5MAC\u30A2\u30C9\u30EC\u30B9\u5B66\u7FD2",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u30B9\u30A4\u30C3\u30C1\u8D77\u52D5\u76F4\u5F8C\uFF08MAC\u30A2\u30C9\u30EC\u30B9\u30C6\u30FC\u30D6\u30EB\u306F\u672A\u5B66\u7FD2\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"MAC\u30A2\u30C9\u30EC\u30B9\u5B66\u7FD2\uFF1A\u30D5\u30EC\u30FC\u30E0\u3092\u53D7\u4FE1\u3059\u308B\u3068\u3001\u305D\u306ENIC\u306EMAC\u30A2\u30C9\u30EC\u30B9\u3092\u767B\u9332\u3059\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A8\u30FC\u30B8\u30F3\u30B0\u30BF\u30A4\u30E0\uFF08Aging time, \u8001\u5316\u65F6\u95F4\uFF09\uFF1A\u52D5\u7684\u5B66\u7FD2\u3057\u305FMAC\u30A2\u30C9\u30EC\u30B9\u306F\u30A8\u30FC\u30B8\u30F3\u30B0\u30BF\u30A4\u30E0\u3060\u3051\u4FDD\u6301\u3059\u308B\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9759\u7684\uFF1A\u7BA1\u7406\u8005\u624B\u52D5\u3067MAC\u30A2\u30C9\u30EC\u30B9\u3092\u767B\u9332")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"フィルタリング"},"\u30D5\u30A3\u30EB\u30BF\u30EA\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u5B9B\u5148MAC\u30A2\u30C9\u30EC\u30B9\u304C\u3042\u3063\u305F\u5834\u5408\u3001\u305D\u306E\u30DD\u30FC\u30C8\u3060\u3051\u8EE2\u9001\u3059\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"フラッディングflooding"},"\u30D5\u30E9\u30C3\u30C7\u30A3\u30F3\u30B0\uFF08Flooding\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u5B9B\u5148MAC\u30A2\u30C9\u30EC\u30B9\u304C\u306A\u3044\u5834\u5408\u3001\u3059\u3079\u3066\u306E\u30DD\u30FC\u30C8\u3060\u3051\u8EE2\u9001\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5834\u5408\uFF1A\u5B9B\u5148MAC\u30A2\u30C9\u30EC\u30B9\u304C\u672A\u5B66\u7FD2\u3001\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u3001\u672A\u5B66\u7FD2\u306E\u30DE\u30EB\u30C1\u30AD\u30E3\u30B9\u30C8\u30D5\u30EC\u30FC\u30E0")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"全二重通信full-duplex"},"\u5168\u4E8C\u91CD\u901A\u4FE1(Full duplex)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u3068\u53D7\u4FE1\u3092\u53CC\u65B9\u304B\u3089\u540C\u6642\u306B\u884C\u3048\u308B\u901A\u4FE1\u65B9\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5FC5\u8981\u6761\u4EF6\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53CC\u65B9\u306E\u6A5F\u5668\u304C\u5168\u4E8C\u91CD\u901A\u4FE1\u30B5\u30DD\u30FC\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30A4\u30C3\u30C1\u30DD\u30FC\u30C8\u3067\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"P2P\u63A5\u7D9A"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DE\u30A4\u30AF\u30ED\u30BB\u30B0\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\uFF1A\uFF11\u3064\u306E\u30B9\u30A4\u30C3\u30C1\u30DD\u30FC\u30C8\u306B\u30DB\u30B9\u30C8\u3092\u63A5\u7D9A\u3057\u3066\u30B3\u30EA\u30B8\u30E7\u30F3\u30C9\u30E1\u30A4\u30F3\u3092\u6700\u5C0F\u5206\u5272\u3059\u308B\u3053\u3068"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AA\u30FC\u30C8\u30CD\u30B4\u30B7\u30A8\u30FC\u30B7\u30E7\u30F3\uFF08auto-negotiation\uFF0C\u81EA\u52A8\u4EA4\u6D89\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1A\u63A5\u7D9A\u3055\u308C\u305F\u6A5F\u5668\u306E\u53CC\u65B9\u3067\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u308B\u901A\u4FE1\u6A5F\u80FD\u3068\u901A\u4FE1\u30E2\u30FC\u30C9\u3092\u81EA\u52D5\u7684\u306B\u9078\u629E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u65B9\u6CD5\uFF1AFLP(Fast Link Pulse\uFF0C\u5FEB\u901F\u8FDE\u63A5\u8109\u51B2)\u30D0\u30FC\u30B9\u30C8\u3092\u9001\u51FA\u3001\u901A\u4FE1\u901F\u5EA6\u3068\u901A\u4FE1\u30E2\u30FC\u30C9\u3092\u542B\u3093\u3067\u4EA4\u63DB\u3059\u308B")))));};MDXContent.isMDXComponent=true;

/***/ })

}]);