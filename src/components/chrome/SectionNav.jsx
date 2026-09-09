import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookOpen, BiCodeAlt, BiMessageSquareDetail } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";
import { nav } from "../../content/identity";
import { useActiveSection } from "../../hooks/useActiveSection";

const icons = {
    home: AiOutlineHome,
    about: BsPerson,
    experience: BiBookOpen,
    skills: BiCodeAlt,
    projects: HiOutlineViewGrid,
    contact: BiMessageSquareDetail,
};

const ids = nav.map((item) => item.id);

const SectionNav = () => {
    const active = useActiveSection(ids);

    return (
        <nav
            aria-label="Section navigation"
            className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border px-2 py-2 shadow-card backdrop-blur-xl"
            style={{
                borderColor: "rgba(148, 197, 232, 0.16)",
                background: "rgba(7, 13, 20, 0.72)",
            }}
        >
            {nav.map((item) => {
                const Icon = icons[item.id];
                const isActive = active === item.id;
                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        aria-label={item.label}
                        aria-current={isActive ? "true" : undefined}
                        className={`rounded-full p-2.5 transition duration-300 ${
                            isActive
                                ? "bg-cyan/15 text-cyan"
                                : "text-muted hover:bg-white/5 hover:text-paper"
                        }`}
                    >
                        <Icon size={18} />
                    </a>
                );
            })}
        </nav>
    );
};

export default SectionNav;
