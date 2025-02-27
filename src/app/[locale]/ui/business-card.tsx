/* Copyright (c) 2025 - Win San Pang - https://fontawesome.com/icons/phone-alt / https://fontawesome.com/icons/envelope / https://fontawesome.com/icons/linkedin / https://fontawesome.com/icons/github / https://fontawesome.com/icons/twitter
Original Phone, Envelope, LinkedIn GitHub, and Twitter FontAwesomeIcons made by Font Awesome, available for free on their website, MIT licensed with attribution.
Font Awesome free licence: https://fontawesome.com/license/free

The brand icons are a trademark of the respective owners. The use of this trademark does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"

import { lobster } from "@/src/app/[locale]/ui/fonts"

export default function BusinessCard() {
  const t = useTranslations("contact")

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
            alt="A photograph of Win San Pang"
          />
          <h3
            className={`${lobster.className} text-3xl text-white md:text-6xl md:leading-normal my-4`}
          >
            {t("name")}
          </h3>
          <p className="text-white my-2 text-xl">{t("role_title")}</p>
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
                    alt={t(`${icon}.icon_alt`)}
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
