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
  { title: 'Secados', file: 'Secados.png' },
  { title: 'Planchados', file: 'planchados.png' },
  { title: 'Manicure', file: 'manicure.png' },
  { title: 'Luces', file: 'luces.png' },
  { title: 'Extensión de pestañas', file: 'extensión de pestañas .jpg' },
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

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {services.map((s, i) => (
            <article
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-neutral-100 aspect-square shadow-card"
            >
              <img
                src={`${BASE}services/${encodeURIComponent(s.file.normalize('NFD'))}`}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <h3 className="text-sm md:text-base font-bold text-white drop-shadow">
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
