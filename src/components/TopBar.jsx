import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { profile } from "../content/identity";

const TopBar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#070709]/75 backdrop-blur-md">
            <div className="section-inner flex items-center justify-between gap-3 py-3">
                <a
                    href="#home"
                    className="font-display text-sm font-semibold tracking-brand text-five uppercase"
                >
                    HH
                </a>
                <p className="hidden text-xs text-muted sm:block">
                    {profile.location}
                </p>
                <div className="flex items-center gap-2">
                    <a
                        href={profile.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary gap-2 px-3 py-2 text-xs sm:px-4 sm:text-sm"
                    >
                        <ImWhatsapp size={15} />
                        WhatsApp
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-linkedin gap-2 px-3 py-2 text-xs sm:px-4 sm:text-sm"
                    >
                        <BsLinkedin size={14} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
