"use strict";
(self["webpackChunkliaocy_net"] = self["webpackChunkliaocy_net"] || []).push([[5939],{

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

/***/ 89404:
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
var _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={title:'PostgreSQL那些忘却的事',date:new Date('2019-05-27T09:25:00.000Z'),lang:'zh-Hans',tags:['SQL','PostgreSQL'],categories:['开发 Development','SQL']};var contentTitle=undefined;var metadata={"unversionedId":"archieved/2019/05/postgresqlnote","id":"archieved/2019/05/postgresqlnote","title":"PostgreSQL那些忘却的事","description":"Postgres的叫法好像有好几个，PostgreSQL、Postgres、PostgresDB等等，身边有人用过，是因为Postgres有一个地理信息插件PostGIS，据说Postgres对于地理信息的处理有独到之处，因此他们做GIS的人用的比较多。我之前几乎没怎么用过Postgres，一直习惯用MySQL，最近用MariaDB多一些。这次培训碰巧学到了，基本语法还是标准的SQL，本文用于记录一些我记得不太清楚的，以及Postgres特有的语法。","source":"@site/docs/archieved/2019/05/27-postgresqlnote.md","sourceDirName":"archieved/2019/05","slug":"/archieved/2019/05/postgresqlnote","permalink":"/liaocy-net/docs/archieved/2019/05/postgresqlnote","draft":false,"editUrl":"https://github.com/liaocyintl/liaocy-net/tree/main/docs/archieved/2019/05/27-postgresqlnote.md","tags":[{"label":"SQL","permalink":"/liaocy-net/docs/tags/sql"},{"label":"PostgreSQL","permalink":"/liaocy-net/docs/tags/postgre-sql"}],"version":"current","sidebarPosition":27,"frontMatter":{"title":"PostgreSQL那些忘却的事","date":"2019-05-27T09:25:00.000Z","lang":"zh-Hans","tags":["SQL","PostgreSQL"],"categories":["开发 Development","SQL"]},"sidebar":"tutorialSidebar","previous":{"title":"Docker运行Coder时 code-server is unable to watch for file changes in this large workspace 的解决方案","permalink":"/liaocy-net/docs/archieved/2019/05/maxuserwatches"},"next":{"title":"SQL 日语英语词汇","permalink":"/liaocy-net/docs/archieved/2019/05/sqljaen"}};var assets={};var toc=[{value:'psql -U postgres :  Access to DBMS engine',id:'psql--u-postgres---access-to-dbms-engine',level:4},{value:'\l : show databases',id:'l--show-databases',level:4},{value:'\c {database name}: use database',id:'c-database-name-use-database',level:4},{value:'\d : show tables',id:'d--show-tables',level:4},{value:'\d {table name} : show table structure',id:'d-table-name--show-table-structure',level:4},{value:'\q : quit',id:'q--quit',level:4},{value:'\i {SQL file} : run the SQL file',id:'i-sql-file--run-the-sql-file',level:4},{value:'\pset null NULL : show null as &#39;NULL&#39; when SELECT',id:'pset-null-null--show-null-as-null-when-select',level:4},{value:'@ or \ : ESCAPE',id:'-or---escape',level:4},{value:'UNION / UNION ALL: combine the result-set of two or more SELECT statements vertically',id:'union--union-all-combine-the-result-set-of-two-or-more-select-statements-vertically',level:4},{value:'All joins:',id:'all-joins',level:4},{value:':: : type conversion (Only for postgres)',id:'--type-conversion-only-for-postgres',level:4},{value:'ALL : 父查询中的结果集大于子查询中每一个结果集中的值,则为真',id:'all--父查询中的结果集大于子查询中每一个结果集中的值则为真',level:4},{value:'ANY,SOME : 父查询中的结果集大于子查询中任意一个结果集中的值,则为真',id:'anysome--父查询中的结果集大于子查询中任意一个结果集中的值则为真',level:4},{value:'ANY, IN : ANY 与子查询IN相同',id:'any-in--any-与子查询in相同',level:4},{value:'ANY, NOT IN',id:'any-not-in',level:4},{value:'&#39; &quot; and `',id:'--and-',level:4},{value:'Transaction',id:'transaction',level:4},{value:'CREATE TEMPORARY table... : create a in-memory-database',id:'create-temporary-table--create-a-in-memory-database',level:4},{value:'SERIAL : Auto-increased ID in postgres',id:'serial--auto-increased-id-in-postgres',level:4},{value:'Foreign key',id:'foreign-key',level:4},{value:'ALTER',id:'alter',level:4},{value:'View',id:'view',level:4},{value:'Index',id:'index',level:4},{value:'Role',id:'role',level:4},{value:'GRAND',id:'grand',level:4}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_liaocy_net_liaocy_net_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Postgres\u7684\u53EB\u6CD5\u597D\u50CF\u6709\u597D\u51E0\u4E2A\uFF0CPostgreSQL\u3001Postgres\u3001PostgresDB\u7B49\u7B49\uFF0C\u8EAB\u8FB9\u6709\u4EBA\u7528\u8FC7\uFF0C\u662F\u56E0\u4E3APostgres\u6709\u4E00\u4E2A\u5730\u7406\u4FE1\u606F\u63D2\u4EF6PostGIS\uFF0C\u636E\u8BF4Postgres\u5BF9\u4E8E\u5730\u7406\u4FE1\u606F\u7684\u5904\u7406\u6709\u72EC\u5230\u4E4B\u5904\uFF0C\u56E0\u6B64\u4ED6\u4EEC\u505AGIS\u7684\u4EBA\u7528\u7684\u6BD4\u8F83\u591A\u3002\u6211\u4E4B\u524D\u51E0\u4E4E\u6CA1\u600E\u4E48\u7528\u8FC7Postgres\uFF0C\u4E00\u76F4\u4E60\u60EF\u7528MySQL\uFF0C\u6700\u8FD1\u7528MariaDB\u591A\u4E00\u4E9B\u3002\u8FD9\u6B21\u57F9\u8BAD\u78B0\u5DE7\u5B66\u5230\u4E86\uFF0C\u57FA\u672C\u8BED\u6CD5\u8FD8\u662F\u6807\u51C6\u7684SQL\uFF0C\u672C\u6587\u7528\u4E8E\u8BB0\u5F55\u4E00\u4E9B\u6211\u8BB0\u5F97\u4E0D\u592A\u6E05\u695A\u7684\uFF0C\u4EE5\u53CAPostgres\u7279\u6709\u7684\u8BED\u6CD5\u3002"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"basic-commands-psql"},"Basic Commands (PSQL)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"psql--u-postgres---access-to-dbms-engine"},"psql -U postgres :  Access to DBMS engine"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"l--show-databases"},"\\l : show databases"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"c-database-name-use-database"},"\\c {database name}: use database"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"d--show-tables"},"\\d : show tables"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"d-table-name--show-table-structure"},"\\d {table name} : show table structure"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"q--quit"},"\\q : quit"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"i-sql-file--run-the-sql-file"},"\\i {SQL file} : run the SQL file"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"dml"},"DML"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"pset-null-null--show-null-as-null-when-select"},"\\pset null NULL : show null as 'NULL' when SELECT"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"-or---escape"},"@ or \\ : ESCAPE"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"# SELECT * FROM a WHERE A LIKE \"%10@%%\" //means extract record where includes 10%\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"union--union-all-combine-the-result-set-of-two-or-more-select-statements-vertically"},"UNION / UNION ALL: combine the result-set of two or more SELECT statements vertically"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"SELECT country FROM Websites\nUNION\nSELECT country FROM apps\nORDER BY country;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"SELECT country FROM Websites\nUNION ALL\nSELECT country FROM apps\nORDER BY country;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"all-joins"},"All joins:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"LEFT JOIN b ON <conditions>\nRIGHT JOIN b ON <conditions>\nINNER JOIN b ON\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"--type-conversion-only-for-postgres"},":: : type conversion (Only for postgres)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"SELECT '2013-05-03'::date;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"result:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"    date\n------------\n 2018-01-01\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"all--父查询中的结果集大于子查询中每一个结果集中的值则为真"},"ALL : \u7236\u67E5\u8BE2\u4E2D\u7684\u7ED3\u679C\u96C6\u5927\u4E8E\u5B50\u67E5\u8BE2\u4E2D\u6BCF\u4E00\u4E2A\u7ED3\u679C\u96C6\u4E2D\u7684\u503C,\u5219\u4E3A\u771F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"SELECT * FROM T2 WHERE N > ALL (SELECT N FROM T1)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"anysome--父查询中的结果集大于子查询中任意一个结果集中的值则为真"},"ANY,SOME : \u7236\u67E5\u8BE2\u4E2D\u7684\u7ED3\u679C\u96C6\u5927\u4E8E\u5B50\u67E5\u8BE2\u4E2D\u4EFB\u610F\u4E00\u4E2A\u7ED3\u679C\u96C6\u4E2D\u7684\u503C,\u5219\u4E3A\u771F"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"SELECT * FROM T2 WHERE N > ANY(SELECT N FROM T1)\nSELECT * FROM T2 WHERE N > SOME(SELECT N FROM T1)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"any-in--any-与子查询in相同"},"ANY, IN : ANY \u4E0E\u5B50\u67E5\u8BE2IN\u76F8\u540C"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"SELECT * FROM T2 WHERE N = ANY (SELECT N FROM T1)\nSELECT * FROM T2 WHERE N IN (SELECT N FROM T1)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"any-not-in"},"ANY, NOT IN"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"--and-"},"' \" and `"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"' : definition of a variate"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"\" : definition of a column name"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"` : definition of a column name (MySQL)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"transaction"},"Transaction"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"\n\\set AUTOCOMMIT off -- shutdown autocommit\n\\echo :AUTOCOMMIT\n\nBEGIN; -- or [start transaction]\nINSERT INTO hoge VALUE('hoge');\nSELECT * FROM hoge; -- results hoge\nROLLBACK;\nSELECT * FROM hoge; -- results nothing\n\nINSERT INTO hoge VALUES('hoge2');\nSAVEPOINT hoge2;\nSELECT * FROM hoge; -- results hoge2\nDELETE FROM hoge2 WHERE name = 'hoge2';\nSELECT * FROM hoge; -- results nothing\n\nROLLBACK TO hoge2; -- goto SAVEPOINT hoge2\nSELECT * FROM hoge; -- results hoge2\n\nCOMMIT; -- transaction end\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"attention: The lock is started then first INSERT, UPDATE, or DELETE but not START;"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"ddl"},"DDL"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"create-temporary-table--create-a-in-memory-database"},"CREATE TEMPORARY table... : create a in-memory-database"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"serial--auto-increased-id-in-postgres"},"SERIAL : Auto-increased ID in postgres"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"create table sample (\n  id SERIAL PRIMARY KEY,\n  \"value\" integer\n) ;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"CREATE SEQUENCE orders_seq;\nINSERT INTO XXX VALUES(NEXTVAL(orders_seq));\n\nCURRVAL(orders_seq) -- current value\nSELECT SETVAL(orders_seq, value); -- set a value for orders_seq\nDROP SEQUENCE orders_seq;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"foreign-key"},"Foreign key"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"CREATE TABLE hoge4(\n    id SERIAL PRIMARY KEY, \n    staff_id INT FOREIGN KEY REFERENCES staff(pno)\n);\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"alter"},"ALTER"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"format:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"ALTER TABLE <table name> RENAME TO <new table name> -- change table name\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"e.g.:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"ALTER TABLE hoge4 RENAME TO hoge5; -- change table name.\nALTER TABLE hoge4 ADD addr varchar(50); -- add a column \"addr\" at the end of table hoge4.\nALTER TABLE hoge4 DROP addr; -- drop column \"addr\" in the table hoge4.\nALTER TABLE hoge4 DROP CONSTRAINT people_pkey; -- drop a constraint \"people_pkey\" in the table hoge4.\nALTER TABLE hoge4 ALTER addr DROP NOT NULL; -- drop \"NOT NULL\" attribute of column \"addr\" in the table hoge4.\nDROP TABLE hoge4; -- drop the table hoge4;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"view"},"View"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Format:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"CREATE VIEW xxx_view AS\n    SELECT .......;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"index"},"Index"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"format:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"CREATE INDEX <index_name> ON <table_name> (<column1, column2>); -- create a index\n\nDROP INDEX <index_name>; -- drop a index\n\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"dcl"},"DCL"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"role"},"Role"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"CREATE ROLE training LOGIN PASSWORD 'training';\nALTER ROLE training RENAME TO dbtraining;\nALTER ROLE dbtraining PASSWORD 'password';\nALTER ROLE dbtraining WITH SUPERUSER CREATEDB CREATEROLE;\n\nDROP ROLE dbtraining;\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"grand"},"GRAND"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-SQL"},"GRANT ALL ON DATABASE mydb00 TO dbtraining;\nGRANT <privilege1>, <privilege2> ON <table_name> TO <user_name>\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);