import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Necesito reservar cita?',
    a: 'Recomendamos reservar para garantizar disponibilidad, aunque también atendemos walk-ins según agenda del día.',
  },
  {
    q: '¿Qué métodos de pago aceptan?',
    a: 'Aceptamos efectivo, tarjetas de crédito/débito y transferencias.',
  },
  {
    q: '¿Tienen estacionamiento?',
    a: 'Sí, contamos con estacionamiento para clientes frente al local.',
  },
  {
    q: '¿Puedo cancelar o reagendar mi cita?',
    a: 'Sí. Te pedimos avisar con al menos 24 horas de anticipación para reasignar el espacio.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#E8DBC3]">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <span className="badge-pill">FAQ</span>
          <h2 className="section-title mt-4">Preguntas frecuentes</h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="rounded-2xl border border-neutral-100 bg-cream-50 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-elegant text-lg font-semibold text-neutral-900"
              >
                {f.q}
                <ChevronDown
                  className={`w-5 h-5 transition ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 font-elegant text-neutral-700 text-base leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
