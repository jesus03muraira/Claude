import { useState } from 'react'
import { Menu, X, Scissors } from 'lucide-react'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Scissors className="w-6 h-6 text-neutral-900" strokeWidth={2.25} />
          <span className="font-extrabold tracking-wider text-neutral-900 text-lg">
            VICTOR'S
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-neutral-500 border-l border-neutral-300 pl-2 ml-1">
            Salón &amp; Peluquería
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-neutral-700 font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-neutral-900 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#reservaciones" className="hidden md:inline-flex btn-primary">
          Agenda tu cita
        </a>

        <button
          className="md:hidden p-2 text-neutral-900"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-white shadow-soft border border-neutral-100 p-4">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 rounded-xl hover:bg-cream-100 text-neutral-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservaciones"
                onClick={() => setOpen(false)}
                className="btn-primary w-full mt-2"
              >
                Agenda tu cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
