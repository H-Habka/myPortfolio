import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion, registerMotion } from "../utils/motion";
import { refreshScroll } from "../utils/refreshScroll";

export function useSmoothScroll() {
    useEffect(() => {
        registerMotion();

        const onLoad = () => refreshScroll();
        window.addEventListener("load", onLoad);
        document.fonts?.ready?.then(refreshScroll);

        let resizeTimer = 0;
        const onResize = () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(refreshScroll, 180);
        };
        window.addEventListener("resize", onResize);

        const lateA = window.setTimeout(refreshScroll, 400);
        const lateB = window.setTimeout(refreshScroll, 1400);

        if (prefersReducedMotion()) {
            return () => {
                window.removeEventListener("load", onLoad);
                window.removeEventListener("resize", onResize);
                window.clearTimeout(lateA);
                window.clearTimeout(lateB);
                window.clearTimeout(resizeTimer);
            };
        }

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
            const offset = hash === "#home" || hash === "#main" ? 0 : -80;
            lenis.scrollTo(target, { offset, duration: 1.2 });
        };

        document.addEventListener("click", onClick);

        return () => {
            document.removeEventListener("click", onClick);
            window.removeEventListener("load", onLoad);
            window.removeEventListener("resize", onResize);
            window.clearTimeout(lateA);
            window.clearTimeout(lateB);
            window.clearTimeout(resizeTimer);
            gsap.ticker.remove(ticker);
            lenis.destroy();
        };
    }, []);
}
