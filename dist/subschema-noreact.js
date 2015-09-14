(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Subschema"] = factory(require("react"));
	else
		root["Subschema"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var index = __webpack_require__(1);
	index.loader.addLoader(__webpack_require__(92));
	index.form = __webpack_require__(164);
	module.exports = index;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports.Form = __webpack_require__(2);
	module.exports.NestedMixin = __webpack_require__(5);
	module.exports.Editor = __webpack_require__(81);
	module.exports.validators = __webpack_require__(85);
	module.exports.util = __webpack_require__(6);
	module.exports.loader = __webpack_require__(83);
	module.exports.ValueManager = __webpack_require__(84);
	module.exports.FieldValueMixin = __webpack_require__(86);
	module.exports.ValidatorLoader = __webpack_require__(91);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var NestedMixin = __webpack_require__(5);
	var ValueManager = __webpack_require__(84);
	var Form = React.createClass({
	    displayName: 'Form',
	    mixins: [NestedMixin],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            template: 'FormTemplate',
	            onSubmit: function onSubmit() {},
	            noValidate: false
	        };
	    },
	
	    handleSubmit: function handleSubmit(e) {
	        e && e.preventDefault();
	        var vm = this.props.valueManager;
	        if (!this.props.novalidate) {
	            vm.validate();
	        }
	        if (vm.onSubmit(e, vm.getErrors(), vm.getValue(), this.props.path) !== false) {
	            this.props.onSubmit(e, vm.getErrors(), vm.getValue());
	        }
	    },
	    setErrors: function setErrors(errors) {
	        this.props.valueManager.setErrors(errors);
	    },
	
	    render: function render() {
	        var _props = this.props;
	        var schema = _props.schema;
	        var subSchema = _props.subSchema;
	        var fields = _props.fields;
	        var submitButton = _props.submitButton;
	        var template = _props.template;
	
	        var props = _objectWithoutProperties(_props, ['schema', 'subSchema', 'fields', 'submitButton', 'template']);
	
	        schema = schema || subSchema;
	        schema = this.normalizeSchema(schema);
	        this.schema = schema.schema ? schema : { schema: schema, fields: fields };
	        var sb = submitButton || this.schema.submitButton;
	        var Template = this.template(template);
	        return React.createElement(
	            Template,
	            _extends({ ref: 'form', onValidate: this.handleValidate, onSubmit: this.handleSubmit, schema: this.schema,
	                className: this.props.className
	            }, props, {
	                loader: this.props.loader,
	                valueManager: this.props.valueManager
	            }),
	            this.schema && this.schema.schema ? this.renderSchema(this) : null,
	            sb ? React.createElement('button', { type: 'submit', className: 'btn btn-primary', dangerouslySetInnerHTML: { __html: sb } }) : null,
	            this.props.children
	        );
	    }
	
	});
	module.exports = Form;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var tu = __webpack_require__(6);
	var Editor = __webpack_require__(81);
	var ValueManager = __webpack_require__(84);
	var LoaderMixin = __webpack_require__(82);
	var NestedMixin = {
	    mixins: [LoaderMixin],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            path: null,
	
	            schema: {},
	            valueManager: ValueManager()
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        if (this.props.value) {
	            this.props.valueManager.setValue(this.props.value);
	        }
	        if (this.props.errors) {
	            this.props.valueManager.setErrors(this.props.errors);
	        }
	    },
	    makeFieldset: function makeFieldset(f, i) {
	        var Template = this.template(f.template || 'FieldSetTemplate');
	        return React.createElement(
	            Template,
	            { key: 'f' + i, field: f },
	            this.makeFields(f.fields)
	        );
	    },
	
	    getValue: function getValue() {
	        return this.props.valueManager.path(this.props.path);
	    },
	    addEditor: function addEditor(field, f) {
	        var _props = this.props;
	        var path = _props.path;
	        var loader = _props.loader;
	
	        var props = _objectWithoutProperties(_props, ['path', 'loader']);
	
	        var tmpl = {},
	            path = tu.path(path, f);
	        if (field.template) {
	            tmpl['template'] = field.template;
	        }
	        return React.createElement(Editor, _extends({ ref: f, key: 'key-' + f, path: path,
	            field: field,
	            loader: loader,
	            name: f
	        }, tmpl, {
	            valueManager: this.props.valueManager }));
	    },
	    makeFields: function makeFields(fields) {
	        var _this = this;
	
	        var fieldMap = {},
	            schema = this.schema.schema;
	
	        fields = tu.toArray(fields).map(function (v) {
	            return v.split('.', 2);
	        }).map(function (v) {
	            var f = v[0];
	            if (v.length > 1) {
	                (fieldMap[f] || (fieldMap[f] = [])).push(v[1]);
	            }
	            return f;
	        });
	
	        return tu.unique(fields).map(function (f, i) {
	            f = tu.isString(f) ? f : f && f.name || 'field-' + i;
	            var ref = tu.isString(f) ? tu.clone(schema[f]) : f;
	            if (tu.isString(ref)) {
	                ref = {
	                    type: ref
	                };
	            } else {
	                if (!ref.type) {
	                    ref.type = 'Text';
	                }
	            }
	            if (!ref.fields && fieldMap[f]) {
	                ref.fields = fieldMap[f];
	            }
	            return _this.addEditor(ref, f);
	        });
	    },
	    normalizeSchema: function normalizeSchema(schema) {
	        if (schema == null) {
	            return {};
	        }
	        if (tu.isString(schema)) {
	            var loaded = this.props.loader.loadSchema(schema);
	            if (loaded.schema) {
	                schema = loaded;
	            } else {
	                schema = { schema: loaded };
	            }
	        } else if (tu.isString(schema.schema)) {
	            var loaded = this.props.loader.loadSchema(schema.schema);
	            if (loaded.schema) {
	                schema = loaded;
	            } else {
	                schema = { schema: loaded };
	            }
	        }
	        return schema;
	    },
	
	    renderSchema: function renderSchema() {
	
	        var schema = this.schema,
	            fieldsets = schema.fieldsets,
	            fields = schema.fields || Object.keys(schema.schema);
	        return (fieldsets && Array.isArray(fieldsets) ? fieldsets : fieldsets && (fieldsets.legend || fieldsets.fields) ? [fieldsets] : [{ fields: tu.toArray(fields) }]).map(this.makeFieldset, this);
	    }
	};
	module.exports = NestedMixin;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var api = {
	    template: __webpack_require__(7),
	    extend: __webpack_require__(40),
	    isFunction: __webpack_require__(13),
	    isString: __webpack_require__(45),
	    isRegExp: __webpack_require__(46),
	    isDate: __webpack_require__(47),
	    isBoolean: __webpack_require__(48),
	    isArray: __webpack_require__(22),
	    isNumber: __webpack_require__(49),
	    find: __webpack_require__(50),
	    noop: function noop() {},
	    unique: function unique(array) {
	        return array.filter(function (a, b, c) {
	            // keeps first occurrence
	            return c.indexOf(a) === b;
	        });
	    },
	    values: function values(obj) {
	        return obj == null ? [] : this.isArray(obj) ? obj : Object.keys(obj).map(function (v, i) {
	            return obj[v];
	        });
	    },
	    path: function path() {
	        var args = api.slice(arguments),
	            l = args.length,
	            i = 0,
	            j = 0,
	            p;
	        var ret = '';
	        for (; i < l; i++) {
	            p = args[i];
	            if (p == null || p === '') continue;
	            ret += j++ === 0 ? p : "." + p;
	        }
	        return ret;
	    },
	    flatten: Function.apply.bind(Array.prototype.concat, []),
	    toArray: function toArray(v) {
	        if (Array.isArray(v)) {
	            return v;
	        }
	        if (api.isString(v)) {
	            return v.split(/\,\s*/);
	        }
	        if (v == null) {
	            return [];
	        }
	        return [v];
	    },
	    xtend: function xtend(dest, args) {
	        dest = dest || {};
	        for (var i = 1, l = arguments.length; i < l; i++) {
	            var arg = arguments[1];
	            if (arg == null) continue;
	            for (var j in arg) {
	                dest[j] = args[j];
	            }
	        }
	        return dest;
	    },
	    slice: Function.call.bind(Array.prototype.slice),
	    clone: function clone(t) {
	        var tt = typeof t;
	        if (t == null || tt === 'number' || tt === 'string' || tt === 'function') {
	            return t;
	        }
	        if (t instanceof Date) {
	            return new Date(t.getTime());
	        }
	
	        var ret = _objectWithoutProperties(t, []);
	
	        return ret;
	    },
	    debounce: function debounce(fn, to) {
	        var ti;
	
	        return function f() {
	            clearTimeout(ti);
	            var args = Array.prototype.slice.call(arguments),
	                self = this;
	            ti = setTimeout(function () {
	                fn.apply(self, args);
	            }, to);
	        };
	    },
	    nullCheck: function nullCheck(v) {
	        return v != null;
	    },
	    emptyCheck: function emptyCheck(v) {
	        return v != null && v.length > 0;
	    },
	    push: Function.apply.bind(Array.prototype.push)
	};
	module.exports = api;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assignOwnDefaults = __webpack_require__(8),
	    assignWith = __webpack_require__(9),
	    attempt = __webpack_require__(25),
	    baseAssign = __webpack_require__(28),
	    baseToString = __webpack_require__(30),
	    baseValues = __webpack_require__(31),
	    escapeStringChar = __webpack_require__(32),
	    isError = __webpack_require__(26),
	    isIterateeCall = __webpack_require__(33),
	    keys = __webpack_require__(10),
	    reInterpolate = __webpack_require__(34),
	    templateSettings = __webpack_require__(35);
	
	/** Used to match empty string literals in compiled template source. */
	var reEmptyStringLeading = /\b__p \+= '';/g,
	    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
	
	/** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
	
	/** Used to ensure capturing order of template delimiters. */
	var reNoMatch = /($^)/;
	
	/** Used to match unescaped characters in compiled string literals. */
	var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
	
	/**
	 * Creates a compiled template function that can interpolate data properties
	 * in "interpolate" delimiters, HTML-escape interpolated data properties in
	 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	 * properties may be accessed as free variables in the template. If a setting
	 * object is provided it takes precedence over `_.templateSettings` values.
	 *
	 * **Note:** In the development build `_.template` utilizes
	 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	 * for easier debugging.
	 *
	 * For more information on precompiling templates see
	 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	 *
	 * For more information on Chrome extension sandboxes see
	 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The template string.
	 * @param {Object} [options] The options object.
	 * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	 * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	 * @param {Object} [options.imports] An object to import into the template as free variables.
	 * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	 * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	 * @param {string} [options.variable] The data object variable name.
	 * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	 * @returns {Function} Returns the compiled template function.
	 * @example
	 *
	 * // using the "interpolate" delimiter to create a compiled template
	 * var compiled = _.template('hello <%= user %>!');
	 * compiled({ 'user': 'fred' });
	 * // => 'hello fred!'
	 *
	 * // using the HTML "escape" delimiter to escape data property values
	 * var compiled = _.template('<b><%- value %></b>');
	 * compiled({ 'value': '<script>' });
	 * // => '<b>&lt;script&gt;</b>'
	 *
	 * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	 * compiled({ 'users': ['fred', 'barney'] });
	 * // => '<li>fred</li><li>barney</li>'
	 *
	 * // using the internal `print` function in "evaluate" delimiters
	 * var compiled = _.template('<% print("hello " + user); %>!');
	 * compiled({ 'user': 'barney' });
	 * // => 'hello barney!'
	 *
	 * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	 * var compiled = _.template('hello ${ user }!');
	 * compiled({ 'user': 'pebbles' });
	 * // => 'hello pebbles!'
	 *
	 * // using custom template delimiters
	 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	 * var compiled = _.template('hello {{ user }}!');
	 * compiled({ 'user': 'mustache' });
	 * // => 'hello mustache!'
	 *
	 * // using backslashes to treat delimiters as plain text
	 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	 * compiled({ 'value': 'ignored' });
	 * // => '<%- value %>'
	 *
	 * // using the `imports` option to import `jQuery` as `jq`
	 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	 * compiled({ 'users': ['fred', 'barney'] });
	 * // => '<li>fred</li><li>barney</li>'
	 *
	 * // using the `sourceURL` option to specify a custom sourceURL for the template
	 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	 * compiled(data);
	 * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	 *
	 * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	 * compiled.source;
	 * // => function(data) {
	 * //   var __t, __p = '';
	 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	 * //   return __p;
	 * // }
	 *
	 * // using the `source` property to inline compiled templates for meaningful
	 * // line numbers in error messages and a stack trace
	 * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	 *   var JST = {\
	 *     "main": ' + _.template(mainText).source + '\
	 *   };\
	 * ');
	 */
	function template(string, options, otherOptions) {
	  // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	  var settings = templateSettings.imports._.templateSettings || templateSettings;
	
	  if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	    options = otherOptions = undefined;
	  }
	  string = baseToString(string);
	  options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
	
	  var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	      importsKeys = keys(imports),
	      importsValues = baseValues(imports, importsKeys);
	
	  var isEscaping,
	      isEvaluating,
	      index = 0,
	      interpolate = options.interpolate || reNoMatch,
	      source = "__p += '";
	
	  // Compile the regexp to match each delimiter.
	  var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
	
	  // Use a sourceURL for easier debugging.
	  var sourceURL = 'sourceURL' in options ? '//# sourceURL=' + options.sourceURL + '\n' : '';
	
	  string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	    interpolateValue || (interpolateValue = esTemplateValue);
	
	    // Escape characters that can't be included in string literals.
	    source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
	
	    // Replace delimiters with snippets.
	    if (escapeValue) {
	      isEscaping = true;
	      source += "' +\n__e(" + escapeValue + ") +\n'";
	    }
	    if (evaluateValue) {
	      isEvaluating = true;
	      source += "';\n" + evaluateValue + ";\n__p += '";
	    }
	    if (interpolateValue) {
	      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	    }
	    index = offset + match.length;
	
	    // The JS engine embedded in Adobe products requires returning the `match`
	    // string in order to produce the correct `offset` value.
	    return match;
	  });
	
	  source += "';\n";
	
	  // If `variable` is not specified wrap a with-statement around the generated
	  // code to add the data object to the top of the scope chain.
	  var variable = options.variable;
	  if (!variable) {
	    source = 'with (obj) {\n' + source + '\n}\n';
	  }
	  // Cleanup code by stripping empty strings.
	  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
	
	  // Frame code as the function body.
	  source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
	
	  var result = attempt(function () {
	    return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	  });
	
	  // Provide the compiled function's source by its `toString` method or
	  // the `source` property as a convenience for inlining compiled templates.
	  result.source = source;
	  if (isError(result)) {
	    throw result;
	  }
	  return result;
	}
	
	module.exports = template;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/** Used for native method references. */
	"use strict";
	
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used by `_.template` to customize its `_.assign` use.
	 *
	 * **Note:** This function is like `assignDefaults` except that it ignores
	 * inherited property values when checking if a property is `undefined`.
	 *
	 * @private
	 * @param {*} objectValue The destination object property value.
	 * @param {*} sourceValue The source object property value.
	 * @param {string} key The key associated with the object and source values.
	 * @param {Object} object The destination object.
	 * @returns {*} Returns the value to assign to the destination object.
	 */
	function assignOwnDefaults(objectValue, sourceValue, key, object) {
	  return objectValue === undefined || !hasOwnProperty.call(object, key) ? sourceValue : objectValue;
	}
	
	module.exports = assignOwnDefaults;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(10);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? result !== value : value === value) || value === undefined && !(key in object)) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	module.exports = assignWith;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(11),
	    isArrayLike = __webpack_require__(16),
	    isObject = __webpack_require__(14),
	    shimKeys = __webpack_require__(20);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function (object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && isArrayLike(object)) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isNative = __webpack_require__(12);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(13),
	    isObjectLike = __webpack_require__(15);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(14);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	'use strict';
	
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	'use strict';
	
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getLength = __webpack_require__(17),
	    isLength = __webpack_require__(19);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(18);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	"use strict";
	
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	'use strict';
	
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArguments = __webpack_require__(21),
	    isArray = __webpack_require__(22),
	    isIndex = __webpack_require__(23),
	    isLength = __webpack_require__(19),
	    keysIn = __webpack_require__(24);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if (allowIndexes && isIndex(key, length) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(16),
	    isObjectLike = __webpack_require__(15);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	    return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(11),
	    isLength = __webpack_require__(19),
	    isObjectLike = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function (value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;

/***/ },
/* 23 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	'use strict';
	
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArguments = __webpack_require__(21),
	    isArray = __webpack_require__(22),
	    isIndex = __webpack_require__(23),
	    isLength = __webpack_require__(19),
	    isObject = __webpack_require__(14);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = length && isLength(length) && (isArray(object) || isArguments(object)) && length || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = index + '';
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isError = __webpack_require__(26),
	    restParam = __webpack_require__(27);
	
	/**
	 * Attempts to invoke `func`, returning either the result or the caught error
	 * object. Any additional arguments are provided to `func` when it's invoked.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Function} func The function to attempt.
	 * @returns {*} Returns the `func` result or error object.
	 * @example
	 *
	 * // avoid throwing errors for invalid selectors
	 * var elements = _.attempt(function(selector) {
	 *   return document.querySelectorAll(selector);
	 * }, '>_>');
	 *
	 * if (_.isError(elements)) {
	 *   elements = [];
	 * }
	 */
	var attempt = restParam(function (func, args) {
	  try {
	    return func.apply(undefined, args);
	  } catch (e) {
	    return isError(e) ? e : new Error(e);
	  }
	});
	
	module.exports = attempt;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObjectLike = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var errorTag = '[object Error]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	 * `SyntaxError`, `TypeError`, or `URIError` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	 * @example
	 *
	 * _.isError(new Error);
	 * // => true
	 *
	 * _.isError(Error);
	 * // => false
	 */
	function isError(value) {
	  return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	}
	
	module.exports = isError;

/***/ },
/* 27 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	'use strict';
	
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? func.length - 1 : +start || 0, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0:
	        return func.call(this, rest);
	      case 1:
	        return func.call(this, args[0], rest);
	      case 2:
	        return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseCopy = __webpack_require__(29),
	    keys = __webpack_require__(10);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	    return source == null ? object : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;

/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	"use strict";
	
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;

/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	'use strict';
	
	function baseToString(value) {
	  return value == null ? '' : value + '';
	}
	
	module.exports = baseToString;

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	"use strict";
	
	function baseValues(object, props) {
	  var index = -1,
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = object[props[index]];
	  }
	  return result;
	}
	
	module.exports = baseValues;

/***/ },
/* 32 */
/***/ function(module, exports) {

	/** Used to escape characters for inclusion in compiled string literals. */
	'use strict';
	
	var stringEscapes = {
	  '\\': '\\',
	  "'": "'",
	  '\n': 'n',
	  '\r': 'r',
	  '\u2028': 'u2028',
	  '\u2029': 'u2029'
	};
	
	/**
	 * Used by `_.template` to escape characters for inclusion in compiled string literals.
	 *
	 * @private
	 * @param {string} chr The matched character to escape.
	 * @returns {string} Returns the escaped character.
	 */
	function escapeStringChar(chr) {
	  return '\\' + stringEscapes[chr];
	}
	
	module.exports = escapeStringChar;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(16),
	    isIndex = __webpack_require__(23),
	    isObject = __webpack_require__(14);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
	    var other = object[index];
	    return value === value ? value === other : other !== other;
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;

/***/ },
/* 34 */
/***/ function(module, exports) {

	/** Used to match template delimiters. */
	"use strict";
	
	var reInterpolate = /<%=([\s\S]+?)%>/g;
	
	module.exports = reInterpolate;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var escape = __webpack_require__(36),
	    reEscape = __webpack_require__(38),
	    reEvaluate = __webpack_require__(39),
	    reInterpolate = __webpack_require__(34);
	
	/**
	 * By default, the template delimiters used by lodash are like those in
	 * embedded Ruby (ERB). Change the following template settings to use
	 * alternative delimiters.
	 *
	 * @static
	 * @memberOf _
	 * @type Object
	 */
	var templateSettings = {
	
	  /**
	   * Used to detect `data` property values to be HTML-escaped.
	   *
	   * @memberOf _.templateSettings
	   * @type RegExp
	   */
	  'escape': reEscape,
	
	  /**
	   * Used to detect code to be evaluated.
	   *
	   * @memberOf _.templateSettings
	   * @type RegExp
	   */
	  'evaluate': reEvaluate,
	
	  /**
	   * Used to detect `data` property values to inject.
	   *
	   * @memberOf _.templateSettings
	   * @type RegExp
	   */
	  'interpolate': reInterpolate,
	
	  /**
	   * Used to reference the data object in the template text.
	   *
	   * @memberOf _.templateSettings
	   * @type string
	   */
	  'variable': '',
	
	  /**
	   * Used to import variables into the compiled template.
	   *
	   * @memberOf _.templateSettings
	   * @type Object
	   */
	  'imports': {
	
	    /**
	     * A reference to the `lodash` function.
	     *
	     * @memberOf _.templateSettings.imports
	     * @type Function
	     */
	    '_': { 'escape': escape }
	  }
	};
	
	module.exports = templateSettings;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(30),
	    escapeHtmlChar = __webpack_require__(37);
	
	/** Used to match HTML entities and HTML characters. */
	var reUnescapedHtml = /[&<>"'`]/g,
	    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	
	/**
	 * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	 * their corresponding HTML entities.
	 *
	 * **Note:** No other characters are escaped. To escape additional characters
	 * use a third-party library like [_he_](https://mths.be/he).
	 *
	 * Though the ">" character is escaped for symmetry, characters like
	 * ">" and "/" don't need escaping in HTML and have no special meaning
	 * unless they're part of a tag or unquoted attribute value.
	 * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	 * (under "semi-related fun fact") for more details.
	 *
	 * Backticks are escaped because in Internet Explorer < 9, they can break out
	 * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	 * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	 * for more details.
	 *
	 * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	 * to reduce XSS vectors.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escape('fred, barney, & pebbles');
	 * // => 'fred, barney, &amp; pebbles'
	 */
	function escape(string) {
	    // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	    string = baseToString(string);
	    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
	}
	
	module.exports = escape;

/***/ },
/* 37 */
/***/ function(module, exports) {

	/** Used to map characters to HTML entities. */
	'use strict';
	
	var htmlEscapes = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#39;',
	  '`': '&#96;'
	};
	
	/**
	 * Used by `_.escape` to convert characters to HTML entities.
	 *
	 * @private
	 * @param {string} chr The matched character to escape.
	 * @returns {string} Returns the escaped character.
	 */
	function escapeHtmlChar(chr) {
	  return htmlEscapes[chr];
	}
	
	module.exports = escapeHtmlChar;

/***/ },
/* 38 */
/***/ function(module, exports) {

	/** Used to match template delimiters. */
	"use strict";
	
	var reEscape = /<%-([\s\S]+?)%>/g;
	
	module.exports = reEscape;

/***/ },
/* 39 */
/***/ function(module, exports) {

	/** Used to match template delimiters. */
	"use strict";
	
	var reEvaluate = /<%([\s\S]+?)%>/g;
	
	module.exports = reEvaluate;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(41);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assignWith = __webpack_require__(9),
	    baseAssign = __webpack_require__(28),
	    createAssigner = __webpack_require__(42);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function (object, source, customizer) {
	    return customizer ? assignWith(object, source, customizer) : baseAssign(object, source);
	});
	
	module.exports = assign;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bindCallback = __webpack_require__(43),
	    isIterateeCall = __webpack_require__(33),
	    restParam = __webpack_require__(27);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function (object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= customizer ? 1 : 0;
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var identity = __webpack_require__(44);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1:
	      return function (value) {
	        return func.call(thisArg, value);
	      };
	    case 3:
	      return function (value, index, collection) {
	        return func.call(thisArg, value, index, collection);
	      };
	    case 4:
	      return function (accumulator, value, index, collection) {
	        return func.call(thisArg, accumulator, value, index, collection);
	      };
	    case 5:
	      return function (value, other, key, object, source) {
	        return func.call(thisArg, value, other, key, object, source);
	      };
	  }
	  return function () {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;

/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	"use strict";
	
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObjectLike = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || isObjectLike(value) && objToString.call(value) == stringTag;
	}
	
	module.exports = isString;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(14);
	
	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	function isRegExp(value) {
	  return isObject(value) && objToString.call(value) == regexpTag;
	}
	
	module.exports = isRegExp;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObjectLike = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var dateTag = '[object Date]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Date` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isDate(new Date);
	 * // => true
	 *
	 * _.isDate('Mon April 23 2012');
	 * // => false
	 */
	function isDate(value) {
	  return isObjectLike(value) && objToString.call(value) == dateTag;
	}
	
	module.exports = isDate;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObjectLike = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false || isObjectLike(value) && objToString.call(value) == boolTag;
	}
	
	module.exports = isBoolean;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObjectLike = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var numberTag = '[object Number]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	 * as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isNumber(8.4);
	 * // => true
	 *
	 * _.isNumber(NaN);
	 * // => true
	 *
	 * _.isNumber('8.4');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' || isObjectLike(value) && objToString.call(value) == numberTag;
	}
	
	module.exports = isNumber;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseEach = __webpack_require__(51),
	    createFind = __webpack_require__(57);
	
	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * If a property name is provided for `predicate` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `predicate` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @alias detect
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.result(_.find(users, function(chr) {
	 *   return chr.age < 40;
	 * }), 'user');
	 * // => 'barney'
	 *
	 * // using the `_.matches` callback shorthand
	 * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	 * // => 'pebbles'
	 *
	 * // using the `_.matchesProperty` callback shorthand
	 * _.result(_.find(users, 'active', false), 'user');
	 * // => 'fred'
	 *
	 * // using the `_.property` callback shorthand
	 * _.result(_.find(users, 'active'), 'user');
	 * // => 'barney'
	 */
	var find = createFind(baseEach);
	
	module.exports = find;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseForOwn = __webpack_require__(52),
	    createBaseEach = __webpack_require__(56);
	
	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFor = __webpack_require__(53),
	    keys = __webpack_require__(10);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createBaseFor = __webpack_require__(54);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toObject = __webpack_require__(55);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while (fromRight ? index-- : ++index < length) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(14);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getLength = __webpack_require__(17),
	    isLength = __webpack_require__(19),
	    toObject = __webpack_require__(55);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function (collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);
	
	    while (fromRight ? index-- : ++index < length) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseCallback = __webpack_require__(58),
	    baseFind = __webpack_require__(79),
	    baseFindIndex = __webpack_require__(80),
	    isArray = __webpack_require__(22);
	
	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(eachFunc, fromRight) {
	  return function (collection, predicate, thisArg) {
	    predicate = baseCallback(predicate, thisArg, 3);
	    if (isArray(collection)) {
	      var index = baseFindIndex(collection, predicate, fromRight);
	      return index > -1 ? collection[index] : undefined;
	    }
	    return baseFind(collection, predicate, eachFunc);
	  };
	}
	
	module.exports = createFind;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseMatches = __webpack_require__(59),
	    baseMatchesProperty = __webpack_require__(71),
	    bindCallback = __webpack_require__(43),
	    identity = __webpack_require__(44),
	    property = __webpack_require__(77);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined ? func : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined ? property(func) : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsMatch = __webpack_require__(60),
	    getMatchData = __webpack_require__(68),
	    toObject = __webpack_require__(55);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function (object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || key in toObject(object));
	    };
	  }
	  return function (object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqual = __webpack_require__(61),
	    toObject = __webpack_require__(55);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqualDeep = __webpack_require__(62),
	    isObject = __webpack_require__(14),
	    isObjectLike = __webpack_require__(15);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var equalArrays = __webpack_require__(63),
	    equalByTag = __webpack_require__(65),
	    equalObjects = __webpack_require__(66),
	    isArray = __webpack_require__(22),
	    isTypedArray = __webpack_require__(67);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arraySome = __webpack_require__(64);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function (othValue) {
	        return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	      })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;

