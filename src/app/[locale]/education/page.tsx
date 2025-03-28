import { useTranslations } from "next-intl"

import Hero from "@/app/[locale]/ui/components/hero"
import Certificate from "@/app/[locale]/ui/components/certificate/certificate"
import SvgRepoCredit from "@/app/[locale]/ui/components/svg-repo-credit"

export default function Page() {
  const t = useTranslations("education")

  return (
    <div>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Certificate />
      <SvgRepoCredit />
    </div>
  )
}
