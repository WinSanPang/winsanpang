"use client"
import TimelineSection from "./timeline-section"

import { workData } from "./data"

export default function Timeline() {
  return (
    <div>
      <div className="flex justify-center gap-2">
        {workData.map(({ id, companyName, colours }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${colours.background} rounded-full p-1 md:p-2 md:m-2 border-2 ${colours.border}`}
          >
            <strong>
              <span className={colours.title}>{companyName}</span>
            </strong>
          </a>
        ))}
      </div>
      {workData.map(
        ({ id, companyName, summary, roles, colours, height }, index) => (
          <TimelineSection
            key={id}
            id={id}
            companyName={companyName}
            summary={summary}
            roles={roles}
            colours={colours}
            height={height}
            isLast={index === workData.length - 1}
          />
        )
      )}
    </div>
  )
}
