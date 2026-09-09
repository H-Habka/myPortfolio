import React, { useState } from "react";
import { skillGroups } from "../../content/identity";
import SectionHeading from "../ui/SectionHeading";
import SkillOrbit from "../visual/SkillOrbit";

const Skills = () => {
    const [focus, setFocus] = useState(skillGroups[0].id);
    const active = skillGroups.find((group) => group.id === focus) || skillGroups[0];
    const marquee = skillGroups.flatMap((group) => group.items);

    const moveFocus = (delta) => {
        const index = skillGroups.findIndex((group) => group.id === focus);
        const next = skillGroups[(index + delta + skillGroups.length) % skillGroups.length];
        setFocus(next.id);
        window.requestAnimationFrame(() => {
            document.getElementById(`skill-tab-${next.id}`)?.focus();
        });
    };

    return (
        <section id="skills" className="section-wrap">
            <div className="section-inner">
                <SectionHeading index={3} kicker="Skills" title="A stack that ships.">
                    Frontend and mobile at the core. Shopify Liquid around commerce.
                    Agile, SOLID, and OWASP as practice. Arduino, Raspberry Pi, and the daily tools on the outer ring.
                </SectionHeading>

                <div className="mt-16 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div data-reveal className="surface-card relative overflow-hidden p-6 sm:p-8">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                            Immersive stack
                        </p>
                        <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                            Hover or tap a node. Inner ring is the shipping stack. Mid ring is
                            data and commerce. Outer ring is practice, hardware, and tools.
                        </p>
                        <SkillOrbit />
                    </div>

                    <div className="grid gap-3">
                        <div
                            className="flex flex-wrap gap-2"
                            role="tablist"
                            aria-label="Skill groups"
                            onKeyDown={(event) => {
                                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                                    event.preventDefault();
                                    moveFocus(1);
                                }
                                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                                    event.preventDefault();
                                    moveFocus(-1);
                                }
                            }}
                        >
                            {skillGroups.map((group, index) => {
                                const selected = group.id === focus;
                                return (
                                    <button
                                        key={group.id}
                                        type="button"
                                        role="tab"
                                        id={`skill-tab-${group.id}`}
                                        aria-controls={`skill-panel-${group.id}`}
                                        aria-selected={selected}
                                        tabIndex={selected ? 0 : -1}
                                        onClick={() => setFocus(group.id)}
                                        className={`tap-target rounded-full px-3.5 font-mono text-[10px] uppercase tracking-[0.16em] transition ${
                                            selected
                                                ? "bg-cyan/15 text-cyan"
                                                : "text-muted hover:text-paper"
                                        }`}
                                        style={{
                                            border: selected
                                                ? "1px solid rgba(62, 224, 208, 0.45)"
                                                : "1px solid rgba(148, 197, 232, 0.14)",
                                        }}
                                    >
                                        {String(index + 1).padStart(2, "0")} {group.title}
                                    </button>
                                );
                            })}
                        </div>

                        <article
                            data-reveal
                            className="surface-card min-h-[280px] p-7"
                            role="tabpanel"
                            id={`skill-panel-${active.id}`}
                            aria-labelledby={`skill-tab-${active.id}`}
                        >
                            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                                {active.kicker}
                            </p>
                            <h3 className="mt-3 font-display text-4xl text-paper">
                                {active.title}
                            </h3>
                            <ul className="mt-6 flex flex-wrap gap-2">
                                {active.items.map((item) => (
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

                        <div className="grid gap-3 sm:grid-cols-2">
                            {skillGroups
                                .filter((group) => group.id !== focus)
                                .slice(0, 2)
                                .map((group) => (
                                    <button
                                        key={group.id}
                                        type="button"
                                        data-reveal
                                        onClick={() => setFocus(group.id)}
                                        className="surface-card min-h-[5.5rem] p-5 text-left transition hover:-translate-y-0.5"
                                    >
                                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                                            {group.kicker}
                                        </p>
                                        <p className="mt-2 font-display text-2xl text-paper">
                                            {group.title}
                                        </p>
                                        <p className="mt-2 text-sm text-muted">
                                            {group.items.slice(0, 3).join(" · ")}
                                        </p>
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-14 overflow-hidden border-y border-white/10 py-4" aria-hidden>
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
