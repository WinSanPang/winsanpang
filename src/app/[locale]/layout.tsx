import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { getTranslations } from "next-intl/server"

import { ReactNode } from "react"
import "@/app/[locale]/ui/global.css"
import { inter } from "@/app/[locale]/ui/fonts"
import Navigation from "@/app/[locale]/ui/components/navigation"
import Footer from "@/app/[locale]/ui/components/footer"

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  const messages = await getMessages()

  const t = await getTranslations({
    locale,
    namespace: "footer",
  })

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} antialiased overscroll-none`}>
        <NextIntlClientProvider messages={messages}>
          <main className="flex min-h-screen flex-col">
            <Navigation />
            <div className="p-6 md:px-28 bg-gray-900">{children}</div>
          </main>{" "}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
