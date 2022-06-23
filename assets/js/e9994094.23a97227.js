"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[8683],{

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

/***/ 59820:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'Android 朗读字符串',date:new Date('2018-09-15T18:44:22.000Z'),lang:'zh-Hans',tags:['安卓 Android','TextToSpeech'],categories:['开发 Development','安卓 Android']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2018/09/androidspeaker","id":"archieved/2018/09/androidspeaker","title":"Android 朗读字符串","description":"背景","source":"@site/docs/archieved/2018/09/20180915-androidspeaker.md","sourceDirName":"archieved/2018/09","slug":"/archieved/2018/09/androidspeaker","permalink":"/liaocy-net/docs/archieved/2018/09/androidspeaker","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2018/09/20180915-androidspeaker.md","tags":[{"label":"安卓 Android","permalink":"/liaocy-net/docs/tags/安卓-android"},{"label":"TextToSpeech","permalink":"/liaocy-net/docs/tags/text-to-speech"}],"version":"current","sidebarPosition":20180915,"frontMatter":{"title":"Android 朗读字符串","date":"2018-09-15T18:44:22.000Z","lang":"zh-Hans","tags":["安卓 Android","TextToSpeech"],"categories":["开发 Development","安卓 Android"]},"sidebar":"tutorialSidebar","previous":{"title":"用区块链和智能合约做遗产继承","permalink":"/liaocy-net/docs/archieved/2018/08/blockchainheritage"},"next":{"title":"Python 计算给定值在给定高斯分布中的概率","permalink":"/liaocy-net/docs/archieved/2018/09/calprobinnormaldistribution"}};var assets={};var toc=[{value:'背景',id:'背景',level:2},{value:'参考资料',id:'参考资料',level:2},{value:'让Android朗读文字',id:'让android朗读文字',level:2},{value:'将Speaker作为全局变量加入Application',id:'将speaker作为全局变量加入application',level:2},{value:'在Activity测试朗读',id:'在activity测试朗读',level:2},{value:'感想',id:'感想',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"背景"},"\u80CC\u666F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5728\u5F00\u53D1\u4E00\u4E9BHandsfree\u7684\u5B89\u5353\u5E94\u7528\u7684\u65F6\u5019\uFF0C\u5E38\u5E38\u9700\u8981\u7CFB\u7EDF\u81EA\u52A8\u6717\u8BFB\u4E00\u4E9B\u5B57\u7B26\u4E32\uFF0C\u4F8B\u5982\u201CSystem activated\u201D\u7B49\u7B49\u3002\n\u672C\u6587\u901A\u8FC7\u4F7F\u7528android.speech.tts.TextToSpeech\u6765\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://stackoverflow.com/questions/2929562/register-application-class-in-manifest"},"Register Application class in Manifest?")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://stackoverflow.com/questions/30706780/texttospeech-deprecated-speak-function-in-api-level-21"},"TextToSpeech : deprecated speak function in API Level 21"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"让android朗读文字"},"\u8BA9Android\u6717\u8BFB\u6587\u5B57"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u7C7BSpeaker.java\u6765\u5B9E\u73B0\u6717\u8BFB\u529F\u80FD\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-Java"},"package net.liaocy.smartcar.biz;\n\nimport android.app.Application;\nimport android.speech.tts.TextToSpeech;\nimport android.util.Log;\n\nimport java.util.LinkedList;\nimport java.util.Locale;\nimport java.util.Queue;\n\npublic class Speaker{\n\n    private TextToSpeech speech;\n    private final String TAG = \"Speaker\";\n\n    public Speaker(Application context){\n        super();\n        //init speech\n        this.speech = new TextToSpeech(context, new TextToSpeech.OnInitListener() {\n            @Override\n            public void onInit(int status) {\n                // TODO Auto-generated method stub\n                if (status == TextToSpeech.SUCCESS) {\n                    int result = speech.setLanguage(Locale.ENGLISH);\n                    if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {\n                        Log.e(TAG, \"Not support this language.\");\n                    } else {\n                        Log.i(TAG, \"Speaker activated!\");\n                    }\n                }\n            }\n        });\n        //init speech -- end\n    }\n\n    // \u5728\u524D\u6587\u6717\u8BFB\u5B8C\u4E4B\u540E\uFF0C\u6717\u8BFBtext\u4E2D\u7684\u5185\u5BB9\n    public void Speak(String text){\n        this.speech.speak(text, TextToSpeech.QUEUE_ADD, null, null);\n    }\n    \n    // \u5373\u4F7F\u524D\u6587\u6CA1\u6709\u6717\u8BFB\u5B8C\uFF0C\u4E5F\u5F3A\u5236\u6717\u8BFBtext\u4E2D\u7684\u5185\u5BB9\n    public void SpeakNow(String text){\n        this.speech.speak(text, TextToSpeech.QUEUE_FLUSH, null, null);\n    }\n\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6E90\u4EE3\u7801\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/liaocyintl/SmartCar/blob/master/app/src/main/java/net/liaocy/smartcar/biz/Speaker.java"},"\u70B9\u51FB\u8FD9\u91CC")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"将speaker作为全局变量加入application"},"\u5C06Speaker\u4F5C\u4E3A\u5168\u5C40\u53D8\u91CF\u52A0\u5165Application"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u5C06Speaker\u4F5C\u4E3A\u5168\u5C40\u53D8\u91CF\u52A0\u5165Application\uFF0C\u53EF\u4EE5\u5728APP\u7684\u4EFB\u4F55\u4F4D\u7F6E\u8C03\u7528\u6717\u8BFB\u65B9\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u4EEC\u9996\u5148\u521B\u5EFA\u4E00\u4E2AAppContext.java\uFF0C\u8FD9\u662F\u81EA\u5B9A\u4E49\u4E2AApplication\u7C7B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-Java"},"package net.liaocy.smartcar;\n\nimport android.app.Application;\n\nimport net.liaocy.smartcar.biz.Speaker;\n\n\npublic class AppContext extends Application {\n    private static AppContext instance;\n\n    private Speaker speaker;\n\n    //\u53D6\u5F97\u6717\u8BFB\u5668\u5BF9\u8C61\n    public Speaker getSpeaker(){\n        return this.speaker;\n    }\n\n    //\u5728\u4EFB\u4F55\u5730\u65B9\u90FD\u53EF\u4EE5\u53D6\u5F97\u8FD9\u4E2A\u7C7B\u7684\u5B9E\u4F8B\n    public static AppContext getInstance() {\n        return instance;\n    }\n\n    @Override\n    public void onCreate() {\n        // TODO Auto-generated method stub\n        super.onCreate();\n        instance = this;\n\n        //init and start speaker\n        speaker = new Speaker(this);\n        speaker.Speak(\"System activated\");\n        //init and start speaker -- end\n    }\n}\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6E90\u4EE3\u7801\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/liaocyintl/SmartCar/blob/master/app/src/main/java/net/liaocy/smartcar/AppContext.java"},"\u70B9\u51FB\u8FD9\u91CC")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5C06\u81EA\u5B9A\u4E49Application\u6CE8\u518C\u5230AndroidManifest.xml\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-xml"},"<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    package=\"net.liaocy.smartcar\">\n\n    <application\n        android:name=\".AppContext\"\n        android:allowBackup=\"true\"\n        android:icon=\"@mipmap/ic_launcher\"\n        android:label=\"@string/app_name\"\n        android:roundIcon=\"@mipmap/ic_launcher_round\"\n        android:supportsRtl=\"true\"\n        android:theme=\"@style/AppTheme\">\n        <activity android:name=\".activity.Dashboard\">\n            <intent-filter>\n                <action android:name=\"android.intent.action.MAIN\" />\n\n                <category android:name=\"android.intent.category.LAUNCHER\" />\n            </intent-filter>\n        </activity>\n    </application>\n\n</manifest>\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u8FD9\u91CC\u7684\"android:name\"\u8981\u548C\u6CE8\u518C\u7C7B\u540D\u79F0\u76F8\u540C\uFF0C\u7528\u6765\u58F0\u660E\u6CE8\u518C\u7C7B\u3002\n\u6E90\u4EE3\u7801\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/liaocyintl/SmartCar/blob/master/app/src/main/AndroidManifest.xml"},"\u70B9\u51FB\u8FD9\u91CC")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"在activity测试朗读"},"\u5728Activity\u6D4B\u8BD5\u6717\u8BFB"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-Java"},"this.btnSpeak = this.findViewById(R.id.btnSpeak);\nthis.btnSpeak.setOnClickListener(new View.OnClickListener() {\n    @Override\n    public void onClick(View v) {\n        Log.i(TAG, \"speak\");\n\n        appContext.getSpeaker().Speak(\"System Activated.\");\n\n        txtMsg.setText(\"here\");\n    }\n});\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6E90\u4EE3\u7801\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/liaocyintl/SmartCar/blob/master/app/src/main/java/net/liaocy/smartcar/activity/Dashboard.java"},"\u70B9\u51FB\u8FD9\u91CC")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"感想"},"\u611F\u60F3"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6211\u662F\u60F3\u505A\u4E00\u4E2A\u8F66\u8F7D\u7684\u5B89\u5353\u5E94\u7528\uFF0C\u96C6\u6210\u5BFC\u822A\uFF0COBD\u8F66\u51B5\u68C0\u6D4B\uFF0C\u4F20\u611F\u5668\u6570\u636E\u624B\u673A\u548C\u5728\u7EBF\u5206\u6790\u7B49\u4E00\u7CFB\u5217\u529F\u80FD\u3002\u6709\u5174\u8DA3\u7684\u670B\u53CB\u6B22\u8FCE\u4E00\u8D77\u8BA8\u8BBA\u3002\n\u4EE3\u7801\u5E93\uFF1A",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/liaocyintl/SmartCar"},"https://github.com/liaocyintl/SmartCar")));};MDXContent.isMDXComponent=true;

/***/ })

}]);