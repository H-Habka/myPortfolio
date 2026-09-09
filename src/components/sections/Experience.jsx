import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { work } from "../../content/identity";
import { prefersReducedMotion, registerMotion } from "../../utils/motion";
import SectionHeading from "../ui/SectionHeading";

const featured = work.filter((item) => item.featured);
const rest = work.filter((item) => !item.featured);

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
                    EasySales and Saray Jewellery first. Earlier frontend seats follow in sequence.
                </SectionHeading>

                <div className="mt-16 grid gap-5 lg:grid-cols-2">
                    {featured.map((item) => (
                        <article
                            key={item.company}
                            data-reveal
                            className="surface-card relative overflow-hidden p-8"
                        >
                            <p className="pointer-events-none absolute -right-2 -top-6 font-display text-[5.5rem] leading-none text-white/[0.04]">
                                {item.company}
                            </p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                                {item.dates}
                            </p>
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
                                <p className="relative mt-5 max-w-md text-sm leading-7 text-paper/80">
                                    {item.teaser}
                                </p>
                            ) : null}
                        </article>
                    ))}
                </div>

                <div className="relative mt-8">
                    <div
                        ref={spine}
                        className="absolute left-[7px] top-3 hidden h-[calc(100%-24px)] w-px origin-top bg-gradient-to-b from-cyan via-signal to-transparent sm:block"
                    />
                    <ol className="grid gap-3">
                        {rest.map((item) => (
                            <li
                                key={`${item.title}-${item.dates}`}
                                data-reveal
                                className="surface-card relative flex flex-col gap-1 px-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:pl-10"
                            >
                                <span className="absolute left-[3px] top-7 hidden h-2.5 w-2.5 rounded-full bg-cyan shadow-glow sm:block" />
                                <div>
                                    <p className="font-display text-xl text-paper">
                                        {item.title}
                                    </p>
                                    <p className="text-sm text-muted">
                                        {[item.company, item.location]
                                            .filter(Boolean)
                                            .join(" · ")}
                                    </p>
                                </div>
                                <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                                    {item.dates}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Experience;
