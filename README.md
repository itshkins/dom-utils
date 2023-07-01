# DOM utils

## Install

```bash
npm i @itshkins/dom-utils@latest
```

## Example

```html
<script src="./node_modules/@itshkins/dom-utils/dist/dom-utils.js"></script>
<script>
  const localState = domUtils.newLocalState(`my-key`)
  const defaultState = {}
  console.log(localState.getState(defaultState)) // {}
  console.log(localState.setState({value: []})) // true
  console.log(localState.getState(defaultState)) // {value:[]}
</script>

```