/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	"use strict";
	
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;

/***/ },
/* 65 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	'use strict';
	
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return object != +object ? other != +other : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == other + '';
	  }
	  return false;
	}
	
	module.exports = equalByTag;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(10);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isLength = __webpack_require__(19),
	    isObjectLike = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isStrictComparable = __webpack_require__(69),
	    pairs = __webpack_require__(70);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(14);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(10),
	    toObject = __webpack_require__(55);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(72),
	    baseIsEqual = __webpack_require__(61),
	    baseSlice = __webpack_require__(73),
	    isArray = __webpack_require__(22),
	    isKey = __webpack_require__(74),
	    isStrictComparable = __webpack_require__(69),
	    last = __webpack_require__(75),
	    toObject = __webpack_require__(55),
	    toPath = __webpack_require__(76);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = path + '';
	
	  path = toPath(path);
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue ? srcValue !== undefined || key in object : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toObject = __webpack_require__(55);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return index && index == length ? object : undefined;
	}
	
	module.exports = baseGet;

/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	"use strict";
	
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : +start || 0;
	  if (start < 0) {
	    start = -start > length ? 0 : length + start;
	  }
	  end = end === undefined || end > length ? length : +end || 0;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : end - start >>> 0;
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(22),
	    toObject = __webpack_require__(55);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if (type == 'string' && reIsPlainProp.test(value) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || object != null && value in toObject(object);
	}
	
	module.exports = isKey;

/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	"use strict";
	
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(30),
	    isArray = __webpack_require__(22);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	}
	
	module.exports = toPath;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(18),
	    basePropertyDeep = __webpack_require__(78),
	    isKey = __webpack_require__(74);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(72),
	    toPath = __webpack_require__(76);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = path + '';
	  path = toPath(path);
	  return function (object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	 * without support for callback shorthands and `this` binding, which iterates
	 * over `collection` using the provided `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @param {boolean} [retKey] Specify returning the key of the found element
	 *  instead of the element itself.
	 * @returns {*} Returns the found element or its key, else `undefined`.
	 */
	"use strict";
	
	function baseFind(collection, predicate, eachFunc, retKey) {
	  var result;
	  eachFunc(collection, function (value, key, collection) {
	    if (predicate(value, key, collection)) {
	      result = retKey ? key : value;
	      return false;
	    }
	  });
	  return result;
	}
	
	module.exports = baseFind;

