import { useEffect, useRef, useState } from 'react'
import { Menu, X, Scissors } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 40) {
        setVisible(true)
      } else if (y > lastScroll.current + 4) {
        setVisible(false)
        setOpen(false)
      } else if (y < lastScroll.current - 4) {
        setVisible(true)
      }
      lastScroll.current = y
    }
    const onMouseMove = (e) => {
      if (e.clientY < 90) setVisible(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-transform duration-300 ease-out',
        visible ? 'translate-y-0' : '-translate-y-full',
      ].join(' ')}
    >
      <div className="backdrop-blur-md bg-white/60 border-b border-white/40 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src={`${BASE}logo.jpg`}
              alt="Victor's"
              className="h-10 w-auto object-contain"
            />
            <Scissors className="w-6 h-6 text-neutral-900" strokeWidth={2.25} />
            <span className="font-extrabold tracking-wider text-neutral-900 text-lg">
              VICTOR'S
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-neutral-500 border-l border-neutral-300 pl-2 ml-1">
              Salón &amp; Peluquería
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-neutral-800 font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative pb-1 hover:text-neutral-950 transition-colors"
                >
                  {l.label}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-brand-500 transition-all duration-300 ease-out group-hover:w-full" />
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
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-1 rounded-2xl bg-white/80 backdrop-blur border border-white/60 p-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 rounded-xl hover:bg-cream-100 text-neutral-800"
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
      </div>
    </header>
  )
}
