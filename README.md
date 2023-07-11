# DOM utils

This package provides a set of DOM utilities.

* One of them is a local state manager that simplifies the usage of Storage API:
```js
const KEY = `my-key`
const storage = localStorage // or sessionStorage

const state = JSON.parse(storage.getItem(KEY))
storage.setItem(KEY, JSON.stringify({value: []}))
```

## Installation

```bash
npm i @itshkins/dom-utils@latest
```

## Usage

### Node

```js
import {newLocalState} from '@itshkins/dom-utils'

const DEFAULT_STATE = Object.freeze({})

const localState = newLocalState(`my-key`)
console.log(localState.getState(DEFAULT_STATE)) // {}
console.log(localState.setState({value: []})) // true
console.log(localState.getState(DEFAULT_STATE)) // {value: Array(0)}
```

### Browser

```html
<script src="./node_modules/@itshkins/dom-utils/dist/dom-utils.js"></script>

<script>
  const DEFAULT_STATE = Object.freeze({})

  const localState = domUtils.newLocalState(`my-key`)
  console.log(localState.getState(DEFAULT_STATE)) // {}
  console.log(localState.setState({value: []})) // true
  console.log(localState.getState(DEFAULT_STATE)) // {value: Array(0)}
</script>
```
