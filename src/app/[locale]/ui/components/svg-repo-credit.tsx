import { useTranslations } from "next-intl"
import Link from "next/link"

export default function SvgRepoCredit({
  mobileHidden = false,
}: {
  mobileHidden?: boolean
}) {
  const t = useTranslations("footer")

  return (
    <p
      className={`${
        mobileHidden ? "hidden md:block" : ""
      } text-center text-gray-500 mt-4 text-xs`}
    >
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
