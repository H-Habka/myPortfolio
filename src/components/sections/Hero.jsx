import React, { useLayoutEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import gsap from "gsap";
import { hero, profile } from "../../content/identity";
import { prefersReducedMotion, registerMotion } from "../../utils/motion";
import Portrait from "../ui/Portrait";
import Signature3D from "../visual/Signature3D";

const Hero = () => {
    const root = useRef(null);

    useLayoutEffect(() => {
        registerMotion();
        if (prefersReducedMotion()) return undefined;
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
            timeline
                .from("[data-hero='kicker']", { y: 16, opacity: 0, duration: 0.7 })
                .from("[data-hero='name']", { y: 48, opacity: 0, duration: 0.95, stagger: 0.08 }, "-=0.15")
                .from("[data-hero='copy']", { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, "-=0.45")
                .from("[data-hero='portrait']", { scale: 0.92, opacity: 0, duration: 1.1 }, "-=0.7")
                .from("[data-hero='field']", { opacity: 0, duration: 1.2 }, "-=0.9");

            gsap.to("[data-hero='field']", {
                opacity: 0.18,
                y: -36,
                ease: "none",
                scrollTrigger: {
                    trigger: "#home",
                    start: "center top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, root);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={root}
            className="relative flex min-h-screen w-full flex-col justify-center overflow-x-clip px-5 pb-32 pt-28 sm:px-8"
        >
            <div className="section-inner grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                <div className="relative z-20 flex min-h-[calc(100svh-9rem)] flex-col justify-center lg:min-h-0">
                    <p data-hero="kicker" className="section-kicker">
                        {hero.kicker}
                    </p>
                    <h1 className="mt-5 font-display text-[clamp(3.15rem,14vw,8.75rem)] leading-[0.8] tracking-tight">
                        <span data-hero="name" className="name-sheen block">
                            {profile.firstName}
                        </span>
                        <span data-hero="name" className="mt-1 block italic text-paper">
                            {profile.lastName}
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
                    <div data-hero="copy" className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                        <a
                            href={profile.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`WhatsApp ${profile.name} at ${profile.phone}`}
                            className="btn-wa tap-target w-full sm:w-auto"
                        >
                            <ImWhatsapp size={18} aria-hidden />
                            WhatsApp · {profile.phone}
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn profile of ${profile.name}`}
                            className="btn-li tap-target w-full sm:w-auto"
                        >
                            <BsLinkedin size={16} aria-hidden />
                            LinkedIn
                        </a>
                    </div>
                    <div
                        data-hero="copy"
                        className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
                    >
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex min-h-11 items-center gap-2 transition hover:text-cyan"
                        >
                            <GoMail size={16} aria-hidden />
                            {profile.email}
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-2 transition hover:text-cyan"
                        >
                            <BsGithub size={16} aria-hidden />
                            GitHub/{profile.githubHandle}
                        </a>
                        <span className="inline-flex items-center gap-2">
                            <MdLocationOn size={16} aria-hidden />
                            {profile.location}
                        </span>
                    </div>
                </div>

                <div className="relative z-0 mx-auto w-full max-w-[420px] overflow-x-clip lg:max-w-none lg:overflow-visible">
                    <div
                        data-hero="field"
                        aria-hidden
                        className="signature-stage pointer-events-none absolute -inset-[18%] z-0 min-h-[320px] opacity-90 sm:min-h-[380px] lg:-inset-y-24 lg:-left-28 lg:-right-36"
                    >
                        <Signature3D />
                    </div>
                    <div data-hero="portrait" className="portrait-frame relative z-10 mx-auto mb-16 w-[250px] sm:mb-0 sm:w-[300px] lg:w-[320px]">
                        <div className="absolute -inset-8 rounded-[2rem] bg-cyan/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy shadow-glow">
                            <Portrait
                                priority
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

            <div className="section-inner mt-16 overflow-hidden border-y border-white/10 py-4" aria-hidden>
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
