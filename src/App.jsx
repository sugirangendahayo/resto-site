import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";
import FeaturedItems from "./components/FeaturedItems";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedItems />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default App;