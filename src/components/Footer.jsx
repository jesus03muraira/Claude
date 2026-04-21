import { Scissors } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Scissors className="w-6 h-6 text-white" strokeWidth={2.25} />
            <span className="font-extrabold tracking-wider text-white text-lg">VICTOR'S</span>
          </div>
          <p className="mt-4 text-sm text-neutral-400 max-w-xs">
            Salón premium en San Pedro Garza García. Tu belleza merece lo mejor.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Navegación</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="#reservaciones" className="hover:text-white">Reservaciones</a></li>
            <li><a href="#testimonios" className="hover:text-white">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Síguenos</p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Victor's Salón & Peluquería. Todos los derechos reservados.</p>
          <p>San Pedro Garza García, N.L.</p>
        </div>
      </div>
    </footer>
  )
}
