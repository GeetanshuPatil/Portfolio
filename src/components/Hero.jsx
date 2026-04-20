import React from "react";
import heroImg from "../assets/dmitry-khotsinskiy-PA-7YM3a-Kc-unsplash.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white px-4"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm Geetanshu 👋
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300">
          I build fast, responsive web apps with React & Node.js that solve real problems
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition text-center"
          >
            View Projects
          </a>

          <a
            href="/Geetanshu_React_Developer_Resume.pdf"
            download
            className="w-full sm:w-auto border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;