// Footer.jsx
const Footer = () => {
  const explore = ["Home", "Menu", "Track order", "Locations", "Deals"];
  const company = ["About us", "Careers", "Blog", "Press", "Contact"];

  return (
    <footer className="bg-[#111] text-white px-[10%] pt-16 pb-8"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">

        {/* Brand */}
        <div>
          <span className="block text-3xl font-medium tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Piz<span className="text-orange-500">za</span>
          </span>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Delivering now · Kigali
          </div>

          <p className="text-sm font-light text-gray-500 leading-relaxed max-w-[26ch] mb-6">
            Handcrafted with real ingredients, fired at the perfect temperature.
            Every slice made with care.
          </p>

          <div className="flex gap-2.5">
            {["𝕏", "in", "f", "ig"].map((s) => (
              <button key={s}
                className="w-[34px] h-[34px] rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-[11px] font-medium tracking-[0.14em] uppercase text-white mb-5">Explore</h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {explore.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm font-light text-gray-500 no-underline hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[11px] font-medium tracking-[0.14em] uppercase text-white mb-5">Company</h4>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {company.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm font-light text-gray-500 no-underline hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[11px] font-medium tracking-[0.14em] uppercase text-white mb-5">Stay in the loop</h4>
          <p className="text-sm font-light text-gray-500 leading-relaxed mb-5">
            Get weekly deals and new menu drops straight to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500"
            />
            <button className="px-4 py-2.5 bg-orange-600 text-white text-sm rounded-lg font-medium hover:bg-orange-700 transition-colors">
              →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center pt-8">
        <p className="text-xs text-gray-600 font-light">
          © 2026 <span className="text-orange-500">Pizza</span>. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy policy", "Terms of use", "Cookie settings"].map((item) => (
            <a key={item} href="#"
              className="text-xs text-gray-600 no-underline hover:text-white transition-colors font-light">
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;