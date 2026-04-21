import { Scissors, Brush, Wind, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Cortes & Peinados',
    desc: 'Cortes modernos y clásicos para realzar tu estilo personal.',
    img: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=800&q=80',
    icon: Scissors,
  },
  {
    title: 'Maquillaje',
    desc: 'Maquillaje profesional para eventos, bodas y ocasiones especiales.',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    icon: Brush,
  },
  {
    title: 'Tratamientos',
    desc: 'Secado, keratina y tratamientos que devuelven la vida a tu cabello.',
    img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    icon: Wind,
  },
  {
    title: 'Tintes & Luces',
    desc: 'Coloración experta, balayage, transparencias y luces.',
    img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    icon: Sparkles,
  },
]

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

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl overflow-hidden bg-neutral-100 aspect-[3/4] shadow-card"
            >
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur mb-3">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="text-sm text-white/85 mt-1">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
