"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[9572],{

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

/***/ 72226:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 07 Ciscoルータの導入',date:'2019-07-17 11:00',lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 07 Ciscoルータの導入","description":"Ciscoルータの導入","source":"@site/docs/archieved/2019/07/16-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/16-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":16,"frontMatter":{"title":"CCNA試験のまとめノート 07 Ciscoルータの導入","date":"2019-07-17 11:00","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'Cisco　ISR（サービス統合ルータ）',id:'ciscoisrサービス統合ルータ',level:2},{value:'Ciscoルータの初期起動の流れ',id:'ciscoルータの初期起動の流れ',level:2},{value:'ルータのインターフェース番号付けの規則',id:'ルータのインターフェース番号付けの規則',level:2},{value:'ルータの基本設定',id:'ルータの基本設定-1',level:2},{value:'二重モードと速度の設定',id:'二重モードと速度の設定',level:2},{value:'インターフェース説明文を設定',id:'インターフェース説明文を設定',level:2},{value:'本体情報',id:'本体情報',level:2},{value:'インターフェースの要約情報表示',id:'インターフェースの要約情報表示',level:2},{value:'ルーティングテーブルの表示',id:'ルーティングテーブルの表示',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Cisco\u30EB\u30FC\u30BF\u306E\u5C0E\u5165"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ciscoルータの初期起動"},"Cisco\u30EB\u30FC\u30BF\u306E\u521D\u671F\u8D77\u52D5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ciscoisrサービス統合ルータ"},"Cisco\u3000ISR\uFF08\u30B5\u30FC\u30D3\u30B9\u7D71\u5408\u30EB\u30FC\u30BF\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ISR(Integrated Services Router): \u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u6A5F\u80FD\u3068\u4F01\u696D\u306E\u9AD8\u901F\u306A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u74B0\u5883\u306B\u5FC5\u8981\u306A\u30B5\u30FC\u30D3\u30B9\u3092\u7D71\u5408"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E3B\u529B\u88FD\u54C1\uFF1ACisco 4000\u30B7\u30EA\u30FC\u30BA\u30013900\u30013800\u30012900\u30011900\u30011800\u3001800")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ciscoルータの初期起動の流れ"},"Cisco\u30EB\u30FC\u30BF\u306E\u521D\u671F\u8D77\u52D5\u306E\u6D41\u308C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u624B\u9806",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B1\u30FC\u30D6\u30EA\u30F3\u30B0\u3092\u884C\u3044\u3001\u914D\u7DDA\u304C\u9069\u5207\u304B\u3069\u3046\u304B\u78BA\u8A8D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30BF\u306B\u96FB\u6E90\u3092\u6295\u5165"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8D77\u52D5\u6642\u306ELED\u3084\u8868\u793A\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u78BA\u8A8D")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"System Bootstrap, Version 15.1(4)M4, RELEASE SOFTWARE (fc1)\nTechnical Support: http://www.cisco.com/techsupport\nCopyright (c) 2010 by cisco Systems, Inc.\nTotal memory size = 512 MB - On-board = 512 MB, DIMM0 = 0 MB\nCISCO1941/K9 platform with 524288 Kbytes of main memory\nMain memory is configured to 64/-1(On-board/DIMM0) bit mode with ECC disabled\n\nReadonly ROMMON initialized\n\nprogram load complete, entry point: 0x80803000, size: 0x1b340\nprogram load complete, entry point: 0x80803000, size: 0x1b340\n\nIOS Image Load Test\n___________________\nDigitally Signed Release Software\nprogram load complete, entry point: 0x81000000, size: 0x2bb1c58\nSelf decompressing the image :\n########################################################################## [OK] #IOS\u3092RAM\u4E0A\u306B\u5C55\u958B\u3057\u3066\u3044\u308B\nSmart Init is enabled\nsmart init is sizing iomem\n                  TYPE      MEMORY_REQ\n     Onboard devices &\n          buffer pools      0x01E8F000\n-----------------------------------------------\n                TOTAL:      0x01E8F000\nRounded IOMEM up to: 32Mb.\nUsing 6 percent iomem. [32Mb/512Mb]\n\n              Restricted Rights Legend\nUse, duplication, or disclosure by the Government is\nsubject to restrictions as set forth in subparagraph\n(c) of the Commercial Computer Software - Restricted\nRights clause at FAR sec. 52.227-19 and subparagraph\n(c) (1) (ii) of the Rights in Technical Data and Computer\nSoftware clause at DFARS sec. 252.227-7013.\n           cisco Systems, Inc.\n           170 West Tasman Drive\n           San Jose, California 95134-1706\n\nCisco IOS Software, C1900 Software (C1900-UNIVERSALK9-M), Version 15.1(4)M4, RELEASE SOFTWARE (fc2) #IOS\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\nTechnical Support: http://www.cisco.com/techsupport\nCopyright (c) 1986-2012 by Cisco Systems, Inc.\nCompiled Thurs 5-Jan-12 15:41 by pt_team\nImage text-base: 0x2100F918, data-base: 0x24729040\n\nThis product contains cryptographic features and is subject to United\nStates and local country laws governing import, export, transfer and\nuse. Delivery of Cisco cryptographic products does not imply\nthird-party authority to import, export, distribute or use encryption.\nImporters, exporters, distributors and users are responsible for\ncompliance with U.S. and local country laws. By using this product you\nagree to comply with applicable laws and regulations. If you are unable\nto comply with U.S. and local laws, return this product immediately.\n\nA summary of U.S. laws governing Cisco cryptographic products may be found at:\nhttp://www.cisco.com/wwl/export/crypto/tool/stqrg.html\n\nIf you require further assistance please contact us by sending email to\nexport@cisco.com.\n\nCisco CISCO1941/K9 (revision 1.0) with 491520K/32768K bytes of memory. # RAM\u306E\u30B5\u30A4\u30BA\nProcessor board ID FTX152400KS\n2 Gigabit Ethernet interfaces # \u642D\u8F09\u3055\u308C\u3066\u3044\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3084\u30E2\u30B8\u30E5\u30FC\u30EB\u306E\u7A2E\u985E\u3068\u6570\nDRAM configuration is 64 bits wide with parity disabled.\n255K bytes of non-volatile configuration memory.\n249856K bytes of ATA System CompactFlash 0 (Read/Write)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ルータのインターフェース番号付けの規則"},"\u30EB\u30FC\u30BF\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u756A\u53F7\u4ED8\u3051\u306E\u898F\u5247"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Serial 0/0/0: \u30B9\u30ED\u30C3\u30C8/\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u30AB\u30FC\u30C9\u30B9\u30ED\u30C3\u30C8/\u30DD\u30FC\u30C8")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ルータの基本設定"},"\u30EB\u30FC\u30BF\u306E\u57FA\u672C\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ルータの基本設定-1"},"\u30EB\u30FC\u30BF\u306E\u57FA\u672C\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DB\u30B9\u30C8\u540D\uFF1A\u7565"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IP\u30A2\u30C9\u30EC\u30B9\u3068\u30B5\u30D6\u30CD\u30C3\u30C8\u30DE\u30B9\u30AF",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5404\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B\u5BFE\u3057\u3066\u3001IP\u30A2\u30C9\u30EC\u30B9\u3068\u30B5\u30D6\u30CD\u30C3\u30C8\u30DE\u30B9\u30AF\u3092\u8A2D\u5B9A")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#interface GigabitEthernet 0/0\nRouter(config-if)#ip address 192.168.1.1 255.255.255.0\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u6709\u52B9/\u7121\u52B9\u304B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#interface GigabitEthernet 0/1\nRouter(config-if)#shutdown\nRouter(config-if)#no shutdown\n\nRouter(config-if)#\n%LINK-5-CHANGED: Interface GigabitEthernet0/1, changed state to up\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"二重モードと速度の設定"},"\u4E8C\u91CD\u30E2\u30FC\u30C9\u3068\u901F\u5EA6\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30B9\u30A4\u30C3\u30C1\u3068\u4E00\u7DD2\u3002\u7565\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"インターフェース説明文を設定"},"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u8AAC\u660E\u6587\u3092\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"SW1#configure terminal \nEnter configuration commands, one per line.  End with CNTL/Z.\nSW1(config)#interface fastEthernet 0/1\nSW1(config-if)#description to RT1\nSW1(config-if)#exit\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ルータの基本設定の確認"},"\u30EB\u30FC\u30BF\u306E\u57FA\u672C\u8A2D\u5B9A\u306E\u78BA\u8A8D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30C8\u30DD\u30ED\u30B8\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"トポロジ",src:(__webpack_require__(32108)/* ["default"] */ .Z),width:"999",height:"388"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router>enable\nRouter#configure terminal #\u8A2D\u5B9A\u30E2\u30FC\u30C9\u306B\u79FB\u884C\nEnter configuration commands, one per line.  End with CNTL/Z.\nRouter(config)#hostname RT1 #\u30DB\u30B9\u30C8\u540D\u3092RT1\u306B\u8A2D\u5B9A\nRT1(config)# #\u30D7\u30ED\u30F3\u30D7\u30C8\nRT1(config)#interface Gig0/0/0  #Fa0\u306E\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u8A2D\u5B9A\u30E2\u30FC\u30C9\u306B\u79FB\u884C\nRT1(config-if)#ip address 172.16.1.1 255.255.255.0 #IP\u30A2\u30C9\u30EC\u30B9\u8A2D\u5B9A\nRT1(config-if)#no shutdown #\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u6709\u52B9\u5316\nRT1(config-if)#\n%LINK-5-CHANGED: Interface GigabitEthernet0/0/0, changed state to up\n%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/0, changed state to up\n\nRT1(config-if)#description ** to Sales Dep. Network **\nRT1(config-if)#interface Gig0/0/1\nRT1(config-if)#ip address 172.16.2.1 255.255.255.0\nRT1(config-if)#no shutdown\nRT1(config-if)#\n%LINK-5-CHANGED: Interface GigabitEthernet0/0/1, changed state to up\n%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0/1, changed state to up\nRT1(config-if)#description ** to Engineering Dep. Network **\n\nRT1(config-if)#line console 0 #\u30B3\u30F3\u30BD\u30FC\u30EB\u306E\u30E9\u30A4\u30F3\u306E\u8A2D\u5B9A\u30E2\u30FC\u30C9\u306B\u79FB\u884C\nRT1(config-line)#exec-timeout 15 #\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8\u6642\u9593\u3092\uFF11\uFF15\u5206\u306B\u5909\u66F4\nRT1(config-line)#logging synchronous #\u5272\u308A\u8FBC\u307F\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u30B3\u30DE\u30F3\u30C9\u518D\u8868\u793A\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"本体情報"},"\u672C\u4F53\u60C5\u5831"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30B9\u30A4\u30C3\u30C1\u3068\u4E00\u7DD2\u3002\u7565\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"インターフェースの要約情報表示"},"\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u8981\u7D04\u60C5\u5831\u8868\u793A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip interface brief #\u5168\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u8981\u7D04\u60C5\u5831\u3092\u8868\u793A\nInterface              IP-Address      OK? Method Status                Protocol \nGigabitEthernet0/0/0   172.16.1.1      YES NVRAM  up                    up \nGigabitEthernet0/0/1   172.16.2.1      YES NVRAM  up                    up \n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ルーティングテーブルの表示"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306E\u8868\u793A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"RT1#show ip route\nCodes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area\n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2\n       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP\n       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area\n       * - candidate default, U - per-user static route, o - ODR\n       P - periodic downloaded static route\n\nGateway of last resort is not set\n\n     172.16.0.0/16 is variably subnetted, 4 subnets, 2 masks\nC       172.16.1.0/24 is directly connected, GigabitEthernet0/0/0 #\u76F4\u63A5\u63A5\u7D9A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\nL       172.16.1.1/32 is directly connected, GigabitEthernet0/0/0 #\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u30A2\u30C9\u30EC\u30B9\nC       172.16.2.0/24 is directly connected, GigabitEthernet0/0/1\nL       172.16.2.1/32 is directly connected, GigabitEthernet0/0/1\n")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 32108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/2019071801-1a0f930270699d1f6e731334dc370cd4.png");

/***/ })

}]);