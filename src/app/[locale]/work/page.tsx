import { getTranslations } from "next-intl/server"

import localeToCharCount from "@/app/[locale]/lib/utils"

import Hero from "@/app/[locale]/ui/components/hero"
import Timeline from "@/app/[locale]/ui/components/timeline/timeline"

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
    title: t("work.title"),
    description: t("work.description"),
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
    namespace: "work",
  })

  return (
    <div>
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        emoji={{ icon: "🧑🏻‍💻", animation: "animate-coding" }}
        charCount={localeToCharCount({
          locale,
          charCounts: { en: 5, "zh-HK": 8, hu: 6 },
        })}
      />
      <Timeline />
    </div>
  )
}
