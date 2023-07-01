# DOM utils

## Install

```bash
npm i -E @itshkins/dom-utils
```

## Example

```html
<script src="./node_modules/@itshkins/dom-utils/dist/dom-utils.js"></script>
<script>
  const localState = newLocalState(`my-key`)
  const defaultState = {}
  console.log(localState.getState(defaultState))
  console.log(localState.setState({value: []}))
  console.log(localState.getState(defaultState))
</script>

```
