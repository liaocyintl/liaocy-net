"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[8355],{

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

/***/ 62590:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 11 インターネット接続',date:'2019-07-22 10:43',lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 11 インターネット接続","description":"DHCPによるインターネット接続、NATとPATの概要、NATの設定、PATの設定、NATとPATの検証、NATとPATのトラブルシューティング","source":"@site/docs/archieved/2019/07/20-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/20-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":20,"frontMatter":{"title":"CCNA試験のまとめノート 11 インターネット接続","date":"2019-07-22 10:43","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'DHCPクライアント',id:'dhcpクライアント',level:2},{value:'DHCPサーバの設定',id:'dhcpサーバの設定',level:2},{value:'DHCPクライアントの確認',id:'dhcpクライアントの確認',level:2},{value:'DHCPリレーエージェント（Relay agent）の設定',id:'dhcpリレーエージェントrelay-agentの設定',level:2},{value:'NAT用語',id:'nat用語',level:2},{value:'NATのアドレス変換の種類',id:'natのアドレス変換の種類',level:2},{value:'PAT',id:'pat',level:2},{value:'スタティックNATの設定',id:'スタティックnatの設定',level:2},{value:'ダイナミックNATの設定',id:'ダイナミックnatの設定',level:2},{value:'プールを使用したPATの設定',id:'プールを使用したpatの設定',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"DHCP\u306B\u3088\u308B\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3001NAT\u3068PAT\u306E\u6982\u8981\u3001NAT\u306E\u8A2D\u5B9A\u3001PAT\u306E\u8A2D\u5B9A\u3001NAT\u3068PAT\u306E\u691C\u8A3C\u3001NAT\u3068PAT\u306E\u30C8\u30E9\u30D6\u30EB\u30B7\u30E5\u30FC\u30C6\u30A3\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"dhcpによるインターネット接続"},"DHCP\u306B\u3088\u308B\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"dhcpクライアント"},"DHCP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AFIP\u30A2\u30C9\u30EC\u30B9\u306E\u8A2D\u5B9A\uFF1A\u56FA\u5B9AIP\u30A2\u30C9\u30EC\u30B9\u304C\u9759\u7684\u306B\u5272\u308A\u632F\u3089\u308C\u308B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AFIP\u30A2\u30C9\u30EC\u30B9\u306E\u8A2D\u5B9A\uFF1A\u30EB\u30FC\u30BF\u306E\u5916\u90E8\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306B\u30B9\u30BF\u30C6\u30A3\u30C3\u30AFIP\u30A2\u30C9\u30EC\u30B9\u3092\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30D5\u30A9\u30EB\u30C8\u30EB\u30FC\u30C8\u306E\u4F5C\u6210\uFF1A\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u3078\u5411\u304B\u3046\u30C7\u30D5\u30A9\u30EB\u30C8\u30EB\u30FC\u30C8\u3092\u8A2D\u5B9A"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFIP\u30A2\u30C9\u30EC\u30B9\u306E\u8A2D\u5B9A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"DHCP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u8A2D\u5B9A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#interface GigabitEthernet 0/0/0\nRouter(config-if)#ip address dhcp\nRouter(config-if)#no shutdown\n\nRouter#show running-config\n\n!\ninterface GigabitEthernet0/0/0\n ip address dhcp\n duplex auto\n speed auto\n!\n\nRouter#show dhcp lease #DHCP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305FIP\u30A2\u30C9\u30EC\u30B9\u306E\u30EA\u30FC\u30B9\u60C5\u5831\u3092\u8868\u793A\u3059\u308B\nTemp IP addr: 0.0.0.0 for peer on Interface: GigabitEthernet0/0/0\nTemp sub net mask: 0.0.0.0\n   DHCP Lease server: 0.0.0.0 , state: Initial\n   DHCP Transaction id: 158006C1\n   Lease: 0 secs,  Renewal: 0 secs,  Rebind: 0 secs\nTemp default-gateway addr: 0.0.0.0\n   Next timer fires after: 00:00:36 #\u30EA\u30FC\u30B9\u6B8B\u308A\u6642\u9593\n   Retry count: 3  Client-ID:cisco-00E0.F72D.2C01-Gig0/0/0\n   Client-ID hex dump: 636973636F2D303045302E463732442E\n                       24330312D476967302F302F30\n   Hostname: Router\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"dhcpサーバの設定"},"DHCP\u30B5\u30FC\u30D0\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#interface GigabitEthernet 0/0/0\nRouter(config-if)#ip address 172.16.10.254 255.255.255.0 #\u30DD\u30FC\u30C8\u306EIP\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u306EIP\u3092\u8A2D\u5B9A\uFF09\nRouter(config-if)#exit\n    \nRouter(config)#ip dhcp pool LANUser #DHCP\u30D7\u30FC\u30EB\u3092\u4F5C\u6210\nRouter(dhcp-config)#network 172.16.10.0 255.255.255.0 #\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9\u306E\u6307\u5B9A\nRouter(dhcp-config)#default-router 172.16.10.254 #\u30C7\u30D5\u30A9\u30EB\u30C8\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u306E\u6307\u5B9A\nRouter(dhcp-config)#domain-name example.com #\u30C9\u30E1\u30A4\u30F3\u540D\u306E\u6307\u5B9A\nRouter(dhcp-config)#dns-server 64.0.0.1 #DNS\u30B5\u30FC\u30D0\u306E\u6307\u5B9A\nRouter(dhcp-config)#exit\n\nRouter(config)#ip dhcp excluded-address 172.16.10.101 172.16.10.254 #\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3078\u632F\u308A\u5F53\u3066\u306A\u3044\u30A2\u30C9\u30EC\u30B9\u7BC4\u56F2\nRouter(config)#exit\nRouter#\n%SYS-5-CONFIG_I: Configured from console by console\n\nRouter#show running-config | begin dhcp\n!\nip dhcp pool LANUser\n network 172.16.10.0 255.255.255.0\n default-router 172.16.10.254\n dns-server 64.0.0.1\n domain-name example.com\n!\ninterface GigabitEthernet0/0/0\n ip address 172.16.10.254 255.255.255.0 #DHCP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\n duplex auto\n speed auto\n!\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"DHCP\u30D7\u30FC\u30EB\u306E\u8868\u793A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#show ip dhcp pool\n\nPool LANUser :\n Utilization mark (high/low)    : 100 / 0\n Subnet size (first/next)       : 0 / 0 \n Total addresses                : 254\n Leased addresses               : 2\n Excluded addresses             : 1\n Pending event                  : none\n\n 1 subnet is currently in the pool\n Current index        IP address range                    Leased/Excluded/Total\n 172.16.10.1          172.16.10.1      - 172.16.10.254     2    / 1     / 254\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30A2\u30C9\u30EC\u30B9\u30D0\u30A4\u30F3\u30C7\u30A3\u30F3\u30B0\u60C5\u5831\u306E\u8868\u793A\uFF1ADHCP\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u305FIP\u30A2\u30C9\u30EC\u30B9\u3068MAC\u30A2\u30C9\u30EC\u30B9\u3092\u5BFE\u5FDC\u4ED8\u3051\u305F\u30DE\u30C3\u30D4\u30F3\u30B0\u60C5\u5831"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#show ip dhcp binding\nIP address       Client-ID/              Lease expiration        Type\n                 Hardware address\n172.16.10.1      0001.97B3.5035           --                     Automatic\n172.16.10.2      0002.4AE8.E1E7           --                     Automatic\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30A2\u30C9\u30EC\u30B9\u7AF6\u5408\u306E\u8868\u793A\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router#show ip dhcp conflict\nIP address        Detection method   Detection time          VRF\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"dhcpクライアントの確認"},"DHCP\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306E\u78BA\u8A8D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"C:\\>ipconfig /all\n\nFastEthernet0 Connection:(default port)\n\n   Connection-specific DNS Suffix..: example.com\n   Physical Address................: 0001.97B3.5035\n   Link-local IPv6 Address.........: FE80::201:97FF:FEB3:5035\n   IP Address......................: 172.16.10.1\n   Subnet Mask.....................: 255.255.255.0\n   Default Gateway.................: 172.16.10.254\n   DNS Servers.....................: 64.0.0.1\n   DHCP Servers....................: 172.16.10.254\n   DHCPv6 Client DUID..............: 00-01-00-01-61-6A-60-E4-00-01-97-B3-50-35\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"dhcpリレーエージェントrelay-agentの設定"},"DHCP\u30EA\u30EC\u30FC\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\uFF08Relay agent\uFF09\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6A5F\u80FD\uFF1ADHCP\u30B5\u30FC\u30D3\u30B9\u3092\u8907\u6570\u306E\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u30C9\u30E1\u30A4\u30F3\u3067\u6A5F\u80FD\u3059\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#interface GigabitEthernet 0/0/1\nRouter(config-if)#ip helper-address 172.16.10.254\nRouter(config-if)#ip address 172.16.9.254 255.255.255.0\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"natとpatの概要"},"NAT\u3068PAT\u306E\u6982\u8981"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"NAT: Network Address Translation\u3000IP\u30A2\u30C9\u30EC\u30B9\u76F8\u4E92\u306B\u5909\u63DB\u3059\u308B\u6280\u8853"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"nat用語"},"NAT\u7528\u8A9E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5185\u90E8\u30ED\u30FC\u30AB\u30EB\u30A2\u30C9\u30EC\u30B9\uFF1A\u5185\u90E8\u30DB\u30B9\u30C8\u306EIP\u30A2\u30C9\u30EC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5185\u90E8\u30B0\u30ED\u30FC\u30D0\u30EB\u30A2\u30C9\u30EC\u30B9\uFF1A\u5916\u90E8\u30DB\u30B9\u30C8\u304B\u3089\u898B\u305F\u3001\u5185\u90E8\u30DB\u30B9\u30C8\u306E\u30A2\u30C9\u30EC\u30B9\u3002\u901A\u5E38\u306FISP\u304B\u3089\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u306B\u4F7F\u7528\u3059\u308B\u30B0\u30ED\u30FC\u30D0\u30EBIP\u30A2\u30C9\u30EC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5916\u90E8\u30ED\u30FC\u30AB\u30EB\u30A2\u30C9\u30EC\u30B9\uFF1A\u5185\u90E8\u30DB\u30B9\u30C8\u304C\u5B9B\u5148\u3068\u3057\u3066\u6307\u5B9A\u3059\u308B\u3001\u5916\u90E8\u30DB\u30B9\u30C8\u306EIP\u30A2\u30C9\u30EC\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5916\u90E8\u30B0\u30ED\u30FC\u30D0\u30EB\u30A2\u30C9\u30EC\u30B9\uFF1A\u5916\u90E8\u30DB\u30B9\u30C8\u306B\u5B9F\u969B\u306B\u5272\u308A\u5F53\u3066\u3089\u308C\u305FIP\u30A2\u30C9\u30EC\u30B9")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"natのアドレス変換の種類"},"NAT\u306E\u30A2\u30C9\u30EC\u30B9\u5909\u63DB\u306E\u7A2E\u985E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AFNAT\uFF081\u5BFE1\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFNAT\uFF08\u591A\u5BFE\u591A\uFF09\uFF1A\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFNAT\u3001\u5185\u90E8\u30B0\u30ED\u30FC\u30D0\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3042\u3089\u304B\u3058\u3081NAT\u30D7\u30FC\u30EB\u306B\u767B\u9332\u3057\u3001\u901A\u4FE1\u304C\u958B\u59CB\u3055\u308C\u305F\u3068\u304D\u306B\u30D7\u30FC\u30EB\u5185\u306E\u30A2\u30C9\u30EC\u30B9\u3092\u4F7F\u7528\u3057\u3066\u5185\u90E8\u30ED\u30FC\u30AB\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u52D5\u7684\u306B\u5909\u63DB\u3059\u308B\u65B9\u5F0F\u3067\u3059\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"pat"},"PAT"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"NAT: Port Address Translation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"natの設定"},"NAT\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"スタティックnatの設定"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AFNAT\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"トポロジ",src:(__webpack_require__(22078)/* ["default"] */ .Z),width:"815",height:"279"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#interface GigabitEthernet 0/0/0\nRouter(config-if)#ip nat inside\nRouter(config-if)#interface GigabitEthernet 0/0/1\nRouter(config-if)#ip nat outside\nRouter(config-if)#exit\nRouter(config)#ip nat inside source static 10.1.1.1 1.1.1.1\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ダイナミックnatの設定"},"\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFNAT\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u624B\u9806\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5185\u90E8\u30FB\u5916\u90E8\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u5B9A\u7FA9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"NAT\u30D7\u30FC\u30EB\u306E\u4F5C\u6210"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5909\u63DB\u5BFE\u8C61\u3068\u306A\u308B\u5185\u90E8\u30ED\u30FC\u30AB\u30EB\u30A2\u30C9\u30EC\u30B9\u3092ACL\u3067\u6307\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFNAT\u306E\u5B9A\u7FA9")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"トポロジ",src:(__webpack_require__(87959)/* ["default"] */ .Z),width:"707",height:"223"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config)#interface GigabitEthernet 0/0/0\nRouter(config-if)#ip nat inside\nRouter(config-if)#ip address 10.1.1.254 255.255.255.0\nRouter(config-if)#no shutdown\n\nRouter(config-if)#interface GigabitEthernet 0/0/1\nRouter(config-if)#ip nat outside\nRouter(config-if)#ip address 1.1.1.5 255.255.255.248\nRouter(config-if)#no shutdown\n\nRouter(config)#ip nat pool DNAT 1.1.1.1 1.1.1.4 netmask 255.255.255.248 #NAT\u30D7\u30FC\u30EB\u306E\u4F5C\u6210\nRouter(config)#access-list 1 permit 10.1.1.0 0.0.0.255 #ACL\u4F5C\u6210\nRouter(config)#ip nat inside source list 1 pool DNAT #\u30C0\u30A4\u30CA\u30DF\u30C3\u30AFNAT\u306E\u5B9A\u7FA9\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"natの設定-1"},"NAT\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"プールを使用したpatの設定"},"\u30D7\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u305FPAT\u306E\u8A2D\u5B9A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5185\u90E8\u5916\u90E8\u5B9A\u7FA9")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"Router(config-if)#ip nat inside\nRouter(config-if)#ip nat outside\nRouter(config)#ip nat inside source list <ACL\u756A\u53F7> interface <\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u30BF\u30A4\u30D7> overload\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"})));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 22078:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/2019072203-04e4b768cee6c22ba9a6d3a3a1545330.png");

/***/ }),

/***/ 87959:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/2019072204-92610af2352a790cb0d080b9f119954c.png");

/***/ })

}]);