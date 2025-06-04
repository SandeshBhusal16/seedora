import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      return setError("Please fill all the fields.");
    }

    try {
      const res = await axios.post(
        "https://seedorabackend.vercel.app/contact/createcontact",

        formData
      );
      if (res.data && res.data.msg) {
        setSuccess(res.data.msg);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      setError("Failed to send message.", err);
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
      >
        <h2 className="text-2xl text-white font-bold text-center rounded  p-4 bg-[#5C7B4C]">
          Contact Seedora
        </h2>

        {success && <p className="text-green-600">{success}</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your full name"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Phone
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="123-456-7890"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="How can we help you?"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#5C7B4C] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
