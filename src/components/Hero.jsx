import { Sparkles, ChevronRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-fade pt-28 pb-20 lg:pt-32 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="badge-pill">
            <Sparkles className="w-4 h-4" />
            Salón Premium en San Pedro Garza García
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-neutral-900">
            Tu belleza merece lo{' '}
            <span className="text-brand-500 italic font-black">mejor</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed">
            Descubre un espacio donde el estilo y la elegancia se encuentran.
            Expertos en cortes, tintes, maquillaje y tratamientos premium.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reservaciones" className="btn-primary">
              Agenda tu cita <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#servicios" className="btn-outline">
              Ver servicios
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <dt className="text-3xl md:text-4xl font-extrabold text-neutral-900">
                10+
              </dt>
              <dd className="text-sm text-neutral-500 mt-1">Años de experiencia</dd>
            </div>
            <div>
              <dt className="text-3xl md:text-4xl font-extrabold text-neutral-900">
                5000+
              </dt>
              <dd className="text-sm text-neutral-500 mt-1">Clientes felices</dd>
            </div>
            <div>
              <dt className="text-3xl md:text-4xl font-extrabold text-neutral-900 flex items-center gap-1">
                4.9
                <Star className="w-6 h-6 text-brand-400 fill-brand-400" />
              </dt>
              <dd className="text-sm text-neutral-500 mt-1">Estrellas</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft bg-cream-100">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
              alt="Victor's Salón fachada"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card px-5 py-4 flex items-center gap-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 text-brand-400 fill-brand-400" />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">4.9 Estrellas</p>
              <p className="text-xs text-neutral-500">Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
