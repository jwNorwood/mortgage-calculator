import React from "react";
import NavItem from "./NavItem";
import navLinks from "../../utils/navLinks";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="border-b border-gray-700">
        <div className="flex items-center justify-between h-16 px-4 sm:px-0">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/images/avatar.png" alt="Jacob Norwood" width={40} height={40} className="w-8 h-8 rounded-full"/>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                {navLinks.map((item) => (
                  <NavItem href={item.href} key={item.href}>{item.name}</NavItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
