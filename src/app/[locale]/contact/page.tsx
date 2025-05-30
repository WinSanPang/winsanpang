import { getTranslations } from "next-intl/server"

import localeToCharCount from "@/app/[locale]/lib/utils"

import Hero from "@/app/[locale]/ui/components/hero"
import BusinessCard from "@/app/[locale]/ui/components/business-card"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  })

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({
    locale,
    namespace: "contact",
  })

  return (
    <div>
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        emoji={{ icon: "📱", animation: "animate-screen" }}
        charCount={localeToCharCount({
          locale,
          charCounts: { en: 7, "zh-HK": 4, hu: 8 },
        })}
      />
      <BusinessCard />
    </div>
  )
}
