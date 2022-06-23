"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[4043],{

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

/***/ 1041:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'Laravel命令快查',date:new Date('2019-02-18T12:54:00.000Z'),lang:'zh-Hans',tags:['PHP','Laravel'],categories:['开发 Development','PHP']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/02/laravel","id":"archieved/2019/02/laravel","title":"Laravel命令快查","description":"心血来潮学了一下Laravel，本文记录一些常用的Laravel语法。","source":"@site/docs/archieved/2019/02/18-laravel.md","sourceDirName":"archieved/2019/02","slug":"/archieved/2019/02/laravel","permalink":"/liaocy-net/docs/archieved/2019/02/laravel","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/02/18-laravel.md","tags":[{"label":"PHP","permalink":"/liaocy-net/docs/tags/php"},{"label":"Laravel","permalink":"/liaocy-net/docs/tags/laravel"}],"version":"current","sidebarPosition":18,"frontMatter":{"title":"Laravel命令快查","date":"2019-02-18T12:54:00.000Z","lang":"zh-Hans","tags":["PHP","Laravel"],"categories":["开发 Development","PHP"]},"sidebar":"tutorialSidebar","previous":{"title":"在Ubuntu设置守护进程systemd（例：后台启动JupyterHub）","permalink":"/liaocy-net/docs/archieved/2019/01/ubuntusystemd"},"next":{"title":"CentOS设置Apache的HTTP与HTTPS反向代理","permalink":"/liaocy-net/docs/archieved/2019/03/centosapacheproxy"}};var assets={};var toc=[{value:'参考资料',id:'参考资料',level:2},{value:'Database and Eloquent',id:'database-and-eloquent',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5FC3\u8840\u6765\u6F6E\u5B66\u4E86\u4E00\u4E0BLaravel\uFF0C\u672C\u6587\u8BB0\u5F55\u4E00\u4E9B\u5E38\u7528\u7684Laravel\u8BED\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"参考资料"},"\u53C2\u8003\u8D44\u6599"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://laravelacademy.org/laravel-5_7"},"Laravel 5.7 \u6587\u6863"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"database-and-eloquent"},"Database and Eloquent"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5EFA\u7ACB\u6570\u636E\u5E93\u8FC1\u79FB\u6587\u4EF6\uFF1A\nphp artisan make:migration flight --create=flight"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u540C\u65F6\u5EFA\u7ACB\u6A21\u578B\u548C\u6570\u636E\u5E93\u8FC1\u79FB\u6587\u4EF6\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"php artisan make:model Flight --migration\nphp artisan make:model Flight -m\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5EFA\u8868\uFF1A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://laravel.com/api/5.7/Illuminate/Database/Schema/Blueprint.html"},"Blueprint")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-php"},"Schema::create('users', function (Blueprint $table) {\n    $table->increments('id');\n    $table->string('name');\n    $table->string('email')->unique();\n    $table->timestamp('email_verified_at')->nullable();\n    $table->string('password');\n    $table->rememberToken();\n    $table->timestamps();\n    // forengn key\n    $table->foreign('user_id')->references('id')->on('users');   \n});\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u4FEE\u6539\u8868\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-php"},"Schema::table('users', function (Blueprint $table) {\n    $table->string('nickname', 100)->after('name')->nullable()->comment('\u7528\u6237\u6635\u79F0');\n    // index\n    $table->primary('id');\n    $table->index('name');\n    $table->unique('email');\n});\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u6267\u884C\u8FC1\u79FB\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"php artisan migrate\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u751F\u6210\u586B\u5145\u5668\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"php artisan make:seeder UsersTableSeeder\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u7F16\u5199\u586B\u5145\u5668\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"DB::table('users')->insert([\n    'name' => str_random(10),\n    'email' => str_random(10).'@gmail.com',\n    'password' => bcrypt('secret'),\n]);\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u586B\u5145\u6570\u636E\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"php artisan db:seed --class=UsersTableSeeder\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u539F\u751FSQL\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"//\u589E\u52A0\n$name = str_random(10);\n$email = str_random(10) . '@163.com';\n$password = bcrypt('secret');\n$flag = DB::insert('insert into `users` (`name`, `email`, `password`) values (?, ?, ?)', [$name, $email, $password]);\n\n//\u5220\u9664\n$id = 8;\n$affectedRows = DB::delete('delete from `users` where id = ?', [$id]);\n\n//\u4FEE\u6539\n$name = str_random(8);\n$id = 8;\n$affectedRows = DB::update('update `users` set `name` = ? where id = ?', [$name, $id]);\n\n//\u67E5\u8BE2\n$name = '\u5B66\u9662\u541B';\n$users = DB::select('select * from `users` where `name` = ?', [$name]);\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"SQL\u6784\u5EFA\u5668\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-php"},"//\u589E\u52A0\n$userId = DB::table('users')->insertGetId([\n    'name' => str_random(10),\n    'email' => str_random(8) . '@qq.com',\n    'password' => bcrypt('secret')\n]);\n\n//\u5220\u9664\n$affectedRows = DB::table('users')->delete();\n$affectedRows = DB::table('users')->truncate(); //\u91CD\u5236ID\n\n//\u4FEE\u6539\n$id = 11;\n$affectedRows = DB::table('users')->where('id', '>', $id)->update(['name' => str_random(8)]);\n\n//\u67E5\u8BE2\n$name = '\u5B66\u9662\u541B';\n$users = DB::table('users')->select('id', 'name', 'email')->where('name', $name)->get();\nDB::table('posts')->where('views', 0)->get();      # \u6B64\u5904\u7B49\u53F7\u53EF\u4EE5\u7701\u7565\nDB::table('posts')->where('views', '>', 0)->get();  \nDB::table('posts')->where('views', '<>', 0)->get();\n// - and\nDB::table('posts')->where([\n    ['id', '<', 10],\n    ['views', '>', 0]\n])->get();\n// - or\nDB::table('posts')->where('id', '<', 10)->orWhere('views', '>', 0)->get();\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\u5EFA\u7ACB\u6A21\u578B\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},"php artisan make:model Post\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"ORM\u6620\u5C04\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-php"},"class Post extends Model\n{\n    // \u8868\u540D\n    protected $table = 'post';\n    // \u662F\u5426\u5305\u542B\u81EA\u589EID\n    protected $incrementing = True;\n    // \u4E3B\u952E\u503C\u7C7B\u578B\n    protected $keyType = int;\n\n    // \u662F\u5426\u521B\u5EFA 'created_at' and 'updated_at' timestamps \n    public $timestamps = True;\n\n    // Customize names of 'created_at' and 'updated_at'\n    const CREATED_AT = 'created_at';\n    const UPDATED_AT = 'updated_at';\n\n    // Customize database link in config/database.php\n    // protected $connection = 'mysql';\n\n    //UNIX\u65F6\u95F4\u6233\n    protected $dateFormat = 'U';\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"ORM\u67E5\u8BE2\uFF1A"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-php"},"//\u63D2\u5165\n$post = new App\\Post;\n$post->title = '\u6D4B\u8BD5\u6587\u7AE0\u6807\u9898';\n$post->content = '\u6D4B\u8BD5\u6587\u7AE0\u5185\u5BB9';\n$post->user_id = 1;\n$post->save();\n\n//\u5220\u9664\n$post = Post::find(31);\n$post->delete();\n\n//\u4FEE\u6539\n$post = Post::find(31);\n$post->title = '\u6D4B\u8BD5\u6587\u7AE0\u6807\u9898\u66F4\u65B0';\n$post->save();\n\n//\u67E5\u8BE2\n$posts = Post:all();\n// - chunk\u5206\u5757\nPost::chunk(10, function ($posts) {\n   foreach ($posts as $post) {\n       if ($post->views == 0) {\n           continue;\n       } else {\n           dump($post->title . ':' . $post->views);\n       }\n   }\n});\n// - Lazy\u67E5\u8BE2\nforeach (Post::cursor() as $post) {\n    dump($post->title . ':' . $post->content);\n}\n\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);