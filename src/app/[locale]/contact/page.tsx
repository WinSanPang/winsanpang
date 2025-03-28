import { useTranslations } from "next-intl"

import Hero from "@/app/[locale]/ui/components/hero"
import BusinessCard from "@/app/[locale]/ui/components/business-card"
import SvgRepoCredit from "@/app/[locale]/ui/components/svg-repo-credit"

export default function Page() {
  const t = useTranslations("contact")

  return (
    <div>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <BusinessCard />
      <SvgRepoCredit />
    </div>
  )
}
