import { useTranslations } from "next-intl"
import { ReactNode } from "react"

import { lobster } from "@/app/[locale]/ui/fonts"

type Props = {
  title: string
  subtitle?: string | ReactNode
}

export default function Hero({ title, subtitle }: Props) {
  const t = useTranslations()

  return (
    <div className="text-center">
      <h1
        className={`${lobster.className} text-4xl text-white md:text-6xl md:leading-normal md:mb-8`}
      >
        <strong>{title}</strong>
      </h1>
      {subtitle && (
        <h2 className="text-base text-white md:leading-normal md:mx-28">
          {subtitle}
        </h2>
      )}
      <div className="border-b border-white m-8" />
    </div>
  )
}
