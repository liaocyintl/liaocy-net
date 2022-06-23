"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[6679],{

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

/***/ 68585:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'CCNA試験のまとめノート 08 ルーティング基礎',date:'2019-07-17 11:00',lang:'ja',tags:['ノート'],categories:['資格試験','CCNA']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/CCNA","id":"archieved/2019/07/CCNA","title":"CCNA試験のまとめノート 08 ルーティング基礎","description":"ルーティング、スタティックルーティング、ダイナミックルーティング、経路集約、メトリックとアドミニストレーティブディスタンス","source":"@site/docs/archieved/2019/07/17-CCNA.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/CCNA","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/17-CCNA.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":17,"frontMatter":{"title":"CCNA試験のまとめノート 08 ルーティング基礎","date":"2019-07-17 11:00","lang":"ja","tags":["ノート"],"categories":["資格試験","CCNA"]},"sidebar":"tutorialSidebar","previous":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","permalink":"/liaocy-net/docs/archieved/2019/07/FE"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'ダイナミックルート',id:'ダイナミックルート',level:2},{value:'ルーティングプロトコルの種類',id:'ルーティングプロトコルの種類',level:2},{value:'経路集約とは',id:'経路集約とは',level:2},{value:'経路集約の方法',id:'経路集約の方法',level:2},{value:'ルーティングプロトコルによる経路集約',id:'ルーティングプロトコルによる経路集約',level:2},{value:'メトリック',id:'メトリック',level:2},{value:'アドミニストレーティブディスタンス',id:'アドミニストレーティブディスタンス',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u3001\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u3001\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u3001\u7D4C\u8DEF\u96C6\u7D04\u3001\u30E1\u30C8\u30EA\u30C3\u30AF\u3068\u30A2\u30C9\u30DF\u30CB\u30B9\u30C8\u30EC\u30FC\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ルーティング"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30D1\u30B1\u30C3\u30C8\u3092\u5B9B\u5148\u30DB\u30B9\u30C8\u306B\u5C4A\u3051\u308B\u305F\u3081\u306B\u6700\u9069\u306A\u7D4C\u8DEF\u3092\u9078\u629E\u3057\u3066\u4F1D\u9001\u3059\u308B\u30D7\u30ED\u30BB\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\uFF1A\u53D7\u4FE1\u3057\u305F\u30D1\u30B1\u30C3\u30C8\u306E\u4F1D\u9001\u5148\u3092"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306E\u5B66\u7FD2\u65B9\u6CD5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u76F4\u63A5\u63A5\u7D9A\u30EB\u30FC\u30C8\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u30EB\u30FC\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30EB\u30FC\u30C8"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306E\u8868\u793A")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"#show ip route\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"スタティックルート"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u30EB\u30FC\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u7BA1\u7406\u8005\u304C\u624B\u52D5\u3067\u8A2D\u5B9A\u3057\u305F\u7D4C\u8DEF\u60C5\u5831"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u4ED6\u306E\u30EB\u30FC\u30BF\u306B\u901A\u77E5\u3057\u306A\u304F\u3001\u5E2F\u57DF\u3092\u6D88\u8CBB\u305B\u305A\u3001\u30EB\u30FC\u30BF\u306E\u8CA0\u8377\u3092\u6700\u5C0F\u9650\u306B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F7F\u3046\u5834\u5408\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E1\u30E2\u30EACPU\u5236\u9650\u3042\u308A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3001",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Stub Network\uFF08\u5B58\u6839\u7F51\u7EDC; \u672B\u8282\u7F51\u7EDC; \u672B\u7AEF\u7F51\u7EDC; \uFF09\u3001\u5916\u90E8\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3078\u306E\u63A5\u7D9A\u304C\u4E00\u3064\u3057\u304B\u306A\u3044\u7AEF\u672B\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30D5\u30A9\u30EB\u30C8\u30EB\u30FC\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9B\u5148\u306F\u306E\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30EB\u30FC\u30C8\u304C\u306A\u3044\u5834\u5408"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ISP\u304B\u3089\u9867\u5BA2\u306E\u5185\u90E8\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3078\u306E\u7D4C\u8DEF\u304C\u5FC5\u8981\u306A\u5834\u5408"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u9069\u7528\u304C\u56F0\u96E3\u306E\u5834\u5408"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C0\u30A4\u30E4\u30EB\u30A2\u30C3\u30D7\u63A5\u7D9A\u306E\u5834\u5408",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"dial-up: \u96FB\u8A71\u56DE\u7DDA\u3092\u4F7F\u3063\u3066\u30A4\u30F3\u30BF\u30CD\u30C3\u30C8\u3084\u793E\u5185LAN\u306B\u63A5\u7D9A\u3059\u308B\u3002"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u30EB\u30FC\u30C8\u306E\u8A2D\u5B9A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Administrative distance: RIP\u306B\u3088\u308B\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30EB\u30FC\u30C8\u3068\u3057\u3066\u53D7\u4FE1\u3057\u3066\u3044\u308B\u3068\u3057\u307E\u3059\u3002\u3053\u306E\u3088\u3046\u306A\u5834\u5408\u306B\u306F\u3001\u30EB\u30FC\u30BF\u306F\u4FE1\u983C\u5EA6\u306E\u9AD8\u3044\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u304B\u3089\u306E\u60C5\u5831\u3060\u3051\u3092\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u767B\u9332\u3057\u307E\u3059\u3002\u3053\u306E\u4FE1\u983C\u5EA6\u3092\u6C7A\u3081\u308B\u305F\u3081\u306E\u5024\u304C\u30A2\u30C9\u30DF\u30CB\u30B9\u30C8\u30EC\u30FC\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\u3002")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config)# ip route <address> <mask> {<next-hop>|<interface>} [<distance>][permanent]\n\n.address ... \u5B9B\u5148IP\u30A2\u30C9\u30EC\u30B9\n.mask ... \u5B9B\u5148\u30CD\u30C3\u30C8\u30DE\u30C3\u30AF\n.next-hop ... \u6B21\u306E\u30EB\u30FC\u30BF\u306EIP\u30A2\u30C9\u30EC\u30B9\n.interface ... \u5B9B\u5148\u306B\u884C\u304F\u305F\u3081\u4F7F\u3046\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\n.distance ... \u30A2\u30C9\u30DF\u30CB\u30B9\u30C8\u30EC\u30FC\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\u5024\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\uFF11\n.permanent ... \u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u304C\u30C0\u30A6\u30F3\u3057\u3066\u3082\u3001\u7D4C\u8DEF\u60C5\u5831\u304C\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u524A\u9664\u3055\u308C\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u3068\u304D\u306B\u6307\u5B9A\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30D5\u30A9\u30EB\u30C8\u30EB\u30FC\u30C8",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u660E\u793A\u7684\u306B\u767B\u9332\u3055\u308C\u3044\u306A\u3044\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u5B9B\u306E\u30D1\u30B1\u30C3\u30C8\u3092\u4F1D\u9001\u3059\u308B\u969B\u306B\u4F7F\u7528\u3059\u308B\u7D4C\u8DEF\u60C5\u5831"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5229\u70B9\uFF1A\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u304C\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F7F\u3046\u5834\u5408\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E1\u30E2\u30EA\u3084CPU\u306B\u5236\u9650\u304C\u3042\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u652F\u793E\u304B\u3089\u672C\u793E\u3078\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30D6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u30EB\u30FC\u30BF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3092\u3057\u3066\u3044\u308B\u30EB\u30FC\u30BF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3092\u3057\u3066\u3044\u308B\u30EB\u30FC\u30BF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5B9A\u306A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3092\u5B66\u7FD2\u3059\u308B\u3053\u3068\u304C\u671B\u307E\u3057\u304F\u306A\u3044\u30C8\u30DD\u30ED\u30B8"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A2D\u5B9A\uFF1A")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"(config)#ip route 0.0.0.0 0.0.0.0 {<next-hop>|<interface>}\n\n.\u5B9B\u5148\u30A2\u30C9\u30EC\u30B9\u3068\u30DE\u30B9\u30AF\u30920.0.0.0\u306B\u6307\u5B9A\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30ED\u30F3\u30B2\u30B9\u30C8\u30DE\u30C3\u30C1\uFF08longest match \u6700\u9577\u4E00\u81F4\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u5B9B\u5148\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9\u8907\u6570\u5B58\u5728\u306E\u5834\u5408\u3001\u5B9B\u5148\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9\u3068\u4E00\u81F4\u3059\u308B\u30D3\u30C3\u30C8\u306E\u4E26\u3073\u304C\u5148\u982D\u304B\u3089\u6700\u3082\u9577\u3044\u7D4C\u8DEF\u60C5\u5831\u3092\u9078\u629E\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6CE8\u610F\uFF1A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u90E8\u306F\u5B8C\u5168\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ダイナミックルーティング"},"\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ダイナミックルート"},"\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30EB\u30FC\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u3088\u3063\u3066\u52D5\u7684\u306B\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u5B66\u7FD2\u3055\u308C\u308B\u7D4C\u8DEF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30C8\u30DD\u30ED\u30B8\u306B\u5909\u66F4\u304C\u3042\u3063\u305F\u5834\u5408\u3001\u5909\u66F4\u60C5\u5831\u3092\u30EB\u30FC\u30BF\u9593\u3067\u901A\u77E5\u3057\u5408\u3063\u3066\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u3092\u66F4\u65B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5229\u70B9\uFF1A\u7BA1\u7406\u8005\u306E\u8CA0\u8377\u3092\u524A\u6E1B\u3001\u5927\u304D\u306A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3067\u306F\u7279\u306B\u52B9\u679C\u7684"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6B20\u70B9\uFF1A\u30E1\u30E2\u30EA\u3068CPU\u3078\u8CA0\u8377\u304C\u304B\u304B\u308B\u3002\u5E2F\u57DF\u5E45\u3092\u6D88\u8CBB\u3002\u5C02\u9580\u77E5\u8B58\u304C\u3044\u308B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ルーティングプロトコルの種類"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u7A2E\u985E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IGP(Interior ","[\u026An\u02C8t\u026Ari\u0259r]"," n. \u5185\u90E8 Gateway Protocol)",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5834\u5408\uFF1AAS\u5185\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306B\u4F7F\u7528\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5206\u985E\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\u30D9\u30AF\u30BF\u30FC(Distance Vector \u8DDD\u79BB\u5411\u91CF)\u578B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"distance\uFF1A\u30DB\u30C3\u30D7\u6570\u3001\u7D4C\u7531\u3057\u305F\u30EB\u30FC\u30BF\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"vector\uFF1A\u30CD\u30AF\u30B9\u30C8\u30DB\u30C3\u30D7\uFF08next hop, \u4E0B\u4E00\u8DF3\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30ED\u30C8\u30B3\u30EB\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"RIP (Routing Information Protocol: UDP/IP): \u30DB\u30C3\u30D7\u6570\u3092\u57FA\u306B\u5B9B\u5148\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u6700\u9069\u7D4C\u8DEF\u3092\u5224\u65AD\u3057\u3001\u6BD4\u8F03\u7684\u5C0F\u898F\u6A21\u306A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3067\u4F7F\u7528\u3055\u308C\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IGRP(Interior Gateway Routing Protocol): \u30B7\u30B9\u30B3\u72EC\u81EA\u3001\u30E1\u30C8\u30EA\u30C3\u30AF\u306B\u5E2F\u57DF\u5E45\u3092\u4F7F\u7528\u3001\u5B9A\u671F\u7684\u306B\u30D6\u30ED\u30FC\u30C9\u30AD\u30E3\u30B9\u30C8\u3067\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u3092\u9001\u4FE1\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EIGRP\uFF1AIGRP\u306E\u62E1\u5F35\u7248"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EA\u30F3\u30AF\u30B9\u30C6\u30FC\u30C8(Link State \u94FE\u8DEF\u72B6\u6001)",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u5404\u30EB\u30FC\u30C8\u304C\u6301\u3064\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u306E\u30EA\u30F3\u30AF\uFF08Link\uFF09\u306E\u72B6\u614B\uFF08State\uFF09\u3092\u4EA4\u63DB\u3057\u3001"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"SPF(Shortest Path First)\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\uFF1A\u30EA\u30F3\u30AF\u30B9\u30C6\u30FC\u30C8\u578B\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u304A\u3044\u3066\u3001\u5404\u30EB\u30FC\u30BF\u304CLSDB(Link State Database)\u3092\u57FA\u306B\u6700\u77ED\u30D1\u30B9\u3092\u7B97\u51FA\u3059\u308B\u305F\u3081\u306E\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30ED\u30C8\u30B3\u30EB\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"OSPF\uFF08Open Shortest Path First: TCP/IP\uFF09: \u5927\u898F\u6A21\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3067\u3082\u5229\u7528\u53EF\u3001\u30E1\u30C8\u30EA\u30C3\u30AF\u3010metric\u3011\u306F\u30B3\u30B9\u30C8\u3092\u4F7F\u3046"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IS-IS (Intermediate System to Intermediate System): \u307B\u3068\u3093\u3069\u4F7F\u7528\u3055\u308C\u3066\u3044\u306A\u3044"))))))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EGP(Exterior ","[\u026An\u02C8t\u026Ari\u0259r]"," n. \u5185\u90E8 Gateway Protocol)",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5834\u5408\uFF1AAS\u9593\u3067\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u306B\u4F7F\u7528\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7565"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9\u30D5\u30EB\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u306B\u30B5\u30D6\u30CD\u30C3\u30C8\u30DE\u30B9\u30AF\u60C5\u5831\u3092\u52A0\u3048\u306A\u3044"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30ED\u30C8\u30B3\u30EB\uFF1ARIPv1\u3001IGRP"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9\u30D5\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\uFF1A\u30AF\u30E9\u30B9A\u30FBB\u30FBC\u306B\u57FA\u306B\u3057\u305F\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9\u30EC\u30B9\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u30B5\u30D6\u30CD\u30C3\u30C8\u30DE\u30B9\u30AF\u3092\u542B\u3080"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30ED\u30C8\u30B3\u30EB\uFF1ARIPv2\u3001EIGRP\u3001OSPF\u3001IS-IS")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"経路集約"},"\u7D4C\u8DEF\u96C6\u7D04"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"経路集約とは"},"\u7D4C\u8DEF\u96C6\u7D04\u3068\u306F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6982\u5FF5\uFF1A\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306B\u5B66\u7FD2\u3055\u308C\u305F\u8907\u6570\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9\u3092\uFF11\u3064\u306B\u307E\u3068\u3081\u308B\u3053\u3068"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5225\u540D\uFF1A\u30EB\u30FC\u30C8\u30A2\u30B0\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3001\u30B9\u30FC\u30D1\u30FC\u30CD\u30C3\u30C6\u30A3\u30F3\u30B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5229\u70B9\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30C6\u30FC\u30D6\u30EB\u306E\u30B5\u30A4\u30BA\u3092\u7E2E\u5C0F\u3001\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u3068\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF\u91CF\u3092\u524A\u6E1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5B9A\u30B5\u30D6\u30CD\u30C3\u30C8\u304C\u30C0\u30A6\u30F3\u3057\u305F\u3068\u304D\u3001\u96C6\u7D04\u30A2\u30C9\u30EC\u30B9\u3057\u304B\u6301\u305F\u306A\u3044\u30EB\u30FC\u30BF\u3078\u901A\u77E5\u3059\u308B\u5FC5\u8981\u304C\u306A\u3044\u3002\u30C8\u30DD\u30ED\u30B8\u5909\u66F4\u6642\u306B\u5F71\u97FF\u304C\u53CA\u3076\u7BC4\u56F2\u3092\u5C0F\u3055\u304F\u3067\u304D\u308B\u3002")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"経路集約の方法"},"\u7D4C\u8DEF\u96C6\u7D04\u306E\u65B9\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9023\u7D9A\u3059\u308B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30A2\u30C9\u30EC\u30B9\u30922\u9032\u6570\u306B\u3057\u305F\u3068\u304D\u3001\u4E0A\u4F4D\u30D3\u30C3\u30C8\u306E\u4E26\u3073\u304C\u5171\u901A\u3059\u308B\u90E8\u5206\u307E\u3067\uFF11\u3064\u306E\u30A2\u30C9\u30EC\u30B9\u306B\u96C6\u7D04\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F8B\uFF1A172.16.9.9/24\uFF5E172.16.31.0/24\u306F\u3001\u4E0A\u4F4D\u306E19\u30D3\u30C3\u30C8\u304C\u5171\u901A\u3059\u308B\u305F\u3081\u3001172.16.0.0/19\u306B\u96C6\u7D04\u3059\u308B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"ルーティングプロトコルによる経路集約"},"\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u3088\u308B\u7D4C\u8DEF\u96C6\u7D04"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9\u30D5\u30EB\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u7D4C\u8DEF\u96C6\u7D04",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9\u30D5\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u5883\u754C\u3067\u7D4C\u8DEF\u60C5\u5831\u3092\u30AF\u30E9\u30B9\u5358\u4F4D\u306B\u81EA\u52D5\u96C6\u7D04"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30E9\u30B9\u30EC\u30B9\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306E\u7D4C\u8DEF\u96C6\u7D04",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7BA1\u7406\u8005\u306B\u3088\u3063\u3066\u624B\u52D5\u3067\u7D4C\u8DEF\u96C6\u7D04\u3092\u884C\u3046")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"メトリックとアドミニストレーティブディスタンス"},"\u30E1\u30C8\u30EA\u30C3\u30AF\u3068\u30A2\u30C9\u30DF\u30CB\u30B9\u30C8\u30EC\u30FC\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"メトリック"},"\u30E1\u30C8\u30EA\u30C3\u30AF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E1\u30C8\u30EA\u30C3\u30AF\uFF1A\u5404\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u30D7\u30ED\u30C8\u30B3\u30EB\u306F\u6700\u9069\u7D4C\u8DEF\u3092\u6C7A\u5B9A\u3059\u308B\u305F\u3081\u306E\u7D4C\u8DEF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DB\u30C3\u30D7\u30AB\u30A6\u30F3\u30C8\uFF1ARIPv1\u3001RIPv2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B3\u30B9\u30C8\uFF1AOSPF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5E2F\u57DF\u5E45\u3001\u9045\u5EF6\uFF1AEIGRP")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"アドミニストレーティブディスタンス"},"\u30A2\u30C9\u30DF\u30CB\u30B9\u30C8\u30EC\u30FC\u30C6\u30A3\u30D6\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7BC4\u56F2\uFF1A0\uFF5E255"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5024\u304C\u5C0F\u3055\u3044\u307B\u3069\u512A\u5148\u5EA6\u304C\u9AD8\u3044"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D7\u30ED\u30C8\u30B3\u30EB\u306B\u3088\u3063\u3066AD\u5024\u304C\u9055\u3063\u3066\u308B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u76F4\u63A5\u63A5\u7D9A\uFF1A\uFF10"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u30EB\u30FC\u30C8\uFF1A\uFF11"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EIGRP\u96C6\u7D04\uFF1A\uFF15"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EBGP\uFF1A\uFF12\uFF10"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EIGRP\uFF1A\uFF19\uFF10"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"OSPF:\uFF11\uFF11\uFF10"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IS-IS\uFF1A\uFF11\uFF11\uFF15"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"RIPv1\u3001RIPv2\uFF1A\uFF11\uFF12\uFF10"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"EIGRP\uFF1A\uFF11\uFF17\uFF10"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"IBGP\uFF1A\uFF12\uFF10\uFF10"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E0D\u660E\uFF1A\uFF12\uFF15\uFF15")))));};MDXContent.isMDXComponent=true;

/***/ })

}]);