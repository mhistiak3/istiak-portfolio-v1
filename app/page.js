import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full  h-screen bg-gray-300 relative">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src="/bg-banner.jpg"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <Navbar />
      <Hero />
    </div>
  );
}
