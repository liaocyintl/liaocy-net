"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[2839],{

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

/***/ 29600:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'求若干坐标点最近邻区间分界线:用Python计算Voronoi图',date:new Date('2018-06-14T14:50:17.000Z'),lang:'zh-Hans',tags:['算法 Algorithm','泰森多边形 Voronoi','三角剖分 Delaunay','Python'],categories:['研究 Research','位置数据处理 Spatial Data Processing']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/voronoi","id":"archieved/2018/voronoi","title":"求若干坐标点最近邻区间分界线:用Python计算Voronoi图","description":"问题背景","source":"@site/docs/archieved/2018/20180614-voronoi.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/voronoi","permalink":"/liaocy-net/docs/archieved/2018/voronoi","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180614-voronoi.md","tags":[{"label":"算法 Algorithm","permalink":"/liaocy-net/docs/tags/算法-algorithm"},{"label":"泰森多边形 Voronoi","permalink":"/liaocy-net/docs/tags/泰森多边形-voronoi"},{"label":"三角剖分 Delaunay","permalink":"/liaocy-net/docs/tags/三角剖分-delaunay"},{"label":"Python","permalink":"/liaocy-net/docs/tags/python"}],"version":"current","sidebarPosition":20180614,"frontMatter":{"title":"求若干坐标点最近邻区间分界线:用Python计算Voronoi图","date":"2018-06-14T14:50:17.000Z","lang":"zh-Hans","tags":["算法 Algorithm","泰森多边形 Voronoi","三角剖分 Delaunay","Python"],"categories":["研究 Research","位置数据处理 Spatial Data Processing"]},"sidebar":"tutorialSidebar","previous":{"title":"Win10 Linux 子系统(WSL)缓慢及卡顿的解决方法","permalink":"/liaocy-net/docs/archieved/2018/wslslow"},"next":{"title":"使用Brainjet 系列 IDE (PyCharm, PHPStorm, WebStorm)编写Markdown文档，直接粘贴图片的方法","permalink":"/liaocy-net/docs/archieved/2018/markdownimage"}};var assets={};var toc=[{value:'问题背景',id:'问题背景',level:2},{value:'Voronoi图',id:'voronoi图',level:2},{value:'Voronoi图的Python实现',id:'voronoi图的python实现',level:2},{value:'测试环境',id:'测试环境',level:4},{value:'计算：',id:'计算',level:4},{value:'输入：',id:'输入',level:4},{value:'可视化：',id:'可视化',level:4},{value:'输出：',id:'输出',level:4},{value:'关系',id:'关系',level:4},{value:'题外话：通过Mashgrid计算K-最近邻（kNN）的判别边界',id:'题外话通过mashgrid计算k-最近邻knn的判别边界',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"问题背景"},"\u95EE\u9898\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\df28a744.png",alt:"Fig.1 Voronoi Map",title:"Fig.1 Voronoi Map"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u5730\u7406\u7A7A\u95F4\u6570\u636E\u5904\u7406\u4E2D\u6211\u4EEC\u53EF\u80FD\u9047\u5230\u8FD9\u6837\u7684\u95EE\u9898\uFF1A\n\u5982\u56FE1\u6240\u793A, \u5728\u67D0\u4E00\u533A\u57DF\u4E2D\u6709N\u53EA\u72EE\u5B50(Xn, n > 1)\uFF0C\u6BCF\u53EA\u72EE\u5B50\u90FD\u6709\u81EA\u5DF1\u7684\u5730\u76D8\uFF0C\u4E14\u6BCF\u53EA\u72EE\u5B50\u7684\u5236\u9738\u80FD\u529B\u76F8\u540C\uFF08\u5373\u72EE\u5B50\u548C\u72EE\u5B50\u4E4B\u95F4\u753B\u4E2D\u5782\u7EBF\u800C\u7EDF\u6CBB\uFF09\u3002\n\u76EE\u6807\u662F\u8BA1\u7B97\u6BCF\u53EA\u72EE\u5B50\u5236\u9738\u7684\u533A\u57DF\u548C\u8FB9\u754C\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6B64\u95EE\u9898\u8FD8\u53EF\u4EE5\u63A8\u5E7F\u5230\u98DE\u673A\u573A\u3001\u5730\u94C1\u7AD9\u7BA1\u8F96\u7684\u533A\u57DF\u7B49\u95EE\u9898\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"voronoi图"},"Voronoi\u56FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6B64\u95EE\u9898\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2A\u53EB\u505AVoronoi\u7684\u6570\u5B66\u6A21\u578B\u89E3\u51B3\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u201C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Voronoi\u56FE\u662F\u4E00\u7EC4\u8FDE\u7EED\u591A\u8FB9\u5F62\u7EC4\u6210\uFF0C\u591A\u8FB9\u5F62\u7684\u8FB9\u754C\u662F\u7531\u8FDE\u63A5\u7684\u5782\u76F4\u5E73\u5206\u7EBF\u7EC4\u6210\u3002M \u4E2A\u5728\u5DE5\u5E73\u9762\u4E0A\u6709\u533A\u5219\u7684\u70B9\u3002\u6309\u7167\u6700\u8FD1\u90BB\u539F\u5219\u5212\u5206\u5E73\u9762\uFF0C\u6BCF\u4E00\u4E2A\u70B9\u4E0E\u5B83\u6700\u8FD1\u90BB\u7684\u533A\u57DF\u5173\u8054\uFF0C\u4E0E\u6BCF\u4E2A\u70B9\u76F8\u5173\u8054\u7684\u533A\u57CE(\u6210\u591A\u8FB9\u7528\u662F\u552F\u4E00\u7684\uFF0C\u5B83\u7531\u8FD9\u4E9B\u70B9\u7684\u7A7A\u7F51\u5206\u5E03\u6240\u51B3\u5B9A\u3002\nRef.: \u5218\u8000\u6797\uFF0E\u571F\u5730\u4FE1\u606F\u7CFB\u7EDF\uFF1A\u4E2D\u56FD\u519C\u4E1A\u51FA\u7248\u793E\uFF0C2011"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u201D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5173\u4E8EVoronoi\u56FE\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u53C2\u8003 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://baike.baidu.com/item/voronoi%E5%9B%BE/9772895?fr=aladdin#ref_%5B1%5D_6169546"},"\u767E\u5EA6\u767E\u79D1"),"\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7ED9\u5B9A\u82E5\u5E72\u70B9\u8BA1\u7B97Voronoi\u56FE\u7684\u7B97\u6CD5\uFF0C\u4E00\u822C\u662F\u901A\u8FC7\u53EB\u505A \u201CDelaunay\u4E09\u89D2\u5256\u5206\u201D\u3002\u5173\u4E8E \u201CDelaunay\u4E09\u89D2\u5256\u5206\u201D \u8BF7\u53C2\u8003\u535A\u6587 ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://blog.csdn.net/tuibianyanzi/article/details/51886916"},"voronoi\u56FE\u7684\u548CDelaunay\u4E09\u89D2\u5256\u5206"),"\uFF0C\u8FD9\u91CC\u4E5F\u4E0D\u518D\u8D58\u8FF0\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u91CC\u4E3B\u8981\u4ECB\u7ECDVoronoi\u56FE\u7684Python\u5B9E\u73B0\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"voronoi图的python实现"},"Voronoi\u56FE\u7684Python\u5B9E\u73B0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u53EF\u4EE5\u901A\u8FC7Python\u7684SciPy\u5DE5\u5177\u8F7B\u677E\u8BA1\u7B97Voronoi\u56FE\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.scipy.org/doc/scipy-0.18.1/reference/generated/scipy.spatial.Voronoi.html"},"\u6587\u6863\u70B9\u8FD9\u91CC")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"测试环境"},"\u6D4B\u8BD5\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Python 3.6.1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"SciPy 0.18.1")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"计算"},"\u8BA1\u7B97\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"import numpy as np\nfrom scipy.spatial import Voronoi\n# \u521D\u59CB\u5316\u79CD\u5B50\u70B9\npoints = np.array([[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]])\n# \u8BA1\u7B97Voronoi\u56FE\nvor = Voronoi(points=points)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"输入"},"\u8F93\u5165\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"points : \u79CD\u5B50\u70B9\u96C6\u3002ndarray float\u6570\u7EC4\u3002shape (\u70B9\u6570\u91CF, \u7EF4\u5EA6)\u3002")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"可视化"},"\u53EF\u89C6\u5316\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"from scipy.spatial import voronoi_plot_2d\nimport matplotlib.pyplot as plt\nvoronoi_plot_2d(vor)\nplt.show()\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"输出"},"\u8F93\u51FA\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8F93\u5165\u79CD\u5B50\u70B9[","[0, 0]",", ","[0, 1]",", ","[0, 2]",", ","[1, 0]",", ","[1, 1]",", ","[1, 2]",", ","[2, 0]",", ","[2, 1]",", ","[2, 2]","]\u540E\u8F93\u51FA\u5982\u4E0B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\48895391.png",alt:"\u53EF\u89C6\u5316\u7ED3\u679C",title:"\u53EF\u89C6\u5316\u7ED3\u679C"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\4e419c30.png",alt:"\u5404\u8F93\u51FA\u5143\u7D20",title:"\u5404\u8F93\u51FA\u5143\u7D20"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u56FE\u50CF\u5F15\u7528\u81EA: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://qiita.com/kwi/items/4b7162fbada390501d06"},"\u300Ascipy Voronoi\u300B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\618b1048.png",alt:"\u8F93\u51FA",title:"\u8F93\u51FA"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Voronoi([","[0, 0]",", ","[0, 1]",", ","[0, 2]",", ","[1, 0]",", ","[1, 1]",", ","[1, 2]",", ","[2, 0]",", ","[2, 1]",", ","[2, 2]","])"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"max_bound: \u79CD\u5B50\u70B9\u7684\u6700\u5927\u8FB9\u754C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"min_bound: \u79CD\u5B50\u70B9\u7684\u6700\u5C0F\u8FB9\u754C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ndim: \u79CD\u5B50\u70B9\u7EF4\u5EA6"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"npoints: \u79CD\u5B50\u70B9\u6570\u91CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"point_region: \u79CD\u5B50\u70B9\u6240\u5BF9\u5E94\u7684\u533A\u57DF\u4E0B\u6807"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"points: \u79CD\u5B50\u70B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"regions: Voronoi\u533A\u57DF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ridge_dict: \u5206\u754C\u7EBF\u5B57\u5178"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ridge_points: \u5206\u754C\u7EBF\u4EA4\u70B9"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ridge_vertices: "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"vertices: \u5206\u754C\u7EBF\u4EA4\u70B9\uFF0C\u9876\u70B9")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"关系"},"\u5173\u7CFB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5173\u7CFB\u8BF4\u660E\u7684\u65F6\u5019\u4ECEridge_points\u5F00\u59CB\uFF0C\u5982\u4E0B\u56FE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\7c3f17f8.png",alt:"\u8F93\u51FA",title:"\u8F93\u51FA"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728ridge_points\u4E2D\uFF0C\u6BCF\u4E00\u4E2Aridge_index\u5BF9\u5E94\u4E24\u4E2Apoint_index\uFF0C\u8FD9\u4E24\u4E2A\u70B9\u7684\u8FDE\u7EBF\u5C31\u662F\u76F8\u90BB\u70B9\u7684\u8FDE\u63A5\u7EBF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728points\u91CC\u9762\uFF0C\u6BCF\u4E00\u4E2Apoint_index\u5BF9\u5E94\u4E00\u4E2Apoint_coords")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"ridge_points = vor.ridge_points\npoints = vor.points\n\nfor ridge_point in ridge_points:\n    plt.plot(points[ridge_point][:,0], points[ridge_point][:,1], \"-\", label=\"neighbor line\")\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\a712ca62.png",alt:"\u76F8\u90BB\u70B9\u7684\u8FDE\u63A5\u7EBF",title:"\u76F8\u90BB\u70B9\u7684\u8FDE\u63A5\u7EBF"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{"start":3},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728point_region\u91CC\u9762\uFF0C\u6BCF\u4E00\u4E2Apoint_index\u5BF9\u5E94\u4E00\u4E2Aregion_index"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728regions\u91CC\u9762\uFF0C\u6BCF\u4E00\u4E2Aregion_index\u5BF9\u5E94n\u5404vertice_index"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728vertices\u91CC\u9762\uFF0C\u6BCF\u4E00\u4E2Avertice_index\u5BF9\u5E94\u4E00\u4E2Avertice_coords")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"point_region = vor.point_region\nregions = vor.regions\nvertices = vor.vertices\nfor point_index, region_index in enumerate(point_region):\n    point = points[point_index]\n    vertice_index = regions[region_index]\n    for i in vertice_index:\n        if i != -1: #\u6CE8\u610F\u9664\u53BBvertice_index\u4E3A0\u7684\u60C5\u51B5\uFF0C\u8868\u793A\u8BE5\u79CD\u5B50\u70B9\u4F4D\u4E8E\u8FB9\u754C\n            print(vertices[i])\n            plt.plot(vertices[i], \"o\")\n    print(\"\")\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{"start":6},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u5728ridge_vertices\u91CC\u9762\uFF0C\u6BCF\u4E00\u4E2Aridge_index\u5BF9\u5E94\u4E24\u4E2Avertice_index")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"题外话通过mashgrid计算k-最近邻knn的判别边界"},"\u9898\u5916\u8BDD\uFF1A\u901A\u8FC7Mashgrid\u8BA1\u7B97K-\u6700\u8FD1\u90BB\uFF08kNN\uFF09\u7684\u5224\u522B\u8FB9\u754C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Voronoi\u53EF\u4EE5\u8BA4\u4E3A\u662F\u5F53k=1\u65F6\u7684kNN\u6A21\u578B\uFF0C\u6C42\u5176\u5224\u522B\u533A\u57DF\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5F53k > 1\u65F6\uFF0C\u4E00\u822C\u662F\u5C06\u533A\u57DF\u5206\u5272\u6210\u82E5\u5E72MashGrid\uFF0C\u518D\u5206\u522B\u5BF9\u6BCF\u4E2AMashGrid\u5F52\u4E3A\u5176\u4E2D\u4E00\u7C7B\u8FDB\u884C\u53EF\u89C6\u5316\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BF7\u53C2\u8003\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://stackoverflow.com/questions/45075638/graph-k-nn-decision-boundaries-in-matplotlib"},"Graph k-NN decision boundaries in Matplotlib")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:"\\uploads\\postimgs\\6cb415bf.png",alt:"k-NN decision boundaries",title:"k-NN decision boundaries"}));};MDXContent.isMDXComponent=true;

/***/ })

}]);