import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

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

function ServiceCard({ s, idx }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('select-service', { detail: s.book }))
  }

  return (
    <a
      ref={ref}
      href="#reservaciones"
      onClick={handleClick}
      style={{ transitionDelay: `${(idx % 6) * 70}ms` }}
      className={[
        'group relative rounded-2xl overflow-hidden bg-neutral-100 aspect-square shadow-card border border-transparent',
        'transition-all duration-700 ease-out will-change-transform',
        'hover:-translate-y-1 hover:shadow-soft hover:border-brand-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
    >
      <img
        src={`${BASE}services/${encodeURIComponent(s.file.normalize('NFD'))}`}
        alt={s.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:brightness-[0.78]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent transition duration-500 group-hover:from-neutral-900/90" />

      <div className="absolute inset-x-0 bottom-0 p-3 transition duration-500 group-hover:-translate-y-1">
        <h3 className="text-sm md:text-base font-bold text-white drop-shadow">
          {s.title}
        </h3>
      </div>

      {/* Reservar button — appears on hover */}
      <div className="absolute top-3 right-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 text-white px-3 py-1.5 text-xs font-semibold shadow-soft">
          Reservar <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </a>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="badge-pill">Nuestros Servicios</span>
          <h2 className="section-title mt-4">Todo para tu belleza</h2>
          <p className="section-subtitle mt-4">
            Ofrecemos una amplia gama de servicios profesionales para que luzcas
            espectacular
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
