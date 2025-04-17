import { getTranslations } from "next-intl/server"

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
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Timeline />
    </div>
  )
}
