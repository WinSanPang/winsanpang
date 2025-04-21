import { useTranslations } from "next-intl"

import "@/app/[locale]/ui/global.css"
import SvgRepoCredit from "@/app/[locale]/ui/components/svg-repo-credit"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-gray-900 text-white p-6 text-center md:px-28">
      <div className="border-b border-white border-dashed my-4" />
      <div className="flex justify-center md:justify-between items-center flex-wrap">
        <p className="order-1 text-xs">{t("made_with_love")}</p>
        <p className="order-0 md:order-1">
          © {new Date().getFullYear()} Win San Pang
        </p>
        <SvgRepoCredit />
      </div>
    </footer>
  )
}
