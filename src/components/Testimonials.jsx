const reviews = [
  {
    name: "Sofia M.",
    location: "Milan",
    initials: "SM",
    color: "bg-orange-100 text-orange-500",
    stars: 5,
    quote:
      "I've tried every pizza place in the city. Nothing comes close — the crust alone is worth ordering for.",
  },
  {
    name: "James T.",
    location: "London",
    initials: "JT",
    color: "bg-gray-100 text-gray-500",
    stars: 5,
    quote:
      "Ordered the Truffle Funghi on a whim. Now it's a weekly ritual. The delivery was faster than I expected too.",
  },
  {
    name: "Léa B.",
    location: "Paris",
    initials: "LB",
    color: "bg-amber-100 text-amber-500",
    stars: 5,
    quote:
      "Arrived hot, smelled incredible, tasted even better. My whole family was fighting over the last slice.",
  },
];

const Testimonials = () => (
  <section className="px-[10%] py-20">
    {/* Header */}
    <div className="mb-12">
      <span className="text-xs tracking-widest uppercase text-gray-400 flex items-center gap-2 mb-3">
        <span className="w-5 h-px bg-gray-300 inline-block" />
        Real people, real slices
      </span>
      <h2
        className="text-3xl font-medium tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        What they're saying
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-3 gap-6">
      {reviews.map(({ name, location, initials, color, stars, quote }) => (
        <div
          key={name}
          className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-colors duration-200"
        >
          {/* Stars */}
          <div className="flex gap-0.5">
            {Array.from({ length: stars }).map((_, i) => (
              <span key={i} className="text-amber-400 text-sm">★</span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-sm text-gray-600 leading-relaxed font-light flex-1">
            "{quote}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${color}`}
            >
              {initials}
            </div>
            <div>
              <p className="text-xs font-medium text-gray-800">{name}</p>
              <p className="text-[10px] text-gray-400">{location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Aggregate rating */}
    <div className="flex items-center gap-3 mt-10 justify-center">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-amber-400 text-sm">★</span>
        ))}
      </div>
      <span className="text-sm text-gray-400 font-light">
        <span className="text-gray-700 font-medium">4.9</span> from over 2,400 orders
      </span>
    </div>
  </section>
);

export default Testimonials;