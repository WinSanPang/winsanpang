import { useTranslations } from "next-intl"

import Hero from "@/src/app/[locale]/ui/components/hero"
import Timeline from "@/src/app/[locale]/ui/components/timeline/timeline"

export default function Page() {
  const t = useTranslations("work")

  return (
    <div>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Timeline />
    </div>
  )
}
