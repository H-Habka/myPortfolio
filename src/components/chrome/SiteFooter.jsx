import React from "react";
import { profile } from "../../content/identity";

const SiteFooter = () => {
    return (
        <footer className="relative px-5 pb-28 pt-10 sm:px-8">
            <div className="section-inner flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[11px] uppercase tracking-brand text-muted">
                    {profile.name}
                </p>
                <p className="text-sm text-muted">{profile.location}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default SiteFooter;
