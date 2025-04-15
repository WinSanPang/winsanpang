import { useTranslations } from "next-intl"
import Image from "next/image"

import { lobster } from "@/app/[locale]/ui/fonts"

import { creativeSkills, generalSkills, programmingLanguages } from "./data"

export default function Mindmap() {
  const t = useTranslations("skills.mindmap")

  return (
    <div className="relative">
      <div className="relative w-full md:h-[600px] mb-8 md:mb-36">
        <Image
          src="/icons/brain.svg"
          alt="An illustration icon of a brain's side profile"
          width={300}
          height={300}
          className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
        />
        <h3
          className={`${lobster.className} text-center text-2xl md:text-4xl text-sky-900 font-bold md:mt-8 mb-8 [text-shadow:_-1.0px_1.0px_2.0px_white,1.0px_1.0px_2.0px_white,1.0px_-1.0px_0_white,-1.0px_-1.0px_0_white]`}
        >
          {t("programming_languages.title")}
        </h3>
        {programmingLanguages.map(
          ({ key, mainPosition, pillPosition, linePosition, colour }) => (
            <div
              key={key}
              className={`mb-2 text-center md:absolute ${mainPosition}`}
            >
              <div
                className={`${colour} rounded-full px-4 py-2 border border-white ${pillPosition}`}
              >
                <p className="text-white text-base md:text-xl">
                  {t(`programming_languages.${key}`)}
                </p>
              </div>
              <div className="flex justify-center">
                <div
                  className={`hidden md:block bg-white w-[2px] h-[100px] ${linePosition}`}
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className="border-b border-white mb-8 mx-28" />
      <div className="relative w-full md:h-[600px] mb-8 md:mb-36">
        <Image
          src="/icons/brain.svg"
          alt={t("brain_icon_alt")}
          width={300}
          height={300}
          className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h3
          className={`${lobster.className} text-center text-2xl md:text-4xl text-indigo-800 font-bold md:mt-8 mb-8 [text-shadow:_-1.0px_1.0px_2.0px_white,1.0px_1.0px_2.0px_white,1.0px_-1.0px_0_white,-1.0px_-1.0px_0_white]`}
        >
          {t("general.title")}
        </h3>
        {generalSkills.map(
          ({ key, mainPosition, pillPosition, linePosition, colour }) => (
            <div
              key={key}
              className={`mb-2 text-center md:absolute ${mainPosition}`}
            >
              <div
                className={`${colour} rounded-full px-4 py-2 border border-white ${pillPosition}`}
              >
                <p className="text-white text-base md:text-xl">
                  {t(`general.${key}`)}
                </p>
              </div>
              <div className="flex justify-center">
                <div
                  className={`hidden md:block bg-white w-[2px] h-[100px] ${linePosition}`}
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className="border-b border-white mb-8 mx-28" />
      <div className="relative w-full md:h-[600px] mb-8 md:mb-36">
        <Image
          src="/icons/brain.svg"
          alt="An illustration icon of a brain's side profile"
          width={300}
          height={300}
          className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h3
          className={`${lobster.className} text-center text-2xl md:text-4xl text-purple-800 font-bold md:mt-8 mb-8 [text-shadow:_-1.0px_1.0px_2.0px_white,1.0px_1.0px_2.0px_white,1.0px_-1.0px_0_white,-1.0px_-1.0px_0_white]`}
        >
          {t("creative.title")}
        </h3>
        {creativeSkills.map(
          ({ key, mainPosition, pillPosition, linePosition, colour }) => (
            <div
              key={key}
              className={`mb-2 text-center md:absolute ${mainPosition}`}
            >
              <div
                className={`${colour} rounded-full px-4 py-2 border border-white ${pillPosition}`}
              >
                <p className="text-white text-base md:text-xl">
                  {t(`creative.${key}`)}
                </p>
              </div>
              <div className="flex justify-center">
                <div
                  className={`hidden md:block bg-white w-[2px] h-[100px] ${linePosition}`}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
