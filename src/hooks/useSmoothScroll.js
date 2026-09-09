import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion, registerMotion } from "../utils/motion";

export function useSmoothScroll() {
    useEffect(() => {
        registerMotion();
        if (prefersReducedMotion()) return undefined;

        const lenis = new Lenis({
            duration: 1.12,
            wheelMultiplier: 0.88,
            touchMultiplier: 1,
            smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        const ticker = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);

        const onClick = (event) => {
            const anchor = event.target.closest('a[href^="#"]');
            if (!anchor) return;
            const hash = anchor.getAttribute("href");
            if (!hash || hash === "#") return;
            const target = document.querySelector(hash);
            if (!target) return;
            event.preventDefault();
            lenis.scrollTo(target, { offset: -80, duration: 1.2 });
        };

        document.addEventListener("click", onClick);
        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad);

        return () => {
            document.removeEventListener("click", onClick);
            window.removeEventListener("load", onLoad);
            gsap.ticker.remove(ticker);
            lenis.destroy();
        };
    }, []);
}
