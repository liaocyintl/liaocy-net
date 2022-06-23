"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[2722],{

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

/***/ 57833:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'在 Ubuntu 18.04 上安装部署 Airflow 1.9.0',date:new Date('2018-07-14T16:33:00.000Z'),lang:'zh-Hans',tags:['Ubuntu','Airflow','Python','数据挖掘 Data Mining','Data Pipeline & ETL'],categories:['开发 Development','Ariflow']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/airflowdeploy","id":"archieved/2018/airflowdeploy","title":"在 Ubuntu 18.04 上安装部署 Airflow 1.9.0","description":"问题背景","source":"@site/docs/archieved/2018/20180714-airflowdeploy.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/airflowdeploy","permalink":"/liaocy-net/docs/archieved/2018/airflowdeploy","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180714-airflowdeploy.md","tags":[{"label":"Ubuntu","permalink":"/liaocy-net/docs/tags/ubuntu"},{"label":"Airflow","permalink":"/liaocy-net/docs/tags/airflow"},{"label":"Python","permalink":"/liaocy-net/docs/tags/python"},{"label":"数据挖掘 Data Mining","permalink":"/liaocy-net/docs/tags/数据挖掘-data-mining"},{"label":"Data Pipeline & ETL","permalink":"/liaocy-net/docs/tags/data-pipeline-etl"}],"version":"current","sidebarPosition":20180714,"frontMatter":{"title":"在 Ubuntu 18.04 上安装部署 Airflow 1.9.0","date":"2018-07-14T16:33:00.000Z","lang":"zh-Hans","tags":["Ubuntu","Airflow","Python","数据挖掘 Data Mining","Data Pipeline & ETL"],"categories":["开发 Development","Ariflow"]},"sidebar":"tutorialSidebar","previous":{"title":"在Ubuntu 16.04 上部署微软机器学习服务器","permalink":"/liaocy-net/docs/archieved/2018/ubuntuwindowsmlserver"},"next":{"title":"Docker常用命令笔记","permalink":"/liaocy-net/docs/archieved/2018/dockercommon"}};var assets={};var toc=[{value:'问题背景',id:'问题背景',level:2},{value:'环境',id:'环境',level:2},{value:'解决方案',id:'解决方案',level:2},{value:'使用pip安装Airflow',id:'使用pip安装airflow',level:2},{value:'在守护程序中后台运行Airflow',id:'在守护程序中后台运行airflow',level:2},{value:'常见问题',id:'常见问题',level:2},{value:'Airflow中无法添加用户',id:'airflow中无法添加用户',level:3},{value:'结果和感想',id:'结果和感想',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"问题背景"},"\u95EE\u9898\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Apache Airflow \u662FAirbnb\u516C\u53F8\u5F00\u6E90\u7684\uFF0C\u662F\u7528 Python \u5B9E\u73B0\u7684\u4EFB\u52A1\u7BA1\u7406\u3001\u8C03\u5EA6\u3001\u76D1\u63A7\u5DE5\u4F5C\u6D41\u7684\u5E73\u53F0","[1]","\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u56E0\u4F9D\u8C03\u5EA6\u8D56\u4E8E crontab\uFF0CAirflow \u76EE\u524D\u53EA\u652F\u6301\u5728\u5B89\u88C5\u5728Linux\u7CFB\u7EDF\u5E73\u53F0\u3002\nAirflow\u53EF\u4EE5\u7528\u505Adata pipeline\u548C Extract, Transform, Load\uFF08ETL\uFF09\uFF0C\u6D88\u606F\u961F\u5217\u7B49\u76D1\u63A7\u3002\n\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u5C06Airflow 1.9.0 \u90E8\u7F72\u5728 Ubuntu 18.04 LTS \u5E73\u53F0\u4E0A\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"[1][\u53C2\u8003\u8D44\u6599\uFF1AAirflow 1.8 \u5DE5\u4F5C\u6D41\u5E73\u53F0\u642D\u5EFA]","(",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://blog.csdn.net/kk185800961/article/details/78431484"},"https://blog.csdn.net/kk185800961/article/details/78431484"),")"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"环境"},"\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Ubuntu 18.04 LTS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Python 3.6.5 + pip"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Airflow 1.9.0 (20180714\u6700\u65B0)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"解决方案"},"\u89E3\u51B3\u65B9\u6848"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://airflow.apache.org/start.html"},"\u5B98\u65B9\u6587\u6863")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"使用pip安装airflow"},"\u4F7F\u7528pip\u5B89\u88C5Airflow"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"root\u767B\u5F55")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"sudo su\ncd\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u542F\u7528\u6D4B\u8BD5\u7F51\u9875\u670D\u52A1\u5668")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# airflow\u9700\u8981\u4E00\u4E2A\u5BB6\u76EE\u5F55\uFF08home\uFF09, \u9ED8\u8BA4\u4E3A~/airflow,\n# \u4F60\u4E5F\u53EF\u4EE5\u628A\u5B83\u6539\u6210\u4F60\u5E0C\u671B\u7684\u76EE\u5F55\n# (\u53EF\u9009\u9879\u76EE)\nexport AIRFLOW_HOME=~/airflow\n\n# \u4F7F\u7528pip\u5B89\u88C5Airflow\npip install apache-airflow\n\n# \u521D\u59CB\u5316\u6570\u636E\u5E93\nairflow initdb\n\n# \u5F00\u542FWeb\u670D\u52A1\uFF0C\u9ED8\u8BA4\u7AEF\u53E38080\nairflow webserver -p 8080\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"启动服务器",src:(__webpack_require__(40971)/* ["default"] */ .Z),width:"629",height:"154"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7F51\u9875\u670D\u52A1\u5668\u5DF2\u7ECF\u542F\u52A8\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u6D4B\u8BD5\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"网页服务器已启动",src:(__webpack_require__(13403)/* ["default"] */ .Z),width:"1119",height:"560"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7F51\u9875\u80FD\u591F\u6B63\u5E38\u6253\u5F00\u8BC1\u660E\u670D\u52A1\u5668\u6B63\u5E38"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"在守护程序中后台运行airflow"},"\u5728\u5B88\u62A4\u7A0B\u5E8F\u4E2D\u540E\u53F0\u8FD0\u884CAirflow"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://site.clairvoyantsoft.com/installing-and-configuring-apache-airflow/"},"\u53C2\u8003\u6863\u68481")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/apache/incubator-airflow/tree/master/scripts/systemd"},"\u53C2\u8003\u6863\u68482")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6CE8\u610F\uFF1A\u7531\u4E8E\u7248\u672C\u548C\u73AF\u5883\u4E0D\u540C\uFF0C\u5B9E\u9645\u6267\u884C\u6B65\u9AA4\u548C\u53C2\u8003\u6863\u6848\u7565\u6709\u4E0D\u540C\uFF0C\u8BF7\u8BFB\u8005\u4E3E\u4E00\u53CD\u4E09\u5730\u7406\u89E3\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"root\u767B\u5F55")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"sudo su\ncd\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u521B\u5EFAairflow\u7528\u6237\u548Cairflow\u7528\u6237\u7EC4")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"adduser airflow\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u521D\u59CB\u5316\u6570\u636E\u6587\u4EF6")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"su airflow\nairflow initdb\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u521B\u5EFA\u7528\u6237airflow\u5E76\u52A0\u5165\u7528\u6237\u7EC4airflow\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"创建用户airflow并加入用户组airflow",src:(__webpack_require__(84916)/* ["default"] */ .Z),width:"477",height:"89"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u628Aairflow\u7684\u4EE3\u7801\u4ECEgithub\u4E0A\u514B\u9686\u4E0B\u6765")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"git clone https://github.com/apache/incubator-airflow.git\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u90E8\u7F72\u670D\u52A1\u6587\u4EF6")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# \u5B9A\u4F4D\u5230\u670D\u52A1\u6587\u4EF6\ncd incubator-airflow/scripts/systemd/\n\n# \u5EFA\u7ACBAirflow\u53EF\u6267\u884C\u6587\u4EF6\u7684\u8F6F\u8FDE\u63A5\nln -s /usr/local/bin/airflow /bin/airflow\n\n# \u5EFA\u7ACB\u7EBF\u7A0B\u5B58\u653E\u6587\u4EF6\u7684\u76EE\u5F55\u5E76\u4FEE\u6539\u6743\u9650\nmkdir /run/airflow\nchmod 0775 /run/airflow/\nchown airflow:airflow /run/airflow/\n\n# \u90E8\u7F72airflow.conf\ncp airflow.conf /etc/tmpfiles.d/\n\n# \u90E8\u7F72airflow\u6587\u4EF6\nmkdir /etc/sysconfig\ncp airflow /etc/sysconfig\n\n# \u914D\u7F6Eairflow-*.service\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u5B9A\u4F60\u60F3\u8BA9\u5B88\u62A4\u8FDB\u7A0B\u542F\u52A8\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4\uFF0C\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528\u9ED8\u8BA4\u7684airflow\u7528\u6237\ncp airflow-*.service /etc/systemd/system/\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u542F\u52A8\u5B88\u62A4\u8FDB\u7A0B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# \u542F\u52A8\u7F51\u9875\u670D\u52A1\u5668\nservice airflow-webserver start\n# \u542F\u52A8\u540E\u53F0\u670D\u52A1\nservice airflow-worker start\n# \u542F\u52A8\u5B9A\u65F6\u670D\u52A1\nservice airflow-scheduler start\n# \u542F\u52A8Flower\u670D\u52A1\uFF08\u53EF\u9009\uFF09\nservice airflow-flower start\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u7EC8\u6B62\u5B88\u62A4\u8FDB\u7A0B")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"# \u7EC8\u6B62\u7F51\u9875\u670D\u52A1\u5668\nservice airflow-webserver stop\n# \u7EC8\u6B62\u540E\u53F0\u670D\u52A1\nservice airflow-worker stop\n# \u7EC8\u6B62\u5B9A\u65F6\u670D\u52A1\nservice airflow-scheduler stop\n# \u7EC8\u6B62Flower\u670D\u52A1\nservice airflow-flower stop\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u6D4B\u8BD5\u670D\u52A1\n\u6D4F\u89C8\u5668\u8F93\u5165\u7F51\u5740\uFF0C\u7AEF\u53E3\u53F78080\uFF0C\u7F51\u9875\u663E\u793A\u6B63\u5E38\uFF1A\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"守护进程运行正常",src:(__webpack_require__(81026)/* ["default"] */ .Z),width:"829",height:"486"}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"常见问题"},"\u5E38\u89C1\u95EE\u9898"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"airflow中无法添加用户"},"Airflow\u4E2D\u65E0\u6CD5\u6DFB\u52A0\u7528\u6237"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u73B0\u8C61\uFF1A\u5728\u7F51\u9875\u4E2D\u6DFB\u52A0\u7528\u6237(Admin -> User -> Create)\u65F6\u51FA\u73B0Ooops.\u9519\u8BEF\u9875\u9762")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"现象",src:(__webpack_require__(50854)/* ["default"] */ .Z),width:"798",height:"604"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u539F\u56E0\uFF1Asqlalchemy\u7248\u672C\u8FC7\u9AD8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\u89E3\u51B3\u65B9\u6CD5\uFF1A\u964D\u7EA7sqlalchemy\u7248\u672C")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"pip3 install 'sqlalchemy>=1.1.15, <1.2.0'\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"结果和感想"},"\u7ED3\u679C\u548C\u611F\u60F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E4B\u540E\u5199\u4E00\u4E9B\u5173\u4E8EAirflow\u914D\u7F6E\u7684\u6587\u7AE0\u3002"));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 50854:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/1815a952-0c2e5bb760870017fab3293bfe0a8759.png");

