# DOM utils

```js
import {LocalState} from '@ithskins/dom-utils'

const localState = new LocalState(`my-storage-key`, localStorage)
const state = localState.getState({})
state[`Hello`] = `State!`
localState.setState(state)
```
