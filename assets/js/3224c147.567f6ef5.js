"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[6252],{

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

/***/ 98447:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 05 Cisco IOSの接続診断ツール',date:new Date('2019-07-14T22:31:00.000Z'),lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 05 Cisco IOSの接続診断ツール","description":"Ciscoデバイスへの接続、Cisco　IOSのモード、IOS操作とヘルプ機能、コンフィギュレーションの保存、Cisco　IOSの接続診断ツール","source":"@site/docs/archieved/2019/07/14-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/14-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":14,"frontMatter":{"title":"CCNA試験のまとめノート 05 Cisco IOSの接続診断ツール","date":"2019-07-14T22:31:00.000Z","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'管理アクセスとターミナルソフト',id:'管理アクセスとターミナルソフト',level:2},{value:'コンソールポートによる接続',id:'コンソールポートによる接続',level:2},{value:'イーサーネット管理ポート',id:'イーサーネット管理ポート',level:2},{value:'AUXポートによる接続（試験範囲を超える）',id:'auxポートによる接続試験範囲を超える',level:2},{value:'仮想端末（VTY）による接続',id:'仮想端末vtyによる接続',level:2},{value:'Cisco　WebブラウザUIの使用',id:'ciscowebブラウザuiの使用',level:2},{value:'ターミナルソフトのシリアルポート設定',id:'ターミナルソフトのシリアルポート設定',level:2},{value:'Cisco IOS',id:'cisco-ios',level:2},{value:'IOSのEXECモード',id:'iosのexecモード',level:2},{value:'IOSのコンフィギュレーションモード',id:'iosのコンフィギュレーションモード',level:2},{value:'設定の確認（showコマンド）',id:'設定の確認showコマンド',level:2},{value:'設定の消去',id:'設定の消去',level:2},{value:'出力結果の検索（フィルタ）',id:'出力結果の検索フィルタ',level:2},{value:'ヘルプ機能',id:'ヘルプ機能',level:2},{value:'キーによるコマンドの補完',id:'キーによるコマンドの補完',level:2},{value:'show history',id:'show-history',level:2},{value:'エラーメッセージが',id:'エラーメッセージが',level:2},{value:'コンフィギュレーションの保存',id:'コンフィギュレーションの保存-1',level:2},{value:'コンフィギュレーションの表示',id:'コンフィギュレーションの表示',level:2},{value:'ルータおよびスイッチの初期化',id:'ルータおよびスイッチの初期化',level:2},{value:'Cisco IOSの接続診断ツール',id:'cisco-iosの接続診断ツール',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cisco\u30C7\u30D0\u30A4\u30B9\u3078\u306E\u63A5\u7D9A\u3001Cisco\u3000IOS\u306E\u30E2\u30FC\u30C9\u3001IOS\u64CD\u4F5C\u3068\u30D8\u30EB\u30D7\u6A5F\u80FD\u3001\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u4FDD\u5B58\u3001Cisco\u3000IOS\u306E\u63A5\u7D9A\u8A3A\u65AD\u30C4\u30FC\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ciscoデバイスへの接続"},"Cisco\u30C7\u30D0\u30A4\u30B9\u3078\u306E\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"管理アクセスとターミナルソフト"},"\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u3068\u30BF\u30FC\u30DF\u30CA\u30EB\u30BD\u30D5\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B3\u30F3\u30BD\u30FC\u30EB\u30DD\u30FC\u30C8\u306B\u3088\u308B\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u7BA1\u7406\u30DD\u30FC\u30C8\u306B\u3088\u308B\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"AUX\u30DD\u30FC\u30C8\u306B\u3088\u308B\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4EEE\u60F3\u7AEF\u672B\uFF08VTY\uFF09\u306B\u3088\u308B\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Cisco\u3000Web\u30D6\u30E9\u30A6\u30B6UI\u306E\u4F7F\u7528")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"コンソールポートによる接続"},"\u30B3\u30F3\u30BD\u30FC\u30EB\u30DD\u30FC\u30C8\u306B\u3088\u308B\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30B3\u30F3\u30BD\u30FC\u30EB\u30DD\u30FC\u30C8\u3092\u4F7F\u3063\u3066\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u65B9\u6CD5\uFF1B\u5C02\u7528\u30B1\u30FC\u30D6\u30EB\uFF1B\u51FA\u8377\u72B6\u614B\u3067\u3082\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B1\u30FC\u30D6\u30EB\uFF1A\u30ED\u30FC\u30EB\u30AA\u30FC\u30D0\u30FC\u30B1\u30FC\u30D6\u30EB")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"イーサーネット管理ポート"},"\u30A4\u30FC\u30B5\u30FC\u30CD\u30C3\u30C8\u7BA1\u7406\u30DD\u30FC\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u7269\u7406\u7684\u306B\u88C5\u5099\u3055\u308C\u3066\u3044\u308B\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u30DD\u30FC\u30C8\u3067\u3042\u308A\u3001\u30B3\u30F3\u30BD\u30FC\u30EB\u30DD\u30FC\u30C8\u306E\u4EE3\u308F\u308A\u3068\u3057\u3066\u4F7F\u7528\u3067\u304D\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30A4\u30FC\u30B5\u30CD\u30C3\u30C8\u7BA1\u7406\u30DD\u30FC\u30C8\u306FIP\u30A2\u30C9\u30EC\u30B9\u3092\u5272\u308A\u5F53\u3066\u308B\u53EF\u80FD\u3002\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306B\u5B8C\u5168\u306B\u9694\u96E2\u3055\u308C\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"auxポートによる接続試験範囲を超える"},"AUX\u30DD\u30FC\u30C8\u306B\u3088\u308B\u63A5\u7D9A\uFF08\u8A66\u9A13\u7BC4\u56F2\u3092\u8D85\u3048\u308B\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1AAUX\uFF08Auxiliary: \u88DC\u52A9\uFF09\u306F\u30E2\u30C7\u30E0\u7D4C\u7531\u3067\u30EB\u30FC\u30BF\u306B\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u6642\u306B\u4F7F\u3046\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"仮想端末vtyによる接続"},"\u4EEE\u60F3\u7AEF\u672B\uFF08VTY\uFF09\u306B\u3088\u308B\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"VTY\uFF1AVirtual Teletype"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Telnet\u307E\u305F\u306FSSH\u306B\u3088\u3063\u3066\u7BA1\u7406\u30A2\u30AF\u30BB\u30B9\u3092\u884C\u3046")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ciscowebブラウザuiの使用"},"Cisco\u3000Web\u30D6\u30E9\u30A6\u30B6UI\u306E\u4F7F\u7528"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1ACiscoIOS\u30B3\u30DE\u30F3\u30C9\u3092\u767A\u884C\u3067\u304D\u308BWeb\u30D6\u30E9\u30A6\u30B6\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30ED\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ターミナルソフトのシリアルポート設定"},"\u30BF\u30FC\u30DF\u30CA\u30EB\u30BD\u30D5\u30C8\u306E\u30B7\u30EA\u30A2\u30EB\u30DD\u30FC\u30C8\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(17579)/* ["default"] */ .Z),width:"555",height:"327"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Parity(n. \u5E73\u4EF7\uFF1B\u540C\u7B49\uFF1B\u76F8\u7B49):\u9001\u4FE1\u3055\u308C\u305F\u30C7\u30FC\u30BF\u30D3\u30C3\u30C8\u306B\u30D1\u30EA\u30C6\u30A3\u30D3\u30C3\u30C8\u304C\u8FFD\u52A0\u3055\u308C\u306A\u3044\u3053\u3068\u3092\u793A\u3059\u3002\u306A\u3057\u306E\u5834\u5408\u3001\u30A8\u30E9\u30FC\u30C1\u30A7\u30C3\u30AF\u306F\u7121\u52B9")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ciscoiosのモード"},"Cisco\u3000IOS\u306E\u30E2\u30FC\u30C9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cisco-ios"},"Cisco IOS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IOS\uFF08Internetwork Operating System\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"CLI\uFF08Command Line Interface\uFF09: IOS\u64CD\u4F5C\u306E\u57FA\u672C")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"iosのexecモード"},"IOS\u306EEXEC\u30E2\u30FC\u30C9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EXEC\u30E2\u30FC\u30C9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6700\u521D\u306B\u5165\u308B\u3068\u304D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E2\u30CB\u30BF\u30EA\u30F3\u30B0\u7528\u3001ping\u3084telnet"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"prompt\uFF1ARouter>"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u6A29EXEC\u30E2\u30FC\u30C9\uFF08\u30A4\u30CD\u30FC\u30D6\u30EB\u30E2\u30FC\u30C9\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A2D\u5B9A\u60C5\u5831\u306E\u6D88\u53BB\u3084\u30B3\u30D4\u30FC\u3001\u30C7\u30D0\u30C3\u30B0\u6A5F\u80FD")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-cli"},"Router>enable\nRouter#disable\nRouter>exit\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"iosのコンフィギュレーションモード"},"IOS\u306E\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5834\u5408\uFF1A\u8A2D\u5B9A\u3092\u884C\u3046\u6642"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u6A29EXEC\u30E2\u30FC\u30C9\u304B\u3089configure terminal"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7A2E\u985E",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B0\u30ED\u30FC\u30D0\u30EB\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\uFF1A\u5168\u4F53\u306B\u304B\u304B\u308F\u308B\u30B0\u30ED\u30FC\u30D0\u30EB\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E9\u30A4\u30F3\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\uFF1A\u30B3\u30F3\u30BD\u30FC\u30EB\u3001AUX\u3001VTY\u30DD\u30FC\u30C8\u306B\u5BFE\u3059\u308B\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30BF\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\uFF1ARIP\u3084OSPF\u306A\u3069\u306E\u30EB\u30FC\u30C6\u30A3\u30FC\u30F3\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u5BFE\u3059\u308B\u8A2D\u5B9A")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router>enable\nRouter#configure terminal #\u30B0\u30ED\u30FC\u30D0\u30EB\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\nEnter configuration commands, one per line.  End with CNTL/Z.\nRouter(config)#line console 0 #\u30E9\u30A4\u30F3\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u30E2\u30FC\u30C9\nRouter(config-line)#exit\nRouter(config)#router rip #\u30EB\u30FC\u30BF\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\nRouter(config-router)#exit\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ios操作とヘルプ機能"},"IOS\u64CD\u4F5C\u3068\u30D8\u30EB\u30D7\u6A5F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"設定の確認showコマンド"},"\u8A2D\u5B9A\u306E\u78BA\u8A8D\uFF08show\u30B3\u30DE\u30F3\u30C9\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F79\u5272\uFF1A\u60C5\u5831\u306E\u8868\u793A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router>show clock\n*0:36:49.646 UTC Mon Mar 1 1993\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"設定の消去"},"\u8A2D\u5B9A\u306E\u6D88\u53BB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#hostname RT1 #\u30DB\u30B9\u30C8\u540D\u3092\u8A2D\u5B9A\nRT1(config)#no hostname #\u8A2D\u5B9A\u3057\u305F\u30DB\u30B9\u30C8\u540D\u3092\u6D88\u53BB\nRouter(config)#\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"出力結果の検索フィルタ"},"\u51FA\u529B\u7D50\u679C\u306E\u691C\u7D22\uFF08\u30D5\u30A3\u30EB\u30BF\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"begin: \u691C\u7D22\u5185\u5BB9\u306B\u4E00\u81F4\u3057\u305F\u884C\u304B\u3089\u8868\u793A\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"include: \u691C\u7D22\u5185\u5BB9\u306B\u4E00\u81F4\u3057\u305F\u884C\u306E\u307F\u8868\u793A\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"section: \u691C\u7D22\u5185\u5BB9\u306B\u4E00\u81F4\u3057\u305F\u30BB\u30AF\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3059\u308B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#  show running-config | begin line vty\nline vty 0 4\n login\n!\n!\n!\nend\n\nRouter#show running-config | include vty\nline vty 0 4\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ヘルプ機能"},"\u30D8\u30EB\u30D7\u6A5F\u80FD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#show ?\n  aaa                Show AAA values\n  access-lists       List access lists\n  arp                Arp table\n  cdp                CDP information\n  class-map          Show QoS Class Map\n  clock              Display the system clock\n  controllers        Interface controllers status\n  crypto             Encryption module\n  debugging          State of each debugging option\n  dhcp               Dynamic Host Configuration Protocol status\n  dot11              IEEE 802.11 show information\n  file               Show filesystem information\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"キーによるコマンドの補完"},"\u30AD\u30FC\u306B\u3088\u308B\u30B3\u30DE\u30F3\u30C9\u306E\u88DC\u5B8C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#show runn\nRouter#show running-config\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"show-history"},"show history"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#show history\n  configure terminal \n  show running-config | begin line vty\n  configure terminal \n  show running-config \n    show running-config | begin line vty\n  show running-config | include ip route\n  show running-config | include vty\n  show running-config | section vty\n  configure terminal \n  show history\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"エラーメッセージが"},"\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u304C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#e\n% Ambiguous command: \"e\" #e\u3060\u3051\u3067\u306F\u30B3\u30DE\u30F3\u30C9\u304C\u7279\u5B9A\u3067\u304D\u306A\u304B\u3063\u305F\n\nRouter#show\n% Incomplete command. #hostname\u30B3\u30DE\u30F3\u30C9\u306E\u5F8C\u308D\u306B\u30DB\u30B9\u30C8\u540D\u306E\u6307\u5B9A\u304C\u4E0D\u8DB3\n\nRouter#ipaddress 172.16.1.1 255.255.255.0\n                 ^\n% Invalid input detected at '^' marker.\u3000#\u69CB\u6587\u30DF\u30B9\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"コンフィギュレーションの保存"},"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u4FDD\u5B58"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"コンフィギュレーションの保存-1"},"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u4FDD\u5B58"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"running-config: \u30B7\u30B9\u30C6\u30E0\u304C\u52D5\u4F5C\u4E2D\u306B\u4F7F\u7528\u3059\u308B\u8A2D\u5B9A\u60C5\u5831"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"startup-config\uFF1ANVRAM\u306B\u4FDD\u6301\u3055\u308C\u3001\u30B7\u30B9\u30C6\u30E0\u8D77\u52D5\u6642\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u308B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"NVRAM\uFF1A(Non-Volatile Random-Access Memory)\u8D77\u52D5\u6642\u8A2D\u5B9A\u306E\u4FDD\u7BA1\u7528\u306B\u4F7F\u308F\u308C\u308B\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F7F\u3044\u65B9\uFF1A\u7BA1\u7406\u8005\u306F\u5165\u529B\u3057\u305F\u8A2D\u5B9A\u5024\u304C\u6B63\u3057\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3057\u305F\u3042\u3068\u306B\u306F\u3001copy\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066RAM\u4E0A\u306Erunning-config\u306E\u5185\u5BB9\u3092NVRAM\u306B\u4FDD\u5B58\u3059\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#copy running-config startup-config \nDestination filename [startup-config]? \nBuilding configuration...\n[OK]\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"コンフィギュレーションの表示"},"\u30B3\u30F3\u30D5\u30A3\u30AE\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u8868\u793A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#show running-config\nRouter#show startup-config\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ルータおよびスイッチの初期化"},"\u30EB\u30FC\u30BF\u304A\u3088\u3073\u30B9\u30A4\u30C3\u30C1\u306E\u521D\u671F\u5316"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#erase startup-config #startup-config\u306E\u524A\u9664\nErasing the nvram filesystem will remove all configuration files! Continue? [confirm]\n[OK]\nErase of nvram: complete\n%SYS-7-NV_BLOCK_INIT: Initialized the geometry of nvram\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#reload #\u30B7\u30B9\u30C6\u30E0\u306E\u518D\u8D77\u52D5\nProceed with reload? [confirm]\nSystem Bootstrap, Version 15.1(4)M4, RELEASE SOFTWARE (fc1)\nTechnical Support: http://www.cisco.com/techsupport\nCopyright (c) 2010 by cisco Systems, Inc.\n.....\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30A4\u30C3\u30C1\u306E\u521D\u671F\u5316",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"startup-config\u3092\u524A\u9664"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"vlan.data\u3092\u524A\u9664"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30A4\u30C3\u30C1\u306E\u518D\u8D77\u52D5")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#delete vlan.dat\nDelete filename [vlan.dat]?\nDelete flash:/vlan.dat? [confirm]\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cisco-iosの接続診断ツール"},"Cisco IOS\u306E\u63A5\u7D9A\u8A3A\u65AD\u30C4\u30FC\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ping\u30B3\u30DE\u30F3\u30C9",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u51FA\u529B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"!: ICMP\u30A8\u30B3\u30FC\u5FDC\u7B54\u3092\u53D7\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},".: \u5FDC\u7B54\u304C\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u3057\u305F\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F2\u79D2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"U\uFF1ADestination Unreachable\uFF1B\u5B9B\u5148\u5230\u9054\u4E0D\u80FD\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Q\uFF1ASource Quench(","[kw\u025Bnt\u0283]"," vt. \u7184\u706D\uFF0C","[\u673A]"," \u6DEC\u706B\uFF1B\u89E3\u6E34\uFF1B\u7ED3\u675F\uFF1B\u51B7\u6D78)\uFF1B\u901A\u4FE1\u5143\u6291\u5236\uFF08\u3088\u304F\u305B\u3044\uFF09\u3002\u5B9B\u5148\u304C\u30D3\u30B8\u30FC\u72B6\u614B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"M\uFF1A\u30D5\u30E9\u30B0\u30E1\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3(fragmentation,\u65AD\u7247\u5316)\u306B\u5931\u6557"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"?\uFF1A\u30D1\u30B1\u30C3\u30C8\u30BF\u30A4\u30D7\u304C\u4E0D\u660E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"&\uFF1AICMP\u6642\u9593\u8D85\u904E\uFF1BTTL\u3001Time To Live\u901A\u904E\u6570\u306F\uFF10\u306B\u306A\u3063\u305F\u3002")))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router>ping 192.168.8.1\n\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 192.168.8.1, timeout is 2 seconds:\n.....\nSuccess rate is 0 percent (0/5)\n")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 17579:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ })

}]);