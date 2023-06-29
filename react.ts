import {useEffect, useState} from 'react'

import {LocalState} from './src/local-state'

export const useReactLocalState = <TState>(key: string, storage: Storage, defaultState: TState): [
  TState,
  (state: TState) => void,
] => {
  const localState = new LocalState(key, storage)
  const [reactiveState, setReactiveState] = useState(() => localState.getState() ?? defaultState)

  useEffect(reactiveState, () => {
    localState.setState(reactiveState)
  }, [reactiveState])

  return [reactiveState, setReactiveState]
}
