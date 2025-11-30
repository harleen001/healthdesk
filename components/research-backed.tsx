export default function ResearchBacked() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Research-Backed Formulations</h2>
          <p className="text-gray-600 font-semibold">Formulated with Clinically Tested Ingredients</p>
          <p className="text-gray-600 leading-relaxed">
            We combine the expertise of our physicians with the latest health data and medical research, ensuring every
            supplement is thoughtfully formulated for maximum benefit.
          </p>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-2 px-8 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
        <div>
          <img src="/images/image.png" alt="Laboratory equipment" className="w-full rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/images/image.png" alt="Manufacturing facility" className="w-full rounded-lg" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Eco-Conscious Manufacturing</h2>
          <p className="text-gray-600 font-semibold">Sustainable from Source to Shelf</p>
          <p className="text-gray-600 leading-relaxed">
            Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring
            exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment
            to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are
            for you.
          </p>
        </div>
      </div>
    </section>
  )
}
