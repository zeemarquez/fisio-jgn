
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-extrabold tracking-tight uppercase">
              CLINICA FISIOTERAPIA <span className="text-sage-400 ml-1">JGN</span>
            </span>
            <p className="text-slate-400 mt-2 max-w-sm">
              Juan García - Noblejas. Profesionalidad y cuidado personalizado en cada sesión.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#inicio" className="text-slate-400 hover:text-white transition-colors">Inicio</a>
            <a href="#especialidades" className="text-slate-400 hover:text-white transition-colors">Especialidades</a>
            <a href="#cita-online" className="text-slate-400 hover:text-white transition-colors">Cita Online</a>
            <a href="#contacto" className="text-slate-400 hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Clínica Fisioterapia JGN. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
