# DOM utils

## Native

```js
import {LocalState} from '@ithskins/dom-utils'

const localState = new LocalState(`my-storage-key`, localStorage)
const state = localState.getState({})
state[`Hello`] = `State!`
localState.setState(state)
```

## React

```js
import {useState} from 'react'
import {useReactLocalState} from '@itshkins/dom-utils/react'

const [state, setState] = useReactLocalState(`my-storage-key`, localStorage, {})
setState({[`Hello`]: `State!`})
```

## Vue

```js
import {shallowReactive} from 'vue'
import {useVueLocalState} from '@itshkins/dom-utils/vue'

const localState = useVueLocalState(`my-storage-key`, localStorage, {}, shallowReactive)
localState[`Hello`] = `State!`
```