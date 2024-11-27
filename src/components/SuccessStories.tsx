import { Trophy } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      client: "E-commerce de Moda",
      results: "300% incremento en ROAS",
      description: "Optimización de campañas de Meta Ads resultando en un aumento significativo del retorno de inversión publicitaria."
    },
    {
      client: "Servicio B2B",
      results: "150+ leads calificados/mes",
      description: "Implementación de estrategia en Google Ads generando un flujo constante de leads de alta calidad."
    },
    {
      client: "Startup SaaS",
      results: "45% reducción en CAC",
      description: "Refinamiento de audiencias y optimización de presupuesto logrando una notable reducción en el costo de adquisición."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="casos-exito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Trophy className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Éxito</h2>
          <p className="text-xl text-gray-600">Resultados reales de clientes satisfechos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 font-semibold mb-2">{story.client}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.results}</h3>
              <p className="text-gray-600">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}