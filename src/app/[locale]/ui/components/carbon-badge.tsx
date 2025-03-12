"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export default function CarbonBadge() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <div id="wcb" className="carbonbadge wcb-d" />
      <Script
        src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
        strategy="lazyOnload"
      />
    </>
  )
}
