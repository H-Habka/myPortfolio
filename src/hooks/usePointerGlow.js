import { useEffect } from "react";

export function usePointerGlow() {
    useEffect(() => {
        const root = document.documentElement;
        const onMove = (event) => {
            root.style.setProperty("--mx", `${event.clientX}px`);
            root.style.setProperty("--my", `${event.clientY}px`);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, []);
}
