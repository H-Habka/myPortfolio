import React, { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { nav, profile } from "../../content/identity";

const SiteHeader = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition duration-500 ${
                scrolled
                    ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <div className="section-inner flex items-center justify-between gap-4 py-3.5">
                <a
                    href="#home"
                    className="font-mono text-xs font-medium uppercase tracking-brand text-paper"
                >
                    HH
                </a>
                <nav
                    aria-label="Primary"
                    className="hidden items-center gap-7 lg:flex"
                >
                    {nav
                        .filter((item) => item.id !== "home")
                        .map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition hover:text-cyan"
                            >
                                {item.label}
                            </a>
                        ))}
                </nav>
                <div className="flex items-center gap-2">
                    <a
                        href={profile.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-wa px-3 py-2 text-xs sm:px-4 sm:text-sm"
                    >
                        <ImWhatsapp size={15} />
                        WhatsApp
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-li px-3 py-2 text-xs sm:px-4 sm:text-sm"
                    >
                        <BsLinkedin size={14} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
