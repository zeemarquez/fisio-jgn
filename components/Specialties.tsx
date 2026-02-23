
import React from 'react';
import { Activity, Dumbbell, HandMetal } from 'lucide-react';

interface Props {
  onLearnMore?: (id: string) => void;
}

const specialties = [
  {
    id: 'fisioterapia-avanzada',
    title: 'Fisioterapia Avanzada',
    description: 'Tratamiento integral de patologías musculoesqueléticas, contracturas y lesiones cotidianas para mejorar tu calidad de vida.',
    icon: Activity,
    color: 'bg-sage-400'
  },
  {
    id: 'fisioterapia-deportiva',
    title: 'Fisioterapia Deportiva',
    description: 'Especializados en la prevención y rehabilitación de lesiones en deportistas de todos los niveles. Optimización del rendimiento.',
    icon: Dumbbell,
    color: 'bg-sage-500'
  },
  {
    id: 'terapia-manual',
    title: 'Terapia Manual',
    description: 'Técnicas específicas para tratar disfunciones del sistema neuro-músculo-esquelético mediante manipulaciones precisas.',
    icon: HandMetal,
    color: 'bg-sage-600'
  }
];

const Specialties: React.FC<Props> = ({ onLearnMore }) => {
  return (
    <section id="especialidades" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestras Especialidades</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            En la <span className="font-bold">CLÍNICA FISIOTERAPIA JGN</span> combinamos experiencia y tecnología para ofrecerte los mejores tratamientos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>
              <button 
                onClick={() => {
                  if (onLearnMore) {
                    onLearnMore(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="text-sage-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Saber más <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
