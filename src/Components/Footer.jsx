import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!email) return setError("Please enter your email.");

    try {
      const res = await axios.post(
        "https://seedorabackend.vercel.app/subscribe/createsubscription",
        { email }
      );
      if (res.data && res.data.msg) {
        setSuccess(res.data.msg);
        setEmail("");
      }
    } catch (err) {
      setError("Failed to subscribe." + err);
    }
  };

  return (
    <footer className="bg-[#DAD7CD] text-[#344E41] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-extrabold text-[#344E41] mb-6">
              Seedora Agency
            </h3>
            <p className="text-[#2D2D2D] text-lg leading-relaxed">
              Where creativity flows and brands grow. We specialize in bold
              ideas, sharp strategy, and real results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-[#344E41] mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-[#2D2D2D] text-base">
              <li>
                <Link to="/web-development" className="hover:text-[#588157]">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/seo" className="hover:text-[#588157]">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="hover:text-[#588157]">
                  Marketing Campaigns
                </Link>
              </li>
              <li>
                <Link to="/facebook-ads" className="hover:text-[#588157]">
                  Facebook Ads
                </Link>
              </li>
              <li>
                <Link to="/storytelling" className="hover:text-[#588157]">
                  Storytelling
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-semibold text-[#344E41] mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-[#2D2D2D] text-base">
              <li>
                <Link to="/about" className="hover:text-[#588157]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#588157]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#588157]">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#588157]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-[#344E41] mb-6">
              Join Our Newsletter
            </h4>
            <p className="text-[#2D2D2D] mb-4 text-base">
              Get fresh ideas and marketing tips straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              {success && <p className="text-green-600 text-sm">{success}</p>}
              {error && <p className="text-red-600 text-sm">{error}</p>}

              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full p-3 rounded-l-md border border-[#A3B18A] bg-white text-[#344E41] placeholder-[#6C757D] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#344E41] hover:bg-[#3E5C50] text-white font-semibold px-4 py-3 rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[#A3B18A]">
          <p className="text-sm text-[#6C757D]">
            &copy; {new Date().getFullYear()} Seedora Agency. All rights
            reserved.
          </p>
          <div className="flex space-x-5 mt-6 md:mt-0">
            <Link
              to="https://www.facebook.com/profile.php?id=61576215620449"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#344E41] hover:text-[#588157] transition"
            >
              <FaFacebookF size={20} />
            </Link>
            {/* <Link to="#" className="text-[#344E41] hover:text-[#588157] transition">
              <FaTwitter size={20} />
            </Link> */}
            <Link
              to="https://www.instagram.com/seedorasolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#344E41] hover:text-[#588157] transition"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="https://www.linkedin.com/company/seedora/"
              className="text-[#344E41] hover:text-[#588157] transition"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
