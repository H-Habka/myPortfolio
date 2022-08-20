import React from "react";

const FloatingNavLinkItem = ({href,icon}) => {
    return (
        <a
            href={href}
            className="hover:bg-gray-100 text-four hover:text-two rounded-full p-1"
        >
            {icon}
        </a>
    );
};

export default FloatingNavLinkItem;
