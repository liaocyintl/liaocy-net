"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[7054],{

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

/***/ 397:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'论文笔记 The Design and Implementation of XiaoIce, an Empathetic Social Chatbot',date:new Date('2018-12-28T15:53:22.000Z'),lang:'zh-Hans',tags:['研究 Research','机器学习 Machine Learning','小冰 XiaoIce'],categories:['研究 Research','机器学习 Machine Learning']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/12/28-1812.08989","id":"archieved/2018/12/28-1812.08989","title":"论文笔记 The Design and Implementation of XiaoIce, an Empathetic Social Chatbot","description":"背景","source":"@site/docs/archieved/2018/12/28-1812.08989.md","sourceDirName":"archieved/2018/12","slug":"/archieved/2018/12/28-1812.08989","permalink":"/liaocy-net/docs/archieved/2018/12/28-1812.08989","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/12/28-1812.08989.md","tags":[{"label":"研究 Research","permalink":"/liaocy-net/docs/tags/研究-research"},{"label":"机器学习 Machine Learning","permalink":"/liaocy-net/docs/tags/机器学习-machine-learning"},{"label":"小冰 XiaoIce","permalink":"/liaocy-net/docs/tags/小冰-xiao-ice"}],"version":"current","frontMatter":{"title":"论文笔记 The Design and Implementation of XiaoIce, an Empathetic Social Chatbot","date":"2018-12-28T15:53:22.000Z","lang":"zh-Hans","tags":["研究 Research","机器学习 Machine Learning","小冰 XiaoIce"],"categories":["研究 Research","机器学习 Machine Learning"]},"sidebar":"tutorialSidebar","previous":{"title":"日语书信模板（学校篇）","permalink":"/liaocy-net/docs/archieved/2018/12/japaneselettercollege"},"next":{"title":"在Jupyter里用断点（Break Point）调试Python程序","permalink":"/liaocy-net/docs/archieved/2019/01/jupyterbreakpoint"}};var assets={};var toc=[{value:'背景',id:'背景',level:2},{value:'Abstract',id:'abstract',level:2},{value:'Section 1 Introduction',id:'section-1-introduction',level:2},{value:'Section 2 Design Principle',id:'section-2-design-principle',level:2},{value:'2.1 IQ + EQ + 人格',id:'21-iq--eq--人格',level:3},{value:'2.2 Social Chatbot Metric: CPS 评价标准',id:'22-social-chatbot-metric-cps-评价标准',level:3},{value:'2.3 Social Chat as Hierarchical Decision-Making 将聊天看作分层决策',id:'23-social-chat-as-hierarchical-decision-making-将聊天看作分层决策',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"背景"},"\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672C\u5468\u91CD\u78C5\u8BBA\u6587\uFF1A\nL. Zhou, J.F. Gao, D, Li, and H.Y. Shum, \"The Design and Implementation of XiaoIce, an Empathetic Social Chatbot Li\", arXiv:1812.08989v1, "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://arxiv.org/abs/1812.08989"},"\u94FE\u63A5")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"abstract"},"Abstract"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u4ED6\u4EEC\u8BF4\u5C0F\u51B0\u5177\u6709IQ\u548CEQ\u7684\u8BBE\u8BA1")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u804A\u5929\u4F7F\u7528\u9A6C\u5361\u7F57\u592B\u51B3\u7B56\u8FC7\u7A0B Markov Decision Processes (MDPs)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5FAE\u8F6F\u7ED9\u7684\u8BC4\u4EF7\u6807\u51C6\u53EB\u505A Conversation-turns Per Session (CPS: \u6BCF\u4F1A\u8BDD\u5BF9\u8BDD\u8F6C\u6362)"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://www.chuangyejia.com/article-10539906.html"},"\u53C2\u8003")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u610F\u601D\u662F\"\u804A\u5929\u673A\u5668\u4EBA\u4E0E\u7528\u6237\u5728\u5BF9\u8BDD\u573A\u666F\u4E2D\u7684\u5E73\u5747\u5BF9\u8BDD\u8F6C\u6362\u6B21\u6570\"\uFF0C\u53EF\u80FD\u610F\u601D\u662F\u8BF4\u804A\u7684\u8D8A\u957F\u5427\uFF0C\u4F1A\u4E0D\u4F1A\u804A\u5929\uFF1F\u90A3\u79CD\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5C0F\u51B0\u662F2014\u5E74\u53D1\u5E03\u7684\uFF0C\u79EF\u7D2F\u4E866\u4EBF6\u5343\u4E07\u804A\u5929\u6570\u636E\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5E73\u5747CPS\u5C45\u7136\u80FD\u8FBE\u523023\uFF0C\u53EF\u89C1\u4EBA\u4EEC\u6709\u591A\u95F2\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"section-1-introduction"},"Section 1 Introduction"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5C0F\u51B0\u82F1\u6587\u540D\u53EB XiaoIce")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5728\u4E94\u4E2A\u56FD\u5BB6\u843D\u5730 \u4E2D\u56FD \u65E5\u672C \u7F8E\u56FD \u5370\u5EA6 \u5370\u5EA6\u5C3C\u897F\u4E9A\uFF0C\u540D\u5B57\u5404\u4E0D\u76F8\u540C\uFF0C\u6BD4\u5982\u5728\u65E5\u672C\u53EB Rinna")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u8FDB\u9A7B\u8D85\u8FC740\u4E2A\u5E73\u53F0\uFF0CWechat Facebook LINE\u5565\u7684")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u76EE\u7684\u662F\u548C\u4EBA\u7C7B\u5EFA\u7ACB\u957F\u671F\u7684\u611F\u60C5\u94FE\u63A5\u3002\u7136\u540E\u4E3E\u4E86\u4E2A\u4F8B\u5B50\uFF0C\u5C31\u662F\u4E00\u4E2A\u4EBA\u7C7B\u8DDF\u5C0F\u51B0\u7684\u804A\u5929\u5427\uFF0C\u521A\u5F00\u59CB\u7684\u65F6\u5019\u5076\u5C14\u804A\u4E00\u804A\uFF0C\u5230\u4E86\u7B2C\u4E5D\u5468\u5C31\u65E0\u8BDD\u4E0D\u8C08\u4E86\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5C0F\u51B0\u91C7\u7528\u4E00\u4E2A\"\u60C5\u611F\u690D\u5165\u8BA1\u7B97\uFF08empathetic computing\uFF09\"\u6846\u67B6\uFF0C\u6240\u4EE5\u80FD\u591F\u4E86\u89E3\u4EBA\u7684\u611F\u53D7\u3002\u5F53\u4E00\u4E2A\u4EBA\u7C7B\u559C\u6B22\u4ED6\u548C\u5C0F\u51B0\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u6211\u4EEC\u5C31\u8BA4\u4E3A\u8FD9\u4E2A\u673A\u5668\u662F\u80FD\u591F\"\u60C5\u611F\u690D\u5165\u7684\"\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"section-2-design-principle"},"Section 2 Design Principle"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"21-iq--eq--人格"},"2.1 IQ + EQ + \u4EBA\u683C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"IQ\uFF1A\u5305\u62EC\uFF1A\u77E5\u8BC6\u4E0E\u8BB0\u5FC6\u80FD\u529B\uFF0C\u56FE\u50CF\u4E0E\u81EA\u7136\u8BED\u8A00\u7406\u89E3\uFF0C\u63A8\u7406\uFF0CGeneration\uFF08\u751F\u6210\u8BDD\u8BED\uFF1F\uFF09\uFF0C\u63A8\u6D4B\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u8FC7\u53BB\u4E94\u5E74\u5C0F\u51B0\u5F00\u53D1\u4E86230\u9879\u6280\u80FD\uFF08\u56DE\u7B54\u95EE\u9898\uFF0C\u63A8\u8350\u7535\u5F71\u7B49\uFF09")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"EQ\uFF1A\u5171\u9E23\u548C\u793E\u4EA4\u80FD\u529B\u3002\u80FD\u591F\u7406\u89E3\u4EBA\u7C7B\u7684\u611F\u53D7\u3002\u53EF\u4EE5\u6362\u4F4D\u601D\u8003\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u5BF9\u8BDD\u4F8B\u5B50\uFF1A"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(81133)/* ["default"] */ .Z),width:"944",height:"396"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u4E2A\u5F88\u5389\u5BB3\u4E86\uFF0C\u5C0F\u51B0\u8BF4\u6BCF\u4E00\u53E5\u8BDD\u90FD\u77E5\u9053\u8FD9\u4E00\u53E5\u8BDD\u7684\u6F5C\u5728\u8BED\u8A00\u529F\u80FD\u3002\n\u6BD4\u5982 unconscious \u95F2\u804A\uFF1B Drive \u9A7E\u9A6D\u5BF9\u8BDD\uFF0C\u8F6C\u79FB\u8BDD\u9898\uFF1B Active Listener \u4E3B\u52A8\u8046\u542C\uFF1B Question \u63D0\u95EE\uFF1B Affirmative \u9644\u548C \u7B49\u7B49\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4EBA\u683C\uFF1A\u5C0F\u51B0\u7684\u4EBA\u683C\u8BBE\u5B9A\u662F\u4E00\u4F4D18\u5C81\u7684\u59D1\u5A18\u3002\u6709\u540C\u60C5\u5FC3\uFF0C\u6148\u7231\uFF0C\u5E7D\u9ED8\u3002\u4E0D\u4EFB\u6027\uFF0C\u53EA\u663E\u793A\u5979\u7684\u624D\u667A\u548C\u521B\u9020\u6027\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"22-social-chatbot-metric-cps-评价标准"},"2.2 Social Chatbot Metric: CPS \u8BC4\u4EF7\u6807\u51C6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5FAE\u8F6F\u5B9A\u4E49\u4E86\u4E00\u4E2AConversation-turns Per Session (CPS\uFF0C\u6BCF\u4F1A\u8BDD\u5BF9\u8BDD\u8F6C\u6362)\u7528\u6765\u8BC4\u4EF7\u804A\u5929\u673A\u5668\u4EBA\u7684\u6027\u80FD\uFF0C\u5176\u610F\u4E49\u662F\u6BCF\u573A\u804A\u5929\u4E2D\u5E73\u5747\u7684\u5BF9\u8BDD\u6B21\u6570\u3002CPS\u8D8A\u9AD8\uFF0C\u5219\u804A\u5929\u673A\u5668\u4EBA\u7684\u6027\u80FD\u8D8A\u597D")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"23-social-chat-as-hierarchical-decision-making-将聊天看作分层决策"},"2.3 Social Chat as Hierarchical Decision-Making \u5C06\u804A\u5929\u770B\u4F5C\u5206\u5C42\u51B3\u7B56"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(18205)/* ["default"] */ .Z),width:"1028",height:"770"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E0A\u56FE\u662F\u8BF4\u5C0F\u51B0\u53EF\u4EE5\u91C7\u7528\u591A\u6837\u5316\u7684\u804A\u5929\u6A21\u578B\u4FDD\u6301\u7528\u6237\u5174\u8DA3\u3002\n\u6BD4\u5982\uFF0C\u5728\u7B2C1\u884C\u4F7F\u7528\"\u57FA\u672C\u804A\u5929\u6A21\u578B\"\uFF1B\u5728\u7B2C4\u884C\u7528\"\u97F3\u4E50\u804A\u5929\u6A21\u578B\"\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u9898\uFF1B\u5728\u7B2C15\u884C\u4F7F\u7528\"\u97F3\u4E50\u63D0\u4F9B\u6280\u80FD\"\uFF1A\u5728\u7B2C18\u884C\u4F7F\u7528\"\u8BA2\u7968\u6280\u80FD\"\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u5C0F\u51B0\u91C7\u7528\u4E00\u79CD\u5206\u5C42\u7684\u51B3\u7B56\u673A\u5236\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u9876\u5C42\u5904\u7406\uFF1A\u9009\u62E9\u804A\u5929\u6A21\u578B\uFF08\u95EE\u7B54\u6A21\u578B\uFF0C\u8BA2\u7968\u6A21\u578B\u7B49\u7B49\uFF09\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u4F4E\u5C42\u5904\u7406\uFF1A\u53D7\u9876\u5C42\u63A7\u5236\u5E76\u4EA7\u751F\u804A\u5929\u7247\u6BB5\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8FD9\u79CD\u51B3\u7B56\u673A\u5236\u5728\u6570\u5B66\u4E0A\u662F\u901A\u8FC7",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},"\u9A6C\u5C14\u53EF\u592B\u51B3\u7B56\u5904\u7406\uFF08Markov Decision Processes\uFF09"),"\u5B9E\u73B0\u7684\u3002\u5728\u6BCF\u4E00\u4E2A\u5BF9\u8BDD\u4E2D\uFF0C\u673A\u5668\u4EBA\u89C2\u5BDF\u5F53\u524D\u72B6\u6001\uFF0C\u7136\u540E\u9009\u62E9\u4E00\u4E2A\u6280\u80FD\u5F62\u6210\u4E00\u4E2A\u56DE\u590D\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u672A\u5B8C\u5F85\u7EED"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 81133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/3c1d3749-167f7fb33e247b3b22ed9816e113ffcd.png");

/***/ }),

/***/ 18205:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/bc1b4ef0-5984764f526462c7dc50690ba86e4337.png");

/***/ })

}]);