const BASE = import.meta.env.BASE_URL

const services = [
  { title: 'Transparencias', file: 'Transparencias.jpg' },
  { title: 'Corte', file: 'Cortemujer.png' },
  { title: 'Corte', file: 'Cortehombre.png' },
  { title: 'Depilación', file: 'Depilacion.jpg' },
  { title: 'Maquillaje', file: 'Maquillaje.jpg' },
  { title: 'Peinados', file: 'Peinados.jpg' },
  { title: 'Tintes', file: 'Tintes.jpg' },
  { title: 'Tratamiento Chocolate', file: 'Tratamiento chocolate.png' },
  { title: 'Secados', file: 'Secados.jpg' },
  { title: 'Planchados', file: 'Planchados.jpg' },
  { title: 'Manicure', file: 'Manicure.jpg' },
  { title: 'Luces', file: 'Luces.jpg' },
  { title: 'Extensión de pestañas', file: 'Pestanas.jpg' },
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

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={i}
              className="group relative rounded-3xl overflow-hidden bg-neutral-100 aspect-[3/4] shadow-card"
            >
              <img
                src={`${BASE}services/${encodeURIComponent(s.file)}`}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-bold text-white drop-shadow">
                  {s.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
