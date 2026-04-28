import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/528183358704?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Victor's%20Salón"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 inline-flex items-center justify-center"
    >
      {/* Soft pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      {/* Button */}
      <span className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-soft transition-transform duration-200 group-hover:scale-110">
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
      </span>
    </a>
  )
}
