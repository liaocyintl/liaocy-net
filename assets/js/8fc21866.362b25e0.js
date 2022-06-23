"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[6860],{

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

/***/ 37981:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'Python透过SSH访问数据库',date:new Date('2018-10-30T16:57:22.000Z'),lang:'zh-Hans',tags:['SSH','Python','MySQL'],categories:['开发 Development','Python']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/10/pythonsshdb","id":"archieved/2018/10/pythonsshdb","title":"Python透过SSH访问数据库","description":"介绍","source":"@site/docs/archieved/2018/10/30-pythonsshdb.md","sourceDirName":"archieved/2018/10","slug":"/archieved/2018/10/pythonsshdb","permalink":"/liaocy-net/docs/archieved/2018/10/pythonsshdb","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/10/30-pythonsshdb.md","tags":[{"label":"SSH","permalink":"/liaocy-net/docs/tags/ssh"},{"label":"Python","permalink":"/liaocy-net/docs/tags/python"},{"label":"MySQL","permalink":"/liaocy-net/docs/tags/my-sql"}],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Python透过SSH访问数据库","date":"2018-10-30T16:57:22.000Z","lang":"zh-Hans","tags":["SSH","Python","MySQL"],"categories":["开发 Development","Python"]},"sidebar":"tutorialSidebar","previous":{"title":"在Ubuntu上配置PPTP","permalink":"/liaocy-net/docs/archieved/2018/10/ubuntupptp"},"next":{"title":"在Ubuntu上配置MariaDB并设置通过密码访问","permalink":"/liaocy-net/docs/archieved/2018/10/ubuntumariadb"}};var assets={};var toc=[{value:'介绍',id:'介绍',level:2},{value:'参考资料',id:'参考资料',level:2},{value:'环境',id:'环境',level:2},{value:'代码',id:'代码',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"介绍"},"\u4ECB\u7ECD"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u900F\u8FC7SSH\u901A\u9053\u8BBF\u95EE\u670D\u52A1\u5668\u91CC\u7684\u6570\u636E\u5E93\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5728\u5F88\u591ADBMS-GUI\u4E0A\u90FD\u6709\u96C6\u6210\uFF0C\n\u7136\u800C\u5982\u4F55\u901A\u8FC7Python\u4EE3\u7801\u5B9E\u73B0\u5462\uFF1F\n\u672C\u6587\u8FDB\u884C\u8BA8\u8BBA\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://qiita.com/seisyu1985/items/e910d85b2ca6f30db4f2"},"Python\u3067SSH\u7D4C\u7531\u306EMySQL\u30A2\u30AF\u30BB\u30B9\u3092\u3057\u3066\u3001WordPress\u306E\u6295\u7A3F\u60C5\u5831\u3092\u53D6\u5F97\u3059\u308B"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"环境"},"\u73AF\u5883"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Ubuntu: 18.04 LTS"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"MariaDB: 5.5")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"代码"},"\u4EE3\u7801"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u9996\u5148\u9700\u8981python\u5B89\u88C5\u4E86sshtunnel\u5E93\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"pip install sshtunnel\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"# -*- coding: utf-8 -*-\n# \u4F7F\u7528SSH\u96A7\u9053\u7684\u5305\nfrom sshtunnel import SSHTunnelForwarder\n# \u8FDE\u63A5\u6570\u636E\u5E93\u7528\u7684\u5305\nimport pymysql.cursors\n\n# SSH\u76F8\u5173\u8BBE\u5B9A\nwith SSHTunnelForwarder(\n    (\"SSH\u670D\u52A1\u5668\u7684IP\u5730\u5740\", 22\uFF08SSH\u670D\u52A1\u7684\u7AEF\u53E3\u53F7\uFF09),\n        ssh_host_key=\"SSH\u4E3B\u673A\u94A5\u5319\uFF08\u5982\u679C\u6CA1\u6709\u4F7F\u7528\u7684\u8BDD\u5199None\uFF09\",\n        ssh_pkey=\"SSH\u5BC6\u94A5\u8DEF\u5F84\",\n        ssh_username=\"\u5728\u670D\u52A1\u5668\u4E0A\u7684\u7528\u6237\u540D\uFF08\u5982\u679C\u6CA1\u6709\u7684\u8BDD\u5199None\uFF09\",\n        ssh_password=\"\u5728\u670D\u52A1\u5668\u4E0A\u7684\u5BC6\u7801 \u6216\u8005 \u5BC6\u94A5\u7684\u6307\u7EB9\u5BC6\u7801\uFF08\u6CA1\u6709\u7684\u8BDD\u5199None\uFF09\",\n        remote_bind_address=(\"127.0.0.1\uFF08\u7ED1\u5B9A\u4EE5\u540E\u8FDE\u63A5\u6570\u636E\u5E93\u7684\u5730\u5740\uFF09\", 3306\uFF08MySQL\u6570\u636E\u5E93\u7684\u7AEF\u53E3\uFF09)\n    ) as ssh:\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4E4B\u540E\u5C31\u53EF\u4EE5\u6B63\u5E38\u5730\u64CD\u4F5C\u6570\u636E\u5E93\u4E86\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"    # \u63A5\u4E0A\u9762\u7684\u4EE3\u7801\n\n    conn = pymysql.connect(host='127.0.0.1', # \u7531\u4E8E\u662F\u900F\u8FC7SSH\u8FDB\u884C\u672C\u5730\u8FDE\u63A5\n            user='\u6570\u636E\u5E93\u7528\u6237\u540D',\n            password='\u6570\u636E\u5E93\u5BC6\u7801',\n            db='\u6570\u636E\u5E93\u540D\u79F0',\n            charset='utf8',\n            cursorclass=pymysql.cursors.DictCursor)\n    # \u6267\u884Cselect\n    cursor = conn.cursor()\n    sql = \"show tables\"\n    cursor.execute(sql)\n\n    # \u8BFB\u51FASelect\u7684\u7ED3\u679C\n    rets = cursor.fetchall()\n    for r in rets:\n        print(r)\n\n    # \u5207\u65AD\u8FDE\u63A5\n    conn.close()\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);