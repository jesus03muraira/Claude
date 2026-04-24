import { MapPin, Phone, Clock } from 'lucide-react'

const info = [
  {
    icon: MapPin,
    title: 'Dirección',
    lines: ['Local 8, Río Missouri 500', 'Del Valle, 66220', 'San Pedro Garza García, N.L.'],
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: ['81 8335 8704', 'WhatsApp disponible'],
  },
  {
    icon: Clock,
    title: 'Horarios',
    lines: ['Lun - Vie: 10:30am - 7:00pm', 'Sábado: 10:30am - 7:00pm', 'Domingo: Cerrado'],
  },
]

export default function Visitanos() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="section-title">Visítanos</h2>
          <p className="section-subtitle mt-4">
            Estamos ubicados en San Pedro, listos para atenderte
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-card bg-neutral-100 aspect-[4/3]">
            <img
              src={`${import.meta.env.BASE_URL}${encodeURIComponent('Screen Shot 2026-04-15 at 23.04.10.png')}`}
              alt="Victor's Salón vista de calle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card bg-white aspect-[4/3]">
            <iframe
              title="Ubicación Victor's Salón"
              src="https://www.google.com/maps?q=Rio+Missouri+500,+Del+Valle,+San+Pedro+Garza+Garcia&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {info.map((i) => (
            <div
              key={i.title}
              className="rounded-3xl bg-white border border-neutral-100 shadow-card p-6 flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-cream-100 text-brand-600 flex items-center justify-center shrink-0">
                <i.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">{i.title}</p>
                {i.lines.map((l) => (
                  <p key={l} className="text-sm text-neutral-600 mt-0.5">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
