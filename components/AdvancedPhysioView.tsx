
import React from 'react';
import { ArrowLeft, CheckCircle2, Zap, Target, Activity } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const AdvancedPhysioView: React.FC<Props> = ({ onBack }) => {
  const appointmentUrl = "https://app.reasoningphysios.com:443//CitaOnline/citaDashboard.aspx?clinica=907&codigoImgLog=7E45FECDBB0807E9DCFCA526DFB3E6EC02C59605";

  return (
    <div className="bg-white min-h-screen">
      {/* Header / Navigation */}
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

      {/* Section 1: Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sage-500 font-bold uppercase tracking-widest text-sm">Fisioterapia Avanzada</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-8">
            Tratamiento integral de patologías musculoesqueléticas
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Abordamos contracturas y lesiones cotidianas con un enfoque clínico riguroso para mejorar significativamente tu calidad de vida y restaurar tu bienestar físico.
          </p>
        </div>
      </section>

      {/* Image 1 */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
          alt="Consulta de fisioterapia" 
          className="w-full h-[400px] object-cover rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Section 2: Personalization & Techniques */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tratamiento personalizado para cada tipo de lesión</h2>
              <p className="text-lg text-slate-600 mb-8">
                Trabajamos con una amplia variedad de lesiones, que incluyen problemas musculares, articulares y nerviosos. Las principales técnicas que utilizamos son:
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-4">
                    <div className="bg-sage-100 p-3 rounded-xl text-sage-600 shrink-0 h-fit">
                      <Target size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">Punción seca</h3>
                      <p className="text-slate-600 mt-1">Ideal para tratar puntos gatillo y contracturas musculares, aliviando el dolor y mejorando la movilidad.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-4">
                    <div className="bg-sage-100 p-3 rounded-xl text-sage-600 shrink-0 h-fit">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">Electroterapia</h3>
                      <p className="text-slate-600 mt-1">Ayuda a reducir la inflamación, alivia el dolor y favorece la regeneración de los tejidos dañados.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-4">
                    <div className="bg-sage-100 p-3 rounded-xl text-sage-600 shrink-0 h-fit">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900">Kinesiotaping</h3>
                      <p className="text-slate-600 mt-1">Vendaje terapéutico utilizado para estabilizar las articulaciones, reducir el dolor y facilitar el movimiento.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800" 
                alt="Técnica de fisioterapia avanzada" 
                className="rounded-3xl shadow-xl grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Acute and Chronic Pain */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Fisioterapia para dolor agudo y crónico</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Ya sea un dolor agudo por una lesión reciente o un dolor crónico persistente, nuestro equipo de fisioterapeutas está capacitado para proporcionarte el tratamiento adecuado. Aplicamos un enfoque integral para reducir el dolor y restaurar la funcionalidad de las áreas afectadas.
              </p>
            </div>
            <div className="absolute inset-0 opacity-20">
               <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1500" alt="background" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Beneficios de la fisioterapia avanzada</h2>
          <div className="grid md:grid-cols-1 gap-6">
            {[
              "Reducción del dolor y la inflamación.",
              "Recuperación más rápida de lesiones musculoesqueléticas.",
              "Mejora en la movilidad y flexibilidad"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <CheckCircle2 className="text-sage-500 shrink-0" size={28} />
                <span className="text-xl font-medium text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-sage-600 transition-all shadow-xl"
            >
              Reservar sesión ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedPhysioView;
