import {Page, Request} from '@playwright/test'

export const sleep = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout))

export const withNewPage = async (defaultPage: Page, callback: (newPage: Page) => Promise<void>) => {
  const browserType = defaultPage.context().browser().browserType()
  const browser = await browserType.launch({
    // args: [`--disable-local-storage`],
    // firefoxUserPrefs: {
    //   [`dom.storage.enabled`]: false,
    // },
  })
  const context = await browser.newContext({offline: true})
  const newPage = await context.newPage()
  try {
    return await callback(newPage)
  }
  finally {
    await browser.close()
  }
}

export const logRequests = (page: Page) => {
  page.on(`request`, (request: Request) => {
    console.log(`request`, JSON.stringify(request.url()))
  })
}
