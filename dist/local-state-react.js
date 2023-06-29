import { useEffect, useState } from 'react';
import { DEFAULT_STORAGE, LocalState } from './local-state';
export const useReactLocalState = (key, defaultState, storage = DEFAULT_STORAGE) => {
    const localState = new LocalState(key, storage);
    const [reactiveState, setReactiveState] = useState(() => { var _a; return (_a = localState.getState()) !== null && _a !== void 0 ? _a : defaultState; });
    useEffect(reactiveState, () => {
        localState.setState(reactiveState);
    }, [reactiveState]);
    return [reactiveState, setReactiveState];
};
