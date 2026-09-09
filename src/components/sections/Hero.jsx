import React, { useLayoutEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import gsap from "gsap";
import { hero, profile } from "../../content/identity";
import { publicUrl } from "../../utils/publicUrl";
import { prefersReducedMotion, registerMotion } from "../../utils/motion";
import StackField from "../visual/StackField";

const Hero = () => {
    const root = useRef(null);

    useLayoutEffect(() => {
        registerMotion();
        if (prefersReducedMotion()) return undefined;
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
            timeline
                .from("[data-hero='kicker']", { y: 16, opacity: 0, duration: 0.7 })
                .from(
                    "[data-hero='letter']",
                    { y: 80, opacity: 0, rotateX: 28, stagger: 0.035, duration: 0.85 },
                    "-=0.2"
                )
                .from("[data-hero='copy']", { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, "-=0.45")
                .from("[data-hero='portrait']", { scale: 0.92, opacity: 0, duration: 1.1 }, "-=0.7")
                .from("[data-hero='field']", { opacity: 0, duration: 1.2 }, "-=0.9");
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={root}
            className="relative flex min-h-screen w-full flex-col justify-center px-5 pb-20 pt-28 sm:px-8"
        >
            <div className="section-inner grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                <div>
                    <p data-hero="kicker" className="section-kicker">
                        {hero.kicker}
                    </p>
                    <h1 className="mt-5 font-display text-[22vw] leading-[0.78] tracking-tight sm:text-[7.5rem] lg:text-[8.75rem]">
                        <span className="name-sheen block">
                            {profile.firstName.split("").map((letter, index) => (
                                <span
                                    data-hero="letter"
                                    key={`${letter}-${index}`}
                                    className="inline-block"
                                >
                                    {letter}
                                </span>
                            ))}
                        </span>
                        <span className="mt-1 block italic text-paper/90">
                            {profile.lastName.split("").map((letter, index) => (
                                <span
                                    data-hero="letter"
                                    key={`${letter}-${index}`}
                                    className="inline-block"
                                >
                                    {letter}
                                </span>
                            ))}
                        </span>
                    </h1>
                    <p
                        data-hero="copy"
                        className="mt-7 max-w-xl text-lg text-paper sm:text-2xl"
                    >
                        {profile.title}
                    </p>
                    <p
                        data-hero="copy"
                        className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base"
                    >
                        Sole engineer at{" "}
                        <span className="font-semibold text-cyan">EasySales</span>.
                        Shopify and jewelry photography at{" "}
                        <span className="font-semibold text-cyan">
                            Saray Jewellery
                        </span>
                        .
                    </p>
                    <div data-hero="copy" className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href={profile.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-wa"
                        >
                            <ImWhatsapp size={18} />
                            WhatsApp · {profile.phone}
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-li"
                        >
                            <BsLinkedin size={16} />
                            LinkedIn
                        </a>
                    </div>
                    <div
                        data-hero="copy"
                        className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
                    >
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-2 transition hover:text-cyan"
                        >
                            <GoMail size={16} />
                            {profile.email}
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 transition hover:text-cyan"
                        >
                            <BsGithub size={16} />
                            GitHub/{profile.githubHandle}
                        </a>
                        <span className="inline-flex items-center gap-2">
                            <MdLocationOn size={16} />
                            {profile.location}
                        </span>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[420px]">
                    <div
                        data-hero="field"
                        className="pointer-events-none absolute -inset-10 opacity-80 lg:-right-16 lg:inset-auto lg:h-[420px] lg:w-[560px]"
                    >
                        <StackField />
                    </div>
                    <div data-hero="portrait" className="portrait-frame relative mx-auto w-[250px] sm:w-[300px] lg:w-[320px]">
                        <div className="absolute -inset-8 rounded-[2rem] bg-cyan/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy shadow-glow">
                            <img
                                src={publicUrl(profile.photo)}
                                alt={`${profile.name}, ${profile.title}`}
                                className="aspect-[4/5] w-full object-cover object-top"
                            />
                        </div>
                        <div className="surface-card absolute -bottom-5 -left-4 px-4 py-3 sm:-left-10">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                                Now
                            </p>
                            <p className="mt-1 text-sm font-semibold text-paper">
                                EasySales · Sole engineer
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-inner mt-16 overflow-hidden border-y border-white/10 py-4">
                <div className="marquee-track flex gap-10 whitespace-nowrap">
                    {[...hero.chips, ...hero.chips, ...hero.chips, ...hero.chips].map(
                        (chip, index) => (
                            <span
                                key={`${chip}-${index}`}
                                className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
                            >
                                {chip}
                                <span className="ml-10 text-cyan">/</span>
                            </span>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
