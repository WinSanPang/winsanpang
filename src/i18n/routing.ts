import { defineRouting } from "next-intl/routing"
import { createNavigation } from "next-intl/navigation"

export const routing = defineRouting({
  locales: ["en", "zh-HK", "hu"],
  defaultLocale: "en",
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
