export default function NutritionSolutions() {
  const solutions = [
    {
      title: "Weight Loss",
      description:
        "Science-backed weight loss products that help boost metabolism and support your journey to a healthier you",
      icon: "⚖️",
    },
    {
      title: "Nerve Pain",
      description: "Our nerve pain product line formulated to soothe discomfort and support healthy nerve function",
      icon: "🧠",
    },
    {
      title: "Skin Care",
      description: "Natural skin care products that nourish, protect, and enhance your natural glow",
      icon: "✨",
    },
    {
      title: "Men's Health",
      description: "Designed to boost energy, strength, and overall well-being for men's vitality",
      icon: "💪",
    },
    {
      title: "Women's Health",
      description: "Support hormonal balance and overall wellness for women's complete vitality",
      icon: "👩",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Nutrition Solutions for Your Complete Well-Being</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {solutions.map((solution, idx) => (
          <div key={idx} className="bg-blue-50 rounded-lg p-6 text-center space-y-4">
            <div className="text-4xl">{solution.icon}</div>
            <h3 className="font-bold text-gray-900 text-lg">{solution.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full transition-colors">
              Buy now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
