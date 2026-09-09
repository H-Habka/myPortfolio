import { useEffect } from "react";
import { prefersReducedMotion } from "../utils/motion";

export function usePointerGlow() {
    useEffect(() => {
        if (prefersReducedMotion()) return undefined;
        if (window.matchMedia("(pointer: coarse)").matches) return undefined;

        const root = document.documentElement;
        const onMove = (event) => {
            root.style.setProperty("--mx", `${event.clientX}px`);
            root.style.setProperty("--my", `${event.clientY}px`);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, []);
}
