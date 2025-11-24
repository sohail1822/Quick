import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-[#2a2a2a] text-gray-300">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 border-b border-gray-800 flex flex-col md:flex-row justify-between gap-12">
        <div className="md:max-w-sm">
          <img className="h-9" src={assets.logo} alt="Logo" />
          <p className="mt-6 text-sm leading-relaxed text-gray-300">
            Experience the future of productivity with{" "}
            <span className="text-white font-medium">QuickAI</span>—your
            all-in-one AI assistant for writing, designing, and coding.
            <br /> Empower your creativity and efficiency today.
          </p>
        </div>


        <div className="flex-1 flex flex-col sm:flex-row justify-start md:justify-end gap-12">
          <div>
            <h2 className="font-semibold mb-5 text-white tracking-wide">
              Company
            </h2>
            <ul className="text-sm space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm">
            <h2 className="font-semibold mb-5 text-white tracking-wide">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Get the latest news, articles, and resources delivered weekly.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <input
                className="border border-gray-700 bg-transparent placeholder-gray-500 focus:ring-2 focus:ring-primary/70 focus:outline-none w-full h-10 rounded-lg px-3 text-sm"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-primary hover:bg-primary/90 transition-colors duration-200 w-28 h-10 text-white font-medium rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="py-5 text-center text-xs md:text-sm text-gray-300 border-t border-gray-800">
        © 2025 Sohail Shaikh. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
