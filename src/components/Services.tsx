import { BarChart3, Target, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Google Ads",
      description: "Campañas optimizadas para captar clientes potenciales cuando están buscando tus servicios."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Meta Ads",
      description: "Estrategias efectivas en Facebook e Instagram para aumentar tu visibilidad y engagement."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Análisis y Optimización",
      description: "Seguimiento detallado de métricas y optimización continua para maximizar resultados."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Especializados</h2>
          <p className="text-xl text-gray-600">Soluciones personalizadas para impulsar tu presencia digital</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-xl hover:border-blue-500 transition-colors">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}