/***/ }),

/***/ 81026:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/a5700957-d65c77a79689cbb0fddc434912fe4027.png");

/***/ }),

/***/ 13403:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/b167208b-19f10c5adb5ced1bfe702d802586bf3f.png");

/***/ }),

/***/ 40971:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnUAAACaCAYAAADPer4qAAAiIUlEQVR42u2duY9dtRfHEUIghNgXsYt9XyQ2CRCkoECiQgiJoaWEFglIOiSKtJCGJg1VRDcFEkmZjjIVXVJNM5lm/oH70xnJkTk/+/jYvve9e9/9FB8l897z9W5/77F9fNNNN900bJo777xzePfdd4ePPvroP7z11lvNPP744828/PLLzTz22GMu7rrrrmEbZQ0AAACrYfOCTou5NYg64eGHHx7uvffe4fbbb190o5E8PP/888Orr756UgYvvfTSCeH/zz333PDkk0+e1DUdDAAAYEdE3T///DOcO3fu5P8333xz0kK3FlGneeSRR4YHHnhguO+++4a77757+O2334br168PZ86ccZfvqVOnhn///Xc4Pj4+Qco7VQfh+/39/ar6k7RImn755ZfhwQcfHD744IMqPv300+Hvv/+uypMHyYcg+b9y5cqoz5f2enBwMOzt7TW191DWod3Lc+R58pnUlaR57gODlKeU6xLSugSsPhj34dr+WwoLAIi6yUSdZaVbo6jLpefNN988EXoBsYzdc889N/4WIfjCCy8Mzz777PDMM8+c/Bv+/8033wxff/31jc/l//KZ/F/CfPXVVydi66GHHrqBPO/+++8/ebb8K3/L52+//fbw/vvvD0888cQNakVd4Pfffx9VeIV2JYJJJrUWATY2koarV69m87kkoYSoG/cFJBZc8ZioX0rk8/i3PWEBYIWESfH06dM3rAlh0IgtNfJ5ynqRe4uMrROBn3/+GVHnEHUeesoqFmm1tIq6jz/+ePjjjz+6LGKpNhXwWsDi9mq19dTzgnVQ0L/Rz9XPLgmlXD+KJ/G43DyTtydsyLO2EIe0nj9/3tX3U+UVvtdptcacUL6xJUpbYnNpLtVR70uElEWwitVYvHU9xHnU9SFplb9DWfeEBYAVi7rUYKCtIHpS0gNwahKJPxOLE6JunaJO+PXXX/8zwbYuc8btULfB2mXW1KSfE18Sj3x+4cKFrOi0rIbWc3P9SD5PCTNPnkth5d+Q/7CMF34fhFMQDbqutAUpJb7Ds3Q5W2OOLqPUmJNLs6eOekRdEJGpeL3tTFtzYxEanh/Xf09YAFipqIsHYOutPn5rTr1BpywI8SBzyy23DB9++CGibqWi7vvvvx/FahK3s55JLCfC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");

/***/ }),

/***/ 84916:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/png;base64,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");

/***/ })

}]);