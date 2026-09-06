import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import grain from "./images/a1.png";

import {
    HeaderSection,
    AboutMeSection,
    ContactSection,
    ExperienceSection,
    FloatingNavLink,
    RecentWorkSection,
} from "./components";

function App() {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            duration: 700,
            once: true,
            offset: 60,
        });
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-one text-five">
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 -z-10"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(109,154,103,0.16),_transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(143,184,137,0.08),_transparent_45%)]" />
                <div
                    className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                    style={{ backgroundImage: "url(" + grain + ")" }}
                />
            </div>
            <FloatingNavLink />
            <HeaderSection />
            <AboutMeSection />
            <ExperienceSection />
            <RecentWorkSection />
            <ContactSection />
        </div>
    );
}

export default App;
