import React from "react";

const Ambient = () => {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-ink" />
            <div className="hex-veil absolute inset-0" />
            <div className="grid-veil absolute inset-0" />
            <div className="spotlight absolute inset-0" />
            <div className="orb absolute -left-24 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-cyan/20 blur-[120px]" style={{ animation: "drift 18s ease-in-out infinite" }} />
            <div className="orb absolute -right-16 top-[18%] h-[28rem] w-[28rem] rounded-full bg-signal/25 blur-[110px]" style={{ animation: "drift 22s ease-in-out infinite reverse" }} />
            <div className="orb absolute bottom-[-10%] left-1/3 h-[32rem] w-[32rem] rounded-full bg-violet/15 blur-[130px]" style={{ animation: "drift 26s ease-in-out infinite" }} />
            <div className="noise absolute inset-0 mix-blend-overlay" />
        </div>
    );
};

export default Ambient;
