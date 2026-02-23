
import React from 'react';
import { ArrowLeft, CheckCircle2, HandMetal, Sparkles, Move, HeartPulse } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ManualTherapyView: React.FC<Props> = ({ onBack }) => {
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
            <HandMetal size={32} />
          </div>
          <span className="text-sage-500 font-bold uppercase tracking-widest text-sm">Terapia Manual</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-8 leading-tight">
            Técnicas específicas para tratar disfunciones del sistema neuro-músculo-esquelético
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Utilizamos manipulaciones precisas y evidencia científica para restaurar el equilibrio de tu cuerpo, eliminando las restricciones que impiden tu movimiento natural.
          </p>
        </div>
      </section>

      {/* Image Intercalated 1 */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <img 
          src="https://images.unsplash.com/photo-1519824141121-b9767436ddf7?auto=format&fit=crop&q=80&w=2000" 
          alt="Terapia manual en espalda" 
          className="w-full h-[450px] object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      {/* Slide 2: Techniques */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Sparkles className="text-sage-500" />
                Técnicas de terapia manual para aliviar el dolor
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Las técnicas que empleamos incluyen un abanico de metodologías internacionales de vanguardia:
              </p>
              
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-sage-300 transition-all">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Técnica Maitland</h3>
                  <p className="text-slate-600">Una manipulación articular suave y controlada para reducir el dolor y mejorar la movilidad, basada en grados de movimiento.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-sage-300 transition-all">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Técnica Mulligan</h3>
                  <p className="text-slate-600">Combinación de movilización articular con movimiento activo para restaurar la función y aliviar el dolor de forma inmediata.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-sage-300 transition-all">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Masajes terapéuticos</h3>
                  <p className="text-slate-600">Realizados con técnicas especializadas para liberar tensiones profundas, reducir la inflamación y mejorar la circulación sanguínea.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800" 
                alt="Tratamiento manual" 
                className="rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-sage-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <Move size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Personalization */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-4xl mx-auto">
              <HeartPulse className="mx-auto mb-6 text-sage-400" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Tratamiento personalizado según las necesidades del paciente</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Cada sesión de terapia manual es completamente personalizada según las necesidades específicas del paciente. Evaluamos tu condición y diseñamos un plan de tratamiento que te ayudará a alcanzar la máxima recuperación de forma segura y efectiva.
              </p>
            </div>
            <div className="absolute inset-0 opacity-10">
               <img src="https://images.unsplash.com/photo-1544126592-807daf21565c?auto=format&fit=crop&q=80&w=1500" alt="hands" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Beneficios de la terapia manual</h2>
          <div className="space-y-4">
            {[
              "Reducción del dolor muscular y articular.",
              "Mejora de la movilidad y flexibilidad.",
              "Tratamiento eficaz para lesiones crónicas y agudas."
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-sage-50 p-2 rounded-full">
                  <CheckCircle2 className="text-sage-500 shrink-0" size={24} />
                </div>
                <span className="text-xl font-semibold text-slate-800">{benefit}</span>
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

export default ManualTherapyView;
