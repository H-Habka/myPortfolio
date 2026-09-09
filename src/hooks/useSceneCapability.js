import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../utils/motion";

function hasWebGL() {
    try {
        const canvas = document.createElement("canvas");
        return Boolean(
            canvas.getContext("webgl2") ||
                canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl")
        );
    } catch (error) {
        return false;
    }
}

function isCoarseDevice() {
    return (
        window.matchMedia("(max-width: 1023px)").matches ||
        window.matchMedia("(pointer: coarse)").matches
    );
}

export function useSceneCapability() {
    const [state, setState] = useState({
        ready: false,
        enabled: false,
        mobile: false,
    });

    useEffect(() => {
        const measure = () => {
            const saveData = Boolean(navigator.connection?.saveData);
            const reduced = prefersReducedMotion();
            setState({
                ready: true,
                enabled: hasWebGL() && !reduced && !saveData,
                mobile: isCoarseDevice(),
            });
        };

        measure();

        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const width = window.matchMedia("(max-width: 1023px)");
        motion.addEventListener("change", measure);
        width.addEventListener("change", measure);
        return () => {
            motion.removeEventListener("change", measure);
            width.removeEventListener("change", measure);
        };
    }, []);

    return state;
}
