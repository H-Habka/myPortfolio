import AOS from "aos";
import "aos/dist/aos.css";
import background from "./images/a1.png";

import {
    HeaderSection,
    AboutMeSection,
    ContactSection,
    ExperienceSection,
    FloatingNavLink,
    RecentWorkSection,
} from "./components";

function App() {
    AOS.init({
        easing: "ease-in-out",
    });
    return (
        <div
            className="w-screen overflow-x-hidden bg-one"
            style={{ backgroundImage: "url(" + background + ")" }}
        >
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
