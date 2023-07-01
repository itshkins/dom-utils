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
    newLocalState: () => newLocalState,
    setDefaultStorage: () => setDefaultStorage
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
  return __toCommonJS(src_exports);
})();
