import React from "react";

const FloatingNavLinkItem = ({ href, icon, active, label }) => {
    return (
        <a
            href={href}
            aria-label={label}
            className={`rounded-full p-2.5 transition duration-300 ${
                active
                    ? "bg-two/20 text-three"
                    : "text-muted hover:bg-white/10 hover:text-five"
            }`}
        >
            {icon}
        </a>
    );
};

export default FloatingNavLinkItem;
