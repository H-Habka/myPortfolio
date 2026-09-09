import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";
import { profile } from "../content/identity";
import { publicUrl } from "../utils/publicUrl";

const HeaderSection = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full flex-col justify-center px-5 sm:px-8 pt-28 pb-24"
        >
            <div className="section-inner grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                <div className="flex flex-col items-start">
                    <p
                        data-aos="fade-up"
                        className="section-kicker"
                    >
                        {profile.location}
                    </p>
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="120"
                        className="font-display mt-4 text-6xl font-extrabold leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl"
                    >
                        <span className="gold-sheen block">
                            {profile.firstName}
                        </span>
                        <span className="block text-five">
                            {profile.lastName}
                        </span>
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="mt-6 max-w-xl text-lg text-four sm:text-xl"
                    >
                        {profile.title}
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="260"
                        className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base"
                    >
                        Sole engineer at{" "}
                        <span className="font-semibold text-three">
                            EasySales
                        </span>
                        . Shopify and jewelry photography at{" "}
                        <span className="font-semibold text-three">
                            Saray Jewellery
                        </span>
                        .
                    </p>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="320"
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <a
                            href={profile.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary gap-2"
                        >
                            <ImWhatsapp size={18} />
                            WhatsApp · {profile.phone}
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-linkedin gap-2"
                        >
                            <BsLinkedin size={16} />
                            LinkedIn
                        </a>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted"
                    >
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 transition hover:text-three"
                        >
                            <GoMail size={16} />
                            {profile.email}
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 transition hover:text-three"
                        >
                            <BsGithub size={16} />
                            GitHub
                        </a>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="180"
                    className="relative mx-auto w-[260px] sm:w-[320px] lg:w-[380px]"
                >
                    <div className="absolute -inset-8 rounded-full bg-two/20 blur-3xl" />
                    <div className="portrait-ring absolute -inset-2 rounded-full opacity-80" />
                    <div className="relative overflow-hidden rounded-full border border-white/10 bg-one shadow-glow">
                        <img
                            src={publicUrl(profile.photo)}
                            alt={`${profile.name}, ${profile.title}`}
                            className="relative aspect-[4/5] w-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
