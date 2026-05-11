// Hero.jsx
const Hero = () => {
  const chips = [
    { label: "Wood-fired",     icon: "🔥",  style: { top: "-10px",   left: "10px",   rotate: "-6deg" } },
    { label: "#fresh",         dot: "bg-emerald-400", style: { top: "22%", left: "-16px", rotate: "4deg" } },
    { label: "@chefspecial",   star: true,  style: { bottom: "14%", left: "-8px",   rotate: "-3deg" } },
    { label: "Italian olives", icon: "🫒",  style: { top: "-12px",   right: "14%",   rotate: "5deg"  } },
    { label: "4.9 ★ rated",    dot: "bg-amber-400", style: { top: "30%", right: "-14px", rotate: "-5deg" } },
    { label: "#handmade",      dot: "bg-orange-400", style: { bottom: "-10px", right: "12%", rotate: "3deg" } },
  ];

  const stats = [
    { num: "4.9 ★", label: "Rating" },
    { num: "12k+",  label: "Orders" },
    { num: "~28min",label: "Avg delivery" },
  ];

  return (
    <section className="grid grid-cols-2 gap-12 items-center px-[10%] py-20">
      <div className="flex flex-col gap-6">
        <span className="text-xs tracking-widest uppercase text-gray-400 flex items-center gap-2">
          <span className="w-5 h-px bg-gray-300 inline-block" />
          Delivered in 30 min
        </span>
        <h1 className="text-5xl font-medium leading-tight tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Pizza worth<br />talking about
        </h1>
        <p className="text-sm font-light leading-relaxed text-gray-500 max-w-sm">
          Handcrafted with real ingredients, fired at the perfect temperature.
          Every slice tells you it was made with care.
        </p>

        <div className="flex items-center gap-6">
          {stats.map(({ num, label }, i) => (
            <>
              {i > 0 && <div key={`d${i}`} className="w-px h-7 bg-gray-200" />}
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-gray-900">{num}</span>
                <span className="text-xs text-gray-400">{label}</span>
              </div>
            </>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className="px-7 py-2.5 bg-gray-900 text-white text-sm rounded-lg font-medium">
            Order now 🍕
          </button>
          <button className="text-sm text-gray-400">See the menu →</button>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-7">
        {chips.map(({ label, icon, dot, star, style }, i) => (
          <div key={i}
            className="absolute z-10 bg-white border border-gray-100 rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5 shadow-sm whitespace-nowrap"
            style={style}>
            {icon && <span>{icon}</span>}
            {dot  && <span className={`w-1.5 h-1.5 rounded-full ${dot} inline-block`} />}
            {star && <span className="text-gray-300">✦</span>}
            {label}
          </div>
        ))}
        <div className="relative z-0 w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <img src="./10595892.png" alt="Pizza" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;