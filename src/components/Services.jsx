import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

const services = [
  { title: 'Transparencias', file: 'Transparencias.jpg', book: 'Transparencias' },
  { title: 'Corte', file: 'Cortemujer.png', book: 'Cortes' },
  { title: 'Corte', file: 'Cortehombre.png', book: 'Cortes' },
  { title: 'Depilación', file: 'Depilacion.jpg', book: 'Depilaciones' },
  { title: 'Maquillaje', file: 'Maquillaje.jpg', book: 'Maquillaje' },
  { title: 'Peinados', file: 'Peinados.jpg', book: 'Peinados' },
  { title: 'Tintes', file: 'Tintes.jpg', book: 'Tintes' },
  { title: 'Tratamiento Chocolate', file: 'Tratamiento chocolate.png', book: 'Tratamiento de Chocolate' },
  { title: 'Secados', file: 'Secados.png', book: 'Secados' },
  { title: 'Planchados', file: 'planchados.png', book: 'Planchados' },
  { title: 'Manicure', file: 'manicure.png', book: 'Manicure' },
  { title: 'Luces', file: 'luces.png', book: 'Luces' },
  { title: 'Extensión de pestañas', file: 'extensión de pestañas .jpg', book: 'Extensión de pestañas' },
]

function ServiceCard({ s }) {
  const handleClick = (e) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('select-service', { detail: s.book }))
    const target = document.getElementById('reservaciones-anchor')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.hash = '#reservaciones'
    }
  }

  return (
    <a
      href="#reservaciones"
      onClick={handleClick}
      className="group relative block overflow-hidden bg-neutral-100 aspect-[3/4] shadow-card border border-transparent transition-all duration-500 ease-out will-change-transform hover:-translate-y-1 hover:shadow-soft hover:border-brand-300"
    >
      <img
        src={`${BASE}services/${encodeURIComponent(s.file.normalize('NFD'))}`}
        alt={s.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:brightness-[0.78]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/85 via-neutral-900/20 to-transparent transition duration-500 group-hover:from-neutral-900/90" />

      <div className="absolute inset-x-0 bottom-0 p-6 transition duration-500 group-hover:-translate-y-1">
        <h3 className="font-elegant text-2xl md:text-3xl font-bold text-white drop-shadow">
          {s.title}
        </h3>
      </div>

      <div className="absolute top-4 right-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 text-white px-4 py-2 text-sm font-semibold shadow-soft">
          Reservar <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  )
}

function Arrow({ side, onClick }) {
  const isLeft = side === 'left'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? 'Anterior' : 'Siguiente'}
      className={[
        'hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-soft items-center justify-center text-neutral-800 hover:bg-brand-50 hover:text-brand-700 transition',
        isLeft ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2',
      ].join(' ')}
    >
      {isLeft ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
    </button>
  )
}

export default function Services() {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild
    if (!card) return
    el.scrollBy({ left: dir * card.offsetWidth, behavior: 'smooth' })
  }

  const scrollByPage = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      const el = trackRef.current
      if (!el) return
      const max = el.scrollWidth - el.clientWidth
      if (el.scrollLeft >= max - 8) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, 3000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#E8DBC3]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="badge-pill">Nuestros Servicios</span>
          <h2 className="section-title mt-4">Todo para tu belleza</h2>
          <p className="section-subtitle mt-4">
            Ofrecemos una amplia gama de servicios profesionales para que luzcas
            espectacular
          </p>
        </div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Arrow side="left" onClick={() => scrollByCard(-1)} />
          <Arrow side="right" onClick={() => scrollByCard(1)} />

          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-2.5"
          >
            {services.map((s, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2.5"
              >
                <ServiceCard s={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
