"use client"
import { useTranslations, useLocale } from "next-intl"

import TimelineSection from "./timeline-section"

import { workData } from "./data"

export default function Timeline() {
  const t = useTranslations("work.timeline")
  const locale = useLocale()

  return (
    <div>
      <div className="grid grid-cols-2 md:flex justify-center gap-2 ">
        {workData.map(({ id, colours }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${colours.background} text-center rounded-full p-1 md:p-2 md:m-2 border-2 ${colours.border}`}
          >
            <strong>
              <span className={colours.title}>{t(`${id}.company_name`)}</span>
            </strong>
          </a>
        ))}
      </div>
      {workData.map(({ id, roles, colours, height, shorterHeight }, index) => (
        <TimelineSection
          key={id}
          id={id}
          roles={roles}
          colours={colours}
          height={locale === "zh-HK" ? shorterHeight : height}
          isLast={index === workData.length - 1}
        />
      ))}
    </div>
  )
}
