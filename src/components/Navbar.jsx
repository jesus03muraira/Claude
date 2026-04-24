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
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState(false)
  const hoverCapable = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover)')
    hoverCapable.current = mq.matches
    if (!mq.matches) setExpanded(true)
  }, [])

  const handleEnter = () => {
    if (hoverCapable.current) setExpanded(true)
  }
  const handleLeave = () => {
    if (hoverCapable.current && !open) setExpanded(false)
  }

  const fadeClass = (on) =>
    on ? 'opacity-100' : 'opacity-0 pointer-events-none'

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className={[
          'absolute inset-0 transition duration-300',
          expanded
            ? 'opacity-100 backdrop-blur-md bg-white/60 border-b border-white/40'
            : 'opacity-0',
        ].join(' ')}
      />

      <nav className="relative mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src={`${BASE}logo.jpg`}
            alt="Victor's"
            className="h-10 w-auto object-contain"
          />
          <div
            className={[
              'flex items-center gap-2 transition-opacity duration-300',
              expanded ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          >
            <Scissors className="w-6 h-6 text-neutral-900" strokeWidth={2.25} />
            <span className="font-extrabold tracking-wider text-neutral-900 text-lg">
              VICTOR'S
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-neutral-500 border-l border-neutral-300 pl-2 ml-1">
              Salón &amp; Peluquería
            </span>
          </div>
        </a>

        <ul
          className={[
            'hidden md:flex items-center gap-8 text-neutral-800 font-medium transition-opacity duration-300',
            fadeClass(expanded),
          ].join(' ')}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-neutral-950 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reservaciones"
          className={[
            'hidden md:inline-flex btn-primary transition-opacity duration-300',
            fadeClass(expanded),
          ].join(' ')}
        >
          Agenda tu cita
        </a>

        <button
          className={[
            'md:hidden p-2 text-neutral-900 transition-opacity duration-300',
            fadeClass(expanded),
          ].join(' ')}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && expanded && (
        <div className="md:hidden px-4 pb-4 relative">
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
    </header>
  )
}
