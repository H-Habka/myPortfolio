import React from "react";

const FloatingNavLinkItem = ({ href, icon, active }) => {
    return (
        <a
            href={href}
            className={`rounded-full p-2.5 transition duration-300 ${
                active
                    ? "bg-two/25 text-four"
                    : "text-muted hover:bg-white/10 hover:text-five"
            }`}
        >
            {icon}
        </a>
    );
};

export default FloatingNavLinkItem;
