"use client"
import { useTranslations, useLocale } from "next-intl"

import Image from "next/image"

import { Carousel } from "flowbite-react"

export default function HomepageCarousel() {
  const t = useTranslations("home.carousel_section.slides")
  const locale = useLocale()

  const carouselSlides = [
    {
      key: "software_engineer",
      img: "software-engineer.jpg",
      imgPosition: "object-[50%_35%]",
    },
    {
      key: "wife",
      img: "wife.jpg",
      imgPosition: "object-[50%_25%]",
    },
    {
      key: "dog_mum",
      img: "dog-mum.jpg",
      imgPosition: "object-[50%_15%]",
    },
    {
      key: "travel",
      img: "travel.jpg",
      imgPosition: "object-[50%_75%]",
    },
    {
      key: "geek",
      img: "geek.jpg",
      imgPosition: "object-[50%_50%]",
    },
  ]

  return (
    <div className="w-full h-[600px] md:h-[500px]">
      <Carousel slide={false}>
        {carouselSlides.map(({ key, img, imgPosition }) => (
          <div
            key={key}
            className="bg-sky-900 rounded-lg h-full md:flex items-center justify-center"
          >
            <Image
              src={`/homepage_carousel/${img}`}
              alt={t(`${key}.img_alt`)}
              width={800}
              height={800}
              className={`md:w-auto ${
                locale === "zh-HK" ? "h-[35%]" : "h-[25%]"
              } md:h-full object-cover ${imgPosition}`}
            />
            <div className="text-white p-2 md:p-16">
              <p className="text-lg md:text-4xl mb-2 md:mb-8 font-bold">
                {t(`${key}.title`)}
              </p>
              <p className="text-sm md:text-base mb-2 md:mb-4">
                {t(`${key}.content_1`)}
              </p>
              <p className="text-sm md:text-base mb-2 md:mb-4">
                {t(`${key}.content_2`)}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
