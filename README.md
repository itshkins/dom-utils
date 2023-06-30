# DOM utils

```html
<script src="./node_modules/@itshkins/dom-utils/dist/dom-utils.js"></script>
<script>
  const localState = domUtils.newLocalState(`my-key`)
  const defaultState = {}
  console.log(structuredClone(localState.getState(defaultState)))
  localState.setState({value: []})
  console.log(structuredClone(localState.getState({value: []})))
</script>

```
