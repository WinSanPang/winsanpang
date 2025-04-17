import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { getTranslations } from "next-intl/server"

import { ReactNode } from "react"
import "@/app/[locale]/ui/global.css"
import { inter } from "@/app/[locale]/ui/fonts"
import Navigation from "@/app/[locale]/ui/components/navigation"

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  const messages = await getMessages()

  const t = await getTranslations({
    locale,
    namespace: "footer",
  })

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased overscroll-none`}>
        <NextIntlClientProvider messages={messages}>
          <main className="flex min-h-screen flex-col">
            <Navigation />
            <div className="p-6 md:px-28 bg-gray-900">{children}</div>
          </main>{" "}
          <footer className="bg-gray-900 text-white p-6 text-center">
            <div className="border-b border-white border-dashed my-8 mx-28" />
            <p>© {new Date().getFullYear()} Win San Pang</p>
            <p>{t("made_with_love")}</p>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
