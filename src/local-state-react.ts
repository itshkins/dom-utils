import {useEffect, useState} from 'react'

import {DEFAULT_STORAGE, LocalState} from './local-state'

export const useReactLocalState = <TState>(key: string, defaultState: TState, storage: Storage = DEFAULT_STORAGE): [
  TState,
  (state: TState) => void,
] => {
  const localState = new LocalState(key, storage)
  const [reactiveState, setReactiveState] = useState(() => localState.getState(defaultState))

  useEffect(reactiveState, () => {
    localState.setState(reactiveState)
  }, [reactiveState])

  return [reactiveState, setReactiveState]
}
