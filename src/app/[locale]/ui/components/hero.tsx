import { useTranslations } from "next-intl"
import { ReactNode } from "react"

import { lobster } from "@/app/[locale]/ui/fonts"

type Props = {
  title: string
  subtitle?: string | ReactNode
  emoji: {
    icon: string
    animation: string
  }
  charCount: number
}

export default function Hero({ title, subtitle, emoji, charCount }: Props) {
  const t = useTranslations()
  const style = {
    "--char-count": `${charCount}ch`,
    "--steps": `${charCount}`,
  } as React.CSSProperties

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <h1
          className={`${lobster.className} text-white text-4xl md:text-6xl md:leading-normal mb-8 inline-block overflow-hidden whitespace-nowrap border-r-2 animate-typing `}
          style={style}
        >
          <strong>{title}</strong>
        </h1>
        <span
          className={`text-4xl md:text-6xl md:leading-normal inline-block ${emoji.animation} ml-2`}
        >
          {emoji.icon}
        </span>
      </div>
      {subtitle && (
        <h2 className="text-base text-white md:leading-normal md:mx-28">
          {subtitle}
        </h2>
      )}
      <div className="border-b border-white m-4 md:m-8" />
    </div>
  )
}
