import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 transition-all w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 dark:bg-white
     flex items-center justify-center flex-col "
    >
      {currentTheme === 'dark' ? (
        <SunIcon className="text-yellow-500 w-7 h-7 cursor-pointer" />
      ) : (
        <MoonIcon className="text-white w-7 h-7 cursor-pointer" />
      )}
    </button>
  )
}

export default ThemeToggler
