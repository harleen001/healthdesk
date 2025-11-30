export default function TrustBadges() {
  const badges = [
    { icon: "🌿", label: "All Natural" },
    { icon: "🐰", label: "Cruelty-Free" },
    { icon: "💰", label: "Money-back Guarantee" },
    { icon: "🤝", label: "Giving back" },
    { icon: "🚫", label: "Non-GMO" },
  ]

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">A Brand That You Can Trust</h2>
          <p className="text-gray-600 text-lg">
            Our results-driven supplements are made with premium & safe ingredients
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 text-center">
              <div className="text-4xl">{badge.icon}</div>
              <p className="font-semibold text-gray-900">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
