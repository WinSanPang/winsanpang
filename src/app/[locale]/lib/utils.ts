type LocaleCharCounts = {
  [locale: string]: number
}

type Props = {
  locale: string
  charCounts: LocaleCharCounts
}

export default function localeToCharCount({
  locale,
  charCounts,
}: Props): number {
  return charCounts[locale] ?? charCounts["en"]
}
