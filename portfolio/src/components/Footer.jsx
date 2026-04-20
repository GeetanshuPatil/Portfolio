import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Geetanshu</h2>
        <p className="text-sm text-gray-400">
          React Developer | Building modern web apps
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/"
          target="_blank"
          className="hover:text-blue-400"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>

        <a
          href="mailto:yourmail@gmail.com"
          className="hover:text-blue-400"
        >
          Email
        </a>
      </div>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Geetanshu. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;