/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for callback shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	"use strict";
	
	function baseFindIndex(array, predicate, fromRight) {
	  var length = array.length,
	      index = fromRight ? length : -1;
	
	  while (fromRight ? index-- : ++index < length) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var tu = __webpack_require__(6);
	var EMPTY_ARR = [];
	var hasPromise = (window && window.Promise || global && global.Promise) !== void 0;
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */
	function applyFuncs(one, two) {
	    var hasOne = typeof one === 'function';
	    var hasTwo = typeof two === 'function';
	
	    if (!hasOne && !hasTwo) {
	        return null;
	    }
	    if (!hasOne) {
	        return two;
	    }
	    if (!hasTwo) {
	        return one;
	    }
	
	    return function chainedFunction() {
	        one.apply(this, arguments);
	        two.apply(this, arguments);
	    };
	}
	
	function initValidators(v) {
	    //If it has a type init it
	    if (v.type) {
	        var validator = this.loadValidator(v.type);
	        return validator(v);
	    }
	    //If it is a RegExp than init ReExp
	    if (tu.isRegExp(v)) {
	        return this.loadValidator('regexp')({
	            regexp: v
	        });
	    }
	    //If its a function just return it.
	    if (tu.isFunction(v)) {
	        return v;
	    }
	    //otherwise lets try initing it.
	    return this.loadValidator(v)();
	}
	
	var Editor = React.createClass({
	    displayName: 'Editor',
	    mixins: [__webpack_require__(82)],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            field: {
	                type: 'Text'
	            },
	            /*onValueChange() {
	             },*/
	            onValidate: function onValidate() {},
	            template: 'EditorTemplate'
	
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            hasChanged: false,
	            isValid: false
	        };
	    },
	
	    setValue: function setValue(value) {
	        this.refs.field.setValue(value);
	    },
	    componentWillMount: function componentWillMount() {
	        var validators = this.props.field.validators;
	        this.validators = validators ? validators.map(initValidators, this.props.loader) : EMPTY_ARR;
	        this.props.valueManager.addListener(this.props.path, this.handleChange, this, true);
	        this.props.valueManager.addValidateListener(this.props.path, this._validate, this);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.props.valueManager.removeListener(this.props.path, this.handleChange);
	        this.props.valueManager.removeValidateListener(this.props.path, this._validate);
	    },
	    handleValidate: function handleValidate(value, component, e) {
	        this.state.hasValidated = true;
	        this.validate();
	    },
	
	    handleChange: function handleChange(newValue, oldValue, name) {
	        var hasChanged = newValue != oldValue;
	        if (!hasChanged) {
	            return;
	        }
	        this.state.hasChanged = true;
	        var errors = this.getErrorMessages(newValue);
	        if (!this.state.hasValidated) {
	            if (!errors || errors.length === 0) {
	                this.state.hasValidated = true;
	            }
	        } else {
	            this.validate(newValue, errors);
	        }
	    },
	    getValue: function getValue() {
	        return this.props.valueManager.path(this.props.path);
	    },
	
	    /**
	     * Runs validation and updates empty fields.
	     *
	     */
	    validate: function validate(value, errors) {
	        value = arguments.length === 0 ? this.getValue() : value;
	        errors = errors || this.getErrorMessages(value);
	
	        this.props.valueManager.updateErrors(this.props.path, errors);
	        this.setState({
	            hasValidated: true
	        });
	        return errors;
	    },
	    _validate: function _validate() {
	        this.validate(this.getValue());
	    },
	    getErrorMessages: function getErrorMessages(value) {
	        var vm = this.props.valueManager;
	
	        value = arguments.length === 0 ? this.getValue() : value;
	        var msgs = this.validators.map(function (v) {
	            return v(value, vm);
	        }).filter(tu.nullCheck);
	        return msgs;
	    },
	
	    title: function title() {
	        var field = this.props.field || {};
	        if (field.title === false) {
	            return null;
	        }
	        if (field.title != null) {
	            return field.title;
	        }
	        //Add spaces
	        return this.props.name.replace(/([A-Z])/g, ' $1').replace(/^./, function (s) {
	            return s.toUpperCase();
	        });
	    },
	    handleValid: function handleValid(valid) {
	        this.setState({ valid: valid });
	    },
	    render: function render() {
	        var _props = this.props;
	        var field = _props.field;
	        var onValueChange = _props.onValueChange;
	        var template = _props.template;
	        var onValidate = _props.onValidate;
	
	        var props = _objectWithoutProperties(_props, ['field', 'onValueChange', 'template', 'onValidate']);
	
	        var type = field.type;
	        var fieldClass = field.fieldClass;
	        var editorClass = field.editorClass;
	        var errorClassName = field.errorClassName;
	
	        var rfield = _objectWithoutProperties(field, ['type', 'fieldClass', 'editorClass', 'errorClassName']);
	
	        //err = errors, //&& errors[path] && errors[path][0] && errors[path],
	        var Component = this.props.loader.loadType(type),
	            title = this.title(),
	            errorClassName = errorClassName == null ? 'has-error' : errorClassName;
	        var Template;
	        if (template === false || field.template === false || type === 'Hidden') {
	            Template = null;
	        } else {
	            Template = this.template();
	        }
	        var child;
	        if (hasPromise && Component instanceof Promise) {
	            var Lazy = this.props.loader.loadType('LazyType');
	            child = React.createElement(Lazy, _extends({ ref: 'field' }, props, field, { field: rfield, editorClass: editorClass,
	
	                onValidate: this.handleValidate, promise: Component }));
	        } else {
	            child = React.createElement(Component, _extends({ ref: 'field' }, props, field, { field: rfield, editorClass: editorClass,
	
	                onValidate: this.handleValidate }));
	        }
	        /*if (onValid) {
	         onValid = applyFuncs(this.handleValid, onValid);
	         }*/
	        //errMessage, errorClassName, name, fieldClass, title, help
	        return Template ? React.createElement(
	            Template,
	            _extends({ field: rfield }, props, { fieldClass: fieldClass, title: title,
	                errorClassName: errorClassName,
	                help: !this.state.valid && (props.help || rfield.help),
	                onValidate: this.handleValidate
	            }),
	            child
	        ) : child;
	    }
	});
	module.exports = Editor;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(6),
	    loader = __webpack_require__(83);
	var LoaderMixin = {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            loader: loader
	        };
	    },
	    template: function template(_template) {
	        _template = arguments.length ? _template : 'template';
	        _template = this.props.field && _template in this.props.field ? this.props.field[_template] : _template in this.props ? this.props[_template] : _template;
	        if (util.isString(_template)) {
	            return this.props.loader.loadTemplate(_template, this.props);
	        }
	        return _template === false ? null : _template;
	    },
	
	    processor: function processor(_processor) {
	        _processor = arguments.length ? _processor : 'processor';
	        _processor = this.props.field && _processor in this.props.field ? this.props.field[_processor] : _processor in this.props ? this.props[_processor] : _processor;
	        if (util.isString(_processor)) {
	            return this.props.loader.loadProcessor(_processor, this.props);
	        }
	        return _processor === false ? null : _processor;
	    }
	
	};
	module.exports = LoaderMixin;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var tu = __webpack_require__(6),
	    concat = Function.apply.bind(Array.prototype.concat, []),
	    loaders = [],
	    types = { load: load, list: list, add: add },
	    api = {
	    /**
	     * @param template String - looks for a template named something.
	     */
	
	    addTemplate: add('Template'),
	    loadTemplate: load('Template'),
	    listTemplates: list('Template'),
	
	    addType: add('Type'),
	    loadType: load('Type'),
	    listTypes: list('Type'),
	
	    addSchema: add('Schema'),
	    loadSchema: load('Schema'),
	    listSchemas: list('Schema'),
	
	    addValidator: add('Validator'),
	    loadValidator: load('Validator'),
	    listValidators: list('Validator'),
	
	    addProcessor: add('Processor'),
	    loadProcessor: load('Processor'),
	    listProcessors: list('Processor'),
	
	    addLoader: function addLoader(loader) {
	        if (tu.isArray(loader)) {
	            return loader.map(function (v) {
	                return this.addLoader(v);
	            }, this);
	        }
	        Object.keys(loader).forEach(function (key) {
	            if (!(key in this)) {
	                var parts = /^(load|list)(.*)/.exec(key);
	                if (parts && parts.length > 2 && parts[1] in types) {
	                    this[key] = types[parts[1]](parts[2]);
	                } else {
	                    console.log('do not understand ' + key);
	                }
	            }
	        }, this);
	
	        loaders.unshift(loader);
	        return loader;
	    },
	    removeLoader: function removeLoader(loader) {
	        var idx = loaders.indexOf(loader);
	        if (0 > idx) {
	            return;
	        }
	        var ret = loaders.splice(idx, 1)[0];
	        if (ret && ret && ret.removeLoader) {
	            ret.removeLoader();
	        }
	        return ret;
	    },
	
	    clearLoaders: function clearLoaders() {
	        var ret = loaders.concat();
	        loaders.length = 0;
	        return ret;
	    }
	};
	
	function list(method) {
	    var type = 'list' + method + 's';
	    return function loader$list() {
	        return concat(loaders.filter(function (v) {
	            return typeof v[type] === 'function';
	        }).map(function (v) {
	            return v[type]();
	        }));
	    };
	}
	function load(method) {
	    method = 'load' + method;
	    return function load$load(load) {
	        var i = 0,
	            l = loaders.length,
	            ret = null,
	            scope;
	        for (; i < l; i++) {
	            var ret = loaders[i][method] && loaders[i][method].apply(this, arguments);
	            if (ret != null) {
	                return ret;
	            }
	        }
	    };
	}
	
	function add(type) {
	    var listKey = 'list' + type + 's',
	        loadKey = 'load' + type,
	        lcType = type.toLowerCase();
	    return function loader$add(key, value) {
	        var map,
	            _api = {};
	        if (tu.isString(key)) {
	            map = {};
	            map[key] = value;
	        } else {
	            map = key;
	        }
	        _api[listKey] = function () {
	            return Object.keys(map).map(function (name) {
	                var ret = { name: name };
	                ret[lcType] = map[name];
	                return ret;
	            });
	        };
	        _api[loadKey] = function (name) {
	            return map[name];
	        };
	        api.addLoader(_api);
	        return _api;
	    };
	}
	module.exports = api;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var tu = __webpack_require__(6);
	
	function removeListener(listeners) {
	    return function ValueManager$removeListener(path, listener) {
	        var remove = listeners.slice(0);
	        if (path && !listener && !tu.isString(path)) {
	            path = listener;
	            listener = null;
	        }
	        if (path) {
	            remove = remove.filter(function (v) {
	                return v.path === path;
	            });
	        }
	        if (listener) {
	            //make the return of addListener also able to be used
	            //in remove listener.
	            remove = remove.filter(function (v) {
	                return v === listener || v.listener === listener;
	            });
	        }
	        return remove.map(function (r) {
	            var idx = this.indexOf(r);
	            if (idx > -1) {
	                return this.splice(idx, 1)[0];
	            }
	        }, listeners);
	    };
	}
	/**
	 * This callback is displayed as a global member.
	 * It will call them in order of most distant to least distance path.
	 * In the event of two paths being the same distance, it will call the last
	 * added first.
	 *
	 * @callback ValueManagerListener
	 * @param {*} newValue - The new value to be updated
	 * @param {*} oldValue - The previous value updated.
	 * @param {String} path - The path to value updated
	 */
	function addListener(listeners, find, findOld) {
	    function remove() {
	        listeners.splice(listeners.indexOf(this), 1);
	        return this;
	    }
	
	    function once() {
	        var self = this,
	            listener = self.listener;
	
	        this.listener = function () {
	            var ret = listener.apply(this, arguments);
	            self.remove();
	            return ret;
	        };
	        return this;
	    }
	
	    return function ValueManager$addListener(path, listener, scope, init) {
	        if (tu.isFunction(path)) {
	            init = scope;
	            scope = listener;
	            listener = path;
	            path = null;
	        }
	        if (listener == null) {
	            return;
	        }
	        var obj = { path: path, listener: listener, scope: scope, remove: remove, once: once };
	
	        init = init === true ? obj.listener : tu.isFunction(init) ? init : null;
	        if (init) {
	            init.call(obj.scope, find(path), findOld(path), path);
	        }
	        if (listeners.length === 0) {
	            listeners.push(obj);
	        } else {
	            var plength = path ? path.split('.').length : 0;
	            for (var i = 0, l = listeners.length; i < l; i++) {
	
	                var lp = listeners[i].path,
	                    cllength = lp ? lp.split('.').length : 0;
	
	                if (plength >= cllength || i + 1 === l) {
	                    listeners.splice(i, 0, obj);
	                    break;
	                }
	            }
	        }
	        return obj;
	    };
	}
	function canDescend(obj) {
	    if (obj == null || tu.isNumber(obj) || tu.isBoolean(obj) || tu.isString(obj) || tu.isDate(obj) || tu.isArray(obj)) {
	        return false;
	    }
	    return true;
	}
	function copy(obj) {
	    return obj == null ? null : Array.isArray(obj) ? obj.slice(0) : tu.extend({}, obj);
	}
	/**
	 * Value manager listens and changes values on the objects.
	 * It can be passed a property to any subschema type, or form.
	 *
	 * @param value
	 * @param errors
	 * @returns {ValueManager}
	 * @constructor
	 */
	function ValueManager(value, errors) {
	    if (!(this instanceof ValueManager)) {
	        return new ValueManager(value, errors);
	    }
	    this.listeners = [];
	    this.errorListeners = [];
	    this.validateListeners = [];
	    this.setValue(value || {});
	    this.oldValue = tu.extend({}, this.value);
	    this.setErrors(errors);
	
	    var self = this;
	    /**
	     * Removes a value listener.
	     * @param {String} [path] -  path to remove.
	     * @param {ValueManagerListener} [fn] - the listener to look for.
	     * @param {Listener} [listener] - the listener returned from addListener();
	     */
	    this.removeListener = removeListener(this.listeners);
	
	    /**
	     * Adds a value listener
	     * @param {String} [path] - Path to listen to, null or no value will listen to all changes.
	     * @param {ValueManagerListener} listener - The listener to execute.
	     * @param {Object} [scope] - The scope to execute the listener in.
	     * @param {boolean|Function}  init - true or a function will execute when the listener is added.
	     * */
	    this.addListener = addListener(this.listeners, function (prop) {
	        return self.path(prop, self.value);
	    }, function (prop) {
	        return self.path(prop, self.oldValue);
	    });
	    /**
	     * Removes a error listener.
	     * @param {String} [path] -  path to remove.
	     * @param {ValueManagerListener} [fn] - the listener to look for.
	     * @param {Listener} [listener] - the listener returned from addListener();
	     */
	    this.removeErrorListener = removeListener(this.errorListeners);
	    /**
	     * Adds an error  listener
	     * @param {String} [path] - Path to listen to, null or no value will listen to all changes.
	     * @param {ValueManagerListener} listener - The listener to execute.
	     * @param {Object} [scope] - The scope to execute the listener in.
	     * @param {boolean|Function}  init - true or a function will execute when the listener is added.
	     * */
	    this.addErrorListener = addListener(this.errorListeners, function (prop) {
	        return self.errorsFor(prop);
	    }, tu.noop);
	
	    /**
	     * Adds a validate  listener
	     * @param {String} [path] - Path to listen to, null or no value will listen to all changes.
	     * @param {ValueManagerListener} listener - The listener to execute.
	     * @param {Object} [scope] - The scope to execute the listener in.
	     * @param {boolean|Function}  init - true or a function will execute when the listener is added.
	     * */
	
	    this.addValidateListener = addListener(this.validateListeners, tu.noop, tu.noop);
	    /**
	     * Removes a validate listener.
	     * @param {String} [path] -  path to remove.
	     * @param {Function} [ValueManagerListener] - the listener to look for.
	     * @param {Listener} [listener] - the listener returned from addListener();
	     */
	    this.removeValidateListener = removeListener(this.validateListeners);
	
	    this.createListeners = [];
	    this.addCreateValueListener = addListener(this.createListeners);
	    this.removeCreateValueListener = removeListener(this.createListeners);
	
	    this.submitListeners = [];
	    /**
	     * adds a submit listener.
	     * @param {String} [path] -  path to listen to.
	     * @param {Function} [ValueManagerListener] - the listener to look for.
	     * @param {Listener} [listener] - the listener returned from addListener();
	     */
	    this.addSubmitListener = addListener(this.submitListeners);
	    /**
	     * removes a submit listener;
	     */
	    this.removeSubmitListener = removeListener(this.submitListeners);
	}
	
	ValueManager.prototype = {
	    createValueManager: function createValueManager(value, errors, path) {
	        var vm = ValueManager(value, errors);
	        vm.addCreateValueListener(null, this.onCreateValueManager, this);
	        this.onCreateValueManager(vm, path);
	        return vm;
	    },
	    onCreateValueManager: function onCreateValueManager(vm, path) {
	        var v,
	            i = 0,
	            l = this.createListeners.length;
	        for (; i < l; i++) {
	            var v = this.createListeners[i];
	            if (!(v.path == null || v.path === path)) continue;
	            if (v.listener.call(v.scope, vm, path) === false) {
	                return false;
	            }
	        }
	        return true;
	    },
	    /**
	     * Removes all listeners, both error and value.
	     */
	    removeAll: function removeAll() {
	        this.listeners.length = 0;
	        this.errorListeners.length = 0;
	        this.validateListeners.length = 0;
	        this.createListeners.length = 0;
	        this.submitListeners.length = 0;
	    },
	
	    /**
	     * When onSubmit is called this is fired
	     */
	    onSubmit: function onSubmit(e, value, errors, path) {
	        var parts = path && path.split('.') || [],
	            i = 0,
	            l = parts.length,
	            pp = null;
	        do {
	            if (this.submitListeners.some(function (v) {
	                if (v.path == null || v.path === pp) {
	                    return v.listener.call(v.scope, e, value, errors, path) === false;
	                }
	            }, this) === true) {
	                return false;
	            }
	            pp = tu.path(pp, parts[i]);
	        } while (i++ < l);
	        return true;
	    },
	
	    /**
	     * Triggers the value change on all listeneners.
	     */
	    onValueChange: function onValueChange(path, value, oldValue) {
	        var _this = this;
	
	        var parts = path && path.split('.') || [],
	            i = 0,
	            l = parts.length,
	            pp = null;
	        do {
	            if (this.listeners.some(function (v) {
	                if (v.path === pp) {
	                    return v.listener.call(v.scope, _this.path(pp, _this.value), _this.path(pp, _this.oldValue), path) === false;
	                }
	            }, this) === true) {
	                return false;
	            }
	            pp = tu.path(pp, parts[i]);
	        } while (i++ < l);
	        return true;
	    },
	
	    /**
	     * Returns the path of an object
	     * @param {String} - a dot deliminted string.
	     * @param {Object} [object] - defaults to the current value.
	     */
	    path: function path(p, obj) {
	        if (arguments.length < 2) {
	            obj = this.value;
	        }
	        if (!p) return obj;
	
	        var parts = p.split('.');
	
	        for (var i = 0, l = parts.length; i < l; i++) {
	            var key = parts[i];
	            if (obj == null || !(key in obj)) {
	                return null;
	            }
	            obj = obj[key];
	        }
	        return obj;
	    },
	
	    /**
	     * Updates the value at a given path. This will trigger the value listeners.
	     * @param {String} path - Path to update
	     * @param {*} value - Value to update.argument.
	     */
	    update: function update(path, value) {
	        var parts = path.split('.'),
	            obj = this.value || (this.value = {}),
	            oobj = this.oldValue,
	            last = parts[parts.length - 1];
	
	        for (var i = 0, l = parts.length - 1; i < l; i++) {
	            var key = parts[i];
	
	            if (key in obj) {
	                //We won't build the oobj tree, we may need to in the case of multiple changes to the object.  The question becomes
	                // are old values the original values or the last change.
	                oobj = oobj && oobj[key];
	
	                //We copy it so that when oldValues and value share a nested object, they do not conflict, but we only need to do it when
	                // they are referencing the same instance, note we are parts -1 levels up, so really only arrays and objects.
	                obj = obj[key] = oobj === obj[key] ? copy(obj[key]) : obj[key];
	            } else {
	
	                //So the object tree isn't reached yet, we will create an array or object. if the key
	                // is an integer we will guess its an array, this will probably be correct 99% of the time, and
	                // horrible wrong 1%, se la vie.
	                if (/^\d+?$/.test(parts[i + 1])) {
	                    obj = obj[key] = [];
	                } else {
	                    obj = obj[key] = {};
	                }
	            }
	        }
	        if (value === void 0) {
	            delete obj[last];
	        } else {
	            obj[last] = value;
	        }
	        //We will build a path for the new value, but not for the oldvalue.   This
	        // might break whean a value changes multiple times.
	        return this.onValueChange(path, value, oobj && oobj[last]) !== false;
	    },
	
	    /**
	     * Returns the current value.
	     */
	    getValue: function getValue() {
	        return this.value;
	    },
	
	    /**
	     * @param {Object} value - The new value for the params.  Will trigger
	     * changes on all listeners.
	     */
	    setValue: function setValue(value) {
	        this.oldValue = tu.extend({}, this.value);
	        this.value = tu.extend({}, value);
	        if (this._setValue(value, this.oldValue) !== false) {}
	    },
	
	    _keys: function _keys() {
	        var args = Array.prototype.slice.call(arguments).map(function (v) {
	            return canDescend(v) ? Object.keys(v) : null;
	        });
	        return tu.unique(Array.prototype.concat.apply([], args).filter(tu.nullCheck));
	    },
	
	    _setValue: function _setValue(value, oldValue, path) {
	        if (canDescend(value) || canDescend(oldValue)) {
	            this._keys(value, oldValue).forEach(function (key) {
	                this._setValue(value && value[key], oldValue && oldValue[key], tu.path(path, key));
	            }, this);
	        } else {
	            return this.onValueChange(path, value, oldValue);
	        }
	    },
	
	    /**
	     * Triggers error handlers.
	     * @param {String} path - path to trigger the error.
	     * @param {Object[]} errors - Errors to set.
	     * @param {String} errors.name - Name of the error.
	     * @param {String} errors.message - Message of the error.
	     */
	    onError: function onError(path, errors) {
	        errors = errors && errors[0] ? errors : null;
	        var oErrors = this.errors || {},
	            listeners = this.errorListeners;
	
	        return listeners.some(function (v) {
	            if (path == null || v.path == null || v.path === path || path.indexOf(v.path + '.') === 0) {
	                return v.listener.call(v.scope, errors, oErrors[path], path) === false;
	            }
	        }, this);
	    },
	
	    /**
	     * Sets the current errors and triggers the error listeners.
	     *
	     * @param {Object} errors - object containing errors. The key is the full qualified path to the value in error
	     *
	     */
	    setErrors: function setErrors(errors) {
	        var keys = this._keys(errors, this.errors);
	        this.errors = tu.extend({}, errors);
	        return keys.some(function (key) {
	            return this.onError(key, this.errors[key]);
	        }, this) !== true;
	    },
	
	    getErrors: function getErrors() {
	        var ret = {};
	        Object.keys(this.errors).filter(function (v) {
	            return this[v] != null;
	        }, this.errors).forEach(function (v) {
	            ret[v] = this[v];
	        }, this.errors);
	        return ret;
	    },
	
	    updateErrors: function updateErrors(path, errors) {
	        errors = Array.isArray(errors) ? errors : [errors];
	        errors = errors && errors[0] ? errors : null;
	        this.errors[path] = errors;
	        this.onError(path, errors);
	    },
	
	    errorsFor: function errorsFor(path) {
	        var pathe = path + '.',
	            keys = Object.keys(this.errors).filter(function (key) {
	            return this[key] != null && (path == null || key === path || key.indexOf(pathe) === 0);
	        }, this.errors),
	            errors = [];
	
	        if (keys.length < 2) {
	            return this.errors[keys[0]];
	        }
	        keys.forEach(function (key) {
	            tu.push(errors, this[key]);
	        }, this.errors);
	        return errors;
	    },
	
	    /**
	     * Trigger the validators.
	     *
	     */
	    validate: function validate(path) {
	        var pp = path && path + '.';
	        this.validateListeners.forEach(function ValueManager$validate$forEach(v) {
	            if (path == null || v.path === path || pp.indexOf(path) === 0) v.listener.call(v.scope, path);
	        });
	    },
	    /**
	     * Trigger Validators And Callback with Errors for paths.
	     */
	    validatePaths: function validatePaths(paths, callback) {
	        var copyPaths = paths && paths.concat() || [];
	        var errors;
	        paths.forEach(function validatePaths$forEach(path) {
	            function error$callback(error) {
	                this.removeErrorListener(path, error$callback);
	                if (error) {
	                    errors = errors || {};
	                    errors[path] = error;
	                }
	                copyPaths.splice(copyPaths.indexOf(path), 1);
	                if (copyPaths.length === 0 && callback) {
	                    callback(errors);
	                }
	            }
	
	            this.addErrorListener(path, error$callback, this);
	            this.validate(path);
	        }, this);
	        return errors;
	    }
	};
	
	module.exports = ValueManager;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	//==================================================================================================
	//VALIDATORS
	//==================================================================================================
	//Borrowed from backbone-forms, thanks!
	
	'use strict';
	
	module.exports = (function (_) {
	
	    var validators = {};
	
	    validators.errMessages = {
	        required: 'Required',
	        regexp: 'Invalid',
	        number: 'Must be a number',
	        email: 'Invalid email address',
	        url: 'Invalid URL',
	        match: _.template('Must match field "<%= field %>"')
	    };
	
	    validators.required = function (options) {
	        options = _.extend({
	            type: 'required',
	            message: this.errMessages.required
	        }, options);
	
	        return function required(value) {
	            options.value = value;
	
	            var err = {
	                type: options.type,
	                message: _.isFunction(options.message) ? options.message(options) : options.message
	            };
	
	            if (value === null || value === undefined || value === false || value === '') return err;
	        };
	    };
	
	    validators.regexp = function (options) {
	        if (!options.regexp) throw new Error('Missing required "regexp" option for "regexp" validator');
	
	        options = _.extend({
	            type: 'regexp',
	            match: true,
	            message: this.errMessages.regexp
	        }, options);
	
	        return function regexp(value) {
	            options.value = value;
	
	            var err = {
	                type: options.type,
	                message: _.isFunction(options.message) ? options.message(options) : options.message
	            };
	
	            //Don't check empty values (add a 'required' validator for this)
	            if (value === null || value === undefined || value === '') return;
	
	            //Create RegExp from string if it's valid
	            if ('string' === typeof options.regexp) options.regexp = new RegExp(options.regexp, options.flags);
	
	            if (options.match ? !options.regexp.test(value) : options.regexp.test(value)) return err;
	        };
	    };
	
	    validators.number = function (options) {
	        options = _.extend({
	            type: 'number',
	            message: this.errMessages.number,
	            regexp: /^[0-9]*\.?[0-9]*?$/
	        }, options);
	
	        return validators.regexp(options);
	    };
	
	    validators.email = function (options) {
	        options = _.extend({
	            type: 'email',
	            message: this.errMessages.email,
	            regexp: /^[\w\-]{1,}([\w\-\+.]{1,1}[\w\-]{1,}){0,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/
	        }, options);
	
	        return validators.regexp(options);
	    };
	
	    validators.url = function (options) {
	        options = _.extend({
	            type: 'url',
	            message: this.errMessages.url,
	            regexp: /^(http|https):\/\/(([A-Z0-9][A-Z0-9_\-]*)(\.[A-Z0-9][A-Z0-9_\-]*)+)(:(\d+))?\/?/i
	        }, options);
	
	        return validators.regexp(options);
	    };
	
	    validators.match = function (options) {
	        if (!options.field) throw new Error('Missing required "field" options for "match" validator');
	
	        options = _.extend({
	            type: 'match',
	            message: this.errMessages.match
	        }, options);
	
	        return function match(value, attrs) {
	            options.value = value;
	
	            var err = {
	                type: options.type,
	                message: _.isFunction(options.message) ? options.message(options) : options.message
	            };
	
	            //Don't check empty values (add a 'required' validator for this)
	            if (value === null || value === undefined || value === '') return;
	
	            if (value !== attrs.path(options.field)) return err;
	        };
	    };
	
	    return validators;
	})(__webpack_require__(6));

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var FieldValueMixin = {
	    mixins: [__webpack_require__(87), __webpack_require__(88), __webpack_require__(89), __webpack_require__(90)]
	};
	module.exports = FieldValueMixin;

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	
	var BasicFieldMixin = {
	    componentWillMount: function componentWillMount() {
	        if (!this.props.valueManager) {
	            return;
	        }
	        if (this.props.value) {
	            this.props.valueManager.setValue(this.props.value);
	        }
	        if (this.props.errors) {
	            this.props.valueManager.setErrors(this.props.errors);
	        }
	        this.props.valueManager.addListener(this.props.path, this.setValue, this, true);
	        // this.props.valueManager.addListener(this.props.path, this.props.onValueChange, this);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        if (!this.props.valueManager) {
	            return;
	        }
	        this.props.valueManager.removeListener(this.props.path, this.setValue, this);
	        // this.props.valueManager.removeListener(this.props.path, this.props.onValueChange);
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            handleChange: function handleChange(value) {
	                if (!this.valueManager) {
	                    this.onValueChange(value);
	                    return;
	                }
	                if (this.valueManager.update(this.path, value) !== false) {
	                    this.onValueChange(value);
	                }
	            },
	            onValueChange: function onValueChange(value) {}
	        };
	    }
	};
	
	module.exports = BasicFieldMixin;

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';
	
	var FieldValueDefaultPropsMixin = {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '',
	            name: '',
	            placeholder: '',
	            dataType: this.dataType,
	            editorClass: '',
	            field: {},
	            onValidate: function onValidate() {},
	            onFocus: function onFocus() {},
	            onBlur: function onBlur() {},
	            onValid: function onValid() {},
	            onChange: function onChange() {}
	        };
	    }
	};
	module.exports = FieldValueDefaultPropsMixin;

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";
	
	var FieldStateMixin = {
	    getInitialState: function getInitialState() {
	        return {
	            value: this.props.value
	        };
	    },
	    setValue: function setValue(value) {
	        this.setState({ value: value });
	    },
	    getValue: function getValue() {
	        return this.state.value;
	    }
	};
	module.exports = FieldStateMixin;

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";
	
	var HandleFieldValueMixin = {
	    handleChange: function handleChange(e) {
	        this.props.onChange(e);
	        this.props.handleChange(this.valueFromEvt(e));
	    },
	    handleValidate: function handleValidate(e) {
	        this.props.onBlur.call(this, e);
	        this.props.onValidate(this.valueFromEvt(e), this, e);
	    }
	};
	module.exports = HandleFieldValueMixin;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    loadValidator: function loadValidator(validator) {
	        var validators = __webpack_require__(85);
	        return validators[validator] && validators[validator].bind(validators);
	    },
	    listValidators: function listValidators() {
	        var validators = __webpack_require__(85);
	        return Object.keys(validators).map(function (name) {
	            var validator = validators[name];
	            return {
	                name: name, validator: validator
	            };
	        });
	    }
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    loadTemplate: function loadTemplate(template) {
	        return __webpack_require__(93)('./' + template + '.jsx');
	    },
	    listTemplates: function listTemplates() {
	
	        return __webpack_require__(138).keys().map(function (k) {
	            return {
	                name: k.replace(/.*\/(.*)\.js(x?)/, '$1'),
	                path: k
	            };
	        });
	    },
	    loadType: function loadType(type) {
	        return __webpack_require__(139)('./' + type + '.jsx');
	    },
	    listTypes: function listTypes() {
	        return __webpack_require__(139).keys().map(function (k) {
	            return {
	                name: k.replace(/.*\/(.*)\.js(x?)/, '$1'),
	                path: k
	            };
	        }).filter(function (v) {
	            return !/Mixin$/.test(v.name);
	        });
	    }
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./AutocompleteItemTemplate.jsx": 94,
		"./ButtonTemplate.jsx": 95,
		"./ButtonsTemplate.jsx": 96,
		"./CheckboxTemplate.jsx": 97,
		"./CheckboxesGroupTemplate.jsx": 98,
		"./CheckboxesTemplate.jsx": 99,
		"./CollectionCreateTemplate.jsx": 100,
		"./EditorTemplate.jsx": 102,
		"./FieldSetTemplate.jsx": 104,
		"./FormTemplate.jsx": 105,
		"./ItemToStringTemplate.jsx": 106,
		"./ListItemMixin.js": 107,
		"./ListItemTemplate.jsx": 108,
		"./ListTemplate.jsx": 109,
		"./ObjectTemplate.jsx": 113,
		"./RadioItemTemplate.jsx": 114,
		"./SimpleTemplate.jsx": 115,
		"./WizardProgressTemplate.jsx": 116,
		"./WizardTemplate.jsx": 121
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 93;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var AutocompleteItemTemplate = React.createClass({
	    displayName: 'AutocompleteItemTemplate',
	
	    getDefaultProps: function getDefaultProps() {
	        return {
	            data: null,
	            value: null,
	            focus: false,
	            onSelect: function onSelect() {}
	        };
	    },
	    /*shouldComponentUpdate() {
	     // Events never change, so return false always.
	     return false;
	     },*/
	    handleClick: function handleClick(e) {
	        e && e.preventDefault();
	        this.props.onSelect(this.props.data);
	    },
	    render: function render() {
	        var _props = this.props;
	        var data = _props.data;
	        var focus = _props.focus;
	        var value = _props.value;
	        var processor = _props.processor;
	
	        var cls = 'addr_itm list-group-item ' + (focus ? 'focused' : '');
	        var html = processor.format(data, value, true);
	        return html == null ? null : React.createElement('li', { ref: 'item', className: cls, onClick: this.handleClick, dangerouslySetInnerHTML: { __html: html } });
	    }
	});
	module.exports = AutocompleteItemTemplate;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var Button = React.createClass({
	    displayName: 'Button',
	
	    getDefaultProps: function getDefaultProps() {
	        return {
	            action: 'Submit',
	            label: 'Submit',
	            buttonClass: 'btn',
	            iconClass: null
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            disabled: this.props.disabled || false
	        };
	    },
	    setDisabled: function setDisabled(disabled) {
	        this.setState({ disabled: disabled });
	    },
	    handleClick: function handleClick(e) {
	        this.props.onClick(e, this.props.action, this);
	    },
	    render: function render() {
	        var _props = this.props;
	        var buttonClass = _props.buttonClass;
	        var title = _props.title;
	        var iconClass = _props.iconClass;
	        var onClick = _props.onClick;
	        var label = _props.label;
	
	        var props = _objectWithoutProperties(_props, ['buttonClass', 'title', 'iconClass', 'onClick', 'label']);
	
	        return React.createElement(
	            'button',
	            _extends({ className: buttonClass, title: title, disabled: this.state.disabled,
	                onClick: this.handleClick }, props),
	            iconClass ? React.createElement('i', { className: iconClass }) : null,
	            label
	        );
	    }
	});
	module.exports = Button;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var tu = __webpack_require__(6);
	
	var ButtonsTemplate = React.createClass({
	    displayName: 'ButtonsTemplate',
	
	    mixins: [__webpack_require__(82)],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            buttonsClass: 'btn-group',
	            buttonClass: 'btn',
	            buttonTemplate: 'ButtonTemplate',
	            buttons: [{
	                action: 'Submit',
	                label: 'Submit',
	                template: 'Button'
	            }],
	            onClick: function onClick(event, action, btn) {}
	        };
	    },
	
	    makeButtons: function makeButtons() {
	        var _this = this;
	
	        var onClick = this.props.onClick;
	        return this.props.buttons.map(function (b) {
	            onClick = b.onClick || onClick;
	            var btn = tu.isString(b) ? {
	                action: b,
	                label: b,
	                onClick: onClick
	            } : tu.extend({}, b, { onClick: onClick });
	            if (_this.props.buttonClass) {
	                btn.buttonClass = (btn.buttonClass || '') + ' ' + _this.props.buttonClass;
	            }
	            btn.template = _this.props.loader.loadTemplate(b.template || _this.props.buttonTemplate);
	            return btn;
	        });
	    },
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement(
	                'div',
	                { className: this.props.buttonsClass },
	                this.makeButtons().map(function (b, i) {
	                    var Template = b.template;
	                    return React.createElement(Template, _extends({ key: "btn-" + i }, b));
	                })
	            )
	        );
	    }
	
	});
	
	module.exports = ButtonsTemplate;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	
	var CheckboxTemplate = React.createClass({
	    displayName: "CheckboxTemplate",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "checkbox" },
	            React.createElement(
	                "label",
	                null,
	                this.props.children,
	                this.props.label
	            )
	        );
	    }
	});
	
	module.exports = CheckboxTemplate;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var CheckboxesGroupTemplate = React.createClass({
	    displayName: "CheckboxesGroupTemplate",
	
	    render: function render() {
	        return React.createElement(
	            "fieldset",
	            { className: "group" },
	            React.createElement(
	                "legend",
	                null,
	                this.props.group
	            ),
	            this.props.children
	        );
	    }
	});
	module.exports = CheckboxesGroupTemplate;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(97);

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Editor = __webpack_require__(81);
	var CreateItemMixin = __webpack_require__(101);
	var CollectionCreateTemplate = React.createClass({
	    displayName: 'CollectionCreateTemplate',
	
	    mixins: [CreateItemMixin],
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'panel panel-default' },
	            React.createElement(
	                'div',
	                { className: 'panel-heading' },
	                React.createElement(
	                    'h3',
	                    { className: 'panel-title clearfix ' },
	                    this.props.title
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'panel-body' },
	                React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(Editor, { ref: 'itemEditor', field: this.props.field, value: this.props.value,
	                        valueManager: this.valueManager,
	                        name: this.props.name,
	                        pid: this.props.editPid,
	                        form: null })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(
	                        'button',
	                        { className: 'btn btn-default pull-left', ref: 'cancelBtn', type: 'reset', onClick: this.props.onCancel },
	                        'Cancel'
	                    ),
	                    React.createElement(
	                        'button',
	                        { className: 'btn btn-primary pull-right', type: 'submit', ref: 'submitBtn',
	                            onClick: this.handleSubmit },
	                        this.props.submitButton
	                    )
	                )
	            )
	        );
	    }
	});
	module.exports = CollectionCreateTemplate;

