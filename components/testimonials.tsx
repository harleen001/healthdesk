export default function Testimonials() {
  const testimonials = [
    {
      product: "TestoBites",
      rating: 5,
      text: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly say my performance",
      author: "Ryan R.",
    },
    {
      product: "Vita Renew",
      rating: 5,
      text: "My pain therapist highly recommended Vita Renew and it's been great for my skin care",
      author: "Jamie Fields",
    },
    {
      product: "Nerve Freedom",
      rating: 5,
      text: "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is neurological pain hands down.",
      author: "Anonymous",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Verified Customer Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-blue-50 p-6 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">{testimonial.product}</p>
            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-4">{testimonial.text}</p>
            <p className="text-gray-900 font-semibold text-sm">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
