const items = [
  {
    name: "Margherita Classica",
    desc: "San Marzano tomato, fior di latte, fresh basil, extra-virgin olive oil.",
    price: "$14",
    tag: "Most loved",
    tagColor: "bg-orange-50 text-orange-500",
    badge: "🔥",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  },
  {
    name: "Truffle Funghi",
    desc: "Wild mushroom blend, black truffle cream, aged pecorino, thyme.",
    price: "$18",
    tag: "Chef's pick",
    tagColor: "bg-gray-100 text-gray-500",
    badge: "✦",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  },
  {
    name: "Diavola",
    desc: "Spicy 'nduja, smoked mozzarella, roasted peppers, capers.",
    price: "$16",
    tag: "Fan favourite",
    tagColor: "bg-red-50 text-red-400",
    badge: "🌶",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  },
];

const FeaturedItems = () => (
  <section className="px-[10%] py-20">
    {/* Header */}
    <div className="flex items-end justify-between mb-10">
      <div>
        <span className="text-xs tracking-widest uppercase text-gray-400 flex items-center gap-2 mb-3">
          <span className="w-5 h-px bg-gray-300 inline-block" />
          From our kitchen
        </span>
        <h2
          className="text-3xl font-medium tracking-tight leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The ones people<br />keep coming back for
        </h2>
      </div>
      <button className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
        Full menu →
      </button>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-3 gap-6">
      {items.map(({ name, desc, price, tag, tagColor, badge, img }) => (
        <div
          key={name}
          className="group flex flex-col rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          {/* Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* floating badge */}
            <span className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center text-base shadow-sm border border-gray-100">
              {badge}
            </span>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-2 p-5 flex-1">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColor}`}>
                {tag}
              </span>
            </div>
            <h3
              className="text-base font-medium text-gray-900 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {name}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light flex-1">{desc}</p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
              <span className="text-sm font-medium text-gray-900">{price}</span>
              <button className="text-xs px-4 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                Add to order
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedItems;