import {useEffect, useState} from 'react'

import {defaultStorage, LocalState} from './local-state'

export const useReactLocalState = <TState>(
  key: string,
  defaultState: TState,
  storage: Storage = defaultStorage,
): [
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
