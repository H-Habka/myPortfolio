import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerMotion } from "./motion";

export function refreshScroll() {
    registerMotion();
    requestAnimationFrame(() => {
        ScrollTrigger.refresh();
    });
}
