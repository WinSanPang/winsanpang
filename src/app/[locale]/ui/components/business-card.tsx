import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"

import { lobster } from "@/src/app/[locale]/ui/fonts"

export default function BusinessCard() {
  const contactT = useTranslations("contact")
  const sharedT = useTranslations("shared")

  const contactDetails = [
    {
      icon: "phone",
      text: "07704371027",
      link: "tel:+447704371027",
    },
    {
      icon: "email",
      text: "winsanpang@hotmail.co.uk",
      link: "mailto:winsanpang@hotmail.co.uk",
    },
    {
      icon: "linkedin",
      text: "https://www.linkedin.com/in/winsanpang/",
      link: "https://www.linkedin.com/in/winsanpang/",
    },
    {
      icon: "github",
      text: "https://github.com/WinSanPang",
      link: "https://github.com/WinSanPang",
    },
    {
      icon: "instagram",
      text: "https://www.instagram.com/winsanpang",
      link: "https://www.instagram.com/winsanpang",
    },
  ]

  return (
    <div className="h-[550px] flex bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] p-2 border border-white outline">
      <div className="flex flex-wrap w-full bg-[rgba(255,255,255,0.2)] p-4 md:grid md:grid-cols-[10fr,1fr,10fr] md: md:gap-4">
        <div className="w-full text-center mb-4 md:self-center md-justify-right">
          <Image
            src="/profile.jpeg"
            width={150}
            height={150}
            className="rounded-full m-auto"
            alt={contactT("photo_alt")}
          />
          <h3
            className={`${lobster.className} text-3xl text-white md:text-6xl md:leading-normal my-4`}
          >
            {sharedT("name")}
          </h3>
          <p className="text-white my-2 text-xl md:text-2xl font-bold">
            {contactT("role_title")}
          </p>
        </div>
        <div className="bg-white w-[2px] h-full m-auto hidden md:block" />
        <div className="w-full text-center md:self-center">
          <ul className="">
            {contactDetails.map(({ icon, link, text }) => (
              <li key={icon}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex justify-center md:justify-normal py-2"
                >
                  <Image
                    src={`/icons/${icon}.svg`}
                    alt={contactT(`${icon}.icon_alt`)}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
