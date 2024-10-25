import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full  h-screen bg-gray-300">
      <Navbar />
      <Hero/>
    </div>
  );
}
