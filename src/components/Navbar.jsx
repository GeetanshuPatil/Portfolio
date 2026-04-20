import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black text-white flex justify-between items-center px-6 py-4 z-50">
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <div className="space-x-6 hidden md:block">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;