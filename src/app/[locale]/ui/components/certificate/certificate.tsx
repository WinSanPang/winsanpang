import { useTranslations } from "next-intl"
import Image from "next/image"

import { education } from "./data"

export default function Certificate() {
  const educationT = useTranslations("education")
  const sharedT = useTranslations("shared")

  return (
    <div>
      {education.map(({ key, border, text, style, img, achievements }) => (
        <div
          key={key}
          className="h-[650px] flex bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1615800098746-73af8261e3df?q=80&w=3075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] p-2 mb-12"
        >
          <div
            className={`w-full border-2 ${border} p-4 m-2 mb-2 text-center font-times-new-roman`}
          >
            <Image
              src={`/education/${img.path}`}
              width={img.width}
              height={img.height}
              className="m-auto"
              alt={educationT(`${key}.logo_alt`)}
            />
            <h3 className={`font-bold md:text-2xl ${text}`}>
              {educationT(`${key}.title`)}
            </h3>
            <div className="md:mx-60 flex items-center h-full">
              <div className="flex items-center flex-wrap">
                <h4 className="font-bold md:text-2xl mb-8 w-full">
                  {sharedT("name")}
                </h4>
                <p>{educationT(`${key}.description`)}</p>
                <div className="mt-4 mb-20 w-full">
                  {style === "list" && achievements ? (
                    <>
                      {achievements.map((achievement, index) => (
                        <p
                          key={`${achievement}-${index}`}
                          className="md:text-xl mb-4"
                        >
                          {educationT(`${key}.achievements.${achievement}`)}
                        </p>
                      ))}
                    </>
                  ) : (
                    <>
                      <p className="md:text-xl">
                        {educationT(`${key}.achievements.degree`)}
                      </p>
                      <p className="italic">
                        {educationT(`${key}.achievements.in`)}
                      </p>
                      <p className="md:text-xl">
                        {educationT(`${key}.achievements.subject`)}
                      </p>
                      <p className="mt-4">
                        {educationT(`${key}.achievements.grade`)}
                      </p>
                    </>
                  )}
                  <p>{educationT(`${key}.achievements.date`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
