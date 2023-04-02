import React from "react";
import NavItem from "./NavItem";
import navLinks from "../../utils/navLinks";

const MobileMenu = () => {
  return (
    <div className="border-b border-gray-700 md:hidden" id="mobile-menu">
      <div className="px-2 py-3 space-y-1 sm:px-3">
        {navLinks.map((item) => (
          <NavItem href={item.href} mobile={true} key={item.href}>{item.name}</NavItem>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
