import React from "react";
import { GoMail } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";

const channels = [
    {
        icon: GoMail,
        label: "Email",
        value: "hossien.habka1@gmail.com",
        href: "mailto:hossien.habka1@gmail.com",
    },
    {
        icon: RiMessengerLine,
        label: "Messenger",
        value: "in Facebook",
        href: "http://m.me/100021919424493",
    },
    {
        icon: ImWhatsapp,
        label: "Whatsapp",
        value: "+971588930130",
        href: "https://api.whatsapp.com/send?phone=%2b971588930130",
    },
];

const ContactSection = () => {
    return (
        <section id="Contact" className="section-wrap pb-36">
            <div className="section-inner grid gap-8 md:grid-cols-[0.9fr_1.4fr] md:gap-10">
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
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={channel.href}
                                    className="text-sm font-semibold text-four transition duration-300 hover:text-three"
                                >
                                    Send Message
                                </a>
                            </div>
                        );
                    })}
                </div>
                <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("sorry try again later !!");
                    }}
                >
                    <input
                        data-aos="fade-up"
                        required
                        className="field-input"
                        type="text"
                        placeholder="Your Full Name"
                    />
                    <input
                        data-aos="fade-up"
                        required
                        className="field-input"
                        type="email"
                        placeholder="Your Email"
                    />
                    <textarea
                        data-aos="fade-up"
                        required
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
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
