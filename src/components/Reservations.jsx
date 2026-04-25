import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const SERVICES = [
  { label: 'Cortes', price: 150 },
  { label: 'Depilaciones', price: 200 },
  { label: 'Peinados', price: 250 },
  { label: 'Secados', price: 100 },
  { label: 'Planchados', price: 180 },
  { label: 'Manicure', price: 200 },
  { label: 'Tratamiento de Chocolate', price: 450 },
  { label: 'Tintes', price: 500 },
  { label: 'Luces', price: 600 },
  { label: 'Transparencias', price: 550 },
  { label: 'Maquillaje', price: 350 },
  { label: 'Extensión de pestañas', price: 500 },
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
  const jsDow = firstOfMonth.getDay()
  const offset = (jsDow + 6) % 7
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

function Dropdown({ value, onChange, placeholder, options, renderOption, disabled }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onEsc = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onEsc)
    }
  }, [open])

  const selectedLabel = value ? renderOption(value, true) : null

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={[
          'w-full flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-left transition',
          disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-neutral-300',
          value ? 'text-neutral-900' : 'text-neutral-400',
        ].join(' ')}
      >
        <span className="truncate">{selectedLabel ?? placeholder}</span>
        <ChevronDown
          className={`w-4 h-4 text-neutral-500 shrink-0 transition ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 left-0 right-0 max-h-72 overflow-auto rounded-xl border border-neutral-100 bg-white shadow-soft py-1"
        >
          {options.map((opt, i) => {
            const isSelected = value && (opt.key ?? opt.label ?? opt) === (value.key ?? value.label ?? value)
            return (
              <li key={opt.key ?? opt.label ?? opt ?? i}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt)
                    setOpen(false)
                  }}
                  className={[
                    'w-full text-left px-4 py-2.5 text-sm transition flex items-center justify-between gap-3',
                    isSelected
                      ? 'bg-cream-100 text-brand-700 font-medium'
                      : 'text-neutral-800 hover:bg-brand-50 hover:text-brand-700',
                  ].join(' ')}
                >
                  <span className="truncate">{renderOption(opt, false)}</span>
                  {isSelected && <Check className="w-4 h-4 text-brand-600 shrink-0" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

const fmtService = (s) => `${s.label} - $${s.price} MXN`

export default function Reservations() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const [cursor, setCursor] = useState({ y: today.getFullYear(), m: today.getMonth() })
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ service: null, time: null, name: '', email: '', phone: '' })
  const [sent, setSent] = useState(false)

  const grid = useMemo(() => buildMonthGrid(cursor.y, cursor.m), [cursor])

  useEffect(() => {
    const handler = (e) => {
      const label = e.detail
      const match = SERVICES.find((s) => s.label === label)
      if (match) setForm((f) => ({ ...f, service: match }))
    }
    window.addEventListener('select-service', handler)
    return () => window.removeEventListener('select-service', handler)
  }, [])

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
  const isSunday = (d) => d.getDay() === 0

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
          <h2 id="reservaciones-anchor" className="section-title mt-4 scroll-mt-4">
            Agenda tu cita
          </h2>
          <p className="section-subtitle mt-4">
            Selecciona el servicio, fecha y horario que prefieras
          </p>
        </div>

        <div
          id="reservaciones-form"
          className="mt-12 bg-white rounded-3xl shadow-soft border border-neutral-100 p-6 md:p-10 grid md:grid-cols-2 gap-10 scroll-mt-24"
        >
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
                  const disabled = !cell.inMonth || isPast(cell.date) || isSunday(cell.date)
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
              <Dropdown
                value={form.service}
                onChange={(s) => setForm({ ...form, service: s })}
                placeholder="Selecciona un servicio"
                options={SERVICES}
                renderOption={(s) => fmtService(s)}
              />
            </div>

            <div>
              <label className="font-semibold text-neutral-900 block mb-2">Horario</label>
              <Dropdown
                value={form.time}
                onChange={(t) => setForm({ ...form, time: t })}
                placeholder={selected ? 'Selecciona un horario' : 'Primero selecciona una fecha'}
                options={TIMES}
                renderOption={(t) => t}
                disabled={!selected}
              />
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
