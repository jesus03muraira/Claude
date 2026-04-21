import { useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Luis López',
    meta: 'Hace un año',
    initials: 'LL',
    quote: 'Excelente servicio y profesionalismo, siempre muy atento el personal.',
  },
  {
    name: 'Cesar González',
    meta: 'Local Guide · Hace 8 meses',
    initials: 'CG',
    quote: 'Excelente atención de Victor, nunca falla con sus cortes.',
  },
  {
    name: 'Evelyn Córdoba',
    meta: 'Hace un año',
    initials: 'EC',
    quote: 'Excelente lugar, muy buen servicio y personas amables :)',
  },
  {
    name: 'Hildemar Zamora',
    meta: 'Local Guide · Hace 2 años',
    initials: 'HZ',
    quote: 'Excelente servicio, el personal muy amable y precios accesibles.',
  },
  {
    name: 'Ana Rodríguez',
    meta: 'Hace 6 meses',
    initials: 'AR',
    quote: 'Me encantó el resultado del tinte, súper recomendado. Volveré pronto.',
  },
]

export default function Testimonials() {
  const ref = useRef(null)

  const scroll = (dir) => {
    if (!ref.current) return
    const w = ref.current.clientWidth
    ref.current.scrollBy({ left: dir * w * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="badge-pill">Testimonios</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[24%] rounded-3xl border border-neutral-100 bg-white p-6 shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 text-brand-400 fill-brand-400" />
                ))}
              </div>
              <p className="text-neutral-700 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream-100 text-brand-700 font-bold flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.meta}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
