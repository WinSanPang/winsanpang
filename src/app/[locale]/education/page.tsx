import { getTranslations } from "next-intl/server"

import localeToCharCount from "@/app/[locale]/lib/utils"

import Hero from "@/app/[locale]/ui/components/hero"
import Certificate from "@/app/[locale]/ui/components/certificate/certificate"
import SvgRepoCredit from "@/app/[locale]/ui/components/svg-repo-credit"

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
    title: t("education.title"),
    description: t("education.description"),
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
    namespace: "education",
  })

  return (
    <div>
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        emoji={{ icon: "🎓", animation: "animate-tilt" }}
        charCount={localeToCharCount({
          locale,
          charCounts: { en: 8, "zh-HK": 4, hu: 16 },
        })}
      />
      <Certificate />
      <SvgRepoCredit />
    </div>
  )
}
