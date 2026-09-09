import React from "react";
import { GoMail } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { profile } from "../../content/identity";

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
        value: "github.com/H-Habka",
        href: profile.github,
    },
    {
        icon: MdLocationOn,
        label: "Location",
        value: profile.location,
        href: null,
    },
];

const ContactSection = () => {
    return (
        <section id="Contact" className="section-wrap pb-36">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading mb-10">
                    <div className="section-kicker">Start a conversation</div>
                    <div className="section-title">Contact</div>
                    <div className="section-rule" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <a
                        data-aos="fade-up"
                        href={profile.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-card group flex flex-col justify-between p-8 transition duration-300 hover:-translate-y-1"
                    >
                        <ImWhatsapp className="text-wa" size={28} />
                        <div className="mt-10">
                            <p className="font-display text-3xl font-semibold text-five">
                                WhatsApp
                            </p>
                            <p className="mt-2 text-muted">{profile.phone}</p>
                        </div>
                    </a>
                    <a
                        data-aos="fade-up"
                        data-aos-delay="80"
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="surface-card group flex flex-col justify-between p-8 transition duration-300 hover:-translate-y-1"
                    >
                        <BsLinkedin className="text-li" size={28} />
                        <div className="mt-10">
                            <p className="font-display text-3xl font-semibold text-five">
                                LinkedIn
                            </p>
                            <p className="mt-2 text-muted">
                                hossien-habka-b67069229
                            </p>
                        </div>
                    </a>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {secondary.map((channel) => {
                        const Icon = channel.icon;
                        const inner = (
                            <>
                                <Icon className="text-three" size={18} />
                                <div>
                                    <div className="text-xs uppercase tracking-[0.16em] text-muted">
                                        {channel.label}
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-five">
                                        {channel.value}
                                    </div>
                                </div>
                            </>
                        );
                        const className =
                            "surface-card flex items-center gap-3 px-5 py-5";
                        return channel.href ? (
                            <a
                                key={channel.label}
                                data-aos="fade-up"
                                href={channel.href}
                                target={
                                    channel.href.startsWith("mailto:")
                                        ? undefined
                                        : "_blank"
                                }
                                rel="noreferrer"
                                className={`${className} transition hover:border-three/40`}
                            >
                                {inner}
                            </a>
                        ) : (
                            <div
                                key={channel.label}
                                data-aos="fade-up"
                                className={className}
                            >
                                {inner}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
