"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Navbar } from "flowbite-react"

export default function Navigation() {
  const pathname = usePathname()
  const t = useTranslations("navigation")

  const navigation = [
    { name: "home", href: "/" },
    { name: "skills", href: "/skills" },
    { name: "work", href: "/work" },
    { name: "education", href: "/education" },
    { name: "portfolio", href: "/portfolio" },
    { name: "contact", href: "/contact" },
  ]

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
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navigation.map(({ name, href }) => (
          <Navbar.Link
            key={name}
            href={href}
            className={`text-white ${
              pathname === href ? "border-white border-1" : "" // Not sure why styling isn't working here
            }`}
          >
            {t(`${name}`)}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
