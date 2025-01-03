import "@/app/ui/global.css"
import { inter } from "@/app/ui/fonts"
import Navigation from "@/app/ui/components/navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overscroll-none`}>
        <main className="flex min-h-screen flex-col">
          <Navigation />
          <div className="p-6 md:px-28 bg-gray-900">{children}</div>
        </main>
      </body>
    </html>
  )
}
