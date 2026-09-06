import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BiBookOpen, BiMessageSquareDetail } from "react-icons/bi";
import { FaServicestack } from "react-icons/fa";
import FloatingNavLinkItem from "./FloatingNavLinkItem";

const links = [
    { href: "#home", icon: <AiOutlineHome size={20} /> },
    { href: "#about", icon: <BsPerson size={20} /> },
    { href: "#Experience", icon: <BiBookOpen size={20} /> },
    { href: "#RecentWork", icon: <FaServicestack size={20} /> },
    { href: "#Contact", icon: <BiMessageSquareDetail size={20} /> },
];

const FloatingNavLink = () => {
    const [active, setActive] = useState("#home");

    useEffect(() => {
        const ids = links.map((link) => link.href.slice(1));
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio
                    );
                if (visible[0]) {
                    setActive("#" + visible[0].target.id);
                }
            },
            {
                rootMargin: "-35% 0px -45% 0px",
                threshold: [0.15, 0.35, 0.6],
            }
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <nav
            aria-label="Section navigation"
            className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[#0c100e]/70 px-2 py-2 shadow-card backdrop-blur-md"
        >
            {links.map((link) => (
                <FloatingNavLinkItem
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    active={active === link.href}
                />
            ))}
        </nav>
    );
};

export default FloatingNavLink;
