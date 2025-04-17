import { getTranslations } from "next-intl/server"

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
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Certificate />
      <SvgRepoCredit />
    </div>
  )
}
