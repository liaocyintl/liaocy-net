"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[9693],{

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

/***/ 67773:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 01 ネットワーク基礎',date:new Date('2019-07-10T09:22:00.000Z'),lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 01 ネットワーク基礎","description":"ネットワーク概要、ネットワークポロジ、ケーブルの種類、OSI参照モデル、2進数","source":"@site/docs/archieved/2019/07/10-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/10-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":10,"frontMatter":{"title":"CCNA試験のまとめノート 01 ネットワーク基礎","date":"2019-07-10T09:22:00.000Z","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'ネットワークの構成要素',id:'ネットワークの構成要素',level:2},{value:'LANとWAN',id:'lanとwan',level:2},{value:'インターネット',id:'インターネット',level:2},{value:'ネットワークユーザアプリケーション',id:'ネットワークユーザアプリケーション',level:2},{value:'ユーザアプリケーションが及ぼすネットワークへの影響',id:'ユーザアプリケーションが及ぼすネットワークへの影響',level:2},{value:'通信の種類',id:'通信の種類',level:2},{value:'バス型',id:'バス型',level:2},{value:'スター型',id:'スター型',level:2},{value:'リンク型（环形）',id:'リンク型环形',level:2},{value:'メッシュ型',id:'メッシュ型',level:2},{value:'ツイストペアケーブル（Twisted pair cable、双绞线）',id:'ツイストペアケーブルtwisted-pair-cable双绞线',level:2},{value:'光ファイバケーブル',id:'光ファイバケーブル',level:2},{value:'同軸ケーブル',id:'同軸ケーブル',level:2},{value:'シリアルケーブル',id:'シリアルケーブル',level:2},{value:'プロトコル',id:'プロトコル',level:2},{value:'OSI参考モデル',id:'osi参考モデル',level:2},{value:'カプセルかと非カプセルか（加包和解包）',id:'カプセルかと非カプセルか加包和解包',level:2},{value:'PDU',id:'pdu',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u6982\u8981\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30DD\u30ED\u30B8\u3001\u30B1\u30FC\u30D6\u30EB\u306E\u7A2E\u985E\u3001OSI\u53C2\u7167\u30E2\u30C7\u30EB\u30012\u9032\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ネットワークの概要"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u6982\u8981"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ネットワークの構成要素"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u69CB\u6210\u8981\u7D20"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8981\u7D20\uFF1A\u30CE\u30FC\u30C9\u3068\u30EA\u30F3\u30AF\n\u30CE\u30FC\u30C9\uFF1A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u6A5F\u5668\u3002\n\u30EA\u30F3\u30AF\uFF1A\u30CE\u30FC\u30C9\u9593\u3092\u63A5\u7D9A\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"lanとwan"},"LAN\u3068WAN"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LAN: \u9650\u5B9A\u3055\u308C\u305F\u30A8\u30EA\u30A2\u3001\u4F01\u696D\u7D44\u7E54\u3001\u30B3\u30B9\u30C8\u56FA\u5B9A\nWAN: \u5730\u7406\u7684\u306B\u96E2\u308C\u305FLAN\u3068LAN\u3092\u76F8\u4E92\u306B\u63A5\u7D9A\u3057\u305F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\uFF1B\u901A\u4FE1\u4E8B\u696D\u8005\u6240\u6709\uFF1B\u30B3\u30B9\u30C8\u7D99\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"インターネット"},"\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5B9A\u7FA9\uFF1ATCP/IP\u306B\u3088\u3063\u3066\u63A5\u7D9A\u3057\u305F\u4E16\u754C\u5E0C\u671B\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\n\u30A4\u30F3\u30C8\u30E9\u30CD\u30C3\u30C8(intranet, \u5185\u8054\u7F51)\uFF1A\u30A4\u30F3\u30BF\u30CD\u30C3\u30C8\u6280\u8853\u3092\u4F7F\u3063\u3066\u69CB\u7BC9\u3057\u305F\u4F01\u696D\u5185\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\n\u30A8\u30AF\u30B9\u30C8\u30E9\u30CD\u30C3\u30C8(extranet, \u5916\u8054\u7F51)\uFF1A\u95A2\u9023\u4F1A\u793E\u306A\u3069\u3082\u542B\u3081\u3066\u69CB\u6210\u3055\u308C\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ネットワークユーザアプリケーション"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30E6\u30FC\u30B6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u96FB\u5B50\u30E1\u30FC\u30EB\u3001Web\u30D6\u30E9\u30A6\u30B6\u3001\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u30F3\u30B0\uFF08IM, Instant Messaging\uFF09\u3001\u30B3\u30E9\u30DC\u30EC\u30FC\u30B7\u30E7\u30F3\uFF08collaboration, \u534F\u540C\u5DE5\u4F5C\uFF09\uFF0C\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ユーザアプリケーションが及ぼすネットワークへの影響"},"\u30E6\u30FC\u30B6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u53CA\u307C\u3059\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3078\u306E\u5F71\u97FF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30D1\u30C3\u30C1\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3(interactive application)\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"通信の種類"},"\u901A\u4FE1\u306E\u7A2E\u985E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E6\u30CB\u30AD\u30E3\u30B9\u30C8(unicast)\uFF1A1\u5BFE1\u901A\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\uFF1A\uFF11\u5BFE\u5168\u54E1\u901A\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DE\u30EB\u30C1\u30AD\u30E3\u30B9\u30C8\uFF1A1\u5BFE\u30B0\u30EB\u30FC\u30D7\u901A\u4FE1")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ネットワークトポロジnetwork-topology"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30C8\u30DD\u30ED\u30B8\uFF08network topology\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"バス型"},"\u30D0\u30B9\u578B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u4E00\u672C\u306E\u30D0\u30B9\u306B\u5404\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u3092\u63A5\u7D9A\u3002\u7D42\u7AEF\u62B5\u6297\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u4E00\u304B\u6240\u3067\u3082\u65AD\u7DDA\u3059\u308B\u3068\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u5168\u4F53\u304C\u6A5F\u80FD\u3057\u306A\u304F\u306A\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"スター型"},"\u30B9\u30BF\u30FC\u578B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30CF\u30D6\u30A2\u30F3\u30C9\u30B9\u30DD\u30FC\u30AF\u3000Hub and spoke\u3000\u62E1\u5F35\u30B9\u30BF\u30FC\u578B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"リンク型环形"},"\u30EA\u30F3\u30AF\u578B\uFF08\u73AF\u5F62\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30C8\u30FC\u30AF\u30F3\u30EA\u30F3\u30AF\u3084FDDI\uFF08Fiber Distributed Data Interface\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"メッシュ型"},"\u30E1\u30C3\u30B7\u30E5\u578B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"WAN\u3067\u4F7F\u3046\u63A5\u7D9A\u5F62\u614B\u3002\u30D5\u30EB\u30E1\u30C3\u30B7\u30E5\u578B\uFF1A\u3059\u3079\u3066\u306E\u30CE\u30C3\u30C8\u304C1\u5BFE1\u7E4B\u304C\u3063\u3066\u3044\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ケーブルの種類"},"\u30B1\u30FC\u30D6\u30EB\u306E\u7A2E\u985E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ツイストペアケーブルtwisted-pair-cable双绞线"},"\u30C4\u30A4\u30B9\u30C8\u30DA\u30A2\u30B1\u30FC\u30D6\u30EB\uFF08Twisted pair cable\u3001\u53CC\u7EDE\u7EBF\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"UTP(Unshielded Twisted-Pair):\u30B7\u30FC\u30EB\u30C9\u4FDD\u8B77\u306A\u3057"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"STP\uFF1A\u30B7\u30FC\u30EB\u30C9\u4FDD\u8B77\u3042\u308A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AB\u30C6\u30B4\u30EA: LAN\u3067\u306FCat3\u4EE5\u4E0A\u3092\u4F7F\u3046",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"1, 20k, RJ11"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"2, 4Mb, 1MHz,ISDN"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"3, 16Mb, 16MHz,10BASE-T,\u30C8\u30FC\u30AF\u30F3\u30EA\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"4, 20Mb, 20MHz,\u30C8\u30FC\u30AF\u30F3\u30EA\u30F3\u30B0\uFF0816Mbps\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"5, 100Mb, 100MHz,100BASE-TX"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"5e, 1Gb, 100MHz,1000BASE-T"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"6, 1.2Gb, 250MHz, 1000BASE-T, 10GBASE-T"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"6a, 10Gb, 500MHz, 10GBASE-T"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"7, 10Gb, 600MHz, 10GBASE-T"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"RJ-45:",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7D50\u7DDA\u65B9\u6CD5\uFF1AEIA/TIA-568\u306B\u306F\u3001568-A\u3068568-B\u306E\u4E8C\u3064\u306E\u898F\u683C"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30C8\u30EC\u30FC\u30C8\u30B1\u30FC\u30D6\u30EB\uFF1AStraight Cable"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30ED\u30B9\u30B1\u30FC\u30D6\u30EB\uFF1ACross Cable")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"光ファイバケーブル"},"\u5149\u30D5\u30A1\u30A4\u30D0\u30B1\u30FC\u30D6\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B7\u30F3\u30B0\u30EB\u30E2\u30FC\u30C9\u30D5\u30A1\u30A4\u30D0\uFF08SMF\uFF09\uFF1A<9um\uFF1B\uFF11\u3064\u306E\u5149\u4FE1\u53F7\u3060\u3051\u4F1D\u9001"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DE\u30EB\u30C1\u30E2\u30FC\u30C9\u30D5\u30A1\u30A4\u30D0\uFF08MMF\uFF09\uFF1A50um-62.5um\uFF1B\u8907\u6570\u306E\u5149\u4FE1\u53F7\u3092\u4F7F\u3063\u3066\u4F1D\u9001"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5149\u30D5\u30A1\u30A4\u30D0\u30B3\u30CD\u30AF\u30BF\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30C3\u30B7\u30E5\u30D7\u30EB\u578B\uFF1ACS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D0\u30E8\u30CD\u30C3\u30C8\u7DE0\u7D50\u578B\uFF1AST"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u306D\u3058\u7DE0\u7D50\u578B\uFF1AFC"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30C3\u30B7\u30E5\u30D7\u30EB\u578B\uFF1ALC")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"同軸ケーブル"},"\u540C\u8EF8\u30B1\u30FC\u30D6\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"10BASE5\u300110BASE2\u3001CATV"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"シリアルケーブル"},"\u30B7\u30EA\u30A2\u30EB\u30B1\u30FC\u30D6\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A1\u672C\u306E\u65B0\u5408\u7E4A\u3092\u4F7F\u3063\u30661\u30D3\u30C3\u30C8\u305A\u3064\u30C7\u30FC\u30BF\u3092\u4F1D\u9001"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EIA/TIA-232 EIA/TIA-449 V.35 X.21 EIA-530")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"osi参照モデル"},"OSI\u53C2\u7167\u30E2\u30C7\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"プロトコル"},"\u30D7\u30ED\u30C8\u30B3\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u901A\u4FE1\u3092\u884C\u3046\u4E0A\u3067\u306E\u7D04\u675F\u4E8B\u306E\u3053\u3068\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\uFF1A\u307E\u305F\u306F\u30D7\u30ED\u30C8\u30B3\u30EB\u30B9\u30BF\u30C3\u30AF\u3001\u30D7\u30ED\u30C8\u30B3\u30EB\u30B9\u30A4\u30FC\u30C8\u306F\u3001\u9023\u7D50\u3059\u308B\u3044\u304F\u3064\u304B\u306E\u30D7\u30ED\u30C8\u30B3\u30EB\u3092\u4F53\u7CFB\u7684\u306B\u7D44\u307F\u5408\u308F\u305B\u305F\u3082\u306E")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"osi参考モデル"},"OSI\u53C2\u8003\u30E2\u30C7\u30EB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u958B\u653E\u578B\u30B7\u30B9\u30C6\u30E0\u9593\u76F8\u4E92\u63A5\u7D9A\uFF08Open Systems Interconnection\uFF09:\u7570\u306A\u308B\u6A5F\u7A2E\u9593\u306E\u30C7\u30FC\u30BF\u901A\u4FE1\u3092\u5B9F\u73FE")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"No"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u540D\u524D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u5F79\u5272"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u4E2D\u8EAB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u305D\u306E\u4ED6"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u7269\u7406\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30B1\u30FC\u30D6\u30EB\u3001\u4F1D\u9001\u30DF\u30C7\u30A3\u30A2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30FB\u30B3\u30CD\u30AF\u30BF\u306E\u5F62\u72B6\u3001\u30D4\u30F3\u306E\u6570\u3084\u914D\u7F6E \u30FB\u30B1\u30FC\u30D6\u30EB\u306E\u7A2E\u985E\u3084\u9577\u3055 \u30FB\u96FB\u5727\u30EC\u30D9\u30EB\u30FB\u96FB\u5727\u5909\u5316\u306E\u30BF\u30A4\u30DF\u30F3\u30B0 \u30FB\u901A\u4FE1\u901F\u5EA6\u3001\u7B26\u53F7\u5316\u306E\u65B9\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30C7\u30FC\u30BF\u30EA\u30F3\u30AF\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u540C\u4E00\u30EA\u30F3\u30AF\u4E0A\u306B\u63A5\u7D9A\u3055\u308C\u305F\u96A3\u63A5\u30CE\u30FC\u30C9\u3068\u6B63\u3057\u304F\u901A\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30FB\u901A\u4FE1\u5A92\u4F53\u306B\u30C7\u30FC\u30BF\u3092\u9001\u308A\u51FA\u3059\u3068\u304D\u306E\u30BF\u30A4\u30DF\u30F3\u30B0 \u30FB\u4F1D\u9001\u4E2D\u306B\u767A\u751F\u3057\u305F\u30A8\u30E9\u30FC\u306E\u691C\u51FA\u3068\u5BFE\u51E6\u65B9\u6CD5 \u30FB\u30C7\u30FC\u30BF\u30D5\u30EC\u30FC\u30E0\uFF08Frame\uFF09\u306E\u69CB\u9020 \u30FB\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u5143\u53CA\u3073\u5B9B\u5148\u306E\u8B58\u5225\u65B9\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"MAC\u30A2\u30C9\u30EC\u30B9 HUB L2Switch Frame Relay\uFF0C HDLC PPP IEEE 802.3/802.2")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u7570\u306A\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u76F8\u4E92\u306B\u63A5\u7D9A\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30FB\u30C7\u30FC\u30BF\u306E\u9001\u4FE1\u5143\u304A\u3088\u3073\u5B9B\u5148\u3092\u8B58\u5225\u3059\u308B\u30A2\u30C9\u30EC\u30B9\u306E\u5272\u308A\u5F53\u3066\u65B9\u6CD5 \u30FB\u30C7\u30FC\u30BF\u30D1\u30B1\u30C3\u30C8\u306E\u69CB\u9020 \u30FB\u7D4C\u8DEF\u9078\u629E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u65B9\u6CD5 \u30FB\u9078\u629E\u3057\u305F\u7D4C\u8DEF\u4E0A\u306B\u30C7\u30FC\u30BF\u3092\u9001\u51FA\u3059\u308B\u65B9\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"IP\uFF0C IPX\uFF0C AppleTalk DDP \u30EB\u30FC\u30C8 L3Switch")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30C8\u30E9\u30F3\u30B9\u30DD\u30FC\u30C8\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30C7\u30FC\u30BF\u3092\u78BA\u5B9F\u306B\u5C4A\u3051\u308B\u4FE1\u983C\u6027\u3092\u63D0\u4F9B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30FB\u4EEE\u60F3\u56DE\u7DDA\uFF08\u30B3\u30CD\u30AF\u30B7\u30E7\u30F3\uFF09\u306E\u78BA\u7ACB\u30FB\u7DAD\u6301\u30FB\u7D42\u4E86 \u30FB\u30D5\u30ED\u30FC\u5236\u5FA1\u3001\u53D7\u4FE1\u5074\u306E\u72B6\u614B\u306B\u5408\u308F\u305B\u3066\u901A\u4FE1\u91CF\u306E\u8ABF\u6574 \u30FB\u9806\u5E8F\uFF08\u3058\u3085\u3093\u3058\u3087\uFF09\u5236\u5FA1\u3001\u5206\u5272\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u53D7\u4FE1\u5074\u3067\u5143\u306E\u9806\u756A\u306B\u518D\u69CB\u6210 \u30FB\u78BA\u8A8D\u5FDC\u7B54\u3001\u30C7\u30FC\u30BF\u304C\u6B63\u3057\u304F\u76F8\u624B\u306B\u5C4A\u3044\u305F\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D \u30FB\u518D\u9001\u5236\u5FA1\u3001\u30C7\u30FC\u30BF\u304C\u5C4A\u304B\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u518D\u9001\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"TCP/UDP,SPX")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30BB\u30C3\u30B7\u30E7\u30F3\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u901A\u4FE1\u8DEF\uFF08\u30BB\u30C3\u30B7\u30E7\u30F3\uFF09\u306E\u78BA\u7ACB\u30FB\u7DAD\u6301\u30FB\u7D42\u4E86\u306A\u3069"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u4F8B\u3048\u3070\uFF1AHTTP Request\u3068Response\u306E\u9593\u306B\u4E00\u9023\u306E\u901A\u4FE1\u304C\u30BB\u30C3\u30B7\u30E7\u30F3\u306B\u76F8\u5F53\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"RPC\uFF0CSQL\uFF0CNFS\uFF0C NetBIOS\uFF0Cnames")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30D7\u30EC\u30BC\u30F3\u30C6\u30FC\u30B7\u30E7\u30F3\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30C7\u30FC\u30BF\u3092\u53D7\u4FE1\u5074\u3067\u3082\u6B63\u3057\u304F\u8AAD\u307F\u53D6\u308C\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u3001\u5171\u901A\u306E\u5F62\u5F0F\u306B\u30C7\u30FC\u30BF\u3092\u5909\u63DB\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6587\u5B57\u30B3\u30FC\u30C9\u5909\u63DB\u306A\u3069"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"TIFF\uFF0CGIF\uFF0CJPEG\uFF0C PICT\uFF0CASCII\uFF0CEBCDIC\uFF0C encryption")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"7"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5C64"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u7565"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u7565"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"FTP\uFF0CWWW\uFF0CTelnet\uFF0C NFS\uFF0CSMTP")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"カプセルかと非カプセルか加包和解包"},"\u30AB\u30D7\u30BB\u30EB\u304B\u3068\u975E\u30AB\u30D7\u30BB\u30EB\u304B\uFF08\u52A0\u5305\u548C\u89E3\u5305\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AB\u30D7\u30BB\u30EB\u5316\uFF1A\u9001\u4FE1\u5074\u3067\u4F5C\u6210\u3055\u308C\u305F\u30C7\u30FC\u30BF\u306F\u3001\u4E0A\u4F4D\u5C64\u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u30C7\u30FC\u30BF\u306E\u5148\u982D\u306B\u30D8\u30C3\u30C0\u3068\u547C\u3070\u308C\u308B\u5236\u5FA1\u60C5\u5831\u3092\u4ED8\u52A0\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u975E\u30AB\u30D7\u30BB\u30EB\u5316\uFF1A\u53D7\u4FE1\u5074\u306E\u5404\u968E\u5C64\u306E\u30D7\u30ED\u30C8\u30B3\u30EB\u306F\u9001\u4FE1\u5074\u3068\u540C\u3058\u5C64\u3067\u4ED8\u52A0\u3055\u308C\u305F\u30D8\u30C3\u30C0\u3092\u53C2\u7167\u3057\u3066\u51E6\u7406\u3092\u884C\u3063\u3066\u3001\u30D8\u30C3\u30C9\u3092\u5916\u3057\u3066\u4E0A\u4F4D\u5C64\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u30C7\u30FC\u30BF\u3092\u6E21\u3059\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"FCS\uFF08Frame Check Sequence, \u5E27\u6821\u9A8C\u5E8F\u5217\uFF09\uFF1A\u30A8\u30E9\u30FC\u30C1\u30A7\u30C3\u30AF")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"pdu"},"PDU"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30C7\u30FC\u30BF\u306B\u30D8\u30C3\u30C0\u304C\u4ED8\u52A0\u3055\u308C\u3066\u6271\u308F\u308C\u308B\u30C7\u30FC\u30BF\u306E\u5358\u4F4D\u3001Protocol Data Unit\u3001\u30C8\u30EC\u30FC\u30E9\uFF08Trailer\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C8\u30E9\u30F3\u30B9\u30DD\u30FC\u30C8\u5C64\uFF1A\u30BB\u30B0\u30E1\u30F3\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u5C64\uFF1A\u30D1\u30B1\u30C3\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30FC\u30BF\u30EA\u30F3\u30AF\u5C64\uFF1A\u30D5\u30EC\u30FC\u30E0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5168\u4F53\uFF1A\u30D1\u30B1\u30C3\u30C8")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"2進数10進数16進数"},"2\u9032\u6570\u30FB10\u9032\u6570\u30FB16\u9032\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7565"));};MDXContent.isMDXComponent=true;

/***/ })

}]);