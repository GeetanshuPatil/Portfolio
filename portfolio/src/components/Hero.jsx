import React from "react";
import heroImg from "../assets/dmitry-khotsinskiy-PA-7YM3a-Kc-unsplash.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
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
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Geetanshu 👋
        </h1>

        <p className="text-lg md:text-xl mb-6">
          React Developer | Building modern web apps
        </p>

        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View Projects
          </a>

          <a
            href="public\Geetanshu_React_Developer_Resume.pdf"
            download
            className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
