import { reactive, watch } from 'vue';
import { LocalState } from './local-state';
export const vueLocalState = (key, defaultState, storage = localStorage, toReactive = reactive) => {
    const localState = new LocalState(key, storage);
    const reactiveState = toReactive(localState.getState(defaultState));
    watch(reactiveState, () => {
        localState.setState(reactiveState);
    }, { deep: true });
    return reactiveState;
};
