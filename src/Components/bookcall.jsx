import { useState } from "react";
import axios from "axios";

export default function BookCall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    datetime: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // <-- loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setLoading(true); // Set loading state to true
    e.preventDefault();
    setSuccess("");
    setError("");

    const { name, email, service, datetime } = formData;

    // Simple validation: required fields must be filled
    if (!name || !email || !service || !datetime) {
      setError("Please fill all the required fields.");
      return;
    }

    try {
      const res = await axios.post(
        "https://seedorabackend.vercel.app/bookcall/createbookcall",
        formData
      );
      if (res.data && res.data.msg) {
        setSuccess(res.data.msg);
        setFormData({
          name: "",
          email: "",
          service: "",
          datetime: "",
          message: "",
        });
      } else {
        setSuccess("Your call has been booked successfully!");
        setFormData({
          name: "",
          email: "",
          service: "",
          datetime: "",
          message: "",
        });
      }
    } catch (err) {
      setError("Failed to book the call. Please try again later.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <section className="min-h-screen bg-[#DAD7CD] flex items-center justify-center p-6">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#344E41]">
          Book a Quick 30-Min Call
        </h2>
        <p className="text-[#3A5A40]">
          Let’s uncover what’s possible for your brand. In this free session,
          we’ll talk about your business goals, challenges, and target customers
          then see how Seedora can help you grow with services like Web
          Development, SEO, Google Ads, Facebook Ads, or a full marketing plan
          that brings everything together.
        </p>
        <p className="text-sm text-[#588157]">
          No commitment, just a friendly conversation.
          <br />
          Limited slots per week.
        </p>

        {success && <p className="text-green-600 font-semibold">{success}</p>}
        {error && <p className="text-red-600 font-semibold">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588157]"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588157]"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588157]"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Web Development">Web Development</option>
            <option value="SEO">SEO Optimization</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Facebook Ads">Facebook Ads</option>
            <option value="Confused">I'm not sure yet</option>
          </select>

          <input
            type="datetime-local"
            name="datetime"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588157]"
            value={formData.datetime}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Optional message..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588157]"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#3A5A40] text-white py-3 rounded-lg font-semibold hover:bg-[#344E41] transition"
          >
            {loading ? "Booking...." : "Book Now"}
          </button>
        </form>
      </div>
    </section>
  );
}
