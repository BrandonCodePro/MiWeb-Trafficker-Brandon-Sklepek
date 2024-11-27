import { MousePointerClick, Target, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/brandon-profile.png"
                alt="Brandon Sklepek"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Certificado
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Potencia tu Negocio con{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Marketing Digital
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Especialista certificado en Google Ads y Meta Ads, enfocado en
            maximizar tu ROI y alcanzar tus objetivos de negocio.
          </p>
          <div className="flex justify-center gap-4">
           <a href="https://wa.link/c5anbt" target="_blank"><button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Consulta Gratuita
            </button> </a>
            <a
              href="https://drive.google.com/file/d/1mKh1me3OalBZBIVdUkYtN8p70IoQv-ro/view?usp=sharing"
              target="_blank"
            >
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                Descargar portafolio
              </button>{' '}
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8 text-blue-600" />,
              title: 'Publicidad Precisa',
              description:
                'Campañas optimizadas para alcanzar a tu audiencia ideal',
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
              title: 'Resultados Medibles',
              description: 'Análisis detallado y optimización continua',
            },
            {
              icon: <MousePointerClick className="w-8 h-8 text-blue-600" />,
              title: 'Mayor Conversión',
              description:
                'Estrategias enfocadas en maximizar el retorno de inversión',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
