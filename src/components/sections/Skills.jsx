import React from "react";
import { skillGroups } from "../../content/identity";
import SectionHeading from "../ui/SectionHeading";

const Skills = () => {
    const marquee = skillGroups.flatMap((group) => group.items);

    return (
        <section id="skills" className="section-wrap">
            <div className="section-inner">
                <SectionHeading
                    index={3}
                    kicker="Skills"
                    title="A stack that ships."
                >
                    Frontend and mobile first, then Shopify, Node, and the practices that keep the work tight.
                </SectionHeading>

                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {skillGroups.map((group, index) => (
                        <article
                            key={group.title}
                            data-reveal
                            className={`surface-card p-7 ${
                                index === 0 ? "lg:col-span-2" : ""
                            }`}
                        >
                            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                                0{index + 1}
                            </p>
                            <h3 className="mt-3 font-display text-3xl text-paper">
                                {group.title}
                            </h3>
                            <ul className="mt-6 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-full border px-3 py-1.5 text-sm text-paper/90"
                                        style={{
                                            borderColor: "rgba(148, 197, 232, 0.18)",
                                            background: "rgba(255,255,255,0.03)",
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>

            <div className="mt-14 overflow-hidden border-y border-white/10 py-4">
                <div className="marquee-track flex gap-10 whitespace-nowrap">
                    {[...marquee, ...marquee].map((item, index) => (
                        <span
                            key={`${item}-${index}`}
                            className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted"
                        >
                            {item}
                            <span className="ml-10 text-signal">+</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
