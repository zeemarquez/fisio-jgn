
import React from 'react';
import { Phone, MapPin, Mail, Clock, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Estamos encantados de ayudarte</h2>
            <p className="text-lg text-slate-600 mb-12">
              ¿Tienes alguna duda sobre nuestros tratamientos o necesitas una cita urgente? Contacta directamente con nosotros.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <a href="tel:611193312" className="flex items-start gap-5 group">
                <div className="bg-sage-100 p-4 rounded-2xl text-sage-600 group-hover:bg-sage-500 group-hover:text-white transition-all shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Teléfono</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">611 193 312</p>
                </div>
              </a>

              <a href="mailto:jgnfisioterapia@gmail.com" className="flex items-start gap-5 group">
                <div className="bg-sage-100 p-4 rounded-2xl text-sage-600 group-hover:bg-sage-500 group-hover:text-white transition-all shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Correo</p>
                  <p className="text-sm font-bold text-slate-900 mt-1 break-all">jgnfisioterapia@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-start gap-5">
                <div className="bg-sage-100 p-4 rounded-2xl text-sage-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Ubicación</p>
                  <p className="text-lg font-bold text-slate-900 mt-1 leading-tight">
                    Monasterio de las huelgas 15, <br/>
                    28049, Madrid
                  </p>
                </div>
              </div>

              <a href="https://www.instagram.com/fisioterapiajgn" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group">
                <div className="bg-sage-100 p-4 rounded-2xl text-sage-600 group-hover:bg-sage-500 group-hover:text-white transition-all shrink-0">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Instagram</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">@fisioterapiajgn</p>
                </div>
              </a>
              
              <div className="flex items-start gap-5 sm:col-span-2">
                <div className="bg-sage-100 p-4 rounded-2xl text-sage-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Horario</p>
                  <p className="text-lg font-medium text-slate-900 mt-1">Lunes a Viernes: 09:00 - 21:00</p>
                  <p className="text-slate-500 text-sm italic">Sábados bajo cita previa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[500px]">
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-sage-500 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Mapa de ubicación: Monasterio de las huelgas 15, Madrid</p>
                <a 
                  href="https://www.google.com/maps/search/Monasterio+de+las+huelgas+15,+28049+Madrid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-sage-700 transition-colors"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
