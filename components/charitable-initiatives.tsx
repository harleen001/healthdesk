export default function CharitableInitiatives() {
  const charities = [
    { name: "Prostate Cancer Foundation", logo: "PCF" },
    { name: "American Tinnitus Association", logo: "ATA" },
    { name: "U.S. Pain Foundation", logo: "UPF" },
    { name: "American Diabetes Association", logo: "ADA" },
    { name: "American Heart Association", logo: "AHA" },
  ]

  return (
    <section className="bg-blue-400 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Charitable Initiatives</h2>
          <h3 className="text-3xl font-bold">Health Care Desk Gives Back</h3>
        </div>
        <p className="text-center mb-12 text-lg max-w-2xl mx-auto">
          At Health Care Desk, a portion of our profits are committed to supporting charities and global health research
          initiatives.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {charities.map((charity, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-center">{charity.logo}</span>
              </div>
              <p className="text-sm font-semibold text-center">{charity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
