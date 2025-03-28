import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

import { ReactNode } from "react"
import "@/app/[locale]/ui/global.css"
import { inter } from "@/app/[locale]/ui/fonts"
import Navigation from "@/app/[locale]/ui/components/navigation"

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  const messages = await getMessages()

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased overscroll-none`}>
        <NextIntlClientProvider messages={messages}>
          <main className="flex min-h-screen flex-col">
            <Navigation />
            <div className="p-6 md:px-28 bg-gray-900">{children}</div>
          </main>{" "}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
