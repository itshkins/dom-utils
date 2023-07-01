import {describe, it, expect} from '@jest/globals'
import {newLocalState} from './local-state'

describe(`local state module`, () => {
  it(`writes and reads storage`, () => {
    const localState = newLocalState(`my-key`)
    const defaultState = {}
    expect(localState.getState(defaultState)).toBe(defaultState)
    expect(localState.setState({value: []})).toBe(true)
    expect(localState.getState(defaultState)).toEqual({value: []})
  })
})

