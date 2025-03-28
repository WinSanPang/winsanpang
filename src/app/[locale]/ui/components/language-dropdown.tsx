"use client"

import { useLocale } from "next-intl"
import { Dropdown } from "flowbite-react"
import { usePathname } from "@/i18n/routing"
import { useRouter } from "@/i18n/routing"

export default function LanguageDropdown() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const languages = [
    { code: "en", label: "English 🇬🇧" },
    { code: "zh-HK", label: "廣東話 🇭🇰" },
    { code: "hu", label: "Magyar 🇭🇺" },
  ]

  const currentLanguage =
    languages.find((lang) => lang.code === locale)?.label || "English"

  const handleLanguageChange = (selectedLocale: string) => {
    router.push(pathname, { locale: selectedLocale })
  }

  return (
    <Dropdown
      label={<span className="text-white">{currentLanguage}</span>}
      arrowIcon={true}
    >
      {languages.map((language) => (
        <Dropdown.Item
          key={language.code}
          onClick={() => handleLanguageChange(language.code)}
          className={
            locale === language.code
              ? "bg-cyan-900 text-white focus:bg-cyan-950"
              : ""
          }
        >
          {language.label}
        </Dropdown.Item>
      ))}
    </Dropdown>
  )
}