/***/ },
/* 101 */
/***/ function(module, exports) {

	//Pulling this out so other templates could benefit.
	"use strict";
	
	var CreateItemMixin = {
	    componentWillMount: function componentWillMount() {
	        /**
	         * This allows valueManager listeners to see new items being created before they are added
	         * to the respective objects.   It has a high potential of leaking, hence the componentWillUnmount
	         */
	        this.valueManager = this.props.valueManager.createValueManager(this.props.value, {}, this.props.path);
	        this.props.valueManager.addSubmitListener(null, this.handleSubmit);
	    },
	    handleSubmit: function handleSubmit(e, value, errors, path) {
	        e && e.preventDefault();
	        this.props.onSubmit(e, this.valueManager.getValue(), this.valueManager.getErrors(), this.props.path);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.props.valueManager.removeSubmitListener(null, this.handleSubmit);
	        this.valueManager.removeAll();
	    }
	};
	module.exports = CreateItemMixin;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var css = __webpack_require__(103);
	var EditorTemplate = React.createClass({
	    displayName: 'EditorTemplate',
	    componentWillMount: function componentWillMount() {
	        this.props.valueManager.addErrorListener(this.props.path, this.setError, this, true);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.props.valueManager.removeErrorListener(this.props.path, this.setError);
	    },
	    setError: function setError(errors) {
	        this.setState({
	            error: errors && errors[0].message
	        });
	    },
	    render: function render() {
	        var _props = this.props;
	        var name = _props.name;
	        var title = _props.title;
	        var help = _props.help;
	        var errorClassName = _props.errorClassName;
	        var message = _props.message;
	        var fieldClass = _props.fieldClass;
	        var children = _props.children;
	
	        var error = this.state.error;
	        return React.createElement(
	            'div',
	            {
	                className: "form-group field-name " + (error != null ? errorClassName || '' : '') + ' ' + css.forEditor(this) },
	            title ? React.createElement(
	                'label',
	                { className: 'col-sm-2 control-label', htmlFor: name },
	                React.createElement('span', { dangerouslySetInnerHTML: { __html: title } })
	            ) : null,
	            React.createElement(
	                'div',
	                { className: 'col-sm-10' },
	                children,
	                React.createElement(
	                    'p',
	                    { className: 'help-block', ref: 'help' },
	                    error || help
	                )
	            )
	        );
	    }
	});
	module.exports = EditorTemplate;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(6);
	function addClasses(classes, str) {
	    if (str == null) {
	        return;
	    }
	    if (util.isString(str)) {
	        util.push(classes, str.split(/\s+?/));
	    }
	    if (util.isArray(str)) {
	        str.forEach(function (v) {
	            return addClasses(classes, v);
	        });
	    }
	    if (util.isFunction(str)) {
	        addClasses(classes, str.call(this));
	    }
	}
	module.exports = {
	    /**
	     * Determines the classes for a field.
	     * Takes a react node as the first argument.
	     * @param {ReactElement} node - node to create for.
	     * @param {String|Function|Array<String|Function|Array>} [clases] -classes to add.
	     */
	    forField: function forField(node) {
	        var classes = [];
	        addClasses(classes, util.slice(arguments, 1));
	        var field = node.props.field;
	        var className = field && field.className || node.props.className;
	
	        if (className) {
	            addClasses(classes, className);
	        } else if (node.constructor.inputClassName) {
	            util.push(classes, node.constructor.inputClassName.split(/\s+?/));
	        }
	        return classes.join(' ');
	    },
	    forEditor: function forEditor(node) {
	        var classes = [];
	        addClasses(classes, util.slice(arguments, 1));
	        var field = node.props.field;
	        var className = node.props.fieldClsName || node.props.fieldClassName || node.props.fieldClass;
	
	        if (className) {
	            addClasses(classes, className);
	        } else if (node.constructor.fieldClassName) {
	            util.push(classes, node.constructor.inputClassName.split(/\s+?/));
	        }
	        if (field) {
	            addClasses.call(node, classes, field.fieldClass);
	            addClasses.call(node, classes, field.fieldCls);
	        }
	        return classes.join(' ');
	    }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	
	var FieldSetTemplate = React.createClass({
	    displayName: 'FieldSetTemplate',
	
	    render: function render() {
	        var f = this.props.field;
	        return f.legend ? React.createElement(
	            'fieldset',
	            null,
	            React.createElement(
	                'legend',
	                null,
	                f.legend
	            ),
	            this.props.children
	        ) : React.createElement(
	            'div',
	            null,
	            this.props.children
	        );
	    }
	
	});
	
	module.exports = FieldSetTemplate;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	
	var FormTemplate = React.createClass({
	    displayName: 'FormTemplate',
	
	    render: function render() {
	        var _props = this.props;
	        var children = _props.children;
	
	        var props = _objectWithoutProperties(_props, ['children']);
	
	        return React.createElement(
	            'form',
	            props,
	            children
	        );
	    }
	});
	
	module.exports = FormTemplate;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var util = __webpack_require__(6);
	var ItemToStringTemplate = React.createClass({
	    displayName: 'ItemToStringTemplate',
	
	    render: function render() {
	        var _props = this.props;
	        var value = _props.value;
	        var labelKey = _props.labelKey;
	
	        if (labelKey) {
	            return React.createElement(
	                'span',
	                { className: 'brf-value list-group-item-text' },
	                value[labelKey] || ''
	            );
	        }
	        return React.createElement(
	            'span',
	            { className: 'brf-value list-group-item-text' },
	            value == null ? null : value + ''
	        );
	    }
	});
	
	module.exports = ItemToStringTemplate;

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	
	var ListItemMixin = {
	    getDefaultProps: function getDefaultProps() {
	        return {
	            type: 'Text',
	            onMoveUp: function onMoveUp() {},
	            onMoveDown: function onMoveDown() {},
	            onDelete: function onDelete() {},
	            onValidate: function onValidate() {},
	            onValueChange: function onValueChange() {},
	            onEdit: function onEdit() {},
	            last: false,
	            itemToString: function itemToString(v) {
	                return v != null ? v.toString() : '';
	            }
	        };
	    },
	    handleMoveUp: function handleMoveUp(e) {
	        e.preventDefault();
	        this.props.onMoveUp(this.props.pos, this.props.value, this.props.pid);
	    },
	    handleMoveDown: function handleMoveDown(e) {
	        e.preventDefault();
	        this.props.onMoveDown(this.props.pos, this.props.value, this.props.pid);
	    },
	    handleDelete: function handleDelete(e) {
	        e.preventDefault();
	        this.props.onDelete(this.props.pos, this.props.value, this.props.pid);
	    },
	    handleEdit: function handleEdit(e) {
	        e.preventDefault();
	        var val = this.props.value;
	        if (this.props.valueProp) {
	            val = {};
	            val[this.props.valueProp] = this.props.value;
	        }
	
	        this.props.onEdit(this.props.pos, val, this.props.pid);
	    }
	};
	module.exports = ListItemMixin;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var tpath = __webpack_require__(6).path;
	var Buttons = __webpack_require__(96);
	var ListItemTemplate = React.createClass({
	    displayName: 'ListItemTemplate',
	
	    mixins: [__webpack_require__(107)],
	    renderField: function renderField() {
	        var field = this.props.field,
	            content = this.props.itemToString(this.props.value);
	
	        if (field.canEdit) {
	            return React.createElement(
	                'a',
	                { className: 'item-value', ref: 'edit', onClick: this.handleEdit,
	                    path: tpath(this.props.path, this.props.pos) },
	                content
	            );
	        } else {
	            return React.createElement(
	                'span',
	                { className: 'item-value' },
	                content
	            );
	        }
	    },
	    buttons: function buttons(pos, last, canReorder, canDelete) {
	        var buttons = [];
	        var buttonClass = 'btn btn-xs btn-default';
	        if (canReorder) {
	            if (pos > 0) {
	                buttons.push({
	                    onClick: this.handleMoveUp,
	                    title: 'Move Up',
	                    label: '',
	                    iconClass: 'glyphicon glyphicon-chevron-up',
	                    buttonClass: buttonClass,
	                    ref: 'upBtn'
	                });
	            }
	            if (!last) {
	                buttons.push({
	                    onClick: this.handleMoveDown,
	                    title: 'Move Down',
	                    iconClass: 'glyphicon glyphicon-chevron-down',
	                    buttonClass: buttonClass,
	                    label: '',
	                    ref: 'downBtn'
	                });
	            }
	            if (canDelete) {
	                buttons.push({
	                    onClick: this.handleDelete,
	                    title: 'Delete',
	                    iconClass: 'glyphicon glyphicon-remove',
	                    buttonClass: buttonClass,
	                    label: '',
	                    ref: 'deleteBtn'
	                });
	            }
	        }
	
	        return buttons;
	    },
	    render: function render() {
	        var _props = this.props;
	        var pos = _props.pos;
	        var field = _props.field;
	        var value = _props.value;
	        var errors = _props.errors;
	        var path = _props.path;
	        var onValidate = _props.onValidate;
	        var last = _props.last;
	        var onValueChange = _props.onValueChange;
	        var type = field.type;
	        var name = field.name;
	        var canReorder = field.canReorder;
	        var canDelete = field.canDelete;
	
	        var error = errors && errors[0] && errors[0].message;
	        return React.createElement(
	            'li',
	            { className: 'list-group-item ' + (error ? 'has-error' : '') },
	            this.renderField(),
	            error ? React.createElement(
	                'p',
	                { ref: 'error', className: 'help-block' },
	                error
	            ) : null,
	            React.createElement(Buttons, { buttons: this.buttons(pos, last, canReorder, canDelete), ref: 'buttons',
	                buttonsClass: 'btn-group pull-right' })
	        );
	    }
	
	});
	module.exports = ListItemTemplate;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ListInput = __webpack_require__(110);
	var css = __webpack_require__(103);
	var ListTemplate = React.createClass({
	    displayName: 'ListTemplate',
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: this.props.className },
	            this.props.renderAdd,
	            React.createElement(
	                'ul',
	                { className: css.forField(this, 'input-list') },
	                this.props.children
	            )
	        );
	    }
	});
	
	module.exports = ListTemplate;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Constants = __webpack_require__(111);
	var tu = __webpack_require__(6);
	var CollectionMixin = __webpack_require__(112);
	var css = __webpack_require__(103);
	var ListInput = React.createClass({
	    displayName: 'ListInput',
	
	    mixins: [CollectionMixin],
	    getDefaultProps: function getDefaultProps() {
	        return {
	
	            title: '',
	            placeholder: '',
	            itemType: 'Text',
	            onValidate: function onValidate() {},
	            itemTemplate: 'ListItemTemplate',
	            collectionCreateTemplate: this.collectionCreateTemplate
	
	        };
	    },
	
	    unwrap: function unwrap(value) {
	        var ret = (value || []).map(function (v, i) {
	            return v && v.value && v.value.value;
	        });
	        return ret;
	    },
	
	    wrap: function wrap(prop) {
	        var value = prop && prop.value || [];
	        var wrapped = value.map(function (v, k) {
	            return {
	                id: k,
	                value: {
	                    value: value[k]
	                }
	            };
	        });
	        return {
	            wrapped: wrapped
	        };
	    },
	    cloneVal: function cloneVal(val) {
	        return {
	            value: tu.clone(val)
	        };
	    },
	    itemToString: function itemToString() {
	        if (this.props.itemToString) return this.props.itemToString;else if (this.props.labelKey) {
	            var labelKey = this.props.labelKey;
	            return function (v) {
	                if (!v) {
	                    return null;
	                }
	                return React.createElement(
	                    'span',
	                    { className: 'brf-value list-group-item-text' },
	                    v[labelKey] || ''
	                );
	            };
	        }
	        return function (v) {
	            return v && v.toString();
	        };
	    },
	    /* unwrap:function(value){
	     if (value == null) return [];
	     return value.map(this.extractValue);
	     },*/
	    getTemplateItem: function getTemplateItem() {
	        return {
	            type: 'Object',
	            name: this.props.name,
	            title: this.props.title,
	            subSchema: {
	                value: this.props.itemType
	            },
	            fields: ['value']
	        };
	    },
	    render: function render() {
	        var _this = this;
	
	        var _props = this.props;
	        var name = _props.name;
	        var itemTemplate = _props.itemTemplate;
	        var itemType = _props.itemType;
	        var errors = _props.errors;
	        var path = _props.path;
	        var field = _props.field;
	        var value = _props.value;var item = !itemType || tu.isString(itemType) ? {
	            type: itemType || 'Text',
	            name: name
	        } : itemType;var ListItemTemplate = this.template(itemTemplate);var values = this.state.wrapped || [];var length = values.length;
	        item.canReorder = this.props.canReorder;
	        item.canDelete = this.props.canDelete;
	        item.canEdit = this.props.canEdit;
	        item.canAdd = this.props.canAdd;
	        this._item = item;
	        var err = this.state.errors || {};
	        var itemToString = this.itemToString();
	        return React.createElement(
	            'div',
	            { className: css.forField(this, 'list-editor') },
	            this.renderAdd(),
	            React.createElement(
	                'ul',
	                { className: css.forField(this, ListInput.inputListClassName) },
	                values.map(function (v, i) {
	                    var lipath = tu.path(path, v.id);
	                    return React.createElement(ListItemTemplate, { ref: name + '_' + i, key: 'li-' + name + '-' + v.id, pos: i,
	                        onMoveUp: _this.handleMoveUp,
	                        itemToString: itemToString,
	                        onMoveDown: _this.handleMoveDown, onDelete: _this.handleDelete,
	                        onEdit: _this.handleEdit,
	                        field: item,
	                        path: lipath,
	                        errors: err && err[lipath],
	                        pid: v.id,
	                        value: v.value.value, last: i + 1 === length });
	                })
	            )
	        );
	    }
	
	});
	module.exports = ListInput;

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	var api = {
	    inputClassName: 'form-control',
	    listClassName: 'edit-list list-group'
	};
	
	module.exports = api;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Editor = __webpack_require__(81);
	var Constants = __webpack_require__(111);
	var ValueManager = __webpack_require__(84);
	var BasicFieldMixin = __webpack_require__(87);
	var LoaderMixin = __webpack_require__(82);
	
	var CollectionMixin = {
	    statics: {
	        listClassName: Constants.listClassName,
	        itemTemplate: 'ListItemTemplate'
	    },
	    mixins: [BasicFieldMixin, LoaderMixin],
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            createTemplate: 'CollectionCreateTemplate',
	            buttonTemplate: 'ButtonTemplate'
	        };
	    },
	
	    getValue: function getValue() {
	        return this.unwrap(this.state.wrapped);
	    },
	    setValue: function setValue(value) {
	        this.setState(this.wrap({ value: value }));
	    },
	    setErrors: function setErrors(errors) {
	        this.setState({ errors: errors });
	    },
	    handleMoveUp: function handleMoveUp(pos, val) {
	        var values = this.state.wrapped,
	            oval = values && values.concat();
	        values.splice(Math.max(pos - 1, 0), 0, values.splice(pos, 1)[0]);
	        this.changeValue(values, oval);
	    },
	    handleMoveDown: function handleMoveDown(pos, val) {
	        var values = this.state.wrapped,
	            oval = values && values.concat();
	        values.splice(Math.min(pos + 1, values.length), 0, values.splice(pos, 1)[0]);
	        this.changeValue(values, oval);
	    },
	    handleDelete: function handleDelete(pos, val, pid) {
	        var values = this.state.wrapped,
	            oval = values && values.concat();
	        values.splice(pos, 1);
	        this.changeValue(values, oval);
	    },
	    handleEdit: function handleEdit(pos, val, pid) {
	        this.setState({
	            showAdd: false,
	            showEdit: true,
	            editPid: pid,
	            editValue: this.cloneVal(val)
	        });
	    },
	
	    changeValue: function changeValue(newValue, oldValue) {
	        if (this.props.handleChange(this.unwrap(newValue)) !== false) {
	
	            this.setState({
	                wrapped: newValue,
	                showAdd: false,
	                showEdit: false,
	                editValue: null
	            });
	        }
	    },
	    handleAddBtn: function handleAddBtn(e) {
	        e && e.preventDefault();
	        this.setState({ showAdd: true, editValue: {} });
	    },
	    handleCancelAdd: function handleCancelAdd(e) {
	        e && e.preventDefault();
	        this.setState({ showAdd: false, showEdit: false, editValue: null });
	    },
	    handleAddValue: function handleAddValue(e, value) {
	        e && e.preventDefault();
	        this.addValue(value);
	    },
	    handleEditValue: function handleEditValue(e, nv) {
	        e && e.preventDefault();
	        var value = this.state.wrapped,
	            oval = value && value.concat(),
	            editPid = this.state.editPid;
	        value.some(function (v, i) {
	            if (v.id === editPid) {
	                v.value = nv;
	                return true;
	            }
	        });
	        this.changeValue(value, oval);
	    },
	
	    addValue: function addValue(newValue) {
	        var values = this.state.wrapped || [],
	            oval = values && values.concat();
	        values.push({
	            id: newValue.key || values.length,
	            value: newValue
	        });
	        this.changeValue(values, oval);
	    },
	    renderAddEditTemplate: function renderAddEditTemplate(edit, create) {
	        var handler,
	            label = '';
	        if (edit) {
	            handler = this.handleEditValue;
	            label = 'Save';
	        } else if (create) {
	            handler = this.handleAddValue;
	            label = 'Create';
	        } else {
	            return null;
	        }
	        var CreateTemplate = this.template('createTemplate');
	        var title = this.props.title || '';
	        return React.createElement(CreateTemplate, { editPid: this.state.editPid, field: this.getTemplateItem(),
	            valueManager: this.props.valueManager,
	            name: this.props.name,
	            ref: 'addEdit',
	            value: this.state.editValue,
	            title: create ? 'Create ' + title : 'Edit ' + title,
	            submitButton: label,
	            onCancel: this.handleCancelAdd,
	            onSubmit: handler });
	    },
	    /* return <div className="clearfix">
	     <button className="btn btn-xs pull-right btn-default" ref="addBtn" onClick={this.handleAddBtn}><i
	     className="icon-add"/>Add
	     </button>
	     </div>*/
	    renderAddBtn: function renderAddBtn() {
	        if (!this.props.field.canAdd) {
	            return null;
	        }
	        var Template = this.template('buttonTemplate');
	        return React.createElement(
	            Template,
	            { ref: 'addBtn', buttonClass: 'btn btn-xs btn-default btn-add', label: 'Add',
	                iconClassName: 'icon-add', onClick: this.handleAddBtn },
	            React.createElement('i', {
	                className: 'icon-add' })
	        );
	    },
	
	    renderAdd: function renderAdd() {
	        var field = this.props.field;
	        if (!(field.canAdd || field.canEdit)) {
	            return null;
	        }
	        var _state = this.state;
	        var showAdd = _state.showAdd;
	        var showEdit = _state.showEdit;
	
	        return showAdd || showEdit ? this.renderAddEditTemplate(showEdit, showAdd) : this.renderAddBtn();
	    }
	};
	module.exports = CollectionMixin;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	
	var ObjectTemplate = React.createClass({
	    displayName: 'ObjectTemplate',
	
	    render: function render() {
	        var _props = this.props;
	        var children = _props.children;
	
	        var props = _objectWithoutProperties(_props, ['children']);
	
	        return React.createElement(
	            'div',
	            props,
	            children
	        );
	    }
	});
	
	module.exports = ObjectTemplate;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var RadioItemTemplate = React.createClass({
	    displayName: "RadioItemTemplate",
	
	    render: function render() {
	        var _props = this.props;
	        var label = _props.label;
	        var labelHTML = _props.labelHTML;
	        var id = _props.id;
	
	        label = labelHTML ? React.createElement("span", { dangerouslySetInnerHTML: { __html: labelHTML } }) : label;
	
	        return React.createElement(
	            "div",
	            { className: "radio" },
	            React.createElement(
	                "label",
	                null,
	                this.props.children,
	                label
	            )
	        );
	    }
	});
	module.exports = RadioItemTemplate;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var SimpleTemplate = React.createClass({
	    displayName: "SimpleTemplate",
	
	    render: function render() {
	        var _props = this.props;
	        var name = _props.name;
	        var title = _props.title;
	        var help = _props.help;
	        var errorClassName = _props.errorClassName;
	        var message = _props.message;
	        var fieldClass = _props.fieldClass;
	        var children = _props.children;
	
	        return React.createElement(
	            "div",
	            { className: "form-group" },
	            React.createElement(
	                "label",
	                { "for": name },
	                title
	            ),
	            this.props.children
	        );
	    }
	});
	module.exports = SimpleTemplate;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(4);
	var WizardProgressLess = __webpack_require__(117);
	var WizardProgressTemplate = React.createClass({
	    displayName: 'WizardProgressTemplate',
	
	    getDefaultProps: function getDefaultProps() {
	        return {
	            index: 0,
	            done: 'progtrckr-done',
	            todo: 'progtrckr-todo',
	            doing: 'progtrckr-doing',
	            fieldsets: [],
	            onClick: function onClick(e) {}
	        };
	    },
	    getStyle: function getStyle(i) {
	        var length = this.props.fieldsets.length,
	            indx = this.props.index;
	        if (i < indx || indx == length) {
	            return this.props.done;
	        } else if (i === indx) {
	            return this.props.doing;
	        }
	
	        return this.props.todo;
	    },
	    render: function render() {
	        var _this = this;
	
	        return React.createElement(
	            'ol',
	            { className: 'progtrckr' },
	            this.props.fieldsets.map(function (s, i) {
	                return React.createElement(
	                    'li',
	                    { value: i, key: 'li' + i,
	                        className: _this.getStyle(i),
	                        onClick: _this.props.onClick },
	                    React.createElement(
	                        'em',
	                        null,
	                        i + 1
	                    ),
	                    React.createElement(
	                        'span',
	                        null,
	                        s.legend
	                    )
	                );
	            })
	        );
	    }
	});
	
	module.exports = WizardProgressTemplate;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(118);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(120)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/pbarnes/Code/other/js/subschema/node_modules/css-loader/index.js!/Users/pbarnes/Code/other/js/subschema/node_modules/less-loader/index.js!/Users/pbarnes/Code/other/js/subschema/src/styles/wizard-progress.less", function() {
			var newContent = require("!!/Users/pbarnes/Code/other/js/subschema/node_modules/css-loader/index.js!/Users/pbarnes/Code/other/js/subschema/node_modules/less-loader/index.js!/Users/pbarnes/Code/other/js/subschema/src/styles/wizard-progress.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(119)();
	exports.push([module.id, "ol.progtrckr {\n  margin: 0;\n  padding-bottom: 2.2rem;\n  list-style-type: none;\n  display: table;\n  padding-left: 0;\n  padding-right: 0;\n  width: 100%;\n}\nol.progtrckr li {\n  text-align: center;\n  line-height: 4.5rem;\n  padding: 0 0.7rem;\n  cursor: pointer;\n  display: table-cell;\n}\nol.progtrckr li span {\n  padding: 0 1.5rem;\n}\n@media (max-width: 650px) {\n  .progtrckr li span {\n    display: none;\n  }\n}\n.progtrckr em {\n  display: none;\n  font-weight: 700;\n  padding-left: 1rem;\n}\n@media (max-width: 650px) {\n  .progtrckr em {\n    display: inline;\n  }\n}\nol.progtrckr li.progtrckr-todo {\n  color: silver;\n  border-bottom: 4px solid silver;\n}\n.progtrckr li:after {\n  content: ' ';\n  position: absolute;\n  bottom: 0;\n  height: 4px;\n  min-width: 100%;\n  background-color: red;\n}\nol.progtrckr li.progtrckr-doing {\n  color: black;\n  border-bottom: 4px solid #33C3F0;\n}\nol.progtrckr li.progtrckr-done {\n  color: black;\n  border-bottom: 4px solid #33C3F0;\n}\nol.progtrckr li:after {\n  content: \"\\00a0\\00a0\";\n}\nol.progtrckr li:before {\n  position: relative;\n  bottom: -3.7rem;\n  float: left;\n  left: 50%;\n}\nol.progtrckr li.progtrckr-todo:before {\n  content: \"\\039F\";\n  color: silver;\n  background-color: white;\n  width: 1.2em;\n  line-height: 1.4em;\n}\nol.progtrckr li.progtrckr-todo:hover:before {\n  color: #0FA0CE;\n}\nol.progtrckr li.progtrckr-doing:before {\n  content: \"\\2022\";\n  color: white;\n  background-color: #33C3F0;\n  width: 1.2em;\n  line-height: 1.2em;\n  border-radius: 1.2em;\n}\nol.progtrckr li.progtrckr-doing:hover:before {\n  color: #0FA0CE;\n}\nol.progtrckr li.progtrckr-done:before {\n  content: \"\\2713\";\n  color: white;\n  background-color: #33C3F0;\n  width: 1.2em;\n  line-height: 1.2em;\n  border-radius: 1.2em;\n}\nol.progtrckr li.progtrckr-done:hover:before {\n  color: #0FA0CE;\n}\n", ""]);

/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var Form = __webpack_require__(2);
	var tu = __webpack_require__(6);
	var NestedMixin = __webpack_require__(5);
	var css = __webpack_require__(122);
	var ButtonsTemplate = __webpack_require__(96);
	//var TimeoutTransitionGroup = require('../transition/TimeoutTransitionGroup.jsx');
	var EventCSSTransitionGroup = __webpack_require__(124);
	var CSSCore = __webpack_require__(126);
	var LoaderMixin = __webpack_require__(82);
	
	function donner(done) {
	    done();
	}
	
	var WizardTemplate = React.createClass({
	    mixins: [LoaderMixin],
	    displayName: 'WizardTemplate',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            wizardProgressTemplate: 'WizardProgressTemplate',
	            onNext: donner,
	            onPrevious: donner,
	            onAction: function onAction(pos, action, wizard) {},
	            onNavChange: function onNavChange(current, previous, wizard) {},
	            onDone: donner
	        };
	    },
	    getInitialState: function getInitialState() {
	        var _props = this.props;
	        var schema = _props.schema;
	        var subSchema = _props.subSchema;
	        var fields = _props.fields;
	
	        var props = _objectWithoutProperties(_props, ['schema', 'subSchema', 'fields']);
	
	        schema = NestedMixin.normalizeSchema(schema || subSchema);
	        this.schema = schema.schema ? schema : { schema: schema, fields: fields };
	        return {
	            compState: 0,
	            prevState: 0,
	            maxState: 0
	        };
	    },
	
	    next: function next() {
	        var _this = this;
	
	        var compState = this.state.compState,
	            current = this.schema.fieldsets[compState],
	            next = compState + 1;
	        this.setState({ disabled: true });
	        this._validate(function (e) {
	            if (e) {
	                _this.setState({ disabled: false });
	                return;
	            }
	            if (_this.props.onNext(function (resp) {
	                return _this.go(next, resp);
	            }, next, current) === false) {
	                _this.setState({ disabled: false, maxState: Math.max(next, _this.state.maxState) });
	                return;
	            }
	        });
	    },
	    previous: function previous() {
	        var _this2 = this;
	
	        var compState = this.state.compState,
	            current = this.schema.fieldsets[compState],
	            next = compState - 1;
	        this.setState({ disabled: true });
	
	        if (this.props.onPrevious(function (resp) {
	            return _this2.go(next, resp);
	        }, next, current) === false) {
	            this.setState({ disabled: false });
	            return;
	        }
	    },
	    go: function go(pos, resp) {
	        if (resp === false) {
	            this.setState({ disabled: false });
	            return;
	        }
	        this.setNavState(resp == null ? pos : resp);
	    },
	    _validate: function _validate(done) {
	        this.props.valueManager.validatePaths(this.schema.fieldsets[this.state.compState].fields, done);
	    },
	
	    setNavState: function setNavState(next) {
	
	        var len = this.schema.fieldsets.length,
	            compState = this.state.compState;
	        next = Math.max(Math.min(len - 1, next), 0);
	        if (this.props.onNavChange(next, compState, this.schema.fieldsets[next]) !== false) {
	            this.setState({
	                compState: next,
	                disabled: false,
	                prevState: next === compState ? this.state.prevState : compState
	            });
	        }
	    },
	
	    handleOnClick: function handleOnClick(evt) {
	        var steps = this.schema.fieldsets.length,
	            value = evt.target.value;
	        if (value < steps && value <= this.state.maxState) {
	            this.setNavState(value, true);
	        }
	    },
	
	    handleKeyDown: function handleKeyDown(e) {
	        if (e.which === 13) {
	            if (this.state.compState < this.schema.fieldsets.length - 1) {
	                return this.handleBtn(e, 'next');
	            } else {
	                return this.handleBtn(e, 'submit');
	            }
	        }
	    },
	    handleValidate: function handleValidate() {},
	    handleSubmit: function handleSubmit(e) {
	        var _this3 = this;
	
	        this._validate(function (errors) {
	            if (!errors && _this3.props.onDone(function (submit) {
	                if (submit !== false) {
	                    _this3.props.onSubmit(e, errors, _this3.props.valueManager.getValue());
	                }
	            }, e, _this3.schema.fieldsets[_this3.state.compState]) === false) {
	                return;
	            }
	        });
	    },
	
	    /* renderState(compState){
	     var schema = tu.extend({}, this.schema.schema);
	     var fields = this.schema.fieldsets[compState].fields;
	      return <Form ref="form" key={"key-"+compState} schema={{
	     schema,
	     fields
	     }} onSubmit={this.handleSubmit}
	     valueManager={this.props.valueManager}>
	      {this.renderBtns(compState)}
	     </Form>
	     },*/
	    renderBtns: function renderBtns(compState) {
	        var buttons = this.schema.fieldsets[compState].buttons;
	        if (!buttons && buttons !== false) {
	            buttons = [];
	            var isFirst = compState === 0,
	                isLast = compState === this.schema.fieldsets.length - 1;
	            if (!isFirst) {
	                buttons.push({
	                    label: 'Previous',
	                    action: 'previous'
	                });
	            }
	            if (isLast) {
	                buttons.push({
	                    label: 'Done',
	                    action: 'submit',
	                    buttonClass: 'btn-primary'
	                });
	            } else {
	                buttons.push({
	                    label: 'Next',
	                    action: 'next',
	                    buttonClass: 'btn-primary'
	                });
	            }
	        }
	        if (buttons) {
	            buttons.forEach(function (b) {
	                if (b.action === 'next' || b.action === 'submit') {
	                    b.disabled = this.disabled;
	                }
	            }, this.state);
	        }
	        return React.createElement(ButtonsTemplate, { key: 'btn-' + compState, buttons: buttons, onClick: this.handleBtn });
	    },
	    handleBtn: function handleBtn(e, action, btn) {
	        e && e.preventDefault();
	        switch (action) {
	
	            case 'previous':
	                {
	                    this.previous();
	                    break;
	                }
	            case 'next':
	                {
	                    this.next();
	                    break;
	                }
	            case 'submit':
	                {
	                    this.handleSubmit(e);
	                    break;
	                }
	            default:
	                {
	                    this.props.onAction(this.state.compState, action, this);
	                }
	        }
	    },
	    handleEnter: function handleEnter() {
	        CSSCore.addClass(this.refs.anim.getDOMNode(), 'overflow-hidden');
	    },
	    handleLeave: function handleLeave(done) {
	        CSSCore.removeClass(this.refs.anim.getDOMNode(), 'overflow-hidden');
	        done();
	    },
	    renderProgress: function renderProgress(fieldsets) {
	        if (this.props.wizardProgressTemplate === false) {
	            return null;
	        }
	        var Template = this.props.loader.loadTemplate(this.props.wizardProgressTemplate);
	        if (!Template) {
	            return null;
	        }
	        return React.createElement(Template, { fieldsets: fieldsets, valueManager: this.props.valueManager, index: this.state.compState,
	            onClick: this.handleOnClick });
	    },
	    render: function render() {
	
	        var fieldsets = this.schema.fieldsets,
	            schema = tu.extend({}, this.schema.schema),
	            compState = this.state.compState,
	            fields = fieldsets[compState].fields,
	            transition = compState < this.state.prevState ? 'wizardSwitchBack' : 'wizardSwitch';
	
	        return React.createElement(
	            'div',
	            { className: 'wizard-container', onKeyDown: this.handleKeyDown },
	            this.renderProgress(fieldsets),
	            React.createElement(
	                EventCSSTransitionGroup,
	                { ref: 'anim', transitionName: transition, transitionEnter: true,
	                    transitionLeave: true,
	                    className: 'slide-container', onEnter: this.handleEnter,
	                    onDidLeave: this.handleLeave },
	                React.createElement(
	                    Form,
	                    { ref: 'form',
	                        className: 'compState w' + compState,
	                        key: "form-" + compState,
	                        schema: { schema: schema, fields: fields },
	                        onSubmit: this.handleSubmit,
	                        valueManager: this.props.valueManager },
	                    this.renderBtns(compState)
	                )
	            )
	        );
	    }
	});
	
	module.exports = WizardTemplate;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(123);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(120)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/pbarnes/Code/other/js/subschema/node_modules/css-loader/index.js!/Users/pbarnes/Code/other/js/subschema/node_modules/less-loader/index.js!/Users/pbarnes/Code/other/js/subschema/src/styles/wizard.less", function() {
			var newContent = require("!!/Users/pbarnes/Code/other/js/subschema/node_modules/css-loader/index.js!/Users/pbarnes/Code/other/js/subschema/node_modules/less-loader/index.js!/Users/pbarnes/Code/other/js/subschema/src/styles/wizard.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(119)();
	exports.push([module.id, ".wizardSwitch-enter {\n  transform: translateX(100%);\n  max-height: 2000px;\n}\n.wizardSwitch-enter.wizardSwitch-enter-active {\n  max-height: 100%;\n  transform: translateX(0%);\n  transition: transform 0.5s ease;\n}\n.wizardSwitch-leave {\n  transform: translateX(-100%);\n}\n.wizardSwitch-leave.wizardSwitch-leave-active {\n  transform: translateX(-200%);\n  transition: transform 0.5s ease;\n}\n.wizardSwitchBack-enter {\n  transform: translateX(-100%);\n}\n.wizardSwitchBack-enter.wizardSwitchBack-enter-active {\n  animation: moveToRight 0.5s ease-in-out both;\n}\n.wizardSwitchBack-leave.wizardSwitchBack-leave-active {\n  animation: moveToRight 0.5s ease-in-out both;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.slide-container {\n  display: inline-block;\n  white-space: nowrap;\n  vertical-align: top;\n  min-width: 100%;\n  transition: height 0.5s ease;\n}\n.slide-container form {\n  background-color: #fff;\n  display: inline-block;\n  min-width: 100%;\n  white-space: normal;\n  vertical-align: top;\n}\n@keyframes moveToLeft {\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n@keyframes moveToRight {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n", ""]);

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule EventCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(4);
	
	var assign = React.__spread;
	
	var ReactTransitionGroup = React.createFactory(React.addons.TransitionGroup);
	
	var EventCSSTransitionGroupChild = React.createFactory(__webpack_require__(125));
	
	var EventCSSTransitionGroup = React.createClass({
	    displayName: 'EventCSSTransitionGroup',
	
	    propTypes: {
	        transitionName: React.PropTypes.string.isRequired,
	        transitionAppear: React.PropTypes.bool,
	        transitionEnter: React.PropTypes.bool,
	        transitionLeave: React.PropTypes.bool,
	        onAppear: React.PropTypes.func,
	        onDidAppear: React.PropTypes.func,
	        onEnter: React.PropTypes.func,
	        onDidEnter: React.PropTypes.func,
	        onLeave: React.PropTypes.func,
	        onDidLeave: React.PropTypes.func
	    },
	
	    _wrapChild: function _wrapChild(child) {
	        // We need to provide this childFactory so that
	        // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	        // leave while it is leaving.
	        return EventCSSTransitionGroupChild({
	            name: this.props.transitionName,
	            onAppear: this.props.onAppear,
	            onEnter: this.props.onEnter,
	            onLeave: this.props.onLeave,
	
	            onDidAppear: this.props.onDidAppear,
	            onDidLeave: this.props.onDidLeave,
	            onDidEnter: this.props.onDidEnter,
	
	            enter: this.props.transitionEnter,
	            leave: this.props.transitionLeave,
	            appear: this.props.transitionAppear
	        }, child);
	    },
	
	    render: function render() {
	        return ReactTransitionGroup(assign({}, this.props, { childFactory: this._wrapChild }));
	    }
	});
	
	module.exports = EventCSSTransitionGroup;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule EventCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(4);
	
	var CSSCore = __webpack_require__(126);
	var ReactTransitionEvents = __webpack_require__(128);
	
	var onlyChild = __webpack_require__(130);
	var warning = __webpack_require__(135);
	
	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;
	var NO_EVENT_TIMEOUT = 5000;
	
	var noEventListener = null;
	
	if (true) {
	    noEventListener = function () {
	         true ? warning(false, 'transition(): tried to perform an animation without ' + 'an animationend or transitionend event after timeout (' + '%sms). You should either disable this ' + 'transition in JS or add a CSS animation/transition.', NO_EVENT_TIMEOUT) : null;
	    };
	}
	
	var EventCSSTransitionGroupChild = React.createClass({
	    displayName: 'EventCSSTransitionGroupChild',
	
	    transition: function transition(animationType, finishCallback) {
	        var node = this.getDOMNode();
	        var className = this.props.name + '-' + animationType;
	        var activeClassName = className + '-active';
	        var noEventTimeout = null;
	
	        var endListener = function endListener(e) {
	            if (e && e.target !== node) {
	                return;
	            }
	            if (true) {
	                clearTimeout(noEventTimeout);
	            }
	
	            CSSCore.removeClass(node, className);
	            CSSCore.removeClass(node, activeClassName);
	
	            ReactTransitionEvents.removeEndEventListener(node, endListener);
	
	            // Usually this optional callback is used for informing an owner of
	            // a leave animation and telling it to remove the child.
	            if (finishCallback) {
	                finishCallback();
	            }
	        };
	
	        ReactTransitionEvents.addEndEventListener(node, endListener);
	
	        CSSCore.addClass(node, className);
	
	        // Need to do this to actually trigger a transition.
	        this.queueClass(activeClassName);
	
	        if (true) {
	            noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
	        }
	    },
	
	    queueClass: function queueClass(className) {
	        this.classNameQueue.push(className);
	
	        if (!this.timeout) {
	            this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	        }
	    },
	
	    flushClassNameQueue: function flushClassNameQueue() {
	        if (this.isMounted()) {
	            this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, this.getDOMNode()));
	        }
	        this.classNameQueue.length = 0;
	        this.timeout = null;
	    },
	
	    componentWillMount: function componentWillMount() {
	        this.classNameQueue = [];
	    },
	
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.timeout) {
	            clearTimeout(this.timeout);
	        }
	    },
	
	    componentWillAppear: function componentWillAppear(done) {
	        var _this = this;
	
	        if (this.props.appear || this.props.onAppear || this.props.onDidAppear) {
	            this.props.onAppear && this.props.onAppear();
	            this.transition('appear', this.props.onDidAppear ? function () {
	                return _this.props.onDidAppear(done);
	            } : done);
	        } else {
	            done();
	        }
	    },
	
	    componentWillEnter: function componentWillEnter(done) {
	        var _this2 = this;
	
	        if (this.props.enter || this.props.onEnter || this.props.onDidEnter) {
	            this.props.onEnter && this.props.onEnter();
	            this.transition('enter', this.props.onDidEnter ? function () {
	                return _this2.props.onDidEnter(done);
	            } : done);
	        } else {
	            done();
	        }
	    },
	
	    componentWillLeave: function componentWillLeave(done) {
	        var _this3 = this;
	
	        if (this.props.leave || this.props.onLeave || this.props.onDidLeave) {
	            this.props.onLeave && this.props.onLeave();
	            this.transition('leave', this.props.onDidLeave ? function () {
	                return _this3.props.onDidLeave(done);
	            } : done);
	        } else {
	            done();
	        }
	    },
	
	    render: function render() {
	        return onlyChild(this.props.children);
	    }
	});
	
	module.exports = EventCSSTransitionGroupChild;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(127);
	
	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */
	
	var CSSCore = {
	
	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	     true ? invariant(!/\s/.test(className), 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(!/\s/.test(className));
	
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	     true ? invariant(!/\s/.test(className), 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(!/\s/.test(className));
	
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },
	
	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	     true ? invariant(!/\s/.test(className), 'CSS.hasClass takes only a single class name.') : invariant(!/\s/.test(className));
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }
	
	};
	
	module.exports = CSSCore;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(129);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */
	
	/*jslint evil: true */
	
	"use strict";
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';
	
	var ReactElement = __webpack_require__(131);
	
	var invariant = __webpack_require__(127);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	   true ? invariant(ReactElement.isValidElement(children), 'onlyChild must be passed a children with exactly one child.') : invariant(ReactElement.isValidElement(children));
	  return children;
	}
	
	module.exports = onlyChild;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */
	
	'use strict';
	
	var ReactContext = __webpack_require__(132);
	var ReactCurrentOwner = __webpack_require__(137);
	
	var assign = __webpack_require__(133);
	var warning = __webpack_require__(135);
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true
	};
	
	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} object
	 * @param {string} key
	 */
	function defineWarningProperty(object, key) {
	  Object.defineProperty(object, key, {
	
	    configurable: false,
	    enumerable: true,
	
	    get: function get() {
	      if (!this._store) {
	        return null;
	      }
	      return this._store[key];
	    },
	
	    set: function set(value) {
	       true ? warning(false, 'Don\'t set the %s property of the React element. Instead, ' + 'specify the correct value when initially creating the element.', key) : null;
	      this._store[key] = value;
	    }
	
	  });
	}
	
	/**
	 * This is updated to true if the membrane is successfully created.
	 */
	var useMutationMembrane = false;
	
	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} element
	 */
	function defineMutationMembrane(prototype) {
	  try {
	    var pseudoFrozenProperties = {
	      props: true
	    };
	    for (var key in pseudoFrozenProperties) {
	      defineWarningProperty(prototype, key);
	    }
	    useMutationMembrane = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {string|object} ref
	 * @param {*} key
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function ReactElement(type, key, ref, owner, context, props) {
	  // Built-in properties that belong on the element
	  this.type = type;
	  this.key = key;
	  this.ref = ref;
	
	  // Record the component responsible for creating this element.
	  this._owner = owner;
	
	  // TODO: Deprecate withContext, and then the context becomes accessible
	  // through the owner.
	  this._context = context;
	
	  if (true) {
	    // The validation flag and props are currently mutative. We put them on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    this._store = { props: props, originalProps: assign({}, props) };
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    try {
	      Object.defineProperty(this._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true
	      });
	    } catch (x) {}
	    this._store.validated = false;
	
	    // We're not allowed to set props directly on the object so we early
	    // return and rely on the prototype membrane to forward to the backing
	    // store.
	    if (useMutationMembrane) {
	      Object.freeze(this);
	      return;
	    }
	  }
	
	  this.props = props;
	};
	
	// We intentionally don't expose the function on the constructor property.
	// ReactElement should be indistinguishable from a plain object.
	ReactElement.prototype = {
	  _isReactElement: true
	};
	
	if (true) {
	  defineMutationMembrane(ReactElement.prototype);
	}
	
	ReactElement.createElement = function (type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	
	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : '' + config.key;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	
	  return new ReactElement(type, key, ref, ReactCurrentOwner.current, ReactContext.current, props);
	};
	
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. <Foo />.type === Foo.type.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceProps = function (oldElement, newProps) {
	  var newElement = new ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._owner, oldElement._context, newProps);
	
	  if (true) {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }
	  return newElement;
	};
	
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;
	
	  // Original props are copied
	  var props = assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return new ReactElement(element.type, key, ref, owner, element._context, props);
	};
	
	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  // ReactTestUtils is often used outside of beforeEach where as React is
	  // within it. This leads to two different instances of React on the same
	  // page. To identify a element from a different React instance we use
	  // a flag instead of an instanceof check.
	  var isElement = !!(object && object._isReactElement);
	  // if (isElement && !(object instanceof ReactElement)) {
	  // This is an indicator that you're using multiple versions of React at the
	  // same time. This will screw with ownership and stuff. Fix it, please.
	  // TODO: We could possibly warn here.
	  // }
	  return isElement;
	};
	
	module.exports = ReactElement;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactContext
	 */
	
	'use strict';
	
	var assign = __webpack_require__(133);
	var emptyObject = __webpack_require__(134);
	var warning = __webpack_require__(135);
	
	var didWarn = false;
	
	/**
	 * Keeps track of the current context.
	 *
	 * The context is automatically passed down the component ownership hierarchy
	 * and is accessible via `this.context` on ReactCompositeComponents.
	 */
	var ReactContext = {
	
	  /**
	   * @internal
	   * @type {object}
	   */
	  current: emptyObject,
	
	  /**
	   * Temporarily extends the current context while executing scopedCallback.
	   *
	   * A typical use case might look like
	   *
	   *  render: function() {
	   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
	   *
	   *    ));
	   *    return <div>{children}</div>;
	   *  }
	   *
	   * @param {object} newContext New context to merge into the existing context
	   * @param {function} scopedCallback Callback to run with the new context
	   * @return {ReactComponent|array<ReactComponent>}
	   */
	  withContext: function withContext(newContext, scopedCallback) {
	    if (true) {
	       true ? warning(didWarn, 'withContext is deprecated and will be removed in a future version. ' + 'Use a wrapper component with getChildContext instead.') : null;
	
	      didWarn = true;
	    }
	
	    var result;
	    var previousContext = ReactContext.current;
	    ReactContext.current = assign({}, previousContext, newContext);
	    try {
	      result = scopedCallback();
	    } finally {
	      ReactContext.current = previousContext;
	    }
	    return result;
	  }
	
	};
	
	module.exports = ReactContext;

