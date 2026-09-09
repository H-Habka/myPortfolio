import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import {
    aboutCopy,
    education,
    profile,
    stats,
} from "../../content/identity";
import { publicUrl } from "../../utils/publicUrl";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
    return (
        <section id="about" className="section-wrap">
            <div className="section-inner">
                <SectionHeading index={1} kicker="About" title="The operator behind the stack.">
                    Four years across web, mobile, and commerce — currently the sole engineer at EasySales.
                </SectionHeading>

                <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div data-reveal className="relative mx-auto">
                        <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-cyan/35" />
                        <img
                            src={publicUrl(profile.photo)}
                            alt={profile.name}
                            className="relative h-[380px] w-72 rounded-[2rem] object-cover object-top shadow-card sm:h-[440px] sm:w-80"
                        />
                    </div>

                    <div className="flex flex-col gap-8">
                        <p
                            data-reveal
                            className="font-display text-2xl italic leading-snug text-paper sm:text-3xl"
                        >
                            {aboutCopy.pull}
                        </p>
                        <div data-reveal className="space-y-4 text-sm leading-7 text-paper/90 sm:text-base sm:leading-8">
                            {aboutCopy.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="grid gap-3 sm:grid-cols-3">
                            {aboutCopy.pillars.map((pillar) => (
                                <div key={pillar.label} data-reveal className="surface-card px-4 py-5">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                                        {pillar.label}
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-paper">
                                        {pillar.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} data-reveal className="surface-card px-5 py-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                                {stat.label}
                            </p>
                            <p className="mt-3 font-display text-4xl text-paper">{stat.value}</p>
                            <p className="mt-1 text-sm text-muted">{stat.unit}</p>
                        </div>
                    ))}
                </div>

                <div data-reveal className="surface-card mt-5 overflow-hidden p-6 sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                                Education
                            </p>
                            <p className="mt-2 font-display text-3xl text-paper sm:text-4xl">
                                {education.degree}
                            </p>
                            <p className="mt-2 text-sm text-muted">
                                {education.school} · {education.dates}
                            </p>
                        </div>
                        <p className="font-semibold text-cyan">{education.note}</p>
                    </div>

                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                        {education.honors.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border px-5 py-5"
                                style={{ borderColor: "rgba(148, 197, 232, 0.14)" }}
                            >
                                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                                    Honor
                                </p>
                                <p className="mt-2 font-display text-2xl text-paper">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                            </div>
                        ))}
                        {education.projects.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border px-5 py-5"
                                style={{ borderColor: "rgba(148, 197, 232, 0.14)" }}
                            >
                                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                                    Academic work
                                </p>
                                <p className="mt-2 font-display text-2xl text-paper">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-reveal className="mt-8 flex flex-wrap gap-3">
                    <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="btn-wa">
                        <ImWhatsapp size={16} />
                        WhatsApp · {profile.phone}
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-li">
                        <BsLinkedin size={15} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
