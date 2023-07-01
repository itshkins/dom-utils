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
  expect(localState.getState(defaultState)).toBe(defaultState)
  expect(localState.setState({value: []})).toBe(true)
  expect(localState.getState(defaultState)).toEqual({value: []})
</script>

```
