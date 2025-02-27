"use client"
import { useTranslations } from "next-intl"

import TimelineSection from "./timeline-section"

import { workData } from "./data"

export default function Timeline() {
  const t = useTranslations("work.timeline")

  return (
    <div>
      <div className="flex justify-center gap-2">
        {workData.map(({ id, colours }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${colours.background} rounded-full p-1 md:p-2 md:m-2 border-2 ${colours.border}`}
          >
            <strong>
              <span className={colours.title}>{t(`${id}.company_name`)}</span>
            </strong>
          </a>
        ))}
      </div>
      {workData.map(({ id, roles, colours, height }, index) => (
        <TimelineSection
          key={id}
          id={id}
          roles={roles}
          colours={colours}
          height={height}
          isLast={index === workData.length - 1}
        />
      ))}
    </div>
  )
}
