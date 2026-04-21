import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SERVICES = [
  'Corte de cabello',
  'Tinte',
  'Luces / Balayage',
  'Maquillaje',
  'Peinado',
  'Tratamiento capilar',
]

const TIMES = [
  '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
]

const MONTHS_ES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]
const DOW = ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do']

function buildMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1)
  const jsDow = firstOfMonth.getDay() // 0 = Sun
  const offset = (jsDow + 6) % 7 // convert to Mon-start
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrev = new Date(year, month, 0).getDate()

  const cells = []
  for (let i = offset - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, inMonth: false, date: new Date(year, month - 1, daysInPrev - i) })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inMonth: true, date: new Date(year, month, d) })
  }
  while (cells.length % 7 !== 0) {
    const d = cells.length - (offset + daysInMonth) + 1
    cells.push({ day: d, inMonth: false, date: new Date(year, month + 1, d) })
  }
  return cells
}

export default function Reservations() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const [cursor, setCursor] = useState({ y: today.getFullYear(), m: today.getMonth() })
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ service: '', time: '', name: '', email: '', phone: '' })
  const [sent, setSent] = useState(false)

  const grid = useMemo(() => buildMonthGrid(cursor.y, cursor.m), [cursor])

  const prevMonth = () => {
    setCursor((c) => {
      const m = c.m - 1
      if (m < 0) return { y: c.y - 1, m: 11 }
      return { ...c, m }
    })
  }
  const nextMonth = () => {
    setCursor((c) => {
      const m = c.m + 1
      if (m > 11) return { y: c.y + 1, m: 0 }
      return { ...c, m }
    })
  }

  const isPast = (d) => d < today

  const submit = (e) => {
    e.preventDefault()
    if (!selected || !form.service || !form.time || !form.name || !form.email || !form.phone) return
    setSent(true)
  }

  return (
    <section id="reservaciones" className="py-20 lg:py-28 bg-cream-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <span className="badge-pill">Reservaciones</span>
          <h2 className="section-title mt-4">Agenda tu cita</h2>
          <p className="section-subtitle mt-4">
            Selecciona el servicio, fecha y horario que prefieras
          </p>
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-soft border border-neutral-100 p-6 md:p-10 grid md:grid-cols-2 gap-10">
          {/* Calendar */}
          <div>
            <p className="font-semibold text-neutral-900 mb-4">Selecciona una fecha</p>
            <div className="rounded-2xl border border-neutral-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50"
                  aria-label="Mes anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-semibold capitalize text-neutral-900">
                  {MONTHS_ES[cursor.m]} {cursor.y}
                </span>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50"
                  aria-label="Mes siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-xs text-neutral-500 mb-2">
                {DOW.map((d) => (
                  <span key={d} className="text-center py-1">{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {grid.map((cell, i) => {
                  const disabled = !cell.inMonth || isPast(cell.date)
                  const isSelected = selected && cell.date.toDateString() === selected.toDateString()
                  return (
                    <button
                      type="button"
                      key={i}
                      disabled={disabled}
                      onClick={() => setSelected(cell.date)}
                      className={[
                        'h-9 rounded-lg text-sm transition',
                        disabled ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-800 hover:bg-cream-100',
                        isSelected ? 'bg-brand-500 text-white hover:bg-brand-500' : '',
                      ].join(' ')}
                    >
                      {cell.day}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
              <label className="font-semibold text-neutral-900 block mb-2">Servicio</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-400"
              >
                <option value="">Selecciona un servicio</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold text-neutral-900 block mb-2">Horario</label>
              <select
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                disabled={!selected}
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-400 disabled:bg-neutral-50 disabled:text-neutral-400"
              >
                <option value="">
                  {selected ? 'Selecciona un horario' : 'Primero selecciona una fecha'}
                </option>
                {TIMES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <input
              type="email"
              placeholder="Tu email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <input
              type="tel"
              placeholder="Tu teléfono"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />

            <button type="submit" className="btn-primary mt-2 w-full">
              Confirmar cita
            </button>

            {sent && (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                ¡Gracias! Recibimos tu solicitud. Te contactaremos en breve para confirmar.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
