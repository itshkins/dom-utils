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


