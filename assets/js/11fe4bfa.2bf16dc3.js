"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[7169],{

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

/***/ 55557:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'用区块链和智能合约做遗产继承',date:new Date('2018-08-27T13:27:21.000Z'),lang:'zh-Hans',tags:['区块链 Block Chain','以太坊 Ethereum','智能合约 Smart Contract'],categories:['研究 Research','区块链 Block Chain']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/08/blockchainheritage","id":"archieved/2018/08/blockchainheritage","title":"用区块链和智能合约做遗产继承","description":"参考资料","source":"@site/docs/archieved/2018/08/27-blockchainheritage.md","sourceDirName":"archieved/2018/08","slug":"/archieved/2018/08/blockchainheritage","permalink":"/liaocy-net/docs/archieved/2018/08/blockchainheritage","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/08/27-blockchainheritage.md","tags":[{"label":"区块链 Block Chain","permalink":"/liaocy-net/docs/tags/区块链-block-chain"},{"label":"以太坊 Ethereum","permalink":"/liaocy-net/docs/tags/以太坊-ethereum"},{"label":"智能合约 Smart Contract","permalink":"/liaocy-net/docs/tags/智能合约-smart-contract"}],"version":"current","sidebarPosition":27,"frontMatter":{"title":"用区块链和智能合约做遗产继承","date":"2018-08-27T13:27:21.000Z","lang":"zh-Hans","tags":["区块链 Block Chain","以太坊 Ethereum","智能合约 Smart Contract"],"categories":["研究 Research","区块链 Block Chain"]},"sidebar":"tutorialSidebar","previous":{"title":"相同的长字符串PHP比较结果不同的解决办法","permalink":"/liaocy-net/docs/archieved/2018/08/phpstrcompare"},"next":{"title":"Android 朗读字符串","permalink":"/liaocy-net/docs/archieved/2018/09/androidspeaker"}};var assets={};var toc=[{value:'参考资料',id:'参考资料',level:2},{value:'源代码',id:'源代码',level:2},{value:'测试环境',id:'测试环境',level:2},{value:'介绍',id:'介绍',level:2},{value:'团队成员',id:'团队成员',level:2},{value:'用法',id:'用法',level:2},{value:'流程',id:'流程',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://medium.com/@amkurian/interacting-with-ethereum-smart-contracts-through-web3-js-e0efad17977"},"Interacting With Ethereum Smart Contracts Through Web3.js"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"源代码"},"\u6E90\u4EE3\u7801"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://github.com/liaocyintl/writelastwordonblockchain"},"\u6E90\u4EE3\u7801Github"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"测试环境"},"\u6D4B\u8BD5\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Node JS")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"介绍"},"\u4ECB\u7ECD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BE5\u9879\u76EE\u662F\u5C5E\u4E8EOPERA\uFF08\u4EBA\u9593\u6A5F\u68B0\u5354\u594F\uFF092018\u9ED1\u5BA2\u677E\u7684Demo\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7531\u4E8E\u533A\u5757\u94FE\u5177\u6709\u4E0D\u53EF\u7BE1\u6539\u6027\uFF0C\u6211\u4EEC\u8003\u8651\u5C06\u533A\u5757\u94FE\u7528\u4E8E\u9057\u4EA7\u7EE7\u627F\u95EE\u9898\u3002\n\u7528\u6237\u53EF\u4EE5\u5C06\u4ED6\u4EEC\u7684\u9057\u8A00\u4E0A\u8F7D\u5230\u533A\u5757\u94FE\u4E0A\uFF0C\u5F53\u4ED6\u4EEC\u53BB\u4E16\u4EE5\u540E\uFF0C\u4ED6\u4EEC\u7684\u9057\u8A00\u548C\u8D44\u4EA7\u4F1A\u901A\u8FC7\u667A\u80FD\u5408\u7EA6\u81EA\u52A8\u8F6C\u79FB\u5230\u6307\u5B9A\u7528\u6237\u8D26\u6237\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"团队成员"},"\u56E2\u961F\u6210\u5458"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Daikichi Mukoyama, Wataru Nagai, Yuji Hayashi, Toshiyuki Aso, Kanta Kurazumi, Chenyi Liao"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"用法"},"\u7528\u6CD5"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u514B\u9686\u6E90\u4EE3\u7801:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"git clone https://github.com/liaocyintl/writelastwordonblockchain.git\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7528Node JS\u5B89\u88C5\u5E76\u8FD0\u884C:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"npm install\nnode app.js\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7528\u6D4F\u89C8\u5668\u6D4F\u89C8\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-test"},"http://localhost:3000\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"流程"},"\u6D41\u7A0B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(63153)/* ["default"] */ .Z),width:"790",height:"546"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u2191\u7528\u6237\u7559\u4E0B\u4ED6\u4EEC\u7684\u9057\u8A00\u548C\u53BB\u4E16\u4EE5\u540E\u8D44\u4EA7\u8F6C\u79FB\u7684\u5730\u5740\u548C\u8F6C\u79FB\u8D44\u4EA7\u6570\u91CF\u3002\n\u70B9\u51FB\u84DD\u8272\u6309\u94AE\uFF0C\u8FD9\u4E9B\u6570\u636E\u5C06\u88AB\u4E0A\u8F7D\u5230\u533A\u5757\u94FE\uFF08\u4EE5\u592A\u574A\uFF09\u4E0A\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\uFF08\u8981\u5148\u5B89\u88C5\u914D\u7F6EMetaMask\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(64753)/* ["default"] */ .Z),width:"860",height:"583"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u2191\u8FD9\u91CC\u6A21\u62DF\u4E00\u4E2A\u751F\u7269\u4F20\u611F\u5668\u3002\u7528\u6765\u76D1\u89C6\u4EBA\u7C7B\u5FC3\u8DF3\u5E76\u7ED9\u51FA\u5BA2\u89C2\u7684\u6B7B\u4EA1\u5224\u65AD\u3002\n\u4F60\u53EF\u4EE5\u70B9Die\u6309\u94AE\u6765\u6A21\u62DF\u8FD9\u4E2A\u4EBA\u6B7B\u4EA1\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(4449)/* ["default"] */ .Z),width:"902",height:"715"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u2191\u8FD9\u4E2A\u4EBA\u6B7B\u4EA1\u540E\uFF0C\u4ED6\u7684\u9057\u8A00\u5C06\u88AB\u8F6C\u79FB\u5230\u6307\u5B9A\u7684\u7528\u6237\u5730\u5740\u3002\n\u4F46\u6211\u4EEC\u6CA1\u6709\u5B9E\u73B0\u8D44\u4EA7\u7684\u8F6C\u79FB\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"智能合约"},"\u667A\u80FD\u5408\u7EA6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-solidity"},"pragma solidity ^0.4.17;\ncontract Heritage {\n    string lastWord;\n    address to;\n    uint money;\n    \n    function writeLastWords(string x, address y, uint z) public {\n        lastWord = x;\n        to = y;\n        money = z;\n    }\n    \n    function loadLastWords() public view returns (string x) {\n        return lastWord;\n    }\n}\n")));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 63153:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/30081eed-813cba2211b8ea9587e4ccbb811cc9e0.png");

/***/ }),

/***/ 64753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/7dbac290-af8935e70d09d8323eb660a4c3405087.png");

/***/ }),

/***/ 4449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/f036419c-ab6009a81bfa72ad2d3d0b51e4c7f569.png");

/***/ })

}]);