/***/ },
/* 133 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
	
	'use strict';
	
	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }
	
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }
	
	    var from = Object(nextSource);
	
	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.
	
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }
	
	  return to;
	}
	
	module.exports = assign;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */
	
	"use strict";
	
	var emptyObject = {};
	
	if (true) {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */
	
	"use strict";
	
	var emptyFunction = __webpack_require__(136);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (true) {
	  warning = function (condition, format) {
	    for (var args = [], $__0 = 2, $__1 = arguments.length; $__0 < $__1; $__0++) args.push(arguments[$__0]);
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      console.warn(message);
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}
	
	module.exports = warning;

/***/ },
/* 136 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */
	
	"use strict";
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */
	
	'use strict';
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 *
	 * The depth indicate how many composite components are above this render level.
	 */
	var ReactCurrentOwner = {
	
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	
	};
	
	module.exports = ReactCurrentOwner;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./AutocompleteItemTemplate.jsx": 94,
		"./ButtonTemplate.jsx": 95,
		"./ButtonsTemplate.jsx": 96,
		"./CheckboxTemplate.jsx": 97,
		"./CheckboxesGroupTemplate.jsx": 98,
		"./CheckboxesTemplate.jsx": 99,
		"./CollectionCreateTemplate.jsx": 100,
		"./EditorTemplate.jsx": 102,
		"./FieldSetTemplate.jsx": 104,
		"./FormTemplate.jsx": 105,
		"./ItemToStringTemplate.jsx": 106,
		"./ListItemTemplate.jsx": 108,
		"./ListTemplate.jsx": 109,
		"./ObjectTemplate.jsx": 113,
		"./RadioItemTemplate.jsx": 114,
		"./SimpleTemplate.jsx": 115,
		"./WizardProgressTemplate.jsx": 116,
		"./WizardTemplate.jsx": 121
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 138;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Autocomplete.jsx": 140,
		"./Checkbox.jsx": 145,
		"./Checkboxes.jsx": 148,
		"./CollectionMixin.jsx": 112,
		"./CreateItemMixin.js": 101,
		"./Date.jsx": 149,
		"./DateTime.jsx": 150,
		"./Hidden.jsx": 151,
		"./LazyType.jsx": 152,
		"./List.jsx": 110,
		"./Mixed.jsx": 153,
		"./Number.jsx": 154,
		"./Object.jsx": 155,
		"./Password.jsx": 156,
		"./Radio.jsx": 157,
		"./Restricted.jsx": 158,
		"./RestrictedMixin.js": 160,
		"./Select.jsx": 161,
		"./Text.jsx": 162,
		"./TextArea.jsx": 163
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 139;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var tu = __webpack_require__(6);
	var autocompleteLess = __webpack_require__(141);
	var BasicFieldMixin = __webpack_require__(87);
	var LoaderMixin = __webpack_require__(82);
	var css = __webpack_require__(103);
	var Dom = __webpack_require__(143);
	var Autocomplete = React.createClass({
	    displayName: 'Autocomplete',
	
	    mixins: [BasicFieldMixin, LoaderMixin],
	    propTypes: {
	        name: React.PropTypes.string.isRequired,
	        /* processor: React.PropTypes.shape({
	         fetch: React.PropTypes.func.isRequired
	         }).isRequired,*/
	        //optional
	        onChange: React.PropTypes.func,
	        onSelect: React.PropTypes.func,
	        minLength: React.PropTypes.number,
	        foundCls: React.PropTypes.string,
	        notFoundCls: React.PropTypes.string
	
	    },
	    statics: {
	        inputClassName: 'form-control'
	    },
	    getDefaultProps: function getDefaultProps() {
	        var self = this;
	        return {
	            country: 'US',
	            locale: 'en_US',
	            foundCls: 'found',
	            notFoundCls: 'notfound',
	            useshowing: true,
	            minLength: 1,
	            maxInputLength: 200,
	            itemTemplate: 'AutocompleteItemTemplate',
	            processor: {
	                fetch: function fetch(url, value, component, cb) {
	
	                    value = value && value.toLowerCase();
	                    var data = (component.props.options || []).map(function (v) {
	                        return {
	                            label: v.label || v.val || v,
	                            data: v,
	                            val: v.val || v.label || v
	                        };
	                    }).filter(function (v) {
	                        var l = ('' + v.val).toLowerCase();
	
	                        if (l.indexOf(value) === 0) {
	                            return true;
	                        }
	
	                        //                        return v.indexOf(value) === 0;
	                    });
	
	                    cb(null, data);
	                },
	                value: function value(obj) {
	                    return obj == null ? null : obj.val || obj;
	                },
	                format: function format(v) {
	                    return v == null ? null : v.label || v;
	                }
	            },
	            onChange: function onChange(e) {},
	            onSelect: function onSelect(e) {},
	            onBlur: function onBlur() {},
	            onFocus: function onFocus() {},
	            onValid: function onValid() {},
	            onValidate: function onValidate() {},
	            showing: 'Searching...'
	        };
	    },
	    getInitialState: function getInitialState() {
	        var value = this.props.value;
	        var input = this.props.input;
	        return {
	            suggestions: [],
	            showing: false,
	            focus: -1,
	            input: input,
	            value: value
	        };
	    },
	    _processProps: function _processProps(props) {
	        if (props.value && !props.input) {
	            props.processor.fetch(props.url, props.value, this, (function (e, o) {
	                if (o && o.length === 1) {
	                    this.setValue(o[0]);
	                } else {
	                    this.setState({
	                        suggestions: o,
	                        showing: true
	                    });
	                }
	            }).bind(this));
	        } else if (!props.value && props.input) {
	            props.processor.fetch(props.url, props.input, this, (function (e, o) {
	                this.setState({
	                    suggestions: o,
	                    showing: true,
	                    input: props.input
	                });
	            }).bind(this));
	        }
	    },
	    /*  componentWillMount(){
	     //        this._processProps(this.props);
	     },*/
	    getValue: function getValue() {
	        return this.state.value;
	    },
	    setValue: function setValue(v) {
	        var p = this.processor();
	        var value = p.value(v);
	        var input = p.format(v);
	        var length = input && input.length || 0;
	        var refs = this.refs;
	        this.setState({
	            value: value,
	            selected: v,
	            input: input,
	            showing: false,
	            suggestions: []
	        }, function () {
	            //            refs && refs.input && refs.input.getDOMNode().setSelectionRange(length, length);
	        });
	    },
	    /**
	     * Hide could be called when a user has not selected a value.
	     *
	     * If their is a selected value and input equals its label select it.
	     * So if there is only 1 selection select it.
	     * If
	     */
	    hide: function hide(selectValue) {
	        var _state = this.state;
	        var selected = _state.selected;
	        var input = _state.input;
	        var suggestions = _state.suggestions;
	        var focus = _state.focus;var i = 0;var l;var options;var found = false;
	        if (selectValue) {
	
	            var p = this.getProcessor();
	            if (selectValue && focus > -1) {
	
	                selected = suggestions[focus];
	            } else if (input == null || input.trim() === '') {
	                selected = null;
	                input = null;
	            } else if (!selected || input !== selected.label) {
	                if (suggestions.length === 1) {
	                    selected = suggestions[0];
	                    input = selected.label;
	                } else {
	                    selected = null;
	                    options = suggestions;
	                    l = options.length;
	                    for (; i < l; i++) {
	                        var opt = options[i];
	                        if (opt.label === input) {
	                            selected = opt;
	                            input = opt.label;
	                            found = true;
	                            break;
	                        }
	                    }
	                    if (!found) {
	                        input = null;
	                    }
	                }
	            }
	            if (selected !== this.state.selected) {
	                this.onSelect(selected);
	            } else {
	                this.props.onValidate(selected && selected.val, this.props.value, this.props.name, this.props.path);
	                this.setState({ suggestions: [], selected: selected, input: input, showing: false, focus: -1 });
	            }
	        } else {
	            this.setState({ showing: false, focus: -1, suggestions: [] }, this.un);
	        }
	        //        this.props.onBlur();
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.unbindDocument();
	    },
	    componentWillMount: function componentWillMount() {
	        this._processProps(this.props);
	    },
	    bindDocument: function bindDocument() {
	        if (this._bound) {
	            return;
	        }
	        this.unbindDocument();
	        this._bound = true;
	        this._onDocumentClickListener = Dom.listen(this, 'click', this.handleDocumentClick);
	
	        this._onDocumentKeyupListener = Dom.listen(this, 'keyup', this.handleDocumentKeyUp);
	
	        this._onDocumentKeydownListener = Dom.listen(this, 'keypress', this.handleDocumentEnter);
	    },
	
	    unbindDocument: function unbindDocument() {
	        this._bound = false;
	        if (this._onDocumentClickListener) {
	            this._onDocumentClickListener.remove();
	        }
	
	        if (this._onDocumentKeyupListener) {
	            this._onDocumentKeyupListener.remove();
	        }
	        if (this._onDocumentKeydownListener) {
	            this._onDocumentKeydownListener.remove();
	        }
	    },
	    handleDocumentEnter: function handleDocumentEnter(e) {
	        //        console.log('keyUp', e.key);
	        if (e.keyCode === 13 && this.state.suggestions.length) {
	            e.preventDefault();
	            e.stopPropagation();
	            this.hide(true);
	        }
	    },
	    handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	
	        if (e.keyCode === 27) {
	            this.hide(false);
	        }
	    },
	    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	        if (nextState && nextState.suggestions && nextState.suggestions.length) {
	            this.bindDocument();
	        } else {
	            this.unbindDocument();
	        }
	    },
	    handleDocumentClick: function handleDocumentClick(e) {
	        // If the click originated from within this component
	        // don't do anything.
	        if (Dom.isNodeInRoot(e.target, React.findDOMNode(this))) {
	            return;
	        }
	
	        this.hide(false);
	    },
	
	    getProcessor: function getProcessor() {
	        return this.processor();
	    },
	
	    handleSuggestionClick: function handleSuggestionClick(o) {
	        this.onSelect(o);
	    },
	    onSelect: function onSelect(o) {
	        if (this.props.onSelect(o) === false) {
	            return;
	        }
	        var p = this.getProcessor();
	        var value = p.value(o);
	        if (this.props.handleChange.call(this.props, value) !== false) {
	            this.setState({
	                suggestions: [],
	                showing: false,
	                focus: -1,
	                selected: o,
	                value: value,
	                input: p.format(o)
	            });
	        }
	    },
	    _handleDispatch: function _handleDispatch(value) {
	        var _this = this;
	
	        this.setState({
	            input: value,
	            selected: null
	        });
	
	        if (this._fetch && this._fetch.cancel) {
	            this._fetch.cancel();
	        }
	        this._fetch = this.getProcessor().fetch(this.props.url, value, this, function (err, suggestions) {
	            if (err) {
	                return;
	            }
	            _this.setState({
	                suggestions: suggestions,
	                showing: true,
	                input: value
	            });
	        });
	    },
	
	    handleKeyUp: function handleKeyUp(e) {
	        if (this.props.onKeyUp) {
	            this.props.onKeyUp.call(this, e);
	        }
	        var focus = this.state.focus,
	            s = this.state.suggestions;
	        if (s.length) {
	            var update = false;
	            switch (e.key || e.keyCode) {
	                case 'Up':
	                case 38:
	                case 'ArrowUp':
	                    {
	                        focus = Math.max(-1, focus - 1);
	                        update = true;
	                        break;
	                    }
	                case 40:
	                case 'Down':
	                case 'ArrowDown':
	                    {
	                        focus = Math.min(s.length, focus + 1);
	                        update = true;
	                        break;
	                    }
	                case 'Enter':
	                    {
	                        if (e) {
	                            e.preventDefault();
	                            e.stopPropagation();
	                        }
	                        if (this.state.suggestions.length) {
	                            this.handleSuggestionClick(this.state.suggestions[Math.max(this.state.focus, 0)]);
	                            this.setState({ suggestions: [], showing: false, focus: -1 });
	
	                            return;
	                        }
	                        this.hide();
	                        break;
	                    }
	            }
	            if (update) {
	                //e.preventDefault();
	                this.setState({ focus: focus });
	            }
	        }
	    },
	
	    renderSuggestions: function renderSuggestions() {
	        var suggestions = this.state.suggestions;
	        if (this.state.showing === false || suggestions.length === 0) {
	
	            return null;
	        }
	        var _state2 = this.state;
	        var focus = _state2.focus;
	        var input = _state2.input;
	
	        var processor = this.processor();
	        var handleSuggestionClick = this.handleSuggestionClick;
	        var CompleteItem = this.template('itemTemplate');
	        return React.createElement(
	            'ul',
	            { className: 'list-group' },
	            suggestions.map(function (item, i) {
	                return React.createElement(CompleteItem, {
	                    key: item.val,
	                    focus: focus === i,
	                    value: input,
	                    ref: "item_" + i,
	                    processor: processor,
	                    onSelect: handleSuggestionClick,
	                    data: item });
	            })
	        );
	    },
	
	    handleChange: function handleChange(e) {
	        if (this.props.onChange) {
	            this.props.onChange(e);
	        }
	        this._handleDispatch(e.target.value);
	    },
	
	    handlePaste: function handlePaste(event) {
	        var items = event.clipboardData && event.clipboardData.items;
	        items && items[0] && items[0].getAsString(this._handleKey.bind(this));
	    },
	    handleBlur: function handleBlur(event) {
	        if (this.state.suggestions.length === 1 && !this.state.showing && !this.state.selected) {
	            this.handleSuggestionClick(this.state.suggestions[Math.max(0, this.state.focus)]);
	        } else {
	            this.handleInvalid();
	        }
	        this.props.onBlur.call(this, event);
	    },
	    handleInvalid: function handleInvalid() {},
	
	    createInput: function createInput(props) {
	        if (this.props.children && this.props.children.length) {
	            var handleDispatch = this._handleDispatch;
	            return React.Children.map(this.props.children, function (child, idx) {
	                if (child.props.onValueChange) {
	                    var onChange = props.onChange;
	
	                    var nprops = _objectWithoutProperties(props, ['onChange']);
	
	                    var onChildChange = child.props.onChange;
	                    nprops.onValueChange = function (val) {
	                        handleDispatch(val);
	                    };
	                    /*nprops.onChange = function (e) {
	                     this.handleChange(e.target.value);
	                     onChildChange && onChildChange.call(this, e);
	                     }*/
	                    return React.cloneElement(child, nprops);
	                } else {
	                    return React.cloneElement(child, props);
	                }
	            });
	        }
	        var valueManager = props.valueManager;
	        var inputType = props.inputType;
	        var type = props.type;
	
	        var cprops = _objectWithoutProperties(props, ['valueManager', 'inputType', 'type']);
	
	        if (inputType) {
	            var Input = this.props.loader.loadType(inputType);
	            return React.createElement(Input, _extends({}, cprops, { ref: 'input', value: this.state.input }));
	        }
	
	        return React.createElement('input', _extends({
	            id: cprops.name,
	            type: 'text'
	        }, cprops, {
	            ref: 'input',
	            value: this.state.input,
	            className: css.forField(this)
	
	        }));
	    },
	    render: function render() {
	        var suggestions = this.state.suggestions;
	        var _props = this.props;
	        var onChange = _props.onChange;
	        var onPaste = _props.onPaste;
	        var children = _props.children;
	        var fieldAttrs = _props.fieldAttrs;
	        var field = _props.field;
	        var value = _props.value;
	        var onBlur = _props.onBlur;
	        var notFoundCls = _props.notFoundCls;
	        var foundCls = _props.foundCls;
	        var minLength = _props.minLength;
	        var maxInputLength = _props.maxInputLength;
	        var onSelect = _props.onSelect;
	        var processor = _props.processor;
	        var onValid = _props.onValid;
	        var onValidate = _props.onValidate;
	        var country = _props.country;
	        var locale = _props.locale;
	        var useshowing = _props.useshowing;
	        var itemTemplate = _props.itemTemplate;
	        var onKeyUp = _props.onKeyUp;
	
	        var props = _objectWithoutProperties(_props, ['onChange', 'onPaste', 'children', 'fieldAttrs', 'field', 'value', 'onBlur', 'notFoundCls', 'foundCls', 'minLength', 'maxInputLength', 'onSelect', 'processor', 'onValid', 'onValidate', 'country', 'locale', 'useshowing', 'itemTemplate', 'onKeyUp']);
	
	        props.onChange = this.handleChange;
	        props.onPaste = this.handlePaste;
	        props.onKeyDown = this.handleKeyUp;
	        props.onBlur = this.handleBlur;
	        return React.createElement(
	            'div',
	            _extends({
	                className: 'autocomplete ' + (suggestions.length > 0 ? foundCls : notFoundCls) }, fieldAttrs),
	            this.createInput(props),
	            this.renderSuggestions()
	        );
	    }
	
	});
	
	module.exports = Autocomplete;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(142);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(120)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/pbarnes/Code/other/js/subschema/node_modules/css-loader/index.js!/Users/pbarnes/Code/other/js/subschema/node_modules/less-loader/index.js!/Users/pbarnes/Code/other/js/subschema/src/styles/autocomplete.less", function() {
			var newContent = require("!!/Users/pbarnes/Code/other/js/subschema/node_modules/css-loader/index.js!/Users/pbarnes/Code/other/js/subschema/node_modules/less-loader/index.js!/Users/pbarnes/Code/other/js/subschema/src/styles/autocomplete.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(119)();
	exports.push([module.id, ".autocomplete {\n  position: relative;\n}\n.autocomplete.found .form-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.autocomplete.found .list-group {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n}\n.autocomplete.found .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-top: none;\n}\n.autocomplete.found .list-group-item {\n  cursor: pointer;\n}\n.autocomplete.found .list-group-item:hover {\n  background-color: #eee;\n}\n.autocomplete.found .focused {\n  background-color: #ddd;\n}\n", ""]);

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var EventListener = __webpack_require__(144);
	var React = __webpack_require__(3);
	module.exports = {
	    EventListener: EventListener,
	    ownerDocument: ownerDocument,
	    isNodeInRoot: isNodeInRoot,
	    listen: listen
	
	};
	/**
	 * listen
	 */
	function listen(node, event, func) {
	    return EventListener.listen(ownerDocument(node), event, func);
	}
	/**
	 * Get elements owner document
	 *
	 * @param {ReactComponent|HTMLElement} componentOrElement
	 * @returns {HTMLElement}
	 */
	function ownerDocument(componentOrElement) {
	    var elem = React.findDOMNode(componentOrElement);
	    return elem && elem.ownerDocument || document;
	}
	/**
	 * Checks whether a node is within
	 * a root nodes tree
	 *
	 * @param {DOMElement} node
	 * @param {DOMElement} root
	 * @returns {boolean}
	 */
	function isNodeInRoot(node, root) {
	    while (node) {
	        if (node === root) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	
	    return false;
	}

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(136);
	
	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },
	
	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (!target.addEventListener) {
	      if (true) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    } else {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    }
	  },
	
	  registerDefault: function registerDefault() {}
	};
	
	module.exports = EventListener;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3),
	    FieldMixin = __webpack_require__(146),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103);
	
	var Checkbox = React.createClass({
	    displayName: 'Checkbox',
	
	    mixins: [FieldMixin],
	    statics: {
	        inputClassName: '' //Constants.inputClassName,
	    },
	    doChange: function doChange(e) {
	        var hasProp = ('value' in this.props);
	        this.props.handleChange(e.target.checked ? hasProp ? this.props.value : true : hasProp ? null : false);
	    },
	    render: function render() {
	        var _props = this.props;
	        var onValueChange = _props.onValueChange;
	        var onChange = _props.onChange;
	        var value = _props.value;
	        var type = _props.type;
	        var dataType = _props.dataType;
	        var fieldAttrs = _props.fieldAttrs;
	        var className = _props.className;
	        var onBlur = _props.onBlur;
	
	        var props = _objectWithoutProperties(_props, ['onValueChange', 'onChange', 'value', 'type', 'dataType', 'fieldAttrs', 'className', 'onBlur']);
	
	        return React.createElement('input', _extends({ onBlur: this.handleValidate, onChange: this.doChange, id: this.props.name,
	            className: css.forField(this),
	            checked: this.state.value,
	            type: dataType || 'checkbox'
	        }, props, fieldAttrs));
	    }
	});
	
	module.exports = Checkbox;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var FieldMixin = {
	    mixins: [__webpack_require__(86), __webpack_require__(147)]
	};
	
	module.exports = FieldMixin;

