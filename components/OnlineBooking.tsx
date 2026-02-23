
import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

const OnlineBooking: React.FC = () => {
  const appointmentUrl = "https://app.reasoningphysios.com:443//CitaOnline/citaDashboard.aspx?clinica=907&codigoImgLog=7E45FECDBB0807E9DCFCA526DFB3E6EC02C59605";

  return (
    <section id="cita-online" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage-500/20 to-transparent pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Reserva tu cita online en segundos</h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                Elige el horario que mejor se adapte a ti en Mirasierra o Montecarmelo. Sin esperas, confirmación inmediata a través de nuestro portal de reservas.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Disponibilidad en tiempo real',
                  'Confirmación por email y SMS',
                  'Gestión de cancelaciones fácil',
                  'Sin necesidad de llamar'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="text-sage-400" size={20} />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-white text-slate-900 px-10 py-5 rounded-2xl font-extrabold text-xl hover:bg-sage-50 transition-all shadow-2xl items-center gap-3"
              >
                <Calendar size={24} />
                Reservar Mi Cita
              </a>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-white mb-2">
                    <span className="text-xl font-bold">Agenda Online</span>
                    <span className="text-sage-400 font-bold uppercase text-xs tracking-widest">Activa</span>
                  </div>
                  {[
                    { day: 'Lunes a Viernes', label: 'Mañanas y Tardes' },
                    { day: 'Localización', label: 'Madrid' }
                  ].map((slot, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10">
                      <span className="text-white font-medium">{slot.day}</span>
                      <span className="text-sage-300 text-sm font-semibold italic">{slot.label}</span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <p className="text-xs text-slate-400 text-center uppercase tracking-tighter">Accede al portal para ver horarios exactos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineBooking;
