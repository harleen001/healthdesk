"use client"

import { useState } from "react"

export default function BestSellers() {
  const [activeCategory, setActiveCategory] = useState("Results-Driven")

  const products = [
    { name: "Dent Pure", category: "Results-Driven", rating: 5, image: "🧴" },
    { name: "True Fem", category: "All-Natural", rating: 5, image: "💊" },
    { name: "Vita Renew", category: "Non-GMO", rating: 5, image: "💉" },
    { name: "ProstaZen", category: "Cruelty-Free", rating: 5, image: "📦" },
    { name: "Nerve Freedom", category: "Results-Driven", rating: 5, image: "🧴" },
  ]

  const categories = ["Results-Driven", "All-Natural", "Non-GMO", "Cruelty-Free"]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Best Sellers</h2>
      <p className="text-gray-600 text-lg mb-8">
        Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing
        & wellness.
      </p>

      <div className="flex gap-4 mb-12 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`pb-4 font-semibold transition-colors ${
              activeCategory === category
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="border border-gray-300 rounded-lg p-4 text-center">
            <div className="text-5xl mb-4">{product.image}</div>
            <p className="font-bold text-gray-900 mb-2">{product.name}</p>
            <div className="flex gap-1 justify-center mb-4">
              {[...Array(product.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 w-full py-2 rounded-lg font-semibold transition-colors">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
