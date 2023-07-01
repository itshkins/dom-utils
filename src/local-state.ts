import {StorageStub} from './storage-stub'

export class LocalState {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private key: string,
    private storage: Storage,
  ) {
  }

  getState<TState>(defaultState: TState | undefined = undefined) {
    try {
      const item = this.storage.getItem(this.key)
      return item === null
        ? defaultState
        : JSON.parse(item)
    } catch {
      return defaultState
    }
  }

  setState(newState: unknown) {
    try {
      this.storage.setItem(this.key, JSON.stringify(newState))
      return true
    } catch {
      return false
    }
  }
}

export let defaultStorage = typeof window === `undefined`
  ? new StorageStub()
  : window.localStorage

export const setDefaultStorage = (storage: Storage) => {
  defaultStorage = storage
}

export const newLocalState = (key: string, storage: Storage = defaultStorage) => new LocalState(key, storage)
