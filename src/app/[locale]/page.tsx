import { useTranslations } from "next-intl"
import Link from "next/link"

import { ArrowRightIcon } from "@heroicons/react/24/outline"

import "@/app/[locale]/ui/global.css"
import { lobster } from "@/app/[locale]/ui/fonts"
import Hero from "@/app/[locale]/ui/components/hero"
import Carousel from "@/app/[locale]/ui/components/carousel"
import CarbonBadge from "@/app/[locale]/ui/components/carbon-badge"
import ColourProfile from "@/app/[locale]/ui/components/colour-profile/colour-profile"
import MyersBriggsProfile from "@/app/[locale]/ui/components/myers-briggs-profile/myers-briggs-profile"
import StrengthsWeaknesses from "@/app/[locale]/ui/components/strengths-weaknesses/strengths-weaknesses"

export default function Page() {
  const t = useTranslations("home")

  return (
    <>
      <Hero
        title={t("title")}
        subtitle={t.rich("subtitle", {
          cv: (chunks) => (
            <Link
              href="/win-san-pang-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 underline"
            >
              {chunks}
            </Link>
          ),
        })}
      />
      <div className="md:px-28 md:pb-12 text-white text-center">
        <h2
          className={`${lobster.className} text-lg md:text-4xl md:leading-normal md:mb-8`}
        >
          <strong>{t("carousel_section.title")}</strong>
        </h2>
        <p className="md:mb-8">
          {t("carousel_section.subtitle")}{" "}
          <ArrowRightIcon className="h-5 w-5 inline-block text-sky-500" />
        </p>
        <Carousel />
        <div className="border-b border-white my-8 mx-28" />
        <h2
          className={`${lobster.className} text-lg md:text-4xl md:leading-normal md:mb-8`}
        >
          <strong>{t("working_style_section.title")}</strong>
        </h2>
        <p className="md:mb-8">{t("working_style_section.subtitle")}</p>
        <ColourProfile />
        <MyersBriggsProfile />
        <StrengthsWeaknesses />
      </div>
      <CarbonBadge />
    </>
  )
}
