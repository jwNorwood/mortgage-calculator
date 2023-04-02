import React from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  return (
    <nav className="bg-gray-800">
     <Menu />
     <MobileMenu />
    </nav>
  );
};

export default Nav;
