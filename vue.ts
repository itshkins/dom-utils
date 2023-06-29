import {reactive, watch} from 'vue'

import {LocalState} from './src/local-state'

export const vueLocalState = <TState>(key: string, storage: Storage, defaultState: TState, toReactive = reactive): TState => {
  const localState = new LocalState(key, storage)
  const reactiveState = toReactive(localState.getState() ?? defaultState)

  watch(reactiveState, () => {
    localState.setState(reactiveState)
  }, {deep: true})

  return reactiveState
}
