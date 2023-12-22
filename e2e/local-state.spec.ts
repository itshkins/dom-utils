import {test, expect, ConsoleMessage, Request, Page} from '@playwright/test'
import {resolve} from 'node:path'

const OK_HTML_PATH = `file://` + resolve(`e2e/local-state-ok.html`)
const ERROR_HTML_PATH = `file://` + resolve(`e2e/local-state-error.html`)

const TEST_LOCAL_STORAGE_JS = `
try {
  const localState = domUtils.newLocalState('my-key')
  const defaultState = {}
  console.log(JSON.stringify(localState.getState(defaultState)))
  console.log(JSON.stringify(localState.setState({value: []})))
  console.log(JSON.stringify(localState.getState(defaultState)))
} catch(err) {
  console.error(err)
}`

test.describe(`LocalState`, () => {
  test(`writes and reads storage`, async ({page}) => {
    const messages: string[] = []
    page.on(`console`, (message: ConsoleMessage) => {
      messages.push(message.text())
    })
    await page.goto(OK_HTML_PATH)
    await page.evaluate(TEST_LOCAL_STORAGE_JS)
    expect(messages).toEqual([`{}`, `true`, `{"value":[]}`])
  })

  test(`handles storage errors correctly`, async ({page}) => {
    const messages: string[] = []
    page.on(`console`, (message: ConsoleMessage) => {
      messages.push(message.text())
    })
    await page.goto(ERROR_HTML_PATH)
    await page.evaluate(TEST_LOCAL_STORAGE_JS)
    expect(messages).toEqual([`{}`, `false`, `{}`])
  })
})
