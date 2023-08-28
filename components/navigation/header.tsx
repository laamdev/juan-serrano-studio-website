"use client"

import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export const Header = () => {
  const pathname = usePathname()
  return (
    <header className="fixed bottom-0.5 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700 px-3 py-1.5 text-stone-300 md:bottom-2.5">
      <ul className="flex gap-x-5 rounded font-medium">
        <li>
          <a
            href="/"
            className={cn(
              pathname === "/"
                ? "italic text-stone-100"
                : "tw-animation hover:text-stone-200"
            )}
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="/bio"
            className={cn(
              pathname.includes("bio")
                ? "italic text-stone-100"
                : "tw-animation hover:text-stone-200"
            )}
          >
            Bio
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={cn(
              pathname.includes("contact")
                ? "italic text-stone-100"
                : "tw-animation hover:text-stone-300"
            )}
          >
            Contacto
          </a>
        </li>
      </ul>
    </header>
  )
}
