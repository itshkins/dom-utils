export class LocalState {
    // eslint-disable-next-line no-useless-constructor
    constructor(key, storage) {
        this.key = key;
        this.storage = storage;
    }
    getState(defaultState = undefined) {
        try {
            const item = this.storage.getItem(this.key);
            return item === null
                ? defaultState
                : JSON.parse(item);
        }
        catch (_a) {
            return defaultState;
        }
    }
    setState(newState) {
        try {
            this.storage.setItem(this.key, JSON.stringify(newState));
            return true;
        }
        catch (_a) {
            return false;
        }
    }
}
export let DEFAULT_STORAGE = localStorage;
export const newLocalState = (key, storage = DEFAULT_STORAGE) => new LocalState(key, storage);
