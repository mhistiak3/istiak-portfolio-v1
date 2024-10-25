import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] relative">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src="/bg-banner.jpg"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-6 z-10 px-4">
       
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Istiak Ahammad
        </h2>
        <p className="text-lg md:text-xl max-w-xl">
          Passionate MERN Stack Developer focused on building responsive and
          user-friendly applications.
        </p>
        <Link
          href={"/cv"}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md font-semibold transition duration-300 shadow-md hover:shadow-lg"
        >
          Download CV
        </Link>
      </div>
    </div>
  );
};

export default Hero;
