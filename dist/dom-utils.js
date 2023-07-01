"use strict";
var domUtils = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    LocalState: () => LocalState,
    defaultStorage: () => defaultStorage,
    newFrame: () => newFrame,
    newListener: () => newListener,
    newLocalState: () => newLocalState,
    newTimer: () => newTimer,
    setDefaultStorage: () => setDefaultStorage,
    useFrame: () => useFrame,
    useListener: () => useListener,
    useTimer: () => useTimer
  });

  // src/storage-stub.ts
  var StorageStub = class {
    constructor() {
      this.store = {};
    }
    getItem(key) {
      return this.store[key] ?? null;
    }
    setItem(key, value) {
      this.store[key] = value;
    }
    removeItem(key) {
      delete this.store[key];
    }
    clear() {
      this.store = {};
    }
    get length() {
      return Object.keys(this.store).length;
    }
    key(index) {
      return Object.keys(this.store)[index] ?? null;
    }
  };

  // src/local-state.ts
  var LocalState = class {
    // eslint-disable-next-line no-useless-constructor
    constructor(key, storage) {
      this.key = key;
      this.storage = storage;
    }
    getState(defaultState = void 0) {
      try {
        const item = this.storage.getItem(this.key);
        return item === null ? defaultState : JSON.parse(item);
      } catch {
        return defaultState;
      }
    }
    setState(newState) {
      try {
        this.storage.setItem(this.key, JSON.stringify(newState));
        return true;
      } catch {
        return false;
      }
    }
  };
  var defaultStorage = typeof window === `undefined` ? new StorageStub() : window.localStorage;
  var setDefaultStorage = (storage) => {
    defaultStorage = storage;
  };
  var newLocalState = (key, storage = defaultStorage) => new LocalState(key, storage);

  // src/event-utils.ts
  function newListener(target, type, callback, options) {
    const stop = () => {
      target.removeEventListener(type, callback, options);
    };
    const start = () => {
      target.addEventListener(type, callback, options);
    };
    return { start, stop };
  }
  function newTimer(callback, timeout, once = true) {
    let timer = -1;
    const stop = () => {
      if (timer === -1) {
        return;
      }
      once ? clearTimeout(timer) : clearInterval(timer);
      timer = -1;
    };
    const start = () => {
      stop();
      timer = once ? setTimeout(callback, timeout) : setInterval(callback, timeout);
      return timer;
    };
    return { start, stop };
  }
  var newFrame = (callback) => {
    let frame = -1;
    const stop = () => {
      if (frame === -1) {
        return;
      }
      cancelAnimationFrame(frame);
    };
    const start = () => {
      stop();
      frame = requestAnimationFrame(callback);
      return frame;
    };
    return { start, stop };
  };
  var useListener = (target, type, callback, options) => {
    target.addEventListener(type, callback, options);
    return function stopEvent() {
      target.removeEventListener(type, callback, options);
    };
  };
  var useTimer = (callback, timeout, once = true) => {
    const timer = once ? setTimeout(callback, timeout) : setInterval(callback, timeout);
    return function stopTimer() {
      once ? clearTimeout(timer) : clearInterval(timer);
    };
  };
  var useFrame = (callback) => {
    const frame = requestAnimationFrame(callback);
    return function stopFrame() {
      cancelAnimationFrame(frame);
    };
  };
  return __toCommonJS(src_exports);
})();
