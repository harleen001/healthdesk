export default function NaturalComponents() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
        Health Care Desk
        <br />
        The Future Of Smart Health
      </h2>
      <p className="text-justify text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
        At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods.
        Our products help support the body's natural processes, improving our customers' quality of life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/fruits.jpg" alt="Natural ingredients" className="w-full rounded-lg h-120" />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">100% Natural Components</h3>
          <p className="text-gray-600 text-xl leading-relaxed">
            We harness the goodness of nature to create supplements enriched with premium, research-backed superfood
            extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits.
            At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring
            every product you choose is both effective and trustworthy.
          </p>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-2 px-10  transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
