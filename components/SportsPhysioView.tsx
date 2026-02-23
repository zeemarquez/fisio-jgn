
import React from 'react';
import { ArrowLeft, CheckCircle2, Shield, Zap, Activity, Dumbbell } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const SportsPhysioView: React.FC<Props> = ({ onBack }) => {
  const appointmentUrl = "https://app.reasoningphysios.com:443//CitaOnline/citaDashboard.aspx?clinica=907&codigoImgLog=7E45FECDBB0807E9DCFCA526DFB3E6EC02C59605";

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-sage-600 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
        </div>
      </div>

      {/* Slide 1: Intro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-sage-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-sage-600 shadow-lg">
            <Dumbbell size={32} />
          </div>
          <span className="text-sage-500 font-bold uppercase tracking-widest text-sm">Fisioterapia Deportiva</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-8 leading-tight">
            Especializados en la prevención y rehabilitación de lesiones deportivas
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Optimizamos tu rendimiento físico y te acompañamos en cada fase de tu actividad deportiva, desde el entrenamiento hasta la competición de alto nivel.
          </p>
        </div>
      </section>

      {/* Image Intercalated 1 */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000" 
          alt="Atleta entrenando" 
          className="w-full h-[450px] object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      {/* Slide 2: Prevention */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" 
                alt="Prevención de lesiones" 
                className="rounded-3xl shadow-xl grayscale"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="text-sage-500" />
                Prevención de lesiones deportivas
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                La fisioterapia deportiva es esencial para prevenir lesiones comunes en el deporte. Nuestro enfoque incluye:
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg">Terapia manual</h3>
                  <p className="text-slate-600">Para mejorar la movilidad de las articulaciones y reducir la tensión muscular.</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg">Ejercicios terapéuticos</h3>
                  <p className="text-slate-600">Diseñados específicamente para fortalecer los músculos y mejorar la flexibilidad, reduciendo el riesgo de lesiones.</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg">Kinesiotaping</h3>
                  <p className="text-slate-600">Usado para estabilizar músculos y articulaciones, prevenir esguinces y proporcionar soporte durante actividades deportivas intensas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Rehabilitation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Rehabilitación de lesiones deportivas</h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Si ya has sufrido una lesión deportiva, nuestro enfoque se centra en una recuperación rápida y completa. Usamos las mejores técnicas para facilitar la curación y restaurar el rendimiento:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3"><Zap className="text-sage-400 shrink-0" /> <strong>Punción seca:</strong> Alivio del dolor muscular y aceleración de curación en lesiones agudas.</li>
                  <li className="flex gap-3"><Activity className="text-sage-400 shrink-0" /> <strong>Electroterapia:</strong> Reducción de inflamación y aceleración de recuperación de tejidos.</li>
                  <li className="flex gap-3"><Dumbbell className="text-sage-400 shrink-0" /> <strong>Masaje deportivo:</strong> Alivio de tensiones y mejora de circulación en músculos sobrecargados.</li>
                </ul>
              </div>
              <div className="relative h-80 lg:h-full min-h-[300px]">
                 <img src="https://images.unsplash.com/photo-1579126038827-7725832049b0?auto=format&fit=crop&q=80&w=800" alt="Rehabilitación" className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-60 grayscale" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Beneficios de la fisioterapia deportiva</h2>
          <div className="grid gap-4">
            {[
              "Prevención de lesiones y mejora del rendimiento físico.",
              "Recuperación rápida y eficaz de lesiones deportivas.",
              "Reducción de la probabilidad de futuras lesiones"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-sage-400 transition-colors">
                <CheckCircle2 className="text-sage-500 shrink-0" size={28} />
                <span className="text-lg font-bold text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-sage-600 transition-all shadow-xl active:scale-95"
            >
              Pedir cita ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsPhysioView;
