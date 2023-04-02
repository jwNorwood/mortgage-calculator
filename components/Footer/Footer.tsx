import React from "react";
import navLinks from "../../utils/navLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-800 hover:text-gray-500">
              {item.name}
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-xs leading-5 text-center text-gray-800">
            &copy; {year}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
