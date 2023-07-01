import {describe, it, expect} from '@jest/globals'

import {newLocalState} from './local-state'

describe(`local state module`, () => {
  it(`writes and reads storage`, () => {
    const DEFAULT_STATE = Object.freeze({})

    const localState = newLocalState(`my-key`)
    expect(localState.getState(DEFAULT_STATE)).toBe(DEFAULT_STATE)
    expect(localState.setState({value: []})).toBe(true)
    expect(localState.getState(DEFAULT_STATE)).toEqual({value: []})
  })
})

