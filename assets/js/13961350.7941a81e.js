"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[4932],{

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

/***/ 66286:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'基本情報技術者(午前)のまとめノート 01 基礎理論',date:new Date('2019-07-07T14:22:00.000Z'),lang:'ja',tags:['ノート'],categories:['資格試験','基本情報技術者']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/07/FE","id":"archieved/2019/07/FE","title":"基本情報技術者(午前)のまとめノート 01 基礎理論","description":"基本情報技術者(午前)についての実施概要、基礎理論","source":"@site/docs/archieved/2019/07/04-FE.md","sourceDirName":"archieved/2019/07","slug":"/archieved/2019/07/FE","permalink":"/liaocy-net/docs/archieved/2019/07/FE","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/07/04-FE.md","tags":[{"label":"ノート","permalink":"/liaocy-net/docs/tags/ノート"}],"version":"current","sidebarPosition":4,"frontMatter":{"title":"基本情報技術者(午前)のまとめノート 01 基礎理論","date":"2019-07-07T14:22:00.000Z","lang":"ja","tags":["ノート"],"categories":["資格試験","基本情報技術者"]},"sidebar":"tutorialSidebar","previous":{"title":"Java8那些忘却的事","permalink":"/liaocy-net/docs/archieved/2019/07/javareview"},"next":{"title":"CCNA試験のまとめノート 15 IPv6の導入","permalink":"/liaocy-net/docs/archieved/2019/07/CCNA"}};var assets={};var toc=[{value:'数値表現',id:'数値表現',level:2},{value:'基数変換',id:'基数変換',level:3},{value:'補数表現',id:'補数表現',level:3},{value:'算術演算と精度',id:'算術演算と精度',level:3},{value:'論理演算とシフト演算(转移操作)',id:'論理演算とシフト演算转移操作',level:2},{value:'論理演算',id:'論理演算',level:3},{value:'シフト演算',id:'シフト演算',level:3},{value:'情報量・符号化',id:'情報量符号化',level:2},{value:'情報量',id:'情報量',level:3},{value:'符号化（编码）',id:'符号化编码',level:3},{value:'BNFと逆ポーランド表記法',id:'bnfと逆ポーランド表記法',level:2},{value:'BNF(Backus Naur Form, 巴科斯-诺尔范式)',id:'bnfbackus-naur-form-巴科斯-诺尔范式',level:3},{value:'ボーランド表記法（波兰表达式）',id:'ボーランド表記法波兰表达式',level:3},{value:'データ構造',id:'データ構造',level:2},{value:'リスト（List）',id:'リストlist',level:3},{value:'スタック(stack)',id:'スタックstack',level:3},{value:'キュー（queue）',id:'キューqueue',level:3},{value:'木（tree）',id:'木tree',level:3},{value:'アルゴリズム',id:'アルゴリズム',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u57FA\u672C\u60C5\u5831\u6280\u8853\u8005(\u5348\u524D)\u306B\u3064\u3044\u3066\u306E\u5B9F\u65BD\u6982\u8981\u3001\u57FA\u790E\u7406\u8AD6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"実施概要"},"\u5B9F\u65BD\u6982\u8981"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5348\u524D\u3001\u5348\u5F8C\u8A66\u9A13\u3068\u3082\u306B100\u70B9\u6E80\u70B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E21\u65B960\u70B9\u4EE5\u4E0A\u5F97\u70B9\u3067\u304D\u308C\u3070\u5408\u683C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5348\u524D\u8A66\u9A13\u306F\u30C6\u30AF\u30CE\u30ED\u30B8\uFF08technology\uFF09\u7CFB\u5206\u91CE\u3092\u4E2D\u5FC3\u3068\u3057\u305F\u51FA\u984C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5348\u524D\u8A66\u9A13\u306F\u904E\u53BB\u554F\u984C\u304C\u591A\u3044\u300180\u554F\u306E\u3046\u306160%+\u304C\u904E\u53BB\u554F\u984C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5206\u91CE\u5225",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C6\u30AF\u30CE\u30ED\u30B8\u7CFB\u554F\u984C\uFF1A50\u554F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u7CFB\uFF1A10\u554F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30B9\u30C8\u30E9\u30C6\u30B8\u30FC\uFF08Strategy\uFF09\u7CFB\uFF1A20\u554F\u3001\u30B7\u30B9\u30C6\u30E0\u6226\u7565\u3001\u4F01\u753B\u3001\u7D4C\u55B6\u6226\u7565\u3001\u6280\u8853\u6226\u7565\u3001\u30D3\u30B8\u30CD\u30B9\u30A4\u30F3\u30C0\u30B9\u30C8\u30EA(Industry)\u3001\u6CD5\u52D9")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"基礎理論"},"\u57FA\u790E\u7406\u8AD6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"数値表現"},"\u6570\u5024\u8868\u73FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"基数変換"},"\u57FA\u6570\u5909\u63DB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u57FA\u6570\uFF1A10\u9032\u6570\u306E\u5834\u5408\uFF10\uFF5E\uFF19\u30012\u9032\u6570\u306E\u5834\u5408\uFF10\uFF5E\uFF11"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9032\u6570\u8A18\u53F7\uFF1A$$(abc.de)_n$$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u57FA\u6570\u5909\u63DB\uFF1A\u5C0F\u6570\u3092\u542B\u3081\u3066\u30012\u9032\u6570\u30688\u9032\u6570\u306816\u9032\u6570\u306E\u5909\u63DB\u300110\u9032\u6570\u304B\u30892\u9032\u6570\u30018\u9032\u6570\u300116\u9032\u6570\u3078\u306E\u5909\u63DB")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"補数表現"},"\u88DC\u6570\u8868\u73FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u88DC\u6570\u3068\u306F\u3042\u308B\u6570\u306B\u5BFE\u3057\u3066\u3001\u8DB3\u3057\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u540C\u3058\u6841\u6570\u306E\u6700\u5927\u5024\u306B\u306A\u308B\u6570\u3001\u3042\u308B\u3044\u306F\u8DB3\u3057\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u3001\u540C\u3058\u6841\u6570\u306E\u6700\u5927\u5024\u306B\uFF11\u3092\u52A0\u3048\u305F\u6570\u306B\u306A\u308B\u3088\u3046\u306A\u6570\u306E\u3053\u3068\u3092\u6307\u3059\u3002(X\u7684\u8865\u7801Y\u5C31\u662F\u8BF4X+Y\u7B49\u4E8E\u76F8\u540C\u4F4D\u6570\u6570\u7684\u6700\u5927\u503C)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\uFF11\u306E\u88DC\u6570\uFF1AX\u306E\u5404\u30D3\u30C3\u30C8\u3092\u53CD\u8EE2 $$(1111)_2-(1101)_2=(0010)2$$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\uFF12\u306E\u88DC\u6570\uFF1A1\u306E\u88DC\u6570+1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8CA0\u6570\u306E\u8868\u73FE\uFF1A\uFF12\u306E\u88DC\u6570\u3067\u8CA0\u6570\u3092\u8868\u73FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8CA0\u6570\u306E\u8A08\u7B97\uFF1AX-Y=X+Y\u88DC"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u56FA\u5B9A\u5C0F\u6570\u70B9\u6570\uFF1A\u6700\u4E0A\u4F4D\uFF10\u306E\u5834\u5408\u6B63\u6570\u3092\u8868\u73FE\u3001\u6700\u4E0A\u4F4D\uFF11\u306E\u5834\u5408\u8CA0\u6570\u3092\u8868\u73FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u56FA\u5B9A\u5C0F\u6570\u70B9\u6570\u306E\u8868\u793A\u7BC4\u56F2\uFF1A$$-2^{n-1}$$\u304B\u3089$$+2^{n-1}-1$$\u307E\u3067 n\u306F\u6841\u6570"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\uFF1A\u7B26\u53F7\u90E8\u3001\u6307\u6570\u90E8\u3001\u4EEE\u6570(\u5C3E\u6570)\u90E8\u3067\u8868\u73FE\u3001\u5373\u3061$$pm{(mantissa)*(radix)^{index}}$$ \u57FA\u6570\u306F2\u307E\u305F\u306F16",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7B26\u53F7\u90E8\uFF08s\uFF09\uFF1A1\u30D3\u30C3\u30C8\uFF1B\uFF10\u306A\u3089\u6B63\u3001\uFF11\u306A\u3089\u8CA0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6307\u6570\u90E8\uFF08e\uFF09\uFF1A7\u30D3\u30C3\u30C8\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4EEE\u6570\u90E8\uFF08m\uFF09\uFF1A24\u30D3\u30C3\u30C8\uFF1B\u6B63\u898F\u5316\u3092\u884C\u3046\uFF1B\u5C0F\u6570\u7B2C1\u4F4D\u304B\u3089\u309224\u30D3\u30C3\u30C8\u3067\u8868\u73FE\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\u306E\u53C2\u8003\u8CC7\u6599\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://blog.csdn.net/whyel/article/details/81067989"},"01")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\u306E\u4F8B\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"10\u9032\u6570123.125\u306E\u4E8C\u9032\u6570\u8868\u73FE\u306F1111011.001"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6B63\u898F\u5316:$$1.111011001*2^6$$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5373\u3061\uFF1A$$1.111011001*2^{133-127}$$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u305D\u308C\u3067\u4EEE\u6570\uFF1A$$S=111011001$$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6307\u6570: $$E=(133)_{10}=1000101$$"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\u8868\u73FE\u306F0 1000101 111011001")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"算術演算と精度"},"\u7B97\u8853\u6F14\u7B97\u3068\u7CBE\u5EA6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53C2\u8003\u8CC7\u6599\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"http://tooljp.com/jyosho/docs/ketaochi-jyohoochi/ketaochi-jyohoochi.html"},"\u60C5\u5831\u843D\u3061\u3001\u6841\u843D\u3061\u3001\u4E38\u3081\u8AA4\u5DEE\u3001\u6253\u5207\u308A\u8AA4\u5DEE\u306E\u9055\u3044")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u60C5\u5831\u843D\u3061",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u7D76\u5BFE\u5024\u306E\u5927\u304D\u3044\u6570\u5024\u306B\u7D76\u5BFE\u5024\u306E\u5C0F\u3055\u3044\u6570\u5024\u3092\u52A0\u6E1B\u7B97\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u7D76\u5BFE\u5024\u306E\u5C0F\u3055\u3044\u6570\u5024\u304C\u7121\u8996\u3055\u308C\u3066\u3057\u307E\u3046\u3053\u3068\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F8B\uFF1A$$2.0000000",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"10^8+1.0000000=2.0000000"),"10^8$$ (\u6709\u52B9\u6841\u6570\u304C8\u6841\u306E\u5834\u5408)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5BFE\u7B56\uFF1A\u5C0F\u3055\u3044\u6570\u304B\u3089\u8DB3\u3057\u7B97\u3092\u884C\u3044\u3001\u53EF\u80FD\u306A\u9650\u308A\u60C5\u5831\u843D\u3061\u3092\u56DE\u907F"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6841\u843D\u3061",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u5024\u304C\u307B\u307C\u7B49\u3057\u3044\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\u540C\u58EB\u306E\u6E1B\u7B97\u3092\u3057\u305F\u3068\u304D\u3001\u6709\u52B9\u6841\u6570\u304C\u5C11\u306A\u304F\u306A\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F8B\uFF1A$$0.556",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"li"},"10^7-0.552"),"10^7=0.400*10^5$$"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E38\u3081\u8AA4\u5DEE",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u5207\u6368\u3066\uFF0C\u5207\u4E0A\u3052\uFF0C\u56DB\u6368\u4E94\u5165\u306A\u3069\u3067\u6709\u52B9\u6841\u6570\u672A\u6E80\u306E\u6841\u3092\u524A\u9664\u3059\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u767A\u751F\u3059\u308B\u8AA4\u5DEE"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6253\u5207\u308A\u8AA4\u5DEE(\u622A\u65AD\u8BEF\u5DEE)",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u8A08\u7B97\u7D50\u679C\u304C\u7121\u9650\u5C0F\u6570\u3068\u306A\u308B\u3088\u3046\u306A\u8A08\u7B97\uFF08\u7121\u9650\u7D1A\u6570\u306A\u3069\uFF09\u3092\u9014\u4E2D\u3067\u6253\u3061\u5207\u3063\u305F\u3053\u3068\u306B\u3088\u3063\u3066\u767A\u751F\u3059\u308B\u8AA4\u5DEE\u306E\u3053\u3068")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"論理演算とシフト演算转移操作"},"\u8AD6\u7406\u6F14\u7B97\u3068\u30B7\u30D5\u30C8\u6F14\u7B97(\u8F6C\u79FB\u64CD\u4F5C)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"論理演算"},"\u8AD6\u7406\u6F14\u7B97"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8AD6\u7406\u6F14\u7B97\u306E\u7A2E\u985E\uFF1A\u8AD6\u7406\u7A4D\uFF08AND\uFF09\u3001\u8AD6\u7406\u548C\uFF08OR\uFF09\u3001\u5426\u5B9A\uFF08NOT\uFF09\u3001\u6392\u4ED6\u7684\u8AD6\u7406\u548C\uFF08XOR\uFF09\u3001\u5426\u5B9A\u8AD6\u7406\u7A4D\uFF08NAND\uFF09\u3001\u5426\u5B9A\u8AD6\u7406\u548C\uFF08NOR\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30C9\u30FB\u30E2\u30EB\u30AC\u30F3\u6CD5\u5247(\u5FB7\u6469\u6839\u5B9A\u5F8B)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u57FA\u672C\u56DE\u8DEF\uFF1AAND\u3001OR\u3001NOT\u56DE\u8DEF")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"A AND B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"A OR B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"A XOR B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"A NAND B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"A NOR B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"0")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5426\u5B9A\u8AD6\u7406\u7A4D\u306F\u8AD6\u7406\u7A4D\u306E\u5426\u5B9A\uFF1B\u5426\u5B9A\u8AD6\u7406\u548C\u306F\u8AD6\u7406\u548C\u306E\u5426\u5B9A\uFF1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D3\u30C3\u30C8\u6F14\u7B97\uFF1A\u4E8C\u3064\u306E2\u9032\u6570\u306E\u5BFE\u5FDC\u3059\u308B\u5404\u6841\u305D\u308C\u305E\u308C\u306B\u8AD6\u7406\u6F14\u7B97\u3092\u884C\u3046")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"シフト演算"},"\u30B7\u30D5\u30C8\u6F14\u7B97"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7B97\u8853\u30B7\u30D5\u30C8",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u5148\u982D\u30D3\u30C3\u30C8\u3092\u7B26\u53F7\u3068\u307F\u306A\u3057\u3066\u3001\u7B26\u53F7\u30D3\u30C3\u30C8\u3092\u9664\u3044\u3066\u30B7\u30D5\u30C8\u3092\u884C\u3046"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5DE6\u30B7\u30D5\u30C8\uFF1A\u7A7A\u3044\u305F\u4F4D\u7F6E\u306B\uFF10\u3092\u5165\u308C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5DE6\u30B7\u30D5\u30C8\u306E\u4F8B\uFF1A00000011 -\u5DE62\u30D3\u30C3\u30C8\u30B7\u30D5\u30C8-> 00001100"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53F3\u30B7\u30D5\u30C8\uFF1A\u7A7A\u3044\u305F\u4F4D\u7F6E\u306B\u7B26\u53F7\u30D3\u30C3\u30C8\u3092\u5165\u308C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u53F3\u30B7\u30D5\u30C8\u306E\u4F8B\uFF1A10100000 -\u53F32\u30D3\u30C3\u30C8\u30B7\u30D5\u30C8-> 11101000"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8AD6\u7406\u30B7\u30D5\u30C8\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u5358\u7D14\u306B\u30D3\u30C3\u30C8\u3092\u5DE6\u53F3\u306B\u30B7\u30D5\u30C8\u3057\u3001\u7A7A\u3044\u305F\u4F4D\u7F6E\u306B0\u3092\u5165\u308C\u308B")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"情報量符号化"},"\u60C5\u5831\u91CF\u30FB\u7B26\u53F7\u5316"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"情報量"},"\u60C5\u5831\u91CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u60C5\u5831\u91CF\u306F\u3001\u5BFE\u8C61\u3068\u306A\u308B\u60C5\u5831\u3054\u3068\u306E\u30C7\u30FC\u30BF\u306E\u53D6\u308A\u5F97\u308B\u306E\u30D0\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3(variation)\u306B\u3088\u3063\u3066\u5909\u308F\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D3\u30C3\u30C8\u3068\u30D0\u30A4\u30C8\uFF1A1\u30D0\u30A4\u30C8\uFF1D8\u30D3\u30C3\u30C8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u751F\u8D77\u78BA\u7387(\u4EA7\u72B6\u6982\u7387)\uFF1A\u767A\u751F\u3059\u308B\u3068\u8003\u3048\u3089\u308C\u308B\u30C7\u30FC\u30BF\u306E\u4E88\u6E2C\u78BA\u7387\u3002\u30B5\u30A4\u30B3\u30ED\u306E\u7D50\u679C\u306F\u6700\u4F4E3\u30D3\u30C3\u30C8\u306E\u30C7\u30FC\u30BF\u91CF\u304C\u5FC5\u8981\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u671F\u5F85\u5024\uFF1A\u3042\u308B\u8A66\u884C\u3092\u884C\u3063\u305F\u3068\u304D\u306B\u5F97\u3089\u308C\u308B\u6570\u5024\u306E\u5E73\u5747\u5024\u3002\u30B5\u30A4\u30B3\u30ED\u306E\u671F\u5F85\u5024\u306F3.5\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"符号化编码"},"\u7B26\u53F7\u5316\uFF08\u7F16\u7801\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30E9\u30F3\u30EC\u30F3\u30B0\u30B9\u7B26\u53F7\uFF08\u6E38\u7A0B\u7F16\u7801\uFF09\uFF1A\u540C\u3058\u30D3\u30C3\u30C8\u30D1\u30BF\u30FC\u30F3\u304C\u9023\u7D9A\u3059\u308B\u30C7\u30FC\u30BF\u3092\u3067\u304D\u308B\u3060\u3051\u77ED\u3044\u30D3\u30C3\u30C8\u5217\u3068\u3057\u3066\u8868\u73FE\u3059\u308B\u305F\u3081\u306E\u7B26\u53F7\u5316\u65B9\u5F0F\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30CF\u30D5\u30DE\u30F3\u7B26\u53F7\uFF08\u970D\u592B\u66FC\u7F16\u7801\uFF09\uFF1A\u51FA\u73FE\u983B\u5EA6\u304C\u9AD8\u3044\u3082\u306E\u307B\u3069\u77ED\u3044\u30D3\u30C3\u30C8\u5217\u3067\u8868\u73FE\u3059\u308B\u3002\u4F8B\u3048\u3070\uFF1A\u51FA\u73FE\u983B\u5EA6\u304C\u9AD8\u3044\u5358\u8A9E\u30921\u306B\u3001\u6B21\u306B10\u300111\u2026\u9806\u6B21\u306B\u7B26\u53F7\u5316\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"bnfと逆ポーランド表記法"},"BNF\u3068\u9006\u30DD\u30FC\u30E9\u30F3\u30C9\u8868\u8A18\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"bnfbackus-naur-form-巴科斯-诺尔范式"},"BNF(Backus Naur Form, \u5DF4\u79D1\u65AF-\u8BFA\u5C14\u8303\u5F0F)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"::= \u5DE6\u8FBA\u3092\u53F3\u8FBA\u306E\u3088\u3046\u306B\u5B9A\u7FA9\u3059\u308B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"| \u53C8\u306F\uFF08OR\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F8B\uFF1A<\u6570\u5B57>::=0|1|2|3|4|5|6|7|8|9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F8B\uFF1A<\u82F1\u5B57>::=A|B|C")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"ボーランド表記法波兰表达式"},"\u30DC\u30FC\u30E9\u30F3\u30C9\u8868\u8A18\u6CD5\uFF08\u6CE2\u5170\u8868\u8FBE\u5F0F\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u8868\u8A18\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u6F14\u7B97\u5B50\u306E\u914D\u7F6E"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u7279\u5FB4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{parentName:"tr","align":null},"\u4F8B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u30DD\u30FC\u30E9\u30F3\u30C9\u8868\u8A18\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u524D\u7F6E\u8A18\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6F14\u7B97\u5B50\u3092\u6F14\u7B97\u5BFE\u8C61\u306E\u524D\u306B\u7F6E\u304F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"+ab")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u901A\u5E38\u306E\u8868\u8A18\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u4E2D\u7F6E\u8A18\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6F14\u7B97\u5B50\u3092\u6F14\u7B97\u5BFE\u8C61\u306E\u9593\u306B\u7F6E\u304F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"a+b")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u9006\u30DD\u30FC\u30E9\u30F3\u30C9\u8868\u8A18\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u5F8C\u7F6E\u8A18\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"\u6F14\u7B97\u5B50\u3092\u6F14\u7B97\u5BFE\u8C61\u306E\u5F8C\u308D\u306B\u7F6E\u304F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"ab+")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"データ構造"},"\u30C7\u30FC\u30BF\u69CB\u9020"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"リストlist"},"\u30EA\u30B9\u30C8\uFF08List\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u3044\u304F\u3064\u304B\u306E\u8981\u7D20\u3092\u30C7\u30FC\u30BF\u306E\u5834\u6240\u3092\u793A\u3059\u30DD\u30A4\u30F3\u30BF\uFF08\u6307\u9488\uFF09\u3067\u3064\u306A\u3044\u3067\u69CB\u6210\u3057\u3001\u7269\u7406\u7684\u306A\u4F4D\u7F6E\u3068\u306F\u95A2\u4FC2\u306F\u304F\u3001\u30DD\u30A4\u30F3\u30BF\u306B\u3088\u3063\u3066\u8AD6\u7406\u7684\u306B\u6C7A\u3081\u3089\u308C\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7A2E\u985E\uFF1A\u5358\u65B9\u5411\u30EA\u30B9\u30C8\uFF08\u7DDA\u5F62\u30EA\u30B9\u30C8\uFF09\u3001\u53CC\u65B9\u5411\u30EA\u30B9\u30C8\uFF08\u53CC\u30EA\u30B9\u30C8\uFF09\u3001\u74B0\u72B6\u30EA\u30B9\u30C8")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"スタックstack"},"\u30B9\u30BF\u30C3\u30AF(stack)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1ALIFO(Last-In First-Out\uFF1B\u5F8C\u5165\u308C\u5148\u51FA\u3057)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u64CD\u4F5C\uFF1A\u30D7\u30C3\u30B7\u30E5\uFF08PUSH\uFF1B\u8981\u7D20\u3092\u683C\u7D0D\uFF09\u3001\u30DD\u30C3\u30D7\uFF08POP\uFF1B\u8981\u7D20\u306E\u53C2\u7167\u30FB\u53D6\u308A\u51FA\u3057\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"キューqueue"},"\u30AD\u30E5\u30FC\uFF08queue\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1AFIFO(First-In First-Out\uFF1B\u5148\u5165\u308C\u5148\u51FA\u3057)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u64CD\u4F5C\uFF1A\u30A8\u30F3\u30AD\u30E5\u30FC\uFF08enqueue\uFF1B\u8981\u7D20\u3092\u633F\u5165\uFF09\u3001\u30C7\u30AD\u30E5\u30FC\uFF08dequeue\uFF1B\u8981\u7D20\u306E\u53C2\u7167\u30FB\u524A\u9664\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"木tree"},"\u6728\uFF08tree\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E8C\u5206\u6728\uFF08binary tree\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B8C\u5168\u4E8C\u5206\u6728\uFF1A\u3069\u306E\u7BC0\u3082\u5B50\u306E\u6570\u304C2\u4EE5\u4E0B\u3067\u3042\u308B\u3088\u3046\u306A\u6728\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u63A2\u7D22\u6CD5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5E45\u512A\u5148\u63A2\u7D22\uFF1A\u540C\u3058\u6DF1\u3055\u306E\u7BC0\u3092\u5DE6\u304B\u3089\u53F3\u306B\u63A2\u7D22"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6DF1\u3055\u512A\u5148\u9806\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5148\u884C\u9806\uFF08\u524D\u9806\uFF09\uFF1A\u89AA\u2192\u5DE6\u90E8\u5206\u6728\u2192\u53F3\u90E8\u5206\u6728\u306E\u9806"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E2D\u9593\u9806\uFF08\u9593\u9806\uFF09\uFF1A\u5DE6\u90E8\u5206\u6728\u2192\u89AA\u2192\u53F3\u90E8\u5206\u6728\u306E\u9806"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5F8C\u884C\u9806\uFF08\u5F8C\u9806\uFF09\uFF1A\u5DE6\u90E8\u5206\u6728\u2192\u53F3\u90E8\u5206\u6728\u2192\u89AA\u306E\u9806"))))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4E8C\u5206\u63A2\u7D22\u6728\uFF08binary search tree\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u5DE6\u306E\u5B50\u306E\u8981\u7D20\u306E\u5024 \uFF1C \u3042\u308B\u7BC0\u306E\u8981\u7D20\u306E\u5024 \uFF1C \u53F3\u306E\u5B50\u306E\u8981\u7D20\u306E\u5024"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u64CD\u4F5C\uFF1A\u8FFD\u52A0\u30FB\u524A\u9664"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30D2\u30FC\u30D7\uFF08heap\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5B9A\u7FA9\uFF1A\u3069\u306E\u89AA\u5B50\u3092\u898B\u3066\u3082\u3001\u5FC5\u305A\u305D\u306E\u7BC0\u306E\u5024\u304C\u300C\u89AA\uFF1C\u5B50\u300D\uFF08\u53C8\u306F\u300C\u89AA\uFF1E\u5B50\u300D\uFF09\u3068\u3044\u3046\u95A2\u4FC2\u3092\u4FDD\u3063\u3066\u3044\u308B\u5B8C\u5168\u4E8C\u5206\u6728\u3067\u3042\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7279\u5FB4\uFF1A\u6839\u306E\u7BC0\u306E\u5024\u306F\u6700\u5C0F\u5024\uFF08\u53C8\u306F\u6700\u5927\u5024\uFF09\u3068\u306A\u308B\u3002")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"アルゴリズム"},"\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"###\u3000\u6574\u5217\uFF08Sort\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4EA4\u63DB\u6CD5\uFF08\u30D0\u30D6\u30EB\u30BD\u30FC\u30C8\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A08\u7B97\u6CD5\uFF1A\u4E92\u3044\u306B\u96A3\u308A\u5408\u3046\u30C7\u30FC\u30BF\u3092\u6BD4\u8F03\u3057\u3001\u5927\u5C0F\u95A2\u4FC2\u304C\u9006\u306A\u3089\u5909\u63DB\u3059\u308B\u3068\u3001\u5DE6\u5074\u306B\u6700\u5C0F\u30C7\u30FC\u30BF\u304C\u6765\u308B\u3002\u6B21\u306B\u3001\u5DE6\u5074\u30C7\u30FC\u30BF\u3092\u9664\u304F\u30C7\u30FC\u30BF\u5217\u306B\u5BFE\u3057\u3066\u540C\u3058\u64CD\u4F5C\u3092\u7E70\u308A\u8FD4\u3057\u3001\u30C7\u30FC\u30BF\u304C\u6B8B\u308A\u4E00\u3064\u306B\u306A\u3063\u305F\u3089\u51E6\u7406\u3092\u7D42\u4E86\u3059\u308B\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A08\u7B97\u91CF\uFF1A$$O(n^2)$$"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9078\u629E\u6CD5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A08\u7B97\u6CD5\uFF1A\u6700\u5C0F\u30C7\u30FC\u30BF\u3092\u5DE6\u7AEF\u30C7\u30FC\u30BF\u3068\u4EA4\u63DB\u3059\u308B\u3002\u5DE6\u7AEF\u3092\u9664\u304F\u30C7\u30FC\u30BF\u3092\u7E70\u308A\u8FD4\u3057\u64CD\u4F5C\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A08\u7B97\u91CF\uFF1A$$O(n^2)$$"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u633F\u5165\u6CD5",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A08\u7B97\u6CD5\uFF1A2\u756A\u76EE\u306E\u30C7\u30FC\u30BF\u3092\u53D6\u308A\u51FA\u3057\u3001\u5DE6\u7AEF\u306B\u9069\u5207\u306A\u4F4D\u7F6E\u306B\u633F\u5165\u3059\u308B\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u30AF\u30A4\u30C3\u30AF\u30BD\u30FC\u30C8\uFF08\u4EA4\u63DB\u6CD5\u306E\u6539\u826F\uFF09",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8A08\u7B97\u6CD5\uFF1A\u4E2D\u592E\u30C7\u30FC\u30BF\u3092\u53D6\u308A\u51FA\u3057\u3001\u4EE5\u4E0B\u306E\u30C7\u30FC\u30BF\u3092\u5DE6\u3001\u4EE5\u4E0A\u306E\u30C7\u30FC\u30BF\u3092\u53F3\u3001\u5206\u3051\u3066\u7E70\u308A\u8FD4\u3059\u3002")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"-- end p.82"));};MDXContent.isMDXComponent=true;

/***/ })

}]);