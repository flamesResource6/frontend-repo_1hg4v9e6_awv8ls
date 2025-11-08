import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-gray-900">sysadmin.dev</a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2 text-sm font-medium text-gray-700">
            <a href="#projects" className="py-2">Projects</a>
            <a href="#skills" className="py-2">Skills</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
