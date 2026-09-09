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
            className="site-chrome fixed left-1/2 z-50 flex max-w-[calc(100vw-1.25rem)] -translate-x-1/2 items-center gap-0.5 overflow-x-auto rounded-full border px-1.5 py-1.5 shadow-card backdrop-blur-xl sm:gap-1 sm:px-2 sm:py-2"
            style={{
                bottom: "max(1.25rem, env(safe-area-inset-bottom))",
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
                        aria-current={isActive ? "location" : undefined}
                        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                            isActive
                                ? "bg-cyan/15 text-cyan"
                                : "text-muted hover:bg-white/5 hover:text-paper"
                        }`}
                    >
                        <Icon size={18} aria-hidden />
                    </a>
                );
            })}
        </nav>
    );
};

export default SectionNav;
