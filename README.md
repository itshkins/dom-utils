# DOM utils

## Install

```bash
npm i @itshkins/dom-utils@latest
```

## Example

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
