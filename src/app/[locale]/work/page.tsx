import { useTranslations } from "next-intl"

import Hero from "@/app/[locale]/ui/components/hero"
import Timeline from "@/app/[locale]/ui/components/timeline/timeline"

export default function Page() {
  const t = useTranslations("work")

  return (
    <div>
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Timeline />
    </div>
  )
}
