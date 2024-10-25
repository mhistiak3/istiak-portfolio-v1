import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-gray-100  overflow-hidden">
      <div className="w-full lg:w-4/5 mx-5 lg:mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Image Section */}
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
          <Image
            src="/me.png"
            alt="Istiak Ahammad"
            className="rounded-lg object-cover w-full h-full"
            width={800}
            height={800}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-7/12 px-4 lg:px-8 text-gray-700 space-y-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <h3 className="text-2xl font-semibold text-green-600">
            I'm Istiak Ahammad, a MERN Stack Developer
          </h3>
          <p className="text-lg">
            I am comfortable working with a variety of JavaScript technologies
            and frameworks, specializing in building dynamic, responsive web
            applications. My focus is on delivering clean, efficient code and
            seamless user experiences.
          </p>

          {/* Personal Information */}
          <div className="mt-6 grid grid-cols-1  gap-4 text-lg">
            <p>
              <b>City:</b> Dhaka, Bangladesh
            </p>
            <p>
              <b>Degree:</b> Masters in Islamic Study
            </p>
            <p>
              <b>Email:</b> mhistiak2@gmail.com
            </p>
            <p>
              <b>Phone:</b> +8801810077098
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
