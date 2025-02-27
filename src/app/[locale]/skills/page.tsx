import { useTranslations } from "next-intl"

import Hero from "@/src/app/[locale]/ui/components/hero"
import Mindmap from "@/src/app/[locale]/ui/components/mindmap/mindmap"
import SvgRepoCredit from "@/src/app/[locale]/ui/components/svg-repo-credit"

export default function Page() {
  const t = useTranslations("skills")

  return (
    <div>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Mindmap />
      <SvgRepoCredit />
    </div>
  )
}
