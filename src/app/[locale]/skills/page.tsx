import { getTranslations } from "next-intl/server"

import Hero from "@/app/[locale]/ui/components/hero"
import Mindmap from "@/app/[locale]/ui/components/mindmap/mindmap"
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
    title: t("skills.title"),
    description: t("skills.description"),
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
    namespace: "skills",
  })

  return (
    <div>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Mindmap />
      <SvgRepoCredit mobileHidden />
    </div>
  )
}
