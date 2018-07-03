/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		        if (installedModules[moduleId]) return installedModules[moduleId].exports;
/******/
/******/ 		        var module = installedModules[moduleId] = {
/******/ 		          i: moduleId,
/******/ 		          l: false,
/******/ 		          exports: {}
/******/ 		        };
/******/
/******/ 		        if (!modules[moduleId] && typeof moduleId === 'string') {
/******/ 		          var newModuleId;
/******/ 		          if (modules[newModuleId = moduleId + '.js'] || modules[newModuleId = moduleId + '.ts']) {
/******/ 		            moduleId = newModuleId;
/******/
/******/ 		            installedModules[moduleId] = module;
/******/ 		          }
/******/ 		        }
/******/
/******/ 		        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		        module.l = true;
/******/
/******/ 		        return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		return installedChunks[chunkId][2] = promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 402);
/******/ })
/************************************************************************/
/******/ ({

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(152).nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103).setImmediate, __webpack_require__(103).clearImmediate))

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(156);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },

/***/ 152:
/***/ function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Promise) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33), __webpack_require__("bluebird")))

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Promise, global, setImmediate) {/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.5.1
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");
var util = _dereq_("./util");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    this._trampolineEnabled = true;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.enableTrampoline = function() {
    this._trampolineEnabled = true;
};

Async.prototype.disableTrampolineIfNecessary = function() {
    if (util.hasDevTools) {
        this._trampolineEnabled = false;
    }
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

if (!util.hasDevTools) {
    Async.prototype.invokeLater = AsyncInvokeLater;
    Async.prototype.invoke = AsyncInvoke;
    Async.prototype.settlePromises = AsyncSettlePromises;
} else {
    Async.prototype.invokeLater = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvokeLater.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                setTimeout(function() {
                    fn.call(receiver, arg);
                }, 100);
            });
        }
    };

    Async.prototype.invoke = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvoke.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                fn.call(receiver, arg);
            });
        }
    };

    Async.prototype.settlePromises = function(promise) {
        if (this._trampolineEnabled) {
            AsyncSettlePromises.call(this, promise);
        } else {
            this._schedule(function() {
                promise._settlePromises();
            });
        }
    };
}

Async.prototype._drainQueue = function(queue) {
    while (queue.length() > 0) {
        var fn = queue.shift();
        if (typeof fn !== "function") {
            fn._settlePromises();
            continue;
        }
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
};

Async.prototype._drainQueues = function () {
    this._drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    this._drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (false) {
var makeMethodCaller = function (methodName) {
    return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
};

var makeGetter = function (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
};

var getCompiled = function(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
};

getMethodCaller = function(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
};

getGetter = function(name) {
    return getCompiled(name, makeGetter, getterCache);
};
}

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (false) {
        if (canEvaluate) {
            var maybeCaller = getMethodCaller(methodName);
            if (maybeCaller !== null) {
                return this._then(
                    maybeCaller, undefined, undefined, args, undefined);
            }
        }
    }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context) {
var getDomain = Promise._getDomain;
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        (true ||
                         util.env("BLUEBIRD_DEBUG") ||
                         util.env("NODE_ENV") === "development"));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    var self = this;
    setTimeout(function() {
        self._notifyUnhandledRejection();
    }, 1);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var domain = getDomain();
    possiblyUnhandledRejection =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var domain = getDomain();
    unhandledRejectionHandled =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Context.deactivateLongStackTraces();
            async.enableTrampoline();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Context.activateLongStackTraces();
        async.disableTrampolineIfNecessary();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};

var fireDomEvent = (function() {
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new CustomEvent(name.toLowerCase(), {
                    detail: event,
                    cancelable: true
                });
                return !util.global.dispatchEvent(domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new Event(name.toLowerCase(), {
                    cancelable: true
                });
                domEvent.detail = event;
                return !util.global.dispatchEvent(domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name.toLowerCase(), false, true,
                    event);
                return !util.global.dispatchEvent(domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = firstLineError.stack.split("\n");
    var lastStackLines = lastLineError.stack.split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async,
         getDomain) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (false) {
if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var promiseSetter = function(i) {
        return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
    };

    var generateHolderClass = function(total) {
        var props = new Array(total);
        for (var i = 0; i < props.length; ++i) {
            props[i] = "this.p" + (i+1);
        }
        var assignment = props.join(" = ") + " = null;";
        var cancellationCode= "var promise;\n" + props.map(function(prop) {
            return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
        }).join("\n");
        var passedArguments = props.join(", ");
        var name = "Holder$" + total;


        var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";

        code = code.replace(/\[TheName\]/g, name)
            .replace(/\[TheTotal\]/g, total)
            .replace(/\[ThePassedArguments\]/g, passedArguments)
            .replace(/\[TheProperties\]/g, assignment)
            .replace(/\[CancellationCode\]/g, cancellationCode);

        return new Function("tryCatch", "errorObj", "Promise", "async", code)
                           (tryCatch, errorObj, Promise, async);
    };

    var holderClasses = [];
    var thenCallbacks = [];
    var promiseSetters = [];

    for (var i = 0; i < 8; ++i) {
        holderClasses.push(generateHolderClass(i + 1));
        thenCallbacks.push(thenCallback(i + 1));
        promiseSetters.push(promiseSetter(i + 1));
    }

    reject = function (reason) {
        this._reject(reason);
    };
}}

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (false) {
            if (last <= 8 && canEvaluate) {
                var ret = new Promise(INTERNAL);
                ret._captureStackTrace();
                var HolderClass = holderClasses[last - 1];
                var holder = new HolderClass(fn);
                var callbacks = thenCallbacks;

                for (var i = 0; i < last; ++i) {
                    var maybePromise = tryConvertToPromise(arguments[i], ret);
                    if (maybePromise instanceof Promise) {
                        maybePromise = maybePromise._target();
                        var bitField = maybePromise._bitField;
                        ;
                        if (((bitField & 50397184) === 0)) {
                            maybePromise._then(callbacks[i], reject,
                                               undefined, ret, holder);
                            promiseSetters[i](maybePromise, holder);
                            holder.asyncNeeded = false;
                        } else if (((bitField & 33554432) !== 0)) {
                            callbacks[i].call(ret,
                                              maybePromise._value(), holder);
                        } else if (((bitField & 16777216) !== 0)) {
                            ret._reject(maybePromise._reason());
                        } else {
                            ret._cancel();
                        }
                    } else {
                        callbacks[i].call(ret, maybePromise, holder);
                    }
                }

                if (!ret._isFateSealed()) {
                    if (holder.asyncNeeded) {
                        var domain = getDomain();
                        if (domain !== null) {
                            holder.fn = util.domainBind(domain, holder.fn);
                        }
                    }
                    ret._setAsyncGuaranteed();
                    ret._setOnCancel(holder);
                }
                return ret;
            }
        }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var domain = getDomain();
    this._callback = domain === null ? fn : util.domainBind(domain, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");

var getDomain;
if (util.isNode) {
    getDomain = function() {
        var ret = process.domain;
        if (ret === undefined) ret = null;
        return ret;
    };
} else {
    getDomain = function() {
        return null;
    };
}
util.notEnumerableProp(Promise, "_getDomain", getDomain);

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;
var debug = _dereq_("./debuggability")(Promise, Context);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var domain = getDomain();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: domain === null ? handler
                : (typeof handler === "function" &&
                    util.domainBind(domain, handler)),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    domain
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);

    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(promise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
Promise.Promise = Promise;
Promise.version = "3.5.1";
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./call_get.js')(Promise);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./filter.js')(Promise, INTERNAL);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./any.js')(Promise);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (false) {
var switchCaseArgumentOrder = function(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 3);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
        ret.push(i);
    }
    return ret;
};

var argumentSequence = function(argumentCount) {
    return util.filledRange(argumentCount, "_arg", "");
};

var parameterDeclaration = function(parameterCount) {
    return util.filledRange(
        Math.max(parameterCount, 3), "_arg", "");
};

var parameterCount = function(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
};

makeNodePromisifiedEval =
function(callback, receiver, originalName, fn, _, multiArgs) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (shouldProxyThis) {
            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
        } else {
            ret = receiver === undefined
                ? "ret = callback({{args}}, nodeback); break;\n"
                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
        }
        return ret.replace("{{args}}", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for (var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", (shouldProxyThis
                                ? "ret = callback.apply(this, args);\n"
                                : "ret = callback.apply(receiver, args);\n"));
        return ret;
    }

    var getFunctionCode = typeof callback === "string"
                                ? ("this != null ? this['"+callback+"'] : fn")
                                : "fn";
    var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
        .replace("[GetFunctionCode]", getFunctionCode);
    body = body.replace("Parameters", parameterDeclaration(newParameterCount));
    return new Function("Promise",
                        "fn",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "tryCatch",
                        "errorObj",
                        "notEnumerableProp",
                        "INTERNAL",
                        body)(
                    Promise,
                    fn,
                    receiver,
                    withAppended,
                    maybeWrapAsError,
                    nodebackForPromise,
                    util.tryCatch,
                    util.errorObj,
                    util.notEnumerableProp,
                    INTERNAL);
};
}

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var domain = getDomain();
    this._fn = domain === null ? fn : util.domainBind(domain, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined && 
        this._eachValues !== null && 
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };
            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova))) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var l = 8;
    while (l--) new FakeConstructor();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj instanceof Error ||
        (obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string");
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    "object" !== "undefined";

function env(key) {
    return hasEnvVariables ? {"ENV":"development","NODE_ENV":"development","HMR":false,"WEBPACK_HOST":"localhost","WEBPACK_PORT":9000}[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if ({}.toString.call(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

function domainBind(self, cb) {
    return self.bind(cb);
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    hasDevTools: typeof chrome !== "undefined" && chrome &&
                 typeof chrome.loadTimes === "function",
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    domainBind: domainBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version = process.versions.node.split(".").map(Number);
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(152), __webpack_require__("bluebird"), __webpack_require__(33), __webpack_require__(103).setImmediate))

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Origin = exports.metadata = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.decorators = decorators;
exports.deprecated = deprecated;
exports.mixin = mixin;
exports.protocol = protocol;

var _aureliaPal = __webpack_require__(6);



function isObject(val) {
  return val && (typeof val === 'function' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object');
}

var metadata = exports.metadata = {
  resource: 'aurelia:resource',
  paramTypes: 'design:paramtypes',
  propertyType: 'design:type',
  properties: 'design:properties',
  get: function get(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    var result = metadata.getOwn(metadataKey, target, targetKey);
    return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
  },
  getOwn: function getOwn(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    return Reflect.getOwnMetadata(metadataKey, target, targetKey);
  },
  define: function define(metadataKey, metadataValue, target, targetKey) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
  },
  getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
    var result = metadata.getOwn(metadataKey, target, targetKey);

    if (result === undefined) {
      result = new Type();
      Reflect.defineMetadata(metadataKey, result, target, targetKey);
    }

    return result;
  }
};

var originStorage = new Map();
var unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

var Origin = exports.Origin = function () {
  function Origin(moduleId, moduleMember) {
    

    this.moduleId = moduleId;
    this.moduleMember = moduleMember;
  }

  Origin.get = function get(fn) {
    var origin = originStorage.get(fn);

    if (origin === undefined) {
      _aureliaPal.PLATFORM.eachModule(function (key, value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          for (var name in value) {
            try {
              var exp = value[name];
              if (exp === fn) {
                originStorage.set(fn, origin = new Origin(key, name));
                return true;
              }
            } catch (e) {}
          }
        }

        if (value === fn) {
          originStorage.set(fn, origin = new Origin(key, 'default'));
          return true;
        }

        return false;
      });
    }

    return origin || unknownOrigin;
  };

  Origin.set = function set(fn, origin) {
    originStorage.set(fn, origin);
  };

  return Origin;
}();

function decorators() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var applicator = function applicator(target, key, descriptor) {
    var i = rest.length;

    if (key) {
      descriptor = descriptor || {
        value: target[key],
        writable: true,
        configurable: true,
        enumerable: true
      };

      while (i--) {
        descriptor = rest[i](target, key, descriptor) || descriptor;
      }

      Object.defineProperty(target, key, descriptor);
    } else {
      while (i--) {
        target = rest[i](target) || target;
      }
    }

    return target;
  };

  applicator.on = applicator;
  return applicator;
}

function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
  function decorator(target, key, descriptor) {
    var methodSignature = target.constructor.name + '#' + key;
    var options = maybeKey ? {} : optionsOrTarget || {};
    var message = 'DEPRECATION - ' + methodSignature;

    if (typeof descriptor.value !== 'function') {
      throw new SyntaxError('Only methods can be marked as deprecated.');
    }

    if (options.message) {
      message += ' - ' + options.message;
    }

    return _extends({}, descriptor, {
      value: function deprecationWrapper() {
        if (options.error) {
          throw new Error(message);
        } else {
          console.warn(message);
        }

        return descriptor.value.apply(this, arguments);
      }
    });
  }

  return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
}

function mixin(behavior) {
  var instanceKeys = Object.keys(behavior);

  function _mixin(possible) {
    var decorator = function decorator(target) {
      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

      var i = instanceKeys.length;
      while (i--) {
        var property = instanceKeys[i];
        Object.defineProperty(resolvedTarget, property, {
          value: behavior[property],
          writable: true
        });
      }
    };

    return possible ? decorator(possible) : decorator;
  }

  return _mixin;
}

function alwaysValid() {
  return true;
}
function noCompose() {}

function ensureProtocolOptions(options) {
  if (options === undefined) {
    options = {};
  } else if (typeof options === 'function') {
    options = {
      validate: options
    };
  }

  if (!options.validate) {
    options.validate = alwaysValid;
  }

  if (!options.compose) {
    options.compose = noCompose;
  }

  return options;
}

function createProtocolValidator(validate) {
  return function (target) {
    var result = validate(target);
    return result === true;
  };
}

function createProtocolAsserter(name, validate) {
  return function (target) {
    var result = validate(target);
    if (result !== true) {
      throw new Error(result || name + ' was not correctly implemented.');
    }
  };
}

function protocol(name, options) {
  options = ensureProtocolOptions(options);

  var result = function result(target) {
    var resolvedTarget = typeof target === 'function' ? target.prototype : target;

    options.compose(resolvedTarget);
    result.assert(resolvedTarget);

    Object.defineProperty(resolvedTarget, 'protocol:' + name, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: true
    });
  };

  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
}

protocol.create = function (name, options) {
  options = ensureProtocolOptions(options);
  var hidden = 'protocol:' + name;
  var result = function result(target) {
    var decorator = protocol(name, options);
    return target ? decorator(target) : decorator;
  };

  result.decorates = function (obj) {
    return obj[hidden] === true;
  };
  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
};

/***/ },

/***/ 33:
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },

/***/ 39:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.relativeToFile = relativeToFile;
exports.join = join;
exports.buildQueryString = buildQueryString;
exports.parseQueryString = parseQueryString;

function trimDots(ary) {
  for (var i = 0; i < ary.length; ++i) {
    var part = ary[i];
    if (part === '.') {
      ary.splice(i, 1);
      i -= 1;
    } else if (part === '..') {
      if (i === 0 || i === 1 && ary[2] === '..' || ary[i - 1] === '..') {
        continue;
      } else if (i > 0) {
        ary.splice(i - 1, 2);
        i -= 2;
      }
    }
  }
}

function relativeToFile(name, file) {
  var fileParts = file && file.split('/');
  var nameParts = name.trim().split('/');

  if (nameParts[0].charAt(0) === '.' && fileParts) {
    var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
    nameParts.unshift.apply(nameParts, normalizedBaseParts);
  }

  trimDots(nameParts);

  return nameParts.join('/');
}

function join(path1, path2) {
  if (!path1) {
    return path2;
  }

  if (!path2) {
    return path1;
  }

  var schemeMatch = path1.match(/^([^/]*?:)\//);
  var scheme = schemeMatch && schemeMatch.length > 0 ? schemeMatch[1] : '';
  path1 = path1.substr(scheme.length);

  var urlPrefix = void 0;
  if (path1.indexOf('///') === 0 && scheme === 'file:') {
    urlPrefix = '///';
  } else if (path1.indexOf('//') === 0) {
    urlPrefix = '//';
  } else if (path1.indexOf('/') === 0) {
    urlPrefix = '/';
  } else {
    urlPrefix = '';
  }

  var trailingSlash = path2.slice(-1) === '/' ? '/' : '';

  var url1 = path1.split('/');
  var url2 = path2.split('/');
  var url3 = [];

  for (var i = 0, ii = url1.length; i < ii; ++i) {
    if (url1[i] === '..') {
      url3.pop();
    } else if (url1[i] === '.' || url1[i] === '') {
      continue;
    } else {
      url3.push(url1[i]);
    }
  }

  for (var _i = 0, _ii = url2.length; _i < _ii; ++_i) {
    if (url2[_i] === '..') {
      url3.pop();
    } else if (url2[_i] === '.' || url2[_i] === '') {
      continue;
    } else {
      url3.push(url2[_i]);
    }
  }

  return scheme + urlPrefix + url3.join('/') + trailingSlash;
}

var encode = encodeURIComponent;
var encodeKey = function encodeKey(k) {
  return encode(k).replace('%24', '$');
};

function buildParam(key, value, traditional) {
  var result = [];
  if (value === null || value === undefined) {
    return result;
  }
  if (Array.isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      if (traditional) {
        result.push(encodeKey(key) + '=' + encode(value[i]));
      } else {
        var arrayKey = key + '[' + (_typeof(value[i]) === 'object' && value[i] !== null ? i : '') + ']';
        result = result.concat(buildParam(arrayKey, value[i]));
      }
    }
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !traditional) {
    for (var propertyName in value) {
      result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
    }
  } else {
    result.push(encodeKey(key) + '=' + encode(value));
  }
  return result;
}

function buildQueryString(params, traditional) {
  var pairs = [];
  var keys = Object.keys(params || {}).sort();
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    pairs = pairs.concat(buildParam(key, params[key], traditional));
  }

  if (pairs.length === 0) {
    return '';
  }

  return pairs.join('&');
}

function processScalarParam(existedParam, value) {
  if (Array.isArray(existedParam)) {
    existedParam.push(value);
    return existedParam;
  }
  if (existedParam !== undefined) {
    return [existedParam, value];
  }

  return value;
}

function parseComplexParam(queryParams, keys, value) {
  var currentParams = queryParams;
  var keysLastIndex = keys.length - 1;
  for (var j = 0; j <= keysLastIndex; j++) {
    var key = keys[j] === '' ? currentParams.length : keys[j];
    if (j < keysLastIndex) {
      var prevValue = !currentParams[key] || _typeof(currentParams[key]) === 'object' ? currentParams[key] : [currentParams[key]];
      currentParams = currentParams[key] = prevValue || (isNaN(keys[j + 1]) ? {} : []);
    } else {
      currentParams = currentParams[key] = value;
    }
  }
}

function parseQueryString(queryString) {
  var queryParams = {};
  if (!queryString || typeof queryString !== 'string') {
    return queryParams;
  }

  var query = queryString;
  if (query.charAt(0) === '?') {
    query = query.substr(1);
  }

  var pairs = query.replace(/\+/g, ' ').split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    var key = decodeURIComponent(pair[0]);
    if (!key) {
      continue;
    }

    var keys = key.split('][');
    var keysLastIndex = keys.length - 1;

    if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
      keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
      keys = keys.shift().split('[').concat(keys);
      keysLastIndex = keys.length - 1;
    } else {
      keysLastIndex = 0;
    }

    if (pair.length >= 2) {
      var value = pair[1] ? decodeURIComponent(pair[1]) : '';
      if (keysLastIndex) {
        parseComplexParam(queryParams, keys, value);
      } else {
        queryParams[key] = processScalarParam(queryParams[key], value);
      }
    } else {
      queryParams[key] = true;
    }
  }
  return queryParams;
}

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__("aurelia-bootstrapper-webpack");
__webpack_require__("aurelia-polyfills");
__webpack_require__(6);
__webpack_require__("aurelia-pal-browser");
__webpack_require__(104);
module.exports = __webpack_require__("bluebird");


/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = exports.TemplateRegistryEntry = exports.TemplateDependency = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aureliaPath = __webpack_require__(39);

var _aureliaMetadata = __webpack_require__(27);



var TemplateDependency = exports.TemplateDependency = function TemplateDependency(src, name) {
  

  this.src = src;
  this.name = name;
};

var TemplateRegistryEntry = exports.TemplateRegistryEntry = function () {
  function TemplateRegistryEntry(address) {
    

    this.templateIsLoaded = false;
    this.factoryIsReady = false;
    this.resources = null;
    this.dependencies = null;

    this.address = address;
    this.onReady = null;
    this._template = null;
    this._factory = null;
  }

  TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
    var finalSrc = typeof src === 'string' ? (0, _aureliaPath.relativeToFile)(src, this.address) : _aureliaMetadata.Origin.get(src).moduleId;

    this.dependencies.push(new TemplateDependency(finalSrc, name));
  };

  _createClass(TemplateRegistryEntry, [{
    key: 'template',
    get: function get() {
      return this._template;
    },
    set: function set(value) {
      var address = this.address;
      var requires = void 0;
      var current = void 0;
      var src = void 0;
      var dependencies = void 0;

      this._template = value;
      this.templateIsLoaded = true;

      requires = value.content.querySelectorAll('require');
      dependencies = this.dependencies = new Array(requires.length);

      for (var i = 0, ii = requires.length; i < ii; ++i) {
        current = requires[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + address + ' has no "from" attribute.');
        }

        dependencies[i] = new TemplateDependency((0, _aureliaPath.relativeToFile)(src, address), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    }
  }, {
    key: 'factory',
    get: function get() {
      return this._factory;
    },
    set: function set(value) {
      this._factory = value;
      this.factoryIsReady = true;
    }
  }]);

  return TemplateRegistryEntry;
}();

var Loader = exports.Loader = function () {
  function Loader() {
    

    this.templateRegistry = {};
  }

  Loader.prototype.map = function map(id, source) {
    throw new Error('Loaders must implement map(id, source).');
  };

  Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
  };

  Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
  };

  Loader.prototype.loadModule = function loadModule(id) {
    throw new Error('Loaders must implement loadModule(id).');
  };

  Loader.prototype.loadAllModules = function loadAllModules(ids) {
    throw new Error('Loader must implement loadAllModules(ids).');
  };

  Loader.prototype.loadTemplate = function loadTemplate(url) {
    throw new Error('Loader must implement loadTemplate(url).');
  };

  Loader.prototype.loadText = function loadText(url) {
    throw new Error('Loader must implement loadText(url).');
  };

  Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
  };

  Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    throw new Error('Loader must implement addPlugin(pluginName, implementation).');
  };

  Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
    return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
  };

  return Loader;
}();

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AggregateError = AggregateError;
exports.initializePAL = initializePAL;
exports.reset = reset;
function AggregateError(message, innerError, skipIfAlreadyAggregate) {
  if (innerError) {
    if (innerError.innerError && skipIfAlreadyAggregate) {
      return innerError;
    }

    var separator = '\n------------------------------------------------\n';

    message += separator + 'Inner Error:\n';

    if (typeof innerError === 'string') {
      message += 'Message: ' + innerError;
    } else {
      if (innerError.message) {
        message += 'Message: ' + innerError.message;
      } else {
        message += 'Unknown Inner Error Type. Displaying Inner Error as JSON:\n ' + JSON.stringify(innerError, null, '  ');
      }

      if (innerError.stack) {
        message += '\nInner Error Stack:\n' + innerError.stack;
        message += '\nEnd Inner Error Stack';
      }
    }

    message += separator;
  }

  var e = new Error(message);
  if (innerError) {
    e.innerError = innerError;
  }

  return e;
}

var FEATURE = exports.FEATURE = {};

var PLATFORM = exports.PLATFORM = {
  noop: function noop() {},
  eachModule: function eachModule() {},
  moduleName: function (_moduleName) {
    function moduleName(_x) {
      return _moduleName.apply(this, arguments);
    }

    moduleName.toString = function () {
      return _moduleName.toString();
    };

    return moduleName;
  }(function (moduleName) {
    return moduleName;
  })
};

PLATFORM.global = function () {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return new Function('return this')();
}();

var DOM = exports.DOM = {};
var isInitialized = exports.isInitialized = false;
function initializePAL(callback) {
  if (isInitialized) {
    return;
  }
  exports.isInitialized = isInitialized = true;
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(PLATFORM, FEATURE, DOM);
}
function reset() {
  exports.isInitialized = isInitialized = false;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },

/***/ "aurelia-bootstrapper-webpack":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;

__webpack_require__("aurelia-polyfills");

var _aureliaPalBrowser = __webpack_require__("aurelia-pal-browser");

var _aureliaLoaderWebpack = __webpack_require__("aurelia-loader-webpack");

(0, _aureliaPalBrowser.initialize)();

var bootstrapQueue = [];
var sharedLoader = null;
var Aurelia = null;

function onBootstrap(callback) {
  return new Promise(function (resolve, reject) {
    if (sharedLoader) {
      resolve(callback(sharedLoader));
    } else {
      bootstrapQueue.push(function () {
        try {
          resolve(callback(sharedLoader));
        } catch (e) {
          reject(e);
        }
      });
    }
  });
}

function ready(global) {
  return new Promise(function (resolve, reject) {
    if (global.document.readyState === 'complete') {
      resolve(global.document);
    } else {
      global.document.addEventListener('DOMContentLoaded', completed);
      global.addEventListener('load', completed);
    }

    function completed() {
      global.document.removeEventListener('DOMContentLoaded', completed);
      global.removeEventListener('load', completed);
      resolve(global.document);
    }
  });
}

function handleApp(loader, appHost) {
  return config(loader, appHost, appHost.getAttribute('aurelia-app'));
}

function config(loader, appHost, configModuleId) {
  var aurelia = new Aurelia(loader);
  aurelia.host = appHost;
  aurelia.configModuleId = configModuleId || null;

  if (configModuleId) {
    return loader.loadModule(configModuleId).then(function (customConfig) {
      return customConfig.configure(aurelia);
    });
  }

  aurelia.use.standardConfiguration().developmentLogging();

  return aurelia.start().then(function () {
    return aurelia.setRoot();
  });
}

function run() {
  return ready(window).then(function (doc) {
    var appHost = doc.querySelectorAll('[aurelia-app]');
    var loader = new _aureliaLoaderWebpack.WebpackLoader();
    loader.loadModule('aurelia-framework').then(function (m) {
      Aurelia = m.Aurelia;
      for (var i = 0, ii = appHost.length; i < ii; ++i) {
        handleApp(loader, appHost[i]).catch(console.error.bind(console));
      }

      sharedLoader = loader;
      for (var _i = 0, _ii = bootstrapQueue.length; _i < _ii; ++_i) {
        bootstrapQueue[_i]();
      }
      bootstrapQueue = null;
    });
  });
}

function bootstrap(configure) {
  return onBootstrap(function (loader) {
    var aurelia = new Aurelia(loader);
    return configure(aurelia);
  });
}

run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ },

/***/ "aurelia-loader-webpack":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebpackLoader = exports.TextTemplateLoader = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.ensureOriginOnExports = ensureOriginOnExports;

var _aureliaMetadata = __webpack_require__(27);

var _aureliaLoader = __webpack_require__(56);

var _aureliaPal = __webpack_require__(6);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TextTemplateLoader = exports.TextTemplateLoader = function () {
  function TextTemplateLoader() {
    
  }

  TextTemplateLoader.prototype.loadTemplate = function loadTemplate(loader, entry) {
    return loader.loadText(entry.address).then(function (text) {
      entry.template = _aureliaPal.DOM.createTemplateFromMarkup(text);
    });
  };

  return TextTemplateLoader;
}();

function ensureOriginOnExports(executed, moduleId) {
  var target = executed;
  var key = void 0;
  var exportedValue = void 0;

  if (target.__useDefault) {
    target = target.default;
  }

  _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(moduleId, 'default'));

  if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(moduleId, key));
      }
    }
  }

  return executed;
}

var WebpackLoader = exports.WebpackLoader = function (_Loader) {
  _inherits(WebpackLoader, _Loader);

  function WebpackLoader() {
    

    var _this = _possibleConstructorReturn(this, _Loader.call(this));

    _this.moduleRegistry = Object.create(null);
    _this.loaderPlugins = Object.create(null);
    _this.useTemplateLoader(new TextTemplateLoader());
    _this.modulesBeingLoaded = Object.create(null);

    var that = _this;

    _this.addPlugin('template-registry-entry', {
      'fetch': function fetch(address) {
        var entry = that.getOrCreateTemplateRegistryEntry(address);
        return entry.templateIsLoaded ? entry : that.templateLoader.loadTemplate(that, entry).then(function (x) {
          return entry;
        });
      }
    });

    _aureliaPal.PLATFORM.eachModule = function (callback) {
      var registry = __webpack_require__.c;

      for (var moduleId in registry) {
        if (typeof moduleId !== 'string') {
          continue;
        }
        var moduleExports = registry[moduleId].exports;
        if ((typeof moduleExports === 'undefined' ? 'undefined' : _typeof(moduleExports)) !== 'object') {
          continue;
        }
        try {
          if (callback(moduleId, moduleExports)) return;
        } catch (e) {}
      }
    };
    return _this;
  }

  WebpackLoader.prototype._getActualResult = function _getActualResult(result, resolve, reject) {
    try {
      var isAsync = typeof result === 'function' && /cb\(__webpack_require__/.test(result.toString());
      if (!isAsync) {
        return resolve(result);
      }

      return result(function (actual) {
        return resolve(actual);
      });
    } catch (e) {
      reject(e);
    }
  };

  WebpackLoader.prototype._import = function _import(moduleId) {
    var _this2 = this;

    if (this.modulesBeingLoaded[moduleId]) {
      return this.modulesBeingLoaded[moduleId];
    }
    var moduleIdParts = moduleId.split('!');
    var path = moduleIdParts.splice(moduleIdParts.length - 1, 1)[0];
    var loaderPlugin = moduleIdParts.length === 1 ? moduleIdParts[0] : null;

    var action = new Promise(function (resolve, reject) {
      if (loaderPlugin) {
        try {
          return resolve(_this2.loaderPlugins[loaderPlugin].fetch(path));
        } catch (e) {
          return reject(e);
        }
      } else {
        try {
          var result = __webpack_require__(path);
          return _this2._getActualResult(result, resolve, reject);
        } catch (_) {
          delete __webpack_require__.c[path];
        }
        __webpack_require__.e/* nsure */(0).then((function (require) {
          var result = __webpack_require__(399)("./" + path);
          return _this2._getActualResult(result, resolve, reject);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      }
    }).then(function (result) {
      _this2.modulesBeingLoaded[moduleId] = undefined;
      return result;
    });
    this.modulesBeingLoaded[moduleId] = action;
    return action;
  };

  WebpackLoader.prototype.map = function map(id, source) {};

  WebpackLoader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    return moduleId;
  };

  WebpackLoader.prototype.normalize = function normalize(moduleId, relativeTo) {
    return Promise.resolve(moduleId);
  };

  WebpackLoader.prototype.useTemplateLoader = function useTemplateLoader(templateLoader) {
    this.templateLoader = templateLoader;
  };

  WebpackLoader.prototype.loadAllModules = function loadAllModules(ids) {
    var loads = [];

    for (var i = 0, ii = ids.length; i < ii; ++i) {
      loads.push(this.loadModule(ids[i]));
    }

    return Promise.all(loads);
  };

  WebpackLoader.prototype.loadModule = function loadModule(id) {
    var _this3 = this;

    var existing = this.moduleRegistry[id];
    if (existing) {
      return Promise.resolve(existing);
    }
    return this._import(id).then(function (m) {
      return _this3.moduleRegistry[id] = ensureOriginOnExports(m, id);
    });
  };

  WebpackLoader.prototype.loadTemplate = function loadTemplate(url) {
    return this._import(this.applyPluginToUrl(url, 'template-registry-entry'));
  };

  WebpackLoader.prototype.loadText = function loadText(url) {
    return this._import(url).then(function (result) {
      if (result instanceof Array && result[0] instanceof Array && result.hasOwnProperty('toString')) {
        return result.toString();
      }

      return result;
    });
  };

  WebpackLoader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    return pluginName + '!' + url;
  };

  WebpackLoader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    this.loaderPlugins[pluginName] = implementation;
  };

  return WebpackLoader;
}(_aureliaLoader.Loader);

_aureliaPal.PLATFORM.Loader = WebpackLoader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ },

/***/ "aurelia-pal-browser":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._DOM = exports._FEATURE = exports._PLATFORM = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.initialize = initialize;

var _aureliaPal = __webpack_require__(6);

var _PLATFORM = exports._PLATFORM = {
  location: window.location,
  history: window.history,
  addEventListener: function addEventListener(eventName, callback, capture) {
    this.global.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    this.global.removeEventListener(eventName, callback, capture);
  },

  performance: window.performance,
  requestAnimationFrame: function requestAnimationFrame(callback) {
    return this.global.requestAnimationFrame(callback);
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var test = function test() {};

  if (test.name === undefined) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

        Object.defineProperty(this, 'name', { value: name });
        return name;
      }
    });
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    var protoProp = 'prototype';
    var strTrim = String.prototype.trim;
    var arrIndexOf = Array.prototype.indexOf;
    var emptyArray = [];

    var DOMEx = function DOMEx(type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message;
    };

    var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
      if (token === '') {
        throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
      }

      if (/\s/.test(token)) {
        throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
      }

      return arrIndexOf.call(classList, token);
    };

    var ClassList = function ClassList(elem) {
      var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
      var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

      for (var i = 0, ii = classes.length; i < ii; ++i) {
        this.push(classes[i]);
      }

      this._updateClassName = function () {
        elem.setAttribute('class', this.toString());
      };
    };

    var classListProto = ClassList[protoProp] = [];

    DOMEx[protoProp] = Error[protoProp];

    classListProto.item = function (i) {
      return this[i] || null;
    };

    classListProto.contains = function (token) {
      token += '';
      return checkTokenAndGetIndex(this, token) !== -1;
    };

    classListProto.add = function () {
      var tokens = arguments;
      var i = 0;
      var ii = tokens.length;
      var token = void 0;
      var updated = false;

      do {
        token = tokens[i] + '';
        if (checkTokenAndGetIndex(this, token) === -1) {
          this.push(token);
          updated = true;
        }
      } while (++i < ii);

      if (updated) {
        this._updateClassName();
      }
    };

    classListProto.remove = function () {
      var tokens = arguments;
      var i = 0;
      var ii = tokens.length;
      var token = void 0;
      var updated = false;
      var index = void 0;

      do {
        token = tokens[i] + '';
        index = checkTokenAndGetIndex(this, token);
        while (index !== -1) {
          this.splice(index, 1);
          updated = true;
          index = checkTokenAndGetIndex(this, token);
        }
      } while (++i < ii);

      if (updated) {
        this._updateClassName();
      }
    };

    classListProto.toggle = function (token, force) {
      token += '';

      var result = this.contains(token);
      var method = result ? force !== true && 'remove' : force !== false && 'add';

      if (method) {
        this[method](token);
      }

      if (force === true || force === false) {
        return force;
      }

      return !result;
    };

    classListProto.toString = function () {
      return this.join(' ');
    };

    Object.defineProperty(Element.prototype, 'classList', {
      get: function get() {
        return new ClassList(this);
      },
      enumerable: true,
      configurable: true
    });
  } else {
    var testElement = document.createElement('_');
    testElement.classList.add('c1', 'c2');

    if (!testElement.classList.contains('c2')) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          for (var i = 0, ii = arguments.length; i < ii; ++i) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle('c3', false);

    if (testElement.classList.contains('c3')) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        }

        return _toggle.call(this, token);
      };
    }

    testElement = null;
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  var _filterEntries = function _filterEntries(key, value) {
    var i = 0,
        n = _entries.length,
        result = [];
    for (; i < n; i++) {
      if (_entries[i][key] == value) {
        result.push(_entries[i]);
      }
    }
    return result;
  };

  var _clearEntries = function _clearEntries(type, name) {
    var i = _entries.length,
        entry;
    while (i--) {
      entry = _entries[i];
      if (entry.entryType == type && (name === void 0 || entry.name == name)) {
        _entries.splice(i, 1);
      }
    }
  };

  // @license http://opensource.org/licenses/MIT
  if ('performance' in window === false) {
    window.performance = {};
  }

  if ('now' in window.performance === false) {
    var nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }

  var startOffset = Date.now ? Date.now() : +new Date();
  var _entries = [];
  var _marksIndex = {};

  ;

  if (!window.performance.mark) {
    window.performance.mark = window.performance.webkitMark || function (name) {
      var mark = {
        name: name,
        entryType: "mark",
        startTime: window.performance.now(),
        duration: 0
      };

      _entries.push(mark);
      _marksIndex[name] = mark;
    };
  }

  if (!window.performance.measure) {
    window.performance.measure = window.performance.webkitMeasure || function (name, startMark, endMark) {
      startMark = _marksIndex[startMark].startTime;
      endMark = _marksIndex[endMark].startTime;

      _entries.push({
        name: name,
        entryType: "measure",
        startTime: startMark,
        duration: endMark - startMark
      });
    };
  }

  if (!window.performance.getEntriesByType) {
    window.performance.getEntriesByType = window.performance.webkitGetEntriesByType || function (type) {
      return _filterEntries("entryType", type);
    };
  }

  if (!window.performance.getEntriesByName) {
    window.performance.getEntriesByName = window.performance.webkitGetEntriesByName || function (name) {
      return _filterEntries("name", name);
    };
  }

  if (!window.performance.clearMarks) {
    window.performance.clearMarks = window.performance.webkitClearMarks || function (name) {
      _clearEntries("mark", name);
    };
  }

  if (!window.performance.clearMeasures) {
    window.performance.clearMeasures = window.performance.webkitClearMeasures || function (name) {
      _clearEntries("measure", name);
    };
  }

  _PLATFORM.performance = window.performance;
}

if (typeof FEATURE_NO_IE === 'undefined') {
  var con = window.console = window.console || {};
  var nop = function nop() {};

  if (!con.memory) con.memory = {};
  ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',').forEach(function (m) {
    if (!con[m]) con[m] = nop;
  });

  if (_typeof(con.log) === 'object') {
    'log,info,warn,error,assert,dir,clear,profile,profileEnd'.split(',').forEach(function (method) {
      console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
    var _CustomEvent = function _CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    _CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = _CustomEvent;
  }
}

if (Element && !Element.prototype.matches) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}

var _FEATURE = exports._FEATURE = {
  shadowDOM: !!HTMLElement.prototype.attachShadow,
  scopedCSS: 'scoped' in document.createElement('style'),
  htmlTemplateElement: function () {
    var d = document.createElement('div');
    d.innerHTML = '<template></template>';
    return 'content' in d.children[0];
  }(),
  mutationObserver: !!(window.MutationObserver || window.WebKitMutationObserver),
  ensureHTMLTemplateElement: function ensureHTMLTemplateElement(t) {
    return t;
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var isSVGTemplate = function isSVGTemplate(el) {
    return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
  };

  var fixSVGTemplateElement = function fixSVGTemplateElement(el) {
    var template = el.ownerDocument.createElement('template');
    var attrs = el.attributes;
    var length = attrs.length;
    var attr = void 0;

    el.parentNode.insertBefore(template, el);

    while (length-- > 0) {
      attr = attrs[length];
      template.setAttribute(attr.name, attr.value);
      el.removeAttribute(attr.name);
    }

    el.parentNode.removeChild(el);

    return fixHTMLTemplateElement(template);
  };

  var fixHTMLTemplateElement = function fixHTMLTemplateElement(template) {
    var content = template.content = document.createDocumentFragment();
    var child = void 0;

    while (child = template.firstChild) {
      content.appendChild(child);
    }

    return template;
  };

  var fixHTMLTemplateElementRoot = function fixHTMLTemplateElementRoot(template) {
    var content = fixHTMLTemplateElement(template).content;
    var childTemplates = content.querySelectorAll('template');

    for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
      var child = childTemplates[i];

      if (isSVGTemplate(child)) {
        fixSVGTemplateElement(child);
      } else {
        fixHTMLTemplateElement(child);
      }
    }

    return template;
  };

  if (!_FEATURE.htmlTemplateElement) {
    _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
  }
}

var shadowPoly = window.ShadowDOMPolyfill || null;

var _DOM = exports._DOM = {
  Element: Element,
  NodeList: NodeList,
  SVGElement: SVGElement,
  boundary: 'aurelia-dom-boundary',
  addEventListener: function addEventListener(eventName, callback, capture) {
    document.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    document.removeEventListener(eventName, callback, capture);
  },
  adoptNode: function adoptNode(node) {
    return document.adoptNode(node);
  },
  createAttribute: function createAttribute(name) {
    return document.createAttribute(name);
  },
  createElement: function createElement(tagName) {
    return document.createElement(tagName);
  },
  createTextNode: function createTextNode(text) {
    return document.createTextNode(text);
  },
  createComment: function createComment(text) {
    return document.createComment(text);
  },
  createDocumentFragment: function createDocumentFragment() {
    return document.createDocumentFragment();
  },
  createTemplateElement: function createTemplateElement() {
    var template = document.createElement('template');
    return _FEATURE.ensureHTMLTemplateElement(template);
  },
  createMutationObserver: function createMutationObserver(callback) {
    return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
  },
  createCustomEvent: function createCustomEvent(eventType, options) {
    return new window.CustomEvent(eventType, options);
  },
  dispatchEvent: function dispatchEvent(evt) {
    document.dispatchEvent(evt);
  },
  getComputedStyle: function getComputedStyle(element) {
    return window.getComputedStyle(element);
  },
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },
  querySelector: function querySelector(query) {
    return document.querySelector(query);
  },
  querySelectorAll: function querySelectorAll(query) {
    return document.querySelectorAll(query);
  },
  nextElementSibling: function nextElementSibling(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }
    do {
      element = element.nextSibling;
    } while (element && element.nodeType !== 1);
    return element;
  },
  createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
    var parser = document.createElement('div');
    parser.innerHTML = markup;

    var temp = parser.firstElementChild;
    if (!temp || temp.nodeName !== 'TEMPLATE') {
      throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
    }

    return _FEATURE.ensureHTMLTemplateElement(temp);
  },
  appendNode: function appendNode(newNode, parentNode) {
    (parentNode || document.body).appendChild(newNode);
  },
  replaceNode: function replaceNode(newNode, node, parentNode) {
    if (node.parentNode) {
      node.parentNode.replaceChild(newNode, node);
    } else if (shadowPoly !== null) {
      shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
    } else {
      parentNode.replaceChild(newNode, node);
    }
  },
  removeNode: function removeNode(node, parentNode) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    } else if (parentNode) {
      if (shadowPoly !== null) {
        shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
      } else {
        parentNode.removeChild(node);
      }
    }
  },
  injectStyles: function injectStyles(styles, destination, prepend, id) {
    if (id) {
      var oldStyle = document.getElementById(id);
      if (oldStyle) {
        var isStyleTag = oldStyle.tagName.toLowerCase() === 'style';

        if (isStyleTag) {
          oldStyle.innerHTML = styles;
          return;
        }

        throw new Error('The provided id does not indicate a style tag.');
      }
    }

    var node = document.createElement('style');
    node.innerHTML = styles;
    node.type = 'text/css';

    if (id) {
      node.id = id;
    }

    destination = destination || document.head;

    if (prepend && destination.childNodes.length > 0) {
      destination.insertBefore(node, destination.childNodes[0]);
    } else {
      destination.appendChild(node);
    }

    return node;
  }
};

function initialize() {
  if (_aureliaPal.isInitialized) {
    return;
  }

  (0, _aureliaPal.initializePAL)(function (platform, feature, dom) {
    Object.assign(platform, _PLATFORM);
    Object.assign(feature, _FEATURE);
    Object.assign(dom, _DOM);

    Object.defineProperty(dom, 'title', {
      get: function get() {
        return document.title;
      },
      set: function set(value) {
        document.title = value;
      }
    });

    Object.defineProperty(dom, 'activeElement', {
      get: function get() {
        return document.activeElement;
      }
    });

    Object.defineProperty(platform, 'XMLHttpRequest', {
      get: function get() {
        return platform.global.XMLHttpRequest;
      }
    });
  });
}

/***/ },

/***/ "aurelia-polyfills":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _aureliaPal = __webpack_require__(6);

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  (function (Object, GOPS) {
    'use strict';

    if (GOPS in Object) return;

    var setDescriptor,
        G = _aureliaPal.PLATFORM.global,
        id = 0,
        random = '' + Math.random(),
        prefix = '__\x01symbol:',
        prefixLength = prefix.length,
        internalSymbol = '__\x01symbol@@' + random,
        DP = 'defineProperty',
        DPies = 'defineProperties',
        GOPN = 'getOwnPropertyNames',
        GOPD = 'getOwnPropertyDescriptor',
        PIE = 'propertyIsEnumerable',
        gOPN = Object[GOPN],
        gOPD = Object[GOPD],
        create = Object.create,
        keys = Object.keys,
        defineProperty = Object[DP],
        $defineProperties = Object[DPies],
        descriptor = gOPD(Object, GOPN),
        ObjectProto = Object.prototype,
        hOP = ObjectProto.hasOwnProperty,
        pIE = ObjectProto[PIE],
        toString = ObjectProto.toString,
        indexOf = Array.prototype.indexOf || function (v) {
      for (var i = this.length; i-- && this[i] !== v;) {}
      return i;
    },
        addInternalIfNeeded = function addInternalIfNeeded(o, uid, enumerable) {
      if (!hOP.call(o, internalSymbol)) {
        defineProperty(o, internalSymbol, {
          enumerable: false,
          configurable: false,
          writable: false,
          value: {}
        });
      }
      o[internalSymbol]['@@' + uid] = enumerable;
    },
        createWithSymbols = function createWithSymbols(proto, descriptors) {
      var self = create(proto);
      if (descriptors !== null && (typeof descriptors === 'undefined' ? 'undefined' : _typeof(descriptors)) === 'object') {
        gOPN(descriptors).forEach(function (key) {
          if (propertyIsEnumerable.call(descriptors, key)) {
            $defineProperty(self, key, descriptors[key]);
          }
        });
      }
      return self;
    },
        copyAsNonEnumerable = function copyAsNonEnumerable(descriptor) {
      var newDescriptor = create(descriptor);
      newDescriptor.enumerable = false;
      return newDescriptor;
    },
        get = function get() {},
        onlyNonSymbols = function onlyNonSymbols(name) {
      return name != internalSymbol && !hOP.call(source, name);
    },
        onlySymbols = function onlySymbols(name) {
      return name != internalSymbol && hOP.call(source, name);
    },
        propertyIsEnumerable = function propertyIsEnumerable(key) {
      var uid = '' + key;
      return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol] && this[internalSymbol]['@@' + uid] : pIE.call(this, key);
    },
        setAndGetSymbol = function setAndGetSymbol(uid) {
      var descriptor = {
        enumerable: false,
        configurable: true,
        get: get,
        set: function set(value) {
          setDescriptor(this, uid, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
          });
          addInternalIfNeeded(this, uid, true);
        }
      };
      defineProperty(ObjectProto, uid, descriptor);
      return source[uid] = defineProperty(Object(uid), 'constructor', sourceConstructor);
    },
        _Symbol = function _Symbol2(description) {
      if (this && this !== G) {
        throw new TypeError('Symbol is not a constructor');
      }
      return setAndGetSymbol(prefix.concat(description || '', random, ++id));
    },
        source = create(null),
        sourceConstructor = { value: _Symbol },
        sourceMap = function sourceMap(uid) {
      return source[uid];
    },
        $defineProperty = function defineProp(o, key, descriptor) {
      var uid = '' + key;
      if (onlySymbols(uid)) {
        setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor);
        addInternalIfNeeded(o, uid, !!descriptor.enumerable);
      } else {
        defineProperty(o, key, descriptor);
      }
      return o;
    },
        $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
      var cof = toString.call(o);
      o = cof === '[object String]' ? o.split('') : Object(o);
      return gOPN(o).filter(onlySymbols).map(sourceMap);
    };

    descriptor.value = $defineProperty;
    defineProperty(Object, DP, descriptor);

    descriptor.value = $getOwnPropertySymbols;
    defineProperty(Object, GOPS, descriptor);

    var cachedWindowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? Object.getOwnPropertyNames(window) : [];
    var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
    descriptor.value = function getOwnPropertyNames(o) {
      if (toString.call(o) === '[object Window]') {
        try {
          return originalObjectGetOwnPropertyNames(o);
        } catch (e) {
          return [].concat([], cachedWindowNames);
        }
      }
      return gOPN(o).filter(onlyNonSymbols);
    };
    defineProperty(Object, GOPN, descriptor);

    descriptor.value = function defineProperties(o, descriptors) {
      var symbols = $getOwnPropertySymbols(descriptors);
      if (symbols.length) {
        keys(descriptors).concat(symbols).forEach(function (uid) {
          if (propertyIsEnumerable.call(descriptors, uid)) {
            $defineProperty(o, uid, descriptors[uid]);
          }
        });
      } else {
        $defineProperties(o, descriptors);
      }
      return o;
    };
    defineProperty(Object, DPies, descriptor);

    descriptor.value = propertyIsEnumerable;
    defineProperty(ObjectProto, PIE, descriptor);

    descriptor.value = _Symbol;
    defineProperty(G, 'Symbol', descriptor);

    descriptor.value = function (key) {
      var uid = prefix.concat(prefix, key, random);
      return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
    };
    defineProperty(_Symbol, 'for', descriptor);

    descriptor.value = function (symbol) {
      return hOP.call(source, symbol) ? symbol.slice(prefixLength * 2, -random.length) : void 0;
    };
    defineProperty(_Symbol, 'keyFor', descriptor);

    descriptor.value = function getOwnPropertyDescriptor(o, key) {
      var descriptor = gOPD(o, key);
      if (descriptor && onlySymbols(key)) {
        descriptor.enumerable = propertyIsEnumerable.call(o, key);
      }
      return descriptor;
    };
    defineProperty(Object, GOPD, descriptor);

    descriptor.value = function (proto, descriptors) {
      return arguments.length === 1 ? create(proto) : createWithSymbols(proto, descriptors);
    };
    defineProperty(Object, 'create', descriptor);

    descriptor.value = function () {
      var str = toString.call(this);
      return str === '[object String]' && onlySymbols(this) ? '[object Symbol]' : str;
    };
    defineProperty(ObjectProto, 'toString', descriptor);

    try {
      setDescriptor = create(defineProperty({}, prefix, {
        get: function get() {
          return defineProperty(this, prefix, { value: false })[prefix];
        }
      }))[prefix] || defineProperty;
    } catch (o_O) {
      setDescriptor = function setDescriptor(o, key, descriptor) {
        var protoDescriptor = gOPD(ObjectProto, key);
        delete ObjectProto[key];
        defineProperty(o, key, descriptor);
        defineProperty(ObjectProto, key, protoDescriptor);
      };
    }
  })(Object, 'getOwnPropertySymbols');

  (function (O, S) {
    var dP = O.defineProperty,
        ObjectProto = O.prototype,
        toString = ObjectProto.toString,
        toStringTag = 'toStringTag',
        descriptor;
    ['iterator', 'match', 'replace', 'search', 'split', 'hasInstance', 'isConcatSpreadable', 'unscopables', 'species', 'toPrimitive', toStringTag].forEach(function (name) {
      if (!(name in Symbol)) {
        dP(Symbol, name, { value: Symbol(name) });
        switch (name) {
          case toStringTag:
            descriptor = O.getOwnPropertyDescriptor(ObjectProto, 'toString');
            descriptor.value = function () {
              var str = toString.call(this),
                  tst = typeof this === 'undefined' || this === null ? undefined : this[Symbol.toStringTag];
              return typeof tst === 'undefined' ? str : '[object ' + tst + ']';
            };
            dP(ObjectProto, 'toString', descriptor);
            break;
        }
      }
    });
  })(Object, Symbol);

  (function (Si, AP, SP) {

    function returnThis() {
      return this;
    }

    if (!AP[Si]) AP[Si] = function () {
      var i = 0,
          self = this,
          iterator = {
        next: function next() {
          var done = self.length <= i;
          return done ? { done: done } : { done: done, value: self[i++] };
        }
      };
      iterator[Si] = returnThis;
      return iterator;
    };

    if (!SP[Si]) SP[Si] = function () {
      var fromCodePoint = String.fromCodePoint,
          self = this,
          i = 0,
          length = self.length,
          iterator = {
        next: function next() {
          var done = length <= i,
              c = done ? '' : fromCodePoint(self.codePointAt(i));
          i += c.length;
          return done ? { done: done } : { done: done, value: c };
        }
      };
      iterator[Si] = returnThis;
      return iterator;
    };
  })(Symbol.iterator, Array.prototype, String.prototype);
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  Number.isNaN = Number.isNaN || function (value) {
    return value !== value;
  };

  Number.isFinite = Number.isFinite || function (value) {
    return typeof value === "number" && isFinite(value);
  };
}

if (!String.prototype.endsWith || function () {
  try {
    return !"ab".endsWith("a", 1);
  } catch (e) {
    return true;
  }
}()) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!String.prototype.startsWith || function () {
  try {
    return !"ab".startsWith("b", 1);
  } catch (e) {
    return true;
  }
}()) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  if (!Array.from) {
    Array.from = function () {
      var toInteger = function toInteger(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? Math.floor : Math.ceil)(it);
      };
      var toLength = function toLength(it) {
        return it > 0 ? Math.min(toInteger(it), 0x1fffffffffffff) : 0;
      };
      var iterCall = function iterCall(iter, fn, val, index) {
        try {
          return fn(val, index);
        } catch (E) {
          if (typeof iter.return == 'function') iter.return();
          throw E;
        }
      };

      return function from(arrayLike) {
        var O = Object(arrayLike),
            C = typeof this == 'function' ? this : Array,
            aLen = arguments.length,
            mapfn = aLen > 1 ? arguments[1] : undefined,
            mapping = mapfn !== undefined,
            index = 0,
            iterFn = O[Symbol.iterator],
            length,
            result,
            step,
            iterator;
        if (mapping) mapfn = mapfn.bind(aLen > 2 ? arguments[2] : undefined);
        if (iterFn != undefined && !Array.isArray(arrayLike)) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            result[index] = mapping ? iterCall(iterator, mapfn, step.value, index) : step.value;
          }
        } else {
          length = toLength(O.length);
          for (result = new C(length); length > index; index++) {
            result[index] = mapping ? mapfn(O[index], index) : O[index];
          }
        }
        result.length = index;
        return result;
      };
    }();
  }

  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(predicate) {
        if (this === null) {
          throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
        return undefined;
      }
    });
  }

  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(predicate) {
        if (this === null) {
          throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return i;
          }
        }
        return -1;
      }
    });
  }
}

if (typeof FEATURE_NO_ES2016 === 'undefined' && !Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    configurable: true,
    writable: true,
    enumerable: false,
    value: function value(searchElement) {
      var O = Object(this);
      var len = parseInt(O.length) || 0;
      if (len === 0) {
        return false;
      }
      var n = parseInt(arguments[1]) || 0;
      var k;
      if (n >= 0) {
        k = n;
      } else {
        k = len + n;
        if (k < 0) {
          k = 0;
        }
      }
      var currentElement;
      while (k < len) {
        currentElement = O[k];
        if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  (function () {
    var needsFix = false;

    try {
      var s = Object.keys('a');
      needsFix = s.length !== 1 || s[0] !== '0';
    } catch (e) {
      needsFix = true;
    }

    if (needsFix) {
      Object.keys = function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
            dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
            dontEnumsLength = dontEnums.length;

        return function (obj) {
          if (obj === undefined || obj === null) {
            throw TypeError('Cannot convert undefined or null to object');
          }

          obj = Object(obj);

          var result = [],
              prop,
              i;

          for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
              result.push(prop);
            }
          }

          if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
              if (hasOwnProperty.call(obj, dontEnums[i])) {
                result.push(dontEnums[i]);
              }
            }
          }

          return result;
        };
      }();
    }
  })();

  (function (O) {
    if ('assign' in O) {
      return;
    }

    O.defineProperty(O, 'assign', {
      configurable: true,
      writable: true,
      value: function () {
        var gOPS = O.getOwnPropertySymbols,
            pIE = O.propertyIsEnumerable,
            filterOS = gOPS ? function (self) {
          return gOPS(self).filter(pIE, self);
        } : function () {
          return Array.prototype;
        };

        return function assign(where) {
          if (gOPS && !(where instanceof O)) {
            console.warn('problematic Symbols', where);
          }

          function set(keyOrSymbol) {
            where[keyOrSymbol] = arg[keyOrSymbol];
          }

          for (var i = 1, ii = arguments.length; i < ii; ++i) {
            var arg = arguments[i];

            if (arg === null || arg === undefined) {
              continue;
            }

            O.keys(arg).concat(filterOS(arg)).forEach(set);
          }

          return where;
        };
      }()
    });
  })(Object);

  if (!Object.is) {
    Object.is = function (x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    };
  }
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  (function (global) {
    var i;

    var defineProperty = Object.defineProperty,
        is = function is(a, b) {
      return a === b || a !== a && b !== b;
    };

    if (typeof WeakMap == 'undefined') {
      global.WeakMap = createCollection({
        'delete': sharedDelete,

        clear: sharedClear,

        get: sharedGet,

        has: mapHas,

        set: sharedSet
      }, true);
    }

    if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
      var _createCollection;

      global.Map = createCollection((_createCollection = {
        'delete': sharedDelete,

        has: mapHas,

        get: sharedGet,

        set: sharedSet,

        keys: sharedKeys,

        values: sharedValues,

        entries: mapEntries,

        forEach: sharedForEach,

        clear: sharedClear
      }, _createCollection[Symbol.iterator] = mapEntries, _createCollection));
    }

    if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
      var _createCollection2;

      global.Set = createCollection((_createCollection2 = {
        has: setHas,

        add: sharedAdd,

        'delete': sharedDelete,

        clear: sharedClear,

        keys: sharedValues,
        values: sharedValues,

        entries: setEntries,

        forEach: sharedForEach
      }, _createCollection2[Symbol.iterator] = sharedValues, _createCollection2));
    }

    if (typeof WeakSet == 'undefined') {
      global.WeakSet = createCollection({
        'delete': sharedDelete,

        add: sharedAdd,

        clear: sharedClear,

        has: setHas
      }, true);
    }

    function createCollection(proto, objectOnly) {
      function Collection(a) {
        if (!this || this.constructor !== Collection) return new Collection(a);
        this._keys = [];
        this._values = [];
        this._itp = [];
        this.objectOnly = objectOnly;

        if (a) init.call(this, a);
      }

      if (!objectOnly) {
        defineProperty(proto, 'size', {
          get: sharedSize
        });
      }

      proto.constructor = Collection;
      Collection.prototype = proto;

      return Collection;
    }

    function init(a) {
      var i;

      if (this.add) a.forEach(this.add, this);else a.forEach(function (a) {
          this.set(a[0], a[1]);
        }, this);
    }

    function sharedDelete(key) {
      if (this.has(key)) {
        this._keys.splice(i, 1);
        this._values.splice(i, 1);

        this._itp.forEach(function (p) {
          if (i < p[0]) p[0]--;
        });
      }

      return -1 < i;
    };

    function sharedGet(key) {
      return this.has(key) ? this._values[i] : undefined;
    }

    function has(list, key) {
      if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");

      if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);) {} else i = list.indexOf(key);
      return -1 < i;
    }

    function setHas(value) {
      return has.call(this, this._values, value);
    }

    function mapHas(value) {
      return has.call(this, this._keys, value);
    }

    function sharedSet(key, value) {
      this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value;
      return this;
    }

    function sharedAdd(value) {
      if (!this.has(value)) this._values.push(value);
      return this;
    }

    function sharedClear() {
      (this._keys || 0).length = this._values.length = 0;
    }

    function sharedKeys() {
      return sharedIterator(this._itp, this._keys);
    }

    function sharedValues() {
      return sharedIterator(this._itp, this._values);
    }

    function mapEntries() {
      return sharedIterator(this._itp, this._keys, this._values);
    }

    function setEntries() {
      return sharedIterator(this._itp, this._values, this._values);
    }

    function sharedIterator(itp, array, array2) {
      var _ref;

      var p = [0],
          done = false;
      itp.push(p);
      return _ref = {}, _ref[Symbol.iterator] = function () {
        return this;
      }, _ref.next = function next() {
        var v,
            k = p[0];
        if (!done && k < array.length) {
          v = array2 ? [array[k], array2[k]] : array[k];
          p[0]++;
        } else {
          done = true;
          itp.splice(itp.indexOf(p), 1);
        }
        return { done: done, value: v };
      }, _ref;
    }

    function sharedSize() {
      return this._values.length;
    }

    function sharedForEach(callback, context) {
      var it = this.entries();
      for (;;) {
        var r = it.next();
        if (r.done) break;
        callback.call(context, r.value[1], r.value[0], this);
      }
    }
  })(_aureliaPal.PLATFORM.global);
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {
  (function () {

    var bind = Function.prototype.bind;

    if (typeof _aureliaPal.PLATFORM.global.Reflect === 'undefined') {
      _aureliaPal.PLATFORM.global.Reflect = {};
    }

    if (typeof Reflect.defineProperty !== 'function') {
      Reflect.defineProperty = function (target, propertyKey, descriptor) {
        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' ? target === null : typeof target !== 'function') {
          throw new TypeError('Reflect.defineProperty called on non-object');
        }
        try {
          Object.defineProperty(target, propertyKey, descriptor);
          return true;
        } catch (e) {
          return false;
        }
      };
    }

    if (typeof Reflect.construct !== 'function') {
      Reflect.construct = function (Target, args) {
        if (args) {
          switch (args.length) {
            case 0:
              return new Target();
            case 1:
              return new Target(args[0]);
            case 2:
              return new Target(args[0], args[1]);
            case 3:
              return new Target(args[0], args[1], args[2]);
            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          }
        }

        var a = [null];
        a.push.apply(a, args);
        return new (bind.apply(Target, a))();
      };
    }

    if (typeof Reflect.ownKeys !== 'function') {
      Reflect.ownKeys = function (o) {
        return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
      };
    }
  })();
}

if (typeof FEATURE_NO_ESNEXT === 'undefined') {
  (function () {

    var emptyMetadata = Object.freeze({});
    var metadataContainerKey = '__metadata__';

    if (typeof Reflect.getOwnMetadata !== 'function') {
      Reflect.getOwnMetadata = function (metadataKey, target, targetKey) {
        if (target.hasOwnProperty(metadataContainerKey)) {
          return (target[metadataContainerKey][targetKey] || emptyMetadata)[metadataKey];
        }
      };
    }

    if (typeof Reflect.defineMetadata !== 'function') {
      Reflect.defineMetadata = function (metadataKey, metadataValue, target, targetKey) {
        var metadataContainer = target.hasOwnProperty(metadataContainerKey) ? target[metadataContainerKey] : target[metadataContainerKey] = {};
        var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
        targetContainer[metadataKey] = metadataValue;
      };
    }

    if (typeof Reflect.metadata !== 'function') {
      Reflect.metadata = function (metadataKey, metadataValue) {
        return function (target, targetKey) {
          Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
        };
      };
    }
  })();
}

/***/ },

/***/ "bluebird":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Promise"] = __webpack_require__(161);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVyZWxpYS1ib290c3RyYXAuYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDE2MGY5YTI5OGVkZGU5ZjFlMmU1Iiwid2VicGFjazovLy8uL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ibHVlYmlyZC9qcy9icm93c2VyL2JsdWViaXJkLmpzIiwid2VicGFjazovLy8uL34vYXVyZWxpYS1tZXRhZGF0YS9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1cmVsaWEtcGF0aC9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1cmVsaWEtbG9hZGVyL2Rpc3QvY29tbW9uanMvYXVyZWxpYS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdXJlbGlhLXBhbC9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtcGFsLmpzIiwid2VicGFjazovLy8uL34vYXVyZWxpYS1ib290c3RyYXBwZXItd2VicGFjay9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtYm9vdHN0cmFwcGVyLXdlYnBhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdXJlbGlhLWxvYWRlci13ZWJwYWNrL2Rpc3QvY29tbW9uanMvYXVyZWxpYS1sb2FkZXItd2VicGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1cmVsaWEtcGFsLWJyb3dzZXIvZGlzdC9jb21tb25qcy9hdXJlbGlhLXBhbC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vYXVyZWxpYS1wb2x5ZmlsbHMvZGlzdC9jb21tb25qcy9hdXJlbGlhLXBvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JsdWViaXJkL2pzL2Jyb3dzZXIvYmx1ZWJpcmQuanMtZXhwb3NlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpXG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHRpZihleGVjdXRlTW9kdWxlcykge1xuIFx0XHRcdGZvcihpPTA7IGkgPCBleGVjdXRlTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBleGVjdXRlTW9kdWxlc1tpXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4gXHRcdCAgICAgICAgaWYgKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQgICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0ICAgICAgICAgIGk6IG1vZHVsZUlkLFxuIFx0XHQgICAgICAgICAgbDogZmFsc2UsXG4gXHRcdCAgICAgICAgICBleHBvcnRzOiB7fVxuIFx0XHQgICAgICAgIH07XG5cbiBcdFx0ICAgICAgICBpZiAoIW1vZHVsZXNbbW9kdWxlSWRdICYmIHR5cGVvZiBtb2R1bGVJZCA9PT0gJ3N0cmluZycpIHtcbiBcdFx0ICAgICAgICAgIHZhciBuZXdNb2R1bGVJZDtcbiBcdFx0ICAgICAgICAgIGlmIChtb2R1bGVzW25ld01vZHVsZUlkID0gbW9kdWxlSWQgKyAnLmpzJ10gfHwgbW9kdWxlc1tuZXdNb2R1bGVJZCA9IG1vZHVsZUlkICsgJy50cyddKSB7XG4gXHRcdCAgICAgICAgICAgIG1vZHVsZUlkID0gbmV3TW9kdWxlSWQ7XG5cbiBcdFx0ICAgICAgICAgICAgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSBtb2R1bGU7XG4gXHRcdCAgICAgICAgICB9XG4gXHRcdCAgICAgICAgfVxuXG4gXHRcdCAgICAgICAgbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0ICAgICAgICBtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0ICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiBcdFx0Ly8gYW4gUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMl07XG4gXHRcdH1cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5jaHVuay5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykgY2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzJdID0gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQwMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTYwZjlhMjk4ZWRkZTlmMWUyZTUiLCJ2YXIgbmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzL2Jyb3dzZXIuanMnKS5uZXh0VGljaztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpbW1lZGlhdGVJZHMgPSB7fTtcbnZhciBuZXh0SW1tZWRpYXRlSWQgPSAwO1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkgeyB0aW1lb3V0LmNsb3NlKCk7IH07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gVGhhdCdzIG5vdCBob3cgbm9kZS5qcyBpbXBsZW1lbnRzIGl0IGJ1dCB0aGUgZXhwb3NlZCBhcGkgaXMgdGhlIHNhbWUuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IGZ1bmN0aW9uKGZuKSB7XG4gIHZhciBpZCA9IG5leHRJbW1lZGlhdGVJZCsrO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZmFsc2UgOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgaW1tZWRpYXRlSWRzW2lkXSA9IHRydWU7XG5cbiAgbmV4dFRpY2soZnVuY3Rpb24gb25OZXh0VGljaygpIHtcbiAgICBpZiAoaW1tZWRpYXRlSWRzW2lkXSkge1xuICAgICAgLy8gZm4uY2FsbCgpIGlzIGZhc3RlciBzbyB3ZSBvcHRpbWl6ZSBmb3IgdGhlIGNvbW1vbiB1c2UtY2FzZVxuICAgICAgLy8gQHNlZSBodHRwOi8vanNwZXJmLmNvbS9jYWxsLWFwcGx5LXNlZ3VcbiAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbChudWxsKTtcbiAgICAgIH1cbiAgICAgIC8vIFByZXZlbnQgaWRzIGZyb20gbGVha2luZ1xuICAgICAgZXhwb3J0cy5jbGVhckltbWVkaWF0ZShpZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaWQ7XG59O1xuXG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gdHlwZW9mIGNsZWFySW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBjbGVhckltbWVkaWF0ZSA6IGZ1bmN0aW9uKGlkKSB7XG4gIGRlbGV0ZSBpbW1lZGlhdGVJZHNbaWRdO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGdsb2JhbC5wcm9jZXNzID09PSBcIm9iamVjdFwiICYmIGdsb2JhbC5wcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gZ2xvYmFsLnByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKiBAcHJlc2VydmVcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNyBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuLyoqXG4gKiBibHVlYmlyZCBidWlsZCB2ZXJzaW9uIDMuNS4xXG4gKiBGZWF0dXJlcyBlbmFibGVkOiBjb3JlLCByYWNlLCBjYWxsX2dldCwgZ2VuZXJhdG9ycywgbWFwLCBub2RlaWZ5LCBwcm9taXNpZnksIHByb3BzLCByZWR1Y2UsIHNldHRsZSwgc29tZSwgdXNpbmcsIHRpbWVycywgZmlsdGVyLCBhbnksIGVhY2hcbiovXG4hZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxlKTtlbHNle3ZhciBmO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/Zj13aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9mPWdsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmKGY9c2VsZiksZi5Qcm9taXNlPWUoKX19KGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiBfZGVyZXFfPT1cImZ1bmN0aW9uXCImJl9kZXJlcV87aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIF9kZXJlcV89PVwiZnVuY3Rpb25cIiYmX2RlcmVxXztmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciBTb21lUHJvbWlzZUFycmF5ID0gUHJvbWlzZS5fU29tZVByb21pc2VBcnJheTtcbmZ1bmN0aW9uIGFueShwcm9taXNlcykge1xuICAgIHZhciByZXQgPSBuZXcgU29tZVByb21pc2VBcnJheShwcm9taXNlcyk7XG4gICAgdmFyIHByb21pc2UgPSByZXQucHJvbWlzZSgpO1xuICAgIHJldC5zZXRIb3dNYW55KDEpO1xuICAgIHJldC5zZXRVbndyYXAoKTtcbiAgICByZXQuaW5pdCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5Qcm9taXNlLmFueSA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgIHJldHVybiBhbnkocHJvbWlzZXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhbnkodGhpcyk7XG59O1xuXG59O1xuXG59LHt9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIGZpcnN0TGluZUVycm9yO1xudHJ5IHt0aHJvdyBuZXcgRXJyb3IoKTsgfSBjYXRjaCAoZSkge2ZpcnN0TGluZUVycm9yID0gZTt9XG52YXIgc2NoZWR1bGUgPSBfZGVyZXFfKFwiLi9zY2hlZHVsZVwiKTtcbnZhciBRdWV1ZSA9IF9kZXJlcV8oXCIuL3F1ZXVlXCIpO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBBc3luYygpIHtcbiAgICB0aGlzLl9jdXN0b21TY2hlZHVsZXIgPSBmYWxzZTtcbiAgICB0aGlzLl9pc1RpY2tVc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fbGF0ZVF1ZXVlID0gbmV3IFF1ZXVlKDE2KTtcbiAgICB0aGlzLl9ub3JtYWxRdWV1ZSA9IG5ldyBRdWV1ZSgxNik7XG4gICAgdGhpcy5faGF2ZURyYWluZWRRdWV1ZXMgPSBmYWxzZTtcbiAgICB0aGlzLl90cmFtcG9saW5lRW5hYmxlZCA9IHRydWU7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZHJhaW5RdWV1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX2RyYWluUXVldWVzKCk7XG4gICAgfTtcbiAgICB0aGlzLl9zY2hlZHVsZSA9IHNjaGVkdWxlO1xufVxuXG5Bc3luYy5wcm90b3R5cGUuc2V0U2NoZWR1bGVyID0gZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgcHJldiA9IHRoaXMuX3NjaGVkdWxlO1xuICAgIHRoaXMuX3NjaGVkdWxlID0gZm47XG4gICAgdGhpcy5fY3VzdG9tU2NoZWR1bGVyID0gdHJ1ZTtcbiAgICByZXR1cm4gcHJldjtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5oYXNDdXN0b21TY2hlZHVsZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tU2NoZWR1bGVyO1xufTtcblxuQXN5bmMucHJvdG90eXBlLmVuYWJsZVRyYW1wb2xpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90cmFtcG9saW5lRW5hYmxlZCA9IHRydWU7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuZGlzYWJsZVRyYW1wb2xpbmVJZk5lY2Vzc2FyeSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh1dGlsLmhhc0RldlRvb2xzKSB7XG4gICAgICAgIHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkID0gZmFsc2U7XG4gICAgfVxufTtcblxuQXN5bmMucHJvdG90eXBlLmhhdmVJdGVtc1F1ZXVlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNUaWNrVXNlZCB8fCB0aGlzLl9oYXZlRHJhaW5lZFF1ZXVlcztcbn07XG5cblxuQXN5bmMucHJvdG90eXBlLmZhdGFsRXJyb3IgPSBmdW5jdGlvbihlLCBpc05vZGUpIHtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKFwiRmF0YWwgXCIgKyAoZSBpbnN0YW5jZW9mIEVycm9yID8gZS5zdGFjayA6IGUpICtcbiAgICAgICAgICAgIFwiXFxuXCIpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aHJvd0xhdGVyKGUpO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS50aHJvd0xhdGVyID0gZnVuY3Rpb24oZm4sIGFyZykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGFyZyA9IGZuO1xuICAgICAgICBmbiA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgYXJnOyB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuKGFyZyk7XG4gICAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB0cnkge1xuICAgICAgICB0aGlzLl9zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZuKGFyZyk7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYXN5bmMgc2NoZWR1bGVyIGF2YWlsYWJsZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gQXN5bmNJbnZva2VMYXRlcihmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHRoaXMuX2xhdGVRdWV1ZS5wdXNoKGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbn1cblxuZnVuY3Rpb24gQXN5bmNJbnZva2UoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB0aGlzLl9ub3JtYWxRdWV1ZS5wdXNoKGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbn1cblxuZnVuY3Rpb24gQXN5bmNTZXR0bGVQcm9taXNlcyhwcm9taXNlKSB7XG4gICAgdGhpcy5fbm9ybWFsUXVldWUuX3B1c2hPbmUocHJvbWlzZSk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59XG5cbmlmICghdXRpbC5oYXNEZXZUb29scykge1xuICAgIEFzeW5jLnByb3RvdHlwZS5pbnZva2VMYXRlciA9IEFzeW5jSW52b2tlTGF0ZXI7XG4gICAgQXN5bmMucHJvdG90eXBlLmludm9rZSA9IEFzeW5jSW52b2tlO1xuICAgIEFzeW5jLnByb3RvdHlwZS5zZXR0bGVQcm9taXNlcyA9IEFzeW5jU2V0dGxlUHJvbWlzZXM7XG59IGVsc2Uge1xuICAgIEFzeW5jLnByb3RvdHlwZS5pbnZva2VMYXRlciA9IGZ1bmN0aW9uIChmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgICAgICBpZiAodGhpcy5fdHJhbXBvbGluZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIEFzeW5jSW52b2tlTGF0ZXIuY2FsbCh0aGlzLCBmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmbi5jYWxsKHJlY2VpdmVyLCBhcmcpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBc3luYy5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFtcG9saW5lRW5hYmxlZCkge1xuICAgICAgICAgICAgQXN5bmNJbnZva2UuY2FsbCh0aGlzLCBmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmbi5jYWxsKHJlY2VpdmVyLCBhcmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQXN5bmMucHJvdG90eXBlLnNldHRsZVByb21pc2VzID0gZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICBpZiAodGhpcy5fdHJhbXBvbGluZUVuYWJsZWQpIHtcbiAgICAgICAgICAgIEFzeW5jU2V0dGxlUHJvbWlzZXMuY2FsbCh0aGlzLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX3NldHRsZVByb21pc2VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbkFzeW5jLnByb3RvdHlwZS5fZHJhaW5RdWV1ZSA9IGZ1bmN0aW9uKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCgpID4gMCkge1xuICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGZuLl9zZXR0bGVQcm9taXNlcygpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlY2VpdmVyID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgdmFyIGFyZyA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgfVxufTtcblxuQXN5bmMucHJvdG90eXBlLl9kcmFpblF1ZXVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9kcmFpblF1ZXVlKHRoaXMuX25vcm1hbFF1ZXVlKTtcbiAgICB0aGlzLl9yZXNldCgpO1xuICAgIHRoaXMuX2hhdmVEcmFpbmVkUXVldWVzID0gdHJ1ZTtcbiAgICB0aGlzLl9kcmFpblF1ZXVlKHRoaXMuX2xhdGVRdWV1ZSk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX3F1ZXVlVGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX2lzVGlja1VzZWQpIHtcbiAgICAgICAgdGhpcy5faXNUaWNrVXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlKHRoaXMuZHJhaW5RdWV1ZXMpO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faXNUaWNrVXNlZCA9IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3luYztcbm1vZHVsZS5leHBvcnRzLmZpcnN0TGluZUVycm9yID0gZmlyc3RMaW5lRXJyb3I7XG5cbn0se1wiLi9xdWV1ZVwiOjI2LFwiLi9zY2hlZHVsZVwiOjI5LFwiLi91dGlsXCI6MzZ9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgZGVidWcpIHtcbnZhciBjYWxsZWRCaW5kID0gZmFsc2U7XG52YXIgcmVqZWN0VGhpcyA9IGZ1bmN0aW9uKF8sIGUpIHtcbiAgICB0aGlzLl9yZWplY3QoZSk7XG59O1xuXG52YXIgdGFyZ2V0UmVqZWN0ZWQgPSBmdW5jdGlvbihlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dC5wcm9taXNlUmVqZWN0aW9uUXVldWVkID0gdHJ1ZTtcbiAgICBjb250ZXh0LmJpbmRpbmdQcm9taXNlLl90aGVuKHJlamVjdFRoaXMsIHJlamVjdFRoaXMsIG51bGwsIHRoaXMsIGUpO1xufTtcblxudmFyIGJpbmRpbmdSZXNvbHZlZCA9IGZ1bmN0aW9uKHRoaXNBcmcsIGNvbnRleHQpIHtcbiAgICBpZiAoKCh0aGlzLl9iaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMCkpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUNhbGxiYWNrKGNvbnRleHQudGFyZ2V0KTtcbiAgICB9XG59O1xuXG52YXIgYmluZGluZ1JlamVjdGVkID0gZnVuY3Rpb24oZSwgY29udGV4dCkge1xuICAgIGlmICghY29udGV4dC5wcm9taXNlUmVqZWN0aW9uUXVldWVkKSB0aGlzLl9yZWplY3QoZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKHRoaXNBcmcpIHtcbiAgICBpZiAoIWNhbGxlZEJpbmQpIHtcbiAgICAgICAgY2FsbGVkQmluZCA9IHRydWU7XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9wcm9wYWdhdGVGcm9tID0gZGVidWcucHJvcGFnYXRlRnJvbUZ1bmN0aW9uKCk7XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9ib3VuZFZhbHVlID0gZGVidWcuYm91bmRWYWx1ZUZ1bmN0aW9uKCk7XG4gICAgfVxuICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHRoaXNBcmcpO1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHRoaXMsIDEpO1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXQoKTtcbiAgICByZXQuX3NldEJvdW5kVG8obWF5YmVQcm9taXNlKTtcbiAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHByb21pc2VSZWplY3Rpb25RdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcHJvbWlzZTogcmV0LFxuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICBiaW5kaW5nUHJvbWlzZTogbWF5YmVQcm9taXNlXG4gICAgICAgIH07XG4gICAgICAgIHRhcmdldC5fdGhlbihJTlRFUk5BTCwgdGFyZ2V0UmVqZWN0ZWQsIHVuZGVmaW5lZCwgcmV0LCBjb250ZXh0KTtcbiAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKFxuICAgICAgICAgICAgYmluZGluZ1Jlc29sdmVkLCBiaW5kaW5nUmVqZWN0ZWQsIHVuZGVmaW5lZCwgcmV0LCBjb250ZXh0KTtcbiAgICAgICAgcmV0Ll9zZXRPbkNhbmNlbChtYXliZVByb21pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5fcmVzb2x2ZUNhbGxiYWNrKHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0Qm91bmRUbyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDIwOTcxNTI7XG4gICAgICAgIHRoaXMuX2JvdW5kVG8gPSBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MjA5NzE1Mik7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzQm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDIwOTcxNTIpID09PSAyMDk3MTUyO1xufTtcblxuUHJvbWlzZS5iaW5kID0gZnVuY3Rpb24gKHRoaXNBcmcsIHZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkuYmluZCh0aGlzQXJnKTtcbn07XG59O1xuXG59LHt9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIG9sZDtcbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIikgb2xkID0gUHJvbWlzZTtcbmZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgdHJ5IHsgaWYgKFByb21pc2UgPT09IGJsdWViaXJkKSBQcm9taXNlID0gb2xkOyB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGJsdWViaXJkO1xufVxudmFyIGJsdWViaXJkID0gX2RlcmVxXyhcIi4vcHJvbWlzZVwiKSgpO1xuYmx1ZWJpcmQubm9Db25mbGljdCA9IG5vQ29uZmxpY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGJsdWViaXJkO1xuXG59LHtcIi4vcHJvbWlzZVwiOjIyfV0sNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBjciA9IE9iamVjdC5jcmVhdGU7XG5pZiAoY3IpIHtcbiAgICB2YXIgY2FsbGVyQ2FjaGUgPSBjcihudWxsKTtcbiAgICB2YXIgZ2V0dGVyQ2FjaGUgPSBjcihudWxsKTtcbiAgICBjYWxsZXJDYWNoZVtcIiBzaXplXCJdID0gZ2V0dGVyQ2FjaGVbXCIgc2l6ZVwiXSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIGNhbkV2YWx1YXRlID0gdXRpbC5jYW5FdmFsdWF0ZTtcbnZhciBpc0lkZW50aWZpZXIgPSB1dGlsLmlzSWRlbnRpZmllcjtcblxudmFyIGdldE1ldGhvZENhbGxlcjtcbnZhciBnZXRHZXR0ZXI7XG5pZiAoIXRydWUpIHtcbnZhciBtYWtlTWV0aG9kQ2FsbGVyID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiZW5zdXJlTWV0aG9kXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGVuc3VyZU1ldGhvZChvYmosICdtZXRob2ROYW1lJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHN3aXRjaChsZW4pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdKTsgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdKTsgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdKTsgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBvYmoubWV0aG9kTmFtZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5tZXRob2ROYW1lLmFwcGx5KG9iaiwgdGhpcyk7ICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZSgvbWV0aG9kTmFtZS9nLCBtZXRob2ROYW1lKSkoZW5zdXJlTWV0aG9kKTtcbn07XG5cbnZhciBtYWtlR2V0dGVyID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJvYmpcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICByZXR1cm4gb2JqLnByb3BlcnR5TmFtZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIi5yZXBsYWNlKFwicHJvcGVydHlOYW1lXCIsIHByb3BlcnR5TmFtZSkpO1xufTtcblxudmFyIGdldENvbXBpbGVkID0gZnVuY3Rpb24obmFtZSwgY29tcGlsZXIsIGNhY2hlKSB7XG4gICAgdmFyIHJldCA9IGNhY2hlW25hbWVdO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFpc0lkZW50aWZpZXIobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IGNvbXBpbGVyKG5hbWUpO1xuICAgICAgICBjYWNoZVtuYW1lXSA9IHJldDtcbiAgICAgICAgY2FjaGVbXCIgc2l6ZVwiXSsrO1xuICAgICAgICBpZiAoY2FjaGVbXCIgc2l6ZVwiXSA+IDUxMikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjYWNoZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSBkZWxldGUgY2FjaGVba2V5c1tpXV07XG4gICAgICAgICAgICBjYWNoZVtcIiBzaXplXCJdID0ga2V5cy5sZW5ndGggLSAyNTY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmdldE1ldGhvZENhbGxlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0Q29tcGlsZWQobmFtZSwgbWFrZU1ldGhvZENhbGxlciwgY2FsbGVyQ2FjaGUpO1xufTtcblxuZ2V0R2V0dGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBnZXRDb21waWxlZChuYW1lLCBtYWtlR2V0dGVyLCBnZXR0ZXJDYWNoZSk7XG59O1xufVxuXG5mdW5jdGlvbiBlbnN1cmVNZXRob2Qob2JqLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIGZuO1xuICAgIGlmIChvYmogIT0gbnVsbCkgZm4gPSBvYmpbbWV0aG9kTmFtZV07XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJPYmplY3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKG9iaikgKyBcIiBoYXMgbm8gbWV0aG9kICdcIiArXG4gICAgICAgICAgICB1dGlsLnRvU3RyaW5nKG1ldGhvZE5hbWUpICsgXCInXCI7XG4gICAgICAgIHRocm93IG5ldyBQcm9taXNlLlR5cGVFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjYWxsZXIob2JqKSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSB0aGlzLnBvcCgpO1xuICAgIHZhciBmbiA9IGVuc3VyZU1ldGhvZChvYmosIG1ldGhvZE5hbWUpO1xuICAgIHJldHVybiBmbi5hcHBseShvYmosIHRoaXMpO1xufVxuUHJvbWlzZS5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7O1xuICAgIGlmICghdHJ1ZSkge1xuICAgICAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgICAgIHZhciBtYXliZUNhbGxlciA9IGdldE1ldGhvZENhbGxlcihtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIGlmIChtYXliZUNhbGxlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICAgICAgICAgICAgICBtYXliZUNhbGxlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFyZ3MsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXJncy5wdXNoKG1ldGhvZE5hbWUpO1xuICAgIHJldHVybiB0aGlzLl90aGVuKGNhbGxlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFyZ3MsIHVuZGVmaW5lZCk7XG59O1xuXG5mdW5jdGlvbiBuYW1lZEdldHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqW3RoaXNdO1xufVxuZnVuY3Rpb24gaW5kZXhlZEdldHRlcihvYmopIHtcbiAgICB2YXIgaW5kZXggPSArdGhpcztcbiAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IE1hdGgubWF4KDAsIGluZGV4ICsgb2JqLmxlbmd0aCk7XG4gICAgcmV0dXJuIG9ialtpbmRleF07XG59XG5Qcm9taXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgdmFyIGlzSW5kZXggPSAodHlwZW9mIHByb3BlcnR5TmFtZSA9PT0gXCJudW1iZXJcIik7XG4gICAgdmFyIGdldHRlcjtcbiAgICBpZiAoIWlzSW5kZXgpIHtcbiAgICAgICAgaWYgKGNhbkV2YWx1YXRlKSB7XG4gICAgICAgICAgICB2YXIgbWF5YmVHZXR0ZXIgPSBnZXRHZXR0ZXIocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIGdldHRlciA9IG1heWJlR2V0dGVyICE9PSBudWxsID8gbWF5YmVHZXR0ZXIgOiBuYW1lZEdldHRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldHRlciA9IG5hbWVkR2V0dGVyO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0dGVyID0gaW5kZXhlZEdldHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oZ2V0dGVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcHJvcGVydHlOYW1lLCB1bmRlZmluZWQpO1xufTtcbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSw2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbiwgZGVidWcpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGFzeW5jID0gUHJvbWlzZS5fYXN5bmM7XG5cblByb21pc2UucHJvdG90eXBlW1wiYnJlYWtcIl0gPSBQcm9taXNlLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWRlYnVnLmNhbmNlbGxhdGlvbigpKSByZXR1cm4gdGhpcy5fd2FybihcImNhbmNlbGxhdGlvbiBpcyBkaXNhYmxlZFwiKTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB2YXIgY2hpbGQgPSBwcm9taXNlO1xuICAgIHdoaWxlIChwcm9taXNlLl9pc0NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgaWYgKCFwcm9taXNlLl9jYW5jZWxCeShjaGlsZCkpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5faXNGb2xsb3dpbmcoKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLl9mb2xsb3dlZSgpLmNhbmNlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5fY2FuY2VsQnJhbmNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcmVudCA9IHByb21pc2UuX2NhbmNlbGxhdGlvblBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCA9PSBudWxsIHx8ICFwYXJlbnQuX2lzQ2FuY2VsbGFibGUoKSkge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2lzRm9sbG93aW5nKCkpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9mb2xsb3dlZSgpLmNhbmNlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9jYW5jZWxCcmFuY2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faXNGb2xsb3dpbmcoKSkgcHJvbWlzZS5fZm9sbG93ZWUoKS5jYW5jZWwoKTtcbiAgICAgICAgICAgIHByb21pc2UuX3NldFdpbGxCZUNhbmNlbGxlZCgpO1xuICAgICAgICAgICAgY2hpbGQgPSBwcm9taXNlO1xuICAgICAgICAgICAgcHJvbWlzZSA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9icmFuY2hIYXNDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9icmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsLS07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZW5vdWdoQnJhbmNoZXNIYXZlQ2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICB0aGlzLl9icmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsIDw9IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FuY2VsQnkgPSBmdW5jdGlvbihjYW5jZWxsZXIpIHtcbiAgICBpZiAoY2FuY2VsbGVyID09PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPSAwO1xuICAgICAgICB0aGlzLl9pbnZva2VPbkNhbmNlbCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9icmFuY2hIYXNDYW5jZWxsZWQoKTtcbiAgICAgICAgaWYgKHRoaXMuX2Vub3VnaEJyYW5jaGVzSGF2ZUNhbmNlbGxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VPbkNhbmNlbCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NhbmNlbEJyYW5jaGVkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2Vub3VnaEJyYW5jaGVzSGF2ZUNhbmNlbGxlZCgpKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ2FuY2VsbGFibGUoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3NldENhbmNlbGxlZCgpO1xuICAgIGFzeW5jLmludm9rZSh0aGlzLl9jYW5jZWxQcm9taXNlcywgdGhpcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jYW5jZWxQcm9taXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sZW5ndGgoKSA+IDApIHRoaXMuX3NldHRsZVByb21pc2VzKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRPbkNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX29uQ2FuY2VsRmllbGQgPSB1bmRlZmluZWQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlzUGVuZGluZygpICYmICF0aGlzLl9pc0NhbmNlbGxlZCgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlzUGVuZGluZygpICYmICF0aGlzLmlzQ2FuY2VsbGVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZG9JbnZva2VPbkNhbmNlbCA9IGZ1bmN0aW9uKG9uQ2FuY2VsQ2FsbGJhY2ssIGludGVybmFsT25seSkge1xuICAgIGlmICh1dGlsLmlzQXJyYXkob25DYW5jZWxDYWxsYmFjaykpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbkNhbmNlbENhbGxiYWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLl9kb0ludm9rZU9uQ2FuY2VsKG9uQ2FuY2VsQ2FsbGJhY2tbaV0sIGludGVybmFsT25seSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9uQ2FuY2VsQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIG9uQ2FuY2VsQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKCFpbnRlcm5hbE9ubHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRyeUNhdGNoKG9uQ2FuY2VsQ2FsbGJhY2spLmNhbGwodGhpcy5fYm91bmRWYWx1ZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZShlLmUpO1xuICAgICAgICAgICAgICAgICAgICBhc3luYy50aHJvd0xhdGVyKGUuZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DYW5jZWxDYWxsYmFjay5fcmVzdWx0Q2FuY2VsbGVkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2ludm9rZU9uQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uQ2FuY2VsQ2FsbGJhY2sgPSB0aGlzLl9vbkNhbmNlbCgpO1xuICAgIHRoaXMuX3Vuc2V0T25DYW5jZWwoKTtcbiAgICBhc3luYy5pbnZva2UodGhpcy5fZG9JbnZva2VPbkNhbmNlbCwgdGhpcywgb25DYW5jZWxDYWxsYmFjayk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faW52b2tlSW50ZXJuYWxPbkNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgdGhpcy5fZG9JbnZva2VPbkNhbmNlbCh0aGlzLl9vbkNhbmNlbCgpLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdW5zZXRPbkNhbmNlbCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXN1bHRDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNhbmNlbCgpO1xufTtcblxufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5FWFRfRklMVEVSKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgZ2V0S2V5cyA9IF9kZXJlcV8oXCIuL2VzNVwiKS5rZXlzO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG5cbmZ1bmN0aW9uIGNhdGNoRmlsdGVyKGluc3RhbmNlcywgY2IsIHByb21pc2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgYm91bmRUbyA9IHByb21pc2UuX2JvdW5kVmFsdWUoKTtcbiAgICAgICAgcHJlZGljYXRlTG9vcDogZm9yICh2YXIgaSA9IDA7IGkgPCBpbnN0YW5jZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gaW5zdGFuY2VzW2ldO1xuXG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gRXJyb3IgfHxcbiAgICAgICAgICAgICAgICAoaXRlbSAhPSBudWxsICYmIGl0ZW0ucHJvdG90eXBlIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnlDYXRjaChjYikuY2FsbChib3VuZFRvLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlc1ByZWRpY2F0ZSA9IHRyeUNhdGNoKGl0ZW0pLmNhbGwoYm91bmRUbywgZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNQcmVkaWNhdGUgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVzUHJlZGljYXRlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hlc1ByZWRpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ5Q2F0Y2goY2IpLmNhbGwoYm91bmRUbywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh1dGlsLmlzT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSBnZXRLZXlzKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPSBlW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHByZWRpY2F0ZUxvb3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyeUNhdGNoKGNiKS5jYWxsKGJvdW5kVG8sIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbiAgICB9O1xufVxuXG5yZXR1cm4gY2F0Y2hGaWx0ZXI7XG59O1xuXG59LHtcIi4vZXM1XCI6MTMsXCIuL3V0aWxcIjozNn1dLDg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciBsb25nU3RhY2tUcmFjZXMgPSBmYWxzZTtcbnZhciBjb250ZXh0U3RhY2sgPSBbXTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb21pc2VDcmVhdGVkID0gZnVuY3Rpb24oKSB7fTtcblByb21pc2UucHJvdG90eXBlLl9wdXNoQ29udGV4dCA9IGZ1bmN0aW9uKCkge307XG5Qcm9taXNlLnByb3RvdHlwZS5fcG9wQ29udGV4dCA9IGZ1bmN0aW9uKCkge3JldHVybiBudWxsO307XG5Qcm9taXNlLl9wZWVrQ29udGV4dCA9IFByb21pc2UucHJvdG90eXBlLl9wZWVrQ29udGV4dCA9IGZ1bmN0aW9uKCkge307XG5cbmZ1bmN0aW9uIENvbnRleHQoKSB7XG4gICAgdGhpcy5fdHJhY2UgPSBuZXcgQ29udGV4dC5DYXB0dXJlZFRyYWNlKHBlZWtDb250ZXh0KCkpO1xufVxuQ29udGV4dC5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl90cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RyYWNlLl9wcm9taXNlQ3JlYXRlZCA9IG51bGw7XG4gICAgICAgIGNvbnRleHRTdGFjay5wdXNoKHRoaXMuX3RyYWNlKTtcbiAgICB9XG59O1xuXG5Db250ZXh0LnByb3RvdHlwZS5fcG9wQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fdHJhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgdHJhY2UgPSBjb250ZXh0U3RhY2sucG9wKCk7XG4gICAgICAgIHZhciByZXQgPSB0cmFjZS5fcHJvbWlzZUNyZWF0ZWQ7XG4gICAgICAgIHRyYWNlLl9wcm9taXNlQ3JlYXRlZCA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dCgpIHtcbiAgICBpZiAobG9uZ1N0YWNrVHJhY2VzKSByZXR1cm4gbmV3IENvbnRleHQoKTtcbn1cblxuZnVuY3Rpb24gcGVla0NvbnRleHQoKSB7XG4gICAgdmFyIGxhc3RJbmRleCA9IGNvbnRleHRTdGFjay5sZW5ndGggLSAxO1xuICAgIGlmIChsYXN0SW5kZXggPj0gMCkge1xuICAgICAgICByZXR1cm4gY29udGV4dFN0YWNrW2xhc3RJbmRleF07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5Db250ZXh0LkNhcHR1cmVkVHJhY2UgPSBudWxsO1xuQ29udGV4dC5jcmVhdGUgPSBjcmVhdGVDb250ZXh0O1xuQ29udGV4dC5kZWFjdGl2YXRlTG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24oKSB7fTtcbkNvbnRleHQuYWN0aXZhdGVMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgUHJvbWlzZV9wdXNoQ29udGV4dCA9IFByb21pc2UucHJvdG90eXBlLl9wdXNoQ29udGV4dDtcbiAgICB2YXIgUHJvbWlzZV9wb3BDb250ZXh0ID0gUHJvbWlzZS5wcm90b3R5cGUuX3BvcENvbnRleHQ7XG4gICAgdmFyIFByb21pc2VfUGVla0NvbnRleHQgPSBQcm9taXNlLl9wZWVrQ29udGV4dDtcbiAgICB2YXIgUHJvbWlzZV9wZWVrQ29udGV4dCA9IFByb21pc2UucHJvdG90eXBlLl9wZWVrQ29udGV4dDtcbiAgICB2YXIgUHJvbWlzZV9wcm9taXNlQ3JlYXRlZCA9IFByb21pc2UucHJvdG90eXBlLl9wcm9taXNlQ3JlYXRlZDtcbiAgICBDb250ZXh0LmRlYWN0aXZhdGVMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gUHJvbWlzZV9wdXNoQ29udGV4dDtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX3BvcENvbnRleHQgPSBQcm9taXNlX3BvcENvbnRleHQ7XG4gICAgICAgIFByb21pc2UuX3BlZWtDb250ZXh0ID0gUHJvbWlzZV9QZWVrQ29udGV4dDtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX3BlZWtDb250ZXh0ID0gUHJvbWlzZV9wZWVrQ29udGV4dDtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX3Byb21pc2VDcmVhdGVkID0gUHJvbWlzZV9wcm9taXNlQ3JlYXRlZDtcbiAgICAgICAgbG9uZ1N0YWNrVHJhY2VzID0gZmFsc2U7XG4gICAgfTtcbiAgICBsb25nU3RhY2tUcmFjZXMgPSB0cnVlO1xuICAgIFByb21pc2UucHJvdG90eXBlLl9wdXNoQ29udGV4dCA9IENvbnRleHQucHJvdG90eXBlLl9wdXNoQ29udGV4dDtcbiAgICBQcm9taXNlLnByb3RvdHlwZS5fcG9wQ29udGV4dCA9IENvbnRleHQucHJvdG90eXBlLl9wb3BDb250ZXh0O1xuICAgIFByb21pc2UuX3BlZWtDb250ZXh0ID0gUHJvbWlzZS5wcm90b3R5cGUuX3BlZWtDb250ZXh0ID0gcGVla0NvbnRleHQ7XG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX3Byb21pc2VDcmVhdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9wZWVrQ29udGV4dCgpO1xuICAgICAgICBpZiAoY3R4ICYmIGN0eC5fcHJvbWlzZUNyZWF0ZWQgPT0gbnVsbCkgY3R4Ll9wcm9taXNlQ3JlYXRlZCA9IHRoaXM7XG4gICAgfTtcbn07XG5yZXR1cm4gQ29udGV4dDtcbn07XG5cbn0se31dLDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIENvbnRleHQpIHtcbnZhciBnZXREb21haW4gPSBQcm9taXNlLl9nZXREb21haW47XG52YXIgYXN5bmMgPSBQcm9taXNlLl9hc3luYztcbnZhciBXYXJuaW5nID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpLldhcm5pbmc7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgY2FuQXR0YWNoVHJhY2UgPSB1dGlsLmNhbkF0dGFjaFRyYWNlO1xudmFyIHVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQ7XG52YXIgcG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb247XG52YXIgYmx1ZWJpcmRGcmFtZVBhdHRlcm4gPVxuICAgIC9bXFxcXFxcL11ibHVlYmlyZFtcXFxcXFwvXWpzW1xcXFxcXC9dKHJlbGVhc2V8ZGVidWd8aW5zdHJ1bWVudGVkKS87XG52YXIgbm9kZUZyYW1lUGF0dGVybiA9IC9cXCgoPzp0aW1lcnNcXC5qcyk6XFxkKzpcXGQrXFwpLztcbnZhciBwYXJzZUxpbmVQYXR0ZXJuID0gL1tcXC88XFwoXSguKz8pOihcXGQrKTooXFxkKylcXCk/XFxzKiQvO1xudmFyIHN0YWNrRnJhbWVQYXR0ZXJuID0gbnVsbDtcbnZhciBmb3JtYXRTdGFjayA9IG51bGw7XG52YXIgaW5kZW50U3RhY2tGcmFtZXMgPSBmYWxzZTtcbnZhciBwcmludFdhcm5pbmc7XG52YXIgZGVidWdnaW5nID0gISEodXRpbC5lbnYoXCJCTFVFQklSRF9ERUJVR1wiKSAhPSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAodHJ1ZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuZW52KFwiQkxVRUJJUkRfREVCVUdcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmVudihcIk5PREVfRU5WXCIpID09PSBcImRldmVsb3BtZW50XCIpKTtcblxudmFyIHdhcm5pbmdzID0gISEodXRpbC5lbnYoXCJCTFVFQklSRF9XQVJOSU5HU1wiKSAhPSAwICYmXG4gICAgKGRlYnVnZ2luZyB8fCB1dGlsLmVudihcIkJMVUVCSVJEX1dBUk5JTkdTXCIpKSk7XG5cbnZhciBsb25nU3RhY2tUcmFjZXMgPSAhISh1dGlsLmVudihcIkJMVUVCSVJEX0xPTkdfU1RBQ0tfVFJBQ0VTXCIpICE9IDAgJiZcbiAgICAoZGVidWdnaW5nIHx8IHV0aWwuZW52KFwiQkxVRUJJUkRfTE9OR19TVEFDS19UUkFDRVNcIikpKTtcblxudmFyIHdGb3Jnb3R0ZW5SZXR1cm4gPSB1dGlsLmVudihcIkJMVUVCSVJEX1dfRk9SR09UVEVOX1JFVFVSTlwiKSAhPSAwICYmXG4gICAgKHdhcm5pbmdzIHx8ICEhdXRpbC5lbnYoXCJCTFVFQklSRF9XX0ZPUkdPVFRFTl9SRVRVUk5cIikpO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG4gICAgdGFyZ2V0Ll9iaXRGaWVsZCA9ICgodGFyZ2V0Ll9iaXRGaWVsZCAmICh+MTA0ODU3NikpIHxcbiAgICAgICAgICAgICAgICAgICAgICA1MjQyODgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoKHRoaXMuX2JpdEZpZWxkICYgNTI0Mjg4KSAhPT0gMCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbigpO1xuICAgIH0sIDEpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmaXJlUmVqZWN0aW9uRXZlbnQoXCJyZWplY3Rpb25IYW5kbGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCwgdW5kZWZpbmVkLCB0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRSZXR1cm5lZE5vblVuZGVmaW5lZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyNjg0MzU0NTY7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmV0dXJuZWROb25VbmRlZmluZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjY4NDM1NDU2KSAhPT0gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHtcbiAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuX3NldHRsZWRWYWx1ZSgpO1xuICAgICAgICB0aGlzLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG4gICAgICAgIGZpcmVSZWplY3Rpb25FdmVudChcInVuaGFuZGxlZFJlamVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiwgcmVhc29uLCB0aGlzKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjYyMTQ0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4yNjIxNDQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzVW5oYW5kbGVkUmVqZWN0aW9uTm90aWZpZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDI2MjE0NCkgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFJlamVjdGlvbklzVW5oYW5kbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAxMDQ4NTc2O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MTA0ODU3Nik7XG4gICAgaWYgKHRoaXMuX2lzVW5oYW5kbGVkUmVqZWN0aW9uTm90aWZpZWQoKSkge1xuICAgICAgICB0aGlzLl91bnNldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQoKTtcbiAgICAgICAgdGhpcy5fbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uSXNIYW5kbGVkKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzUmVqZWN0aW9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAxMDQ4NTc2KSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fd2FybiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHNob3VsZFVzZU93blRyYWNlLCBwcm9taXNlKSB7XG4gICAgcmV0dXJuIHdhcm4obWVzc2FnZSwgc2hvdWxkVXNlT3duVHJhY2UsIHByb21pc2UgfHwgdGhpcyk7XG59O1xuXG5Qcm9taXNlLm9uUG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgcG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPVxuICAgICAgICB0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiA/IChkb21haW4gPT09IG51bGwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbiA6IHV0aWwuZG9tYWluQmluZChkb21haW4sIGZuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xufTtcblxuUHJvbWlzZS5vblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCA9XG4gICAgICAgIHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiID8gKGRvbWFpbiA9PT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuIDogdXRpbC5kb21haW5CaW5kKGRvbWFpbiwgZm4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG59O1xuXG52YXIgZGlzYWJsZUxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uKCkge307XG5Qcm9taXNlLmxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXN5bmMuaGF2ZUl0ZW1zUXVldWVkKCkgJiYgIWNvbmZpZy5sb25nU3RhY2tUcmFjZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGVuYWJsZSBsb25nIHN0YWNrIHRyYWNlcyBhZnRlciBwcm9taXNlcyBoYXZlIGJlZW4gY3JlYXRlZFxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIGlmICghY29uZmlnLmxvbmdTdGFja1RyYWNlcyAmJiBsb25nU3RhY2tUcmFjZXNJc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHZhciBQcm9taXNlX2NhcHR1cmVTdGFja1RyYWNlID0gUHJvbWlzZS5wcm90b3R5cGUuX2NhcHR1cmVTdGFja1RyYWNlO1xuICAgICAgICB2YXIgUHJvbWlzZV9hdHRhY2hFeHRyYVRyYWNlID0gUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaEV4dHJhVHJhY2U7XG4gICAgICAgIGNvbmZpZy5sb25nU3RhY2tUcmFjZXMgPSB0cnVlO1xuICAgICAgICBkaXNhYmxlTG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoYXN5bmMuaGF2ZUl0ZW1zUXVldWVkKCkgJiYgIWNvbmZpZy5sb25nU3RhY2tUcmFjZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgZW5hYmxlIGxvbmcgc3RhY2sgdHJhY2VzIGFmdGVyIHByb21pc2VzIGhhdmUgYmVlbiBjcmVhdGVkXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLl9jYXB0dXJlU3RhY2tUcmFjZSA9IFByb21pc2VfY2FwdHVyZVN0YWNrVHJhY2U7XG4gICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fYXR0YWNoRXh0cmFUcmFjZSA9IFByb21pc2VfYXR0YWNoRXh0cmFUcmFjZTtcbiAgICAgICAgICAgIENvbnRleHQuZGVhY3RpdmF0ZUxvbmdTdGFja1RyYWNlcygpO1xuICAgICAgICAgICAgYXN5bmMuZW5hYmxlVHJhbXBvbGluZSgpO1xuICAgICAgICAgICAgY29uZmlnLmxvbmdTdGFja1RyYWNlcyA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fY2FwdHVyZVN0YWNrVHJhY2UgPSBsb25nU3RhY2tUcmFjZXNDYXB0dXJlU3RhY2tUcmFjZTtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaEV4dHJhVHJhY2UgPSBsb25nU3RhY2tUcmFjZXNBdHRhY2hFeHRyYVRyYWNlO1xuICAgICAgICBDb250ZXh0LmFjdGl2YXRlTG9uZ1N0YWNrVHJhY2VzKCk7XG4gICAgICAgIGFzeW5jLmRpc2FibGVUcmFtcG9saW5lSWZOZWNlc3NhcnkoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLmhhc0xvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29uZmlnLmxvbmdTdGFja1RyYWNlcyAmJiBsb25nU3RhY2tUcmFjZXNJc1N1cHBvcnRlZCgpO1xufTtcblxudmFyIGZpcmVEb21FdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICAgICAgdXRpbC5nbG9iYWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obmFtZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZS50b0xvd2VyQ2FzZSgpLCB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWwuZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZG9tRXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICB1dGlsLmdsb2JhbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihuYW1lLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkb21FdmVudCA9IG5ldyBFdmVudChuYW1lLnRvTG93ZXJDYXNlKCksIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRvbUV2ZW50LmRldGFpbCA9IGV2ZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiAhdXRpbC5nbG9iYWwuZGlzcGF0Y2hFdmVudChkb21FdmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudChcInRlc3Rpbmd0aGVldmVudFwiLCBmYWxzZSwgdHJ1ZSwge30pO1xuICAgICAgICAgICAgdXRpbC5nbG9iYWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obmFtZSwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICAgICAgICAgIGRvbUV2ZW50LmluaXRDdXN0b21FdmVudChuYW1lLnRvTG93ZXJDYXNlKCksIGZhbHNlLCB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBldmVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF1dGlsLmdsb2JhbC5kaXNwYXRjaEV2ZW50KGRvbUV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59KSgpO1xuXG52YXIgZmlyZUdsb2JhbEV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmICh1dGlsLmlzTm9kZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbWl0LmFwcGx5KHByb2Nlc3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF1dGlsLmdsb2JhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gXCJvblwiICsgbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHV0aWwuZ2xvYmFsW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIG1ldGhvZC5hcHBseSh1dGlsLmdsb2JhbCwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbWlzZUxpZmVjeWNsZUV2ZW50T2JqZWN0KG5hbWUsIHByb21pc2UpIHtcbiAgICByZXR1cm4ge3Byb21pc2U6IHByb21pc2V9O1xufVxuXG52YXIgZXZlbnRUb09iamVjdEdlbmVyYXRvciA9IHtcbiAgICBwcm9taXNlQ3JlYXRlZDogZ2VuZXJhdGVQcm9taXNlTGlmZWN5Y2xlRXZlbnRPYmplY3QsXG4gICAgcHJvbWlzZUZ1bGZpbGxlZDogZ2VuZXJhdGVQcm9taXNlTGlmZWN5Y2xlRXZlbnRPYmplY3QsXG4gICAgcHJvbWlzZVJlamVjdGVkOiBnZW5lcmF0ZVByb21pc2VMaWZlY3ljbGVFdmVudE9iamVjdCxcbiAgICBwcm9taXNlUmVzb2x2ZWQ6IGdlbmVyYXRlUHJvbWlzZUxpZmVjeWNsZUV2ZW50T2JqZWN0LFxuICAgIHByb21pc2VDYW5jZWxsZWQ6IGdlbmVyYXRlUHJvbWlzZUxpZmVjeWNsZUV2ZW50T2JqZWN0LFxuICAgIHByb21pc2VDaGFpbmVkOiBmdW5jdGlvbihuYW1lLCBwcm9taXNlLCBjaGlsZCkge1xuICAgICAgICByZXR1cm4ge3Byb21pc2U6IHByb21pc2UsIGNoaWxkOiBjaGlsZH07XG4gICAgfSxcbiAgICB3YXJuaW5nOiBmdW5jdGlvbihuYW1lLCB3YXJuaW5nKSB7XG4gICAgICAgIHJldHVybiB7d2FybmluZzogd2FybmluZ307XG4gICAgfSxcbiAgICB1bmhhbmRsZWRSZWplY3Rpb246IGZ1bmN0aW9uIChuYW1lLCByZWFzb24sIHByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHtyZWFzb246IHJlYXNvbiwgcHJvbWlzZTogcHJvbWlzZX07XG4gICAgfSxcbiAgICByZWplY3Rpb25IYW5kbGVkOiBnZW5lcmF0ZVByb21pc2VMaWZlY3ljbGVFdmVudE9iamVjdFxufTtcblxudmFyIGFjdGl2ZUZpcmVFdmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGdsb2JhbEV2ZW50RmlyZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBnbG9iYWxFdmVudEZpcmVkID0gZmlyZUdsb2JhbEV2ZW50LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKGUpO1xuICAgICAgICBnbG9iYWxFdmVudEZpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZG9tRXZlbnRGaXJlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGRvbUV2ZW50RmlyZWQgPSBmaXJlRG9tRXZlbnQobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUb09iamVjdEdlbmVyYXRvcltuYW1lXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZSk7XG4gICAgICAgIGRvbUV2ZW50RmlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FdmVudEZpcmVkIHx8IGdsb2JhbEV2ZW50RmlyZWQ7XG59O1xuXG5Qcm9taXNlLmNvbmZpZyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICBvcHRzID0gT2JqZWN0KG9wdHMpO1xuICAgIGlmIChcImxvbmdTdGFja1RyYWNlc1wiIGluIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMubG9uZ1N0YWNrVHJhY2VzKSB7XG4gICAgICAgICAgICBQcm9taXNlLmxvbmdTdGFja1RyYWNlcygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFvcHRzLmxvbmdTdGFja1RyYWNlcyAmJiBQcm9taXNlLmhhc0xvbmdTdGFja1RyYWNlcygpKSB7XG4gICAgICAgICAgICBkaXNhYmxlTG9uZ1N0YWNrVHJhY2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwid2FybmluZ3NcIiBpbiBvcHRzKSB7XG4gICAgICAgIHZhciB3YXJuaW5nc09wdGlvbiA9IG9wdHMud2FybmluZ3M7XG4gICAgICAgIGNvbmZpZy53YXJuaW5ncyA9ICEhd2FybmluZ3NPcHRpb247XG4gICAgICAgIHdGb3Jnb3R0ZW5SZXR1cm4gPSBjb25maWcud2FybmluZ3M7XG5cbiAgICAgICAgaWYgKHV0aWwuaXNPYmplY3Qod2FybmluZ3NPcHRpb24pKSB7XG4gICAgICAgICAgICBpZiAoXCJ3Rm9yZ290dGVuUmV0dXJuXCIgaW4gd2FybmluZ3NPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB3Rm9yZ290dGVuUmV0dXJuID0gISF3YXJuaW5nc09wdGlvbi53Rm9yZ290dGVuUmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcImNhbmNlbGxhdGlvblwiIGluIG9wdHMgJiYgb3B0cy5jYW5jZWxsYXRpb24gJiYgIWNvbmZpZy5jYW5jZWxsYXRpb24pIHtcbiAgICAgICAgaWYgKGFzeW5jLmhhdmVJdGVtc1F1ZXVlZCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJjYW5ub3QgZW5hYmxlIGNhbmNlbGxhdGlvbiBhZnRlciBwcm9taXNlcyBhcmUgaW4gdXNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9jbGVhckNhbmNlbGxhdGlvbkRhdGEgPVxuICAgICAgICAgICAgY2FuY2VsbGF0aW9uQ2xlYXJDYW5jZWxsYXRpb25EYXRhO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcHJvcGFnYXRlRnJvbSA9IGNhbmNlbGxhdGlvblByb3BhZ2F0ZUZyb207XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9vbkNhbmNlbCA9IGNhbmNlbGxhdGlvbk9uQ2FuY2VsO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fc2V0T25DYW5jZWwgPSBjYW5jZWxsYXRpb25TZXRPbkNhbmNlbDtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrID1cbiAgICAgICAgICAgIGNhbmNlbGxhdGlvbkF0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGNhbmNlbGxhdGlvbkV4ZWN1dGU7XG4gICAgICAgIHByb3BhZ2F0ZUZyb21GdW5jdGlvbiA9IGNhbmNlbGxhdGlvblByb3BhZ2F0ZUZyb207XG4gICAgICAgIGNvbmZpZy5jYW5jZWxsYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoXCJtb25pdG9yaW5nXCIgaW4gb3B0cykge1xuICAgICAgICBpZiAob3B0cy5tb25pdG9yaW5nICYmICFjb25maWcubW9uaXRvcmluZykge1xuICAgICAgICAgICAgY29uZmlnLm1vbml0b3JpbmcgPSB0cnVlO1xuICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2ZpcmVFdmVudCA9IGFjdGl2ZUZpcmVFdmVudDtcbiAgICAgICAgfSBlbHNlIGlmICghb3B0cy5tb25pdG9yaW5nICYmIGNvbmZpZy5tb25pdG9yaW5nKSB7XG4gICAgICAgICAgICBjb25maWcubW9uaXRvcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2ZpcmVFdmVudCA9IGRlZmF1bHRGaXJlRXZlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2U7XG59O1xuXG5mdW5jdGlvbiBkZWZhdWx0RmlyZUV2ZW50KCkgeyByZXR1cm4gZmFsc2U7IH1cblxuUHJvbWlzZS5wcm90b3R5cGUuX2ZpcmVFdmVudCA9IGRlZmF1bHRGaXJlRXZlbnQ7XG5Qcm9taXNlLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGZ1bmN0aW9uKGV4ZWN1dG9yLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICB0cnkge1xuICAgICAgICBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufTtcblByb21pc2UucHJvdG90eXBlLl9vbkNhbmNlbCA9IGZ1bmN0aW9uICgpIHt9O1xuUHJvbWlzZS5wcm90b3R5cGUuX3NldE9uQ2FuY2VsID0gZnVuY3Rpb24gKGhhbmRsZXIpIHsgOyB9O1xuUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24ob25DYW5jZWwpIHtcbiAgICA7XG59O1xuUHJvbWlzZS5wcm90b3R5cGUuX2NhcHR1cmVTdGFja1RyYWNlID0gZnVuY3Rpb24gKCkge307XG5Qcm9taXNlLnByb3RvdHlwZS5fYXR0YWNoRXh0cmFUcmFjZSA9IGZ1bmN0aW9uICgpIHt9O1xuUHJvbWlzZS5wcm90b3R5cGUuX2NsZWFyQ2FuY2VsbGF0aW9uRGF0YSA9IGZ1bmN0aW9uKCkge307XG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvcGFnYXRlRnJvbSA9IGZ1bmN0aW9uIChwYXJlbnQsIGZsYWdzKSB7XG4gICAgO1xuICAgIDtcbn07XG5cbmZ1bmN0aW9uIGNhbmNlbGxhdGlvbkV4ZWN1dGUoZXhlY3V0b3IsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgICBleGVjdXRvcihyZXNvbHZlLCByZWplY3QsIGZ1bmN0aW9uKG9uQ2FuY2VsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uQ2FuY2VsICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib25DYW5jZWwgbXVzdCBiZSBhIGZ1bmN0aW9uLCBnb3Q6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwudG9TdHJpbmcob25DYW5jZWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrKG9uQ2FuY2VsKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbGxhdGlvbkF0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrKG9uQ2FuY2VsKSB7XG4gICAgaWYgKCF0aGlzLl9pc0NhbmNlbGxhYmxlKCkpIHJldHVybiB0aGlzO1xuXG4gICAgdmFyIHByZXZpb3VzT25DYW5jZWwgPSB0aGlzLl9vbkNhbmNlbCgpO1xuICAgIGlmIChwcmV2aW91c09uQ2FuY2VsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHV0aWwuaXNBcnJheShwcmV2aW91c09uQ2FuY2VsKSkge1xuICAgICAgICAgICAgcHJldmlvdXNPbkNhbmNlbC5wdXNoKG9uQ2FuY2VsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldE9uQ2FuY2VsKFtwcmV2aW91c09uQ2FuY2VsLCBvbkNhbmNlbF0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2V0T25DYW5jZWwob25DYW5jZWwpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsbGF0aW9uT25DYW5jZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29uQ2FuY2VsRmllbGQ7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbGxhdGlvblNldE9uQ2FuY2VsKG9uQ2FuY2VsKSB7XG4gICAgdGhpcy5fb25DYW5jZWxGaWVsZCA9IG9uQ2FuY2VsO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxsYXRpb25DbGVhckNhbmNlbGxhdGlvbkRhdGEoKSB7XG4gICAgdGhpcy5fY2FuY2VsbGF0aW9uUGFyZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX29uQ2FuY2VsRmllbGQgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbGxhdGlvblByb3BhZ2F0ZUZyb20ocGFyZW50LCBmbGFncykge1xuICAgIGlmICgoZmxhZ3MgJiAxKSAhPT0gMCkge1xuICAgICAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHZhciBicmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsID0gcGFyZW50Ll9icmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsO1xuICAgICAgICBpZiAoYnJhbmNoZXNSZW1haW5pbmdUb0NhbmNlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBicmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPSBicmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsICsgMTtcbiAgICB9XG4gICAgaWYgKChmbGFncyAmIDIpICE9PSAwICYmIHBhcmVudC5faXNCb3VuZCgpKSB7XG4gICAgICAgIHRoaXMuX3NldEJvdW5kVG8ocGFyZW50Ll9ib3VuZFRvKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRpbmdQcm9wYWdhdGVGcm9tKHBhcmVudCwgZmxhZ3MpIHtcbiAgICBpZiAoKGZsYWdzICYgMikgIT09IDAgJiYgcGFyZW50Ll9pc0JvdW5kKCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Qm91bmRUbyhwYXJlbnQuX2JvdW5kVG8pO1xuICAgIH1cbn1cbnZhciBwcm9wYWdhdGVGcm9tRnVuY3Rpb24gPSBiaW5kaW5nUHJvcGFnYXRlRnJvbTtcblxuZnVuY3Rpb24gYm91bmRWYWx1ZUZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSB0aGlzLl9ib3VuZFRvO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKHJldC5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldC52YWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvbmdTdGFja1RyYWNlc0NhcHR1cmVTdGFja1RyYWNlKCkge1xuICAgIHRoaXMuX3RyYWNlID0gbmV3IENhcHR1cmVkVHJhY2UodGhpcy5fcGVla0NvbnRleHQoKSk7XG59XG5cbmZ1bmN0aW9uIGxvbmdTdGFja1RyYWNlc0F0dGFjaEV4dHJhVHJhY2UoZXJyb3IsIGlnbm9yZVNlbGYpIHtcbiAgICBpZiAoY2FuQXR0YWNoVHJhY2UoZXJyb3IpKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IHRoaXMuX3RyYWNlO1xuICAgICAgICBpZiAodHJhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGlnbm9yZVNlbGYpIHRyYWNlID0gdHJhY2UuX3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHJhY2UuYXR0YWNoRXh0cmFUcmFjZShlcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWVycm9yLl9fc3RhY2tDbGVhbmVkX18pIHtcbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSBwYXJzZVN0YWNrQW5kTWVzc2FnZShlcnJvcik7XG4gICAgICAgICAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKGVycm9yLCBcInN0YWNrXCIsXG4gICAgICAgICAgICAgICAgcGFyc2VkLm1lc3NhZ2UgKyBcIlxcblwiICsgcGFyc2VkLnN0YWNrLmpvaW4oXCJcXG5cIikpO1xuICAgICAgICAgICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChlcnJvciwgXCJfX3N0YWNrQ2xlYW5lZF9fXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvcmdvdHRlblJldHVybnMocmV0dXJuVmFsdWUsIHByb21pc2VDcmVhdGVkLCBuYW1lLCBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCkge1xuICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHByb21pc2VDcmVhdGVkICE9PSBudWxsICYmXG4gICAgICAgIHdGb3Jnb3R0ZW5SZXR1cm4pIHtcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkICYmIHBhcmVudC5fcmV0dXJuZWROb25VbmRlZmluZWQoKSkgcmV0dXJuO1xuICAgICAgICBpZiAoKHByb21pc2UuX2JpdEZpZWxkICYgNjU1MzUpID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgaWYgKG5hbWUpIG5hbWUgPSBuYW1lICsgXCIgXCI7XG4gICAgICAgIHZhciBoYW5kbGVyTGluZSA9IFwiXCI7XG4gICAgICAgIHZhciBjcmVhdG9yTGluZSA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9taXNlQ3JlYXRlZC5fdHJhY2UpIHtcbiAgICAgICAgICAgIHZhciB0cmFjZUxpbmVzID0gcHJvbWlzZUNyZWF0ZWQuX3RyYWNlLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gY2xlYW5TdGFjayh0cmFjZUxpbmVzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBsaW5lID0gc3RhY2tbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlRnJhbWVQYXR0ZXJuLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVNYXRjaGVzID0gbGluZS5tYXRjaChwYXJzZUxpbmVQYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyTGluZSAgPSBcImF0IFwiICsgbGluZU1hdGNoZXNbMV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICsgbGluZU1hdGNoZXNbMl0gKyBcIjpcIiArIGxpbmVNYXRjaGVzWzNdICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBmaXJzdFVzZXJMaW5lID0gc3RhY2tbMF07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFjZUxpbmVzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNlTGluZXNbaV0gPT09IGZpcnN0VXNlckxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JMaW5lID0gXCJcXG5cIiArIHRyYWNlTGluZXNbaSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbXNnID0gXCJhIHByb21pc2Ugd2FzIGNyZWF0ZWQgaW4gYSBcIiArIG5hbWUgK1xuICAgICAgICAgICAgXCJoYW5kbGVyIFwiICsgaGFuZGxlckxpbmUgKyBcImJ1dCB3YXMgbm90IHJldHVybmVkIGZyb20gaXQsIFwiICtcbiAgICAgICAgICAgIFwic2VlIGh0dHA6Ly9nb28uZ2wvclJxTVV3XCIgK1xuICAgICAgICAgICAgY3JlYXRvckxpbmU7XG4gICAgICAgIHByb21pc2UuX3dhcm4obXNnLCB0cnVlLCBwcm9taXNlQ3JlYXRlZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZXByZWNhdGVkKG5hbWUsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBuYW1lICtcbiAgICAgICAgXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXCI7XG4gICAgaWYgKHJlcGxhY2VtZW50KSBtZXNzYWdlICs9IFwiIFVzZSBcIiArIHJlcGxhY2VtZW50ICsgXCIgaW5zdGVhZC5cIjtcbiAgICByZXR1cm4gd2FybihtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gd2FybihtZXNzYWdlLCBzaG91bGRVc2VPd25UcmFjZSwgcHJvbWlzZSkge1xuICAgIGlmICghY29uZmlnLndhcm5pbmdzKSByZXR1cm47XG4gICAgdmFyIHdhcm5pbmcgPSBuZXcgV2FybmluZyhtZXNzYWdlKTtcbiAgICB2YXIgY3R4O1xuICAgIGlmIChzaG91bGRVc2VPd25UcmFjZSkge1xuICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdhcm5pbmcpO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmxvbmdTdGFja1RyYWNlcyAmJiAoY3R4ID0gUHJvbWlzZS5fcGVla0NvbnRleHQoKSkpIHtcbiAgICAgICAgY3R4LmF0dGFjaEV4dHJhVHJhY2Uod2FybmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlU3RhY2tBbmRNZXNzYWdlKHdhcm5pbmcpO1xuICAgICAgICB3YXJuaW5nLnN0YWNrID0gcGFyc2VkLm1lc3NhZ2UgKyBcIlxcblwiICsgcGFyc2VkLnN0YWNrLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVGaXJlRXZlbnQoXCJ3YXJuaW5nXCIsIHdhcm5pbmcpKSB7XG4gICAgICAgIGZvcm1hdEFuZExvZ0Vycm9yKHdhcm5pbmcsIFwiXCIsIHRydWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVjb25zdHJ1Y3RTdGFjayhtZXNzYWdlLCBzdGFja3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgc3RhY2tzW2ldLnB1c2goXCJGcm9tIHByZXZpb3VzIGV2ZW50OlwiKTtcbiAgICAgICAgc3RhY2tzW2ldID0gc3RhY2tzW2ldLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIGlmIChpIDwgc3RhY2tzLmxlbmd0aCkge1xuICAgICAgICBzdGFja3NbaV0gPSBzdGFja3NbaV0uam9pbihcIlxcblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2tzLmpvaW4oXCJcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZU9yRW1wdHlKdW1wcyhzdGFja3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoc3RhY2tzW2ldLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgKChpICsgMSA8IHN0YWNrcy5sZW5ndGgpICYmIHN0YWNrc1tpXVswXSA9PT0gc3RhY2tzW2krMV1bMF0pKSB7XG4gICAgICAgICAgICBzdGFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDb21tb25Sb290cyhzdGFja3MpIHtcbiAgICB2YXIgY3VycmVudCA9IHN0YWNrc1swXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHN0YWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgcHJldiA9IHN0YWNrc1tpXTtcbiAgICAgICAgdmFyIGN1cnJlbnRMYXN0SW5kZXggPSBjdXJyZW50Lmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBjdXJyZW50TGFzdExpbmUgPSBjdXJyZW50W2N1cnJlbnRMYXN0SW5kZXhdO1xuICAgICAgICB2YXIgY29tbW9uUm9vdE1lZXRQb2ludCA9IC0xO1xuXG4gICAgICAgIGZvciAodmFyIGogPSBwcmV2Lmxlbmd0aCAtIDE7IGogPj0gMDsgLS1qKSB7XG4gICAgICAgICAgICBpZiAocHJldltqXSA9PT0gY3VycmVudExhc3RMaW5lKSB7XG4gICAgICAgICAgICAgICAgY29tbW9uUm9vdE1lZXRQb2ludCA9IGo7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gY29tbW9uUm9vdE1lZXRQb2ludDsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gcHJldltqXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50W2N1cnJlbnRMYXN0SW5kZXhdID09PSBsaW5lKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5wb3AoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGFzdEluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBwcmV2O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5TdGFjayhzdGFjaykge1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBsaW5lID0gc3RhY2tbaV07XG4gICAgICAgIHZhciBpc1RyYWNlTGluZSA9IFwiICAgIChObyBzdGFjayB0cmFjZSlcIiA9PT0gbGluZSB8fFxuICAgICAgICAgICAgc3RhY2tGcmFtZVBhdHRlcm4udGVzdChsaW5lKTtcbiAgICAgICAgdmFyIGlzSW50ZXJuYWxGcmFtZSA9IGlzVHJhY2VMaW5lICYmIHNob3VsZElnbm9yZShsaW5lKTtcbiAgICAgICAgaWYgKGlzVHJhY2VMaW5lICYmICFpc0ludGVybmFsRnJhbWUpIHtcbiAgICAgICAgICAgIGlmIChpbmRlbnRTdGFja0ZyYW1lcyAmJiBsaW5lLmNoYXJBdCgwKSAhPT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gXCIgICAgXCIgKyBsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc3RhY2tGcmFtZXNBc0FycmF5KGVycm9yKSB7XG4gICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2sucmVwbGFjZSgvXFxzKyQvZywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgbGluZSA9IHN0YWNrW2ldO1xuICAgICAgICBpZiAoXCIgICAgKE5vIHN0YWNrIHRyYWNlKVwiID09PSBsaW5lIHx8IHN0YWNrRnJhbWVQYXR0ZXJuLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpID4gMCAmJiBlcnJvci5uYW1lICE9IFwiU3ludGF4RXJyb3JcIikge1xuICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhY2s7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3RhY2tBbmRNZXNzYWdlKGVycm9yKSB7XG4gICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgdmFyIG1lc3NhZ2UgPSBlcnJvci50b1N0cmluZygpO1xuICAgIHN0YWNrID0gdHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiICYmIHN0YWNrLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHN0YWNrRnJhbWVzQXNBcnJheShlcnJvcikgOiBbXCIgICAgKE5vIHN0YWNrIHRyYWNlKVwiXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBzdGFjazogZXJyb3IubmFtZSA9PSBcIlN5bnRheEVycm9yXCIgPyBzdGFjayA6IGNsZWFuU3RhY2soc3RhY2spXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0QW5kTG9nRXJyb3IoZXJyb3IsIHRpdGxlLCBpc1NvZnQpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2U7XG4gICAgICAgIGlmICh1dGlsLmlzT2JqZWN0KGVycm9yKSkge1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGl0bGUgKyBmb3JtYXRTdGFjayhzdGFjaywgZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSA9IHRpdGxlICsgU3RyaW5nKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHByaW50V2FybmluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcobWVzc2FnZSwgaXNTb2Z0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUubG9nID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlyZVJlamVjdGlvbkV2ZW50KG5hbWUsIGxvY2FsSGFuZGxlciwgcmVhc29uLCBwcm9taXNlKSB7XG4gICAgdmFyIGxvY2FsRXZlbnRGaXJlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9jYWxIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGxvY2FsRXZlbnRGaXJlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJyZWplY3Rpb25IYW5kbGVkXCIpIHtcbiAgICAgICAgICAgICAgICBsb2NhbEhhbmRsZXIocHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsSGFuZGxlcihyZWFzb24sIHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKGUpO1xuICAgIH1cblxuICAgIGlmIChuYW1lID09PSBcInVuaGFuZGxlZFJlamVjdGlvblwiKSB7XG4gICAgICAgIGlmICghYWN0aXZlRmlyZUV2ZW50KG5hbWUsIHJlYXNvbiwgcHJvbWlzZSkgJiYgIWxvY2FsRXZlbnRGaXJlZCkge1xuICAgICAgICAgICAgZm9ybWF0QW5kTG9nRXJyb3IocmVhc29uLCBcIlVuaGFuZGxlZCByZWplY3Rpb24gXCIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlRmlyZUV2ZW50KG5hbWUsIHByb21pc2UpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0Tm9uRXJyb3Iob2JqKSB7XG4gICAgdmFyIHN0cjtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHN0ciA9IFwiW2Z1bmN0aW9uIFwiICtcbiAgICAgICAgICAgIChvYmoubmFtZSB8fCBcImFub255bW91c1wiKSArXG4gICAgICAgICAgICBcIl1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBvYmogJiYgdHlwZW9mIG9iai50b1N0cmluZyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IG9iai50b1N0cmluZygpIDogdXRpbC50b1N0cmluZyhvYmopO1xuICAgICAgICB2YXIgcnVzZWxlc3NUb1N0cmluZyA9IC9cXFtvYmplY3QgW2EtekEtWjAtOSRfXStcXF0vO1xuICAgICAgICBpZiAocnVzZWxlc3NUb1N0cmluZy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1N0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICAgICAgICAgICAgc3RyID0gbmV3U3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHN0ciA9IFwiKGVtcHR5IGFycmF5KVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXCIoPFwiICsgc25pcChzdHIpICsgXCI+LCBubyBzdGFjayB0cmFjZSlcIik7XG59XG5cbmZ1bmN0aW9uIHNuaXAoc3RyKSB7XG4gICAgdmFyIG1heENoYXJzID0gNDE7XG4gICAgaWYgKHN0ci5sZW5ndGggPCBtYXhDaGFycykge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBtYXhDaGFycyAtIDMpICsgXCIuLi5cIjtcbn1cblxuZnVuY3Rpb24gbG9uZ1N0YWNrVHJhY2VzSXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjYXB0dXJlU3RhY2tUcmFjZSA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG52YXIgc2hvdWxkSWdub3JlID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcbnZhciBwYXJzZUxpbmVJbmZvUmVnZXggPSAvW1xcLzxcXChdKFteOlxcL10rKTooXFxkKyk6KD86XFxkKylcXCk/XFxzKiQvO1xuZnVuY3Rpb24gcGFyc2VMaW5lSW5mbyhsaW5lKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBsaW5lLm1hdGNoKHBhcnNlTGluZUluZm9SZWdleCk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBtYXRjaGVzWzFdLFxuICAgICAgICAgICAgbGluZTogcGFyc2VJbnQobWF0Y2hlc1syXSwgMTApXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb3VuZHMoZmlyc3RMaW5lRXJyb3IsIGxhc3RMaW5lRXJyb3IpIHtcbiAgICBpZiAoIWxvbmdTdGFja1RyYWNlc0lzU3VwcG9ydGVkKCkpIHJldHVybjtcbiAgICB2YXIgZmlyc3RTdGFja0xpbmVzID0gZmlyc3RMaW5lRXJyb3Iuc3RhY2suc3BsaXQoXCJcXG5cIik7XG4gICAgdmFyIGxhc3RTdGFja0xpbmVzID0gbGFzdExpbmVFcnJvci5zdGFjay5zcGxpdChcIlxcblwiKTtcbiAgICB2YXIgZmlyc3RJbmRleCA9IC0xO1xuICAgIHZhciBsYXN0SW5kZXggPSAtMTtcbiAgICB2YXIgZmlyc3RGaWxlTmFtZTtcbiAgICB2YXIgbGFzdEZpbGVOYW1lO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlyc3RTdGFja0xpbmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXJzZUxpbmVJbmZvKGZpcnN0U3RhY2tMaW5lc1tpXSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGZpcnN0RmlsZU5hbWUgPSByZXN1bHQuZmlsZU5hbWU7XG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gcmVzdWx0LmxpbmU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RTdGFja0xpbmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXJzZUxpbmVJbmZvKGxhc3RTdGFja0xpbmVzW2ldKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgbGFzdEZpbGVOYW1lID0gcmVzdWx0LmZpbGVOYW1lO1xuICAgICAgICAgICAgbGFzdEluZGV4ID0gcmVzdWx0LmxpbmU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmlyc3RJbmRleCA8IDAgfHwgbGFzdEluZGV4IDwgMCB8fCAhZmlyc3RGaWxlTmFtZSB8fCAhbGFzdEZpbGVOYW1lIHx8XG4gICAgICAgIGZpcnN0RmlsZU5hbWUgIT09IGxhc3RGaWxlTmFtZSB8fCBmaXJzdEluZGV4ID49IGxhc3RJbmRleCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2hvdWxkSWdub3JlID0gZnVuY3Rpb24obGluZSkge1xuICAgICAgICBpZiAoYmx1ZWJpcmRGcmFtZVBhdHRlcm4udGVzdChsaW5lKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBpbmZvID0gcGFyc2VMaW5lSW5mbyhsaW5lKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmZpbGVOYW1lID09PSBmaXJzdEZpbGVOYW1lICYmXG4gICAgICAgICAgICAgICAgKGZpcnN0SW5kZXggPD0gaW5mby5saW5lICYmIGluZm8ubGluZSA8PSBsYXN0SW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIENhcHR1cmVkVHJhY2UocGFyZW50KSB7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuX3Byb21pc2VzQ3JlYXRlZCA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuX2xlbmd0aCA9IDEgKyAocGFyZW50ID09PSB1bmRlZmluZWQgPyAwIDogcGFyZW50Ll9sZW5ndGgpO1xuICAgIGNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIENhcHR1cmVkVHJhY2UpO1xuICAgIGlmIChsZW5ndGggPiAzMikgdGhpcy51bmN5Y2xlKCk7XG59XG51dGlsLmluaGVyaXRzKENhcHR1cmVkVHJhY2UsIEVycm9yKTtcbkNvbnRleHQuQ2FwdHVyZWRUcmFjZSA9IENhcHR1cmVkVHJhY2U7XG5cbkNhcHR1cmVkVHJhY2UucHJvdG90eXBlLnVuY3ljbGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fbGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPCAyKSByZXR1cm47XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIHN0YWNrVG9JbmRleCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG5vZGUgPSB0aGlzOyBub2RlICE9PSB1bmRlZmluZWQ7ICsraSkge1xuICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5fcGFyZW50O1xuICAgIH1cbiAgICBsZW5ndGggPSB0aGlzLl9sZW5ndGggPSBpO1xuICAgIGZvciAodmFyIGkgPSBsZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgc3RhY2sgPSBub2Rlc1tpXS5zdGFjaztcbiAgICAgICAgaWYgKHN0YWNrVG9JbmRleFtzdGFja10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RhY2tUb0luZGV4W3N0YWNrXSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgY3VycmVudFN0YWNrID0gbm9kZXNbaV0uc3RhY2s7XG4gICAgICAgIHZhciBpbmRleCA9IHN0YWNrVG9JbmRleFtjdXJyZW50U3RhY2tdO1xuICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIG5vZGVzW2luZGV4IC0gMV0uX3BhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBub2Rlc1tpbmRleCAtIDFdLl9sZW5ndGggPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZXNbaV0uX3BhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG5vZGVzW2ldLl9sZW5ndGggPSAxO1xuICAgICAgICAgICAgdmFyIGN5Y2xlRWRnZU5vZGUgPSBpID4gMCA/IG5vZGVzW2kgLSAxXSA6IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA8IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9wYXJlbnQgPSBub2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX3BhcmVudC51bmN5Y2xlKCk7XG4gICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fbGVuZ3RoID1cbiAgICAgICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fcGFyZW50Ll9sZW5ndGggKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fbGVuZ3RoID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjdXJyZW50Q2hpbGRMZW5ndGggPSBjeWNsZUVkZ2VOb2RlLl9sZW5ndGggKyAxO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgLSAyOyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgICAgIG5vZGVzW2pdLl9sZW5ndGggPSBjdXJyZW50Q2hpbGRMZW5ndGg7XG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkTGVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5DYXB0dXJlZFRyYWNlLnByb3RvdHlwZS5hdHRhY2hFeHRyYVRyYWNlID0gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IuX19zdGFja0NsZWFuZWRfXykgcmV0dXJuO1xuICAgIHRoaXMudW5jeWNsZSgpO1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZVN0YWNrQW5kTWVzc2FnZShlcnJvcik7XG4gICAgdmFyIG1lc3NhZ2UgPSBwYXJzZWQubWVzc2FnZTtcbiAgICB2YXIgc3RhY2tzID0gW3BhcnNlZC5zdGFja107XG5cbiAgICB2YXIgdHJhY2UgPSB0aGlzO1xuICAgIHdoaWxlICh0cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YWNrcy5wdXNoKGNsZWFuU3RhY2sodHJhY2Uuc3RhY2suc3BsaXQoXCJcXG5cIikpKTtcbiAgICAgICAgdHJhY2UgPSB0cmFjZS5fcGFyZW50O1xuICAgIH1cbiAgICByZW1vdmVDb21tb25Sb290cyhzdGFja3MpO1xuICAgIHJlbW92ZUR1cGxpY2F0ZU9yRW1wdHlKdW1wcyhzdGFja3MpO1xuICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AoZXJyb3IsIFwic3RhY2tcIiwgcmVjb25zdHJ1Y3RTdGFjayhtZXNzYWdlLCBzdGFja3MpKTtcbiAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKGVycm9yLCBcIl9fc3RhY2tDbGVhbmVkX19cIiwgdHJ1ZSk7XG59O1xuXG52YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSAoZnVuY3Rpb24gc3RhY2tEZXRlY3Rpb24oKSB7XG4gICAgdmFyIHY4c3RhY2tGcmFtZVBhdHRlcm4gPSAvXlxccyphdFxccyovO1xuICAgIHZhciB2OHN0YWNrRm9ybWF0dGVyID0gZnVuY3Rpb24oc3RhY2ssIGVycm9yKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIpIHJldHVybiBzdGFjaztcblxuICAgICAgICBpZiAoZXJyb3IubmFtZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBlcnJvci5tZXNzYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvci50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXROb25FcnJvcihlcnJvcik7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID09PSBcIm51bWJlclwiICYmXG4gICAgICAgIHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCArPSA2O1xuICAgICAgICBzdGFja0ZyYW1lUGF0dGVybiA9IHY4c3RhY2tGcmFtZVBhdHRlcm47XG4gICAgICAgIGZvcm1hdFN0YWNrID0gdjhzdGFja0Zvcm1hdHRlcjtcbiAgICAgICAgdmFyIGNhcHR1cmVTdGFja1RyYWNlID0gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U7XG5cbiAgICAgICAgc2hvdWxkSWdub3JlID0gZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIGJsdWViaXJkRnJhbWVQYXR0ZXJuLnRlc3QobGluZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihyZWNlaXZlciwgaWdub3JlVW50aWwpIHtcbiAgICAgICAgICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCArPSA2O1xuICAgICAgICAgICAgY2FwdHVyZVN0YWNrVHJhY2UocmVjZWl2ZXIsIGlnbm9yZVVudGlsKTtcbiAgICAgICAgICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCAtPSA2O1xuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCk7XG5cbiAgICBpZiAodHlwZW9mIGVyci5zdGFjayA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICBlcnIuc3RhY2suc3BsaXQoXCJcXG5cIilbMF0uaW5kZXhPZihcInN0YWNrRGV0ZWN0aW9uQFwiKSA+PSAwKSB7XG4gICAgICAgIHN0YWNrRnJhbWVQYXR0ZXJuID0gL0AvO1xuICAgICAgICBmb3JtYXRTdGFjayA9IHY4c3RhY2tGb3JtYXR0ZXI7XG4gICAgICAgIGluZGVudFN0YWNrRnJhbWVzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhcHR1cmVTdGFja1RyYWNlKG8pIHtcbiAgICAgICAgICAgIG8uc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgaGFzU3RhY2tBZnRlclRocm93O1xuICAgIHRyeSB7IHRocm93IG5ldyBFcnJvcigpOyB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICBoYXNTdGFja0FmdGVyVGhyb3cgPSAoXCJzdGFja1wiIGluIGUpO1xuICAgIH1cbiAgICBpZiAoIShcInN0YWNrXCIgaW4gZXJyKSAmJiBoYXNTdGFja0FmdGVyVGhyb3cgJiZcbiAgICAgICAgdHlwZW9mIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBzdGFja0ZyYW1lUGF0dGVybiA9IHY4c3RhY2tGcmFtZVBhdHRlcm47XG4gICAgICAgIGZvcm1hdFN0YWNrID0gdjhzdGFja0Zvcm1hdHRlcjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhcHR1cmVTdGFja1RyYWNlKG8pIHtcbiAgICAgICAgICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCArPSA2O1xuICAgICAgICAgICAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKCk7IH1cbiAgICAgICAgICAgIGNhdGNoKGUpIHsgby5zdGFjayA9IGUuc3RhY2s7IH1cbiAgICAgICAgICAgIEVycm9yLnN0YWNrVHJhY2VMaW1pdCAtPSA2O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvcm1hdFN0YWNrID0gZnVuY3Rpb24oc3RhY2ssIGVycm9yKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIpIHJldHVybiBzdGFjaztcblxuICAgICAgICBpZiAoKHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGVycm9yID09PSBcImZ1bmN0aW9uXCIpICYmXG4gICAgICAgICAgICBlcnJvci5uYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG51bGw7XG5cbn0pKFtdKTtcblxuaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjb25zb2xlLndhcm4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfTtcbiAgICBpZiAodXRpbC5pc05vZGUgJiYgcHJvY2Vzcy5zdGRlcnIuaXNUVFkpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24obWVzc2FnZSwgaXNTb2Z0KSB7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBpc1NvZnQgPyBcIlxcdTAwMWJbMzNtXCIgOiBcIlxcdTAwMWJbMzFtXCI7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oY29sb3IgKyBtZXNzYWdlICsgXCJcXHUwMDFiWzBtXFxuXCIpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIXV0aWwuaXNOb2RlICYmIHR5cGVvZiAobmV3IEVycm9yKCkuc3RhY2spID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGlzU29mdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiJWNcIiArIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NvZnQgPyBcImNvbG9yOiBkYXJrb3JhbmdlXCIgOiBcImNvbG9yOiByZWRcIik7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG52YXIgY29uZmlnID0ge1xuICAgIHdhcm5pbmdzOiB3YXJuaW5ncyxcbiAgICBsb25nU3RhY2tUcmFjZXM6IGZhbHNlLFxuICAgIGNhbmNlbGxhdGlvbjogZmFsc2UsXG4gICAgbW9uaXRvcmluZzogZmFsc2Vcbn07XG5cbmlmIChsb25nU3RhY2tUcmFjZXMpIFByb21pc2UubG9uZ1N0YWNrVHJhY2VzKCk7XG5cbnJldHVybiB7XG4gICAgbG9uZ1N0YWNrVHJhY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5sb25nU3RhY2tUcmFjZXM7XG4gICAgfSxcbiAgICB3YXJuaW5nczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25maWcud2FybmluZ3M7XG4gICAgfSxcbiAgICBjYW5jZWxsYXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uZmlnLmNhbmNlbGxhdGlvbjtcbiAgICB9LFxuICAgIG1vbml0b3Jpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uZmlnLm1vbml0b3Jpbmc7XG4gICAgfSxcbiAgICBwcm9wYWdhdGVGcm9tRnVuY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvcGFnYXRlRnJvbUZ1bmN0aW9uO1xuICAgIH0sXG4gICAgYm91bmRWYWx1ZUZ1bmN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kVmFsdWVGdW5jdGlvbjtcbiAgICB9LFxuICAgIGNoZWNrRm9yZ290dGVuUmV0dXJuczogY2hlY2tGb3Jnb3R0ZW5SZXR1cm5zLFxuICAgIHNldEJvdW5kczogc2V0Qm91bmRzLFxuICAgIHdhcm46IHdhcm4sXG4gICAgZGVwcmVjYXRlZDogZGVwcmVjYXRlZCxcbiAgICBDYXB0dXJlZFRyYWNlOiBDYXB0dXJlZFRyYWNlLFxuICAgIGZpcmVEb21FdmVudDogZmlyZURvbUV2ZW50LFxuICAgIGZpcmVHbG9iYWxFdmVudDogZmlyZUdsb2JhbEV2ZW50XG59O1xufTtcblxufSx7XCIuL2Vycm9yc1wiOjEyLFwiLi91dGlsXCI6MzZ9XSwxMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xuZnVuY3Rpb24gcmV0dXJuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59XG5mdW5jdGlvbiB0aHJvd2VyKCkge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZVtcInJldHVyblwiXSA9XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuUmV0dXJuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkgdmFsdWUuc3VwcHJlc3NVbmhhbmRsZWRSZWplY3Rpb25zKCk7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgIHJldHVybmVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwge3ZhbHVlOiB2YWx1ZX0sIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZVtcInRocm93XCJdID1cblByb21pc2UucHJvdG90eXBlLnRoZW5UaHJvdyA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgdGhyb3dlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHtyZWFzb246IHJlYXNvbn0sIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaFRocm93ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICB1bmRlZmluZWQsIHRocm93ZXIsIHVuZGVmaW5lZCwge3JlYXNvbjogcmVhc29ufSwgdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3JlYXNvbiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHt0aHJvdyBfcmVhc29uO307XG4gICAgICAgIHJldHVybiB0aGlzLmNhdWdodChyZWFzb24sIGhhbmRsZXIpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhdGNoUmV0dXJuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB2YWx1ZS5zdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICB1bmRlZmluZWQsIHJldHVybmVyLCB1bmRlZmluZWQsIHt2YWx1ZTogdmFsdWV9LCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgIGlmIChfdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSBfdmFsdWUuc3VwcHJlc3NVbmhhbmRsZWRSZWplY3Rpb25zKCk7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oKSB7cmV0dXJuIF92YWx1ZTt9O1xuICAgICAgICByZXR1cm4gdGhpcy5jYXVnaHQodmFsdWUsIGhhbmRsZXIpO1xuICAgIH1cbn07XG59O1xuXG59LHt9XSwxMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBQcm9taXNlUmVkdWNlID0gUHJvbWlzZS5yZWR1Y2U7XG52YXIgUHJvbWlzZUFsbCA9IFByb21pc2UuYWxsO1xuXG5mdW5jdGlvbiBwcm9taXNlQWxsVGhpcygpIHtcbiAgICByZXR1cm4gUHJvbWlzZUFsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gUHJvbWlzZU1hcFNlcmllcyhwcm9taXNlcywgZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZShwcm9taXNlcywgZm4sIElOVEVSTkFMLCBJTlRFUk5BTCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZSh0aGlzLCBmbiwgSU5URVJOQUwsIDApXG4gICAgICAgICAgICAgIC5fdGhlbihwcm9taXNlQWxsVGhpcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXBTZXJpZXMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZSh0aGlzLCBmbiwgSU5URVJOQUwsIElOVEVSTkFMKTtcbn07XG5cblByb21pc2UuZWFjaCA9IGZ1bmN0aW9uIChwcm9taXNlcywgZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZShwcm9taXNlcywgZm4sIElOVEVSTkFMLCAwKVxuICAgICAgICAgICAgICAuX3RoZW4ocHJvbWlzZUFsbFRoaXMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwcm9taXNlcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UubWFwU2VyaWVzID0gUHJvbWlzZU1hcFNlcmllcztcbn07XG5cblxufSx7fV0sMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZXM1ID0gX2RlcmVxXyhcIi4vZXM1XCIpO1xudmFyIE9iamVjdGZyZWV6ZSA9IGVzNS5mcmVlemU7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgaW5oZXJpdHMgPSB1dGlsLmluaGVyaXRzO1xudmFyIG5vdEVudW1lcmFibGVQcm9wID0gdXRpbC5ub3RFbnVtZXJhYmxlUHJvcDtcblxuZnVuY3Rpb24gc3ViRXJyb3IobmFtZVByb3BlcnR5LCBkZWZhdWx0TWVzc2FnZSkge1xuICAgIGZ1bmN0aW9uIFN1YkVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFN1YkVycm9yKSkgcmV0dXJuIG5ldyBTdWJFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJtZXNzYWdlXCIsXG4gICAgICAgICAgICB0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIiA/IG1lc3NhZ2UgOiBkZWZhdWx0TWVzc2FnZSk7XG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwibmFtZVwiLCBuYW1lUHJvcGVydHkpO1xuICAgICAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbmhlcml0cyhTdWJFcnJvciwgRXJyb3IpO1xuICAgIHJldHVybiBTdWJFcnJvcjtcbn1cblxudmFyIF9UeXBlRXJyb3IsIF9SYW5nZUVycm9yO1xudmFyIFdhcm5pbmcgPSBzdWJFcnJvcihcIldhcm5pbmdcIiwgXCJ3YXJuaW5nXCIpO1xudmFyIENhbmNlbGxhdGlvbkVycm9yID0gc3ViRXJyb3IoXCJDYW5jZWxsYXRpb25FcnJvclwiLCBcImNhbmNlbGxhdGlvbiBlcnJvclwiKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBzdWJFcnJvcihcIlRpbWVvdXRFcnJvclwiLCBcInRpbWVvdXQgZXJyb3JcIik7XG52YXIgQWdncmVnYXRlRXJyb3IgPSBzdWJFcnJvcihcIkFnZ3JlZ2F0ZUVycm9yXCIsIFwiYWdncmVnYXRlIGVycm9yXCIpO1xudHJ5IHtcbiAgICBfVHlwZUVycm9yID0gVHlwZUVycm9yO1xuICAgIF9SYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcbn0gY2F0Y2goZSkge1xuICAgIF9UeXBlRXJyb3IgPSBzdWJFcnJvcihcIlR5cGVFcnJvclwiLCBcInR5cGUgZXJyb3JcIik7XG4gICAgX1JhbmdlRXJyb3IgPSBzdWJFcnJvcihcIlJhbmdlRXJyb3JcIiwgXCJyYW5nZSBlcnJvclwiKTtcbn1cblxudmFyIG1ldGhvZHMgPSAoXCJqb2luIHBvcCBwdXNoIHNoaWZ0IHVuc2hpZnQgc2xpY2UgZmlsdGVyIGZvckVhY2ggc29tZSBcIiArXG4gICAgXCJldmVyeSBtYXAgaW5kZXhPZiBsYXN0SW5kZXhPZiByZWR1Y2UgcmVkdWNlUmlnaHQgc29ydCByZXZlcnNlXCIpLnNwbGl0KFwiIFwiKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHR5cGVvZiBBcnJheS5wcm90b3R5cGVbbWV0aG9kc1tpXV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBBZ2dyZWdhdGVFcnJvci5wcm90b3R5cGVbbWV0aG9kc1tpXV0gPSBBcnJheS5wcm90b3R5cGVbbWV0aG9kc1tpXV07XG4gICAgfVxufVxuXG5lczUuZGVmaW5lUHJvcGVydHkoQWdncmVnYXRlRXJyb3IucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XG4gICAgdmFsdWU6IDAsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG59KTtcbkFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZVtcImlzT3BlcmF0aW9uYWxcIl0gPSB0cnVlO1xudmFyIGxldmVsID0gMDtcbkFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmRlbnQgPSBBcnJheShsZXZlbCAqIDQgKyAxKS5qb2luKFwiIFwiKTtcbiAgICB2YXIgcmV0ID0gXCJcXG5cIiArIGluZGVudCArIFwiQWdncmVnYXRlRXJyb3Igb2Y6XCIgKyBcIlxcblwiO1xuICAgIGxldmVsKys7XG4gICAgaW5kZW50ID0gQXJyYXkobGV2ZWwgKiA0ICsgMSkuam9pbihcIiBcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBzdHIgPSB0aGlzW2ldID09PSB0aGlzID8gXCJbQ2lyY3VsYXIgQWdncmVnYXRlRXJyb3JdXCIgOiB0aGlzW2ldICsgXCJcIjtcbiAgICAgICAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBsaW5lc1tqXSA9IGluZGVudCArIGxpbmVzW2pdO1xuICAgICAgICB9XG4gICAgICAgIHN0ciA9IGxpbmVzLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIHJldCArPSBzdHIgKyBcIlxcblwiO1xuICAgIH1cbiAgICBsZXZlbC0tO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBPcGVyYXRpb25hbEVycm9yKG1lc3NhZ2UpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgT3BlcmF0aW9uYWxFcnJvcikpXG4gICAgICAgIHJldHVybiBuZXcgT3BlcmF0aW9uYWxFcnJvcihtZXNzYWdlKTtcbiAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm5hbWVcIiwgXCJPcGVyYXRpb25hbEVycm9yXCIpO1xuICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICB0aGlzLmNhdXNlID0gbWVzc2FnZTtcbiAgICB0aGlzW1wiaXNPcGVyYXRpb25hbFwiXSA9IHRydWU7XG5cbiAgICBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwibWVzc2FnZVwiLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcInN0YWNrXCIsIG1lc3NhZ2Uuc3RhY2spO1xuICAgIH0gZWxzZSBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG59XG5pbmhlcml0cyhPcGVyYXRpb25hbEVycm9yLCBFcnJvcik7XG5cbnZhciBlcnJvclR5cGVzID0gRXJyb3JbXCJfX0JsdWViaXJkRXJyb3JUeXBlc19fXCJdO1xuaWYgKCFlcnJvclR5cGVzKSB7XG4gICAgZXJyb3JUeXBlcyA9IE9iamVjdGZyZWV6ZSh7XG4gICAgICAgIENhbmNlbGxhdGlvbkVycm9yOiBDYW5jZWxsYXRpb25FcnJvcixcbiAgICAgICAgVGltZW91dEVycm9yOiBUaW1lb3V0RXJyb3IsXG4gICAgICAgIE9wZXJhdGlvbmFsRXJyb3I6IE9wZXJhdGlvbmFsRXJyb3IsXG4gICAgICAgIFJlamVjdGlvbkVycm9yOiBPcGVyYXRpb25hbEVycm9yLFxuICAgICAgICBBZ2dyZWdhdGVFcnJvcjogQWdncmVnYXRlRXJyb3JcbiAgICB9KTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkoRXJyb3IsIFwiX19CbHVlYmlyZEVycm9yVHlwZXNfX1wiLCB7XG4gICAgICAgIHZhbHVlOiBlcnJvclR5cGVzLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEVycm9yOiBFcnJvcixcbiAgICBUeXBlRXJyb3I6IF9UeXBlRXJyb3IsXG4gICAgUmFuZ2VFcnJvcjogX1JhbmdlRXJyb3IsXG4gICAgQ2FuY2VsbGF0aW9uRXJyb3I6IGVycm9yVHlwZXMuQ2FuY2VsbGF0aW9uRXJyb3IsXG4gICAgT3BlcmF0aW9uYWxFcnJvcjogZXJyb3JUeXBlcy5PcGVyYXRpb25hbEVycm9yLFxuICAgIFRpbWVvdXRFcnJvcjogZXJyb3JUeXBlcy5UaW1lb3V0RXJyb3IsXG4gICAgQWdncmVnYXRlRXJyb3I6IGVycm9yVHlwZXMuQWdncmVnYXRlRXJyb3IsXG4gICAgV2FybmluZzogV2FybmluZ1xufTtcblxufSx7XCIuL2VzNVwiOjEzLFwiLi91dGlsXCI6MzZ9XSwxMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgaXNFUzUgPSAoZnVuY3Rpb24oKXtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICByZXR1cm4gdGhpcyA9PT0gdW5kZWZpbmVkO1xufSkoKTtcblxuaWYgKGlzRVM1KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGZyZWV6ZTogT2JqZWN0LmZyZWV6ZSxcbiAgICAgICAgZGVmaW5lUHJvcGVydHk6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgICAgICAgZ2V0RGVzY3JpcHRvcjogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgICAgICAga2V5czogT2JqZWN0LmtleXMsXG4gICAgICAgIG5hbWVzOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICAgICAgZ2V0UHJvdG90eXBlT2Y6IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNBcnJheTogQXJyYXkuaXNBcnJheSxcbiAgICAgICAgaXNFUzU6IGlzRVM1LFxuICAgICAgICBwcm9wZXJ0eUlzV3JpdGFibGU6IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgICAgICAgICByZXR1cm4gISEoIWRlc2NyaXB0b3IgfHwgZGVzY3JpcHRvci53cml0YWJsZSB8fCBkZXNjcmlwdG9yLnNldCk7XG4gICAgICAgIH1cbiAgICB9O1xufSBlbHNlIHtcbiAgICB2YXIgaGFzID0ge30uaGFzT3duUHJvcGVydHk7XG4gICAgdmFyIHN0ciA9IHt9LnRvU3RyaW5nO1xuICAgIHZhciBwcm90byA9IHt9LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxuICAgIHZhciBPYmplY3RLZXlzID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbykge1xuICAgICAgICAgICAgaWYgKGhhcy5jYWxsKG8sIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIHZhciBPYmplY3RHZXREZXNjcmlwdG9yID0gZnVuY3Rpb24obywga2V5KSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IG9ba2V5XX07XG4gICAgfTtcblxuICAgIHZhciBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvLCBrZXksIGRlc2MpIHtcbiAgICAgICAgb1trZXldID0gZGVzYy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHZhciBPYmplY3RGcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIHZhciBPYmplY3RHZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qob2JqKS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQXJyYXlJc0FycmF5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGlzQXJyYXk6IEFycmF5SXNBcnJheSxcbiAgICAgICAga2V5czogT2JqZWN0S2V5cyxcbiAgICAgICAgbmFtZXM6IE9iamVjdEtleXMsXG4gICAgICAgIGRlZmluZVByb3BlcnR5OiBPYmplY3REZWZpbmVQcm9wZXJ0eSxcbiAgICAgICAgZ2V0RGVzY3JpcHRvcjogT2JqZWN0R2V0RGVzY3JpcHRvcixcbiAgICAgICAgZnJlZXplOiBPYmplY3RGcmVlemUsXG4gICAgICAgIGdldFByb3RvdHlwZU9mOiBPYmplY3RHZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNFUzU6IGlzRVM1LFxuICAgICAgICBwcm9wZXJ0eUlzV3JpdGFibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG59LHt9XSwxNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBQcm9taXNlTWFwID0gUHJvbWlzZS5tYXA7XG5cblByb21pc2UucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBQcm9taXNlTWFwKHRoaXMsIGZuLCBvcHRpb25zLCBJTlRFUk5BTCk7XG59O1xuXG5Qcm9taXNlLmZpbHRlciA9IGZ1bmN0aW9uIChwcm9taXNlcywgZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gUHJvbWlzZU1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIElOVEVSTkFMKTtcbn07XG59O1xuXG59LHt9XSwxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgdHJ5Q29udmVydFRvUHJvbWlzZSwgTkVYVF9GSUxURVIpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IFByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3I7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGNhdGNoRmlsdGVyID0gX2RlcmVxXyhcIi4vY2F0Y2hfZmlsdGVyXCIpKE5FWFRfRklMVEVSKTtcblxuZnVuY3Rpb24gUGFzc1Rocm91Z2hIYW5kbGVyQ29udGV4dChwcm9taXNlLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5jYWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhbmNlbFByb21pc2UgPSBudWxsO1xufVxuXG5QYXNzVGhyb3VnaEhhbmRsZXJDb250ZXh0LnByb3RvdHlwZS5pc0ZpbmFsbHlIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gMDtcbn07XG5cbmZ1bmN0aW9uIEZpbmFsbHlIYW5kbGVyQ2FuY2VsUmVhY3Rpb24oZmluYWxseUhhbmRsZXIpIHtcbiAgICB0aGlzLmZpbmFsbHlIYW5kbGVyID0gZmluYWxseUhhbmRsZXI7XG59XG5cbkZpbmFsbHlIYW5kbGVyQ2FuY2VsUmVhY3Rpb24ucHJvdG90eXBlLl9yZXN1bHRDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICBjaGVja0NhbmNlbCh0aGlzLmZpbmFsbHlIYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrQ2FuY2VsKGN0eCwgcmVhc29uKSB7XG4gICAgaWYgKGN0eC5jYW5jZWxQcm9taXNlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjdHguY2FuY2VsUHJvbWlzZS5fcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguY2FuY2VsUHJvbWlzZS5fY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmNhbmNlbFByb21pc2UgPSBudWxsO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdWNjZWVkKCkge1xuICAgIHJldHVybiBmaW5hbGx5SGFuZGxlci5jYWxsKHRoaXMsIHRoaXMucHJvbWlzZS5fdGFyZ2V0KCkuX3NldHRsZWRWYWx1ZSgpKTtcbn1cbmZ1bmN0aW9uIGZhaWwocmVhc29uKSB7XG4gICAgaWYgKGNoZWNrQ2FuY2VsKHRoaXMsIHJlYXNvbikpIHJldHVybjtcbiAgICBlcnJvck9iai5lID0gcmVhc29uO1xuICAgIHJldHVybiBlcnJvck9iajtcbn1cbmZ1bmN0aW9uIGZpbmFsbHlIYW5kbGVyKHJlYXNvbk9yVmFsdWUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICB2YXIgaGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcblxuICAgIGlmICghdGhpcy5jYWxsZWQpIHtcbiAgICAgICAgdGhpcy5jYWxsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgcmV0ID0gdGhpcy5pc0ZpbmFsbHlIYW5kbGVyKClcbiAgICAgICAgICAgID8gaGFuZGxlci5jYWxsKHByb21pc2UuX2JvdW5kVmFsdWUoKSlcbiAgICAgICAgICAgIDogaGFuZGxlci5jYWxsKHByb21pc2UuX2JvdW5kVmFsdWUoKSwgcmVhc29uT3JWYWx1ZSk7XG4gICAgICAgIGlmIChyZXQgPT09IE5FWFRfRklMVEVSKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2UgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9zZXRSZXR1cm5lZE5vblVuZGVmaW5lZCgpO1xuICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmV0LCBwcm9taXNlKTtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuY2VsUHJvbWlzZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuX2lzQ2FuY2VsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDYW5jZWxsYXRpb25FcnJvcihcImxhdGUgY2FuY2VsbGF0aW9uIG9ic2VydmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShyZWFzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JPYmouZSA9IHJlYXNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fYXR0YWNoQ2FuY2VsbGF0aW9uQ2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEZpbmFsbHlIYW5kbGVyQ2FuY2VsUmVhY3Rpb24odGhpcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVByb21pc2UuX3RoZW4oXG4gICAgICAgICAgICAgICAgICAgIHN1Y2NlZWQsIGZhaWwsIHVuZGVmaW5lZCwgdGhpcywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICBjaGVja0NhbmNlbCh0aGlzKTtcbiAgICAgICAgZXJyb3JPYmouZSA9IHJlYXNvbk9yVmFsdWU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja0NhbmNlbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHJlYXNvbk9yVmFsdWU7XG4gICAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5fcGFzc1Rocm91Z2ggPSBmdW5jdGlvbihoYW5kbGVyLCB0eXBlLCBzdWNjZXNzLCBmYWlsKSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0aGlzLnRoZW4oKTtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihzdWNjZXNzLFxuICAgICAgICAgICAgICAgICAgICAgIGZhaWwsXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBQYXNzVGhyb3VnaEhhbmRsZXJDb250ZXh0KHRoaXMsIHR5cGUsIGhhbmRsZXIpLFxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5sYXN0bHkgPVxuUHJvbWlzZS5wcm90b3R5cGVbXCJmaW5hbGx5XCJdID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc1Rocm91Z2goaGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseUhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHlIYW5kbGVyKTtcbn07XG5cblxuUHJvbWlzZS5wcm90b3R5cGUudGFwID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc1Rocm91Z2goaGFuZGxlciwgMSwgZmluYWxseUhhbmRsZXIpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGFwQ2F0Y2ggPSBmdW5jdGlvbiAoaGFuZGxlck9yUHJlZGljYXRlKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYobGVuID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaChoYW5kbGVyT3JQcmVkaWNhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseUhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICB2YXIgY2F0Y2hJbnN0YW5jZXMgPSBuZXcgQXJyYXkobGVuIC0gMSksXG4gICAgICAgICAgICBqID0gMCwgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbiAtIDE7ICsraSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBpZiAodXRpbC5pc09iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgICAgIGNhdGNoSW5zdGFuY2VzW2orK10gPSBpdGVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgXCJ0YXBDYXRjaCBzdGF0ZW1lbnQgcHJlZGljYXRlOiBcIlxuICAgICAgICAgICAgICAgICAgICArIFwiZXhwZWN0aW5nIGFuIG9iamVjdCBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhpdGVtKVxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoSW5zdGFuY2VzLmxlbmd0aCA9IGo7XG4gICAgICAgIHZhciBoYW5kbGVyID0gYXJndW1lbnRzW2ldO1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFzc1Rocm91Z2goY2F0Y2hGaWx0ZXIoY2F0Y2hJbnN0YW5jZXMsIGhhbmRsZXIsIHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHlIYW5kbGVyKTtcbiAgICB9XG5cbn07XG5cbnJldHVybiBQYXNzVGhyb3VnaEhhbmRsZXJDb250ZXh0O1xufTtcblxufSx7XCIuL2NhdGNoX2ZpbHRlclwiOjcsXCIuL3V0aWxcIjozNn1dLDE2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlSZWplY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIElOVEVSTkFMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm94eWFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKSB7XG52YXIgZXJyb3JzID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpO1xudmFyIFR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciB5aWVsZEhhbmRsZXJzID0gW107XG5cbmZ1bmN0aW9uIHByb21pc2VGcm9tWWllbGRIYW5kbGVyKHZhbHVlLCB5aWVsZEhhbmRsZXJzLCB0cmFjZVBhcmVudCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeWllbGRIYW5kbGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICB0cmFjZVBhcmVudC5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHlpZWxkSGFuZGxlcnNbaV0pKHZhbHVlKTtcbiAgICAgICAgdHJhY2VQYXJlbnQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgIHRyYWNlUGFyZW50Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICAgICAgdmFyIHJldCA9IFByb21pc2UucmVqZWN0KGVycm9yT2JqLmUpO1xuICAgICAgICAgICAgdHJhY2VQYXJlbnQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmVzdWx0LCB0cmFjZVBhcmVudCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gUHJvbWlzZVNwYXduKGdlbmVyYXRvckZ1bmN0aW9uLCByZWNlaXZlciwgeWllbGRIYW5kbGVyLCBzdGFjaykge1xuICAgIGlmIChkZWJ1Zy5jYW5jZWxsYXRpb24oKSkge1xuICAgICAgICB2YXIgaW50ZXJuYWwgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHZhciBfZmluYWxseVByb21pc2UgPSB0aGlzLl9maW5hbGx5UHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IGludGVybmFsLmxhc3RseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfZmluYWxseVByb21pc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBpbnRlcm5hbC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICAgICAgaW50ZXJuYWwuX3NldE9uQ2FuY2VsKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB9XG4gICAgdGhpcy5fc3RhY2sgPSBzdGFjaztcbiAgICB0aGlzLl9nZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvckZ1bmN0aW9uO1xuICAgIHRoaXMuX3JlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgdGhpcy5fZ2VuZXJhdG9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3lpZWxkSGFuZGxlcnMgPSB0eXBlb2YgeWllbGRIYW5kbGVyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBbeWllbGRIYW5kbGVyXS5jb25jYXQoeWllbGRIYW5kbGVycylcbiAgICAgICAgOiB5aWVsZEhhbmRsZXJzO1xuICAgIHRoaXMuX3lpZWxkZWRQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLl9jYW5jZWxsYXRpb25QaGFzZSA9IGZhbHNlO1xufVxudXRpbC5pbmhlcml0cyhQcm9taXNlU3Bhd24sIFByb3h5YWJsZSk7XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX2lzUmVzb2x2ZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZSA9PT0gbnVsbDtcbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX2NsZWFudXAgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9wcm9taXNlID0gdGhpcy5fZ2VuZXJhdG9yID0gbnVsbDtcbiAgICBpZiAoZGVidWcuY2FuY2VsbGF0aW9uKCkgJiYgdGhpcy5fZmluYWxseVByb21pc2UgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZmluYWxseVByb21pc2UuX2Z1bGZpbGwoKTtcbiAgICAgICAgdGhpcy5fZmluYWxseVByb21pc2UgPSBudWxsO1xuICAgIH1cbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3Byb21pc2VDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdmFyIGltcGxlbWVudHNSZXR1cm4gPSB0eXBlb2YgdGhpcy5fZ2VuZXJhdG9yW1wicmV0dXJuXCJdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoIWltcGxlbWVudHNSZXR1cm4pIHtcbiAgICAgICAgdmFyIHJlYXNvbiA9IG5ldyBQcm9taXNlLkNhbmNlbGxhdGlvbkVycm9yKFxuICAgICAgICAgICAgXCJnZW5lcmF0b3IgLnJldHVybigpIHNlbnRpbmVsXCIpO1xuICAgICAgICBQcm9taXNlLmNvcm91dGluZS5yZXR1cm5TZW50aW5lbCA9IHJlYXNvbjtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShyZWFzb24pO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgICAgICByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9nZW5lcmF0b3JbXCJ0aHJvd1wiXSkuY2FsbCh0aGlzLl9nZW5lcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb24pO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9wb3BDb250ZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5fZ2VuZXJhdG9yW1wicmV0dXJuXCJdKS5jYWxsKHRoaXMuX2dlbmVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9wb3BDb250ZXh0KCk7XG4gICAgfVxuICAgIHRoaXMuX2NhbmNlbGxhdGlvblBoYXNlID0gdHJ1ZTtcbiAgICB0aGlzLl95aWVsZGVkUHJvbWlzZSA9IG51bGw7XG4gICAgdGhpcy5fY29udGludWUocmVzdWx0KTtcbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX3lpZWxkZWRQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9nZW5lcmF0b3IubmV4dCkuY2FsbCh0aGlzLl9nZW5lcmF0b3IsIHZhbHVlKTtcbiAgICB0aGlzLl9wcm9taXNlLl9wb3BDb250ZXh0KCk7XG4gICAgdGhpcy5fY29udGludWUocmVzdWx0KTtcbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9IGZ1bmN0aW9uKHJlYXNvbikge1xuICAgIHRoaXMuX3lpZWxkZWRQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgdGhpcy5fcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5fZ2VuZXJhdG9yW1widGhyb3dcIl0pXG4gICAgICAgIC5jYWxsKHRoaXMuX2dlbmVyYXRvciwgcmVhc29uKTtcbiAgICB0aGlzLl9wcm9taXNlLl9wb3BDb250ZXh0KCk7XG4gICAgdGhpcy5fY29udGludWUocmVzdWx0KTtcbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl95aWVsZGVkUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl95aWVsZGVkUHJvbWlzZTtcbiAgICAgICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBudWxsO1xuICAgICAgICBwcm9taXNlLmNhbmNlbCgpO1xuICAgIH1cbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3J1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9nZW5lcmF0b3IgPSB0aGlzLl9nZW5lcmF0b3JGdW5jdGlvbi5jYWxsKHRoaXMuX3JlY2VpdmVyKTtcbiAgICB0aGlzLl9yZWNlaXZlciA9XG4gICAgICAgIHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQodW5kZWZpbmVkKTtcbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX2NvbnRpbnVlID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZTtcbiAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgIGlmICh0aGlzLl9jYW5jZWxsYXRpb25QaGFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UuY2FuY2VsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVzdWx0LmUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICBpZiAocmVzdWx0LmRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgICBpZiAodGhpcy5fY2FuY2VsbGF0aW9uUGhhc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLmNhbmNlbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UuX3Jlc29sdmVDYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh2YWx1ZSwgdGhpcy5fcHJvbWlzZSk7XG4gICAgICAgIGlmICghKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UgPVxuICAgICAgICAgICAgICAgIHByb21pc2VGcm9tWWllbGRIYW5kbGVyKG1heWJlUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl95aWVsZEhhbmRsZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb21pc2UpO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb21pc2VSZWplY3RlZChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQSB2YWx1ZSAlcyB3YXMgeWllbGRlZCB0aGF0IGNvdWxkIG5vdCBiZSB0cmVhdGVkIGFzIGEgcHJvbWlzZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcXHUwMDBhXCIucmVwbGFjZShcIiVzXCIsIFN0cmluZyh2YWx1ZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJvbSBjb3JvdXRpbmU6XFx1MDAwYVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDEsIC03KS5qb2luKFwiXFxuXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICB2YXIgYml0RmllbGQgPSBtYXliZVByb21pc2UuX2JpdEZpZWxkO1xuICAgICAgICA7XG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBtYXliZVByb21pc2U7XG4gICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5KHRoaXMsIG51bGwpO1xuICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICBQcm9taXNlLl9hc3luYy5pbnZva2UoXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCwgdGhpcywgbWF5YmVQcm9taXNlLl92YWx1ZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApKSB7XG4gICAgICAgICAgICBQcm9taXNlLl9hc3luYy5pbnZva2UoXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZVJlamVjdGVkLCB0aGlzLCBtYXliZVByb21pc2UuX3JlYXNvbigpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcHJvbWlzZUNhbmNlbGxlZCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5jb3JvdXRpbmUgPSBmdW5jdGlvbiAoZ2VuZXJhdG9yRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGdlbmVyYXRvckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImdlbmVyYXRvckZ1bmN0aW9uIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHZhciB5aWVsZEhhbmRsZXIgPSBPYmplY3Qob3B0aW9ucykueWllbGRIYW5kbGVyO1xuICAgIHZhciBQcm9taXNlU3Bhd24kID0gUHJvbWlzZVNwYXduO1xuICAgIHZhciBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnZW5lcmF0b3IgPSBnZW5lcmF0b3JGdW5jdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgc3Bhd24gPSBuZXcgUHJvbWlzZVNwYXduJCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgeWllbGRIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjayk7XG4gICAgICAgIHZhciByZXQgPSBzcGF3bi5wcm9taXNlKCk7XG4gICAgICAgIHNwYXduLl9nZW5lcmF0b3IgPSBnZW5lcmF0b3I7XG4gICAgICAgIHNwYXduLl9wcm9taXNlRnVsZmlsbGVkKHVuZGVmaW5lZCk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn07XG5cblByb21pc2UuY29yb3V0aW5lLmFkZFlpZWxkSGFuZGxlciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cbiAgICB5aWVsZEhhbmRsZXJzLnB1c2goZm4pO1xufTtcblxuUHJvbWlzZS5zcGF3biA9IGZ1bmN0aW9uIChnZW5lcmF0b3JGdW5jdGlvbikge1xuICAgIGRlYnVnLmRlcHJlY2F0ZWQoXCJQcm9taXNlLnNwYXduKClcIiwgXCJQcm9taXNlLmNvcm91dGluZSgpXCIpO1xuICAgIGlmICh0eXBlb2YgZ2VuZXJhdG9yRnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZ2VuZXJhdG9yRnVuY3Rpb24gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdmFyIHNwYXduID0gbmV3IFByb21pc2VTcGF3bihnZW5lcmF0b3JGdW5jdGlvbiwgdGhpcyk7XG4gICAgdmFyIHJldCA9IHNwYXduLnByb21pc2UoKTtcbiAgICBzcGF3bi5fcnVuKFByb21pc2Uuc3Bhd24pO1xuICAgIHJldHVybiByZXQ7XG59O1xufTtcblxufSx7XCIuL2Vycm9yc1wiOjEyLFwiLi91dGlsXCI6MzZ9XSwxNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgdHJ5Q29udmVydFRvUHJvbWlzZSwgSU5URVJOQUwsIGFzeW5jLFxuICAgICAgICAgZ2V0RG9tYWluKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgcmVqZWN0O1xuXG5pZiAoIXRydWUpIHtcbmlmIChjYW5FdmFsdWF0ZSkge1xuICAgIHZhciB0aGVuQ2FsbGJhY2sgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJ2YWx1ZVwiLCBcImhvbGRlclwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5wSW5kZXggPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5jaGVja0Z1bGZpbGxtZW50KHRoaXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL0luZGV4L2csIGkpKTtcbiAgICB9O1xuXG4gICAgdmFyIHByb21pc2VTZXR0ZXIgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJwcm9taXNlXCIsIFwiaG9sZGVyXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5wSW5kZXggPSBwcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL0luZGV4L2csIGkpKTtcbiAgICB9O1xuXG4gICAgdmFyIGdlbmVyYXRlSG9sZGVyQ2xhc3MgPSBmdW5jdGlvbih0b3RhbCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBuZXcgQXJyYXkodG90YWwpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBwcm9wc1tpXSA9IFwidGhpcy5wXCIgKyAoaSsxKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXNzaWdubWVudCA9IHByb3BzLmpvaW4oXCIgPSBcIikgKyBcIiA9IG51bGw7XCI7XG4gICAgICAgIHZhciBjYW5jZWxsYXRpb25Db2RlPSBcInZhciBwcm9taXNlO1xcblwiICsgcHJvcHMubWFwKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IFwiICsgcHJvcCArIFwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9KS5qb2luKFwiXFxuXCIpO1xuICAgICAgICB2YXIgcGFzc2VkQXJndW1lbnRzID0gcHJvcHMuam9pbihcIiwgXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IFwiSG9sZGVyJFwiICsgdG90YWw7XG5cblxuICAgICAgICB2YXIgY29kZSA9IFwicmV0dXJuIGZ1bmN0aW9uKHRyeUNhdGNoLCBlcnJvck9iaiwgUHJvbWlzZSwgYXN5bmMpIHsgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGZ1bmN0aW9uIFtUaGVOYW1lXShmbikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBbVGhlUHJvcGVydGllc10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB0aGlzLmZuID0gZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB0aGlzLmFzeW5jTmVlZGVkID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB0aGlzLm5vdyA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFtUaGVOYW1lXS5wcm90b3R5cGUuX2NhbGxGdW5jdGlvbiA9IGZ1bmN0aW9uKHByb21pc2UpIHsgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9wdXNoQ29udGV4dCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2godGhpcy5mbikoW1RoZVBhc3NlZEFyZ3VtZW50c10pOyAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9wb3BDb250ZXh0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmV0LmUsIGZhbHNlKTsgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHJldCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFtUaGVOYW1lXS5wcm90b3R5cGUuY2hlY2tGdWxmaWxsbWVudCA9IGZ1bmN0aW9uKHByb21pc2UpIHsgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gKyt0aGlzLm5vdzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBpZiAobm93ID09PSBbVGhlVG90YWxdKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXN5bmNOZWVkZWQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9jYWxsRnVuY3Rpb24sIHRoaXMsIHByb21pc2UpOyAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxGdW5jdGlvbihwcm9taXNlKTsgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFtUaGVOYW1lXS5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkgeyAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBbQ2FuY2VsbGF0aW9uQ29kZV0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBbVGhlTmFtZV07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfSh0cnlDYXRjaCwgZXJyb3JPYmosIFByb21pc2UsIGFzeW5jKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCI7XG5cbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvXFxbVGhlTmFtZVxcXS9nLCBuYW1lKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcW1RoZVRvdGFsXFxdL2csIHRvdGFsKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcW1RoZVBhc3NlZEFyZ3VtZW50c1xcXS9nLCBwYXNzZWRBcmd1bWVudHMpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxbVGhlUHJvcGVydGllc1xcXS9nLCBhc3NpZ25tZW50KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcW0NhbmNlbGxhdGlvbkNvZGVcXF0vZywgY2FuY2VsbGF0aW9uQ29kZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInRyeUNhdGNoXCIsIFwiZXJyb3JPYmpcIiwgXCJQcm9taXNlXCIsIFwiYXN5bmNcIiwgY29kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICh0cnlDYXRjaCwgZXJyb3JPYmosIFByb21pc2UsIGFzeW5jKTtcbiAgICB9O1xuXG4gICAgdmFyIGhvbGRlckNsYXNzZXMgPSBbXTtcbiAgICB2YXIgdGhlbkNhbGxiYWNrcyA9IFtdO1xuICAgIHZhciBwcm9taXNlU2V0dGVycyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyArK2kpIHtcbiAgICAgICAgaG9sZGVyQ2xhc3Nlcy5wdXNoKGdlbmVyYXRlSG9sZGVyQ2xhc3MoaSArIDEpKTtcbiAgICAgICAgdGhlbkNhbGxiYWNrcy5wdXNoKHRoZW5DYWxsYmFjayhpICsgMSkpO1xuICAgICAgICBwcm9taXNlU2V0dGVycy5wdXNoKHByb21pc2VTZXR0ZXIoaSArIDEpKTtcbiAgICB9XG5cbiAgICByZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xuICAgIH07XG59fVxuXG5Qcm9taXNlLmpvaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxhc3QgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICB2YXIgZm47XG4gICAgaWYgKGxhc3QgPiAwICYmIHR5cGVvZiBhcmd1bWVudHNbbGFzdF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBmbiA9IGFyZ3VtZW50c1tsYXN0XTtcbiAgICAgICAgaWYgKCF0cnVlKSB7XG4gICAgICAgICAgICBpZiAobGFzdCA8PSA4ICYmIGNhbkV2YWx1YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgICAgICAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIEhvbGRlckNsYXNzID0gaG9sZGVyQ2xhc3Nlc1tsYXN0IC0gMV07XG4gICAgICAgICAgICAgICAgdmFyIGhvbGRlciA9IG5ldyBIb2xkZXJDbGFzcyhmbik7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoZW5DYWxsYmFja3M7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3Q7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShhcmd1bWVudHNbaV0sIHJldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJpdEZpZWxkID0gbWF5YmVQcm9taXNlLl9iaXRGaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdGhlbihjYWxsYmFja3NbaV0sIHJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCByZXQsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVNldHRlcnNbaV0obWF5YmVQcm9taXNlLCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGRlci5hc3luY05lZWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5jYWxsKHJldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3ZhbHVlKCksIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0Ll9yZWplY3QobWF5YmVQcm9taXNlLl9yZWFzb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5fY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uY2FsbChyZXQsIG1heWJlUHJvbWlzZSwgaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghcmV0Ll9pc0ZhdGVTZWFsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaG9sZGVyLmFzeW5jTmVlZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZGVyLmZuID0gdXRpbC5kb21haW5CaW5kKGRvbWFpbiwgaG9sZGVyLmZuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXQuX3NldEFzeW5jR3VhcmFudGVlZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXQuX3NldE9uQ2FuY2VsKGhvbGRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7O1xuICAgIGlmIChmbikgYXJncy5wb3AoKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VBcnJheShhcmdzKS5wcm9taXNlKCk7XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyByZXQuc3ByZWFkKGZuKSA6IHJldDtcbn07XG5cbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwxODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZUFycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlSZWplY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUNvbnZlcnRUb1Byb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIElOVEVSTkFMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zykge1xudmFyIGdldERvbWFpbiA9IFByb21pc2UuX2dldERvbWFpbjtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGFzeW5jID0gUHJvbWlzZS5fYXN5bmM7XG5cbmZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBsaW1pdCwgX2ZpbHRlcikge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHByb21pc2VzKTtcbiAgICB0aGlzLl9wcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHZhciBkb21haW4gPSBnZXREb21haW4oKTtcbiAgICB0aGlzLl9jYWxsYmFjayA9IGRvbWFpbiA9PT0gbnVsbCA/IGZuIDogdXRpbC5kb21haW5CaW5kKGRvbWFpbiwgZm4pO1xuICAgIHRoaXMuX3ByZXNlcnZlZFZhbHVlcyA9IF9maWx0ZXIgPT09IElOVEVSTkFMXG4gICAgICAgID8gbmV3IEFycmF5KHRoaXMubGVuZ3RoKCkpXG4gICAgICAgIDogbnVsbDtcbiAgICB0aGlzLl9saW1pdCA9IGxpbWl0O1xuICAgIHRoaXMuX2luRmxpZ2h0ID0gMDtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIGFzeW5jLmludm9rZSh0aGlzLl9hc3luY0luaXQsIHRoaXMsIHVuZGVmaW5lZCk7XG59XG51dGlsLmluaGVyaXRzKE1hcHBpbmdQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9hc3luY0luaXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC0yKTtcbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge307XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdmFyIHByZXNlcnZlZFZhbHVlcyA9IHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPSAoaW5kZXggKiAtMSkgLSAxO1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmIChsaW1pdCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pbkZsaWdodC0tO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5RdWV1ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGltaXQgPj0gMSAmJiB0aGlzLl9pbkZsaWdodCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcXVldWUucHVzaChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbCkgcHJlc2VydmVkVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHByb21pc2UuX2JvdW5kVmFsdWUoKTtcbiAgICAgICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoKGNhbGxiYWNrKS5jYWxsKHJlY2VpdmVyLCB2YWx1ZSwgaW5kZXgsIGxlbmd0aCk7XG4gICAgICAgIHZhciBwcm9taXNlQ3JlYXRlZCA9IHByb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICAgICAgZGVidWcuY2hlY2tGb3Jnb3R0ZW5SZXR1cm5zKFxuICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgcHJvbWlzZUNyZWF0ZWQsXG4gICAgICAgICAgICBwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGwgPyBcIlByb21pc2UuZmlsdGVyXCIgOiBcIlByb21pc2UubWFwXCIsXG4gICAgICAgICAgICBwcm9taXNlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QocmV0LmUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShyZXQsIHRoaXMuX3Byb21pc2UpO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlID0gbWF5YmVQcm9taXNlLl90YXJnZXQoKTtcbiAgICAgICAgICAgIHZhciBiaXRGaWVsZCA9IG1heWJlUHJvbWlzZS5fYml0RmllbGQ7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZiAoKChiaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGltaXQgPj0gMSkgdGhpcy5faW5GbGlnaHQrKztcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gbWF5YmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fcHJveHkodGhpcywgKGluZGV4ICsgMSkgKiAtMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIHJldCA9IG1heWJlUHJvbWlzZS5fdmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWplY3QobWF5YmVQcm9taXNlLl9yZWFzb24oKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSByZXQ7XG4gICAgfVxuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IGxlbmd0aCkge1xuICAgICAgICBpZiAocHJlc2VydmVkVmFsdWVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXIodmFsdWVzLCBwcmVzZXJ2ZWRWYWx1ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZHJhaW5RdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX2luRmxpZ2h0IDwgbGltaXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaW5kZXggPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZXNbaW5kZXhdLCBpbmRleCk7XG4gICAgfVxufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2ZpbHRlciA9IGZ1bmN0aW9uIChib29sZWFucywgdmFsdWVzKSB7XG4gICAgdmFyIGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShsZW4pO1xuICAgIHZhciBqID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGlmIChib29sZWFuc1tpXSkgcmV0W2orK10gPSB2YWx1ZXNbaV07XG4gICAgfVxuICAgIHJldC5sZW5ndGggPSBqO1xuICAgIHRoaXMuX3Jlc29sdmUocmV0KTtcbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLnByZXNlcnZlZFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlc2VydmVkVmFsdWVzO1xufTtcblxuZnVuY3Rpb24gbWFwKHByb21pc2VzLCBmbiwgb3B0aW9ucywgX2ZpbHRlcikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICB9XG5cbiAgICB2YXIgbGltaXQgPSAwO1xuICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb25jdXJyZW5jeSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFR5cGVFcnJvcihcIidjb25jdXJyZW5jeScgbXVzdCBiZSBhIG51bWJlciBidXQgaXQgaXMgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5jbGFzc1N0cmluZyhvcHRpb25zLmNvbmN1cnJlbmN5KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXQgPSBvcHRpb25zLmNvbmN1cnJlbmN5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zIGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0IGJ1dCBpdCBpcyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuY2xhc3NTdHJpbmcob3B0aW9ucykpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaW1pdCA9IHR5cGVvZiBsaW1pdCA9PT0gXCJudW1iZXJcIiAmJlxuICAgICAgICBpc0Zpbml0ZShsaW1pdCkgJiYgbGltaXQgPj0gMSA/IGxpbWl0IDogMDtcbiAgICByZXR1cm4gbmV3IE1hcHBpbmdQcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBsaW1pdCwgX2ZpbHRlcikucHJvbWlzZSgpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbWFwKHRoaXMsIGZuLCBvcHRpb25zLCBudWxsKTtcbn07XG5cblByb21pc2UubWFwID0gZnVuY3Rpb24gKHByb21pc2VzLCBmbiwgb3B0aW9ucywgX2ZpbHRlcikge1xuICAgIHJldHVybiBtYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKTtcbn07XG5cblxufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDE5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbiwgZGVidWcpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG5cblByb21pc2UubWV0aG9kID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBQcm9taXNlLlR5cGVFcnJvcihcImV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGZuKSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICAgICAgcmV0Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDYXRjaChmbikuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIHByb21pc2VDcmVhdGVkID0gcmV0Ll9wb3BDb250ZXh0KCk7XG4gICAgICAgIGRlYnVnLmNoZWNrRm9yZ290dGVuUmV0dXJucyhcbiAgICAgICAgICAgIHZhbHVlLCBwcm9taXNlQ3JlYXRlZCwgXCJQcm9taXNlLm1ldGhvZFwiLCByZXQpO1xuICAgICAgICByZXQuX3Jlc29sdmVGcm9tU3luY1ZhbHVlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufTtcblxuUHJvbWlzZS5hdHRlbXB0ID0gUHJvbWlzZVtcInRyeVwiXSA9IGZ1bmN0aW9uIChmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgcmV0Ll9wdXNoQ29udGV4dCgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZGVidWcuZGVwcmVjYXRlZChcImNhbGxpbmcgUHJvbWlzZS50cnkgd2l0aCBtb3JlIHRoYW4gMSBhcmd1bWVudFwiKTtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgdmFyIGN0eCA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgdmFsdWUgPSB1dGlsLmlzQXJyYXkoYXJnKSA/IHRyeUNhdGNoKGZuKS5hcHBseShjdHgsIGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRyeUNhdGNoKGZuKS5jYWxsKGN0eCwgYXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRyeUNhdGNoKGZuKSgpO1xuICAgIH1cbiAgICB2YXIgcHJvbWlzZUNyZWF0ZWQgPSByZXQuX3BvcENvbnRleHQoKTtcbiAgICBkZWJ1Zy5jaGVja0ZvcmdvdHRlblJldHVybnMoXG4gICAgICAgIHZhbHVlLCBwcm9taXNlQ3JlYXRlZCwgXCJQcm9taXNlLnRyeVwiLCByZXQpO1xuICAgIHJldC5fcmVzb2x2ZUZyb21TeW5jVmFsdWUodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVzb2x2ZUZyb21TeW5jVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHV0aWwuZXJyb3JPYmopIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0Q2FsbGJhY2sodmFsdWUuZSwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVDYWxsYmFjayh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxufTtcbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwyMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBtYXliZVdyYXBBc0Vycm9yID0gdXRpbC5tYXliZVdyYXBBc0Vycm9yO1xudmFyIGVycm9ycyA9IF9kZXJlcV8oXCIuL2Vycm9yc1wiKTtcbnZhciBPcGVyYXRpb25hbEVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG52YXIgZXM1ID0gX2RlcmVxXyhcIi4vZXM1XCIpO1xuXG5mdW5jdGlvbiBpc1VudHlwZWRFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgZXM1LmdldFByb3RvdHlwZU9mKG9iaikgPT09IEVycm9yLnByb3RvdHlwZTtcbn1cblxudmFyIHJFcnJvcktleSA9IC9eKD86bmFtZXxtZXNzYWdlfHN0YWNrfGNhdXNlKSQvO1xuZnVuY3Rpb24gd3JhcEFzT3BlcmF0aW9uYWxFcnJvcihvYmopIHtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChpc1VudHlwZWRFcnJvcihvYmopKSB7XG4gICAgICAgIHJldCA9IG5ldyBPcGVyYXRpb25hbEVycm9yKG9iaik7XG4gICAgICAgIHJldC5uYW1lID0gb2JqLm5hbWU7XG4gICAgICAgIHJldC5tZXNzYWdlID0gb2JqLm1lc3NhZ2U7XG4gICAgICAgIHJldC5zdGFjayA9IG9iai5zdGFjaztcbiAgICAgICAgdmFyIGtleXMgPSBlczUua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFyRXJyb3JLZXkudGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICB1dGlsLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihvYmopO1xuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlLCBtdWx0aUFyZ3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXJyLCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvbWlzZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZCA9IHdyYXBBc09wZXJhdGlvbmFsRXJyb3IobWF5YmVXcmFwQXNFcnJvcihlcnIpKTtcbiAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2Uod3JhcHBlZCk7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3Qod3JhcHBlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW11bHRpQXJncykge1xuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTs7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsKGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZWJhY2tGb3JQcm9taXNlO1xuXG59LHtcIi4vZXJyb3JzXCI6MTIsXCIuL2VzNVwiOjEzLFwiLi91dGlsXCI6MzZ9XSwyMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIGFzeW5jID0gUHJvbWlzZS5fYXN5bmM7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcblxuZnVuY3Rpb24gc3ByZWFkQWRhcHRlcih2YWwsIG5vZGViYWNrKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIGlmICghdXRpbC5pc0FycmF5KHZhbCkpIHJldHVybiBzdWNjZXNzQWRhcHRlci5jYWxsKHByb21pc2UsIHZhbCwgbm9kZWJhY2spO1xuICAgIHZhciByZXQgPVxuICAgICAgICB0cnlDYXRjaChub2RlYmFjaykuYXBwbHkocHJvbWlzZS5fYm91bmRWYWx1ZSgpLCBbbnVsbF0uY29uY2F0KHZhbCkpO1xuICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIocmV0LmUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3VjY2Vzc0FkYXB0ZXIodmFsLCBub2RlYmFjaykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB2YXIgcmVjZWl2ZXIgPSBwcm9taXNlLl9ib3VuZFZhbHVlKCk7XG4gICAgdmFyIHJldCA9IHZhbCA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gdHJ5Q2F0Y2gobm9kZWJhY2spLmNhbGwocmVjZWl2ZXIsIG51bGwpXG4gICAgICAgIDogdHJ5Q2F0Y2gobm9kZWJhY2spLmNhbGwocmVjZWl2ZXIsIG51bGwsIHZhbCk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihyZXQuZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZXJyb3JBZGFwdGVyKHJlYXNvbiwgbm9kZWJhY2spIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgICAgdmFyIG5ld1JlYXNvbiA9IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICAgICAgbmV3UmVhc29uLmNhdXNlID0gcmVhc29uO1xuICAgICAgICByZWFzb24gPSBuZXdSZWFzb247XG4gICAgfVxuICAgIHZhciByZXQgPSB0cnlDYXRjaChub2RlYmFjaykuY2FsbChwcm9taXNlLl9ib3VuZFZhbHVlKCksIHJlYXNvbik7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihyZXQuZSk7XG4gICAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5hc0NhbGxiYWNrID0gUHJvbWlzZS5wcm90b3R5cGUubm9kZWlmeSA9IGZ1bmN0aW9uIChub2RlYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG5vZGViYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgYWRhcHRlciA9IHN1Y2Nlc3NBZGFwdGVyO1xuICAgICAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIE9iamVjdChvcHRpb25zKS5zcHJlYWQpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIgPSBzcHJlYWRBZGFwdGVyO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICBhZGFwdGVyLFxuICAgICAgICAgICAgZXJyb3JBZGFwdGVyLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIG5vZGViYWNrXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwyMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG52YXIgbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJjaXJjdWxhciBwcm9taXNlIHJlc29sdXRpb24gY2hhaW5cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xufTtcbnZhciByZWZsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbih0aGlzLl90YXJnZXQoKSk7XG59O1xudmFyIGFwaVJlamVjdGlvbiA9IGZ1bmN0aW9uKG1zZykge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKG1zZykpO1xufTtcbmZ1bmN0aW9uIFByb3h5YWJsZSgpIHt9XG52YXIgVU5ERUZJTkVEX0JJTkRJTkcgPSB7fTtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcblxudmFyIGdldERvbWFpbjtcbmlmICh1dGlsLmlzTm9kZSkge1xuICAgIGdldERvbWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmV0ID0gcHJvY2Vzcy5kb21haW47XG4gICAgICAgIGlmIChyZXQgPT09IHVuZGVmaW5lZCkgcmV0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBnZXREb21haW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbn1cbnV0aWwubm90RW51bWVyYWJsZVByb3AoUHJvbWlzZSwgXCJfZ2V0RG9tYWluXCIsIGdldERvbWFpbik7XG5cbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczVcIik7XG52YXIgQXN5bmMgPSBfZGVyZXFfKFwiLi9hc3luY1wiKTtcbnZhciBhc3luYyA9IG5ldyBBc3luYygpO1xuZXM1LmRlZmluZVByb3BlcnR5KFByb21pc2UsIFwiX2FzeW5jXCIsIHt2YWx1ZTogYXN5bmN9KTtcbnZhciBlcnJvcnMgPSBfZGVyZXFfKFwiLi9lcnJvcnNcIik7XG52YXIgVHlwZUVycm9yID0gUHJvbWlzZS5UeXBlRXJyb3IgPSBlcnJvcnMuVHlwZUVycm9yO1xuUHJvbWlzZS5SYW5nZUVycm9yID0gZXJyb3JzLlJhbmdlRXJyb3I7XG52YXIgQ2FuY2VsbGF0aW9uRXJyb3IgPSBQcm9taXNlLkNhbmNlbGxhdGlvbkVycm9yID0gZXJyb3JzLkNhbmNlbGxhdGlvbkVycm9yO1xuUHJvbWlzZS5UaW1lb3V0RXJyb3IgPSBlcnJvcnMuVGltZW91dEVycm9yO1xuUHJvbWlzZS5PcGVyYXRpb25hbEVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG5Qcm9taXNlLlJlamVjdGlvbkVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG5Qcm9taXNlLkFnZ3JlZ2F0ZUVycm9yID0gZXJyb3JzLkFnZ3JlZ2F0ZUVycm9yO1xudmFyIElOVEVSTkFMID0gZnVuY3Rpb24oKXt9O1xudmFyIEFQUExZID0ge307XG52YXIgTkVYVF9GSUxURVIgPSB7fTtcbnZhciB0cnlDb252ZXJ0VG9Qcm9taXNlID0gX2RlcmVxXyhcIi4vdGhlbmFibGVzXCIpKFByb21pc2UsIElOVEVSTkFMKTtcbnZhciBQcm9taXNlQXJyYXkgPVxuICAgIF9kZXJlcV8oXCIuL3Byb21pc2VfYXJyYXlcIikoUHJvbWlzZSwgSU5URVJOQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCBQcm94eWFibGUpO1xudmFyIENvbnRleHQgPSBfZGVyZXFfKFwiLi9jb250ZXh0XCIpKFByb21pc2UpO1xuIC8qanNoaW50IHVudXNlZDpmYWxzZSovXG52YXIgY3JlYXRlQ29udGV4dCA9IENvbnRleHQuY3JlYXRlO1xudmFyIGRlYnVnID0gX2RlcmVxXyhcIi4vZGVidWdnYWJpbGl0eVwiKShQcm9taXNlLCBDb250ZXh0KTtcbnZhciBDYXB0dXJlZFRyYWNlID0gZGVidWcuQ2FwdHVyZWRUcmFjZTtcbnZhciBQYXNzVGhyb3VnaEhhbmRsZXJDb250ZXh0ID1cbiAgICBfZGVyZXFfKFwiLi9maW5hbGx5XCIpKFByb21pc2UsIHRyeUNvbnZlcnRUb1Byb21pc2UsIE5FWFRfRklMVEVSKTtcbnZhciBjYXRjaEZpbHRlciA9IF9kZXJlcV8oXCIuL2NhdGNoX2ZpbHRlclwiKShORVhUX0ZJTFRFUik7XG52YXIgbm9kZWJhY2tGb3JQcm9taXNlID0gX2RlcmVxXyhcIi4vbm9kZWJhY2tcIik7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbmZ1bmN0aW9uIGNoZWNrKHNlbGYsIGV4ZWN1dG9yKSB7XG4gICAgaWYgKHNlbGYgPT0gbnVsbCB8fCBzZWxmLmNvbnN0cnVjdG9yICE9PSBQcm9taXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgaW52b2tlZCBkaXJlY3RseVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZXhlY3V0b3IpKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGlmIChleGVjdXRvciAhPT0gSU5URVJOQUwpIHtcbiAgICAgICAgY2hlY2sodGhpcywgZXhlY3V0b3IpO1xuICAgIH1cbiAgICB0aGlzLl9iaXRGaWVsZCA9IDA7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wcm9taXNlMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZWNlaXZlcjAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVzb2x2ZUZyb21FeGVjdXRvcihleGVjdXRvcik7XG4gICAgdGhpcy5fcHJvbWlzZUNyZWF0ZWQoKTtcbiAgICB0aGlzLl9maXJlRXZlbnQoXCJwcm9taXNlQ3JlYXRlZFwiLCB0aGlzKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBQcm9taXNlXVwiO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2F1Z2h0ID0gUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgIHZhciBjYXRjaEluc3RhbmNlcyA9IG5ldyBBcnJheShsZW4gLSAxKSxcbiAgICAgICAgICAgIGogPSAwLCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuIC0gMTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGlmICh1dGlsLmlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY2F0Y2hJbnN0YW5jZXNbaisrXSA9IGl0ZW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJDYXRjaCBzdGF0ZW1lbnQgcHJlZGljYXRlOiBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiZXhwZWN0aW5nIGFuIG9iamVjdCBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhpdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2hJbnN0YW5jZXMubGVuZ3RoID0gajtcbiAgICAgICAgZm4gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBjYXRjaEZpbHRlcihjYXRjaEluc3RhbmNlcywgZm4sIHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIGZuKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnJlZmxlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4ocmVmbGVjdEhhbmRsZXIsXG4gICAgICAgIHJlZmxlY3RIYW5kbGVyLCB1bmRlZmluZWQsIHRoaXMsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCkge1xuICAgIGlmIChkZWJ1Zy53YXJuaW5ncygpICYmIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgIHR5cGVvZiBkaWRGdWxmaWxsICE9PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgdHlwZW9mIGRpZFJlamVjdCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBtc2cgPSBcIi50aGVuKCkgb25seSBhY2NlcHRzIGZ1bmN0aW9ucyBidXQgd2FzIHBhc3NlZDogXCIgK1xuICAgICAgICAgICAgICAgIHV0aWwuY2xhc3NTdHJpbmcoZGlkRnVsZmlsbCk7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbXNnICs9IFwiLCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZGlkUmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl93YXJuKG1zZyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCkge1xuICAgIHZhciBwcm9taXNlID1cbiAgICAgICAgdGhpcy5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHByb21pc2UuX3NldElzRmluYWwoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNwcmVhZCA9IGZ1bmN0aW9uIChmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWxsKCkuX3RoZW4oZm4sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBBUFBMWSwgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmV0ID0ge1xuICAgICAgICBpc0Z1bGZpbGxlZDogZmFsc2UsXG4gICAgICAgIGlzUmVqZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBmdWxmaWxsbWVudFZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIHJlamVjdGlvblJlYXNvbjogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAodGhpcy5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIHJldC5mdWxmaWxsbWVudFZhbHVlID0gdGhpcy52YWx1ZSgpO1xuICAgICAgICByZXQuaXNGdWxmaWxsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgcmV0LnJlamVjdGlvblJlYXNvbiA9IHRoaXMucmVhc29uKCk7XG4gICAgICAgIHJldC5pc1JlamVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fd2FybihcIi5hbGwoKSB3YXMgcGFzc2VkIGFyZ3VtZW50cyBidXQgaXQgZG9lcyBub3QgdGFrZSBhbnlcIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZUFycmF5KHRoaXMpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F1Z2h0KHV0aWwub3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sIGZuKTtcbn07XG5cblByb21pc2UuZ2V0TmV3TGlicmFyeUNvcHkgPSBtb2R1bGUuZXhwb3J0cztcblxuUHJvbWlzZS5pcyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsIGluc3RhbmNlb2YgUHJvbWlzZTtcbn07XG5cblByb21pc2UuZnJvbU5vZGUgPSBQcm9taXNlLmZyb21DYWxsYmFjayA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdmFyIG11bHRpQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gISFPYmplY3QoYXJndW1lbnRzWzFdKS5tdWx0aUFyZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2goZm4pKG5vZGViYWNrRm9yUHJvbWlzZShyZXQsIG11bHRpQXJncykpO1xuICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHJldC5fcmVqZWN0Q2FsbGJhY2socmVzdWx0LmUsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoIXJldC5faXNGYXRlU2VhbGVkKCkpIHJldC5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UuYWxsID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQXJyYXkocHJvbWlzZXMpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UuY2FzdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgcmV0ID0gdHJ5Q29udmVydFRvUHJvbWlzZShvYmopO1xuICAgIGlmICghKHJldCBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICByZXQuX3NldEZ1bGZpbGxlZCgpO1xuICAgICAgICByZXQuX3JlamVjdGlvbkhhbmRsZXIwID0gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5yZXNvbHZlID0gUHJvbWlzZS5mdWxmaWxsZWQgPSBQcm9taXNlLmNhc3Q7XG5cblByb21pc2UucmVqZWN0ID0gUHJvbWlzZS5yZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICByZXQuX3JlamVjdENhbGxiYWNrKHJlYXNvbiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2Uuc2V0U2NoZWR1bGVyID0gZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGZuKSk7XG4gICAgfVxuICAgIHJldHVybiBhc3luYy5zZXRTY2hlZHVsZXIoZm4pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3RoZW4gPSBmdW5jdGlvbiAoXG4gICAgZGlkRnVsZmlsbCxcbiAgICBkaWRSZWplY3QsXG4gICAgXywgICAgcmVjZWl2ZXIsXG4gICAgaW50ZXJuYWxEYXRhXG4pIHtcbiAgICB2YXIgaGF2ZUludGVybmFsRGF0YSA9IGludGVybmFsRGF0YSAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBwcm9taXNlID0gaGF2ZUludGVybmFsRGF0YSA/IGludGVybmFsRGF0YSA6IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG4gICAgdmFyIGJpdEZpZWxkID0gdGFyZ2V0Ll9iaXRGaWVsZDtcblxuICAgIGlmICghaGF2ZUludGVybmFsRGF0YSkge1xuICAgICAgICBwcm9taXNlLl9wcm9wYWdhdGVGcm9tKHRoaXMsIDMpO1xuICAgICAgICBwcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICBpZiAocmVjZWl2ZXIgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgKCh0aGlzLl9iaXRGaWVsZCAmIDIwOTcxNTIpICE9PSAwKSkge1xuICAgICAgICAgICAgaWYgKCEoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyID0gdGhpcy5fYm91bmRWYWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHRhcmdldCA9PT0gdGhpcyA/IHVuZGVmaW5lZCA6IHRoaXMuX2JvdW5kVG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlyZUV2ZW50KFwicHJvbWlzZUNoYWluZWRcIiwgdGhpcywgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgdmFyIGRvbWFpbiA9IGdldERvbWFpbigpO1xuICAgIGlmICghKChiaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMCkpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIsIHZhbHVlLCBzZXR0bGVyID0gdGFyZ2V0Ll9zZXR0bGVQcm9taXNlQ3R4O1xuICAgICAgICBpZiAoKChiaXRGaWVsZCAmIDMzNTU0NDMyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0Ll9yZWplY3Rpb25IYW5kbGVyMDtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBkaWRGdWxmaWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldC5fZnVsZmlsbG1lbnRIYW5kbGVyMDtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBkaWRSZWplY3Q7XG4gICAgICAgICAgICB0YXJnZXQuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRsZXIgPSB0YXJnZXQuX3NldHRsZVByb21pc2VMYXRlQ2FuY2VsbGF0aW9uT2JzZXJ2ZXI7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBDYW5jZWxsYXRpb25FcnJvcihcImxhdGUgY2FuY2VsbGF0aW9uIG9ic2VydmVyXCIpO1xuICAgICAgICAgICAgdGFyZ2V0Ll9hdHRhY2hFeHRyYVRyYWNlKHZhbHVlKTtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBkaWRSZWplY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYy5pbnZva2Uoc2V0dGxlciwgdGFyZ2V0LCB7XG4gICAgICAgICAgICBoYW5kbGVyOiBkb21haW4gPT09IG51bGwgPyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgOiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICB1dGlsLmRvbWFpbkJpbmQoZG9tYWluLCBoYW5kbGVyKSksXG4gICAgICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICAgICAgcmVjZWl2ZXI6IHJlY2VpdmVyLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldC5fYWRkQ2FsbGJhY2tzKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgcHJvbWlzZSwgcmVjZWl2ZXIsIGRvbWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9iaXRGaWVsZCAmIDY1NTM1O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRmF0ZVNlYWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTE3NTA2MDQ4KSAhPT0gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0ZvbGxvd2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNjcxMDg4NjQpID09PSA2NzEwODg2NDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRMZW5ndGggPSBmdW5jdGlvbiAobGVuKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSAodGhpcy5fYml0RmllbGQgJiAtNjU1MzYpIHxcbiAgICAgICAgKGxlbiAmIDY1NTM1KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGdWxmaWxsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDMzNTU0NDMyO1xuICAgIHRoaXMuX2ZpcmVFdmVudChcInByb21pc2VGdWxmaWxsZWRcIiwgdGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UmVqZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDE2Nzc3MjE2O1xuICAgIHRoaXMuX2ZpcmVFdmVudChcInByb21pc2VSZWplY3RlZFwiLCB0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGb2xsb3dpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDY3MTA4ODY0O1xuICAgIHRoaXMuX2ZpcmVFdmVudChcInByb21pc2VSZXNvbHZlZFwiLCB0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRJc0ZpbmFsID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA0MTk0MzA0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRmluYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDQxOTQzMDQpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjY1NTM2KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNjU1MzY7XG4gICAgdGhpcy5fZmlyZUV2ZW50KFwicHJvbWlzZUNhbmNlbGxlZFwiLCB0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRXaWxsQmVDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgODM4ODYwODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRBc3luY0d1YXJhbnRlZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoYXN5bmMuaGFzQ3VzdG9tU2NoZWR1bGVyKCkpIHJldHVybjtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTM0MjE3NzI4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlY2VpdmVyQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB2YXIgcmV0ID0gaW5kZXggPT09IDAgPyB0aGlzLl9yZWNlaXZlcjAgOiB0aGlzW1xuICAgICAgICAgICAgaW5kZXggKiA0IC0gNCArIDNdO1xuICAgIGlmIChyZXQgPT09IFVOREVGSU5FRF9CSU5ESU5HKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIGlmIChyZXQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9pc0JvdW5kKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kVmFsdWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9taXNlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpc1tcbiAgICAgICAgICAgIGluZGV4ICogNCAtIDQgKyAyXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsbWVudEhhbmRsZXJBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB0aGlzW1xuICAgICAgICAgICAgaW5kZXggKiA0IC0gNCArIDBdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdGlvbkhhbmRsZXJBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB0aGlzW1xuICAgICAgICAgICAgaW5kZXggKiA0IC0gNCArIDFdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2JvdW5kVmFsdWUgPSBmdW5jdGlvbigpIHt9O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbWlncmF0ZUNhbGxiYWNrMCA9IGZ1bmN0aW9uIChmb2xsb3dlcikge1xuICAgIHZhciBiaXRGaWVsZCA9IGZvbGxvd2VyLl9iaXRGaWVsZDtcbiAgICB2YXIgZnVsZmlsbCA9IGZvbGxvd2VyLl9mdWxmaWxsbWVudEhhbmRsZXIwO1xuICAgIHZhciByZWplY3QgPSBmb2xsb3dlci5fcmVqZWN0aW9uSGFuZGxlcjA7XG4gICAgdmFyIHByb21pc2UgPSBmb2xsb3dlci5fcHJvbWlzZTA7XG4gICAgdmFyIHJlY2VpdmVyID0gZm9sbG93ZXIuX3JlY2VpdmVyQXQoMCk7XG4gICAgaWYgKHJlY2VpdmVyID09PSB1bmRlZmluZWQpIHJlY2VpdmVyID0gVU5ERUZJTkVEX0JJTkRJTkc7XG4gICAgdGhpcy5fYWRkQ2FsbGJhY2tzKGZ1bGZpbGwsIHJlamVjdCwgcHJvbWlzZSwgcmVjZWl2ZXIsIG51bGwpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX21pZ3JhdGVDYWxsYmFja0F0ID0gZnVuY3Rpb24gKGZvbGxvd2VyLCBpbmRleCkge1xuICAgIHZhciBmdWxmaWxsID0gZm9sbG93ZXIuX2Z1bGZpbGxtZW50SGFuZGxlckF0KGluZGV4KTtcbiAgICB2YXIgcmVqZWN0ID0gZm9sbG93ZXIuX3JlamVjdGlvbkhhbmRsZXJBdChpbmRleCk7XG4gICAgdmFyIHByb21pc2UgPSBmb2xsb3dlci5fcHJvbWlzZUF0KGluZGV4KTtcbiAgICB2YXIgcmVjZWl2ZXIgPSBmb2xsb3dlci5fcmVjZWl2ZXJBdChpbmRleCk7XG4gICAgaWYgKHJlY2VpdmVyID09PSB1bmRlZmluZWQpIHJlY2VpdmVyID0gVU5ERUZJTkVEX0JJTkRJTkc7XG4gICAgdGhpcy5fYWRkQ2FsbGJhY2tzKGZ1bGZpbGwsIHJlamVjdCwgcHJvbWlzZSwgcmVjZWl2ZXIsIG51bGwpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2FkZENhbGxiYWNrcyA9IGZ1bmN0aW9uIChcbiAgICBmdWxmaWxsLFxuICAgIHJlamVjdCxcbiAgICBwcm9taXNlLFxuICAgIHJlY2VpdmVyLFxuICAgIGRvbWFpblxuKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fbGVuZ3RoKCk7XG5cbiAgICBpZiAoaW5kZXggPj0gNjU1MzUgLSA0KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9wcm9taXNlMCA9IHByb21pc2U7XG4gICAgICAgIHRoaXMuX3JlY2VpdmVyMCA9IHJlY2VpdmVyO1xuICAgICAgICBpZiAodHlwZW9mIGZ1bGZpbGwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gZnVsZmlsbCA6IHV0aWwuZG9tYWluQmluZChkb21haW4sIGZ1bGZpbGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwID1cbiAgICAgICAgICAgICAgICBkb21haW4gPT09IG51bGwgPyByZWplY3QgOiB1dGlsLmRvbWFpbkJpbmQoZG9tYWluLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJhc2UgPSBpbmRleCAqIDQgLSA0O1xuICAgICAgICB0aGlzW2Jhc2UgKyAyXSA9IHByb21pc2U7XG4gICAgICAgIHRoaXNbYmFzZSArIDNdID0gcmVjZWl2ZXI7XG4gICAgICAgIGlmICh0eXBlb2YgZnVsZmlsbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzW2Jhc2UgKyAwXSA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gZnVsZmlsbCA6IHV0aWwuZG9tYWluQmluZChkb21haW4sIGZ1bGZpbGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXNbYmFzZSArIDFdID1cbiAgICAgICAgICAgICAgICBkb21haW4gPT09IG51bGwgPyByZWplY3QgOiB1dGlsLmRvbWFpbkJpbmQoZG9tYWluLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xuICAgIHJldHVybiBpbmRleDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm94eSA9IGZ1bmN0aW9uIChwcm94eWFibGUsIGFyZykge1xuICAgIHRoaXMuX2FkZENhbGxiYWNrcyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJnLCBwcm94eWFibGUsIG51bGwpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc29sdmVDYWxsYmFjayA9IGZ1bmN0aW9uKHZhbHVlLCBzaG91bGRCaW5kKSB7XG4gICAgaWYgKCgodGhpcy5fYml0RmllbGQgJiAxMTc1MDYwNDgpICE9PSAwKSkgcmV0dXJuO1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcylcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdENhbGxiYWNrKG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCksIGZhbHNlKTtcbiAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh2YWx1ZSwgdGhpcyk7XG4gICAgaWYgKCEobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHJldHVybiB0aGlzLl9mdWxmaWxsKHZhbHVlKTtcblxuICAgIGlmIChzaG91bGRCaW5kKSB0aGlzLl9wcm9wYWdhdGVGcm9tKG1heWJlUHJvbWlzZSwgMik7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG5cbiAgICBpZiAocHJvbWlzZSA9PT0gdGhpcykge1xuICAgICAgICB0aGlzLl9yZWplY3QobWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYml0RmllbGQgPSBwcm9taXNlLl9iaXRGaWVsZDtcbiAgICBpZiAoKChiaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMCkpIHtcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuICAgICAgICBpZiAobGVuID4gMCkgcHJvbWlzZS5fbWlncmF0ZUNhbGxiYWNrMCh0aGlzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgcHJvbWlzZS5fbWlncmF0ZUNhbGxiYWNrQXQodGhpcywgaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2V0Rm9sbG93aW5nKCk7XG4gICAgICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICAgICAgdGhpcy5fc2V0Rm9sbG93ZWUocHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICB0aGlzLl9mdWxmaWxsKHByb21pc2UuX3ZhbHVlKCkpO1xuICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0KHByb21pc2UuX3JlYXNvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVhc29uID0gbmV3IENhbmNlbGxhdGlvbkVycm9yKFwibGF0ZSBjYW5jZWxsYXRpb24gb2JzZXJ2ZXJcIik7XG4gICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UocmVhc29uKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdENhbGxiYWNrID1cbmZ1bmN0aW9uKHJlYXNvbiwgc3luY2hyb25vdXMsIGlnbm9yZU5vbkVycm9yV2FybmluZ3MpIHtcbiAgICB2YXIgdHJhY2UgPSB1dGlsLmVuc3VyZUVycm9yT2JqZWN0KHJlYXNvbik7XG4gICAgdmFyIGhhc1N0YWNrID0gdHJhY2UgPT09IHJlYXNvbjtcbiAgICBpZiAoIWhhc1N0YWNrICYmICFpZ25vcmVOb25FcnJvcldhcm5pbmdzICYmIGRlYnVnLndhcm5pbmdzKCkpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcImEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQgd2l0aCBhIG5vbi1lcnJvcjogXCIgK1xuICAgICAgICAgICAgdXRpbC5jbGFzc1N0cmluZyhyZWFzb24pO1xuICAgICAgICB0aGlzLl93YXJuKG1lc3NhZ2UsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlLCBzeW5jaHJvbm91cyA/IGhhc1N0YWNrIDogZmFsc2UpO1xuICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc29sdmVGcm9tRXhlY3V0b3IgPSBmdW5jdGlvbiAoZXhlY3V0b3IpIHtcbiAgICBpZiAoZXhlY3V0b3IgPT09IElOVEVSTkFMKSByZXR1cm47XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHRoaXMuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdGhpcy5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgc3luY2hyb25vdXMgPSB0cnVlO1xuICAgIHZhciByID0gdGhpcy5fZXhlY3V0ZShleGVjdXRvciwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHJlYXNvbiwgc3luY2hyb25vdXMpO1xuICAgIH0pO1xuICAgIHN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgdGhpcy5fcG9wQ29udGV4dCgpO1xuXG4gICAgaWYgKHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyLCB0cnVlKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUZyb21IYW5kbGVyID0gZnVuY3Rpb24gKFxuICAgIGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZVxuKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gcHJvbWlzZS5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiA2NTUzNikgIT09IDApKSByZXR1cm47XG4gICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgeDtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEFQUExZKSB7XG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlLmxlbmd0aCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgeCA9IGVycm9yT2JqO1xuICAgICAgICAgICAgeC5lID0gbmV3IFR5cGVFcnJvcihcImNhbm5vdCAuc3ByZWFkKCkgYSBub24tYXJyYXk6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuY2xhc3NTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSB0cnlDYXRjaChoYW5kbGVyKS5hcHBseSh0aGlzLl9ib3VuZFZhbHVlKCksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSB0cnlDYXRjaChoYW5kbGVyKS5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgfVxuICAgIHZhciBwcm9taXNlQ3JlYXRlZCA9IHByb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICBiaXRGaWVsZCA9IHByb21pc2UuX2JpdEZpZWxkO1xuICAgIGlmICgoKGJpdEZpZWxkICYgNjU1MzYpICE9PSAwKSkgcmV0dXJuO1xuXG4gICAgaWYgKHggPT09IE5FWFRfRklMVEVSKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh4ID09PSBlcnJvck9iaikge1xuICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayh4LmUsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1Zy5jaGVja0ZvcmdvdHRlblJldHVybnMoeCwgcHJvbWlzZUNyZWF0ZWQsIFwiXCIsICBwcm9taXNlLCB0aGlzKTtcbiAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl90YXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gdGhpcztcbiAgICB3aGlsZSAocmV0Ll9pc0ZvbGxvd2luZygpKSByZXQgPSByZXQuX2ZvbGxvd2VlKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mb2xsb3dlZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGb2xsb3dlZSA9IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHByb21pc2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZSA9IGZ1bmN0aW9uKHByb21pc2UsIGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSkge1xuICAgIHZhciBpc1Byb21pc2UgPSBwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZTtcbiAgICB2YXIgYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZDtcbiAgICB2YXIgYXN5bmNHdWFyYW50ZWVkID0gKChiaXRGaWVsZCAmIDEzNDIxNzcyOCkgIT09IDApO1xuICAgIGlmICgoKGJpdEZpZWxkICYgNjU1MzYpICE9PSAwKSkge1xuICAgICAgICBpZiAoaXNQcm9taXNlKSBwcm9taXNlLl9pbnZva2VJbnRlcm5hbE9uQ2FuY2VsKCk7XG5cbiAgICAgICAgaWYgKHJlY2VpdmVyIGluc3RhbmNlb2YgUGFzc1Rocm91Z2hIYW5kbGVyQ29udGV4dCAmJlxuICAgICAgICAgICAgcmVjZWl2ZXIuaXNGaW5hbGx5SGFuZGxlcigpKSB7XG4gICAgICAgICAgICByZWNlaXZlci5jYW5jZWxQcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgICAgIGlmICh0cnlDYXRjaChoYW5kbGVyKS5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0KGVycm9yT2JqLmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPT09IHJlZmxlY3RIYW5kbGVyKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsKHJlZmxlY3RIYW5kbGVyLmNhbGwocmVjZWl2ZXIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb3h5YWJsZSkge1xuICAgICAgICAgICAgcmVjZWl2ZXIuX3Byb21pc2VDYW5jZWxsZWQocHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlIHx8IHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlQXJyYXkpIHtcbiAgICAgICAgICAgIHByb21pc2UuX2NhbmNlbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVjZWl2ZXIuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFpc1Byb21pc2UpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChyZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFzeW5jR3VhcmFudGVlZCkgcHJvbWlzZS5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIoaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm94eWFibGUpIHtcbiAgICAgICAgaWYgKCFyZWNlaXZlci5faXNSZXNvbHZlZCgpKSB7XG4gICAgICAgICAgICBpZiAoKChiaXRGaWVsZCAmIDMzNTU0NDMyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9taXNlUmVqZWN0ZWQodmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgaWYgKGFzeW5jR3VhcmFudGVlZCkgcHJvbWlzZS5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3QodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VMYXRlQ2FuY2VsbGF0aW9uT2JzZXJ2ZXIgPSBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgaGFuZGxlciA9IGN0eC5oYW5kbGVyO1xuICAgIHZhciBwcm9taXNlID0gY3R4LnByb21pc2U7XG4gICAgdmFyIHJlY2VpdmVyID0gY3R4LnJlY2VpdmVyO1xuICAgIHZhciB2YWx1ZSA9IGN0eC52YWx1ZTtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChyZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZUZyb21IYW5kbGVyKGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdCh2YWx1ZSk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VDdHggPSBmdW5jdGlvbihjdHgpIHtcbiAgICB0aGlzLl9zZXR0bGVQcm9taXNlKGN0eC5wcm9taXNlLCBjdHguaGFuZGxlciwgY3R4LnJlY2VpdmVyLCBjdHgudmFsdWUpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2UwID0gZnVuY3Rpb24oaGFuZGxlciwgdmFsdWUsIGJpdEZpZWxkKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlMDtcbiAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9yZWNlaXZlckF0KDApO1xuICAgIHRoaXMuX3Byb21pc2UwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3JlY2VpdmVyMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zZXR0bGVQcm9taXNlKHByb21pc2UsIGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYXJDYWxsYmFja0RhdGFBdEluZGV4ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB2YXIgYmFzZSA9IGluZGV4ICogNCAtIDQ7XG4gICAgdGhpc1tiYXNlICsgMl0gPVxuICAgIHRoaXNbYmFzZSArIDNdID1cbiAgICB0aGlzW2Jhc2UgKyAwXSA9XG4gICAgdGhpc1tiYXNlICsgMV0gPSB1bmRlZmluZWQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBiaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkO1xuICAgIGlmICgoKGJpdEZpZWxkICYgMTE3NTA2MDQ4KSA+Pj4gMTYpKSByZXR1cm47XG4gICAgaWYgKHZhbHVlID09PSB0aGlzKSB7XG4gICAgICAgIHZhciBlcnIgPSBtYWtlU2VsZlJlc29sdXRpb25FcnJvcigpO1xuICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGVycik7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QoZXJyKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0RnVsZmlsbGVkKCk7XG4gICAgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSB2YWx1ZTtcblxuICAgIGlmICgoYml0RmllbGQgJiA2NTUzNSkgPiAwKSB7XG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgMTM0MjE3NzI4KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc3luYy5zZXR0bGVQcm9taXNlcyh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gdGhpcy5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiAxMTc1MDYwNDgpID4+PiAxNikpIHJldHVybjtcbiAgICB0aGlzLl9zZXRSZWplY3RlZCgpO1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSByZWFzb247XG5cbiAgICBpZiAodGhpcy5faXNGaW5hbCgpKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5mYXRhbEVycm9yKHJlYXNvbiwgdXRpbC5pc05vZGUpO1xuICAgIH1cblxuICAgIGlmICgoYml0RmllbGQgJiA2NTUzNSkgPiAwKSB7XG4gICAgICAgIGFzeW5jLnNldHRsZVByb21pc2VzKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsUHJvbWlzZXMgPSBmdW5jdGlvbiAobGVuLCB2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXJBdChpKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlQXQoaSk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3JlY2VpdmVyQXQoaSk7XG4gICAgICAgIHRoaXMuX2NsZWFyQ2FsbGJhY2tEYXRhQXRJbmRleChpKTtcbiAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZShwcm9taXNlLCBoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3RQcm9taXNlcyA9IGZ1bmN0aW9uIChsZW4sIHJlYXNvbikge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9yZWplY3Rpb25IYW5kbGVyQXQoaSk7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZUF0KGkpO1xuICAgICAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9yZWNlaXZlckF0KGkpO1xuICAgICAgICB0aGlzLl9jbGVhckNhbGxiYWNrRGF0YUF0SW5kZXgoaSk7XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2UocHJvbWlzZSwgaGFuZGxlciwgcmVjZWl2ZXIsIHJlYXNvbik7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBiaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkO1xuICAgIHZhciBsZW4gPSAoYml0RmllbGQgJiA2NTUzNSk7XG5cbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgICBpZiAoKChiaXRGaWVsZCAmIDE2ODQyNzUyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwO1xuICAgICAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZTAodGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAsIHJlYXNvbiwgYml0RmllbGQpO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0UHJvbWlzZXMobGVuLCByZWFzb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjA7XG4gICAgICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlMCh0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwLCB2YWx1ZSwgYml0RmllbGQpO1xuICAgICAgICAgICAgdGhpcy5fZnVsZmlsbFByb21pc2VzKGxlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYXJDYW5jZWxsYXRpb25EYXRhKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlZFZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gdGhpcy5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMDtcbiAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGRlZmVyUmVzb2x2ZSh2KSB7dGhpcy5wcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodik7fVxuZnVuY3Rpb24gZGVmZXJSZWplY3Qodikge3RoaXMucHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2sodiwgZmFsc2UpO31cblxuUHJvbWlzZS5kZWZlciA9IFByb21pc2UucGVuZGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIGRlYnVnLmRlcHJlY2F0ZWQoXCJQcm9taXNlLmRlZmVyXCIsIFwibmV3IFByb21pc2VcIik7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgcmVzb2x2ZTogZGVmZXJSZXNvbHZlLFxuICAgICAgICByZWplY3Q6IGRlZmVyUmVqZWN0XG4gICAgfTtcbn07XG5cbnV0aWwubm90RW51bWVyYWJsZVByb3AoUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJfbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IpO1xuXG5fZGVyZXFfKFwiLi9tZXRob2RcIikoUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbixcbiAgICBkZWJ1Zyk7XG5fZGVyZXFfKFwiLi9iaW5kXCIpKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBkZWJ1Zyk7XG5fZGVyZXFfKFwiLi9jYW5jZWxcIikoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24sIGRlYnVnKTtcbl9kZXJlcV8oXCIuL2RpcmVjdF9yZXNvbHZlXCIpKFByb21pc2UpO1xuX2RlcmVxXyhcIi4vc3luY2hyb25vdXNfaW5zcGVjdGlvblwiKShQcm9taXNlKTtcbl9kZXJlcV8oXCIuL2pvaW5cIikoXG4gICAgUHJvbWlzZSwgUHJvbWlzZUFycmF5LCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBJTlRFUk5BTCwgYXN5bmMsIGdldERvbWFpbik7XG5Qcm9taXNlLlByb21pc2UgPSBQcm9taXNlO1xuUHJvbWlzZS52ZXJzaW9uID0gXCIzLjUuMVwiO1xuX2RlcmVxXygnLi9tYXAuanMnKShQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbiwgdHJ5Q29udmVydFRvUHJvbWlzZSwgSU5URVJOQUwsIGRlYnVnKTtcbl9kZXJlcV8oJy4vY2FsbF9nZXQuanMnKShQcm9taXNlKTtcbl9kZXJlcV8oJy4vdXNpbmcuanMnKShQcm9taXNlLCBhcGlSZWplY3Rpb24sIHRyeUNvbnZlcnRUb1Byb21pc2UsIGNyZWF0ZUNvbnRleHQsIElOVEVSTkFMLCBkZWJ1Zyk7XG5fZGVyZXFfKCcuL3RpbWVycy5qcycpKFByb21pc2UsIElOVEVSTkFMLCBkZWJ1Zyk7XG5fZGVyZXFfKCcuL2dlbmVyYXRvcnMuanMnKShQcm9taXNlLCBhcGlSZWplY3Rpb24sIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBQcm94eWFibGUsIGRlYnVnKTtcbl9kZXJlcV8oJy4vbm9kZWlmeS5qcycpKFByb21pc2UpO1xuX2RlcmVxXygnLi9wcm9taXNpZnkuanMnKShQcm9taXNlLCBJTlRFUk5BTCk7XG5fZGVyZXFfKCcuL3Byb3BzLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pO1xuX2RlcmVxXygnLi9yYWNlLmpzJykoUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbik7XG5fZGVyZXFfKCcuL3JlZHVjZS5qcycpKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBJTlRFUk5BTCwgZGVidWcpO1xuX2RlcmVxXygnLi9zZXR0bGUuanMnKShQcm9taXNlLCBQcm9taXNlQXJyYXksIGRlYnVnKTtcbl9kZXJlcV8oJy4vc29tZS5qcycpKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uKTtcbl9kZXJlcV8oJy4vZmlsdGVyLmpzJykoUHJvbWlzZSwgSU5URVJOQUwpO1xuX2RlcmVxXygnLi9lYWNoLmpzJykoUHJvbWlzZSwgSU5URVJOQUwpO1xuX2RlcmVxXygnLi9hbnkuanMnKShQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIHV0aWwudG9GYXN0UHJvcGVydGllcyhQcm9taXNlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB1dGlsLnRvRmFzdFByb3BlcnRpZXMoUHJvbWlzZS5wcm90b3R5cGUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZnVuY3Rpb24gZmlsbFR5cGVzKHZhbHVlKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcC5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHAuX3JlamVjdGlvbkhhbmRsZXIwID0gdmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBwLl9wcm9taXNlMCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcC5fcmVjZWl2ZXIwID0gdmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIC8vIENvbXBsZXRlIHNsYWNrIHRyYWNraW5nLCBvcHQgb3V0IG9mIGZpZWxkLXR5cGUgdHJhY2tpbmcgYW5kICAgICAgICAgICBcbiAgICAvLyBzdGFiaWxpemUgbWFwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKHthOiAxfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyh7YjogMn0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoe2M6IDN9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKDEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyhmdW5jdGlvbigpe30pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXModW5kZWZpbmVkKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKGZhbHNlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyhuZXcgUHJvbWlzZShJTlRFUk5BTCkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBkZWJ1Zy5zZXRCb3VuZHMoQXN5bmMuZmlyc3RMaW5lRXJyb3IsIHV0aWwubGFzdExpbmVFcnJvcik7ICAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIFByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG59O1xuXG59LHtcIi4vYW55LmpzXCI6MSxcIi4vYXN5bmNcIjoyLFwiLi9iaW5kXCI6MyxcIi4vY2FsbF9nZXQuanNcIjo1LFwiLi9jYW5jZWxcIjo2LFwiLi9jYXRjaF9maWx0ZXJcIjo3LFwiLi9jb250ZXh0XCI6OCxcIi4vZGVidWdnYWJpbGl0eVwiOjksXCIuL2RpcmVjdF9yZXNvbHZlXCI6MTAsXCIuL2VhY2guanNcIjoxMSxcIi4vZXJyb3JzXCI6MTIsXCIuL2VzNVwiOjEzLFwiLi9maWx0ZXIuanNcIjoxNCxcIi4vZmluYWxseVwiOjE1LFwiLi9nZW5lcmF0b3JzLmpzXCI6MTYsXCIuL2pvaW5cIjoxNyxcIi4vbWFwLmpzXCI6MTgsXCIuL21ldGhvZFwiOjE5LFwiLi9ub2RlYmFja1wiOjIwLFwiLi9ub2RlaWZ5LmpzXCI6MjEsXCIuL3Byb21pc2VfYXJyYXlcIjoyMyxcIi4vcHJvbWlzaWZ5LmpzXCI6MjQsXCIuL3Byb3BzLmpzXCI6MjUsXCIuL3JhY2UuanNcIjoyNyxcIi4vcmVkdWNlLmpzXCI6MjgsXCIuL3NldHRsZS5qc1wiOjMwLFwiLi9zb21lLmpzXCI6MzEsXCIuL3N5bmNocm9ub3VzX2luc3BlY3Rpb25cIjozMixcIi4vdGhlbmFibGVzXCI6MzMsXCIuL3RpbWVycy5qc1wiOjM0LFwiLi91c2luZy5qc1wiOjM1LFwiLi91dGlsXCI6MzZ9XSwyMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsXG4gICAgYXBpUmVqZWN0aW9uLCBQcm94eWFibGUpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBpc0FycmF5ID0gdXRpbC5pc0FycmF5O1xuXG5mdW5jdGlvbiB0b1Jlc29sdXRpb25WYWx1ZSh2YWwpIHtcbiAgICBzd2l0Y2godmFsKSB7XG4gICAgY2FzZSAtMjogcmV0dXJuIFtdO1xuICAgIGNhc2UgLTM6IHJldHVybiB7fTtcbiAgICBjYXNlIC02OiByZXR1cm4gbmV3IE1hcCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUHJvbWlzZUFycmF5KHZhbHVlcykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLl9wcm9wYWdhdGVGcm9tKHZhbHVlcywgMyk7XG4gICAgfVxuICAgIHByb21pc2UuX3NldE9uQ2FuY2VsKHRoaXMpO1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX3RvdGFsUmVzb2x2ZWQgPSAwO1xuICAgIHRoaXMuX2luaXQodW5kZWZpbmVkLCAtMik7XG59XG51dGlsLmluaGVyaXRzKFByb21pc2VBcnJheSwgUHJveHlhYmxlKTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiBpbml0KF8sIHJlc29sdmVWYWx1ZUlmRW1wdHkpIHtcbiAgICB2YXIgdmFsdWVzID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGlzLl92YWx1ZXMsIHRoaXMuX3Byb21pc2UpO1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5fdGFyZ2V0KCk7XG4gICAgICAgIHZhciBiaXRGaWVsZCA9IHZhbHVlcy5fYml0RmllbGQ7XG4gICAgICAgIDtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuXG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5fcHJvbWlzZS5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLl90aGVuKFxuICAgICAgICAgICAgICAgIGluaXQsXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVqZWN0LFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIHJlc29sdmVWYWx1ZUlmRW1wdHlcbiAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLl92YWx1ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0KHZhbHVlcy5fcmVhc29uKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbmNlbCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhbHVlcyA9IHV0aWwuYXNBcnJheSh2YWx1ZXMpO1xuICAgIGlmICh2YWx1ZXMgPT09IG51bGwpIHtcbiAgICAgICAgdmFyIGVyciA9IGFwaVJlamVjdGlvbihcbiAgICAgICAgICAgIFwiZXhwZWN0aW5nIGFuIGFycmF5IG9yIGFuIGl0ZXJhYmxlIG9iamVjdCBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyh2YWx1ZXMpKS5yZWFzb24oKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2soZXJyLCBmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAocmVzb2x2ZVZhbHVlSWZFbXB0eSA9PT0gLTUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVFbXB0eUFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRvUmVzb2x1dGlvblZhbHVlKHJlc29sdmVWYWx1ZUlmRW1wdHkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2l0ZXJhdGUodmFsdWVzKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX2l0ZXJhdGUgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICB2YXIgbGVuID0gdGhpcy5nZXRBY3R1YWxMZW5ndGgodmFsdWVzLmxlbmd0aCk7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuO1xuICAgIHRoaXMuX3ZhbHVlcyA9IHRoaXMuc2hvdWxkQ29weVZhbHVlcygpID8gbmV3IEFycmF5KGxlbikgOiB0aGlzLl92YWx1ZXM7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuX3Byb21pc2U7XG4gICAgdmFyIGlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB2YXIgYml0RmllbGQgPSBudWxsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UodmFsdWVzW2ldLCByZXN1bHQpO1xuXG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICAgICAgYml0RmllbGQgPSBtYXliZVByb21pc2UuX2JpdEZpZWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYml0RmllbGQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIGlmIChiaXRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5zdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChiaXRGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCgoYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9wcm94eSh0aGlzLCBpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaV0gPSBtYXliZVByb21pc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgaXNSZXNvbHZlZCA9IHRoaXMuX3Byb21pc2VGdWxmaWxsZWQobWF5YmVQcm9taXNlLl92YWx1ZSgpLCBpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpc1Jlc29sdmVkID0gdGhpcy5fcHJvbWlzZVJlamVjdGVkKG1heWJlUHJvbWlzZS5fcmVhc29uKCksIGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpc1Jlc29sdmVkID0gdGhpcy5fcHJvbWlzZUNhbmNlbGxlZChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzUmVzb2x2ZWQgPSB0aGlzLl9wcm9taXNlRnVsZmlsbGVkKG1heWJlUHJvbWlzZSwgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc1Jlc29sdmVkKSByZXN1bHQuX3NldEFzeW5jR3VhcmFudGVlZCgpO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faXNSZXNvbHZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzID09PSBudWxsO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IG51bGw7XG4gICAgdGhpcy5fcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpIHx8ICF0aGlzLl9wcm9taXNlLl9pc0NhbmNlbGxhYmxlKCkpIHJldHVybjtcbiAgICB0aGlzLl92YWx1ZXMgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX2NhbmNlbCgpO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHRoaXMuX3ZhbHVlcyA9IG51bGw7XG4gICAgdGhpcy5fcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVhc29uLCBmYWxzZSk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUNhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2NhbmNlbCgpO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHRoaXMuX3RvdGFsUmVzb2x2ZWQrKztcbiAgICB0aGlzLl9yZWplY3QocmVhc29uKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHRoaXMuX2NhbmNlbCgpO1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhbHVlcy5jYW5jZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlc1tpXSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaV0uY2FuY2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLnNob3VsZENvcHlWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLmdldEFjdHVhbExlbmd0aCA9IGZ1bmN0aW9uIChsZW4pIHtcbiAgICByZXR1cm4gbGVuO1xufTtcblxucmV0dXJuIFByb21pc2VBcnJheTtcbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwyNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciBUSElTID0ge307XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgbm9kZWJhY2tGb3JQcm9taXNlID0gX2RlcmVxXyhcIi4vbm9kZWJhY2tcIik7XG52YXIgd2l0aEFwcGVuZGVkID0gdXRpbC53aXRoQXBwZW5kZWQ7XG52YXIgbWF5YmVXcmFwQXNFcnJvciA9IHV0aWwubWF5YmVXcmFwQXNFcnJvcjtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgVHlwZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpLlR5cGVFcnJvcjtcbnZhciBkZWZhdWx0U3VmZml4ID0gXCJBc3luY1wiO1xudmFyIGRlZmF1bHRQcm9taXNpZmllZCA9IHtfX2lzUHJvbWlzaWZpZWRfXzogdHJ1ZX07XG52YXIgbm9Db3B5UHJvcHMgPSBbXG4gICAgXCJhcml0eVwiLCAgICBcImxlbmd0aFwiLFxuICAgIFwibmFtZVwiLFxuICAgIFwiYXJndW1lbnRzXCIsXG4gICAgXCJjYWxsZXJcIixcbiAgICBcImNhbGxlZVwiLFxuICAgIFwicHJvdG90eXBlXCIsXG4gICAgXCJfX2lzUHJvbWlzaWZpZWRfX1wiXG5dO1xudmFyIG5vQ29weVByb3BzUGF0dGVybiA9IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBub0NvcHlQcm9wcy5qb2luKFwifFwiKSArIFwiKSRcIik7XG5cbnZhciBkZWZhdWx0RmlsdGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB1dGlsLmlzSWRlbnRpZmllcihuYW1lKSAmJlxuICAgICAgICBuYW1lLmNoYXJBdCgwKSAhPT0gXCJfXCIgJiZcbiAgICAgICAgbmFtZSAhPT0gXCJjb25zdHJ1Y3RvclwiO1xufTtcblxuZnVuY3Rpb24gcHJvcHNGaWx0ZXIoa2V5KSB7XG4gICAgcmV0dXJuICFub0NvcHlQcm9wc1BhdHRlcm4udGVzdChrZXkpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2lmaWVkKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZuLl9faXNQcm9taXNpZmllZF9fID09PSB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNQcm9taXNpZmllZChvYmosIGtleSwgc3VmZml4KSB7XG4gICAgdmFyIHZhbCA9IHV0aWwuZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0KG9iaiwga2V5ICsgc3VmZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJvbWlzaWZpZWQpO1xuICAgIHJldHVybiB2YWwgPyBpc1Byb21pc2lmaWVkKHZhbCkgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNoZWNrVmFsaWQocmV0LCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSByZXRbaV07XG4gICAgICAgIGlmIChzdWZmaXhSZWdleHAudGVzdChrZXkpKSB7XG4gICAgICAgICAgICB2YXIga2V5V2l0aG91dEFzeW5jU3VmZml4ID0ga2V5LnJlcGxhY2Uoc3VmZml4UmVnZXhwLCBcIlwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmV0Lmxlbmd0aDsgaiArPSAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldFtqXSA9PT0ga2V5V2l0aG91dEFzeW5jU3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcHJvbWlzaWZ5IGFuIEFQSSB0aGF0IGhhcyBub3JtYWwgbWV0aG9kcyB3aXRoICclcyctc3VmZml4XFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShcIiVzXCIsIHN1ZmZpeCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvbWlzaWZpYWJsZU1ldGhvZHMob2JqLCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCwgZmlsdGVyKSB7XG4gICAgdmFyIGtleXMgPSB1dGlsLmluaGVyaXRlZERhdGFLZXlzKG9iaik7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgIHZhciBwYXNzZXNEZWZhdWx0RmlsdGVyID0gZmlsdGVyID09PSBkZWZhdWx0RmlsdGVyXG4gICAgICAgICAgICA/IHRydWUgOiBkZWZhdWx0RmlsdGVyKGtleSwgdmFsdWUsIG9iaik7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgIWlzUHJvbWlzaWZpZWQodmFsdWUpICYmXG4gICAgICAgICAgICAhaGFzUHJvbWlzaWZpZWQob2JqLCBrZXksIHN1ZmZpeCkgJiZcbiAgICAgICAgICAgIGZpbHRlcihrZXksIHZhbHVlLCBvYmosIHBhc3Nlc0RlZmF1bHRGaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXQucHVzaChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja1ZhbGlkKHJldCwgc3VmZml4LCBzdWZmaXhSZWdleHApO1xuICAgIHJldHVybiByZXQ7XG59XG5cbnZhciBlc2NhcGVJZGVudFJlZ2V4ID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWyRdKS8sIFwiXFxcXCRcIik7XG59O1xuXG52YXIgbWFrZU5vZGVQcm9taXNpZmllZEV2YWw7XG5pZiAoIXRydWUpIHtcbnZhciBzd2l0Y2hDYXNlQXJndW1lbnRPcmRlciA9IGZ1bmN0aW9uKGxpa2VseUFyZ3VtZW50Q291bnQpIHtcbiAgICB2YXIgcmV0ID0gW2xpa2VseUFyZ3VtZW50Q291bnRdO1xuICAgIHZhciBtaW4gPSBNYXRoLm1heCgwLCBsaWtlbHlBcmd1bWVudENvdW50IC0gMSAtIDMpO1xuICAgIGZvcih2YXIgaSA9IGxpa2VseUFyZ3VtZW50Q291bnQgLSAxOyBpID49IG1pbjsgLS1pKSB7XG4gICAgICAgIHJldC5wdXNoKGkpO1xuICAgIH1cbiAgICBmb3IodmFyIGkgPSBsaWtlbHlBcmd1bWVudENvdW50ICsgMTsgaSA8PSAzOyArK2kpIHtcbiAgICAgICAgcmV0LnB1c2goaSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG52YXIgYXJndW1lbnRTZXF1ZW5jZSA9IGZ1bmN0aW9uKGFyZ3VtZW50Q291bnQpIHtcbiAgICByZXR1cm4gdXRpbC5maWxsZWRSYW5nZShhcmd1bWVudENvdW50LCBcIl9hcmdcIiwgXCJcIik7XG59O1xuXG52YXIgcGFyYW1ldGVyRGVjbGFyYXRpb24gPSBmdW5jdGlvbihwYXJhbWV0ZXJDb3VudCkge1xuICAgIHJldHVybiB1dGlsLmZpbGxlZFJhbmdlKFxuICAgICAgICBNYXRoLm1heChwYXJhbWV0ZXJDb3VudCwgMyksIFwiX2FyZ1wiLCBcIlwiKTtcbn07XG5cbnZhciBwYXJhbWV0ZXJDb3VudCA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbi5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGZuLmxlbmd0aCwgMTAyMyArIDEpLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5tYWtlTm9kZVByb21pc2lmaWVkRXZhbCA9XG5mdW5jdGlvbihjYWxsYmFjaywgcmVjZWl2ZXIsIG9yaWdpbmFsTmFtZSwgZm4sIF8sIG11bHRpQXJncykge1xuICAgIHZhciBuZXdQYXJhbWV0ZXJDb3VudCA9IE1hdGgubWF4KDAsIHBhcmFtZXRlckNvdW50KGZuKSAtIDEpO1xuICAgIHZhciBhcmd1bWVudE9yZGVyID0gc3dpdGNoQ2FzZUFyZ3VtZW50T3JkZXIobmV3UGFyYW1ldGVyQ291bnQpO1xuICAgIHZhciBzaG91bGRQcm94eVRoaXMgPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwic3RyaW5nXCIgfHwgcmVjZWl2ZXIgPT09IFRISVM7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNhbGxGb3JBcmd1bWVudENvdW50KGNvdW50KSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRTZXF1ZW5jZShjb3VudCkuam9pbihcIiwgXCIpO1xuICAgICAgICB2YXIgY29tbWEgPSBjb3VudCA+IDAgPyBcIiwgXCIgOiBcIlwiO1xuICAgICAgICB2YXIgcmV0O1xuICAgICAgICBpZiAoc2hvdWxkUHJveHlUaGlzKSB7XG4gICAgICAgICAgICByZXQgPSBcInJldCA9IGNhbGxiYWNrLmNhbGwodGhpcywge3thcmdzfX0sIG5vZGViYWNrKTsgYnJlYWs7XFxuXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXQgPSByZWNlaXZlciA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBcInJldCA9IGNhbGxiYWNrKHt7YXJnc319LCBub2RlYmFjayk7IGJyZWFrO1xcblwiXG4gICAgICAgICAgICAgICAgOiBcInJldCA9IGNhbGxiYWNrLmNhbGwocmVjZWl2ZXIsIHt7YXJnc319LCBub2RlYmFjayk7IGJyZWFrO1xcblwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQucmVwbGFjZShcInt7YXJnc319XCIsIGFyZ3MpLnJlcGxhY2UoXCIsIFwiLCBjb21tYSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVBcmd1bWVudFN3aXRjaENhc2UoKSB7XG4gICAgICAgIHZhciByZXQgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50T3JkZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJldCArPSBcImNhc2UgXCIgKyBhcmd1bWVudE9yZGVyW2ldICtcIjpcIiArXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChhcmd1bWVudE9yZGVyW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCArPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBkZWZhdWx0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkobGVuICsgMSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGkgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgYXJnc1tpXSA9IG5vZGViYWNrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgW0NvZGVGb3JDYWxsXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIi5yZXBsYWNlKFwiW0NvZGVGb3JDYWxsXVwiLCAoc2hvdWxkUHJveHlUaGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZXQgPSBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcXG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmV0ID0gY2FsbGJhY2suYXBwbHkocmVjZWl2ZXIsIGFyZ3MpO1xcblwiKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgdmFyIGdldEZ1bmN0aW9uQ29kZSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChcInRoaXMgIT0gbnVsbCA/IHRoaXNbJ1wiK2NhbGxiYWNrK1wiJ10gOiBmblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm5cIjtcbiAgICB2YXIgYm9keSA9IFwiJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHZhciByZXQgPSBmdW5jdGlvbiAoUGFyYW1ldGVycykgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBwcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgbm9kZWJhY2sgPSBub2RlYmFja0ZvclByb21pc2UocHJvbWlzZSwgXCIgKyBtdWx0aUFyZ3MgKyBcIik7ICAgXFxuXFxcbiAgICAgICAgICAgIHZhciByZXQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHRyeUNhdGNoKFtHZXRGdW5jdGlvbkNvZGVdKTsgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHN3aXRjaChsZW4pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBbQ29kZUZvclN3aXRjaENhc2VdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhtYXliZVdyYXBBc0Vycm9yKHJldC5lKSwgdHJ1ZSwgdHJ1ZSk7XFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGlmICghcHJvbWlzZS5faXNGYXRlU2VhbGVkKCkpIHByb21pc2UuX3NldEFzeW5jR3VhcmFudGVlZCgpOyAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AocmV0LCAnX19pc1Byb21pc2lmaWVkX18nLCB0cnVlKTsgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIHJldDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICBcIi5yZXBsYWNlKFwiW0NvZGVGb3JTd2l0Y2hDYXNlXVwiLCBnZW5lcmF0ZUFyZ3VtZW50U3dpdGNoQ2FzZSgpKVxuICAgICAgICAucmVwbGFjZShcIltHZXRGdW5jdGlvbkNvZGVdXCIsIGdldEZ1bmN0aW9uQ29kZSk7XG4gICAgYm9keSA9IGJvZHkucmVwbGFjZShcIlBhcmFtZXRlcnNcIiwgcGFyYW1ldGVyRGVjbGFyYXRpb24obmV3UGFyYW1ldGVyQ291bnQpKTtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiUHJvbWlzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoQXBwZW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF5YmVXcmFwQXNFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub2RlYmFja0ZvclByb21pc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJ5Q2F0Y2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3JPYmpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90RW51bWVyYWJsZVByb3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSU5URVJOQUxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkpKFxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICBmbixcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZXIsXG4gICAgICAgICAgICAgICAgICAgIHdpdGhBcHBlbmRlZCxcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVXcmFwQXNFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgbm9kZWJhY2tGb3JQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICB1dGlsLnRyeUNhdGNoLFxuICAgICAgICAgICAgICAgICAgICB1dGlsLmVycm9yT2JqLFxuICAgICAgICAgICAgICAgICAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wLFxuICAgICAgICAgICAgICAgICAgICBJTlRFUk5BTCk7XG59O1xufVxuXG5mdW5jdGlvbiBtYWtlTm9kZVByb21pc2lmaWVkQ2xvc3VyZShjYWxsYmFjaywgcmVjZWl2ZXIsIF8sIGZuLCBfXywgbXVsdGlBcmdzKSB7XG4gICAgdmFyIGRlZmF1bHRUaGlzID0gKGZ1bmN0aW9uKCkge3JldHVybiB0aGlzO30pKCk7XG4gICAgdmFyIG1ldGhvZCA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gZm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByb21pc2lmaWVkKCkge1xuICAgICAgICB2YXIgX3JlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgICAgIGlmIChyZWNlaXZlciA9PT0gVEhJUykgX3JlY2VpdmVyID0gdGhpcztcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHByb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgICAgIHZhciBjYiA9IHR5cGVvZiBtZXRob2QgPT09IFwic3RyaW5nXCIgJiYgdGhpcyAhPT0gZGVmYXVsdFRoaXNcbiAgICAgICAgICAgID8gdGhpc1ttZXRob2RdIDogY2FsbGJhY2s7XG4gICAgICAgIHZhciBmbiA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlLCBtdWx0aUFyZ3MpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2IuYXBwbHkoX3JlY2VpdmVyLCB3aXRoQXBwZW5kZWQoYXJndW1lbnRzLCBmbikpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKG1heWJlV3JhcEFzRXJyb3IoZSksIHRydWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJvbWlzZS5faXNGYXRlU2VhbGVkKCkpIHByb21pc2UuX3NldEFzeW5jR3VhcmFudGVlZCgpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChwcm9taXNpZmllZCwgXCJfX2lzUHJvbWlzaWZpZWRfX1wiLCB0cnVlKTtcbiAgICByZXR1cm4gcHJvbWlzaWZpZWQ7XG59XG5cbnZhciBtYWtlTm9kZVByb21pc2lmaWVkID0gY2FuRXZhbHVhdGVcbiAgICA/IG1ha2VOb2RlUHJvbWlzaWZpZWRFdmFsXG4gICAgOiBtYWtlTm9kZVByb21pc2lmaWVkQ2xvc3VyZTtcblxuZnVuY3Rpb24gcHJvbWlzaWZ5QWxsKG9iaiwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyLCBtdWx0aUFyZ3MpIHtcbiAgICB2YXIgc3VmZml4UmVnZXhwID0gbmV3IFJlZ0V4cChlc2NhcGVJZGVudFJlZ2V4KHN1ZmZpeCkgKyBcIiRcIik7XG4gICAgdmFyIG1ldGhvZHMgPVxuICAgICAgICBwcm9taXNpZmlhYmxlTWV0aG9kcyhvYmosIHN1ZmZpeCwgc3VmZml4UmVnZXhwLCBmaWx0ZXIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKz0gMikge1xuICAgICAgICB2YXIga2V5ID0gbWV0aG9kc1tpXTtcbiAgICAgICAgdmFyIGZuID0gbWV0aG9kc1tpKzFdO1xuICAgICAgICB2YXIgcHJvbWlzaWZpZWRLZXkgPSBrZXkgKyBzdWZmaXg7XG4gICAgICAgIGlmIChwcm9taXNpZmllciA9PT0gbWFrZU5vZGVQcm9taXNpZmllZCkge1xuICAgICAgICAgICAgb2JqW3Byb21pc2lmaWVkS2V5XSA9XG4gICAgICAgICAgICAgICAgbWFrZU5vZGVQcm9taXNpZmllZChrZXksIFRISVMsIGtleSwgZm4sIHN1ZmZpeCwgbXVsdGlBcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNpZmllZCA9IHByb21pc2lmaWVyKGZuLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZU5vZGVQcm9taXNpZmllZChrZXksIFRISVMsIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbiwgc3VmZml4LCBtdWx0aUFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKHByb21pc2lmaWVkLCBcIl9faXNQcm9taXNpZmllZF9fXCIsIHRydWUpO1xuICAgICAgICAgICAgb2JqW3Byb21pc2lmaWVkS2V5XSA9IHByb21pc2lmaWVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHV0aWwudG9GYXN0UHJvcGVydGllcyhvYmopO1xuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHByb21pc2lmeShjYWxsYmFjaywgcmVjZWl2ZXIsIG11bHRpQXJncykge1xuICAgIHJldHVybiBtYWtlTm9kZVByb21pc2lmaWVkKGNhbGxiYWNrLCByZWNlaXZlciwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaywgbnVsbCwgbXVsdGlBcmdzKTtcbn1cblxuUHJvbWlzZS5wcm9taXNpZnkgPSBmdW5jdGlvbiAoZm4sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGZuKSk7XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2lmaWVkKGZuKSkge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgfVxuICAgIG9wdGlvbnMgPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgdmFyIHJlY2VpdmVyID0gb3B0aW9ucy5jb250ZXh0ID09PSB1bmRlZmluZWQgPyBUSElTIDogb3B0aW9ucy5jb250ZXh0O1xuICAgIHZhciBtdWx0aUFyZ3MgPSAhIW9wdGlvbnMubXVsdGlBcmdzO1xuICAgIHZhciByZXQgPSBwcm9taXNpZnkoZm4sIHJlY2VpdmVyLCBtdWx0aUFyZ3MpO1xuICAgIHV0aWwuY29weURlc2NyaXB0b3JzKGZuLCByZXQsIHByb3BzRmlsdGVyKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm9taXNpZnlBbGwgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGUgdGFyZ2V0IG9mIHByb21pc2lmeUFsbCBtdXN0IGJlIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IE9iamVjdChvcHRpb25zKTtcbiAgICB2YXIgbXVsdGlBcmdzID0gISFvcHRpb25zLm11bHRpQXJncztcbiAgICB2YXIgc3VmZml4ID0gb3B0aW9ucy5zdWZmaXg7XG4gICAgaWYgKHR5cGVvZiBzdWZmaXggIT09IFwic3RyaW5nXCIpIHN1ZmZpeCA9IGRlZmF1bHRTdWZmaXg7XG4gICAgdmFyIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyICE9PSBcImZ1bmN0aW9uXCIpIGZpbHRlciA9IGRlZmF1bHRGaWx0ZXI7XG4gICAgdmFyIHByb21pc2lmaWVyID0gb3B0aW9ucy5wcm9taXNpZmllcjtcbiAgICBpZiAodHlwZW9mIHByb21pc2lmaWVyICE9PSBcImZ1bmN0aW9uXCIpIHByb21pc2lmaWVyID0gbWFrZU5vZGVQcm9taXNpZmllZDtcblxuICAgIGlmICghdXRpbC5pc0lkZW50aWZpZXIoc3VmZml4KSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInN1ZmZpeCBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllclxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSB1dGlsLmluaGVyaXRlZERhdGFLZXlzKHRhcmdldCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXlzW2ldXTtcbiAgICAgICAgaWYgKGtleXNbaV0gIT09IFwiY29uc3RydWN0b3JcIiAmJlxuICAgICAgICAgICAgdXRpbC5pc0NsYXNzKHZhbHVlKSkge1xuICAgICAgICAgICAgcHJvbWlzaWZ5QWxsKHZhbHVlLnByb3RvdHlwZSwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyLFxuICAgICAgICAgICAgICAgIG11bHRpQXJncyk7XG4gICAgICAgICAgICBwcm9taXNpZnlBbGwodmFsdWUsIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllciwgbXVsdGlBcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNpZnlBbGwodGFyZ2V0LCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIsIG11bHRpQXJncyk7XG59O1xufTtcblxuXG59LHtcIi4vZXJyb3JzXCI6MTIsXCIuL25vZGViYWNrXCI6MjAsXCIuL3V0aWxcIjozNn1dLDI1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihcbiAgICBQcm9taXNlLCBQcm9taXNlQXJyYXksIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbikge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczVcIik7XG52YXIgRXM2TWFwO1xuaWYgKHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIikgRXM2TWFwID0gTWFwO1xuXG52YXIgbWFwVG9FbnRyaWVzID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNpemUgPSAwO1xuXG4gICAgZnVuY3Rpb24gZXh0cmFjdEVudHJ5KHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdGhpc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgdGhpc1tpbmRleCArIHNpemVdID0ga2V5O1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBtYXBUb0VudHJpZXMobWFwKSB7XG4gICAgICAgIHNpemUgPSBtYXAuc2l6ZTtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB2YXIgcmV0ID0gbmV3IEFycmF5KG1hcC5zaXplICogMik7XG4gICAgICAgIG1hcC5mb3JFYWNoKGV4dHJhY3RFbnRyeSwgcmV0KTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufSkoKTtcblxudmFyIGVudHJpZXNUb01hcCA9IGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICB2YXIgcmV0ID0gbmV3IEVzNk1hcCgpO1xuICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aCAvIDIgfCAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGVudHJpZXNbbGVuZ3RoICsgaV07XG4gICAgICAgIHZhciB2YWx1ZSA9IGVudHJpZXNbaV07XG4gICAgICAgIHJldC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBQcm9wZXJ0aWVzUHJvbWlzZUFycmF5KG9iaikge1xuICAgIHZhciBpc01hcCA9IGZhbHNlO1xuICAgIHZhciBlbnRyaWVzO1xuICAgIGlmIChFczZNYXAgIT09IHVuZGVmaW5lZCAmJiBvYmogaW5zdGFuY2VvZiBFczZNYXApIHtcbiAgICAgICAgZW50cmllcyA9IG1hcFRvRW50cmllcyhvYmopO1xuICAgICAgICBpc01hcCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGtleXMgPSBlczUua2V5cyhvYmopO1xuICAgICAgICB2YXIgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIGVudHJpZXMgPSBuZXcgQXJyYXkobGVuICogMik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgZW50cmllc1tpXSA9IG9ialtrZXldO1xuICAgICAgICAgICAgZW50cmllc1tpICsgbGVuXSA9IGtleTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnN0cnVjdG9yJChlbnRyaWVzKTtcbiAgICB0aGlzLl9pc01hcCA9IGlzTWFwO1xuICAgIHRoaXMuX2luaXQkKHVuZGVmaW5lZCwgaXNNYXAgPyAtNiA6IC0zKTtcbn1cbnV0aWwuaW5oZXJpdHMoUHJvcGVydGllc1Byb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB2YXIgdmFsO1xuICAgICAgICBpZiAodGhpcy5faXNNYXApIHtcbiAgICAgICAgICAgIHZhbCA9IGVudHJpZXNUb01hcCh0aGlzLl92YWx1ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0ge307XG4gICAgICAgICAgICB2YXIga2V5T2Zmc2V0ID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aCgpOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YWxbdGhpcy5fdmFsdWVzW2kgKyBrZXlPZmZzZXRdXSA9IHRoaXMuX3ZhbHVlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNvbHZlKHZhbCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLmdldEFjdHVhbExlbmd0aCA9IGZ1bmN0aW9uIChsZW4pIHtcbiAgICByZXR1cm4gbGVuID4+IDE7XG59O1xuXG5mdW5jdGlvbiBwcm9wcyhwcm9taXNlcykge1xuICAgIHZhciByZXQ7XG4gICAgdmFyIGNhc3RWYWx1ZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocHJvbWlzZXMpO1xuXG4gICAgaWYgKCFpc09iamVjdChjYXN0VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJjYW5ub3QgYXdhaXQgcHJvcGVydGllcyBvZiBhIG5vbi1vYmplY3RcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH0gZWxzZSBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQgPSBjYXN0VmFsdWUuX3RoZW4oXG4gICAgICAgICAgICBQcm9taXNlLnByb3BzLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IG5ldyBQcm9wZXJ0aWVzUHJvbWlzZUFycmF5KGNhc3RWYWx1ZSkucHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbShjYXN0VmFsdWUsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvcHModGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3BzID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIHByb3BzKHByb21pc2VzKTtcbn07XG59O1xuXG59LHtcIi4vZXM1XCI6MTMsXCIuL3V0aWxcIjozNn1dLDI2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gYXJyYXlNb3ZlKHNyYywgc3JjSW5kZXgsIGRzdCwgZHN0SW5kZXgsIGxlbikge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGVuOyArK2opIHtcbiAgICAgICAgZHN0W2ogKyBkc3RJbmRleF0gPSBzcmNbaiArIHNyY0luZGV4XTtcbiAgICAgICAgc3JjW2ogKyBzcmNJbmRleF0gPSB2b2lkIDA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBRdWV1ZShjYXBhY2l0eSkge1xuICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcm9udCA9IDA7XG59XG5cblF1ZXVlLnByb3RvdHlwZS5fd2lsbEJlT3ZlckNhcGFjaXR5ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHkgPCBzaXplO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9wdXNoT25lID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgIHRoaXMuX2NoZWNrQ2FwYWNpdHkobGVuZ3RoICsgMSk7XG4gICAgdmFyIGkgPSAodGhpcy5fZnJvbnQgKyBsZW5ndGgpICYgKHRoaXMuX2NhcGFjaXR5IC0gMSk7XG4gICAgdGhpc1tpXSA9IGFyZztcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGggKyAxO1xufTtcblxuUXVldWUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKSArIDM7XG4gICAgaWYgKHRoaXMuX3dpbGxCZU92ZXJDYXBhY2l0eShsZW5ndGgpKSB7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUoZm4pO1xuICAgICAgICB0aGlzLl9wdXNoT25lKHJlY2VpdmVyKTtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShhcmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBqID0gdGhpcy5fZnJvbnQgKyBsZW5ndGggLSAzO1xuICAgIHRoaXMuX2NoZWNrQ2FwYWNpdHkobGVuZ3RoKTtcbiAgICB2YXIgd3JhcE1hc2sgPSB0aGlzLl9jYXBhY2l0eSAtIDE7XG4gICAgdGhpc1soaiArIDApICYgd3JhcE1hc2tdID0gZm47XG4gICAgdGhpc1soaiArIDEpICYgd3JhcE1hc2tdID0gcmVjZWl2ZXI7XG4gICAgdGhpc1soaiArIDIpICYgd3JhcE1hc2tdID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZnJvbnQgPSB0aGlzLl9mcm9udCxcbiAgICAgICAgcmV0ID0gdGhpc1tmcm9udF07XG5cbiAgICB0aGlzW2Zyb250XSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mcm9udCA9IChmcm9udCArIDEpICYgKHRoaXMuX2NhcGFjaXR5IC0gMSk7XG4gICAgdGhpcy5fbGVuZ3RoLS07XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5fY2hlY2tDYXBhY2l0eSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgaWYgKHRoaXMuX2NhcGFjaXR5IDwgc2l6ZSkge1xuICAgICAgICB0aGlzLl9yZXNpemVUbyh0aGlzLl9jYXBhY2l0eSA8PCAxKTtcbiAgICB9XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX3Jlc2l6ZVRvID0gZnVuY3Rpb24gKGNhcGFjaXR5KSB7XG4gICAgdmFyIG9sZENhcGFjaXR5ID0gdGhpcy5fY2FwYWNpdHk7XG4gICAgdGhpcy5fY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgICB2YXIgZnJvbnQgPSB0aGlzLl9mcm9udDtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fbGVuZ3RoO1xuICAgIHZhciBtb3ZlSXRlbXNDb3VudCA9IChmcm9udCArIGxlbmd0aCkgJiAob2xkQ2FwYWNpdHkgLSAxKTtcbiAgICBhcnJheU1vdmUodGhpcywgMCwgdGhpcywgb2xkQ2FwYWNpdHksIG1vdmVJdGVtc0NvdW50KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XG5cbn0se31dLDI3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihcbiAgICBQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG5cbnZhciByYWNlTGF0ZXIgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHJhY2UoYXJyYXksIHByb21pc2UpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmFjZShwcm9taXNlcywgcGFyZW50KSB7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocHJvbWlzZXMpO1xuXG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHJhY2VMYXRlcihtYXliZVByb21pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VzID0gdXRpbC5hc0FycmF5KHByb21pc2VzKTtcbiAgICAgICAgaWYgKHByb21pc2VzID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhbiBhcnJheSBvciBhbiBpdGVyYWJsZSBvYmplY3QgYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcocHJvbWlzZXMpKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQuX3Byb3BhZ2F0ZUZyb20ocGFyZW50LCAzKTtcbiAgICB9XG4gICAgdmFyIGZ1bGZpbGwgPSByZXQuX2Z1bGZpbGw7XG4gICAgdmFyIHJlamVjdCA9IHJldC5fcmVqZWN0O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcm9taXNlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgdmFsID0gcHJvbWlzZXNbaV07XG5cbiAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkICYmICEoaSBpbiBwcm9taXNlcykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgUHJvbWlzZS5jYXN0KHZhbCkuX3RoZW4oZnVsZmlsbCwgcmVqZWN0LCB1bmRlZmluZWQsIHJldCwgbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgIHJldHVybiByYWNlKHByb21pc2VzLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUucmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmFjZSh0aGlzLCB1bmRlZmluZWQpO1xufTtcblxufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDI4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5Q29udmVydFRvUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSU5URVJOQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKSB7XG52YXIgZ2V0RG9tYWluID0gUHJvbWlzZS5fZ2V0RG9tYWluO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcblxuZnVuY3Rpb24gUmVkdWN0aW9uUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHByb21pc2VzKTtcbiAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgdGhpcy5fZm4gPSBkb21haW4gPT09IG51bGwgPyBmbiA6IHV0aWwuZG9tYWluQmluZChkb21haW4sIGZuKTtcbiAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5pdGlhbFZhbHVlID0gUHJvbWlzZS5yZXNvbHZlKGluaXRpYWxWYWx1ZSk7XG4gICAgICAgIGluaXRpYWxWYWx1ZS5fYXR0YWNoQ2FuY2VsbGF0aW9uQ2FsbGJhY2sodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX2luaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB0aGlzLl9jdXJyZW50Q2FuY2VsbGFibGUgPSBudWxsO1xuICAgIGlmKF9lYWNoID09PSBJTlRFUk5BTCkge1xuICAgICAgICB0aGlzLl9lYWNoVmFsdWVzID0gQXJyYXkodGhpcy5fbGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKF9lYWNoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2VhY2hWYWx1ZXMgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VhY2hWYWx1ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX3Byb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdGhpcy5faW5pdCQodW5kZWZpbmVkLCAtNSk7XG59XG51dGlsLmluaGVyaXRzKFJlZHVjdGlvblByb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZ290QWNjdW0gPSBmdW5jdGlvbihhY2N1bSkge1xuICAgIGlmICh0aGlzLl9lYWNoVmFsdWVzICE9PSB1bmRlZmluZWQgJiYgXG4gICAgICAgIHRoaXMuX2VhY2hWYWx1ZXMgIT09IG51bGwgJiYgXG4gICAgICAgIGFjY3VtICE9PSBJTlRFUk5BTCkge1xuICAgICAgICB0aGlzLl9lYWNoVmFsdWVzLnB1c2goYWNjdW0pO1xuICAgIH1cbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX2VhY2hDb21wbGV0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2VhY2hWYWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fZWFjaFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2VhY2hWYWx1ZXM7XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24oKSB7fTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzb2x2ZUVtcHR5QXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX2VhY2hWYWx1ZXMgIT09IHVuZGVmaW5lZCA/IHRoaXMuX2VhY2hWYWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX2luaXRpYWxWYWx1ZSk7XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLnNob3VsZENvcHlWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICB0aGlzLl92YWx1ZXMgPSBudWxsO1xufTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzdWx0Q2FuY2VsbGVkID0gZnVuY3Rpb24oc2VuZGVyKSB7XG4gICAgaWYgKHNlbmRlciA9PT0gdGhpcy5faW5pdGlhbFZhbHVlKSByZXR1cm4gdGhpcy5fY2FuY2VsKCk7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3Jlc3VsdENhbmNlbGxlZCQoKTtcbiAgICBpZiAodGhpcy5fY3VycmVudENhbmNlbGxhYmxlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50Q2FuY2VsbGFibGUuY2FuY2VsKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbml0aWFsVmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxWYWx1ZS5jYW5jZWwoKTtcbiAgICB9XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pdGVyYXRlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFyIGk7XG4gICAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5faW5pdGlhbFZhbHVlO1xuICAgICAgICBpID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZXNbMF0pO1xuICAgICAgICBpID0gMTtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50Q2FuY2VsbGFibGUgPSB2YWx1ZTtcblxuICAgIGlmICghdmFsdWUuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBjdHggPSB7XG4gICAgICAgICAgICAgICAgYWNjdW06IG51bGwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlc1tpXSxcbiAgICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgICAgICAgICAgICBhcnJheTogdGhpc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuX3RoZW4oZ290QWNjdW0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjdHgsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWFjaFZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgICAgIC5fdGhlbih0aGlzLl9lYWNoQ29tcGxldGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICB2YWx1ZS5fdGhlbihjb21wbGV0ZWQsIGNvbXBsZXRlZCwgdW5kZWZpbmVkLCB2YWx1ZSwgdGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoZm4sIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiByZWR1Y2UodGhpcywgZm4sIGluaXRpYWxWYWx1ZSwgbnVsbCk7XG59O1xuXG5Qcm9taXNlLnJlZHVjZSA9IGZ1bmN0aW9uIChwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICByZXR1cm4gcmVkdWNlKHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCk7XG59O1xuXG5mdW5jdGlvbiBjb21wbGV0ZWQodmFsdWVPclJlYXNvbiwgYXJyYXkpIHtcbiAgICBpZiAodGhpcy5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIGFycmF5Ll9yZXNvbHZlKHZhbHVlT3JSZWFzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Ll9yZWplY3QodmFsdWVPclJlYXNvbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2UocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cbiAgICB2YXIgYXJyYXkgPSBuZXcgUmVkdWN0aW9uUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCk7XG4gICAgcmV0dXJuIGFycmF5LnByb21pc2UoKTtcbn1cblxuZnVuY3Rpb24gZ290QWNjdW0oYWNjdW0pIHtcbiAgICB0aGlzLmFjY3VtID0gYWNjdW07XG4gICAgdGhpcy5hcnJheS5fZ290QWNjdW0oYWNjdW0pO1xuICAgIHZhciB2YWx1ZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UodGhpcy52YWx1ZSwgdGhpcy5hcnJheS5fcHJvbWlzZSk7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB0aGlzLmFycmF5Ll9jdXJyZW50Q2FuY2VsbGFibGUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlLl90aGVuKGdvdFZhbHVlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcywgdW5kZWZpbmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ290VmFsdWUuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnb3RWYWx1ZSh2YWx1ZSkge1xuICAgIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gICAgdmFyIHByb21pc2UgPSBhcnJheS5fcHJvbWlzZTtcbiAgICB2YXIgZm4gPSB0cnlDYXRjaChhcnJheS5fZm4pO1xuICAgIHByb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgdmFyIHJldDtcbiAgICBpZiAoYXJyYXkuX2VhY2hWYWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQgPSBmbi5jYWxsKHByb21pc2UuX2JvdW5kVmFsdWUoKSwgdmFsdWUsIHRoaXMuaW5kZXgsIHRoaXMubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBmbi5jYWxsKHByb21pc2UuX2JvdW5kVmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjdW0sIHZhbHVlLCB0aGlzLmluZGV4LCB0aGlzLmxlbmd0aCk7XG4gICAgfVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGFycmF5Ll9jdXJyZW50Q2FuY2VsbGFibGUgPSByZXQ7XG4gICAgfVxuICAgIHZhciBwcm9taXNlQ3JlYXRlZCA9IHByb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICBkZWJ1Zy5jaGVja0ZvcmdvdHRlblJldHVybnMoXG4gICAgICAgIHJldCxcbiAgICAgICAgcHJvbWlzZUNyZWF0ZWQsXG4gICAgICAgIGFycmF5Ll9lYWNoVmFsdWVzICE9PSB1bmRlZmluZWQgPyBcIlByb21pc2UuZWFjaFwiIDogXCJQcm9taXNlLnJlZHVjZVwiLFxuICAgICAgICBwcm9taXNlXG4gICAgKTtcbiAgICByZXR1cm4gcmV0O1xufVxufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDI5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIHNjaGVkdWxlO1xudmFyIG5vQXN5bmNTY2hlZHVsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhc3luYyBzY2hlZHVsZXIgYXZhaWxhYmxlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbn07XG52YXIgTmF0aXZlUHJvbWlzZSA9IHV0aWwuZ2V0TmF0aXZlUHJvbWlzZSgpO1xuaWYgKHV0aWwuaXNOb2RlICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIEdsb2JhbFNldEltbWVkaWF0ZSA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIFByb2Nlc3NOZXh0VGljayA9IHByb2Nlc3MubmV4dFRpY2s7XG4gICAgc2NoZWR1bGUgPSB1dGlsLmlzUmVjZW50Tm9kZVxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24oZm4pIHsgR2xvYmFsU2V0SW1tZWRpYXRlLmNhbGwoZ2xvYmFsLCBmbik7IH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uKGZuKSB7IFByb2Nlc3NOZXh0VGljay5jYWxsKHByb2Nlc3MsIGZuKTsgfTtcbn0gZWxzZSBpZiAodHlwZW9mIE5hdGl2ZVByb21pc2UgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICB0eXBlb2YgTmF0aXZlUHJvbWlzZS5yZXNvbHZlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgbmF0aXZlUHJvbWlzZSA9IE5hdGl2ZVByb21pc2UucmVzb2x2ZSgpO1xuICAgIHNjaGVkdWxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgbmF0aXZlUHJvbWlzZS50aGVuKGZuKTtcbiAgICB9O1xufSBlbHNlIGlmICgodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09IFwidW5kZWZpbmVkXCIpICYmXG4gICAgICAgICAgISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yICYmXG4gICAgICAgICAgICAod2luZG93Lm5hdmlnYXRvci5zdGFuZGFsb25lIHx8IHdpbmRvdy5jb3Jkb3ZhKSkpIHtcbiAgICBzY2hlZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvcHRzID0ge2F0dHJpYnV0ZXM6IHRydWV9O1xuICAgICAgICB2YXIgdG9nZ2xlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG8yID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImZvb1wiKTtcbiAgICAgICAgICAgIHRvZ2dsZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgbzIub2JzZXJ2ZShkaXYyLCBvcHRzKTtcblxuICAgICAgICB2YXIgc2NoZWR1bGVUb2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0b2dnbGVTY2hlZHVsZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRvZ2dsZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBkaXYyLmNsYXNzTGlzdC50b2dnbGUoXCJmb29cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNjaGVkdWxlKGZuKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG8ub2JzZXJ2ZShkaXYsIG9wdHMpO1xuICAgICAgICAgICAgc2NoZWR1bGVUb2dnbGUoKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcbiAgICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0VGltZW91dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHNjaGVkdWxlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59IGVsc2Uge1xuICAgIHNjaGVkdWxlID0gbm9Bc3luY1NjaGVkdWxlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gc2NoZWR1bGU7XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwzMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbiAgICBmdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXksIGRlYnVnKSB7XG52YXIgUHJvbWlzZUluc3BlY3Rpb24gPSBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBTZXR0bGVkUHJvbWlzZUFycmF5KHZhbHVlcykge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG59XG51dGlsLmluaGVyaXRzKFNldHRsZWRQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNldHRsZWRQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVzb2x2ZWQgPSBmdW5jdGlvbiAoaW5kZXgsIGluc3BlY3Rpb24pIHtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gaW5zcGVjdGlvbjtcbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgIHJldC5fYml0RmllbGQgPSAzMzU1NDQzMjtcbiAgICByZXQuX3NldHRsZWRWYWx1ZUZpZWxkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2VSZXNvbHZlZChpbmRleCwgcmV0KTtcbn07XG5TZXR0bGVkUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbiwgaW5kZXgpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgcmV0Ll9iaXRGaWVsZCA9IDE2Nzc3MjE2O1xuICAgIHJldC5fc2V0dGxlZFZhbHVlRmllbGQgPSByZWFzb247XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2VSZXNvbHZlZChpbmRleCwgcmV0KTtcbn07XG5cblByb21pc2Uuc2V0dGxlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgZGVidWcuZGVwcmVjYXRlZChcIi5zZXR0bGUoKVwiLCBcIi5yZWZsZWN0KClcIik7XG4gICAgcmV0dXJuIG5ldyBTZXR0bGVkUHJvbWlzZUFycmF5KHByb21pc2VzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZXR0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFByb21pc2Uuc2V0dGxlKHRoaXMpO1xufTtcbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwzMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgUmFuZ2VFcnJvciA9IF9kZXJlcV8oXCIuL2Vycm9yc1wiKS5SYW5nZUVycm9yO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpLkFnZ3JlZ2F0ZUVycm9yO1xudmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXk7XG52YXIgQ0FOQ0VMTEFUSU9OID0ge307XG5cblxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xuICAgIHRoaXMuX2hvd01hbnkgPSAwO1xuICAgIHRoaXMuX3Vud3JhcCA9IGZhbHNlO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKFNvbWVQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG93TWFueSA9PT0gMCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC01KTtcbiAgICB2YXIgaXNBcnJheVJlc29sdmVkID0gaXNBcnJheSh0aGlzLl92YWx1ZXMpO1xuICAgIGlmICghdGhpcy5faXNSZXNvbHZlZCgpICYmXG4gICAgICAgIGlzQXJyYXlSZXNvbHZlZCAmJlxuICAgICAgICB0aGlzLl9ob3dNYW55ID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0KHRoaXMuX2dldFJhbmdlRXJyb3IodGhpcy5sZW5ndGgoKSkpO1xuICAgIH1cbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2luaXQoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldFVud3JhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91bndyYXAgPSB0cnVlO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuaG93TWFueSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faG93TWFueTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldEhvd01hbnkgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICB0aGlzLl9ob3dNYW55ID0gY291bnQ7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX2FkZEZ1bGZpbGxlZCh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Z1bGZpbGxlZCgpID09PSB0aGlzLmhvd01hbnkoKSkge1xuICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoID0gdGhpcy5ob3dNYW55KCk7XG4gICAgICAgIGlmICh0aGlzLmhvd01hbnkoKSA9PT0gMSAmJiB0aGlzLl91bndyYXApIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuXG59O1xuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl9hZGRSZWplY3RlZChyZWFzb24pO1xuICAgIHJldHVybiB0aGlzLl9jaGVja091dGNvbWUoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlQ2FuY2VsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl92YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHRoaXMuX3ZhbHVlcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW5jZWwoKTtcbiAgICB9XG4gICAgdGhpcy5fYWRkUmVqZWN0ZWQoQ0FOQ0VMTEFUSU9OKTtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tPdXRjb21lKCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fY2hlY2tPdXRjb21lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaG93TWFueSgpID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQWdncmVnYXRlRXJyb3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoKCk7IGkgPCB0aGlzLl92YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl92YWx1ZXNbaV0gIT09IENBTkNFTExBVElPTikge1xuICAgICAgICAgICAgICAgIGUucHVzaCh0aGlzLl92YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZnVsZmlsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJlc29sdmVkO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3JlamVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMubGVuZ3RoIC0gdGhpcy5sZW5ndGgoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9hZGRSZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl92YWx1ZXMucHVzaChyZWFzb24pO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2FkZEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlc1t0aGlzLl90b3RhbFJlc29sdmVkKytdID0gdmFsdWU7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fY2FuUG9zc2libHlGdWxmaWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCgpIC0gdGhpcy5fcmVqZWN0ZWQoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9nZXRSYW5nZUVycm9yID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBcIklucHV0IGFycmF5IG11c3QgY29udGFpbiBhdCBsZWFzdCBcIiArXG4gICAgICAgICAgICB0aGlzLl9ob3dNYW55ICsgXCIgaXRlbXMgYnV0IGNvbnRhaW5zIG9ubHkgXCIgKyBjb3VudCArIFwiIGl0ZW1zXCI7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKG1lc3NhZ2UpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmVFbXB0eUFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKDApKTtcbn07XG5cbmZ1bmN0aW9uIHNvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICBpZiAoKGhvd01hbnkgfCAwKSAhPT0gaG93TWFueSB8fCBob3dNYW55IDwgMCkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgcG9zaXRpdmUgaW50ZWdlclxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHZhciByZXQgPSBuZXcgU29tZVByb21pc2VBcnJheShwcm9taXNlcyk7XG4gICAgdmFyIHByb21pc2UgPSByZXQucHJvbWlzZSgpO1xuICAgIHJldC5zZXRIb3dNYW55KGhvd01hbnkpO1xuICAgIHJldC5pbml0KCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2Uuc29tZSA9IGZ1bmN0aW9uIChwcm9taXNlcywgaG93TWFueSkge1xuICAgIHJldHVybiBzb21lKHByb21pc2VzLCBob3dNYW55KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNvbWUgPSBmdW5jdGlvbiAoaG93TWFueSkge1xuICAgIHJldHVybiBzb21lKHRoaXMsIGhvd01hbnkpO1xufTtcblxuUHJvbWlzZS5fU29tZVByb21pc2VBcnJheSA9IFNvbWVQcm9taXNlQXJyYXk7XG59O1xuXG59LHtcIi4vZXJyb3JzXCI6MTIsXCIuL3V0aWxcIjozNn1dLDMyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG5mdW5jdGlvbiBQcm9taXNlSW5zcGVjdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKHByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gcHJvbWlzZS5fYml0RmllbGQ7XG4gICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZUZpZWxkID0gcHJvbWlzZS5faXNGYXRlU2VhbGVkKClcbiAgICAgICAgICAgID8gcHJvbWlzZS5fc2V0dGxlZFZhbHVlKCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IDA7XG4gICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZUZpZWxkID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLl9zZXR0bGVkVmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlRmllbGQ7XG59O1xuXG52YXIgdmFsdWUgPSBQcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgb2YgYSBub24tZnVsZmlsbGVkIHByb21pc2VcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlKCk7XG59O1xuXG52YXIgcmVhc29uID0gUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmVycm9yID1cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5yZWFzb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2Fubm90IGdldCByZWplY3Rpb24gcmVhc29uIG9mIGEgbm9uLXJlamVjdGVkIHByb21pc2VcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlKCk7XG59O1xuXG52YXIgaXNGdWxmaWxsZWQgPSBQcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwO1xufTtcblxudmFyIGlzUmVqZWN0ZWQgPSBQcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTY3NzcyMTYpICE9PSAwO1xufTtcblxudmFyIGlzUGVuZGluZyA9IFByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMDtcbn07XG5cbnZhciBpc1Jlc29sdmVkID0gUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUmVzb2x2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUwMzMxNjQ4KSAhPT0gMDtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc0NhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA4NDU0MTQ0KSAhPT0gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9faXNDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNjU1MzYpID09PSA2NTUzNjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0NhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXQoKS5fX2lzQ2FuY2VsbGVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc0NhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5fdGFyZ2V0KCkuX2JpdEZpZWxkICYgODQ1NDE0NCkgIT09IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaXNQZW5kaW5nLmNhbGwodGhpcy5fdGFyZ2V0KCkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpc1JlamVjdGVkLmNhbGwodGhpcy5fdGFyZ2V0KCkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaXNGdWxmaWxsZWQuY2FsbCh0aGlzLl90YXJnZXQoKSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc1Jlc29sdmVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGlzUmVzb2x2ZWQuY2FsbCh0aGlzLl90YXJnZXQoKSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZS5jYWxsKHRoaXMuX3RhcmdldCgpKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnJlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXQoKTtcbiAgICB0YXJnZXQuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICByZXR1cm4gcmVhc29uLmNhbGwodGFyZ2V0KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl92YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0bGVkVmFsdWUoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWFzb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZSgpO1xufTtcblxuUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2VJbnNwZWN0aW9uO1xufTtcblxufSx7fV0sMzM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcblxuZnVuY3Rpb24gdHJ5Q29udmVydFRvUHJvbWlzZShvYmosIGNvbnRleHQpIHtcbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgUHJvbWlzZSkgcmV0dXJuIG9iajtcbiAgICAgICAgdmFyIHRoZW4gPSBnZXRUaGVuKG9iaik7XG4gICAgICAgIGlmICh0aGVuID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIGNvbnRleHQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgICAgICB2YXIgcmV0ID0gUHJvbWlzZS5yZWplY3QodGhlbi5lKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0KSBjb250ZXh0Ll9wb3BDb250ZXh0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChpc0FueUJsdWViaXJkUHJvbWlzZShvYmopKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgICAgICAgICBvYmouX3RoZW4oXG4gICAgICAgICAgICAgICAgICAgIHJldC5fZnVsZmlsbCxcbiAgICAgICAgICAgICAgICAgICAgcmV0Ll9yZWplY3QsXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvVGhlbmFibGUob2JqLCB0aGVuLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBkb0dldFRoZW4ob2JqKSB7XG4gICAgcmV0dXJuIG9iai50aGVuO1xufVxuXG5mdW5jdGlvbiBnZXRUaGVuKG9iaikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkb0dldFRoZW4ob2JqKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG52YXIgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaXNBbnlCbHVlYmlyZFByb21pc2Uob2JqKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGhhc1Byb3AuY2FsbChvYmosIFwiX3Byb21pc2UwXCIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZG9UaGVuYWJsZSh4LCB0aGVuLCBjb250ZXh0KSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgdmFyIHJldCA9IHByb21pc2U7XG4gICAgaWYgKGNvbnRleHQpIGNvbnRleHQuX3B1c2hDb250ZXh0KCk7XG4gICAgcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICBpZiAoY29udGV4dCkgY29udGV4dC5fcG9wQ29udGV4dCgpO1xuICAgIHZhciBzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgdmFyIHJlc3VsdCA9IHV0aWwudHJ5Q2F0Y2godGhlbikuY2FsbCh4LCByZXNvbHZlLCByZWplY3QpO1xuICAgIHN5bmNocm9ub3VzID0gZmFsc2U7XG5cbiAgICBpZiAocHJvbWlzZSAmJiByZXN1bHQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHJlc3VsdC5lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXByb21pc2UpIHJldHVybjtcbiAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVqZWN0KHJlYXNvbikge1xuICAgICAgICBpZiAoIXByb21pc2UpIHJldHVybjtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVhc29uLCBzeW5jaHJvbm91cywgdHJ1ZSk7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5yZXR1cm4gdHJ5Q29udmVydFRvUHJvbWlzZTtcbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwzNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIGRlYnVnKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgVGltZW91dEVycm9yID0gUHJvbWlzZS5UaW1lb3V0RXJyb3I7XG5cbmZ1bmN0aW9uIEhhbmRsZVdyYXBwZXIoaGFuZGxlKSAge1xuICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlO1xufVxuXG5IYW5kbGVXcmFwcGVyLnByb3RvdHlwZS5fcmVzdWx0Q2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaGFuZGxlKTtcbn07XG5cbnZhciBhZnRlclZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIGRlbGF5KCt0aGlzKS50aGVuUmV0dXJuKHZhbHVlKTsgfTtcbnZhciBkZWxheSA9IFByb21pc2UuZGVsYXkgPSBmdW5jdGlvbiAobXMsIHZhbHVlKSB7XG4gICAgdmFyIHJldDtcbiAgICB2YXIgaGFuZGxlO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldCA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAuX3RoZW4oYWZ0ZXJWYWx1ZSwgbnVsbCwgbnVsbCwgbXMsIHVuZGVmaW5lZCk7XG4gICAgICAgIGlmIChkZWJ1Zy5jYW5jZWxsYXRpb24oKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldC5fc2V0T25DYW5jZWwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBoYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyByZXQuX2Z1bGZpbGwoKTsgfSwgK21zKTtcbiAgICAgICAgaWYgKGRlYnVnLmNhbmNlbGxhdGlvbigpKSB7XG4gICAgICAgICAgICByZXQuX3NldE9uQ2FuY2VsKG5ldyBIYW5kbGVXcmFwcGVyKGhhbmRsZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB9XG4gICAgcmV0Ll9zZXRBc3luY0d1YXJhbnRlZWQoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbiAobXMpIHtcbiAgICByZXR1cm4gZGVsYXkobXMsIHRoaXMpO1xufTtcblxudmFyIGFmdGVyVGltZW91dCA9IGZ1bmN0aW9uIChwcm9taXNlLCBtZXNzYWdlLCBwYXJlbnQpIHtcbiAgICB2YXIgZXJyO1xuICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBlcnIgPSBtZXNzYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyID0gbmV3IFRpbWVvdXRFcnJvcihcIm9wZXJhdGlvbiB0aW1lZCBvdXRcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnIgPSBuZXcgVGltZW91dEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB1dGlsLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihlcnIpO1xuICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UoZXJyKTtcbiAgICBwcm9taXNlLl9yZWplY3QoZXJyKTtcblxuICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnQuY2FuY2VsKCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gc3VjY2Vzc0NsZWFyKHZhbHVlKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuaGFuZGxlKTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZhaWx1cmVDbGVhcihyZWFzb24pIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oYW5kbGUpO1xuICAgIHRocm93IHJlYXNvbjtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIChtcywgbWVzc2FnZSkge1xuICAgIG1zID0gK21zO1xuICAgIHZhciByZXQsIHBhcmVudDtcblxuICAgIHZhciBoYW5kbGVXcmFwcGVyID0gbmV3IEhhbmRsZVdyYXBwZXIoc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0VGltZW91dCgpIHtcbiAgICAgICAgaWYgKHJldC5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgYWZ0ZXJUaW1lb3V0KHJldCwgbWVzc2FnZSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgIH0sIG1zKSk7XG5cbiAgICBpZiAoZGVidWcuY2FuY2VsbGF0aW9uKCkpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy50aGVuKCk7XG4gICAgICAgIHJldCA9IHBhcmVudC5fdGhlbihzdWNjZXNzQ2xlYXIsIGZhaWx1cmVDbGVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIGhhbmRsZVdyYXBwZXIsIHVuZGVmaW5lZCk7XG4gICAgICAgIHJldC5fc2V0T25DYW5jZWwoaGFuZGxlV3JhcHBlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gdGhpcy5fdGhlbihzdWNjZXNzQ2xlYXIsIGZhaWx1cmVDbGVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIGhhbmRsZVdyYXBwZXIsIHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn07XG5cbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwzNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFByb21pc2UsIGFwaVJlamVjdGlvbiwgdHJ5Q29udmVydFRvUHJvbWlzZSxcbiAgICBjcmVhdGVDb250ZXh0LCBJTlRFUk5BTCwgZGVidWcpIHtcbiAgICB2YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG4gICAgdmFyIFR5cGVFcnJvciA9IF9kZXJlcV8oXCIuL2Vycm9yc1wiKS5UeXBlRXJyb3I7XG4gICAgdmFyIGluaGVyaXRzID0gX2RlcmVxXyhcIi4vdXRpbFwiKS5pbmhlcml0cztcbiAgICB2YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuICAgIHZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG4gICAgdmFyIE5VTEwgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHRocm93ZXIoZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9LCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYXN0UHJlc2VydmluZ0Rpc3Bvc2FibGUodGhlbmFibGUpIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UodGhlbmFibGUpO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlICE9PSB0aGVuYWJsZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHRoZW5hYmxlLl9pc0Rpc3Bvc2FibGUgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHRoZW5hYmxlLl9nZXREaXNwb3NlciA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICB0aGVuYWJsZS5faXNEaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fc2V0RGlzcG9zYWJsZSh0aGVuYWJsZS5fZ2V0RGlzcG9zZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcG9zZShyZXNvdXJjZXMsIGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgbGVuID0gcmVzb3VyY2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBsZW4pIHJldHVybiByZXQuX2Z1bGZpbGwoKTtcbiAgICAgICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0UHJlc2VydmluZ0Rpc3Bvc2FibGUocmVzb3VyY2VzW2krK10pO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX2lzRGlzcG9zYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fZ2V0RGlzcG9zZXIoKS50cnlEaXNwb3NlKGluc3BlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzLnByb21pc2UpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93ZXIoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVByb21pc2UuX3RoZW4oaXRlcmF0b3IsIHRocm93ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVyYXRvcigpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIERpc3Bvc2VyKGRhdGEsIHByb21pc2UsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBwcm9taXNlO1xuICAgICAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfTtcblxuICAgIERpc3Bvc2VyLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnJlc291cmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9taXNlKCkuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZSgpLnZhbHVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5VTEw7XG4gICAgfTtcblxuICAgIERpc3Bvc2VyLnByb3RvdHlwZS50cnlEaXNwb3NlID0gZnVuY3Rpb24oaW5zcGVjdGlvbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlKCk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5fY29udGV4dDtcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgY29udGV4dC5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgdmFyIHJldCA9IHJlc291cmNlICE9PSBOVUxMXG4gICAgICAgICAgICA/IHRoaXMuZG9EaXNwb3NlKHJlc291cmNlLCBpbnNwZWN0aW9uKSA6IG51bGw7XG4gICAgICAgIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIGNvbnRleHQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fdW5zZXREaXNwb3NhYmxlKCk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5pc0Rpc3Bvc2VyID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIChkICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZC5yZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGQudHJ5RGlzcG9zZSA9PT0gXCJmdW5jdGlvblwiKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gRnVuY3Rpb25EaXNwb3NlcihmbiwgcHJvbWlzZSwgY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yJChmbiwgcHJvbWlzZSwgY29udGV4dCk7XG4gICAgfVxuICAgIGluaGVyaXRzKEZ1bmN0aW9uRGlzcG9zZXIsIERpc3Bvc2VyKTtcblxuICAgIEZ1bmN0aW9uRGlzcG9zZXIucHJvdG90eXBlLmRvRGlzcG9zZSA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgaW5zcGVjdGlvbikge1xuICAgICAgICB2YXIgZm4gPSB0aGlzLmRhdGEoKTtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwocmVzb3VyY2UsIHJlc291cmNlLCBpbnNwZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWF5YmVVbndyYXBEaXNwb3Nlcih2YWx1ZSkge1xuICAgICAgICBpZiAoRGlzcG9zZXIuaXNEaXNwb3Nlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMuaW5kZXhdLl9zZXREaXNwb3NhYmxlKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5wcm9taXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFJlc291cmNlTGlzdChsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXNbbGVuZ3RoLTFdID0gbnVsbDtcbiAgICB9XG5cbiAgICBSZXNvdXJjZUxpc3QucHJvdG90eXBlLl9yZXN1bHRDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNbaV07XG4gICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNhbmNlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByb21pc2UudXNpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuIDwgMikgcmV0dXJuIGFwaVJlamVjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieW91IG11c3QgcGFzcyBhdCBsZWFzdCAyIGFyZ3VtZW50cyB0byBQcm9taXNlLnVzaW5nXCIpO1xuICAgICAgICB2YXIgZm4gPSBhcmd1bWVudHNbbGVuIC0gMV07XG4gICAgICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGZuKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlucHV0O1xuICAgICAgICB2YXIgc3ByZWFkQXJncyA9IHRydWU7XG4gICAgICAgIGlmIChsZW4gPT09IDIgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGxlbiA9IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgICAgIHNwcmVhZEFyZ3MgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0ID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgbGVuLS07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc291cmNlcyA9IG5ldyBSZXNvdXJjZUxpc3QobGVuKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlID0gaW5wdXRbaV07XG4gICAgICAgICAgICBpZiAoRGlzcG9zZXIuaXNEaXNwb3NlcihyZXNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzcG9zZXIgPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5fc2V0RGlzcG9zYWJsZShkaXNwb3Nlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3RoZW4obWF5YmVVbndyYXBEaXNwb3NlciwgbnVsbCwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlczogcmVzb3VyY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgICAgICAgICAgICAgIH0sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb3VyY2VzW2ldID0gcmVzb3VyY2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVmbGVjdGVkUmVzb3VyY2VzID0gbmV3IEFycmF5KHJlc291cmNlcy5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZmxlY3RlZFJlc291cmNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcmVmbGVjdGVkUmVzb3VyY2VzW2ldID0gUHJvbWlzZS5yZXNvbHZlKHJlc291cmNlc1tpXSkucmVmbGVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdFByb21pc2UgPSBQcm9taXNlLmFsbChyZWZsZWN0ZWRSZXNvdXJjZXMpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihpbnNwZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5zcGVjdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluc3BlY3Rpb24gPSBpbnNwZWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc3BlY3Rpb24uaXNSZWplY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iai5lID0gaW5zcGVjdGlvbi5lcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpbnNwZWN0aW9uLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFByb21pc2UuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5zcGVjdGlvbnNbaV0gPSBpbnNwZWN0aW9uLnZhbHVlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb21pc2UuX3B1c2hDb250ZXh0KCk7XG5cbiAgICAgICAgICAgICAgICBmbiA9IHRyeUNhdGNoKGZuKTtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gc3ByZWFkQXJnc1xuICAgICAgICAgICAgICAgICAgICA/IGZuLmFwcGx5KHVuZGVmaW5lZCwgaW5zcGVjdGlvbnMpIDogZm4oaW5zcGVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlQ3JlYXRlZCA9IHByb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBkZWJ1Zy5jaGVja0ZvcmdvdHRlblJldHVybnMoXG4gICAgICAgICAgICAgICAgICAgIHJldCwgcHJvbWlzZUNyZWF0ZWQsIFwiUHJvbWlzZS51c2luZ1wiLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSByZXN1bHRQcm9taXNlLmxhc3RseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBpbnNwZWN0aW9uID0gbmV3IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb24ocmVzdWx0UHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gZGlzcG9zZShyZXNvdXJjZXMsIGluc3BlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzb3VyY2VzLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICBwcm9taXNlLl9zZXRPbkNhbmNlbChyZXNvdXJjZXMpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX3NldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAoZGlzcG9zZXIpIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEzMTA3MjtcbiAgICAgICAgdGhpcy5fZGlzcG9zZXIgPSBkaXNwb3NlcjtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX2lzRGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEzMTA3MikgPiAwO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5fZ2V0RGlzcG9zZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwb3NlcjtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MTMxMDcyKTtcbiAgICAgICAgdGhpcy5fZGlzcG9zZXIgPSB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLmRpc3Bvc2VyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbkRpc3Bvc2VyKGZuLCB0aGlzLCBjcmVhdGVDb250ZXh0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICB9O1xuXG59O1xuXG59LHtcIi4vZXJyb3JzXCI6MTIsXCIuL3V0aWxcIjozNn1dLDM2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIGVzNSA9IF9kZXJlcV8oXCIuL2VzNVwiKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgPT0gXCJ1bmRlZmluZWRcIjtcblxudmFyIGVycm9yT2JqID0ge2U6IHt9fTtcbnZhciB0cnlDYXRjaFRhcmdldDtcbnZhciBnbG9iYWxPYmplY3QgPSB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOlxuICAgIHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOlxuICAgIHRoaXMgIT09IHVuZGVmaW5lZCA/IHRoaXMgOiBudWxsO1xuXG5mdW5jdGlvbiB0cnlDYXRjaGVyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0cnlDYXRjaFRhcmdldDtcbiAgICAgICAgdHJ5Q2F0Y2hUYXJnZXQgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRyeUNhdGNoKGZuKSB7XG4gICAgdHJ5Q2F0Y2hUYXJnZXQgPSBmbjtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hlcjtcbn1cblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24oQ2hpbGQsIFBhcmVudCkge1xuICAgIHZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgICBmdW5jdGlvbiBUKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkID0gUGFyZW50O1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gUGFyZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3AuY2FsbChQYXJlbnQucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLmNoYXJBdChwcm9wZXJ0eU5hbWUubGVuZ3RoLTEpICE9PSBcIiRcIlxuICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZSArIFwiJFwiXSA9IFBhcmVudC5wcm90b3R5cGVbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBULnByb3RvdHlwZSA9IFBhcmVudC5wcm90b3R5cGU7XG4gICAgQ2hpbGQucHJvdG90eXBlID0gbmV3IFQoKTtcbiAgICByZXR1cm4gQ2hpbGQucHJvdG90eXBlO1xufTtcblxuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09IG51bGwgfHwgdmFsID09PSB0cnVlIHx8IHZhbCA9PT0gZmFsc2UgfHxcbiAgICAgICAgdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiO1xuXG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gbWF5YmVXcmFwQXNFcnJvcihtYXliZUVycm9yKSB7XG4gICAgaWYgKCFpc1ByaW1pdGl2ZShtYXliZUVycm9yKSkgcmV0dXJuIG1heWJlRXJyb3I7XG5cbiAgICByZXR1cm4gbmV3IEVycm9yKHNhZmVUb1N0cmluZyhtYXliZUVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIHdpdGhBcHBlbmRlZCh0YXJnZXQsIGFwcGVuZGVlKSB7XG4gICAgdmFyIGxlbiA9IHRhcmdldC5sZW5ndGg7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShsZW4gKyAxKTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgcmV0W2ldID0gdGFyZ2V0W2ldO1xuICAgIH1cbiAgICByZXRbaV0gPSBhcHBlbmRlZTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBnZXREYXRhUHJvcGVydHlPckRlZmF1bHQob2JqLCBrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmIChlczUuaXNFUzUpIHtcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgICAgICBpZiAoZGVzYyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gZGVzYy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSA/IG9ialtrZXldIDogdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90RW51bWVyYWJsZVByb3Aob2JqLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZShvYmopKSByZXR1cm4gb2JqO1xuICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiB0aHJvd2VyKHIpIHtcbiAgICB0aHJvdyByO1xufVxuXG52YXIgaW5oZXJpdGVkRGF0YUtleXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV4Y2x1ZGVkUHJvdG90eXBlcyA9IFtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLFxuICAgICAgICBPYmplY3QucHJvdG90eXBlLFxuICAgICAgICBGdW5jdGlvbi5wcm90b3R5cGVcbiAgICBdO1xuXG4gICAgdmFyIGlzRXhjbHVkZWRQcm90byA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4Y2x1ZGVkUHJvdG90eXBlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkUHJvdG90eXBlc1tpXSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBpZiAoZXM1LmlzRVM1KSB7XG4gICAgICAgIHZhciBnZXRLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBbXTtcbiAgICAgICAgICAgIHZhciB2aXNpdGVkS2V5cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICB3aGlsZSAob2JqICE9IG51bGwgJiYgIWlzRXhjbHVkZWRQcm90byhvYmopKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleXM7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IGdldEtleXMob2JqKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2l0ZWRLZXlzW2tleV0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2MgIT0gbnVsbCAmJiBkZXNjLmdldCA9PSBudWxsICYmIGRlc2Muc2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqID0gZXM1LmdldFByb3RvdHlwZU9mKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIGlmIChpc0V4Y2x1ZGVkUHJvdG8ob2JqKSkgcmV0dXJuIFtdO1xuICAgICAgICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICAgICAgICAvKmpzaGludCBmb3JpbjpmYWxzZSAqL1xuICAgICAgICAgICAgZW51bWVyYXRpb246IGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcC5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhjbHVkZWRQcm90b3R5cGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcC5jYWxsKGV4Y2x1ZGVkUHJvdG90eXBlc1tpXSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIGVudW1lcmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICB9XG5cbn0pKCk7XG5cbnZhciB0aGlzQXNzaWdubWVudFBhdHRlcm4gPSAvdGhpc1xccypcXC5cXHMqXFxTK1xccyo9LztcbmZ1bmN0aW9uIGlzQ2xhc3MoZm4pIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gZXM1Lm5hbWVzKGZuLnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAgIHZhciBoYXNNZXRob2RzID0gZXM1LmlzRVM1ICYmIGtleXMubGVuZ3RoID4gMTtcbiAgICAgICAgICAgIHZhciBoYXNNZXRob2RzT3RoZXJUaGFuQ29uc3RydWN0b3IgPSBrZXlzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAhKGtleXMubGVuZ3RoID09PSAxICYmIGtleXNbMF0gPT09IFwiY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICB2YXIgaGFzVGhpc0Fzc2lnbm1lbnRBbmRTdGF0aWNNZXRob2RzID1cbiAgICAgICAgICAgICAgICB0aGlzQXNzaWdubWVudFBhdHRlcm4udGVzdChmbiArIFwiXCIpICYmIGVzNS5uYW1lcyhmbikubGVuZ3RoID4gMDtcblxuICAgICAgICAgICAgaWYgKGhhc01ldGhvZHMgfHwgaGFzTWV0aG9kc090aGVyVGhhbkNvbnN0cnVjdG9yIHx8XG4gICAgICAgICAgICAgICAgaGFzVGhpc0Fzc2lnbm1lbnRBbmRTdGF0aWNNZXRob2RzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9GYXN0UHJvcGVydGllcyhvYmopIHtcbiAgICAvKmpzaGludCAtVzAyNywtVzA1NSwtVzAzMSovXG4gICAgZnVuY3Rpb24gRmFrZUNvbnN0cnVjdG9yKCkge31cbiAgICBGYWtlQ29uc3RydWN0b3IucHJvdG90eXBlID0gb2JqO1xuICAgIHZhciBsID0gODtcbiAgICB3aGlsZSAobC0tKSBuZXcgRmFrZUNvbnN0cnVjdG9yKCk7XG4gICAgcmV0dXJuIG9iajtcbiAgICBldmFsKG9iaik7XG59XG5cbnZhciByaWRlbnQgPSAvXlthLXokX11bYS16JF8wLTldKiQvaTtcbmZ1bmN0aW9uIGlzSWRlbnRpZmllcihzdHIpIHtcbiAgICByZXR1cm4gcmlkZW50LnRlc3Qoc3RyKTtcbn1cblxuZnVuY3Rpb24gZmlsbGVkUmFuZ2UoY291bnQsIHByZWZpeCwgc3VmZml4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgcmV0W2ldID0gcHJlZml4ICsgaSArIHN1ZmZpeDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc2FmZVRvU3RyaW5nKG9iaikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBvYmogKyBcIlwiO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFwiW25vIHN0cmluZyByZXByZXNlbnRhdGlvbl1cIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3Iob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEVycm9yIHx8XG4gICAgICAgIChvYmogIT09IG51bGwgJiZcbiAgICAgICAgICAgdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICB0eXBlb2Ygb2JqLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgdHlwZW9mIG9iai5uYW1lID09PSBcInN0cmluZ1wiKTtcbn1cblxuZnVuY3Rpb24gbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGUpIHtcbiAgICB0cnkge1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcChlLCBcImlzT3BlcmF0aW9uYWxcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGNhdGNoKGlnbm9yZSkge31cbn1cblxuZnVuY3Rpb24gb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24oZSkge1xuICAgIGlmIChlID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKChlIGluc3RhbmNlb2YgRXJyb3JbXCJfX0JsdWViaXJkRXJyb3JUeXBlc19fXCJdLk9wZXJhdGlvbmFsRXJyb3IpIHx8XG4gICAgICAgIGVbXCJpc09wZXJhdGlvbmFsXCJdID09PSB0cnVlKTtcbn1cblxuZnVuY3Rpb24gY2FuQXR0YWNoVHJhY2Uob2JqKSB7XG4gICAgcmV0dXJuIGlzRXJyb3Iob2JqKSAmJiBlczUucHJvcGVydHlJc1dyaXRhYmxlKG9iaiwgXCJzdGFja1wiKTtcbn1cblxudmFyIGVuc3VyZUVycm9yT2JqZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmICghKFwic3RhY2tcIiBpbiBuZXcgRXJyb3IoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY2FuQXR0YWNoVHJhY2UodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB0cnkge3Rocm93IG5ldyBFcnJvcihzYWZlVG9TdHJpbmcodmFsdWUpKTt9XG4gICAgICAgICAgICBjYXRjaChlcnIpIHtyZXR1cm4gZXJyO31cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChjYW5BdHRhY2hUcmFjZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3Ioc2FmZVRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgfVxufSkoKTtcblxuZnVuY3Rpb24gY2xhc3NTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cblxuZnVuY3Rpb24gY29weURlc2NyaXB0b3JzKGZyb20sIHRvLCBmaWx0ZXIpIHtcbiAgICB2YXIga2V5cyA9IGVzNS5uYW1lcyhmcm9tKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIGlmIChmaWx0ZXIoa2V5KSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlczUuZGVmaW5lUHJvcGVydHkodG8sIGtleSwgZXM1LmdldERlc2NyaXB0b3IoZnJvbSwga2V5KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBhc0FycmF5ID0gZnVuY3Rpb24odikge1xuICAgIGlmIChlczUuaXNBcnJheSh2KSkge1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5pZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICB2YXIgQXJyYXlGcm9tID0gdHlwZW9mIEFycmF5LmZyb20gPT09IFwiZnVuY3Rpb25cIiA/IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odik7XG4gICAgfSA6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICB2YXIgaXQgPSB2W1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgdmFyIGl0UmVzdWx0O1xuICAgICAgICB3aGlsZSAoISgoaXRSZXN1bHQgPSBpdC5uZXh0KCkpLmRvbmUpKSB7XG4gICAgICAgICAgICByZXQucHVzaChpdFJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgYXNBcnJheSA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgaWYgKGVzNS5pc0FycmF5KHYpKSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSBlbHNlIGlmICh2ICE9IG51bGwgJiYgdHlwZW9mIHZbU3ltYm9sLml0ZXJhdG9yXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXlGcm9tKHYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG59XG5cbnZhciBpc05vZGUgPSB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICBjbGFzc1N0cmluZyhwcm9jZXNzKS50b0xvd2VyQ2FzZSgpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIjtcblxudmFyIGhhc0VudlZhcmlhYmxlcyA9IHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIHByb2Nlc3MuZW52ICE9PSBcInVuZGVmaW5lZFwiO1xuXG5mdW5jdGlvbiBlbnYoa2V5KSB7XG4gICAgcmV0dXJuIGhhc0VudlZhcmlhYmxlcyA/IHByb2Nlc3MuZW52W2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldE5hdGl2ZVByb21pc2UoKSB7XG4gICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oKXt9KTtcbiAgICAgICAgICAgIGlmICh7fS50b1N0cmluZy5jYWxsKHByb21pc2UpID09PSBcIltvYmplY3QgUHJvbWlzZV1cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZG9tYWluQmluZChzZWxmLCBjYikge1xuICAgIHJldHVybiBzZWxmLmJpbmQoY2IpO1xufVxuXG52YXIgcmV0ID0ge1xuICAgIGlzQ2xhc3M6IGlzQ2xhc3MsXG4gICAgaXNJZGVudGlmaWVyOiBpc0lkZW50aWZpZXIsXG4gICAgaW5oZXJpdGVkRGF0YUtleXM6IGluaGVyaXRlZERhdGFLZXlzLFxuICAgIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdDogZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0LFxuICAgIHRocm93ZXI6IHRocm93ZXIsXG4gICAgaXNBcnJheTogZXM1LmlzQXJyYXksXG4gICAgYXNBcnJheTogYXNBcnJheSxcbiAgICBub3RFbnVtZXJhYmxlUHJvcDogbm90RW51bWVyYWJsZVByb3AsXG4gICAgaXNQcmltaXRpdmU6IGlzUHJpbWl0aXZlLFxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgICBpc0Vycm9yOiBpc0Vycm9yLFxuICAgIGNhbkV2YWx1YXRlOiBjYW5FdmFsdWF0ZSxcbiAgICBlcnJvck9iajogZXJyb3JPYmosXG4gICAgdHJ5Q2F0Y2g6IHRyeUNhdGNoLFxuICAgIGluaGVyaXRzOiBpbmhlcml0cyxcbiAgICB3aXRoQXBwZW5kZWQ6IHdpdGhBcHBlbmRlZCxcbiAgICBtYXliZVdyYXBBc0Vycm9yOiBtYXliZVdyYXBBc0Vycm9yLFxuICAgIHRvRmFzdFByb3BlcnRpZXM6IHRvRmFzdFByb3BlcnRpZXMsXG4gICAgZmlsbGVkUmFuZ2U6IGZpbGxlZFJhbmdlLFxuICAgIHRvU3RyaW5nOiBzYWZlVG9TdHJpbmcsXG4gICAgY2FuQXR0YWNoVHJhY2U6IGNhbkF0dGFjaFRyYWNlLFxuICAgIGVuc3VyZUVycm9yT2JqZWN0OiBlbnN1cmVFcnJvck9iamVjdCxcbiAgICBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbjogb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sXG4gICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uOiBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24sXG4gICAgY2xhc3NTdHJpbmc6IGNsYXNzU3RyaW5nLFxuICAgIGNvcHlEZXNjcmlwdG9yczogY29weURlc2NyaXB0b3JzLFxuICAgIGhhc0RldlRvb2xzOiB0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZSAmJlxuICAgICAgICAgICAgICAgICB0eXBlb2YgY2hyb21lLmxvYWRUaW1lcyA9PT0gXCJmdW5jdGlvblwiLFxuICAgIGlzTm9kZTogaXNOb2RlLFxuICAgIGhhc0VudlZhcmlhYmxlczogaGFzRW52VmFyaWFibGVzLFxuICAgIGVudjogZW52LFxuICAgIGdsb2JhbDogZ2xvYmFsT2JqZWN0LFxuICAgIGdldE5hdGl2ZVByb21pc2U6IGdldE5hdGl2ZVByb21pc2UsXG4gICAgZG9tYWluQmluZDogZG9tYWluQmluZFxufTtcbnJldC5pc1JlY2VudE5vZGUgPSByZXQuaXNOb2RlICYmIChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmVyc2lvbiA9IHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdChcIi5cIikubWFwKE51bWJlcik7XG4gICAgcmV0dXJuICh2ZXJzaW9uWzBdID09PSAwICYmIHZlcnNpb25bMV0gPiAxMCkgfHwgKHZlcnNpb25bMF0gPiAwKTtcbn0pKCk7XG5cbmlmIChyZXQuaXNOb2RlKSByZXQudG9GYXN0UHJvcGVydGllcyhwcm9jZXNzKTtcblxudHJ5IHt0aHJvdyBuZXcgRXJyb3IoKTsgfSBjYXRjaCAoZSkge3JldC5sYXN0TGluZUVycm9yID0gZTt9XG5tb2R1bGUuZXhwb3J0cyA9IHJldDtcblxufSx7XCIuL2VzNVwiOjEzfV19LHt9LFs0XSkoNClcbn0pOyAgICAgICAgICAgICAgICAgICAgO2lmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgIT09IG51bGwpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LlAgPSB3aW5kb3cuUHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgIT09IG51bGwpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuUCA9IHNlbGYuUHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JsdWViaXJkL2pzL2Jyb3dzZXIvYmx1ZWJpcmQuanNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk9yaWdpbiA9IGV4cG9ydHMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycztcbmV4cG9ydHMuZGVwcmVjYXRlZCA9IGRlcHJlY2F0ZWQ7XG5leHBvcnRzLm1peGluID0gbWl4aW47XG5leHBvcnRzLnByb3RvY29sID0gcHJvdG9jb2w7XG5cbnZhciBfYXVyZWxpYVBhbCA9IHJlcXVpcmUoJ2F1cmVsaWEtcGFsJyk7XG5cblxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnKTtcbn1cblxudmFyIG1ldGFkYXRhID0gZXhwb3J0cy5tZXRhZGF0YSA9IHtcbiAgcmVzb3VyY2U6ICdhdXJlbGlhOnJlc291cmNlJyxcbiAgcGFyYW1UeXBlczogJ2Rlc2lnbjpwYXJhbXR5cGVzJyxcbiAgcHJvcGVydHlUeXBlOiAnZGVzaWduOnR5cGUnLFxuICBwcm9wZXJ0aWVzOiAnZGVzaWduOnByb3BlcnRpZXMnLFxuICBnZXQ6IGZ1bmN0aW9uIGdldChtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBtZXRhZGF0YS5nZXRPd24obWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBtZXRhZGF0YS5nZXQobWV0YWRhdGFLZXksIE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpLCB0YXJnZXRLZXkpIDogcmVzdWx0O1xuICB9LFxuICBnZXRPd246IGZ1bmN0aW9uIGdldE93bihtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBSZWZsZWN0LmdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSk7XG4gIH0sXG4gIGRlZmluZTogZnVuY3Rpb24gZGVmaW5lKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSkge1xuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KTtcbiAgfSxcbiAgZ2V0T3JDcmVhdGVPd246IGZ1bmN0aW9uIGdldE9yQ3JlYXRlT3duKG1ldGFkYXRhS2V5LCBUeXBlLCB0YXJnZXQsIHRhcmdldEtleSkge1xuICAgIHZhciByZXN1bHQgPSBtZXRhZGF0YS5nZXRPd24obWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KTtcblxuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gbmV3IFR5cGUoKTtcbiAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIHJlc3VsdCwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbnZhciBvcmlnaW5TdG9yYWdlID0gbmV3IE1hcCgpO1xudmFyIHVua25vd25PcmlnaW4gPSBPYmplY3QuZnJlZXplKHsgbW9kdWxlSWQ6IHVuZGVmaW5lZCwgbW9kdWxlTWVtYmVyOiB1bmRlZmluZWQgfSk7XG5cbnZhciBPcmlnaW4gPSBleHBvcnRzLk9yaWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT3JpZ2luKG1vZHVsZUlkLCBtb2R1bGVNZW1iZXIpIHtcbiAgICBcblxuICAgIHRoaXMubW9kdWxlSWQgPSBtb2R1bGVJZDtcbiAgICB0aGlzLm1vZHVsZU1lbWJlciA9IG1vZHVsZU1lbWJlcjtcbiAgfVxuXG4gIE9yaWdpbi5nZXQgPSBmdW5jdGlvbiBnZXQoZm4pIHtcbiAgICB2YXIgb3JpZ2luID0gb3JpZ2luU3RvcmFnZS5nZXQoZm4pO1xuXG4gICAgaWYgKG9yaWdpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBfYXVyZWxpYVBhbC5QTEFURk9STS5lYWNoTW9kdWxlKGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBleHAgPSB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgICAgaWYgKGV4cCA9PT0gZm4pIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5TdG9yYWdlLnNldChmbiwgb3JpZ2luID0gbmV3IE9yaWdpbihrZXksIG5hbWUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09IGZuKSB7XG4gICAgICAgICAgb3JpZ2luU3RvcmFnZS5zZXQoZm4sIG9yaWdpbiA9IG5ldyBPcmlnaW4oa2V5LCAnZGVmYXVsdCcpKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBvcmlnaW4gfHwgdW5rbm93bk9yaWdpbjtcbiAgfTtcblxuICBPcmlnaW4uc2V0ID0gZnVuY3Rpb24gc2V0KGZuLCBvcmlnaW4pIHtcbiAgICBvcmlnaW5TdG9yYWdlLnNldChmbiwgb3JpZ2luKTtcbiAgfTtcblxuICByZXR1cm4gT3JpZ2luO1xufSgpO1xuXG5mdW5jdGlvbiBkZWNvcmF0b3JzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlc3RbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYXBwbGljYXRvciA9IGZ1bmN0aW9uIGFwcGxpY2F0b3IodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgaSA9IHJlc3QubGVuZ3RoO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3IgfHwge1xuICAgICAgICB2YWx1ZTogdGFyZ2V0W2tleV0sXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH07XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IHJlc3RbaV0odGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHx8IGRlc2NyaXB0b3I7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdGFyZ2V0ID0gcmVzdFtpXSh0YXJnZXQpIHx8IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGFwcGxpY2F0b3Iub24gPSBhcHBsaWNhdG9yO1xuICByZXR1cm4gYXBwbGljYXRvcjtcbn1cblxuZnVuY3Rpb24gZGVwcmVjYXRlZChvcHRpb25zT3JUYXJnZXQsIG1heWJlS2V5LCBtYXliZURlc2NyaXB0b3IpIHtcbiAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG1ldGhvZFNpZ25hdHVyZSA9IHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lICsgJyMnICsga2V5O1xuICAgIHZhciBvcHRpb25zID0gbWF5YmVLZXkgPyB7fSA6IG9wdGlvbnNPclRhcmdldCB8fCB7fTtcbiAgICB2YXIgbWVzc2FnZSA9ICdERVBSRUNBVElPTiAtICcgKyBtZXRob2RTaWduYXR1cmU7XG5cbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignT25seSBtZXRob2RzIGNhbiBiZSBtYXJrZWQgYXMgZGVwcmVjYXRlZC4nKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tZXNzYWdlKSB7XG4gICAgICBtZXNzYWdlICs9ICcgLSAnICsgb3B0aW9ucy5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVzY3JpcHRvciwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcHJlY2F0aW9uV3JhcHBlcigpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYXliZUtleSA/IGRlY29yYXRvcihvcHRpb25zT3JUYXJnZXQsIG1heWJlS2V5LCBtYXliZURlc2NyaXB0b3IpIDogZGVjb3JhdG9yO1xufVxuXG5mdW5jdGlvbiBtaXhpbihiZWhhdmlvcikge1xuICB2YXIgaW5zdGFuY2VLZXlzID0gT2JqZWN0LmtleXMoYmVoYXZpb3IpO1xuXG4gIGZ1bmN0aW9uIF9taXhpbihwb3NzaWJsZSkge1xuICAgIHZhciBkZWNvcmF0b3IgPSBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0KSB7XG4gICAgICB2YXIgcmVzb2x2ZWRUYXJnZXQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gdGFyZ2V0LnByb3RvdHlwZSA6IHRhcmdldDtcblxuICAgICAgdmFyIGkgPSBpbnN0YW5jZUtleXMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSBpbnN0YW5jZUtleXNbaV07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlZFRhcmdldCwgcHJvcGVydHksIHtcbiAgICAgICAgICB2YWx1ZTogYmVoYXZpb3JbcHJvcGVydHldLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gcG9zc2libGUgPyBkZWNvcmF0b3IocG9zc2libGUpIDogZGVjb3JhdG9yO1xuICB9XG5cbiAgcmV0dXJuIF9taXhpbjtcbn1cblxuZnVuY3Rpb24gYWx3YXlzVmFsaWQoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gbm9Db21wb3NlKCkge31cblxuZnVuY3Rpb24gZW5zdXJlUHJvdG9jb2xPcHRpb25zKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICB2YWxpZGF0ZTogb3B0aW9uc1xuICAgIH07XG4gIH1cblxuICBpZiAoIW9wdGlvbnMudmFsaWRhdGUpIHtcbiAgICBvcHRpb25zLnZhbGlkYXRlID0gYWx3YXlzVmFsaWQ7XG4gIH1cblxuICBpZiAoIW9wdGlvbnMuY29tcG9zZSkge1xuICAgIG9wdGlvbnMuY29tcG9zZSA9IG5vQ29tcG9zZTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm90b2NvbFZhbGlkYXRvcih2YWxpZGF0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciByZXN1bHQgPSB2YWxpZGF0ZSh0YXJnZXQpO1xuICAgIHJldHVybiByZXN1bHQgPT09IHRydWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3RvY29sQXNzZXJ0ZXIobmFtZSwgdmFsaWRhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB2YXIgcmVzdWx0ID0gdmFsaWRhdGUodGFyZ2V0KTtcbiAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0IHx8IG5hbWUgKyAnIHdhcyBub3QgY29ycmVjdGx5IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvdG9jb2wobmFtZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gZW5zdXJlUHJvdG9jb2xPcHRpb25zKG9wdGlvbnMpO1xuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQodGFyZ2V0KSB7XG4gICAgdmFyIHJlc29sdmVkVGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJyA/IHRhcmdldC5wcm90b3R5cGUgOiB0YXJnZXQ7XG5cbiAgICBvcHRpb25zLmNvbXBvc2UocmVzb2x2ZWRUYXJnZXQpO1xuICAgIHJlc3VsdC5hc3NlcnQocmVzb2x2ZWRUYXJnZXQpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmVkVGFyZ2V0LCAncHJvdG9jb2w6JyArIG5hbWUsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgcmVzdWx0LnZhbGlkYXRlID0gY3JlYXRlUHJvdG9jb2xWYWxpZGF0b3Iob3B0aW9ucy52YWxpZGF0ZSk7XG4gIHJlc3VsdC5hc3NlcnQgPSBjcmVhdGVQcm90b2NvbEFzc2VydGVyKG5hbWUsIG9wdGlvbnMudmFsaWRhdGUpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnByb3RvY29sLmNyZWF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBlbnN1cmVQcm90b2NvbE9wdGlvbnMob3B0aW9ucyk7XG4gIHZhciBoaWRkZW4gPSAncHJvdG9jb2w6JyArIG5hbWU7XG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQodGFyZ2V0KSB7XG4gICAgdmFyIGRlY29yYXRvciA9IHByb3RvY29sKG5hbWUsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0YXJnZXQgPyBkZWNvcmF0b3IodGFyZ2V0KSA6IGRlY29yYXRvcjtcbiAgfTtcblxuICByZXN1bHQuZGVjb3JhdGVzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmpbaGlkZGVuXSA9PT0gdHJ1ZTtcbiAgfTtcbiAgcmVzdWx0LnZhbGlkYXRlID0gY3JlYXRlUHJvdG9jb2xWYWxpZGF0b3Iob3B0aW9ucy52YWxpZGF0ZSk7XG4gIHJlc3VsdC5hc3NlcnQgPSBjcmVhdGVQcm90b2NvbEFzc2VydGVyKG5hbWUsIG9wdGlvbnMudmFsaWRhdGUpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdXJlbGlhLW1ldGFkYXRhL2Rpc3QvY29tbW9uanMvYXVyZWxpYS1tZXRhZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5yZWxhdGl2ZVRvRmlsZSA9IHJlbGF0aXZlVG9GaWxlO1xuZXhwb3J0cy5qb2luID0gam9pbjtcbmV4cG9ydHMuYnVpbGRRdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmc7XG5leHBvcnRzLnBhcnNlUXVlcnlTdHJpbmcgPSBwYXJzZVF1ZXJ5U3RyaW5nO1xuXG5mdW5jdGlvbiB0cmltRG90cyhhcnkpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFydCA9IGFyeVtpXTtcbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBhcnkuc3BsaWNlKGksIDEpO1xuICAgICAgaSAtPSAxO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgaWYgKGkgPT09IDAgfHwgaSA9PT0gMSAmJiBhcnlbMl0gPT09ICcuLicgfHwgYXJ5W2kgLSAxXSA9PT0gJy4uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgICAgYXJ5LnNwbGljZShpIC0gMSwgMik7XG4gICAgICAgIGkgLT0gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsYXRpdmVUb0ZpbGUobmFtZSwgZmlsZSkge1xuICB2YXIgZmlsZVBhcnRzID0gZmlsZSAmJiBmaWxlLnNwbGl0KCcvJyk7XG4gIHZhciBuYW1lUGFydHMgPSBuYW1lLnRyaW0oKS5zcGxpdCgnLycpO1xuXG4gIGlmIChuYW1lUGFydHNbMF0uY2hhckF0KDApID09PSAnLicgJiYgZmlsZVBhcnRzKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWRCYXNlUGFydHMgPSBmaWxlUGFydHMuc2xpY2UoMCwgZmlsZVBhcnRzLmxlbmd0aCAtIDEpO1xuICAgIG5hbWVQYXJ0cy51bnNoaWZ0LmFwcGx5KG5hbWVQYXJ0cywgbm9ybWFsaXplZEJhc2VQYXJ0cyk7XG4gIH1cblxuICB0cmltRG90cyhuYW1lUGFydHMpO1xuXG4gIHJldHVybiBuYW1lUGFydHMuam9pbignLycpO1xufVxuXG5mdW5jdGlvbiBqb2luKHBhdGgxLCBwYXRoMikge1xuICBpZiAoIXBhdGgxKSB7XG4gICAgcmV0dXJuIHBhdGgyO1xuICB9XG5cbiAgaWYgKCFwYXRoMikge1xuICAgIHJldHVybiBwYXRoMTtcbiAgfVxuXG4gIHZhciBzY2hlbWVNYXRjaCA9IHBhdGgxLm1hdGNoKC9eKFteL10qPzopXFwvLyk7XG4gIHZhciBzY2hlbWUgPSBzY2hlbWVNYXRjaCAmJiBzY2hlbWVNYXRjaC5sZW5ndGggPiAwID8gc2NoZW1lTWF0Y2hbMV0gOiAnJztcbiAgcGF0aDEgPSBwYXRoMS5zdWJzdHIoc2NoZW1lLmxlbmd0aCk7XG5cbiAgdmFyIHVybFByZWZpeCA9IHZvaWQgMDtcbiAgaWYgKHBhdGgxLmluZGV4T2YoJy8vLycpID09PSAwICYmIHNjaGVtZSA9PT0gJ2ZpbGU6Jykge1xuICAgIHVybFByZWZpeCA9ICcvLy8nO1xuICB9IGVsc2UgaWYgKHBhdGgxLmluZGV4T2YoJy8vJykgPT09IDApIHtcbiAgICB1cmxQcmVmaXggPSAnLy8nO1xuICB9IGVsc2UgaWYgKHBhdGgxLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuICAgIHVybFByZWZpeCA9ICcvJztcbiAgfSBlbHNlIHtcbiAgICB1cmxQcmVmaXggPSAnJztcbiAgfVxuXG4gIHZhciB0cmFpbGluZ1NsYXNoID0gcGF0aDIuc2xpY2UoLTEpID09PSAnLycgPyAnLycgOiAnJztcblxuICB2YXIgdXJsMSA9IHBhdGgxLnNwbGl0KCcvJyk7XG4gIHZhciB1cmwyID0gcGF0aDIuc3BsaXQoJy8nKTtcbiAgdmFyIHVybDMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMCwgaWkgPSB1cmwxLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBpZiAodXJsMVtpXSA9PT0gJy4uJykge1xuICAgICAgdXJsMy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHVybDFbaV0gPT09ICcuJyB8fCB1cmwxW2ldID09PSAnJykge1xuICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybDMucHVzaCh1cmwxW2ldKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDAsIF9paSA9IHVybDIubGVuZ3RoOyBfaSA8IF9paTsgKytfaSkge1xuICAgIGlmICh1cmwyW19pXSA9PT0gJy4uJykge1xuICAgICAgdXJsMy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHVybDJbX2ldID09PSAnLicgfHwgdXJsMltfaV0gPT09ICcnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsMy5wdXNoKHVybDJbX2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2NoZW1lICsgdXJsUHJlZml4ICsgdXJsMy5qb2luKCcvJykgKyB0cmFpbGluZ1NsYXNoO1xufVxuXG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xudmFyIGVuY29kZUtleSA9IGZ1bmN0aW9uIGVuY29kZUtleShrKSB7XG4gIHJldHVybiBlbmNvZGUoaykucmVwbGFjZSgnJTI0JywgJyQnKTtcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkUGFyYW0oa2V5LCB2YWx1ZSwgdHJhZGl0aW9uYWwpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0cmFkaXRpb25hbCkge1xuICAgICAgICByZXN1bHQucHVzaChlbmNvZGVLZXkoa2V5KSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFycmF5S2V5ID0ga2V5ICsgJ1snICsgKF90eXBlb2YodmFsdWVbaV0pID09PSAnb2JqZWN0JyAmJiB2YWx1ZVtpXSAhPT0gbnVsbCA/IGkgOiAnJykgKyAnXSc7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYnVpbGRQYXJhbShhcnJheUtleSwgdmFsdWVbaV0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcgJiYgIXRyYWRpdGlvbmFsKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHZhbHVlKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGJ1aWxkUGFyYW0oa2V5ICsgJ1snICsgcHJvcGVydHlOYW1lICsgJ10nLCB2YWx1ZVtwcm9wZXJ0eU5hbWVdKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdC5wdXNoKGVuY29kZUtleShrZXkpICsgJz0nICsgZW5jb2RlKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhwYXJhbXMsIHRyYWRpdGlvbmFsKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcyB8fCB7fSkuc29ydCgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0ga2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHBhaXJzID0gcGFpcnMuY29uY2F0KGJ1aWxkUGFyYW0oa2V5LCBwYXJhbXNba2V5XSwgdHJhZGl0aW9uYWwpKTtcbiAgfVxuXG4gIGlmIChwYWlycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzU2NhbGFyUGFyYW0oZXhpc3RlZFBhcmFtLCB2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleGlzdGVkUGFyYW0pKSB7XG4gICAgZXhpc3RlZFBhcmFtLnB1c2godmFsdWUpO1xuICAgIHJldHVybiBleGlzdGVkUGFyYW07XG4gIH1cbiAgaWYgKGV4aXN0ZWRQYXJhbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtleGlzdGVkUGFyYW0sIHZhbHVlXTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VDb21wbGV4UGFyYW0ocXVlcnlQYXJhbXMsIGtleXMsIHZhbHVlKSB7XG4gIHZhciBjdXJyZW50UGFyYW1zID0gcXVlcnlQYXJhbXM7XG4gIHZhciBrZXlzTGFzdEluZGV4ID0ga2V5cy5sZW5ndGggLSAxO1xuICBmb3IgKHZhciBqID0gMDsgaiA8PSBrZXlzTGFzdEluZGV4OyBqKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tqXSA9PT0gJycgPyBjdXJyZW50UGFyYW1zLmxlbmd0aCA6IGtleXNbal07XG4gICAgaWYgKGogPCBrZXlzTGFzdEluZGV4KSB7XG4gICAgICB2YXIgcHJldlZhbHVlID0gIWN1cnJlbnRQYXJhbXNba2V5XSB8fCBfdHlwZW9mKGN1cnJlbnRQYXJhbXNba2V5XSkgPT09ICdvYmplY3QnID8gY3VycmVudFBhcmFtc1trZXldIDogW2N1cnJlbnRQYXJhbXNba2V5XV07XG4gICAgICBjdXJyZW50UGFyYW1zID0gY3VycmVudFBhcmFtc1trZXldID0gcHJldlZhbHVlIHx8IChpc05hTihrZXlzW2ogKyAxXSkgPyB7fSA6IFtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBhcmFtcyA9IGN1cnJlbnRQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nKSB7XG4gIHZhciBxdWVyeVBhcmFtcyA9IHt9O1xuICBpZiAoIXF1ZXJ5U3RyaW5nIHx8IHR5cGVvZiBxdWVyeVN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICB2YXIgcXVlcnkgPSBxdWVyeVN0cmluZztcbiAgaWYgKHF1ZXJ5LmNoYXJBdCgwKSA9PT0gJz8nKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zdWJzdHIoMSk7XG4gIH1cblxuICB2YXIgcGFpcnMgPSBxdWVyeS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnJicpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgIHZhciBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQocGFpclswXSk7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0ga2V5LnNwbGl0KCddWycpO1xuICAgIHZhciBrZXlzTGFzdEluZGV4ID0ga2V5cy5sZW5ndGggLSAxO1xuXG4gICAgaWYgKC9cXFsvLnRlc3Qoa2V5c1swXSkgJiYgL1xcXSQvLnRlc3Qoa2V5c1trZXlzTGFzdEluZGV4XSkpIHtcbiAgICAgIGtleXNba2V5c0xhc3RJbmRleF0gPSBrZXlzW2tleXNMYXN0SW5kZXhdLnJlcGxhY2UoL1xcXSQvLCAnJyk7XG4gICAgICBrZXlzID0ga2V5cy5zaGlmdCgpLnNwbGl0KCdbJykuY29uY2F0KGtleXMpO1xuICAgICAga2V5c0xhc3RJbmRleCA9IGtleXMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5c0xhc3RJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHBhaXIubGVuZ3RoID49IDIpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBhaXJbMV0gPyBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSkgOiAnJztcbiAgICAgIGlmIChrZXlzTGFzdEluZGV4KSB7XG4gICAgICAgIHBhcnNlQ29tcGxleFBhcmFtKHF1ZXJ5UGFyYW1zLCBrZXlzLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeVBhcmFtc1trZXldID0gcHJvY2Vzc1NjYWxhclBhcmFtKHF1ZXJ5UGFyYW1zW2tleV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBxdWVyeVBhcmFtcztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVyZWxpYS1wYXRoL2Rpc3QvY29tbW9uanMvYXVyZWxpYS1wYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxvYWRlciA9IGV4cG9ydHMuVGVtcGxhdGVSZWdpc3RyeUVudHJ5ID0gZXhwb3J0cy5UZW1wbGF0ZURlcGVuZGVuY3kgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfYXVyZWxpYVBhdGggPSByZXF1aXJlKCdhdXJlbGlhLXBhdGgnKTtcblxudmFyIF9hdXJlbGlhTWV0YWRhdGEgPSByZXF1aXJlKCdhdXJlbGlhLW1ldGFkYXRhJyk7XG5cblxuXG52YXIgVGVtcGxhdGVEZXBlbmRlbmN5ID0gZXhwb3J0cy5UZW1wbGF0ZURlcGVuZGVuY3kgPSBmdW5jdGlvbiBUZW1wbGF0ZURlcGVuZGVuY3koc3JjLCBuYW1lKSB7XG4gIFxuXG4gIHRoaXMuc3JjID0gc3JjO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xufTtcblxudmFyIFRlbXBsYXRlUmVnaXN0cnlFbnRyeSA9IGV4cG9ydHMuVGVtcGxhdGVSZWdpc3RyeUVudHJ5ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUZW1wbGF0ZVJlZ2lzdHJ5RW50cnkoYWRkcmVzcykge1xuICAgIFxuXG4gICAgdGhpcy50ZW1wbGF0ZUlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5mYWN0b3J5SXNSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMucmVzb3VyY2VzID0gbnVsbDtcbiAgICB0aGlzLmRlcGVuZGVuY2llcyA9IG51bGw7XG5cbiAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgIHRoaXMub25SZWFkeSA9IG51bGw7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSBudWxsO1xuICAgIHRoaXMuX2ZhY3RvcnkgPSBudWxsO1xuICB9XG5cbiAgVGVtcGxhdGVSZWdpc3RyeUVudHJ5LnByb3RvdHlwZS5hZGREZXBlbmRlbmN5ID0gZnVuY3Rpb24gYWRkRGVwZW5kZW5jeShzcmMsIG5hbWUpIHtcbiAgICB2YXIgZmluYWxTcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/ICgwLCBfYXVyZWxpYVBhdGgucmVsYXRpdmVUb0ZpbGUpKHNyYywgdGhpcy5hZGRyZXNzKSA6IF9hdXJlbGlhTWV0YWRhdGEuT3JpZ2luLmdldChzcmMpLm1vZHVsZUlkO1xuXG4gICAgdGhpcy5kZXBlbmRlbmNpZXMucHVzaChuZXcgVGVtcGxhdGVEZXBlbmRlbmN5KGZpbmFsU3JjLCBuYW1lKSk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFRlbXBsYXRlUmVnaXN0cnlFbnRyeSwgW3tcbiAgICBrZXk6ICd0ZW1wbGF0ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIGFkZHJlc3MgPSB0aGlzLmFkZHJlc3M7XG4gICAgICB2YXIgcmVxdWlyZXMgPSB2b2lkIDA7XG4gICAgICB2YXIgY3VycmVudCA9IHZvaWQgMDtcbiAgICAgIHZhciBzcmMgPSB2b2lkIDA7XG4gICAgICB2YXIgZGVwZW5kZW5jaWVzID0gdm9pZCAwO1xuXG4gICAgICB0aGlzLl90ZW1wbGF0ZSA9IHZhbHVlO1xuICAgICAgdGhpcy50ZW1wbGF0ZUlzTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgcmVxdWlyZXMgPSB2YWx1ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3JlcXVpcmUnKTtcbiAgICAgIGRlcGVuZGVuY2llcyA9IHRoaXMuZGVwZW5kZW5jaWVzID0gbmV3IEFycmF5KHJlcXVpcmVzLmxlbmd0aCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHJlcXVpcmVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgY3VycmVudCA9IHJlcXVpcmVzW2ldO1xuICAgICAgICBzcmMgPSBjdXJyZW50LmdldEF0dHJpYnV0ZSgnZnJvbScpO1xuXG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCc8cmVxdWlyZT4gZWxlbWVudCBpbiAnICsgYWRkcmVzcyArICcgaGFzIG5vIFwiZnJvbVwiIGF0dHJpYnV0ZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlcGVuZGVuY2llc1tpXSA9IG5ldyBUZW1wbGF0ZURlcGVuZGVuY3koKDAsIF9hdXJlbGlhUGF0aC5yZWxhdGl2ZVRvRmlsZSkoc3JjLCBhZGRyZXNzKSwgY3VycmVudC5nZXRBdHRyaWJ1dGUoJ2FzJykpO1xuXG4gICAgICAgIGlmIChjdXJyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjdXJyZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmYWN0b3J5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9mYWN0b3J5O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuX2ZhY3RvcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZmFjdG9yeUlzUmVhZHkgPSB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZW1wbGF0ZVJlZ2lzdHJ5RW50cnk7XG59KCk7XG5cbnZhciBMb2FkZXIgPSBleHBvcnRzLkxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgIFxuXG4gICAgdGhpcy50ZW1wbGF0ZVJlZ2lzdHJ5ID0ge307XG4gIH1cblxuICBMb2FkZXIucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIG1hcChpZCwgc291cmNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkZXJzIG11c3QgaW1wbGVtZW50IG1hcChpZCwgc291cmNlKS4nKTtcbiAgfTtcblxuICBMb2FkZXIucHJvdG90eXBlLm5vcm1hbGl6ZVN5bmMgPSBmdW5jdGlvbiBub3JtYWxpemVTeW5jKG1vZHVsZUlkLCByZWxhdGl2ZVRvKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkZXJzIG11c3QgaW1wbGVtZW50IG5vcm1hbGl6ZVN5bmMobW9kdWxlSWQsIHJlbGF0aXZlVG8pLicpO1xuICB9O1xuXG4gIExvYWRlci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG1vZHVsZUlkLCByZWxhdGl2ZVRvKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkZXJzIG11c3QgaW1wbGVtZW50IG5vcm1hbGl6ZShtb2R1bGVJZDogc3RyaW5nLCByZWxhdGl2ZVRvOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4uJyk7XG4gIH07XG5cbiAgTG9hZGVyLnByb3RvdHlwZS5sb2FkTW9kdWxlID0gZnVuY3Rpb24gbG9hZE1vZHVsZShpZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTG9hZGVycyBtdXN0IGltcGxlbWVudCBsb2FkTW9kdWxlKGlkKS4nKTtcbiAgfTtcblxuICBMb2FkZXIucHJvdG90eXBlLmxvYWRBbGxNb2R1bGVzID0gZnVuY3Rpb24gbG9hZEFsbE1vZHVsZXMoaWRzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkZXIgbXVzdCBpbXBsZW1lbnQgbG9hZEFsbE1vZHVsZXMoaWRzKS4nKTtcbiAgfTtcblxuICBMb2FkZXIucHJvdG90eXBlLmxvYWRUZW1wbGF0ZSA9IGZ1bmN0aW9uIGxvYWRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRlciBtdXN0IGltcGxlbWVudCBsb2FkVGVtcGxhdGUodXJsKS4nKTtcbiAgfTtcblxuICBMb2FkZXIucHJvdG90eXBlLmxvYWRUZXh0ID0gZnVuY3Rpb24gbG9hZFRleHQodXJsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkZXIgbXVzdCBpbXBsZW1lbnQgbG9hZFRleHQodXJsKS4nKTtcbiAgfTtcblxuICBMb2FkZXIucHJvdG90eXBlLmFwcGx5UGx1Z2luVG9VcmwgPSBmdW5jdGlvbiBhcHBseVBsdWdpblRvVXJsKHVybCwgcGx1Z2luTmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTG9hZGVyIG11c3QgaW1wbGVtZW50IGFwcGx5UGx1Z2luVG9VcmwodXJsLCBwbHVnaW5OYW1lKS4nKTtcbiAgfTtcblxuICBMb2FkZXIucHJvdG90eXBlLmFkZFBsdWdpbiA9IGZ1bmN0aW9uIGFkZFBsdWdpbihwbHVnaW5OYW1lLCBpbXBsZW1lbnRhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignTG9hZGVyIG11c3QgaW1wbGVtZW50IGFkZFBsdWdpbihwbHVnaW5OYW1lLCBpbXBsZW1lbnRhdGlvbikuJyk7XG4gIH07XG5cbiAgTG9hZGVyLnByb3RvdHlwZS5nZXRPckNyZWF0ZVRlbXBsYXRlUmVnaXN0cnlFbnRyeSA9IGZ1bmN0aW9uIGdldE9yQ3JlYXRlVGVtcGxhdGVSZWdpc3RyeUVudHJ5KGFkZHJlc3MpIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVJlZ2lzdHJ5W2FkZHJlc3NdIHx8ICh0aGlzLnRlbXBsYXRlUmVnaXN0cnlbYWRkcmVzc10gPSBuZXcgVGVtcGxhdGVSZWdpc3RyeUVudHJ5KGFkZHJlc3MpKTtcbiAgfTtcblxuICByZXR1cm4gTG9hZGVyO1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdXJlbGlhLWxvYWRlci9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtbG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkFnZ3JlZ2F0ZUVycm9yID0gQWdncmVnYXRlRXJyb3I7XG5leHBvcnRzLmluaXRpYWxpemVQQUwgPSBpbml0aWFsaXplUEFMO1xuZXhwb3J0cy5yZXNldCA9IHJlc2V0O1xuZnVuY3Rpb24gQWdncmVnYXRlRXJyb3IobWVzc2FnZSwgaW5uZXJFcnJvciwgc2tpcElmQWxyZWFkeUFnZ3JlZ2F0ZSkge1xuICBpZiAoaW5uZXJFcnJvcikge1xuICAgIGlmIChpbm5lckVycm9yLmlubmVyRXJyb3IgJiYgc2tpcElmQWxyZWFkeUFnZ3JlZ2F0ZSkge1xuICAgICAgcmV0dXJuIGlubmVyRXJyb3I7XG4gICAgfVxuXG4gICAgdmFyIHNlcGFyYXRvciA9ICdcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4nO1xuXG4gICAgbWVzc2FnZSArPSBzZXBhcmF0b3IgKyAnSW5uZXIgRXJyb3I6XFxuJztcblxuICAgIGlmICh0eXBlb2YgaW5uZXJFcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1lc3NhZ2UgKz0gJ01lc3NhZ2U6ICcgKyBpbm5lckVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5uZXJFcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJ01lc3NhZ2U6ICcgKyBpbm5lckVycm9yLm1lc3NhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlICs9ICdVbmtub3duIElubmVyIEVycm9yIFR5cGUuIERpc3BsYXlpbmcgSW5uZXIgRXJyb3IgYXMgSlNPTjpcXG4gJyArIEpTT04uc3RyaW5naWZ5KGlubmVyRXJyb3IsIG51bGwsICcgICcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJFcnJvci5zdGFjaykge1xuICAgICAgICBtZXNzYWdlICs9ICdcXG5Jbm5lciBFcnJvciBTdGFjazpcXG4nICsgaW5uZXJFcnJvci5zdGFjaztcbiAgICAgICAgbWVzc2FnZSArPSAnXFxuRW5kIElubmVyIEVycm9yIFN0YWNrJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXNzYWdlICs9IHNlcGFyYXRvcjtcbiAgfVxuXG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICBpZiAoaW5uZXJFcnJvcikge1xuICAgIGUuaW5uZXJFcnJvciA9IGlubmVyRXJyb3I7XG4gIH1cblxuICByZXR1cm4gZTtcbn1cblxudmFyIEZFQVRVUkUgPSBleHBvcnRzLkZFQVRVUkUgPSB7fTtcblxudmFyIFBMQVRGT1JNID0gZXhwb3J0cy5QTEFURk9STSA9IHtcbiAgbm9vcDogZnVuY3Rpb24gbm9vcCgpIHt9LFxuICBlYWNoTW9kdWxlOiBmdW5jdGlvbiBlYWNoTW9kdWxlKCkge30sXG4gIG1vZHVsZU5hbWU6IGZ1bmN0aW9uIChfbW9kdWxlTmFtZSkge1xuICAgIGZ1bmN0aW9uIG1vZHVsZU5hbWUoX3gpIHtcbiAgICAgIHJldHVybiBfbW9kdWxlTmFtZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIG1vZHVsZU5hbWUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX21vZHVsZU5hbWUudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG1vZHVsZU5hbWU7XG4gIH0oZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICByZXR1cm4gbW9kdWxlTmFtZTtcbiAgfSlcbn07XG5cblBMQVRGT1JNLmdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGdsb2JhbDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn0oKTtcblxudmFyIERPTSA9IGV4cG9ydHMuRE9NID0ge307XG52YXIgaXNJbml0aWFsaXplZCA9IGV4cG9ydHMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuZnVuY3Rpb24gaW5pdGlhbGl6ZVBBTChjYWxsYmFjaykge1xuICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBleHBvcnRzLmlzSW5pdGlhbGl6ZWQgPSBpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0UHJvcGVydHlEZXNjcmlwdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgT2JqZWN0LmdldFByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChzdWJqZWN0LCBuYW1lKSB7XG4gICAgICB2YXIgcGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHN1YmplY3QsIG5hbWUpO1xuICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHN1YmplY3QpO1xuICAgICAgd2hpbGUgKHR5cGVvZiBwZCA9PT0gJ3VuZGVmaW5lZCcgJiYgcHJvdG8gIT09IG51bGwpIHtcbiAgICAgICAgcGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBuYW1lKTtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBkO1xuICAgIH07XG4gIH1cblxuICBjYWxsYmFjayhQTEFURk9STSwgRkVBVFVSRSwgRE9NKTtcbn1cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICBleHBvcnRzLmlzSW5pdGlhbGl6ZWQgPSBpc0luaXRpYWxpemVkID0gZmFsc2U7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F1cmVsaWEtcGFsL2Rpc3QvY29tbW9uanMvYXVyZWxpYS1wYWwuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ib290c3RyYXAgPSBib290c3RyYXA7XG5cbnJlcXVpcmUoJ2F1cmVsaWEtcG9seWZpbGxzJyk7XG5cbnZhciBfYXVyZWxpYVBhbEJyb3dzZXIgPSByZXF1aXJlKCdhdXJlbGlhLXBhbC1icm93c2VyJyk7XG5cbnZhciBfYXVyZWxpYUxvYWRlcldlYnBhY2sgPSByZXF1aXJlKCdhdXJlbGlhLWxvYWRlci13ZWJwYWNrJyk7XG5cbigwLCBfYXVyZWxpYVBhbEJyb3dzZXIuaW5pdGlhbGl6ZSkoKTtcblxudmFyIGJvb3RzdHJhcFF1ZXVlID0gW107XG52YXIgc2hhcmVkTG9hZGVyID0gbnVsbDtcbnZhciBBdXJlbGlhID0gbnVsbDtcblxuZnVuY3Rpb24gb25Cb290c3RyYXAoY2FsbGJhY2spIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoc2hhcmVkTG9hZGVyKSB7XG4gICAgICByZXNvbHZlKGNhbGxiYWNrKHNoYXJlZExvYWRlcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib290c3RyYXBRdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNvbHZlKGNhbGxiYWNrKHNoYXJlZExvYWRlcikpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWFkeShnbG9iYWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoZ2xvYmFsLmRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHJlc29sdmUoZ2xvYmFsLmRvY3VtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjb21wbGV0ZWQpO1xuICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjb21wbGV0ZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcbiAgICAgIGdsb2JhbC5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY29tcGxldGVkKTtcbiAgICAgIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY29tcGxldGVkKTtcbiAgICAgIHJlc29sdmUoZ2xvYmFsLmRvY3VtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBcHAobG9hZGVyLCBhcHBIb3N0KSB7XG4gIHJldHVybiBjb25maWcobG9hZGVyLCBhcHBIb3N0LCBhcHBIb3N0LmdldEF0dHJpYnV0ZSgnYXVyZWxpYS1hcHAnKSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZyhsb2FkZXIsIGFwcEhvc3QsIGNvbmZpZ01vZHVsZUlkKSB7XG4gIHZhciBhdXJlbGlhID0gbmV3IEF1cmVsaWEobG9hZGVyKTtcbiAgYXVyZWxpYS5ob3N0ID0gYXBwSG9zdDtcbiAgYXVyZWxpYS5jb25maWdNb2R1bGVJZCA9IGNvbmZpZ01vZHVsZUlkIHx8IG51bGw7XG5cbiAgaWYgKGNvbmZpZ01vZHVsZUlkKSB7XG4gICAgcmV0dXJuIGxvYWRlci5sb2FkTW9kdWxlKGNvbmZpZ01vZHVsZUlkKS50aGVuKGZ1bmN0aW9uIChjdXN0b21Db25maWcpIHtcbiAgICAgIHJldHVybiBjdXN0b21Db25maWcuY29uZmlndXJlKGF1cmVsaWEpO1xuICAgIH0pO1xuICB9XG5cbiAgYXVyZWxpYS51c2Uuc3RhbmRhcmRDb25maWd1cmF0aW9uKCkuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG5cbiAgcmV0dXJuIGF1cmVsaWEuc3RhcnQoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXVyZWxpYS5zZXRSb290KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gIHJldHVybiByZWFkeSh3aW5kb3cpLnRoZW4oZnVuY3Rpb24gKGRvYykge1xuICAgIHZhciBhcHBIb3N0ID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thdXJlbGlhLWFwcF0nKTtcbiAgICB2YXIgbG9hZGVyID0gbmV3IF9hdXJlbGlhTG9hZGVyV2VicGFjay5XZWJwYWNrTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWRNb2R1bGUoJ2F1cmVsaWEtZnJhbWV3b3JrJykudGhlbihmdW5jdGlvbiAobSkge1xuICAgICAgQXVyZWxpYSA9IG0uQXVyZWxpYTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGFwcEhvc3QubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBoYW5kbGVBcHAobG9hZGVyLCBhcHBIb3N0W2ldKS5jYXRjaChjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpO1xuICAgICAgfVxuXG4gICAgICBzaGFyZWRMb2FkZXIgPSBsb2FkZXI7XG4gICAgICBmb3IgKHZhciBfaSA9IDAsIF9paSA9IGJvb3RzdHJhcFF1ZXVlLmxlbmd0aDsgX2kgPCBfaWk7ICsrX2kpIHtcbiAgICAgICAgYm9vdHN0cmFwUXVldWVbX2ldKCk7XG4gICAgICB9XG4gICAgICBib290c3RyYXBRdWV1ZSA9IG51bGw7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib290c3RyYXAoY29uZmlndXJlKSB7XG4gIHJldHVybiBvbkJvb3RzdHJhcChmdW5jdGlvbiAobG9hZGVyKSB7XG4gICAgdmFyIGF1cmVsaWEgPSBuZXcgQXVyZWxpYShsb2FkZXIpO1xuICAgIHJldHVybiBjb25maWd1cmUoYXVyZWxpYSk7XG4gIH0pO1xufVxuXG5ydW4oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVyZWxpYS1ib290c3RyYXBwZXItd2VicGFjay9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtYm9vdHN0cmFwcGVyLXdlYnBhY2suanNcbi8vIG1vZHVsZSBpZCA9IGF1cmVsaWEtYm9vdHN0cmFwcGVyLXdlYnBhY2tcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XZWJwYWNrTG9hZGVyID0gZXhwb3J0cy5UZXh0VGVtcGxhdGVMb2FkZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmVuc3VyZU9yaWdpbk9uRXhwb3J0cyA9IGVuc3VyZU9yaWdpbk9uRXhwb3J0cztcblxudmFyIF9hdXJlbGlhTWV0YWRhdGEgPSByZXF1aXJlKCdhdXJlbGlhLW1ldGFkYXRhJyk7XG5cbnZhciBfYXVyZWxpYUxvYWRlciA9IHJlcXVpcmUoJ2F1cmVsaWEtbG9hZGVyJyk7XG5cbnZhciBfYXVyZWxpYVBhbCA9IHJlcXVpcmUoJ2F1cmVsaWEtcGFsJyk7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuXG5cbnZhciBUZXh0VGVtcGxhdGVMb2FkZXIgPSBleHBvcnRzLlRleHRUZW1wbGF0ZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGV4dFRlbXBsYXRlTG9hZGVyKCkge1xuICAgIFxuICB9XG5cbiAgVGV4dFRlbXBsYXRlTG9hZGVyLnByb3RvdHlwZS5sb2FkVGVtcGxhdGUgPSBmdW5jdGlvbiBsb2FkVGVtcGxhdGUobG9hZGVyLCBlbnRyeSkge1xuICAgIHJldHVybiBsb2FkZXIubG9hZFRleHQoZW50cnkuYWRkcmVzcykudGhlbihmdW5jdGlvbiAodGV4dCkge1xuICAgICAgZW50cnkudGVtcGxhdGUgPSBfYXVyZWxpYVBhbC5ET00uY3JlYXRlVGVtcGxhdGVGcm9tTWFya3VwKHRleHQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUZXh0VGVtcGxhdGVMb2FkZXI7XG59KCk7XG5cbmZ1bmN0aW9uIGVuc3VyZU9yaWdpbk9uRXhwb3J0cyhleGVjdXRlZCwgbW9kdWxlSWQpIHtcbiAgdmFyIHRhcmdldCA9IGV4ZWN1dGVkO1xuICB2YXIga2V5ID0gdm9pZCAwO1xuICB2YXIgZXhwb3J0ZWRWYWx1ZSA9IHZvaWQgMDtcblxuICBpZiAodGFyZ2V0Ll9fdXNlRGVmYXVsdCkge1xuICAgIHRhcmdldCA9IHRhcmdldC5kZWZhdWx0O1xuICB9XG5cbiAgX2F1cmVsaWFNZXRhZGF0YS5PcmlnaW4uc2V0KHRhcmdldCwgbmV3IF9hdXJlbGlhTWV0YWRhdGEuT3JpZ2luKG1vZHVsZUlkLCAnZGVmYXVsdCcpKTtcblxuICBpZiAoKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoa2V5IGluIHRhcmdldCkge1xuICAgICAgZXhwb3J0ZWRWYWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICBpZiAodHlwZW9mIGV4cG9ydGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX2F1cmVsaWFNZXRhZGF0YS5PcmlnaW4uc2V0KGV4cG9ydGVkVmFsdWUsIG5ldyBfYXVyZWxpYU1ldGFkYXRhLk9yaWdpbihtb2R1bGVJZCwga2V5KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4ZWN1dGVkO1xufVxuXG52YXIgV2VicGFja0xvYWRlciA9IGV4cG9ydHMuV2VicGFja0xvYWRlciA9IGZ1bmN0aW9uIChfTG9hZGVyKSB7XG4gIF9pbmhlcml0cyhXZWJwYWNrTG9hZGVyLCBfTG9hZGVyKTtcblxuICBmdW5jdGlvbiBXZWJwYWNrTG9hZGVyKCkge1xuICAgIFxuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0xvYWRlci5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLm1vZHVsZVJlZ2lzdHJ5ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBfdGhpcy5sb2FkZXJQbHVnaW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBfdGhpcy51c2VUZW1wbGF0ZUxvYWRlcihuZXcgVGV4dFRlbXBsYXRlTG9hZGVyKCkpO1xuICAgIF90aGlzLm1vZHVsZXNCZWluZ0xvYWRlZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICB2YXIgdGhhdCA9IF90aGlzO1xuXG4gICAgX3RoaXMuYWRkUGx1Z2luKCd0ZW1wbGF0ZS1yZWdpc3RyeS1lbnRyeScsIHtcbiAgICAgICdmZXRjaCc6IGZ1bmN0aW9uIGZldGNoKGFkZHJlc3MpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhhdC5nZXRPckNyZWF0ZVRlbXBsYXRlUmVnaXN0cnlFbnRyeShhZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuIGVudHJ5LnRlbXBsYXRlSXNMb2FkZWQgPyBlbnRyeSA6IHRoYXQudGVtcGxhdGVMb2FkZXIubG9hZFRlbXBsYXRlKHRoYXQsIGVudHJ5KS50aGVuKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9hdXJlbGlhUGFsLlBMQVRGT1JNLmVhY2hNb2R1bGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciByZWdpc3RyeSA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuICAgICAgZm9yICh2YXIgbW9kdWxlSWQgaW4gcmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGVJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9kdWxlRXhwb3J0cyA9IHJlZ2lzdHJ5W21vZHVsZUlkXS5leHBvcnRzO1xuICAgICAgICBpZiAoKHR5cGVvZiBtb2R1bGVFeHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtb2R1bGVFeHBvcnRzKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2sobW9kdWxlSWQsIG1vZHVsZUV4cG9ydHMpKSByZXR1cm47XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5fZ2V0QWN0dWFsUmVzdWx0ID0gZnVuY3Rpb24gX2dldEFjdHVhbFJlc3VsdChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgaXNBc3luYyA9IHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicgJiYgL2NiXFwoX193ZWJwYWNrX3JlcXVpcmVfXy8udGVzdChyZXN1bHQudG9TdHJpbmcoKSk7XG4gICAgICBpZiAoIWlzQXN5bmMpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdChmdW5jdGlvbiAoYWN0dWFsKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGFjdHVhbCk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZSk7XG4gICAgfVxuICB9O1xuXG4gIFdlYnBhY2tMb2FkZXIucHJvdG90eXBlLl9pbXBvcnQgPSBmdW5jdGlvbiBfaW1wb3J0KG1vZHVsZUlkKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5tb2R1bGVzQmVpbmdMb2FkZWRbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2R1bGVzQmVpbmdMb2FkZWRbbW9kdWxlSWRdO1xuICAgIH1cbiAgICB2YXIgbW9kdWxlSWRQYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KCchJyk7XG4gICAgdmFyIHBhdGggPSBtb2R1bGVJZFBhcnRzLnNwbGljZShtb2R1bGVJZFBhcnRzLmxlbmd0aCAtIDEsIDEpWzBdO1xuICAgIHZhciBsb2FkZXJQbHVnaW4gPSBtb2R1bGVJZFBhcnRzLmxlbmd0aCA9PT0gMSA/IG1vZHVsZUlkUGFydHNbMF0gOiBudWxsO1xuXG4gICAgdmFyIGFjdGlvbiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmIChsb2FkZXJQbHVnaW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShfdGhpczIubG9hZGVyUGx1Z2luc1tsb2FkZXJQbHVnaW5dLmZldGNoKHBhdGgpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18ocGF0aCk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fZ2V0QWN0dWFsUmVzdWx0KHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGF0aF07XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoJ2F1cmVsaWEtbG9hZGVyLWNvbnRleHQvJyArIHBhdGgpO1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX2dldEFjdHVhbFJlc3VsdChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sICdhcHAnKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIF90aGlzMi5tb2R1bGVzQmVpbmdMb2FkZWRbbW9kdWxlSWRdID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgICB0aGlzLm1vZHVsZXNCZWluZ0xvYWRlZFttb2R1bGVJZF0gPSBhY3Rpb247XG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAoaWQsIHNvdXJjZSkge307XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUubm9ybWFsaXplU3luYyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN5bmMobW9kdWxlSWQsIHJlbGF0aXZlVG8pIHtcbiAgICByZXR1cm4gbW9kdWxlSWQ7XG4gIH07XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG1vZHVsZUlkLCByZWxhdGl2ZVRvKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtb2R1bGVJZCk7XG4gIH07XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUudXNlVGVtcGxhdGVMb2FkZXIgPSBmdW5jdGlvbiB1c2VUZW1wbGF0ZUxvYWRlcih0ZW1wbGF0ZUxvYWRlcikge1xuICAgIHRoaXMudGVtcGxhdGVMb2FkZXIgPSB0ZW1wbGF0ZUxvYWRlcjtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5sb2FkQWxsTW9kdWxlcyA9IGZ1bmN0aW9uIGxvYWRBbGxNb2R1bGVzKGlkcykge1xuICAgIHZhciBsb2FkcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gaWRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIGxvYWRzLnB1c2godGhpcy5sb2FkTW9kdWxlKGlkc1tpXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChsb2Fkcyk7XG4gIH07XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUubG9hZE1vZHVsZSA9IGZ1bmN0aW9uIGxvYWRNb2R1bGUoaWQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGlzdGluZyA9IHRoaXMubW9kdWxlUmVnaXN0cnlbaWRdO1xuICAgIGlmIChleGlzdGluZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShleGlzdGluZyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbXBvcnQoaWQpLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBfdGhpczMubW9kdWxlUmVnaXN0cnlbaWRdID0gZW5zdXJlT3JpZ2luT25FeHBvcnRzKG0sIGlkKTtcbiAgICB9KTtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5sb2FkVGVtcGxhdGUgPSBmdW5jdGlvbiBsb2FkVGVtcGxhdGUodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltcG9ydCh0aGlzLmFwcGx5UGx1Z2luVG9VcmwodXJsLCAndGVtcGxhdGUtcmVnaXN0cnktZW50cnknKSk7XG4gIH07XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUubG9hZFRleHQgPSBmdW5jdGlvbiBsb2FkVGV4dCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5faW1wb3J0KHVybCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQXJyYXkgJiYgcmVzdWx0WzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgcmVzdWx0Lmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5hcHBseVBsdWdpblRvVXJsID0gZnVuY3Rpb24gYXBwbHlQbHVnaW5Ub1VybCh1cmwsIHBsdWdpbk5hbWUpIHtcbiAgICByZXR1cm4gcGx1Z2luTmFtZSArICchJyArIHVybDtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5hZGRQbHVnaW4gPSBmdW5jdGlvbiBhZGRQbHVnaW4ocGx1Z2luTmFtZSwgaW1wbGVtZW50YXRpb24pIHtcbiAgICB0aGlzLmxvYWRlclBsdWdpbnNbcGx1Z2luTmFtZV0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgfTtcblxuICByZXR1cm4gV2VicGFja0xvYWRlcjtcbn0oX2F1cmVsaWFMb2FkZXIuTG9hZGVyKTtcblxuX2F1cmVsaWFQYWwuUExBVEZPUk0uTG9hZGVyID0gV2VicGFja0xvYWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVyZWxpYS1sb2FkZXItd2VicGFjay9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtbG9hZGVyLXdlYnBhY2suanNcbi8vIG1vZHVsZSBpZCA9IGF1cmVsaWEtbG9hZGVyLXdlYnBhY2tcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5fRE9NID0gZXhwb3J0cy5fRkVBVFVSRSA9IGV4cG9ydHMuX1BMQVRGT1JNID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuaW5pdGlhbGl6ZSA9IGluaXRpYWxpemU7XG5cbnZhciBfYXVyZWxpYVBhbCA9IHJlcXVpcmUoJ2F1cmVsaWEtcGFsJyk7XG5cbnZhciBfUExBVEZPUk0gPSBleHBvcnRzLl9QTEFURk9STSA9IHtcbiAgbG9jYXRpb246IHdpbmRvdy5sb2NhdGlvbixcbiAgaGlzdG9yeTogd2luZG93Lmhpc3RvcnksXG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgY2FwdHVyZSkge1xuICAgIHRoaXMuZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgY2FwdHVyZSk7XG4gIH0sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgY2FwdHVyZSkge1xuICAgIHRoaXMuZ2xvYmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgY2FwdHVyZSk7XG4gIH0sXG5cbiAgcGVyZm9ybWFuY2U6IHdpbmRvdy5wZXJmb3JtYW5jZSxcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBmdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfVxufTtcblxuaWYgKHR5cGVvZiBGRUFUVVJFX05PX0lFID09PSAndW5kZWZpbmVkJykge1xuICB2YXIgdGVzdCA9IGZ1bmN0aW9uIHRlc3QoKSB7fTtcblxuICBpZiAodGVzdC5uYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnbmFtZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMudG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvblxccyooXFxTKilcXHMqXFwoLylbMV07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICduYW1lJywgeyB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBGRUFUVVJFX05PX0lFID09PSAndW5kZWZpbmVkJykge1xuICBpZiAoISgnY2xhc3NMaXN0JyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdfJykpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhKCdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpKSkge1xuICAgIHZhciBwcm90b1Byb3AgPSAncHJvdG90eXBlJztcbiAgICB2YXIgc3RyVHJpbSA9IFN0cmluZy5wcm90b3R5cGUudHJpbTtcbiAgICB2YXIgYXJySW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuICAgIHZhciBlbXB0eUFycmF5ID0gW107XG5cbiAgICB2YXIgRE9NRXggPSBmdW5jdGlvbiBET01FeCh0eXBlLCBtZXNzYWdlKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0eXBlO1xuICAgICAgdGhpcy5jb2RlID0gRE9NRXhjZXB0aW9uW3R5cGVdO1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrVG9rZW5BbmRHZXRJbmRleCA9IGZ1bmN0aW9uIGNoZWNrVG9rZW5BbmRHZXRJbmRleChjbGFzc0xpc3QsIHRva2VuKSB7XG4gICAgICBpZiAodG9rZW4gPT09ICcnKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeCgnU1lOVEFYX0VSUicsICdBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKC9cXHMvLnRlc3QodG9rZW4pKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeCgnSU5WQUxJRF9DSEFSQUNURVJfRVJSJywgJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3RlcicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJySW5kZXhPZi5jYWxsKGNsYXNzTGlzdCwgdG9rZW4pO1xuICAgIH07XG5cbiAgICB2YXIgQ2xhc3NMaXN0ID0gZnVuY3Rpb24gQ2xhc3NMaXN0KGVsZW0pIHtcbiAgICAgIHZhciB0cmltbWVkQ2xhc3NlcyA9IHN0clRyaW0uY2FsbChlbGVtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJyk7XG4gICAgICB2YXIgY2xhc3NlcyA9IHRyaW1tZWRDbGFzc2VzID8gdHJpbW1lZENsYXNzZXMuc3BsaXQoL1xccysvKSA6IGVtcHR5QXJyYXk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICB0aGlzLnB1c2goY2xhc3Nlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy50b1N0cmluZygpKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBjbGFzc0xpc3RQcm90byA9IENsYXNzTGlzdFtwcm90b1Byb3BdID0gW107XG5cbiAgICBET01FeFtwcm90b1Byb3BdID0gRXJyb3JbcHJvdG9Qcm9wXTtcblxuICAgIGNsYXNzTGlzdFByb3RvLml0ZW0gPSBmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbiAgICB9O1xuXG4gICAgY2xhc3NMaXN0UHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIHRva2VuICs9ICcnO1xuICAgICAgcmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xuICAgIH07XG5cbiAgICBjbGFzc0xpc3RQcm90by5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdG9rZW5zID0gYXJndW1lbnRzO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGlpID0gdG9rZW5zLmxlbmd0aDtcbiAgICAgIHZhciB0b2tlbiA9IHZvaWQgMDtcbiAgICAgIHZhciB1cGRhdGVkID0gZmFsc2U7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV0gKyAnJztcbiAgICAgICAgaWYgKGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5wdXNoKHRva2VuKTtcbiAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoKytpIDwgaWkpO1xuXG4gICAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICB0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xhc3NMaXN0UHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRva2VucyA9IGFyZ3VtZW50cztcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHZhciBpaSA9IHRva2Vucy5sZW5ndGg7XG4gICAgICB2YXIgdG9rZW4gPSB2b2lkIDA7XG4gICAgICB2YXIgdXBkYXRlZCA9IGZhbHNlO1xuICAgICAgdmFyIGluZGV4ID0gdm9pZCAwO1xuXG4gICAgICBkbyB7XG4gICAgICAgIHRva2VuID0gdG9rZW5zW2ldICsgJyc7XG4gICAgICAgIGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcbiAgICAgICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICBpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKCsraSA8IGlpKTtcblxuICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsYXNzTGlzdFByb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uICh0b2tlbiwgZm9yY2UpIHtcbiAgICAgIHRva2VuICs9ICcnO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5jb250YWlucyh0b2tlbik7XG4gICAgICB2YXIgbWV0aG9kID0gcmVzdWx0ID8gZm9yY2UgIT09IHRydWUgJiYgJ3JlbW92ZScgOiBmb3JjZSAhPT0gZmFsc2UgJiYgJ2FkZCc7XG5cbiAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgdGhpc1ttZXRob2RdKHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcmNlID09PSB0cnVlIHx8IGZvcmNlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZm9yY2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhcmVzdWx0O1xuICAgIH07XG5cbiAgICBjbGFzc0xpc3RQcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmpvaW4oJyAnKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCAnY2xhc3NMaXN0Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xhc3NMaXN0KHRoaXMpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdfJyk7XG4gICAgdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYzEnLCAnYzInKTtcblxuICAgIGlmICghdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjMicpKSB7XG4gICAgICB2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gY3JlYXRlTWV0aG9kKG1ldGhvZCkge1xuICAgICAgICB2YXIgb3JpZ2luYWwgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF07XG5cbiAgICAgICAgRE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIHRva2VuID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgb3JpZ2luYWwuY2FsbCh0aGlzLCB0b2tlbik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY3JlYXRlTWV0aG9kKCdhZGQnKTtcbiAgICAgIGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG4gICAgfVxuXG4gICAgdGVzdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYzMnLCBmYWxzZSk7XG5cbiAgICBpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjMycpKSB7XG4gICAgICB2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG4gICAgICBET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICh0b2tlbiwgZm9yY2UpIHtcbiAgICAgICAgaWYgKDEgaW4gYXJndW1lbnRzICYmICF0aGlzLmNvbnRhaW5zKHRva2VuKSA9PT0gIWZvcmNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZvcmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90b2dnbGUuY2FsbCh0aGlzLCB0b2tlbik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRlc3RFbGVtZW50ID0gbnVsbDtcbiAgfVxufVxuXG5pZiAodHlwZW9mIEZFQVRVUkVfTk9fSUUgPT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBfZmlsdGVyRW50cmllcyA9IGZ1bmN0aW9uIF9maWx0ZXJFbnRyaWVzKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgaSA9IDAsXG4gICAgICAgIG4gPSBfZW50cmllcy5sZW5ndGgsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZiAoX2VudHJpZXNbaV1ba2V5XSA9PSB2YWx1ZSkge1xuICAgICAgICByZXN1bHQucHVzaChfZW50cmllc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIF9jbGVhckVudHJpZXMgPSBmdW5jdGlvbiBfY2xlYXJFbnRyaWVzKHR5cGUsIG5hbWUpIHtcbiAgICB2YXIgaSA9IF9lbnRyaWVzLmxlbmd0aCxcbiAgICAgICAgZW50cnk7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgZW50cnkgPSBfZW50cmllc1tpXTtcbiAgICAgIGlmIChlbnRyeS5lbnRyeVR5cGUgPT0gdHlwZSAmJiAobmFtZSA9PT0gdm9pZCAwIHx8IGVudHJ5Lm5hbWUgPT0gbmFtZSkpIHtcbiAgICAgICAgX2VudHJpZXMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gIGlmICgncGVyZm9ybWFuY2UnIGluIHdpbmRvdyA9PT0gZmFsc2UpIHtcbiAgICB3aW5kb3cucGVyZm9ybWFuY2UgPSB7fTtcbiAgfVxuXG4gIGlmICgnbm93JyBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT09IGZhbHNlKSB7XG4gICAgdmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XG5cbiAgICBpZiAocGVyZm9ybWFuY2UudGltaW5nICYmIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQ7XG4gICAgfVxuXG4gICAgd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xuICAgIH07XG4gIH1cblxuICB2YXIgc3RhcnRPZmZzZXQgPSBEYXRlLm5vdyA/IERhdGUubm93KCkgOiArbmV3IERhdGUoKTtcbiAgdmFyIF9lbnRyaWVzID0gW107XG4gIHZhciBfbWFya3NJbmRleCA9IHt9O1xuXG4gIDtcblxuICBpZiAoIXdpbmRvdy5wZXJmb3JtYW5jZS5tYXJrKSB7XG4gICAgd2luZG93LnBlcmZvcm1hbmNlLm1hcmsgPSB3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0TWFyayB8fCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIG1hcmsgPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGVudHJ5VHlwZTogXCJtYXJrXCIsXG4gICAgICAgIHN0YXJ0VGltZTogd2luZG93LnBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgfTtcblxuICAgICAgX2VudHJpZXMucHVzaChtYXJrKTtcbiAgICAgIF9tYXJrc0luZGV4W25hbWVdID0gbWFyaztcbiAgICB9O1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucGVyZm9ybWFuY2UubWVhc3VyZSkge1xuICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5tZWFzdXJlID0gd2luZG93LnBlcmZvcm1hbmNlLndlYmtpdE1lYXN1cmUgfHwgZnVuY3Rpb24gKG5hbWUsIHN0YXJ0TWFyaywgZW5kTWFyaykge1xuICAgICAgc3RhcnRNYXJrID0gX21hcmtzSW5kZXhbc3RhcnRNYXJrXS5zdGFydFRpbWU7XG4gICAgICBlbmRNYXJrID0gX21hcmtzSW5kZXhbZW5kTWFya10uc3RhcnRUaW1lO1xuXG4gICAgICBfZW50cmllcy5wdXNoKHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZW50cnlUeXBlOiBcIm1lYXN1cmVcIixcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydE1hcmssXG4gICAgICAgIGR1cmF0aW9uOiBlbmRNYXJrIC0gc3RhcnRNYXJrXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZSkge1xuICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlID0gd2luZG93LnBlcmZvcm1hbmNlLndlYmtpdEdldEVudHJpZXNCeVR5cGUgfHwgZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiBfZmlsdGVyRW50cmllcyhcImVudHJ5VHlwZVwiLCB0eXBlKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZSkge1xuICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lID0gd2luZG93LnBlcmZvcm1hbmNlLndlYmtpdEdldEVudHJpZXNCeU5hbWUgfHwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiBfZmlsdGVyRW50cmllcyhcIm5hbWVcIiwgbmFtZSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghd2luZG93LnBlcmZvcm1hbmNlLmNsZWFyTWFya3MpIHtcbiAgICB3aW5kb3cucGVyZm9ybWFuY2UuY2xlYXJNYXJrcyA9IHdpbmRvdy5wZXJmb3JtYW5jZS53ZWJraXRDbGVhck1hcmtzIHx8IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfY2xlYXJFbnRyaWVzKFwibWFya1wiLCBuYW1lKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucGVyZm9ybWFuY2UuY2xlYXJNZWFzdXJlcykge1xuICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5jbGVhck1lYXN1cmVzID0gd2luZG93LnBlcmZvcm1hbmNlLndlYmtpdENsZWFyTWVhc3VyZXMgfHwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF9jbGVhckVudHJpZXMoXCJtZWFzdXJlXCIsIG5hbWUpO1xuICAgIH07XG4gIH1cblxuICBfUExBVEZPUk0ucGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XG59XG5cbmlmICh0eXBlb2YgRkVBVFVSRV9OT19JRSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGNvbiA9IHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge307XG4gIHZhciBub3AgPSBmdW5jdGlvbiBub3AoKSB7fTtcblxuICBpZiAoIWNvbi5tZW1vcnkpIGNvbi5tZW1vcnkgPSB7fTtcbiAgKCdhc3NlcnQsY2xlYXIsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sZ3JvdXAsJyArICdncm91cENvbGxhcHNlZCxncm91cEVuZCxpbmZvLGxvZyxtYXJrVGltZWxpbmUscHJvZmlsZSxwcm9maWxlcyxwcm9maWxlRW5kLCcgKyAnc2hvdyx0YWJsZSx0aW1lLHRpbWVFbmQsdGltZWxpbmUsdGltZWxpbmVFbmQsdGltZVN0YW1wLHRyYWNlLHdhcm4nKS5zcGxpdCgnLCcpLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICBpZiAoIWNvblttXSkgY29uW21dID0gbm9wO1xuICB9KTtcblxuICBpZiAoX3R5cGVvZihjb24ubG9nKSA9PT0gJ29iamVjdCcpIHtcbiAgICAnbG9nLGluZm8sd2FybixlcnJvcixhc3NlcnQsZGlyLGNsZWFyLHByb2ZpbGUscHJvZmlsZUVuZCcuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IHRoaXMuYmluZChjb25zb2xlW21ldGhvZF0sIGNvbnNvbGUpO1xuICAgIH0sIEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsKTtcbiAgfVxufVxuXG5pZiAodHlwZW9mIEZFQVRVUkVfTk9fSUUgPT09ICd1bmRlZmluZWQnKSB7XG4gIGlmICghd2luZG93LkN1c3RvbUV2ZW50IHx8IHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgX0N1c3RvbUV2ZW50ID0gZnVuY3Rpb24gX0N1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICAgIH07XG5cbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgICByZXR1cm4gZXZ0O1xuICAgIH07XG5cbiAgICBfQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcbiAgICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBfQ3VzdG9tRXZlbnQ7XG4gIH1cbn1cblxuaWYgKEVsZW1lbnQgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG4gIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHwgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHwgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG52YXIgX0ZFQVRVUkUgPSBleHBvcnRzLl9GRUFUVVJFID0ge1xuICBzaGFkb3dET006ICEhSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyxcbiAgc2NvcGVkQ1NTOiAnc2NvcGVkJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpLFxuICBodG1sVGVtcGxhdGVFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkLmlubmVySFRNTCA9ICc8dGVtcGxhdGU+PC90ZW1wbGF0ZT4nO1xuICAgIHJldHVybiAnY29udGVudCcgaW4gZC5jaGlsZHJlblswXTtcbiAgfSgpLFxuICBtdXRhdGlvbk9ic2VydmVyOiAhISh3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlciksXG4gIGVuc3VyZUhUTUxUZW1wbGF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIGVuc3VyZUhUTUxUZW1wbGF0ZUVsZW1lbnQodCkge1xuICAgIHJldHVybiB0O1xuICB9XG59O1xuXG5pZiAodHlwZW9mIEZFQVRVUkVfTk9fSUUgPT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBpc1NWR1RlbXBsYXRlID0gZnVuY3Rpb24gaXNTVkdUZW1wbGF0ZShlbCkge1xuICAgIHJldHVybiBlbC50YWdOYW1lID09PSAndGVtcGxhdGUnICYmIGVsLm5hbWVzcGFjZVVSSSA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgfTtcblxuICB2YXIgZml4U1ZHVGVtcGxhdGVFbGVtZW50ID0gZnVuY3Rpb24gZml4U1ZHVGVtcGxhdGVFbGVtZW50KGVsKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZWwub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHZhciBhdHRycyA9IGVsLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGxlbmd0aCA9IGF0dHJzLmxlbmd0aDtcbiAgICB2YXIgYXR0ciA9IHZvaWQgMDtcblxuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRlbXBsYXRlLCBlbCk7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0gPiAwKSB7XG4gICAgICBhdHRyID0gYXR0cnNbbGVuZ3RoXTtcbiAgICAgIHRlbXBsYXRlLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubmFtZSk7XG4gICAgfVxuXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG5cbiAgICByZXR1cm4gZml4SFRNTFRlbXBsYXRlRWxlbWVudCh0ZW1wbGF0ZSk7XG4gIH07XG5cbiAgdmFyIGZpeEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBmaXhIVE1MVGVtcGxhdGVFbGVtZW50KHRlbXBsYXRlKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIHZhciBjaGlsZCA9IHZvaWQgMDtcblxuICAgIHdoaWxlIChjaGlsZCA9IHRlbXBsYXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICB2YXIgZml4SFRNTFRlbXBsYXRlRWxlbWVudFJvb3QgPSBmdW5jdGlvbiBmaXhIVE1MVGVtcGxhdGVFbGVtZW50Um9vdCh0ZW1wbGF0ZSkge1xuICAgIHZhciBjb250ZW50ID0gZml4SFRNTFRlbXBsYXRlRWxlbWVudCh0ZW1wbGF0ZSkuY29udGVudDtcbiAgICB2YXIgY2hpbGRUZW1wbGF0ZXMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RlbXBsYXRlJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBjaGlsZFRlbXBsYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZFRlbXBsYXRlc1tpXTtcblxuICAgICAgaWYgKGlzU1ZHVGVtcGxhdGUoY2hpbGQpKSB7XG4gICAgICAgIGZpeFNWR1RlbXBsYXRlRWxlbWVudChjaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXhIVE1MVGVtcGxhdGVFbGVtZW50KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH07XG5cbiAgaWYgKCFfRkVBVFVSRS5odG1sVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgX0ZFQVRVUkUuZW5zdXJlSFRNTFRlbXBsYXRlRWxlbWVudCA9IGZpeEhUTUxUZW1wbGF0ZUVsZW1lbnRSb290O1xuICB9XG59XG5cbnZhciBzaGFkb3dQb2x5ID0gd2luZG93LlNoYWRvd0RPTVBvbHlmaWxsIHx8IG51bGw7XG5cbnZhciBfRE9NID0gZXhwb3J0cy5fRE9NID0ge1xuICBFbGVtZW50OiBFbGVtZW50LFxuICBOb2RlTGlzdDogTm9kZUxpc3QsXG4gIFNWR0VsZW1lbnQ6IFNWR0VsZW1lbnQsXG4gIGJvdW5kYXJ5OiAnYXVyZWxpYS1kb20tYm91bmRhcnknLFxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuICB9LFxuICBhZG9wdE5vZGU6IGZ1bmN0aW9uIGFkb3B0Tm9kZShub2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmFkb3B0Tm9kZShub2RlKTtcbiAgfSxcbiAgY3JlYXRlQXR0cmlidXRlOiBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGUobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUobmFtZSk7XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICB9LFxuICBjcmVhdGVUZXh0Tm9kZTogZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgfSxcbiAgY3JlYXRlQ29tbWVudDogZnVuY3Rpb24gY3JlYXRlQ29tbWVudCh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dCk7XG4gIH0sXG4gIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgfSxcbiAgY3JlYXRlVGVtcGxhdGVFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZUVsZW1lbnQoKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICByZXR1cm4gX0ZFQVRVUkUuZW5zdXJlSFRNTFRlbXBsYXRlRWxlbWVudCh0ZW1wbGF0ZSk7XG4gIH0sXG4gIGNyZWF0ZU11dGF0aW9uT2JzZXJ2ZXI6IGZ1bmN0aW9uIGNyZWF0ZU11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gbmV3ICh3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcikoY2FsbGJhY2spO1xuICB9LFxuICBjcmVhdGVDdXN0b21FdmVudDogZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnRUeXBlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoZXZlbnRUeXBlLCBvcHRpb25zKTtcbiAgfSxcbiAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldnQpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH0sXG4gIGdldENvbXB1dGVkU3R5bGU6IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgfSxcbiAgZ2V0RWxlbWVudEJ5SWQ6IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgfSxcbiAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihxdWVyeSkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgfSxcbiAgcXVlcnlTZWxlY3RvckFsbDogZnVuY3Rpb24gcXVlcnlTZWxlY3RvckFsbChxdWVyeSkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcbiAgfSxcbiAgbmV4dEVsZW1lbnRTaWJsaW5nOiBmdW5jdGlvbiBuZXh0RWxlbWVudFNpYmxpbmcoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH1cbiAgICBkbyB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5uZXh0U2libGluZztcbiAgICB9IHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDEpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxuICBjcmVhdGVUZW1wbGF0ZUZyb21NYXJrdXA6IGZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlRnJvbU1hcmt1cChtYXJrdXApIHtcbiAgICB2YXIgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyc2VyLmlubmVySFRNTCA9IG1hcmt1cDtcblxuICAgIHZhciB0ZW1wID0gcGFyc2VyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGlmICghdGVtcCB8fCB0ZW1wLm5vZGVOYW1lICE9PSAnVEVNUExBVEUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RlbXBsYXRlIG1hcmt1cCBtdXN0IGJlIHdyYXBwZWQgaW4gYSA8dGVtcGxhdGU+IGVsZW1lbnQgZS5nLiA8dGVtcGxhdGU+IDwhLS0gbWFya3VwIGhlcmUgLS0+IDwvdGVtcGxhdGU+Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9GRUFUVVJFLmVuc3VyZUhUTUxUZW1wbGF0ZUVsZW1lbnQodGVtcCk7XG4gIH0sXG4gIGFwcGVuZE5vZGU6IGZ1bmN0aW9uIGFwcGVuZE5vZGUobmV3Tm9kZSwgcGFyZW50Tm9kZSkge1xuICAgIChwYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKG5ld05vZGUpO1xuICB9LFxuICByZXBsYWNlTm9kZTogZnVuY3Rpb24gcmVwbGFjZU5vZGUobmV3Tm9kZSwgbm9kZSwgcGFyZW50Tm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XG4gICAgfSBlbHNlIGlmIChzaGFkb3dQb2x5ICE9PSBudWxsKSB7XG4gICAgICBzaGFkb3dQb2x5LnVud3JhcChwYXJlbnROb2RlKS5yZXBsYWNlQ2hpbGQoc2hhZG93UG9seS51bndyYXAobmV3Tm9kZSksIHNoYWRvd1BvbHkudW53cmFwKG5vZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XG4gICAgfVxuICB9LFxuICByZW1vdmVOb2RlOiBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUsIHBhcmVudE5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICBpZiAoc2hhZG93UG9seSAhPT0gbnVsbCkge1xuICAgICAgICBzaGFkb3dQb2x5LnVud3JhcChwYXJlbnROb2RlKS5yZW1vdmVDaGlsZChzaGFkb3dQb2x5LnVud3JhcChub2RlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaW5qZWN0U3R5bGVzOiBmdW5jdGlvbiBpbmplY3RTdHlsZXMoc3R5bGVzLCBkZXN0aW5hdGlvbiwgcHJlcGVuZCwgaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHZhciBvbGRTdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICB2YXIgaXNTdHlsZVRhZyA9IG9sZFN0eWxlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N0eWxlJztcblxuICAgICAgICBpZiAoaXNTdHlsZVRhZykge1xuICAgICAgICAgIG9sZFN0eWxlLmlubmVySFRNTCA9IHN0eWxlcztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwcm92aWRlZCBpZCBkb2VzIG5vdCBpbmRpY2F0ZSBhIHN0eWxlIHRhZy4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgbm9kZS50eXBlID0gJ3RleHQvY3NzJztcblxuICAgIGlmIChpZCkge1xuICAgICAgbm9kZS5pZCA9IGlkO1xuICAgIH1cblxuICAgIGRlc3RpbmF0aW9uID0gZGVzdGluYXRpb24gfHwgZG9jdW1lbnQuaGVhZDtcblxuICAgIGlmIChwcmVwZW5kICYmIGRlc3RpbmF0aW9uLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgZGVzdGluYXRpb24uaW5zZXJ0QmVmb3JlKG5vZGUsIGRlc3RpbmF0aW9uLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgaWYgKF9hdXJlbGlhUGFsLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAoMCwgX2F1cmVsaWFQYWwuaW5pdGlhbGl6ZVBBTCkoZnVuY3Rpb24gKHBsYXRmb3JtLCBmZWF0dXJlLCBkb20pIHtcbiAgICBPYmplY3QuYXNzaWduKHBsYXRmb3JtLCBfUExBVEZPUk0pO1xuICAgIE9iamVjdC5hc3NpZ24oZmVhdHVyZSwgX0ZFQVRVUkUpO1xuICAgIE9iamVjdC5hc3NpZ24oZG9tLCBfRE9NKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb20sICd0aXRsZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQudGl0bGU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb20sICdhY3RpdmVFbGVtZW50Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBsYXRmb3JtLCAnWE1MSHR0cFJlcXVlc3QnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHBsYXRmb3JtLmdsb2JhbC5YTUxIdHRwUmVxdWVzdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F1cmVsaWEtcGFsLWJyb3dzZXIvZGlzdC9jb21tb25qcy9hdXJlbGlhLXBhbC1icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSBhdXJlbGlhLXBhbC1icm93c2VyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfYXVyZWxpYVBhbCA9IHJlcXVpcmUoJ2F1cmVsaWEtcGFsJyk7XG5cbmlmICh0eXBlb2YgRkVBVFVSRV9OT19FUzIwMTUgPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgKGZ1bmN0aW9uIChPYmplY3QsIEdPUFMpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBpZiAoR09QUyBpbiBPYmplY3QpIHJldHVybjtcblxuICAgIHZhciBzZXREZXNjcmlwdG9yLFxuICAgICAgICBHID0gX2F1cmVsaWFQYWwuUExBVEZPUk0uZ2xvYmFsLFxuICAgICAgICBpZCA9IDAsXG4gICAgICAgIHJhbmRvbSA9ICcnICsgTWF0aC5yYW5kb20oKSxcbiAgICAgICAgcHJlZml4ID0gJ19fXFx4MDFzeW1ib2w6JyxcbiAgICAgICAgcHJlZml4TGVuZ3RoID0gcHJlZml4Lmxlbmd0aCxcbiAgICAgICAgaW50ZXJuYWxTeW1ib2wgPSAnX19cXHgwMXN5bWJvbEBAJyArIHJhbmRvbSxcbiAgICAgICAgRFAgPSAnZGVmaW5lUHJvcGVydHknLFxuICAgICAgICBEUGllcyA9ICdkZWZpbmVQcm9wZXJ0aWVzJyxcbiAgICAgICAgR09QTiA9ICdnZXRPd25Qcm9wZXJ0eU5hbWVzJyxcbiAgICAgICAgR09QRCA9ICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLFxuICAgICAgICBQSUUgPSAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAgICAgICBnT1BOID0gT2JqZWN0W0dPUE5dLFxuICAgICAgICBnT1BEID0gT2JqZWN0W0dPUERdLFxuICAgICAgICBjcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMsXG4gICAgICAgIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0W0RQXSxcbiAgICAgICAgJGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3RbRFBpZXNdLFxuICAgICAgICBkZXNjcmlwdG9yID0gZ09QRChPYmplY3QsIEdPUE4pLFxuICAgICAgICBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAgIGhPUCA9IE9iamVjdFByb3RvLmhhc093blByb3BlcnR5LFxuICAgICAgICBwSUUgPSBPYmplY3RQcm90b1tQSUVdLFxuICAgICAgICB0b1N0cmluZyA9IE9iamVjdFByb3RvLnRvU3RyaW5nLFxuICAgICAgICBpbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YgfHwgZnVuY3Rpb24gKHYpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aDsgaS0tICYmIHRoaXNbaV0gIT09IHY7KSB7fVxuICAgICAgcmV0dXJuIGk7XG4gICAgfSxcbiAgICAgICAgYWRkSW50ZXJuYWxJZk5lZWRlZCA9IGZ1bmN0aW9uIGFkZEludGVybmFsSWZOZWVkZWQobywgdWlkLCBlbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhPUC5jYWxsKG8sIGludGVybmFsU3ltYm9sKSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShvLCBpbnRlcm5hbFN5bWJvbCwge1xuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG9baW50ZXJuYWxTeW1ib2xdWydAQCcgKyB1aWRdID0gZW51bWVyYWJsZTtcbiAgICB9LFxuICAgICAgICBjcmVhdGVXaXRoU3ltYm9scyA9IGZ1bmN0aW9uIGNyZWF0ZVdpdGhTeW1ib2xzKHByb3RvLCBkZXNjcmlwdG9ycykge1xuICAgICAgdmFyIHNlbGYgPSBjcmVhdGUocHJvdG8pO1xuICAgICAgaWYgKGRlc2NyaXB0b3JzICE9PSBudWxsICYmICh0eXBlb2YgZGVzY3JpcHRvcnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRlc2NyaXB0b3JzKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGdPUE4oZGVzY3JpcHRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGRlc2NyaXB0b3JzLCBrZXkpKSB7XG4gICAgICAgICAgICAkZGVmaW5lUHJvcGVydHkoc2VsZiwga2V5LCBkZXNjcmlwdG9yc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcbiAgICAgICAgY29weUFzTm9uRW51bWVyYWJsZSA9IGZ1bmN0aW9uIGNvcHlBc05vbkVudW1lcmFibGUoZGVzY3JpcHRvcikge1xuICAgICAgdmFyIG5ld0Rlc2NyaXB0b3IgPSBjcmVhdGUoZGVzY3JpcHRvcik7XG4gICAgICBuZXdEZXNjcmlwdG9yLmVudW1lcmFibGUgPSBmYWxzZTtcbiAgICAgIHJldHVybiBuZXdEZXNjcmlwdG9yO1xuICAgIH0sXG4gICAgICAgIGdldCA9IGZ1bmN0aW9uIGdldCgpIHt9LFxuICAgICAgICBvbmx5Tm9uU3ltYm9scyA9IGZ1bmN0aW9uIG9ubHlOb25TeW1ib2xzKG5hbWUpIHtcbiAgICAgIHJldHVybiBuYW1lICE9IGludGVybmFsU3ltYm9sICYmICFoT1AuY2FsbChzb3VyY2UsIG5hbWUpO1xuICAgIH0sXG4gICAgICAgIG9ubHlTeW1ib2xzID0gZnVuY3Rpb24gb25seVN5bWJvbHMobmFtZSkge1xuICAgICAgcmV0dXJuIG5hbWUgIT0gaW50ZXJuYWxTeW1ib2wgJiYgaE9QLmNhbGwoc291cmNlLCBuYW1lKTtcbiAgICB9LFxuICAgICAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICAgICAgdmFyIHVpZCA9ICcnICsga2V5O1xuICAgICAgcmV0dXJuIG9ubHlTeW1ib2xzKHVpZCkgPyBoT1AuY2FsbCh0aGlzLCB1aWQpICYmIHRoaXNbaW50ZXJuYWxTeW1ib2xdICYmIHRoaXNbaW50ZXJuYWxTeW1ib2xdWydAQCcgKyB1aWRdIDogcElFLmNhbGwodGhpcywga2V5KTtcbiAgICB9LFxuICAgICAgICBzZXRBbmRHZXRTeW1ib2wgPSBmdW5jdGlvbiBzZXRBbmRHZXRTeW1ib2wodWlkKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBnZXQsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgc2V0RGVzY3JpcHRvcih0aGlzLCB1aWQsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhZGRJbnRlcm5hbElmTmVlZGVkKHRoaXMsIHVpZCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90bywgdWlkLCBkZXNjcmlwdG9yKTtcbiAgICAgIHJldHVybiBzb3VyY2VbdWlkXSA9IGRlZmluZVByb3BlcnR5KE9iamVjdCh1aWQpLCAnY29uc3RydWN0b3InLCBzb3VyY2VDb25zdHJ1Y3Rvcik7XG4gICAgfSxcbiAgICAgICAgX1N5bWJvbCA9IGZ1bmN0aW9uIF9TeW1ib2wyKGRlc2NyaXB0aW9uKSB7XG4gICAgICBpZiAodGhpcyAmJiB0aGlzICE9PSBHKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldEFuZEdldFN5bWJvbChwcmVmaXguY29uY2F0KGRlc2NyaXB0aW9uIHx8ICcnLCByYW5kb20sICsraWQpKTtcbiAgICB9LFxuICAgICAgICBzb3VyY2UgPSBjcmVhdGUobnVsbCksXG4gICAgICAgIHNvdXJjZUNvbnN0cnVjdG9yID0geyB2YWx1ZTogX1N5bWJvbCB9LFxuICAgICAgICBzb3VyY2VNYXAgPSBmdW5jdGlvbiBzb3VyY2VNYXAodWlkKSB7XG4gICAgICByZXR1cm4gc291cmNlW3VpZF07XG4gICAgfSxcbiAgICAgICAgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcChvLCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgIHZhciB1aWQgPSAnJyArIGtleTtcbiAgICAgIGlmIChvbmx5U3ltYm9scyh1aWQpKSB7XG4gICAgICAgIHNldERlc2NyaXB0b3IobywgdWlkLCBkZXNjcmlwdG9yLmVudW1lcmFibGUgPyBjb3B5QXNOb25FbnVtZXJhYmxlKGRlc2NyaXB0b3IpIDogZGVzY3JpcHRvcik7XG4gICAgICAgIGFkZEludGVybmFsSWZOZWVkZWQobywgdWlkLCAhIWRlc2NyaXB0b3IuZW51bWVyYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShvLCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG87XG4gICAgfSxcbiAgICAgICAgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhvKSB7XG4gICAgICB2YXIgY29mID0gdG9TdHJpbmcuY2FsbChvKTtcbiAgICAgIG8gPSBjb2YgPT09ICdbb2JqZWN0IFN0cmluZ10nID8gby5zcGxpdCgnJykgOiBPYmplY3Qobyk7XG4gICAgICByZXR1cm4gZ09QTihvKS5maWx0ZXIob25seVN5bWJvbHMpLm1hcChzb3VyY2VNYXApO1xuICAgIH07XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gJGRlZmluZVByb3BlcnR5O1xuICAgIGRlZmluZVByb3BlcnR5KE9iamVjdCwgRFAsIGRlc2NyaXB0b3IpO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gICAgZGVmaW5lUHJvcGVydHkoT2JqZWN0LCBHT1BTLCBkZXNjcmlwdG9yKTtcblxuICAgIHZhciBjYWNoZWRXaW5kb3dOYW1lcyA9ICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih3aW5kb3cpKSA9PT0gJ29iamVjdCcgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG4gICAgdmFyIG9yaWdpbmFsT2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKG8pIHtcbiAgICAgIGlmICh0b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdEdldE93blByb3BlcnR5TmFtZXMobyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gW10uY29uY2F0KFtdLCBjYWNoZWRXaW5kb3dOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBnT1BOKG8pLmZpbHRlcihvbmx5Tm9uU3ltYm9scyk7XG4gICAgfTtcbiAgICBkZWZpbmVQcm9wZXJ0eShPYmplY3QsIEdPUE4sIGRlc2NyaXB0b3IpO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMobywgZGVzY3JpcHRvcnMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scyhkZXNjcmlwdG9ycyk7XG4gICAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAga2V5cyhkZXNjcmlwdG9ycykuY29uY2F0KHN5bWJvbHMpLmZvckVhY2goZnVuY3Rpb24gKHVpZCkge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGRlc2NyaXB0b3JzLCB1aWQpKSB7XG4gICAgICAgICAgICAkZGVmaW5lUHJvcGVydHkobywgdWlkLCBkZXNjcmlwdG9yc1t1aWRdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGRlZmluZVByb3BlcnRpZXMobywgZGVzY3JpcHRvcnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICBkZWZpbmVQcm9wZXJ0eShPYmplY3QsIERQaWVzLCBkZXNjcmlwdG9yKTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgICBkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90bywgUElFLCBkZXNjcmlwdG9yKTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBfU3ltYm9sO1xuICAgIGRlZmluZVByb3BlcnR5KEcsICdTeW1ib2wnLCBkZXNjcmlwdG9yKTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgdWlkID0gcHJlZml4LmNvbmNhdChwcmVmaXgsIGtleSwgcmFuZG9tKTtcbiAgICAgIHJldHVybiB1aWQgaW4gT2JqZWN0UHJvdG8gPyBzb3VyY2VbdWlkXSA6IHNldEFuZEdldFN5bWJvbCh1aWQpO1xuICAgIH07XG4gICAgZGVmaW5lUHJvcGVydHkoX1N5bWJvbCwgJ2ZvcicsIGRlc2NyaXB0b3IpO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgIHJldHVybiBoT1AuY2FsbChzb3VyY2UsIHN5bWJvbCkgPyBzeW1ib2wuc2xpY2UocHJlZml4TGVuZ3RoICogMiwgLXJhbmRvbS5sZW5ndGgpIDogdm9pZCAwO1xuICAgIH07XG4gICAgZGVmaW5lUHJvcGVydHkoX1N5bWJvbCwgJ2tleUZvcicsIGRlc2NyaXB0b3IpO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLCBrZXkpIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gZ09QRChvLCBrZXkpO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgb25seVN5bWJvbHMoa2V5KSkge1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG8sIGtleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9O1xuICAgIGRlZmluZVByb3BlcnR5KE9iamVjdCwgR09QRCwgZGVzY3JpcHRvcik7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKHByb3RvLCBkZXNjcmlwdG9ycykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjcmVhdGUocHJvdG8pIDogY3JlYXRlV2l0aFN5bWJvbHMocHJvdG8sIGRlc2NyaXB0b3JzKTtcbiAgICB9O1xuICAgIGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2NyZWF0ZScsIGRlc2NyaXB0b3IpO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdHIgPSB0b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScgJiYgb25seVN5bWJvbHModGhpcykgPyAnW29iamVjdCBTeW1ib2xdJyA6IHN0cjtcbiAgICB9O1xuICAgIGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvLCAndG9TdHJpbmcnLCBkZXNjcmlwdG9yKTtcblxuICAgIHRyeSB7XG4gICAgICBzZXREZXNjcmlwdG9yID0gY3JlYXRlKGRlZmluZVByb3BlcnR5KHt9LCBwcmVmaXgsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHRoaXMsIHByZWZpeCwgeyB2YWx1ZTogZmFsc2UgfSlbcHJlZml4XTtcbiAgICAgICAgfVxuICAgICAgfSkpW3ByZWZpeF0gfHwgZGVmaW5lUHJvcGVydHk7XG4gICAgfSBjYXRjaCAob19PKSB7XG4gICAgICBzZXREZXNjcmlwdG9yID0gZnVuY3Rpb24gc2V0RGVzY3JpcHRvcihvLCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgdmFyIHByb3RvRGVzY3JpcHRvciA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gICAgICAgIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShvLCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2NyaXB0b3IpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKE9iamVjdCwgJ2dldE93blByb3BlcnR5U3ltYm9scycpO1xuXG4gIChmdW5jdGlvbiAoTywgUykge1xuICAgIHZhciBkUCA9IE8uZGVmaW5lUHJvcGVydHksXG4gICAgICAgIE9iamVjdFByb3RvID0gTy5wcm90b3R5cGUsXG4gICAgICAgIHRvU3RyaW5nID0gT2JqZWN0UHJvdG8udG9TdHJpbmcsXG4gICAgICAgIHRvU3RyaW5nVGFnID0gJ3RvU3RyaW5nVGFnJyxcbiAgICAgICAgZGVzY3JpcHRvcjtcbiAgICBbJ2l0ZXJhdG9yJywgJ21hdGNoJywgJ3JlcGxhY2UnLCAnc2VhcmNoJywgJ3NwbGl0JywgJ2hhc0luc3RhbmNlJywgJ2lzQ29uY2F0U3ByZWFkYWJsZScsICd1bnNjb3BhYmxlcycsICdzcGVjaWVzJywgJ3RvUHJpbWl0aXZlJywgdG9TdHJpbmdUYWddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gU3ltYm9sKSkge1xuICAgICAgICBkUChTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IFN5bWJvbChuYW1lKSB9KTtcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgY2FzZSB0b1N0cmluZ1RhZzpcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBPLmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3RQcm90bywgJ3RvU3RyaW5nJyk7XG4gICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgc3RyID0gdG9TdHJpbmcuY2FsbCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgIHRzdCA9IHR5cGVvZiB0aGlzID09PSAndW5kZWZpbmVkJyB8fCB0aGlzID09PSBudWxsID8gdW5kZWZpbmVkIDogdGhpc1tTeW1ib2wudG9TdHJpbmdUYWddO1xuICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRzdCA9PT0gJ3VuZGVmaW5lZCcgPyBzdHIgOiAnW29iamVjdCAnICsgdHN0ICsgJ10nO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRQKE9iamVjdFByb3RvLCAndG9TdHJpbmcnLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKE9iamVjdCwgU3ltYm9sKTtcblxuICAoZnVuY3Rpb24gKFNpLCBBUCwgU1ApIHtcblxuICAgIGZ1bmN0aW9uIHJldHVyblRoaXMoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoIUFQW1NpXSkgQVBbU2ldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICAgIGl0ZXJhdG9yID0ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHZhciBkb25lID0gc2VsZi5sZW5ndGggPD0gaTtcbiAgICAgICAgICByZXR1cm4gZG9uZSA/IHsgZG9uZTogZG9uZSB9IDogeyBkb25lOiBkb25lLCB2YWx1ZTogc2VsZltpKytdIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpdGVyYXRvcltTaV0gPSByZXR1cm5UaGlzO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG5cbiAgICBpZiAoIVNQW1NpXSkgU1BbU2ldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCxcbiAgICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgICBpID0gMCxcbiAgICAgICAgICBsZW5ndGggPSBzZWxmLmxlbmd0aCxcbiAgICAgICAgICBpdGVyYXRvciA9IHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB2YXIgZG9uZSA9IGxlbmd0aCA8PSBpLFxuICAgICAgICAgICAgICBjID0gZG9uZSA/ICcnIDogZnJvbUNvZGVQb2ludChzZWxmLmNvZGVQb2ludEF0KGkpKTtcbiAgICAgICAgICBpICs9IGMubGVuZ3RoO1xuICAgICAgICAgIHJldHVybiBkb25lID8geyBkb25lOiBkb25lIH0gOiB7IGRvbmU6IGRvbmUsIHZhbHVlOiBjIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpdGVyYXRvcltTaV0gPSByZXR1cm5UaGlzO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH0pKFN5bWJvbC5pdGVyYXRvciwgQXJyYXkucHJvdG90eXBlLCBTdHJpbmcucHJvdG90eXBlKTtcbn1cblxuaWYgKHR5cGVvZiBGRUFUVVJFX05PX0VTMjAxNSA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICBOdW1iZXIuaXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbiAgfTtcblxuICBOdW1iZXIuaXNGaW5pdGUgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG4gIH07XG59XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCB8fCBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICFcImFiXCIuZW5kc1dpdGgoXCJhXCIsIDEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0oKSkge1xuICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24gKHNlYXJjaFN0cmluZywgcG9zaXRpb24pIHtcbiAgICB2YXIgc3ViamVjdFN0cmluZyA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICBpZiAodHlwZW9mIHBvc2l0aW9uICE9PSAnbnVtYmVyJyB8fCAhaXNGaW5pdGUocG9zaXRpb24pIHx8IE1hdGguZmxvb3IocG9zaXRpb24pICE9PSBwb3NpdGlvbiB8fCBwb3NpdGlvbiA+IHN1YmplY3RTdHJpbmcubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbiA9IHN1YmplY3RTdHJpbmcubGVuZ3RoO1xuICAgIH1cbiAgICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBsYXN0SW5kZXggPSBzdWJqZWN0U3RyaW5nLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7XG4gICAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbiAgfTtcbn1cblxuaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggfHwgZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAhXCJhYlwiLnN0YXJ0c1dpdGgoXCJiXCIsIDEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0oKSkge1xuICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24gfHwgMDtcbiAgICByZXR1cm4gdGhpcy5zdWJzdHIocG9zaXRpb24sIHNlYXJjaFN0cmluZy5sZW5ndGgpID09PSBzZWFyY2hTdHJpbmc7XG4gIH07XG59XG5cbmlmICh0eXBlb2YgRkVBVFVSRV9OT19FUzIwMTUgPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgaWYgKCFBcnJheS5mcm9tKSB7XG4gICAgQXJyYXkuZnJvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbiB0b0ludGVnZXIoaXQpIHtcbiAgICAgICAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gTWF0aC5mbG9vciA6IE1hdGguY2VpbCkoaXQpO1xuICAgICAgfTtcbiAgICAgIHZhciB0b0xlbmd0aCA9IGZ1bmN0aW9uIHRvTGVuZ3RoKGl0KSB7XG4gICAgICAgIHJldHVybiBpdCA+IDAgPyBNYXRoLm1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7XG4gICAgICB9O1xuICAgICAgdmFyIGl0ZXJDYWxsID0gZnVuY3Rpb24gaXRlckNhbGwoaXRlciwgZm4sIHZhbCwgaW5kZXgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZm4odmFsLCBpbmRleCk7XG4gICAgICAgIH0gY2F0Y2ggKEUpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGl0ZXIucmV0dXJuID09ICdmdW5jdGlvbicpIGl0ZXIucmV0dXJuKCk7XG4gICAgICAgICAgdGhyb3cgRTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlKSB7XG4gICAgICAgIHZhciBPID0gT2JqZWN0KGFycmF5TGlrZSksXG4gICAgICAgICAgICBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSxcbiAgICAgICAgICAgIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgICAgaXRlckZuID0gT1tTeW1ib2wuaXRlcmF0b3JdLFxuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgc3RlcCxcbiAgICAgICAgICAgIGl0ZXJhdG9yO1xuICAgICAgICBpZiAobWFwcGluZykgbWFwZm4gPSBtYXBmbi5iaW5kKGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkKTtcbiAgICAgICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkoYXJyYXlMaWtlKSkge1xuICAgICAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGl0ZXJDYWxsKGl0ZXJhdG9yLCBtYXBmbiwgc3RlcC52YWx1ZSwgaW5kZXgpIDogc3RlcC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgIH0oKTtcbiAgfVxuXG4gIGlmICghQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnZmluZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUocHJlZGljYXRlKSB7XG4gICAgICAgIGlmICh0aGlzID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLmZpbmQgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XG4gICAgICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFsdWUgPSBsaXN0W2ldO1xuICAgICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaSwgbGlzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICghQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdmaW5kSW5kZXgnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHByZWRpY2F0ZSkge1xuICAgICAgICBpZiAodGhpcyA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5maW5kSW5kZXggY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XG4gICAgICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFsdWUgPSBsaXN0W2ldO1xuICAgICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaSwgbGlzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBGRUFUVVJFX05PX0VTMjAxNiA9PT0gJ3VuZGVmaW5lZCcgJiYgIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlcykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnaW5jbHVkZXMnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShzZWFyY2hFbGVtZW50KSB7XG4gICAgICB2YXIgTyA9IE9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBsZW4gPSBwYXJzZUludChPLmxlbmd0aCkgfHwgMDtcbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG4gPSBwYXJzZUludChhcmd1bWVudHNbMV0pIHx8IDA7XG4gICAgICB2YXIgaztcbiAgICAgIGlmIChuID49IDApIHtcbiAgICAgICAgayA9IG47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrID0gbGVuICsgbjtcbiAgICAgICAgaWYgKGsgPCAwKSB7XG4gICAgICAgICAgayA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjdXJyZW50RWxlbWVudDtcbiAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgIGN1cnJlbnRFbGVtZW50ID0gT1trXTtcbiAgICAgICAgaWYgKHNlYXJjaEVsZW1lbnQgPT09IGN1cnJlbnRFbGVtZW50IHx8IHNlYXJjaEVsZW1lbnQgIT09IHNlYXJjaEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQgIT09IGN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaysrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmICh0eXBlb2YgRkVBVFVSRV9OT19FUzIwMTUgPT09ICd1bmRlZmluZWQnKSB7XG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmVlZHNGaXggPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgcyA9IE9iamVjdC5rZXlzKCdhJyk7XG4gICAgICBuZWVkc0ZpeCA9IHMubGVuZ3RoICE9PSAxIHx8IHNbMF0gIT09ICcwJztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuZWVkc0ZpeCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZWRzRml4KSB7XG4gICAgICBPYmplY3Qua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgICAgIGhhc0RvbnRFbnVtQnVnID0gIXsgdG9TdHJpbmc6IG51bGwgfS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgndG9TdHJpbmcnKSxcbiAgICAgICAgICAgIGRvbnRFbnVtcyA9IFsndG9TdHJpbmcnLCAndG9Mb2NhbGVTdHJpbmcnLCAndmFsdWVPZicsICdoYXNPd25Qcm9wZXJ0eScsICdpc1Byb3RvdHlwZU9mJywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJ2NvbnN0cnVjdG9yJ10sXG4gICAgICAgICAgICBkb250RW51bXNMZW5ndGggPSBkb250RW51bXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvYmogPSBPYmplY3Qob2JqKTtcblxuICAgICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgICAgcHJvcCxcbiAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhhc0RvbnRFbnVtQnVnKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZG9udEVudW1zTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBkb250RW51bXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9udEVudW1zW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICB9KCk7XG4gICAgfVxuICB9KSgpO1xuXG4gIChmdW5jdGlvbiAoTykge1xuICAgIGlmICgnYXNzaWduJyBpbiBPKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgTy5kZWZpbmVQcm9wZXJ0eShPLCAnYXNzaWduJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ09QUyA9IE8uZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgICAgICAgICAgcElFID0gTy5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICAgICAgICAgIGZpbHRlck9TID0gZ09QUyA/IGZ1bmN0aW9uIChzZWxmKSB7XG4gICAgICAgICAgcmV0dXJuIGdPUFMoc2VsZikuZmlsdGVyKHBJRSwgc2VsZik7XG4gICAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXNzaWduKHdoZXJlKSB7XG4gICAgICAgICAgaWYgKGdPUFMgJiYgISh3aGVyZSBpbnN0YW5jZW9mIE8pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3Byb2JsZW1hdGljIFN5bWJvbHMnLCB3aGVyZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gc2V0KGtleU9yU3ltYm9sKSB7XG4gICAgICAgICAgICB3aGVyZVtrZXlPclN5bWJvbF0gPSBhcmdba2V5T3JTeW1ib2xdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGkgPSAxLCBpaSA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYXJnID09PSBudWxsIHx8IGFyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPLmtleXMoYXJnKS5jb25jYXQoZmlsdGVyT1MoYXJnKSkuZm9yRWFjaChzZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB3aGVyZTtcbiAgICAgICAgfTtcbiAgICAgIH0oKVxuICAgIH0pO1xuICB9KShPYmplY3QpO1xuXG4gIGlmICghT2JqZWN0LmlzKSB7XG4gICAgT2JqZWN0LmlzID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5pZiAodHlwZW9mIEZFQVRVUkVfTk9fRVMyMDE1ID09PSAndW5kZWZpbmVkJykge1xuXG4gIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIGk7XG5cbiAgICB2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gICAgICAgIGlzID0gZnVuY3Rpb24gaXMoYSwgYikge1xuICAgICAgcmV0dXJuIGEgPT09IGIgfHwgYSAhPT0gYSAmJiBiICE9PSBiO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIFdlYWtNYXAgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGdsb2JhbC5XZWFrTWFwID0gY3JlYXRlQ29sbGVjdGlvbih7XG4gICAgICAgICdkZWxldGUnOiBzaGFyZWREZWxldGUsXG5cbiAgICAgICAgY2xlYXI6IHNoYXJlZENsZWFyLFxuXG4gICAgICAgIGdldDogc2hhcmVkR2V0LFxuXG4gICAgICAgIGhhczogbWFwSGFzLFxuXG4gICAgICAgIHNldDogc2hhcmVkU2V0XG4gICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIE1hcCA9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgbmV3IE1hcCgpLnZhbHVlcyAhPT0gJ2Z1bmN0aW9uJyB8fCAhbmV3IE1hcCgpLnZhbHVlcygpLm5leHQpIHtcbiAgICAgIHZhciBfY3JlYXRlQ29sbGVjdGlvbjtcblxuICAgICAgZ2xvYmFsLk1hcCA9IGNyZWF0ZUNvbGxlY3Rpb24oKF9jcmVhdGVDb2xsZWN0aW9uID0ge1xuICAgICAgICAnZGVsZXRlJzogc2hhcmVkRGVsZXRlLFxuXG4gICAgICAgIGhhczogbWFwSGFzLFxuXG4gICAgICAgIGdldDogc2hhcmVkR2V0LFxuXG4gICAgICAgIHNldDogc2hhcmVkU2V0LFxuXG4gICAgICAgIGtleXM6IHNoYXJlZEtleXMsXG5cbiAgICAgICAgdmFsdWVzOiBzaGFyZWRWYWx1ZXMsXG5cbiAgICAgICAgZW50cmllczogbWFwRW50cmllcyxcblxuICAgICAgICBmb3JFYWNoOiBzaGFyZWRGb3JFYWNoLFxuXG4gICAgICAgIGNsZWFyOiBzaGFyZWRDbGVhclxuICAgICAgfSwgX2NyZWF0ZUNvbGxlY3Rpb25bU3ltYm9sLml0ZXJhdG9yXSA9IG1hcEVudHJpZXMsIF9jcmVhdGVDb2xsZWN0aW9uKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBTZXQgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIG5ldyBTZXQoKS52YWx1ZXMgIT09ICdmdW5jdGlvbicgfHwgIW5ldyBTZXQoKS52YWx1ZXMoKS5uZXh0KSB7XG4gICAgICB2YXIgX2NyZWF0ZUNvbGxlY3Rpb24yO1xuXG4gICAgICBnbG9iYWwuU2V0ID0gY3JlYXRlQ29sbGVjdGlvbigoX2NyZWF0ZUNvbGxlY3Rpb24yID0ge1xuICAgICAgICBoYXM6IHNldEhhcyxcblxuICAgICAgICBhZGQ6IHNoYXJlZEFkZCxcblxuICAgICAgICAnZGVsZXRlJzogc2hhcmVkRGVsZXRlLFxuXG4gICAgICAgIGNsZWFyOiBzaGFyZWRDbGVhcixcblxuICAgICAgICBrZXlzOiBzaGFyZWRWYWx1ZXMsXG4gICAgICAgIHZhbHVlczogc2hhcmVkVmFsdWVzLFxuXG4gICAgICAgIGVudHJpZXM6IHNldEVudHJpZXMsXG5cbiAgICAgICAgZm9yRWFjaDogc2hhcmVkRm9yRWFjaFxuICAgICAgfSwgX2NyZWF0ZUNvbGxlY3Rpb24yW1N5bWJvbC5pdGVyYXRvcl0gPSBzaGFyZWRWYWx1ZXMsIF9jcmVhdGVDb2xsZWN0aW9uMikpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgV2Vha1NldCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgZ2xvYmFsLldlYWtTZXQgPSBjcmVhdGVDb2xsZWN0aW9uKHtcbiAgICAgICAgJ2RlbGV0ZSc6IHNoYXJlZERlbGV0ZSxcblxuICAgICAgICBhZGQ6IHNoYXJlZEFkZCxcblxuICAgICAgICBjbGVhcjogc2hhcmVkQ2xlYXIsXG5cbiAgICAgICAgaGFzOiBzZXRIYXNcbiAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbGxlY3Rpb24ocHJvdG8sIG9iamVjdE9ubHkpIHtcbiAgICAgIGZ1bmN0aW9uIENvbGxlY3Rpb24oYSkge1xuICAgICAgICBpZiAoIXRoaXMgfHwgdGhpcy5jb25zdHJ1Y3RvciAhPT0gQ29sbGVjdGlvbikgcmV0dXJuIG5ldyBDb2xsZWN0aW9uKGEpO1xuICAgICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLl9pdHAgPSBbXTtcbiAgICAgICAgdGhpcy5vYmplY3RPbmx5ID0gb2JqZWN0T25seTtcblxuICAgICAgICBpZiAoYSkgaW5pdC5jYWxsKHRoaXMsIGEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iamVjdE9ubHkpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJvdG8sICdzaXplJywge1xuICAgICAgICAgIGdldDogc2hhcmVkU2l6ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDb2xsZWN0aW9uO1xuICAgICAgQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBwcm90bztcblxuICAgICAgcmV0dXJuIENvbGxlY3Rpb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdChhKSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgaWYgKHRoaXMuYWRkKSBhLmZvckVhY2godGhpcy5hZGQsIHRoaXMpO2Vsc2UgYS5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgdGhpcy5zZXQoYVswXSwgYVsxXSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoYXJlZERlbGV0ZShrZXkpIHtcbiAgICAgIGlmICh0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHRoaXMuX2tleXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB0aGlzLl92YWx1ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICAgIHRoaXMuX2l0cC5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgaWYgKGkgPCBwWzBdKSBwWzBdLS07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTEgPCBpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzaGFyZWRHZXQoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXMoa2V5KSA/IHRoaXMuX3ZhbHVlc1tpXSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXMobGlzdCwga2V5KSB7XG4gICAgICBpZiAodGhpcy5vYmplY3RPbmx5ICYmIGtleSAhPT0gT2JqZWN0KGtleSkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHZhbHVlIHVzZWQgYXMgd2VhayBjb2xsZWN0aW9uIGtleVwiKTtcblxuICAgICAgaWYgKGtleSAhPSBrZXkgfHwga2V5ID09PSAwKSBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tICYmICFpcyhsaXN0W2ldLCBrZXkpOykge30gZWxzZSBpID0gbGlzdC5pbmRleE9mKGtleSk7XG4gICAgICByZXR1cm4gLTEgPCBpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEhhcyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGhhcy5jYWxsKHRoaXMsIHRoaXMuX3ZhbHVlcywgdmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcEhhcyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGhhcy5jYWxsKHRoaXMsIHRoaXMuX2tleXMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaGFyZWRTZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgdGhpcy5oYXMoa2V5KSA/IHRoaXMuX3ZhbHVlc1tpXSA9IHZhbHVlIDogdGhpcy5fdmFsdWVzW3RoaXMuX2tleXMucHVzaChrZXkpIC0gMV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoYXJlZEFkZCh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHRoaXMuX3ZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoYXJlZENsZWFyKCkge1xuICAgICAgKHRoaXMuX2tleXMgfHwgMCkubGVuZ3RoID0gdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hhcmVkS2V5cygpIHtcbiAgICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX2tleXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoYXJlZFZhbHVlcygpIHtcbiAgICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFwRW50cmllcygpIHtcbiAgICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RW50cmllcygpIHtcbiAgICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX3ZhbHVlcywgdGhpcy5fdmFsdWVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaGFyZWRJdGVyYXRvcihpdHAsIGFycmF5LCBhcnJheTIpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICB2YXIgcCA9IFswXSxcbiAgICAgICAgICBkb25lID0gZmFsc2U7XG4gICAgICBpdHAucHVzaChwKTtcbiAgICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LCBfcmVmLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgdixcbiAgICAgICAgICAgIGsgPSBwWzBdO1xuICAgICAgICBpZiAoIWRvbmUgJiYgayA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgIHYgPSBhcnJheTIgPyBbYXJyYXlba10sIGFycmF5MltrXV0gOiBhcnJheVtrXTtcbiAgICAgICAgICBwWzBdKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgaXRwLnNwbGljZShpdHAuaW5kZXhPZihwKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZG9uZSwgdmFsdWU6IHYgfTtcbiAgICAgIH0sIF9yZWY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hhcmVkU2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoYXJlZEZvckVhY2goY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgIHZhciBpdCA9IHRoaXMuZW50cmllcygpO1xuICAgICAgZm9yICg7Oykge1xuICAgICAgICB2YXIgciA9IGl0Lm5leHQoKTtcbiAgICAgICAgaWYgKHIuZG9uZSkgYnJlYWs7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoY29udGV4dCwgci52YWx1ZVsxXSwgci52YWx1ZVswXSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9KShfYXVyZWxpYVBhbC5QTEFURk9STS5nbG9iYWwpO1xufVxuXG5pZiAodHlwZW9mIEZFQVRVUkVfTk9fRVMyMDE1ID09PSAndW5kZWZpbmVkJykge1xuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcblxuICAgIGlmICh0eXBlb2YgX2F1cmVsaWFQYWwuUExBVEZPUk0uZ2xvYmFsLlJlZmxlY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBfYXVyZWxpYVBhbC5QTEFURk9STS5nbG9iYWwuUmVmbGVjdCA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIGlmICgodHlwZW9mIHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGFyZ2V0KSkgPT09ICdvYmplY3QnID8gdGFyZ2V0ID09PSBudWxsIDogdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZmxlY3QuZGVmaW5lUHJvcGVydHkgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIFJlZmxlY3QuY29uc3RydWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBSZWZsZWN0LmNvbnN0cnVjdCA9IGZ1bmN0aW9uIChUYXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KCk7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICAgIHJldHVybiBuZXcgKGJpbmQuYXBwbHkoVGFyZ2V0LCBhKSkoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0Lm93bktleXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIFJlZmxlY3Qub3duS2V5cyA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvKSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcbn1cblxuaWYgKHR5cGVvZiBGRUFUVVJFX05PX0VTTkVYVCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBlbXB0eU1ldGFkYXRhID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgdmFyIG1ldGFkYXRhQ29udGFpbmVyS2V5ID0gJ19fbWV0YWRhdGFfXyc7XG5cbiAgICBpZiAodHlwZW9mIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGFLZXksIHRhcmdldCwgdGFyZ2V0S2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkobWV0YWRhdGFDb250YWluZXJLZXkpKSB7XG4gICAgICAgICAgcmV0dXJuICh0YXJnZXRbbWV0YWRhdGFDb250YWluZXJLZXldW3RhcmdldEtleV0gfHwgZW1wdHlNZXRhZGF0YSlbbWV0YWRhdGFLZXldO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhQ29udGFpbmVyID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG1ldGFkYXRhQ29udGFpbmVyS2V5KSA/IHRhcmdldFttZXRhZGF0YUNvbnRhaW5lcktleV0gOiB0YXJnZXRbbWV0YWRhdGFDb250YWluZXJLZXldID0ge307XG4gICAgICAgIHZhciB0YXJnZXRDb250YWluZXIgPSBtZXRhZGF0YUNvbnRhaW5lclt0YXJnZXRLZXldIHx8IChtZXRhZGF0YUNvbnRhaW5lclt0YXJnZXRLZXldID0ge30pO1xuICAgICAgICB0YXJnZXRDb250YWluZXJbbWV0YWRhdGFLZXldID0gbWV0YWRhdGFWYWx1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBSZWZsZWN0Lm1ldGFkYXRhID0gZnVuY3Rpb24gKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVyZWxpYS1wb2x5ZmlsbHMvZGlzdC9jb21tb25qcy9hdXJlbGlhLXBvbHlmaWxscy5qc1xuLy8gbW9kdWxlIGlkID0gYXVyZWxpYS1wb2x5ZmlsbHNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCJQcm9taXNlXCJdID0gcmVxdWlyZShcIi0hLi9ibHVlYmlyZC5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmx1ZWJpcmQvanMvYnJvd3Nlci9ibHVlYmlyZC5qcy1leHBvc2VkXG4vLyBtb2R1bGUgaWQgPSBibHVlYmlyZFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2p1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2L0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0a0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcDFCQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==