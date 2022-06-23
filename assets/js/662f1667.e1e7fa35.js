"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[9095],{

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

/***/ 4605:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'Docker常用命令笔记',date:new Date('2018-07-17T11:33:17.000Z'),lang:'zh-Hans',tags:['Docker'],categories:['开发 Development','Docker']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/dockercommon","id":"archieved/2018/dockercommon","title":"Docker常用命令笔记","description":"参考资料","source":"@site/docs/archieved/2018/20180717-dockercommon.md","sourceDirName":"archieved/2018","slug":"/archieved/2018/dockercommon","permalink":"/liaocy-net/docs/archieved/2018/dockercommon","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/20180717-dockercommon.md","tags":[{"label":"Docker","permalink":"/liaocy-net/docs/tags/docker"}],"version":"current","sidebarPosition":20180717,"frontMatter":{"title":"Docker常用命令笔记","date":"2018-07-17T11:33:17.000Z","lang":"zh-Hans","tags":["Docker"],"categories":["开发 Development","Docker"]},"sidebar":"tutorialSidebar","previous":{"title":"在 Ubuntu 18.04 上安装部署 Airflow 1.9.0","permalink":"/liaocy-net/docs/archieved/2018/airflowdeploy"},"next":{"title":"Git子项目的创建与克隆","permalink":"/liaocy-net/docs/archieved/2018/gitsubmodule"}};var assets={};var toc=[{value:'参考资料',id:'参考资料',level:2},{value:'全局基本',id:'全局基本',level:2},{value:'查看Docker的占用空间',id:'查看docker的占用空间',level:3},{value:'镜像基本',id:'镜像基本',level:2},{value:'检索Ubuntu有关的镜像',id:'检索ubuntu有关的镜像',level:3},{value:'拉取Ubuntu 18.04到本地',id:'拉取ubuntu-1804到本地',level:3},{value:'列出已拉取到本地的镜像',id:'列出已拉取到本地的镜像',level:3},{value:'删除全部虚悬镜像 (dangling image)',id:'删除全部虚悬镜像-dangling-image',level:3},{value:'删除ID以5e8开头的镜像',id:'删除id以5e8开头的镜像',level:3},{value:'删除所有仓库名为ubuntu的镜像（Windows和Ubuntu的命令形式不一样）',id:'删除所有仓库名为ubuntu的镜像windows和ubuntu的命令形式不一样',level:3},{value:'容器基本',id:'容器基本',level:2},{value:'启动并运行ubuntu 16.04容器：',id:'启动并运行ubuntu-1604容器',level:3},{value:'启动一个nginx网页服务器容器',id:'启动一个nginx网页服务器容器',level:3},{value:'停止容器',id:'停止容器',level:3},{value:'查看Docker容器状态：',id:'查看docker容器状态',level:3},{value:'接入已启动的容器命令行',id:'接入已启动的容器命令行',level:3},{value:'查看容器的改动',id:'查看容器的改动',level:3},{value:'将容器的存储层保存下来成为镜像',id:'将容器的存储层保存下来成为镜像',level:3},{value:'删除容器',id:'删除容器',level:3},{value:'网络基本',id:'网络基本',level:2},{value:'显示现有网络',id:'显示现有网络',level:3},{value:'创建一个新的Docker网络',id:'创建一个新的docker网络',level:3},{value:'运行容器时加入网络',id:'运行容器时加入网络',level:3},{value:'查看指定容器网址',id:'查看指定容器网址',level:3},{value:'容器例子',id:'容器例子',level:2},{value:'容器迁移',id:'容器迁移',level:2},{value:'DockerFile脚本',id:'dockerfile脚本',level:2},{value:'以启动Ubuntu18.04服务器上的Azkaban为例：',id:'以启动ubuntu1804服务器上的azkaban为例',level:3},{value:'在Ubuntu18.04上安装LMAP（Linux, MySQL, Apache, PHP）',id:'在ubuntu1804上安装lmaplinux-mysql-apache-php',level:3},{value:'使用脚本构建镜像',id:'使用脚本构建镜像',level:3},{value:'查看容器日志',id:'查看容器日志',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://legacy.gitbook.com/book/yeasy/docker_practice/details"},"Docker Practice"),"\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://www.jb51.net/article/118396.htm"},"Docker\u5982\u4F55\u56FA\u5B9AIP\u8BBE\u7F6E\u7684\u65B9\u6CD5")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"全局基本"},"\u5168\u5C40\u57FA\u672C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"查看docker的占用空间"},"\u67E5\u770BDocker\u7684\u5360\u7528\u7A7A\u95F4"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker system df\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"镜像基本"},"\u955C\u50CF\u57FA\u672C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"检索ubuntu有关的镜像"},"\u68C0\u7D22Ubuntu\u6709\u5173\u7684\u955C\u50CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"docker search ubuntu\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"拉取ubuntu-1804到本地"},"\u62C9\u53D6Ubuntu 18.04\u5230\u672C\u5730"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"docker pull ubuntu:18.04\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"列出已拉取到本地的镜像"},"\u5217\u51FA\u5DF2\u62C9\u53D6\u5230\u672C\u5730\u7684\u955C\u50CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"-a \u663E\u793A\u4E2D\u95F4\u5C42\u955C\u50CF "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"ubuntu \u663E\u793A\u4ED3\u5E93\u540D\u4E3Aubuntu\u7684\u955C\u50CF "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"-q \u5217\u51FA\u955C\u50CFID "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"--format \u663E\u793AID+\u4ED3\u5E93\u540D+\u6807\u7B7E "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"--digests \u955C\u50CF\u6458\u8981")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker image ls\n$ docker image ls -a\n$ docker image ls ubuntu\n$ docker image ls -q\n$ docker image ls --format \"{{.ID}}: {{.Repository}}\\t{{.Tag}}\"\n$ docker image ls --digests\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"删除全部虚悬镜像-dangling-image"},"\u5220\u9664\u5168\u90E8\u865A\u60AC\u955C\u50CF (dangling image)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"docker image prune\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"删除id以5e8开头的镜像"},"\u5220\u9664ID\u4EE55e8\u5F00\u5934\u7684\u955C\u50CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker image rm 5e8\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"删除所有仓库名为ubuntu的镜像windows和ubuntu的命令形式不一样"},"\u5220\u9664\u6240\u6709\u4ED3\u5E93\u540D\u4E3Aubuntu\u7684\u955C\u50CF\uFF08Windows\u548CUbuntu\u7684\u547D\u4EE4\u5F62\u5F0F\u4E0D\u4E00\u6837\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker image rm (docker image ls -q ubuntu)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"容器基本"},"\u5BB9\u5668\u57FA\u672C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"启动并运行ubuntu-1604容器"},"\u542F\u52A8\u5E76\u8FD0\u884Cubuntu 16.04\u5BB9\u5668\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"-it \u4EA4\u4E92\u64CD\u4F5C+\u7EC8\u7AEF "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"--rm \u9000\u51FA\u65F6\u5220\u9664\u5BB9\u5668 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"bash \u542F\u52A8\u4EA4\u4E92\u5F0FShell")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker run -it --rm ubuntu:18.04 bash\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"启动一个nginx网页服务器容器"},"\u542F\u52A8\u4E00\u4E2Anginx\u7F51\u9875\u670D\u52A1\u5668\u5BB9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"--name \u542F\u52A8\u540E\u5BB9\u5668\u540D\u79F0"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"80:80 \u5BBF\u4E3B\u7AEF\u53E3\uFF1A\u5BB9\u5668\u7AEF\u53E3\u6620\u5C04"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"-d \u5B88\u62A4\u7A0B\u5E8F\u540E\u53F0\u8FD0\u884C\u6A21\u5F0F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"nginx \u8981\u542F\u52A8\u7684\u955C\u50CF\u540D")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker run --name webserver -d -p 80:80 -p 8080:8080 nginx\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"停止容器"},"\u505C\u6B62\u5BB9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker container stop webserver\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"查看docker容器状态"},"\u67E5\u770BDocker\u5BB9\u5668\u72B6\u6001\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"-a\uFF1A\u5305\u62EC\u7EC8\u6B62\u7684\u5BB9\u5668")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker ps\n$ docker ps -a\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"接入已启动的容器命令行"},"\u63A5\u5165\u5DF2\u542F\u52A8\u7684\u5BB9\u5668\u547D\u4EE4\u884C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"$ docker exec -it ubuntu:18.04 bash\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"查看容器的改动"},"\u67E5\u770B\u5BB9\u5668\u7684\u6539\u52A8"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"docker diff webserver\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"将容器的存储层保存下来成为镜像"},"\u5C06\u5BB9\u5668\u7684\u5B58\u50A8\u5C42\u4FDD\u5B58\u4E0B\u6765\u6210\u4E3A\u955C\u50CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"--author \u4F5C\u8005"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"--message \u4FE1\u606F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"webserver \u4FDD\u5B58\u4E3A\u955C\u50CF\u540D"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"nginx:v2 \u4ED3\u5E93\u548C\u6807\u7B7E")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"$ docker commit --author \"Chenyi Liao <info@liaocy.net>\" --message \"practice\" webserver ubuntu:v2\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"删除容器"},"\u5220\u9664\u5BB9\u5668"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker container rm webserver\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"网络基本"},"\u7F51\u7EDC\u57FA\u672C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"显示现有网络"},"\u663E\u793A\u73B0\u6709\u7F51\u7EDC"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7F51\u7EDC\u4E00\u89C8\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"$ docker network ls\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"创建一个新的docker网络"},"\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684Docker\u7F51\u7EDC"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Ref.: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.docker.com/engine/reference/commandline/network_create/"},"Docker Network Create")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u547D\u540D\u4E3Amy-net\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"-d\uFF1A\u6307\u5B9ADocker\u7684\u7F51\u7EDC\u7C7B\u578B\uFF0C\u6709bridge\u548COverlay")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker network create -d bridge my-net\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8BBE\u5B9A\u7F51\u7EDC\u5730\u5740\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"$ docker network create \\\n  --driver=bridge \\\n  --subnet=172.28.0.0/16 \\\n  --ip-range=172.28.5.0/24 \\\n  --gateway=172.28.5.254 \\\n  my-net\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"运行容器时加入网络"},"\u8FD0\u884C\u5BB9\u5668\u65F6\u52A0\u5165\u7F51\u7EDC"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4EC5\u52A0\u5165\u7F51\u7EDC\uFF0C\u81EA\u52A8\u5206\u914D\u5730\u5740\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker run -it --rm --name ubuntu --network my-net ubuntu bash\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u52A0\u5165\u7F51\u7EDC\u5E76\u6307\u5B9A\u5730\u5740\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker run -it --rm --name ubuntu --network my-net --ip 172.28.5.66 ubuntu bash\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"查看指定容器网址"},"\u67E5\u770B\u6307\u5B9A\u5BB9\u5668\u7F51\u5740"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"# Linux:\ndocker inspect <container id> | grep \"IPAddress\"\n\n# Windows:\ndocker inspect --format '{{ .NetworkSettings.IPAddress }}' <container id>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"容器例子"},"\u5BB9\u5668\u4F8B\u5B50"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},"\u542F\u52A8\u4E00\u4E2Aubuntu\u5BB9\u5668\uFF0C\u52A0\u5165docker-net\u7F51\u7EDC\uFF0C\u6620\u5C04SSH\u7AEF\u53E3\uFF0C\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u542F\u52A8")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker run --name my-container -dit --network docker-net -p 2000:22 ubuntu:18.04 /bin/bash\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u56FA\u5B9AIP\ndocker run --name my-container -dit --network host -ip 172.17.0.1 -p 2000:22 ubuntu:18.04 /bin/bash")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},"\u6620\u5C04\u672C\u5730\u6587\u4EF6\u5939"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker run --name my-container -dit -v d:/:/data ubuntu:18.04 /bin/bash\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"容器迁移"},"\u5BB9\u5668\u8FC1\u79FB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5EFA\u7ACB\u5BB9\u5668\u5FEB\u7167\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"docker commit -p 30b8f18f20b4 container-backup\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5BFC\u51FA\u955C\u50CF\u5230\u6587\u4EF6\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"docker save -o bk.tar container-backup\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5BFC\u5165\u6587\u4EF6\u5230\u955C\u50CF\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"docker load < bk.tar\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"dockerfile脚本"},"DockerFile\u811A\u672C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"以启动ubuntu1804服务器上的azkaban为例"},"\u4EE5\u542F\u52A8Ubuntu18.04\u670D\u52A1\u5668\u4E0A\u7684Azkaban\u4E3A\u4F8B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"FROM ubuntu:18.04\nMAINTAINER Chenyi Liao <info@liaocy.net>\nRUN apt-get update \\\n    && apt-get install -y openjdk-8-jdk \\\n    && apt-get install -y git \\\n    && cd /opt/ \\\n    && git clone https://github.com/azkaban/azkaban.git \\\n    && cd azkaban \\\n    && ./gradlew build -x test installDist\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"在ubuntu1804上安装lmaplinux-mysql-apache-php"},"\u5728Ubuntu18.04\u4E0A\u5B89\u88C5LMAP\uFF08Linux, MySQL, Apache, PHP\uFF09"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"FROM ubuntu:18.04\nMAINTAINER Chenyi Liao <info@liaocy.net>\nRUN apt-get update \\\n    && apt install -y apache2 \\\n    && apt install -y php7.2 \\\n    && apt install -y mysql-server-5.7 \\\n    && service mysql start \\\n    && service mysql apache2\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u203B",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"http://tracpath.com/works/devops/how-to-install-azkaban/"},"Azkaban\u5B89\u88C5\u53C2\u8003\u8D44\u6599")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"使用脚本构建镜像"},"\u4F7F\u7528\u811A\u672C\u6784\u5EFA\u955C\u50CF"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728 Dockerfile \u6587\u4EF6\u6240\u5728\u76EE\u5F55\u6267\u884C\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"docker build -t azkaban:v3 .\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"查看容器日志"},"\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-text"},"$ docker logs <container>\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);