import { useLayoutEffect } from "react";
import gsap from "gsap";
import Ambient from "./components/chrome/Ambient";
import ScrollProgress from "./components/chrome/ScrollProgress";
import SiteHeader from "./components/chrome/SiteHeader";
import SectionNav from "./components/chrome/SectionNav";
import SiteFooter from "./components/chrome/SiteFooter";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { usePointerGlow } from "./hooks/usePointerGlow";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { prefersReducedMotion, registerMotion } from "./utils/motion";

function App() {
    useSmoothScroll();
    usePointerGlow();

    useLayoutEffect(() => {
        registerMotion();
        if (prefersReducedMotion()) return undefined;

        const ctx = gsap.context(() => {
            gsap.utils.toArray("[data-reveal]").forEach((element) => {
                gsap.from(element, {
                    y: 36,
                    opacity: 0,
                    duration: 1.05,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 88%",
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-ink text-paper">
            <a
                href="#home"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:text-ink"
            >
                Skip to content
            </a>
            <Ambient />
            <ScrollProgress />
            <SiteHeader />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <SiteFooter />
            <SectionNav />
        </div>
    );
}

export default App;
