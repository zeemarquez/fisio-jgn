
import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoUrl = "/assets/logo-jgn.png";
  const appointmentUrl = "https://app.reasoningphysios.com:443//CitaOnline/citaDashboard.aspx?clinica=907&codigoImgLog=7E45FECDBB0807E9DCFCA526DFB3E6EC02C59605";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura aproximada del navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="JGN Logo" className="h-12 w-auto object-contain" />
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-700 uppercase leading-none">
              CLINICA FISIOTERAPIA <span className="text-sage-500 block sm:inline">JGN</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')} className="text-slate-600 hover:text-sage-600 font-medium transition-colors">Inicio</a>
            <a href="#por-que-elegirnos" onClick={(e) => handleScroll(e, 'por-que-elegirnos')} className="text-slate-600 hover:text-sage-600 font-medium transition-colors">Quiénes Somos</a>
            <a href="#especialidades" onClick={(e) => handleScroll(e, 'especialidades')} className="text-slate-600 hover:text-sage-600 font-medium transition-colors">Especialidades</a>
            <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sage-600 font-medium transition-colors flex items-center gap-1">
               Cita Online
            </a>
            <a href="#contacto" onClick={(e) => handleScroll(e, 'contacto')} className="text-slate-600 hover:text-sage-600 font-medium transition-colors">Contacto</a>
            <a href="tel:611193312" className="flex items-center gap-2 bg-sage-500 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-sage-600 transition-all shadow-md hover:shadow-lg">
              <Phone size={18} />
              611 193 312
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Inicio</a>
            <a href="#por-que-elegirnos" onClick={(e) => handleScroll(e, 'por-que-elegirnos')} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Quiénes Somos</a>
            <a href="#especialidades" onClick={(e) => handleScroll(e, 'especialidades')} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Especialidades</a>
            <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Cita Online</a>
            <a href="#contacto" onClick={(e) => handleScroll(e, 'contacto')} className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50">Contacto</a>
            <div className="px-3 py-4 flex flex-col gap-2">
               <a href="tel:611193312" className="flex items-center justify-center gap-2 bg-sage-500 text-white px-5 py-3 rounded-xl font-bold">
                <Phone size={20} />
                Llamar Ahora
              </a>
              <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold">
                <Calendar size={20} />
                Reservar Cita
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
