"use client"
import { useTranslations } from "next-intl"

import Image from "next/image"

import { Carousel } from "flowbite-react"

export default function HomepageCarousel() {
  const t = useTranslations("home.carousel_section.slides")

  const carouselSlides = [
    {
      key: "software_engineer",
      img: "/profile.jpeg",
    },
    {
      key: "wife",
      img: "wife.jpg",
    },
    {
      key: "dog_mum",
      img: "dog-mum.jpg",
    },
    {
      key: "travel",
      img: "dog-mum.jpg",
    },
    {
      key: "geek",
      img: "dog-mum.jpg",
    },
  ]

  return (
    <div className="w-full h-[500px]">
      <Carousel slide={false}>
        {carouselSlides.map(({ key, img }) => (
          <div
            key={key}
            className="bg-sky-900 rounded-lg h-full flex items-center justify-center"
          >
            <Image
              src={`/homepage_carousel/${img}`}
              alt={t(`${key}.img_alt`)}
              width={800}
              height={800}
              className="w-auto h-full"
            />
            <div className="text-white p-16">
              <p className="text-4xl mb-8 font-bold">{t(`${key}.title`)}</p>
              <p className="mb-4">{t(`${key}.content_1`)}</p>
              <p className="mb-4">{t(`${key}.content_2`)}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
