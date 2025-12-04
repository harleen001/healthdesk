export default function NutritionSolutions() {
  const solutions = [
    {
      title: "Weight Loss",
      description:
        "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you",
      logo: "/weightloss.png",
    },
    {
      title: "Nerve Pain",
      description:
        "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function",
      logo: "/nervepain.png",
    },
    {
      title: "Skin Care",
      description:
        "Explore premium skincare products that nourish, protect, and enhance your natural glow",
      logo: "/skincare.png",
    },
    {
      title: "Men's Health",
      description:
        "Discover men’s health products designed to boost energy, strength, and overall well-being.",
      logo: "/menshealth.png",
    },
    {
      title: "Women's Health",
      description:
        "Explore women’s health products that support hormonal balance, vitality, and overall wellness",
      logo: "/womenshealth.png",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 py-14">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Nutrition Solutions for Your Complete Well-Being
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {solutions.map((solution, idx) => (
          <div
            key={idx}
            className="bg-blue-50 rounded-lg p-6 flex flex-col justify-between text-center"
          >
            <div className="space-y-4">
              <img
                src={solution.logo}
                alt={solution.title}
                className="w-16 h-16 mx-auto object-contain"
              />
              <h3 className="font-bold text-gray-900 text-lg">{solution.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full transition-colors mt-6">
              Buy now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
