"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { usePathname } from "next/navigation"

import LanguageDropdown from "@/app/[locale]/ui/components/language-dropdown"
import { Navbar } from "flowbite-react"

import { Routes } from "@/app/[locale]/lib/definitions"

export default function Navigation() {
  const pathname = usePathname()
  const t = useTranslations("navigation")

  const navigation = [
    { name: "home", href: Routes.Home },
    { name: "skills", href: Routes.Skills },
    { name: "work", href: Routes.Work },
    { name: "education", href: Routes.Education },
    { name: "portfolio", href: Routes.Portfolio },
    { name: "contact", href: Routes.Contact },
  ]

  const sanitisedPathname = pathname
    .replace(/^\/([a-z]{2}(-[A-Z]{2})?)$/, "/")
    .replace(/^\/([a-z]{2}(-[A-Z]{2})?)\//, "/")

  return (
    <Navbar fluid className="bg-cyan-950">
      <Navbar.Brand href="/">
        <Image
          src="/profile.jpeg"
          width={100}
          height={100}
          className="size-10 rounded-full"
          alt={t("photo_alt")}
        />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <LanguageDropdown />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navigation.map(({ name, href }) => (
          <Navbar.Link
            key={name}
            href={href}
            className={`text-white ${
              sanitisedPathname === href ? "!border-b border-white" : ""
            }`}
          >
            {t(`${name}`)}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
