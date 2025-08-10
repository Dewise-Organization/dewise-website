"use client"
import { useState, useEffect } from 'react'

type Lang = 'en' | 'fr'

export function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>('en')
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('lang') as Lang | null) : null
    if (stored) setLang(stored)
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <div className="flex items-center gap-2">
      <button
        className={`rounded px-2 py-1 text-sm ${lang === 'en' ? 'bg-sky-600 text-white' : 'bg-gray-100'}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        className={`rounded px-2 py-1 text-sm ${lang === 'fr' ? 'bg-sky-600 text-white' : 'bg-gray-100'}`}
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
    </div>
  )
}


