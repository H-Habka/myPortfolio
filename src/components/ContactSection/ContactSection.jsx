import React from "react";
import { GoMail } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { profile } from "../../content/identity";

const channels = [
    {
        icon: GoMail,
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
    },
    {
        icon: ImWhatsapp,
        label: "WhatsApp",
        value: profile.phone,
        href: profile.whatsapp,
    },
    {
        icon: BsLinkedin,
        label: "LinkedIn",
        value: "hossien-habka",
        href: profile.linkedin,
    },
    {
        icon: BsGithub,
        label: "GitHub",
        value: "H-Habka",
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
    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="Contact" className="section-wrap pb-36">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading mb-10">
                    <div className="section-kicker">Say hello</div>
                    <div className="section-title">Contact</div>
                    <div className="section-rule" />
                </div>
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.4fr] md:gap-10">
                    <div className="flex flex-col gap-4">
                        {channels.map((channel) => {
                            const Icon = channel.icon;
                            return (
                                <div
                                    key={channel.label}
                                    data-aos="fade-up"
                                    className="surface-card flex flex-col items-center gap-2 px-4 py-6 text-center transition duration-300 hover:border-three/40"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-two/15 text-three">
                                        <Icon size={20} />
                                    </div>
                                    <div className="font-semibold text-five">
                                        {channel.label}
                                    </div>
                                    <div className="text-sm text-muted">
                                        {channel.value}
                                    </div>
                                    {channel.href ? (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={channel.href}
                                            className="text-sm font-semibold text-four transition duration-300 hover:text-three"
                                        >
                                            Open
                                        </a>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        <input
                            data-aos="fade-up"
                            required
                            name="name"
                            className="field-input"
                            type="text"
                            placeholder="Your Full Name"
                        />
                        <input
                            data-aos="fade-up"
                            required
                            name="email"
                            className="field-input"
                            type="email"
                            placeholder="Your Email"
                        />
                        <textarea
                            data-aos="fade-up"
                            required
                            name="message"
                            className="field-input min-h-[220px] resize-y"
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                        ></textarea>
                        <button
                            data-aos="fade-up"
                            type="submit"
                            className="btn-primary w-fit"
                        >
                            Email me
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
