import { useTranslations } from "next-intl"

import Hero from "@/src/app/[locale]/ui/components/hero"
import Certificate from "@/src/app/[locale]/ui/components/certificate/certificate"
import SvgRepoCredit from "@/src/app/[locale]/ui/components/svg-repo-credit"

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
