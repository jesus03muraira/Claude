import { Sparkles, ChevronRight, Star } from 'lucide-react'

// Switch this to revert: 'fachada.jpg' (calle original) | '9e2cc2b2-8368-4042-87f6-d6ae5a7a3288.jpg' (nueva al atardecer)
const HERO_IMAGE = '9e2cc2b2-8368-4042-87f6-d6ae5a7a3288.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Fachada full-bleed, sharp, with side gradient behind text */}
      <div className="absolute inset-0 -z-10">
        <img
          src={`${import.meta.env.BASE_URL}${HERO_IMAGE}`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
        {/* Cream halo on the left half; fully transparent at the midline so the right half stays in its original color. */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/85 from-0% via-cream-50/45 via-22% to-transparent to-50%" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <div className="max-w-3xl">
          <span className="badge-pill">
            <Sparkles className="w-4 h-4" />
            Salón Premium en San Pedro Garza García
          </span>

          <h1 className="mt-6 font-elegant text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-neutral-900 [text-shadow:0_2px_16px_rgba(255,255,255,0.55)]">
            Tu belleza merece lo{' '}
            <span className="font-elegant text-brand-500 italic font-bold [text-shadow:0_2px_16px_rgba(255,255,255,0.4)]">mejor</span>
          </h1>

          <p className="mt-6 font-elegant text-xl md:text-2xl text-black max-w-xl leading-relaxed font-medium [text-shadow:0_1px_8px_rgba(255,255,255,0.55)]">
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

        <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl [&_dt]:[text-shadow:0_1px_8px_rgba(255,255,255,0.55)] [&_dd]:[text-shadow:0_1px_6px_rgba(255,255,255,0.55)]">
          <div>
            <dt className="font-elegant text-3xl md:text-4xl font-bold text-neutral-900">
              10+
            </dt>
            <dd className="font-elegant text-base text-black font-medium mt-1">Años de experiencia</dd>
          </div>
          <div>
            <dt className="font-elegant text-3xl md:text-4xl font-bold text-neutral-900">
              5000+
            </dt>
            <dd className="font-elegant text-base text-black font-medium mt-1">Clientes felices</dd>
          </div>
          <div>
            <dt className="font-elegant text-3xl md:text-4xl font-bold text-neutral-900 flex items-center gap-1">
              4.9
              <Star className="w-6 h-6 text-brand-400 fill-brand-400" />
            </dt>
            <dd className="font-elegant text-base text-black font-medium mt-1">Estrellas</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