/***/ },
/* 147 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	    valueFromEvt: function valueFromEvt(e) {
	        return e.target.value;
	    }
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var BasicFieldMixin = __webpack_require__(87);
	var LoaderMixin = __webpack_require__(82);
	var tu = __webpack_require__(6);
	var Constants = __webpack_require__(111);
	var css = __webpack_require__(103);
	
	var Checkboxes = React.createClass({
	    displayName: 'Checkboxes',
	
	    statics: {
	        inputClassName: Constants.inputCheckboxesClassName,
	        subSchema: {
	            options: 'OptionSchema'
	        }
	    },
	    mixins: [BasicFieldMixin, LoaderMixin],
	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '',
	            name: '',
	            placeholder: '',
	            dataType: this.dataType,
	            itemTemplate: 'CheckboxesTemplate',
	            groupTemplate: 'CheckboxesGroupTemplate',
	            onValidate: function onValidate() {}
	        };
	    },
	
	    setValue: function setValue(value) {
	        this.setState({ value: value });
	    },
	
	    handleCheckChange: function handleCheckChange(e) {
	        var newValues = this.state.value || [];
	        if (e.target.checked) {
	            newValues.push(e.target.value);
	        } else {
	            newValues.splice(newValues.indexOf(e.target.value), 1);
	        }
	        this.props.handleChange(newValues);
	    },
	
	    _createCheckbox: function _createCheckbox(option, index, group, CheckboxTemplate) {
	
	        var id = tu.path(this.props.path, index, group);
	        var val = option.val;
	        var labelHTML = option.labelHTML;
	
	        var value = this.state.value;
	        var labelContent = labelHTML ? React.createElement('span', { dangerouslySetInnerHTML: { __html: labelHTML } }) : val;
	        var opts = {
	            onChange: this.handleCheckChange,
	            name: this.props.name,
	            checked: value ? !! ~value.indexOf(val) : false,
	            ref: id.replace(/\./g, '_'),
	            id: id,
	            value: val
	        };
	        return React.createElement(
	            CheckboxTemplate,
	            _extends({ label: labelContent }, opts),
	            React.createElement('input', _extends({ type: 'checkbox' }, opts))
	        );
	    },
	    _createGroup: function _createGroup(option, index, group, Template, CheckboxTemplate) {
	        return React.createElement(
	            Template,
	            { group: option.group },
	            this.makeOptions(option.options, group == null ? 0 : group, CheckboxTemplate)
	        );
	    },
	
	    /**
	     * Create the checkbox list HTML
	     * @param {Array}   Options as a simple array e.g. ['option1', 'option2']
	     *                      or as an array of objects e.g. [{val: 543, label: 'Title for object 543'}]
	     * @return {String} HTML
	     */
	    makeOptions: function makeOptions(array, group) {
	        var _this = this;
	
	        array = array || [];
	        var name = this.props.name;
	        var CheckboxTemplate = this.template('itemTemplate');
	        var CheckboxesGroupTemplate = this.template('groupTemplate');
	        return array.map(function (option, index) {
	            option = tu.isString(option) ? { val: option } : option;
	            return React.createElement(
	                'div',
	                {
	                    key: name + '-' + option.val + '-' + group },
	                option.group ? _this._createGroup(option, index, group ? group++ : 0, CheckboxesGroupTemplate, CheckboxTemplate) : _this._createCheckbox(option, index, group, CheckboxTemplate)
	            );
	        });
	    },
	
	    render: function render() {
	
	        return React.createElement(
	            'div',
	            {
	                className: css.forField(this) },
	            this.makeOptions(this.props.options, 1)
	        );
	    }
	});
	
	module.exports = Checkboxes;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3),
	    FieldMixin = __webpack_require__(146),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103);
	
	var DateInput = React.createClass({
	    displayName: 'DateInput',
	
	    mixins: [FieldMixin],
	    statics: {
	        inputClassName: Constants.inputClassName
	    },
	    render: function render() {
	        var _props = this.props;
	        var onBlur = _props.onBlur;
	        var onValueChange = _props.onValueChange;
	        var onChange = _props.onChange;
	        var className = _props.className;
	        var fieldAttrs = _props.fieldAttrs;
	
	        var props = _objectWithoutProperties(_props, ['onBlur', 'onValueChange', 'onChange', 'className', 'fieldAttrs']);
	
	        return React.createElement('input', _extends({ onBlur: this.handleValidate, onChange: this.handleChange, id: this.props.name,
	            className: css.forField(this), type: 'date',
	            value: this.state.value
	        }, props, fieldAttrs));
	    }
	});
	
	module.exports = DateInput;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3),
	    FieldMixin = __webpack_require__(146),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103);
	
	var DateTimeInput = React.createClass({
	    displayName: 'DateTimeInput',
	
	    mixins: [FieldMixin],
	    statics: {
	        inputClassName: Constants.inputClassName
	    },
	    render: function render() {
	        return React.createElement('input', { onBlur: this.handleValidate, onChange: this.handleChange, id: this.props.name,
	            className: css.forField(this), type: 'datetime',
	            value: this.getValue(),
	            title: this.props.title, placeholder: this.props.placeholder });
	    }
	});
	
	module.exports = DateTimeInput;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3),
	    FieldMixin = __webpack_require__(146),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103);
	
	var HiddenInput = React.createClass({
	    displayName: 'HiddenInput',
	
	    mixins: [FieldMixin],
	    statics: {
	        inputClassName: Constants.inputClassName
	    },
	    render: function render() {
	        return React.createElement('input', { id: this.props.name,
	            className: css.forField(this), type: 'hidden',
	            value: this.state.value,
	            'data-path': this.props.path });
	    }
	});
	
	module.exports = HiddenInput;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var LazyType = React.createClass({
	    displayName: 'LazyType',
	
	    mixins: [__webpack_require__(82)],
	    getInitialState: function getInitialState() {
	        return {
	            loaded: false
	        };
	    },
	    componentWillMount: function componentWillMount() {
	
	        var promise = this.props.promise;
	        promise && promise.then(this.onResolve);
	    },
	    onResolve: function onResolve(resolved) {
	        this.setState({ resolved: resolved, loaded: true });
	    },
	    render: function render() {
	        if (this.state.loaded) {
	            var Type = this.state.resolved;
	            var _props = this.props;
	            var promise = _props.promise;
	
	            var props = _objectWithoutProperties(_props, ['promise']);
	
	            return React.createElement(Type, _extends({ key: 'resolved' }, props));
	        }
	        return React.createElement('span', { className: 'lazy-loading-type', key: 'unresolved' });
	    }
	});
	module.exports = LazyType;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var CollectionMixin = __webpack_require__(112);
	var tu = __webpack_require__(6);
	var Constants = __webpack_require__(111);
	var css = __webpack_require__(103);
	var MixedInput = React.createClass({
	    displayName: 'MixedInput',
	
	    mixins: [CollectionMixin],
	    statics: {},
	    getDefaultProps: function getDefaultProps() {
	        return {
	            placeholder: '',
	            itemType: 'Text',
	            keyType: 'Text',
	            valueType: 'Text',
	            itemTemplate: 'ListItemTemplate',
	
	            onValidate: function onValidate() {}
	        };
	    },
	    cloneVal: function cloneVal(value) {
	        return value;
	    },
	    unwrap: function unwrap(value) {
	        var ret = {};
	        if (value == null) {
	            return ret;
	        }
	        value.forEach(function (v) {
	            v = v.value;
	            ret[v.key] = v.value;
	        });
	        return ret;
	    },
	
	    wrap: function wrap(prop) {
	        var value = prop && prop.value || {};
	        var wrapped = Object.keys(value).map(function (k) {
	            return {
	                id: k,
	                value: {
	                    key: k,
	                    value: value[k]
	                }
	            };
	        });
	        return {
	            wrapped: wrapped
	        };
	    },
	    itemToString: function itemToString() {
	        if (this.props.itemToString) return this.props.itemToString;
	        var labelKey = this.props.field.labelKey;
	        return function (v) {
	            if (!(v && v.key)) {
	                return null;
	            }
	
	            return React.createElement(
	                'span',
	                null,
	                React.createElement(
	                    'h4',
	                    { className: 'brf-key list-group-item-heading' },
	                    v.key
	                ),
	                labelKey ? React.createElement(
	                    'span',
	                    {
	                        className: 'brf-value list-group-item-text' },
	                    v.value[labelKey]
	                ) : null
	            );
	        };
	    },
	
	    uniqueCheck: function uniqueCheck(value) {
	        var values = this.getValue();
	        if (this.state.editPid == value) {
	            return null;
	        }
	        if (value in values) {
	
	            return {
	                message: 'Keys must be unique'
	            };
	        }
	        return null;
	    },
	    getTemplateItem: function getTemplateItem() {
	        var kt = this.props.field.keyType,
	            keyType = tu.isString(kt) ? {
	            type: kt
	        } : kt || {},
	            validators = keyType.validators || (keyType.validators = []),
	            item = {
	            type: 'Object',
	            name: this.props.field.name,
	            subSchema: {
	                key: keyType,
	                value: this.props.field.valueType || this.props.valueType
	            },
	            fields: ['key', 'value']
	        };
	
	        if (!keyType.type) {
	            keyType.type = this.props.keyType;
	        }
	
	        validators.unshift('required', this.uniqueCheck);
	
	        return item;
	    },
	    render: function render() {
	        var _this = this;
	
	        var _props = this.props;
	        var name = _props.name;
	        var itemType = _props.itemType;
	        var errors = _props.errors;
	        var canReorder = _props.canReorder;
	        var canDelete = _props.canDelete;
	        var canEdit = _props.canEdit;
	        var canAdd = _props.canAdd;
	        var path = _props.path;
	        var field = _props.field;var item = !itemType || tu.isString(itemType) ? {
	            type: itemType || 'Text',
	            name: name
	        } : itemType;var ListItemTemplate = this.template('itemTemplate');var values = this.state.wrapped || [];var length = values.length;
	        item.canReorder = canReorder;
	        item.canDelete = canDelete;
	        item.canEdit = canEdit;
	        var itemToString = this.itemToString();
	        return React.createElement(
	            'div',
	            { className: css.forField(this, 'list-editor') },
	            this.renderAdd(),
	            React.createElement(
	                'ul',
	                null,
	                values.map(function (v, i) {
	                    var path = tu.path(path, v.id);
	                    return React.createElement(ListItemTemplate, { key: path, pos: i, path: path,
	                        onMoveUp: _this.handleMoveUp,
	                        onMoveDown: _this.handleMoveDown, onDelete: _this.handleDelete,
	                        onEdit: _this.handleEdit,
	
	                        field: item,
	                        pid: v.id,
	                        itemToString: itemToString,
	                        value: v.value, errors: errors, last: i + 1 === length });
	                })
	            )
	        );
	    }
	
	});
	
	module.exports = MixedInput;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103),
	    noRe = /^(-|\+)?([0-9]*\.)?$/,
	    numRe = /^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/;
	
	var Number = React.createClass({
	    displayName: 'Number',
	
	    mixins: [__webpack_require__(87), __webpack_require__(88), __webpack_require__(89)],
	    statics: {
	        inputClassName: Constants.inputClassName
	    },
	    handleChange: function handleChange(e) {
	        var value = e.target.value;
	        this.props.onChange(e);
	        //Not a valid number but valid to become a number
	        if (noRe.test(value)) {
	            this.setValue(value);
	        } else
	            //check if real actual numbers.
	            if (numRe.test(value)) {
	                if (this.props.valueManager.update(this.props.path, parseFloat(value)) !== false) {
	                    this.props.onValueChange(value);
	                }
	            }
	    },
	    handleValidate: function handleValidate(e) {
	        this.props.onBlur.call(this, e);
	        this.props.onValidate(this.state.value, this, e);
	    },
	    render: function render() {
	        var _props = this.props;
	        var onChange = _props.onChange;
	        var onValueChange = _props.onValueChange;
	        var onBlur = _props.onBlur;
	        var className = _props.className;
	        var field = _props.field;
	        var value = _props.value;
	        var dataType = _props.dataType;
	        var value = _props.value;
	        var fieldAttrs = _props.fieldAttrs;
	        var type = _props.type;
	
	        var props = _objectWithoutProperties(_props, ['onChange', 'onValueChange', 'onBlur', 'className', 'field', 'value', 'dataType', 'value', 'fieldAttrs', 'type']);
	
	        return React.createElement('input', _extends({ ref: 'input', onBlur: this.handleValidate, onChange: this.handleChange, id: this.props.name,
	            className: css.forField(this),
	
	            value: this.state.value
	        }, props, fieldAttrs, {
	            type: dataType || 'text'
	        }));
	    }
	});
	
	module.exports = Number;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var NestedMixin = __webpack_require__(5);
	var BasicFieldMixin = __webpack_require__(87);
	var ObjectInput = React.createClass({
	    mixins: [NestedMixin, BasicFieldMixin],
	    displayName: 'ObjectInput',
	    statics: {
	        subSchema: 'SubschemaBuilder'
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            template: 'ObjectTemplate'
	        };
	    },
	    vm: function vm() {
	        return this.props.valueManager;
	    },
	    render: function render() {
	        var _props = this.props;
	        var field = _props.field;
	        var value = _props.value;
	        var template = _props.template;
	        var subSchema = _props.subSchema;
	        var schema = _props.schema;
	        var fields = _props.fields;
	
	        var props = _objectWithoutProperties(_props, ['field', 'value', 'template', 'subSchema', 'schema', 'fields']);
	
	        schema = subSchema || schema;
	        schema = this.normalizeSchema(schema);
	
	        this.schema = schema.schema ? schema : { schema: schema, fields: fields };
	
	        var obj = {};
	        obj.value = this.getValue();
	        var Template = this.template();
	        return React.createElement(
	            Template,
	            _extends({}, obj, props),
	            this.schema && this.schema.schema ? this.renderSchema(this.props.form) : null
	        );
	    }
	
	});
	module.exports = ObjectInput;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3),
	    FieldMixin = __webpack_require__(146),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103);
	;
	
	var Password = React.createClass({
	    displayName: 'Password',
	
	    mixins: [FieldMixin],
	    statics: {
	        inputClassName: Constants.inputClassName
	    },
	    render: function render() {
	        var _props = this.props;
	        var onBlur = _props.onBlur;
	        var onChange = _props.onChange;
	        var onValueChange = _props.onValueChange;
	        var value = _props.value;
	        var fieldAttrs = _props.fieldAttrs;
	
	        var props = _objectWithoutProperties(_props, ['onBlur', 'onChange', 'onValueChange', 'value', 'fieldAttrs']);
	
	        return React.createElement('input', _extends({ id: this.props.name, onBlur: this.handleValidate, onChange: this.handleChange,
	            className: css.forField(this), type: 'password',
	            value: this.state.value
	        }, props, fieldAttrs));
	    }
	
	});
	module.exports = Password;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var tu = __webpack_require__(6);
	var BasicFieldMixin = __webpack_require__(87);
	var LoaderMixin = __webpack_require__(82);
	var css = __webpack_require__(103);
	var RadioInput = React.createClass({
	    displayName: 'Radio',
	    mixins: [BasicFieldMixin, LoaderMixin],
	    statics: {
	        subSchema: {
	            options: 'OptionSchema'
	        }
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: '',
	            name: '',
	            placeholder: '',
	            itemTemplate: 'RadioItemTemplate'
	        };
	    },
	
	    setValue: function setValue(value) {
	        this.setState({ value: value });
	    },
	
	    getValue: function getValue() {
	        return this.state.value;
	    },
	    _compare: function _compare(val, val2) {
	        if (val == null && val2 == null) {
	            return true;
	        }
	        if (val == null || val2 == null) return false;
	        return '' + val === '' + val2;
	    },
	    handleCheckChange: function handleCheckChange(e) {
	        //Make a radio behave like a checkbox when there is only 1.
	        if (this.props.forceSelection === false || this.props.options && this.props.options.length === 1) {
	            this.props.handleChange(this._compare(e.target.value, this.state.value) ? null : e.target.value);
	        } else {
	            this.props.handleChange(e.target.value);
	        }
	    },
	    makeOptions: function makeOptions(options) {
	        var _this = this;
	
	        options = options || [];
	        var onChange = this.handleCheckChange;
	        var value = this.getValue();
	        var path = this.props.path;
	        return options.map(function (option, index) {
	            var _ref = tu.isString(option) ? { val: option, label: option } : option;
	
	            var val = _ref.val;
	            var label = _ref.label;
	            var labelHTML = _ref.labelHTML;
	
	            if (val == null) {
	                val = label;
	            }
	            if (label == null) {
	                label = val;
	            }
	            var path = tu.path(path, index);
	
	            return {
	                val: val,
	                path: path,
	                label: label,
	                labelHTML: labelHTML,
	                onChange: onChange,
	                checked: _this._compare(value, val)
	            };
	        });
	    },
	    render: function render() {
	        var _props = this.props;
	        var name = _props.name;
	        var itemTemplate = _props.itemTemplate;
	        var path = _props.path;
	        var value = _props.value;
	        var dataType = _props.dataType;
	        var options = _props.options;
	        var field = _props.field;
	
	        var RadioItemTemplate = this.template(itemTemplate);
	        var options = this.makeOptions(options);
	        return React.createElement(
	            'div',
	            { className: css.forField(this) },
	            options.map(function (option, index) {
	                return React.createElement(
	                    RadioItemTemplate,
	                    _extends({}, option, { key: option.path }),
	                    React.createElement('input', _extends({ id: options.path, type: 'radio',
	                        name: name }, option, { value: option.val }))
	                );
	            }, this)
	        );
	    }
	});
	
	module.exports = RadioInput;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3);
	var FieldValueMixin = __webpack_require__(86);
	var css = __webpack_require__(103);
	var Constants = __webpack_require__(111);
	var makeFormatter = __webpack_require__(159);
	function ret(op) {
	    return op;
	}
	var dateRe = /^([0,1]?\d?)(?:\/?(\d{0,2}))?$/;
	var zipRe = /^(\d{0,5})(?:[^\d]?(\d{0,4}))?$/;
	function lastEq(input, val) {
	    return input && input[input.length - 1] === val;
	}
	
	function defaultValidator(value, regex) {
	    return regex.test(value);
	}
	function createValidator(validator, loader) {
	    if (validator === void 0) {
	        return defaultValidator;
	    }
	    if (typeof validator === 'function') {
	        return validator;
	    }
	    if (typeof validator === 'string') {
	        validator = loader.loadValidator(validator)();
	        return function (value) {
	            return !validator(value);
	        };
	    }
	    if (validator instanceof RegExp) {
	        return RegExp.prototype.test.bind(re);
	    }
	    throw 'Do not know what to do with ' + validator;
	}
	function title(value) {
	    value = value || '';
	    if (value.length === 0) {
	        return value;
	    }
	    return value.substring(0, 1).toUpperCase() + value.substring(1);
	}
	var Restricted = React.createClass({
	    displayName: 'Restricted',
	
	    mixins: [__webpack_require__(160)],
	
	    render: function render() {
	        var _props = this.props;
	        var onChange = _props.onChange;
	        var onValueChange = _props.onValueChange;
	        var onBlur = _props.onBlur;
	        var className = _props.className;
	        var field = _props.field;
	        var value = _props.value;
	        var dataType = _props.dataType;
	        var value = _props.value;
	        var type = _props.type;
	        var fieldAttrs = _props.fieldAttrs;
	
	        var props = _objectWithoutProperties(_props, ['onChange', 'onValueChange', 'onBlur', 'className', 'field', 'value', 'dataType', 'value', 'type', 'fieldAttrs']);
	
	        return React.createElement('input', _extends({ ref: 'input', onBlur: this.handleValidate, onChange: this.handleValueChange, id: this.props.name,
	            className: css.forField(this),
	            value: this.state.value
	        }, props, fieldAttrs, { type: dataType || 'text', onKeyDown: this.handleKeyDown }));
	    }
	});
	
	module.exports = Restricted;

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';
	
	var reRe = /(#{1,}|A{1,}|a{1,}|0{1,}(?:\.0{1,})?)?(.+?)?/mg;
	var slice = Function.call.bind(Array.prototype.slice);
	function fixDelim(str) {
	    return (str || '').replace(/([ ().-])/g, '\\$1');
	}
	function ret(exact, val, d, backward) {
	    return exact != null && exact === d ? exact : exact == null || exact == '' ? val : exact;
	}
	function fmt(delim, placeholder) {
	    delim = delim || '';
	    function fmt$return(exact, val, d, backward) {
	        if (placeholder && !backward) {
	            return delim;
	        }
	        if (exact === d) {
	            return exact || '';
	        }
	        return exact == null || exact === '' ? val : backward ? exact : exact + delim;
	    };
	    fmt$return.placeholder = placeholder;
	    return fmt$return;
	}
	function upper(delim) {
	    return function fmt$return(exact, val, d, backward) {
	        exact = (ret(exact, val, d) || '').toUpperCase();
	        return backward ? exact : exact + delim;
	    };
	}
	function lower(delim) {
	    return function fmt$return(exact, val, d, backward) {
	        exact = (ret(exact, val, d) || '').toUpperCase();
	        return backward ? exact : exact + delim;
	    };
	}
	function _pad(value, length, right) {
	    value = value || '';
	    while (value.length < length) {
	        if (right) {
	            value += '0';
	        } else {
	            value = '0' + value;
	        }
	    }
	    return value;
	}
	function pad(delim, padding) {
	    var parts = padding.split('.', 2);
	    return function fmt$return(exact, val, d, backward) {
	        exact = ret(exact, val, d).split('.', 2);
	        return _pad(exact[0], parts[0].length, false) + (parts.length > 1 ? '.' + _pad(exact[1], parts[1].length, true) : '');
	    };
	}
	function defaultValidator(value, regex) {
	    return regex.test(value);
	}
	function makeFormatter(format, validator) {
	    validator = validator || defaultValidator;
	    var parts;
	    var pattern = '',
	        validPattern = '';
	    var handlers = [];
	    reRe.lastIndex = 0;
	    while ((parts = reRe.exec(format)) != null && parts.index < format.length) {
	        var first = parts[1],
	            delim = parts[2],
	            exact;
	        switch (first && first[0] || '') {
	            //mixed case
	            case 'M':
	                {
	                    exact = '(\\[a-zA-Z]{' + first.length + '})';
	                    pattern += exact + '|(\\[a-zA-Z]{0,' + (first.length - 1) + '})';
	                    validPattern += exact;
	                    handlers.push(fmt(delim));
	                    break;
	                }
	            //upper case
	            case 'A':
	                {
	                    exact = '(\\[A-Z]{' + first.length + '})';
	                    pattern += exact + '|(\\[a-zA-Z]{0,' + (first.length - 1) + '})';
	                    validPattern += exact;
	                    handlers.push(upper(delim));
	
	                    break;
	                }
	            //lower case
	            case 'a':
	                {
	                    exact = '(\\[A-Z]{' + first.length + '})';
	                    pattern += exact + '|(\\[a-zA-Z]{0,' + (first.length - 1) + '})';
	                    validPattern += exact;
	                    handlers.push(lower(delim));
	
	                    break;
	                }
	            //padding
	            case '0':
	                exact = '(\\d{' + first.length + ',})';
	                pattern += '(' + exact + '|(\\d{0,}))(?:[^\\d])?';
	                validPattern += exact + fixDelim(delim);
	                handlers.push(pad(delim, first));
	                break;
	
	            //Number
	            case '#':
	                {
	                    var fdelim = fixDelim(delim);
	                    exact = '(\\d{' + first.length + '})';
	                    pattern += '(' + exact + '|(\\d{0,' + (first.length - 1) + '}))(?:' + fdelim + '|[^\\d]+?)?';
	                    validPattern += exact + fdelim;
	                    handlers.push(fmt(delim));
	                    break;
	                }
	            default:
	                {
	                    //empty pattern so that the patterns
	                    // and the input align when its a non matching pattern
	                    var fdelim = fixDelim(delim);
	                    exact = '(' + fdelim + ')';
	                    pattern += '(' + fdelim + '|)()(?:' + fdelim + '|(!' + fdelim + '))?';
	                    validPattern += '()(' + fdelim + ')';
	                    handlers.push(fmt(delim, true));
	                    break;
	                }
	        }
	    }
	    var re = new RegExp('^' + pattern),
	        vre = new RegExp('^' + validPattern + '$', 'g');
	    return function makeFormatter$formatter(input, isBackward) {
	        vre.lastIndex = re.index = re.lastIndex = 0;
	        var idx = 0,
	            d = 0,
	            p;
	        var parts = re.exec(input);
	        parts.shift();
	        //remove delimeters
	
	        parts = re.exec(clean(parts));
	        parts.shift();
	        while (parts.length) {
	            p = parts[parts.length - 1];
	            if (p == null || p == '') parts.pop();else break;
	        }
	        var incr = handlers.length;
	        var value = '',
	            done = false,
	            isPlaceholder = false;
	        for (var i = 0, l = incr * 3; i < l; i += 3, d++) {
	            /*if (parts[i] == '' && parts[i + 1] == null) {
	             break;
	             }*/
	            var isNextPlaceholder = parts[i] !== parts[i + 2] && (handlers[d + 1] && handlers[d + 1].placeholder === true);
	            done = i + 3 !== l ? parts[i + 3] == null && parts[i + 4] == null ? isBackward ? true : !isNextPlaceholder : false : isNextPlaceholder;
	            value += handlers[d](parts[i], parts[i + 1], parts[i + 2], done ? isBackward : false);
	            if (done) {
	                break;
	            }
	        }
	        return {
	            isValid: validator(value, vre),
	            value: value
	        };
	    };
	}
	
	//So we only care about every 3rd group.  Remove delimeters
	// and such, so the next parse can have something nice to work with.
	function clean(parts) {
	    var p = '';
	    for (var i = 0; i < parts.length; i += 3) {
	        p += parts[i] || '';
	    }
	    return p;
	}
	
	module.exports = makeFormatter;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var FieldValueMixin = __webpack_require__(86);
	var css = __webpack_require__(103);
	var Constants = __webpack_require__(111);
	var makeFormatter = __webpack_require__(159);
	function ret(op) {
	    return op;
	}
	var dateRe = /^([0,1]?\d?)(?:\/?(\d{0,2}))?$/;
	var zipRe = /^(\d{0,5})(?:[^\d]?(\d{0,4}))?$/;
	function lastEq(input, val) {
	    return input && input[input.length - 1] === val;
	}
	
	function defaultValidator(value, regex) {
	    return regex.test(value);
	}
	function createValidator(validator, loader) {
	    if (validator === void 0) {
	        return defaultValidator;
	    }
	    if (typeof validator === 'function') {
	        return validator;
	    }
	    if (typeof validator === 'string') {
	        validator = loader.loadValidator(validator)();
	        return function (value) {
	            return !validator(value);
	        };
	    }
	    if (validator instanceof RegExp) {
	        return RegExp.prototype.test.bind(re);
	    }
	    throw 'Do not know what to do with ' + validator;
	}
	function _title(value) {
	    value = value || '';
	    if (value.length === 0) {
	        return value;
	    }
	    return value.substring(0, 1).toUpperCase() + value.substring(1);
	}
	var RestrictedMixin = {
	    mixins: [__webpack_require__(87), __webpack_require__(88), __webpack_require__(90)],
	    statics: {
	        inputClassName: Constants.inputClassName
	    },
	    getInitialState: function getInitialState() {
	        var value = this.props.value ? this.formatter(this.props.value) : {
	            isValid: false,
	            value: ''
	        };
	
	        return {
	            value: value.value || '',
	            hasValidValue: value.isValid
	        };
	    },
	    setValue: function setValue(value) {
	        this.setState({ value: value });
	    },
	    getValue: function getValue() {
	        return this.state.value;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(props) {
	        if (props.formatter !== this.props.formatter) {
	            this._formatter = null;
	        }
	    },
	    formatters: {
	        uszip: function uszip(value, isBackspace) {
	            value = (value || '').substring(0, 10);
	            var parts = zipRe.exec(value) || [],
	                isValid = false;
	
	            if (parts) {
	                if (parts[2]) {
	                    value = parts[1] + '-' + parts[2];
	                } else {
	                    value = parts[1] || '';
	                }
	                isValid = value.length === 5 || value.length === 10;
	            } else {
	                value = '';
	            }
	
	            return {
	                value: value,
	                isValid: isValid
	            };
	        },
	        capitalize: function capitalize(value) {
	            return { value: _title(value), isValid: false };
	        },
	        title: function title(value, isBackspace) {
	            value = value || '';
	
	            return { value: value.split(/\s+?/).map(_title).join(' '), isValid: false };
	        },
	        creditcard: '#### #### #### ####',
	        shortDate: function shortDate(value, isBackspace) {
	            var parts = dateRe.exec(value) || [];
	            if (parts.shift()) {
	                var str = '';
	                var last = parts.pop();
	                var mm = parts.shift();
	                if (mm.length === 2) {
	                    str += mm + '/';
	                } else if (last || last === '') {
	                    str += '0' + mm + '/';
	                } else {
	                    str += mm;
	                }
	                str += last || '';
	                return {
	                    value: isBackspace ? str.substring(0, lastEq(value, '/') ? value.length - 1 : value.length) : str,
	                    isValid: str.length === 5
	                };
	            }
	            if (value && value.trim() === '') {
	                return {
	                    value: value.trim(),
	                    isValid: false
	                };
	            }
	            return {
	                value: '',
	                isValid: false
	            };
	        }
	    },
	
	    formatter: function formatter(value, isBackspace) {
	        if (this._formatter) {
	            return this._formatter.call(this, value, isBackspace);
	        }
	        var formatter = this.props.formatter;
	
	        if (typeof formatter === 'string') {
	            formatter = this.formatters[formatter] || formatter;
	            if (typeof formatter === 'function') {
	                return (this._formatter = formatter).call(this, value, isBackspace);
	            } else {
	                return (this._formatter = makeFormatter(formatter, createValidator(this.props.validator, this.props.loader))).call(this, value, isBackspace);
	            }
	        } else if (typeof formatter === 'function') {
	            return (this._formatter = formatter).call(this, value, isBackspace);
	        }
	        return value;
	    },
	    valueFromEvt: function valueFromEvt(e) {
	        return e.target.value;
	    },
	    handleKeyDown: function handleKeyDown(e) {
	        if (this.props.onKeyDown) {
	            this.props.onKeyDown.call(this, e);
	        }
	        var pos = e.target.selectionStart,
	            end = e.target.selectionEnd;
	        if (e.key === 'Enter') {
	            this.props.onValid(this.state.hasValidValue, {
	                isValid: this.state.hasValidValue,
	                value: this.state.value
	            });
	            return;
	        }
	        if (e.key === 'Delete') {
	            e.preventDefault();
	            var value = this.state.value || '';
	            value = value.substring(0, pos) + value.substring(end);
	            this._value(value, false, pos);
	            return;
	        }
	        if (e.key === 'Backspace') {
	            e.preventDefault();
	            e.stopPropagation();
	            var value = this.state.value || '';
	            var back = false;
	            if (pos === end) {
	                value = value.trim().substring(0, value.length - 1);
	                back = true;
	            } else {
	                value = value.substring(0, pos) + value.substring(end);
	            }
	            this._value(value, back, pos + value.length);
	            return;
	        }
	    },
	    _value: function _value(str, isBackspace, caret) {
	        var value = this.formatter(str, isBackspace) || { isValid: false };
	        this.props.onValid(value.isValid, value);
	        this.props.handleChange(value.value);
	        if (caret != null) {
	            if (isBackspace) {
	                caret += value.position - 1;
	            } else {
	                caret += value.position + 1;
	            }
	        }
	        this.setState({
	            value: value.value,
	            hasValue: value.value.length !== 0,
	            hasValidValue: value.isValid
	        }, caret ? function () {
	            this.getDOMNode().setSelectionRange(caret, caret);
	        } : null);
	    },
	    handleValueChange: function handleValueChange(e) {
	        this.props.onChange.call(this, e);
	        this._value(e.target.value, false, e.target.selectionEnd);
	    }
	};
	
	module.exports = RestrictedMixin;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3),
	    util = __webpack_require__(6),
	    FieldMixin = __webpack_require__(146),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103);
	function toLabelVal(v) {
	    if (util.isString(v)) {
	        return {
	            label: v,
	            val: v
	        };
	    }
	    if (v == null) {
	        return {
	            label: 'No Value',
	            val: null
	        };
	    }
	
	    return v;
	}
	
	var Select = React.createClass({
	    displayName: 'Select',
	
	    mixins: [FieldMixin],
	    statics: {
	        inputClassName: Constants.inputClassName
	
	    },
	    handleSelect: function handleSelect(e) {
	        if (this.props.multiple) {
	            var placeholder = this.props.placeholder;
	            //normalize multiple field selection
	            var values = [],
	                options = e.target.options,
	                i = 0,
	                l = options.length,
	                option;
	            for (; i < l; i++) {
	                var option = options[i];
	                if (option.selected) {
	                    if (option.label != placeholder) values.push(option.value);
	                }
	            }
	            this.props.handleChange(values);
	            return;
	        } else if (this.props.placeholder) {
	            if (e.target.value === this.props.placeholder) {
	                this.props.handleChange(null);
	                return;
	            }
	        }
	
	        this.props.handleChange(e.target.value);
	    },
	    renderOptions: function renderOptions(value) {
	        var props = this.props,
	            multiple = props.multiple,
	            opts = props.options || [],
	            hasValue = false,
	            ret = opts.map(toLabelVal).map(function (o, i) {
	            if (!hasValue && o.val + '' == '' + value) hasValue = true;
	            return React.createElement(
	                'option',
	                { key: 's' + i, value: o.val },
	                o.label
	            );
	        });
	        var placeholder = this.props.placeholder;
	        if (placeholder || !multiple && !!hasValue) {
	            //fixes a bug in react where selecting null, does not select null.
	            var selected = {};
	            if (!hasValue) {
	                selected.selected = true;
	                selected.value = null;
	            }
	            ret.unshift(React.createElement(
	                'option',
	                _extends({ key: 'null-' + opts.length }, selected),
	                placeholder
	            ));
	        }
	        return ret;
	    },
	    render: function render() {
	        var _props = this.props;
	        var field = _props.field;
	        var onChange = _props.onChange;
	        var fieldAttrs = _props.fieldAttrs;
	        var onBlur = _props.onBlur;
	        var type = _props.type;
	        var value = _props.value;
	        var multiple = _props.multiple;
	        var placeholder = _props.placeholder;
	
	        var props = _objectWithoutProperties(_props, ['field', 'onChange', 'fieldAttrs', 'onBlur', 'type', 'value', 'multiple', 'placeholder']);
	
	        var value = this.state.value;
	        if (multiple && !Array.isArray(value)) {
	            value = value ? [value] : value;
	        }
	        return React.createElement(
	            'select',
	            _extends({ className: css.forField(this),
	                multiple: multiple,
	                ref: 'input',
	                value: value,
	                onBlur: this.handleValidate, onChange: this.handleSelect
	            }, props, fieldAttrs),
	            this.renderOptions(value)
	        );
	    }
	
	});
	module.exports = Select;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3),
	    FieldMixin = __webpack_require__(146),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103);
	
	var TextInput = React.createClass({
	    displayName: 'TextInput',
	
	    mixins: [FieldMixin],
	    statics: {
	        inputClassName: Constants.inputClassName
	    },
	    render: function render() {
	        var _props = this.props;
	        var onChange = _props.onChange;
	        var onValueChange = _props.onValueChange;
	        var onBlur = _props.onBlur;
	        var className = _props.className;
	        var field = _props.field;
	        var value = _props.value;
	        var dataType = _props.dataType;
	        var value = _props.value;
	        var fieldAttrs = _props.fieldAttrs;
	        var type = _props.type;
	
	        var props = _objectWithoutProperties(_props, ['onChange', 'onValueChange', 'onBlur', 'className', 'field', 'value', 'dataType', 'value', 'fieldAttrs', 'type']);
	
	        return React.createElement('input', _extends({ ref: 'input', onBlur: this.handleValidate, onChange: this.handleChange, id: this.props.name,
	            className: css.forField(this),
	
	            value: this.state.value
	        }, props, fieldAttrs, {
	            type: dataType || 'text'
	        }));
	    }
	});
	
	module.exports = TextInput;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = __webpack_require__(3),
	    FieldMixin = __webpack_require__(146),
	    Constants = __webpack_require__(111),
	    css = __webpack_require__(103);
	
	var TextArea = React.createClass({
	    displayName: 'TextArea',
	
	    mixins: [FieldMixin],
	    statics: {
	        inputClassName: Constants.inputClassName
	    },
	    render: function render() {
	        var _props = this.props;
	        var fieldAttrs = _props.fieldAttrs;
	        var value = _props.value;
	        var onBlur = _props.onBlur;
	        var onChange = _props.onChange;
	        var onValueChange = _props.onValueChange;
	
	        var props = _objectWithoutProperties(_props, ['fieldAttrs', 'value', 'onBlur', 'onChange', 'onValueChange']);
	
	        return React.createElement('textarea', _extends({ onBlur: this.handleValidate,
	            onChange: this.handleChange,
	            id: this.props.name,
	            className: css.forField(this),
	            value: this.state.value
	
	        }, props, fieldAttrs));
	    }
	});
	
	module.exports = TextArea;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	//Being tricky, in web mode we will load it, in non web mode we will load the .js.
	// This will load the default templates. I am expecting several bug reports about this.
	'use strict';
	
	var loader = __webpack_require__(83);
	loader.addLoader(__webpack_require__(91));
	loader.addLoader(__webpack_require__(92));
	module.exports = __webpack_require__(2);

/***/ }
/******/ ])
});
;
//# sourceMappingURL=subschema-noreact.js.map