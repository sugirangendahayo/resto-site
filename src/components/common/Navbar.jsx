// Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/",          label: "Home"        },
  { to: "/menu",      label: "Menu"        },
  { to: "/track",     label: "Track order" },
  { to: "/locations", label: "Locations"   },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="flex justify-between items-center px-[5%] h-[68px]">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-gray-900 no-underline"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Piz<span className="text-orange-600">za</span>
        </Link>

        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}
                className={`text-sm px-3.5 py-1.5 rounded-lg no-underline transition-colors
                  ${pathname === to
                    ? "bg-orange-50 text-orange-600 font-medium"
                    : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-100 rounded-lg text-gray-600">
            Cart
            <span className="w-[18px] h-[18px] bg-orange-600 text-white text-[10px] rounded-full flex items-center justify-center font-medium">2</span>
          </button>
          <Link to="/login" className="text-sm px-5 py-2 border border-gray-200 rounded-lg text-gray-700 no-underline">
            Login
          </Link>
          <Link to="/order" className="text-sm px-5 py-2 bg-orange-600 text-white rounded-lg no-underline font-medium">
            Order now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;