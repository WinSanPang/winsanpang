import { useTranslations } from "next-intl"

import { lobster } from "@/src/app/[locale]/ui/fonts"

import Polaroid from "../polaroid"

type Props = {
  id: string
  roles: {
    role: string
    responsibilities: string[]
    polaroids: {
      polaroid: string
      img: string
    }[]
  }[]
  colours: {
    background: string
    border: string
    title: string
    text: string
  }
  height: string
  isLast: boolean
}

export default function TimelineSection({
  id,
  roles,
  colours,
  height,
  isLast,
}: Props) {
  const t = useTranslations("work.timeline")

  return (
    <section id={id} className="flex">
      <div className="relative mt-8">
        <div className="rounded-full bg-white size-8"></div>
        {!isLast && (
          <div
            className={`absolute top-0.5 inset-1/2 bg-white w-[4px] ${height}`}
          />
        )}
      </div>
      <div
        className={`${colours.background} m-4 p-4 border-2 rounded-lg ${colours.border}`}
      >
        <h3
          className={`${lobster.className} ${colours.title} text-2xl md:text-4xl`}
        >
          {t(`${id}.company_name`)}
        </h3>
        <p className={`${colours.text} pb-8`}>{t(`${id}.summary`)}</p>
        {roles.map(({ role, responsibilities, polaroids }, roleIndex) => (
          <div key={`${role}-${roleIndex}`}>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-2">
                <h4
                  className={`${lobster.className} ${colours.title} text-xl md:text-2xl`}
                >
                  {t(`${id}.roles.${role}.title`)}
                </h4>
                <p className={`${colours.text}`}>
                  <strong>
                    {t(`${id}.roles.${role}.start_date`)} -{" "}
                    {t(`${id}.roles.${role}.end_date`)}
                  </strong>
                </p>
                <ul className={`list-disc ${colours.text} p-4`}>
                  {responsibilities.map((responsibility) => (
                    <li key={responsibility} className="pb-4">
                      <strong>
                        {t(
                          `${id}.roles.${role}.responsibilities.${responsibility}.heading`
                        )}
                      </strong>
                      <p>
                        {t(
                          `${id}.roles.${role}.responsibilities.${responsibility}.description`
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center w-full flex-wrap">
                {polaroids.map(({ polaroid, img }) => (
                  <Polaroid
                    key={`${id}-${role}-${polaroid}`}
                    img={img}
                    alt={t(`${id}.roles.${role}.polaroids.${polaroid}.img_alt`)}
                    caption={t(
                      `${id}.roles.${role}.polaroids.${polaroid}.caption`
                    )}
                  />
                ))}
              </div>
            </div>
            {roles.length > 1 && roleIndex < roles.length - 1 && (
              <div className="border-b border-black mb-8 mx-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
