import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { work } from "../../content/identity";
import { prefersReducedMotion, registerMotion } from "../../utils/motion";
import SectionHeading from "../ui/SectionHeading";

const featured = work.filter((item) => item.featured);
const rest = work.filter((item) => !item.featured);

const StackChips = ({ items }) => {
    if (!items?.length) return null;
    return (
        <ul className="relative mt-6 flex flex-wrap gap-2">
            {items.map((chip) => (
                <li
                    key={chip}
                    className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/80"
                    style={{
                        borderColor: "rgba(148, 197, 232, 0.18)",
                        background: "rgba(255,255,255,0.03)",
                    }}
                >
                    {chip}
                </li>
            ))}
        </ul>
    );
};

const Highlights = ({ items }) => {
    if (!items?.length) return null;
    return (
        <ol className="relative mt-6 space-y-3">
            {items.map((line, index) => (
                <li key={line} className="flex gap-3 text-sm leading-7 text-paper/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    <span>
                        <span className="mr-2 font-mono text-[10px] text-muted">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        {line}
                    </span>
                </li>
            ))}
        </ol>
    );
};

const Experience = () => {
    const spine = useRef(null);

    useLayoutEffect(() => {
        registerMotion();
        if (prefersReducedMotion() || !spine.current) return undefined;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                spine.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#experience",
                        start: "top 70%",
                        end: "bottom 40%",
                        scrub: true,
                    },
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="section-wrap">
            <div className="section-inner">
                <SectionHeading
                    index={2}
                    kicker="Experience"
                    title="Companies, then the craft."
                >
                    EasySales and Saray Jewellery first — full chapters. OSOSS, a freelance
                    booking site, CHI, and ORESYS (including trainer work) follow on the spine.
                </SectionHeading>

                <div className="mt-16 grid gap-5 lg:grid-cols-2">
                    {featured.map((item, index) => (
                        <article
                            key={item.id}
                            data-reveal
                            className="surface-card relative overflow-hidden p-8"
                        >
                            <p className="pointer-events-none absolute -right-2 -top-6 font-display text-[5.5rem] leading-none text-white/[0.04]">
                                {item.company}
                            </p>
                            <div className="relative flex flex-wrap items-center justify-between gap-3">
                                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                                    {item.dates}
                                </p>
                                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                                    Chapter {String(index + 1).padStart(2, "0")}
                                </p>
                            </div>
                            <h3 className="relative mt-4 font-display text-4xl text-paper sm:text-5xl">
                                {item.company}
                            </h3>
                            <p className="relative mt-3 text-lg font-semibold text-paper">
                                {item.title}
                            </p>
                            {item.location ? (
                                <p className="relative mt-1 text-sm text-muted">
                                    {item.location}
                                </p>
                            ) : null}
                            {item.teaser ? (
                                <p className="relative mt-5 max-w-xl text-sm leading-7 text-paper/80">
                                    {item.teaser}
                                </p>
                            ) : null}
                            <Highlights items={item.highlights} />
                            <StackChips items={item.stack} />
                        </article>
                    ))}
                </div>

                <div className="relative mt-8">
                    <div
                        ref={spine}
                        className="absolute left-[7px] top-3 hidden h-[calc(100%-24px)] w-px origin-top bg-gradient-to-b from-cyan via-signal to-transparent sm:block"
                    />
                    <ol className="grid gap-3">
                        {rest.map((item, index) => (
                            <li
                                key={item.id}
                                data-reveal
                                className="surface-card relative px-5 py-6 sm:pl-12"
                            >
                                <span className="absolute left-[3px] top-8 hidden h-2.5 w-2.5 rounded-full bg-cyan shadow-glow sm:block" />
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                                    <div>
                                        <p className="font-display text-2xl text-paper">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-sm text-muted">
                                            {[item.company, item.engagement, item.location]
                                                .filter(Boolean)
                                                .join(" · ")}
                                        </p>
                                    </div>
                                    <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                                        {String(index + 3).padStart(2, "0")} · {item.dates}
                                    </p>
                                </div>
                                <Highlights items={item.highlights} />
                                <StackChips items={item.stack} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Experience;
