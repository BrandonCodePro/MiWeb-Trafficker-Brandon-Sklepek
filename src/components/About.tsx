export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              alt="Digital Marketing Strategy"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Brandon Sklepek</h2>
            <p className="text-xl text-gray-600 mb-6">
              Trafficker Digital especializado en crear y optimizar campañas publicitarias que generan resultados medibles y escalables.
            </p>
            <ul className="space-y-4">
              {[
                "Certificado en Google Ads",
                "Especialista en Meta Ads",
                "Experto en Paid Media",
                "Estratega de Marketing Digital"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}