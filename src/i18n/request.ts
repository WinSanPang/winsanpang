import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"
import deepmerge from "deepmerge"

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  const userMessages = (await import(`../../messages/${locale}.json`)).default
  const defaultMessages = (await import(`../../messages/en.json`)).default
  const messages = deepmerge(defaultMessages, userMessages)

  return {
    locale,
    messages: messages,
  }
})
