
import React from 'react';
import { ChevronRight, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const logoUrl = "public/assets/logo-jgn.png";
  const appointmentUrl = "https://app.reasoningphysios.com:443//CitaOnline/citaDashboard.aspx?clinica=907&codigoImgLog=7E45FECDBB0807E9DCFCA526DFB3E6EC02C59605";

  const scrollToSpecialties = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('especialidades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <img src={logoUrl} alt="Logo Clínica JGN" className="h-48 w-auto object-contain drop-shadow-sm" />
            </div>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-sage-600 uppercase bg-sage-50 rounded-full">
              Fisioterapia en Madrid
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-700 leading-tight mb-6 uppercase">
              CLINICA FISIOTERAPIA <br/>
              <span className="text-sage-500">JGN</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Recupera tu bienestar y tu mejor versión con tratamientos personalizados de fisioterapia avanzada y terapia manual en Mirasierra y Montecarmelo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-sage-600 transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Pedir Cita Ahora
                <Calendar size={20} />
              </a>
              <a 
                href="#especialidades" 
                onClick={scrollToSpecialties}
                className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all cursor-pointer"
              >
                Ver Especialidades
                <ChevronRight size={20} />
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">5+</span>
                <span className="text-sm text-slate-500">Años de Exp.</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">1k+</span>
                <span className="text-sm text-slate-500">Pacientes Felices</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <img 
                src="public/assets/hero-01.png" 
                alt="Tratamiento de fisioterapia profesional" 
                className="w-full h-full object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
