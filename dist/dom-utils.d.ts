declare module "storage-stub" {
    export class StorageStub implements Storage {
        private store;
        getItem(key: string): string | null;
        setItem(key: string, value: string): void;
        removeItem(key: string): void;
        clear(): void;
        get length(): number;
        key(index: number): string | null;
    }
}
declare module "local-state" {
    import { StorageStub } from "storage-stub";
    export class LocalState {
        private key;
        private storage;
        constructor(key: string, storage: Storage);
        getState<TState>(defaultState?: TState | undefined): any;
        setState(newState: unknown): boolean;
    }
    export let defaultStorage: StorageStub | Storage;
    export const setDefaultStorage: (storage: Storage) => void;
    export const newLocalState: (key: string, storage?: Storage) => LocalState;
}
declare module "event-utils" {
    export function newListener<TEvent extends Event>(target: EventTarget, type: string, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean): {
        start: () => void;
        stop: () => void;
    };
    export function newTimer(callback: Function, timeout?: number, once?: boolean): {
        start: () => number;
        stop: () => void;
    };
    export const newFrame: (callback: FrameRequestCallback) => {
        start: () => number;
        stop: () => void;
    };
    export const useListener: <TEvent extends Event>(target: EventTarget, type: string, callback: (evt: TEvent) => void, options?: AddEventListenerOptions | boolean) => () => void;
    export const useTimer: (callback: Function, timeout?: number, once?: boolean) => () => void;
    export const useFrame: (callback: FrameRequestCallback) => () => void;
}
declare module "index" {
    export * from "local-state";
    export * from "event-utils";
}
