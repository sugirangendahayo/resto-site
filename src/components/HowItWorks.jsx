const steps = [
  {
    number: "01",
    title: "Pick your pizza",
    desc: "Browse the menu, choose your size, and customise your toppings exactly how you like.",
    icon: "🍕",
  },
  {
    number: "02",
    title: "We fire it fresh",
    desc: "Your order goes straight to the kitchen. Wood-fired, never frozen, made to order.",
    icon: "🔥",
  },
  {
    number: "03",
    title: "Hot to your door",
    desc: "Delivered in under 35 minutes — still crispy, still hot, still perfect.",
    icon: "🛵",
  },
];

const HowItWorks = () => (
  <section className="px-[10%] py-20 bg-gray-50 rounded-3xl mx-[4%] mb-8">
    {/* Header */}
    <div className="text-center mb-14">
      <span className="text-xs tracking-widest uppercase text-gray-400 flex items-center justify-center gap-2 mb-3">
        <span className="w-5 h-px bg-gray-300 inline-block" />
        Simple as that
        <span className="w-5 h-px bg-gray-300 inline-block" />
      </span>
      <h2
        className="text-3xl font-medium tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        From craving to doorstep
      </h2>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-3 gap-8 relative">
      {/* connector line */}
      <div className="absolute top-8 left-[20%] right-[20%] h-px bg-gray-200 hidden md:block" />

      {steps.map(({ number, title, desc, icon }, i) => (
        <div key={i} className="flex flex-col items-center text-center relative z-10">
          {/* Circle */}
          <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl shadow-sm mb-5">
            {icon}
          </div>
          <span className="text-[10px] tracking-widest text-gray-300 font-medium mb-2">
            STEP {number}
          </span>
          <h3
            className="text-base font-medium text-gray-900 mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed max-w-[200px] font-light">
            {desc}
          </p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex justify-center mt-12">
      <button className="px-7 py-2.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors duration-200">
        Start your order
      </button>
    </div>
  </section>
);

export default HowItWorks;