import { useEffect } from "react";

export function useScrollProgress(barRef) {
    useEffect(() => {
        const node = barRef?.current;
        if (!node) return undefined;

        let frame = 0;
        const apply = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? window.scrollY / max : 0;
            node.style.transform = `scaleX(${progress})`;
        };
        const onScroll = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(apply);
        };

        apply();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, [barRef]);
}
