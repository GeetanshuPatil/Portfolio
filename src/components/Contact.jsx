import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_mzfeljk",
      "template_e2kwnup",
      form,
      "ggPVF5MuL3BAePEA9"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Failed to send message");
    });
};

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 flex flex-col gap-6"
      >
        {/* Name */}
        <div className="flex flex-col text-left">
          <label className="mb-1 text-sm text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col text-left">
          <label className="mb-1 text-sm text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col text-left">
          <label className="mb-1 text-sm text-gray-300">Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            onChange={handleChange}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:scale-[1.02] transition duration-300"
        >
          Send Message 
        </button>
      </form>
    </section>
  );
};

export default Contact;