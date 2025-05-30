import { useTranslations } from "next-intl"
import Link from "next/link"

export default function SvgRepoCredit() {
  const t = useTranslations("footer")

  return (
    <p className="text-center text-white text-xs order-2">
      {t.rich("svg_repo_credit", {
        svgrepo: (chunks) => (
          <Link
            href="https://www.svgrepo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {chunks}
          </Link>
        ),
      })}
    </p>
  )
}
