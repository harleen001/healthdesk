export default function TrustBadges() {
  const badges = [
    { icon: "/allnatural.png", label: "All Natural" },
    { icon: "/crueltyfree.png", label: "Cruelty-Free" },
    { icon: "/moneyback.png", label: "Money-back Guarantee" },
    { icon: "/givingback.png", label: "Giving Back" },
    { icon: "/nongmo.png", label: "Non-GMO" },
  ]

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A Brand That You Can Trust
          </h2>
          <p className="text-gray-600 text-lg">
            Our results-driven supplements are made with premium & safe ingredients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 text-center"
            >
              <img
                src={badge.icon}
                alt={badge.label}
                className="w-12 h-12 object-contain"
              />
              <p className="font-semibold text-gray-900">{badge.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
