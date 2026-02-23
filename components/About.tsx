
import React from 'react';
import { Award, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="por-que-elegirnos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="public//assets/foto-jgn-01.jpg" 
                alt="Instalaciones Clínica JGN" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="text-sage-400" />
                  <span className="font-semibold">Club de Pádel y Tenis Fuencarral</span>
                </div>
              </div>
            </div>
            {/* Badge de experiencia */}
            <div className="absolute -top-6 -right-6 bg-sage-500 text-white p-8 rounded-3xl shadow-2xl hidden md:block animate-bounce-slow">
              <Users size={32} className="mb-2" />
              <p className="font-bold text-2xl">Experiencia</p>
              <p className="text-sage-100">Élite Deportiva</p>
            </div>
          </div>

          <div>
            <span className="text-sage-600 font-bold uppercase tracking-widest text-sm mb-4 block">Excelencia en Fisioterapia</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              ¿POR QUÉ <span className="text-sage-500 underline decoration-sage-200 underline-offset-8">ELEGIRNOS</span>?
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Ubicada en el exclusivo <span className="font-semibold text-slate-800">Club de Pádel y Tenis Fuencarral</span>, la <span className="font-bold text-slate-900">CLÍNICA FISIOTERAPIA JGN</span> es un referente de salud dirigido por <span className="font-bold text-slate-900">JUAN GARCÍA-NOBLEJAS</span>. Con una trayectoria consolidada de varios años, nuestro centro se distingue por un enfoque de vanguardia en el sector de la salud y el alto rendimiento deportivo.
              </p>
              
              <p>
                Somos reconocidos especialistas en el <span className="font-semibold text-slate-800">tratamiento del dolor</span>, abordando patologías de origen neuro-músculo-esquelético tanto agudas como crónicas. Nuestra seña de identidad es la aplicación rigurosa de la <span className="text-sage-600 font-bold">Terapia Manual</span> mediante un tratamiento individualizado y 100% personalizado para cada paciente.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-sage-500 mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-sage-600" size={24} />
                  <h4 className="font-bold text-slate-900">Trayectoria en Élite Deportiva</h4>
                </div>
                <p className="text-slate-600 italic">
                  Con experiencia contrastada en equipos de fútbol profesionales como el <span className="font-semibold">Linares Deportivo</span>, <span className="font-semibold">AD Alcorcón</span> y <span className="font-semibold">Getafe CF</span>, garantizamos una recuperación óptima y una mejora sustancial en el rendimiento deportivo de nuestros pacientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
