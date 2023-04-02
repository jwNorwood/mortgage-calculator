import React from "react";

const NavItem = ({ children, href = "#", active = false, mobile = false }) => {
    return (
        <a href={href} className={`${mobile ? "block" : ""} 
            px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`}
        >
            {children}
        </a>
    );
};

export default NavItem;