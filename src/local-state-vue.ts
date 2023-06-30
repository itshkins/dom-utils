import {reactive, Ref, shallowReactive, watch} from 'vue'

import {defaultStorage, LocalState} from './local-state'

export const vueLocalState = <TState>(
  key: string,
  defaultState: TState,
  storage: Storage = defaultStorage,
  toReactive: typeof reactive | typeof shallowReactive | { (state: TState): Ref<TState> } = reactive,
): TState => {
  const localState = new LocalState(key, storage)
  const reactiveState = toReactive(localState.getState(defaultState))

  watch(reactiveState, () => {
    localState.setState(reactiveState)
  }, {deep: true})

  return reactiveState
}
