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
    TopBar,
    CompanyBand,
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
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,90,0.16),_transparent_52%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(37,211,102,0.06),_transparent_40%)]" />
                <div
                    className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
                    style={{ backgroundImage: "url(" + grain + ")" }}
                />
            </div>
            <TopBar />
            <FloatingNavLink />
            <HeaderSection />
            <CompanyBand />
            <AboutMeSection />
            <ExperienceSection />
            <RecentWorkSection />
            <ContactSection />
        </div>
    );
}

export default App;
