import { Sparkles, ChevronRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Fachada full-bleed, sharp, with side gradient behind text */}
      <div className="absolute inset-0 -z-10">
        <img
          src={`${import.meta.env.BASE_URL}fachada.jpg`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top brightness-75"
        />
        {/* Left-to-right fade: opaque cream on the left behind the text, fully transparent on the right — slightly less opaque so the photo keeps its richer tones */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/80 to-transparent lg:via-cream-50/70 lg:to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="max-w-3xl">
          <span className="badge-pill">
            <Sparkles className="w-4 h-4" />
            Salón Premium en San Pedro Garza García
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-neutral-900">
            Tu belleza merece lo{' '}
            <span className="text-brand-500 italic font-black">mejor</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-700 max-w-xl leading-relaxed">
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
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
          <div>
            <dt className="text-3xl md:text-4xl font-extrabold text-neutral-900">
              10+
            </dt>
            <dd className="text-sm text-neutral-600 mt-1">Años de experiencia</dd>
          </div>
          <div>
            <dt className="text-3xl md:text-4xl font-extrabold text-neutral-900">
              5000+
            </dt>
            <dd className="text-sm text-neutral-600 mt-1">Clientes felices</dd>
          </div>
          <div>
            <dt className="text-3xl md:text-4xl font-extrabold text-neutral-900 flex items-center gap-1">
              4.9
              <Star className="w-6 h-6 text-brand-400 fill-brand-400" />
            </dt>
            <dd className="text-sm text-neutral-600 mt-1">Estrellas</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
