"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[4322],{

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

/***/ 20845:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'日语书信模板（学校篇）',date:new Date('2018-12-14T15:53:22.000Z'),lang:'zh-Hans',tags:['日语 Japanese','写作 Writing'],categories:['日语 Japanese','写作 Writing']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/12/japaneselettercollege","id":"archieved/2018/12/japaneselettercollege","title":"日语书信模板（学校篇）","description":"给老师的书信","source":"@site/docs/archieved/2018/12/14-japaneselettercollege.md","sourceDirName":"archieved/2018/12","slug":"/archieved/2018/12/japaneselettercollege","permalink":"/liaocy-net/docs/archieved/2018/12/japaneselettercollege","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/12/14-japaneselettercollege.md","tags":[{"label":"日语 Japanese","permalink":"/liaocy-net/docs/tags/日语-japanese"},{"label":"写作 Writing","permalink":"/liaocy-net/docs/tags/写作-writing"}],"version":"current","sidebarPosition":14,"frontMatter":{"title":"日语书信模板（学校篇）","date":"2018-12-14T15:53:22.000Z","lang":"zh-Hans","tags":["日语 Japanese","写作 Writing"],"categories":["日语 Japanese","写作 Writing"]},"sidebar":"tutorialSidebar","previous":{"title":"用Apache运行Wordpress时 设置permalink后发生404未相应的处理方法","permalink":"/liaocy-net/docs/archieved/2018/12/apachewordpresspermalink404"},"next":{"title":"论文笔记 The Design and Implementation of XiaoIce, an Empathetic Social Chatbot","permalink":"/liaocy-net/docs/archieved/2018/12/28-1812.08989"}};var assets={};var toc=[{value:'给老师的书信',id:'给老师的书信',level:3},{value:'场景1：给老师递交材料，老师不在，于是你把材料放在秘书那里，之后用邮件通知老师。',id:'场景1给老师递交材料老师不在于是你把材料放在秘书那里之后用邮件通知老师',level:4},{value:'场景2：老师帮你修改了论文，给老师回信',id:'场景2老师帮你修改了论文给老师回信',level:4}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"给老师的书信"},"\u7ED9\u8001\u5E08\u7684\u4E66\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"场景1给老师递交材料老师不在于是你把材料放在秘书那里之后用邮件通知老师"},"\u573A\u666F1\uFF1A\u7ED9\u8001\u5E08\u9012\u4EA4\u6750\u6599\uFF0C\u8001\u5E08\u4E0D\u5728\uFF0C\u4E8E\u662F\u4F60\u628A\u6750\u6599\u653E\u5728\u79D8\u4E66\u90A3\u91CC\uFF0C\u4E4B\u540E\u7528\u90AE\u4EF6\u901A\u77E5\u8001\u5E08\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u53C2\u8003\u8D44\u6599\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1164039786"},"\u5148\u751F\u304C\u4E0D\u5728\u6642\u306E\u30E1\u30E2\u306B\u3064\u3044\u3066\u2026\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6A21\u677F\uFF1A"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"XX\u5148\u751F\n\nXX\u3067\u3059\u3002\u3000#\u6211\u662FXX\n\u304A\u4E16\u8A71\u306B\u306A\u3063\u3066\u304A\u308A\u307E\u3059\u3002 #\u627F\u8499\u60A8\u7684\u5173\u7167\n\n\u5148\u307B\u3069\u3001\u5148\u751F\u306E\u7814\u7A76\u5BA4\u306B\u4F3A\u3044\u307E\u3057\u305F\u304C\u3001 #\u521A\u624D\u62DC\u8BBF\u8001\u5E08\u7684\u5B9E\u9A8C\u5BA4\n\u3054\u4E0D\u5728\u3067\u3057\u305F\u306E\u3067\u3001 #\u7531\u4E8E\u60A8\u4E0D\u5728\nXX\u306E\u8CC7\u6599\u3092\u79D8\u66F8\u5BA4\u306B\u304A\u6E21\u3057\u3057\u307E\u3057\u305F\u3002 #\u6211\u5C06\u8D44\u6599\u9012\u4EA4\u7ED9\u79D8\u4E66\u5BA4\u4E86\n\n\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u81F4\u3057\u307E\u3059\u3002 #\u8BF7\u591A\u5173\u7167\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"场景2老师帮你修改了论文给老师回信"},"\u573A\u666F2\uFF1A\u8001\u5E08\u5E2E\u4F60\u4FEE\u6539\u4E86\u8BBA\u6587\uFF0C\u7ED9\u8001\u5E08\u56DE\u4FE1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u53C2\u8003\u8D44\u6599\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://townwork.net/magazine/skill/50153/#target4"},"\u6559\u6388\u3078\u306E\u30E1\u30FC\u30EB\u306E\u66F8\u304D\u65B9\u3068\u6587\u4F8B\u304C\u4E38\u308F\u304B\u308A\uFF01 \u8FD4\u4FE1\u6642\u306E\u30DD\u30A4\u30F3\u30C8\u3082\u89E3\u8AAC"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6CE8\u610F\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u90AE\u4EF6\u540D\u7528 Re:xxx \u5373\u53EF\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u8001\u5E08\u53D1\u7684\u90AE\u4EF6\u5FC5\u987B\u8981\u56DE\u590D\u3002"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6A21\u677F\uFF1A"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"XX\u5148\u751F\n\nXX\u3067\u3059\u3002\n\u3054\u6307\u5C0E\u3044\u305F\u3060\u304D\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\n\n\u304A\u5FD9\u3057\u3044\u6642\u671F\u3067\u3001\u8AD6\u6587\u306B\u3054\u6307\u5C0E\u3092\u3044\u305F\u3060\u304D\u307E\u3057\u3066\u3001\n\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002\n\nXX\u5148\u751F\u3054\u6559\u6388\u3044\u305F\u3060\u3044\u305F\u5185\u5BB9\u3092\u8FFD\u52A0\u3057\u3001\u8AD6\u6587\u539F\u7A3F\u3092\u76F4\u3057\u307E\u3059\u3002\n\n\u4ECA\u5F8C\u3068\u3082\u3054\u6307\u5C0E\u306E\u307B\u3069\u3001\u4F55\u5352\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u81F4\u3057\u307E\u3059\u3002\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);