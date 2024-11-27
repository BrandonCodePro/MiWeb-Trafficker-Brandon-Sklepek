import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para Crecer?
          </h2>
          <p className="text-xl text-gray-600">
            Agenda una consulta gratuita y analicemos tu proyecto
          </p>
        </div>
        <a href="https://wa.link/c5anbt" target="_blank">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mx-auto block">
            Consulta Gratuita
          </button>
        </a>
      </div>
    </section>
  );
}
