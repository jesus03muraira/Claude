import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rodrigo Rubio',
    meta: '9 opiniones · 3 fotos · Hace un año',
    stars: 5,
    quote: 'Buen lugar y siempre hay buena plática con Victor y Homero',
  },
  {
    name: 'Fernando Méndez',
    meta: 'Local Guide · 234 opiniones · 8249 fotos · Hace 3 años',
    stars: 5,
    quote: 'Great hair cut and great conversations.',
  },
  {
    name: 'Miguel A. Gonzalez 81',
    meta: '1 opinión · Hace 5 años',
    stars: 5,
    quote: 'Excelente Servicio',
  },
  {
    name: 'Karla Nohemi Almaguer Hernandez',
    meta: 'Local Guide · 273 opiniones · 33 fotos · Hace 6 años',
    stars: 4,
    quote: 'Muy bien todo',
  },
  {
    name: 'Alejandro',
    meta: 'Local Guide · 21 opiniones · Hace 8 años',
    stars: 5,
    quote: '¡Hacen muuuy buenos cortes, mis felicitaciones!',
  },
  {
    name: 'Leticia Molina',
    meta: '6 opiniones · Hace 4 años',
    stars: 5,
    quote: 'Desde hace 20 años es mi favorito',
  },
  {
    name: 'Martin Navarrete Villegas',
    meta: 'Local Guide · 33 opiniones · 58 fotos · Hace 9 años',
    stars: 4,
    quote: 'Buen servicio.',
  },
  {
    name: 'Recursos Humanos',
    meta: '13 opiniones · Hace 6 años',
    stars: 5,
    quote: 'Verdaderos profesionales a un precio justo',
  },
  {
    name: 'Adrian Santillana Sanchez',
    meta: '7 opiniones · Hace 6 años',
    stars: 5,
    quote: 'Atención, servicio, limpieza y calidad',
  },
  {
    name: 'Ricardo Menchaca',
    meta: 'Local Guide · 149 opiniones · 89 fotos · Hace 3 años',
    stars: 4,
    quote: 'Great service!',
  },
  {
    name: 'Antoine Calderon',
    meta: '1 opinión · Hace 9 años',
    stars: 5,
    quote: 'BIEN',
  },
  {
    name: 'sofia vantolra',
    meta: '2 opiniones · 1 foto · Hace 3 años',
    stars: 5,
    quote: null,
  },
  {
    name: 'EVELYN Salas',
    meta: 'Hace 3 años',
    stars: 5,
    quote: null,
  },
  {
    name: 'Diana Barrera',
    meta: '8 opiniones · Editado hace 3 años',
    stars: 5,
    quote: null,
  },
  {
    name: 'Victoria Giselle Córdoba Salas',
    meta: 'Nueva · Hace 2 semanas',
    stars: 5,
    quote: null,
  },
  {
    name: 'isabela Córdoba',
    meta: '1 foto · Hace 2 años',
    stars: 5,
    quote: null,
  },
  {
    name: 'Hildemar Zamora',
    meta: 'Local Guide · 10 opiniones · 4 fotos · Hace 2 años',
    stars: 5,
    quote: null,
  },
  {
    name: 'Santiago Frech',
    meta: '3 opiniones · Hace 2 años',
    stars: 5,
    quote: null,
  },
]

const getInitials = (name) => {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase()
}

function Card({ t }) {
  return (
    <article className="shrink-0 w-[320px] sm:w-[360px] rounded-3xl border border-neutral-100 bg-white p-6 shadow-card">
      <div className="flex gap-1 mb-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < t.stars ? 'text-brand-400 fill-brand-400' : 'text-neutral-200 fill-neutral-200'
            }`}
          />
        ))}
      </div>
      {t.quote ? (
        <p className="text-neutral-700 leading-relaxed min-h-[4.5rem]">"{t.quote}"</p>
      ) : (
        <p className="text-neutral-400 italic leading-relaxed min-h-[4.5rem]">
          Sin comentario
        </p>
      )}
      <div className="mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cream-100 text-brand-700 font-bold flex items-center justify-center">
          {getInitials(t.name)}
        </div>
        <div>
          <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
          <p className="text-xs text-neutral-500">{t.meta}</p>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  // Duplicate list so the CSS marquee loop is seamless (animation moves -50%)
  const loop = [...testimonials, ...testimonials]

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="badge-pill">Testimonios</span>
          <h2 className="mt-4 font-elegant text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Lo que dicen nuestros clientes
          </h2>
        </div>
      </div>

      <div className="marquee-wrapper mt-12 overflow-hidden relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream-50 to-transparent z-10" />

        <div className="marquee-track flex gap-5 pl-6 pr-6">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
