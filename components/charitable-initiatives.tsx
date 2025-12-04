export default function CharitableInitiatives() {
  const charities = [
    {
      name: "Prostate Cancer Foundation",
      logo: "/prostate.png",
    },
    {
      name: "American Tinnitus Association",
      logo: "/american.png",
    },
    {
      name: "U.S. Pain Foundation",
      logo: "/is.png",
    },
    {
      name: "American Diabetes Association",
      logo: "/diabeties.png",
    },
    {
      name: "American Heart Association",
      logo: "/health.png",
    },
  ]

  return (
    <section className="bg-blue-400 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Charitable Initiatives</h2>
          <h3 className="text-3xl font-bold">Health Care Desk Gives Back</h3>
        </div>

        <p className="text-justify mb-12 text-lg max-w-5xl mx-auto">
          At Health Care Desk, a portion of our profits are committed to supporting charities and global health research
          initiatives.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {charities.map((charity, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3">
              <div className="w-46 h-46  overflow-hidden flex items-center justify-center">
                <img
                  src={charity.logo}
               
                  className="w-full h-full object-contain"
                />
              </div>
           
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
