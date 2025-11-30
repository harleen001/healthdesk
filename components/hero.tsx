export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Health Desk Clinic: All Natural Supplements
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Health Care Desk is the premier choice for those seeking wellness through wholesome, superfood-enriched
            formulas that actually work. Our all-natural, organic health supplements are designed to give your body what
            it needs to thrive and optimize your health each day!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Shop Now
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/image.png" alt="Healthcare professional" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  )
}
