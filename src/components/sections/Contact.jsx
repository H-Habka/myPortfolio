import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { profile } from "../../content/identity";
import SectionHeading from "../ui/SectionHeading";

const secondary = [
    {
        icon: GoMail,
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
    },
    {
        icon: BsGithub,
        label: "GitHub",
        value: `github.com/${profile.githubHandle}`,
        href: profile.github,
    },
    {
        icon: MdLocationOn,
        label: "Location",
        value: profile.location,
        href: null,
    },
];

const Contact = () => {
    return (
        <section id="contact" className="section-wrap pb-20">
            <div className="section-inner">
                <SectionHeading index={5} kicker="Contact" title="Let’s build the next one.">
                    WhatsApp and LinkedIn first. Email, GitHub, and Al Ain / Abu Dhabi if you prefer another path.
                </SectionHeading>

                <div className="mt-16 grid gap-4 md:grid-cols-2">
                    <a
                        data-reveal
                        href={profile.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-card group relative overflow-hidden p-8 transition duration-500 hover:-translate-y-1 sm:p-10"
                    >
                        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-wa/20 blur-2xl transition group-hover:bg-wa/30" />
                        <ImWhatsapp className="text-wa" size={32} />
                        <p className="mt-16 font-display text-4xl text-paper sm:text-5xl">
                            WhatsApp
                        </p>
                        <p className="mt-3 text-muted">{profile.phone}</p>
                    </a>
                    <a
                        data-reveal
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-card group relative overflow-hidden p-8 transition duration-500 hover:-translate-y-1 sm:p-10"
                    >
                        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-li/20 blur-2xl transition group-hover:bg-li/30" />
                        <BsLinkedin className="text-li" size={30} />
                        <p className="mt-16 font-display text-4xl text-paper sm:text-5xl">
                            LinkedIn
                        </p>
                        <p className="mt-3 text-muted">hossien-habka-b67069229</p>
                    </a>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {secondary.map((channel) => {
                        const Icon = channel.icon;
                        const inner = (
                            <>
                                <Icon className="text-cyan" size={18} />
                                <div>
                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                                        {channel.label}
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-paper">
                                        {channel.value}
                                    </div>
                                </div>
                            </>
                        );
                        const className = "surface-card flex items-center gap-3 px-5 py-5";
                        return channel.href ? (
                            <a
                                key={channel.label}
                                data-reveal
                                href={channel.href}
                                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noreferrer"
                                className={`${className} transition hover:border-cyan/40`}
                            >
                                {inner}
                            </a>
                        ) : (
                            <div key={channel.label} data-reveal className={className}>
                                {inner}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Contact;
