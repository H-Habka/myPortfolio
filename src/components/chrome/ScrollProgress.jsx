import React from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

const ScrollProgress = () => {
    const progress = useScrollProgress();

    return (
        <div
            aria-hidden
            className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent"
        >
            <div
                className="h-full origin-left bg-gradient-to-r from-cyan via-signal to-violet"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
};

export default ScrollProgress;
