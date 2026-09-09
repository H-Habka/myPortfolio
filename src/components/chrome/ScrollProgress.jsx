import React, { useRef } from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

const ScrollProgress = () => {
    const bar = useRef(null);
    useScrollProgress(bar);

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent"
        >
            <div
                ref={bar}
                className="h-full origin-left bg-gradient-to-r from-cyan via-signal to-violet"
                style={{ transform: "scaleX(0)" }}
            />
        </div>
    );
};

export default ScrollProgress;
