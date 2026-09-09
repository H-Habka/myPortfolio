import React from "react";
import { education, profile } from "../content/identity";
import { publicUrl } from "../utils/publicUrl";

const stats = [
    { label: "Experience", value: "4+ years" },
    { label: "Based in", value: "Al Ain / Abu Dhabi, UAE" },
    { label: "Now", value: "EasySales" },
    { label: "Recently", value: "Saray Jewellery" },
];

const AboutMeSection = () => {
    return (
        <section id="about" className="section-wrap">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading">
                    <div className="section-kicker">About</div>
                    <div className="section-title">Build, ship, photograph</div>
                    <div className="section-rule" />
                </div>
                <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div data-aos="fade-right" className="relative mx-auto">
                        <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-two/40" />
                        <img
                            src={publicUrl(profile.photo)}
                            alt={profile.name}
                            className="relative h-[380px] w-72 rounded-[2rem] object-cover object-top shadow-card sm:h-[420px] sm:w-80"
                        />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                    className="surface-card px-4 py-5"
                                >
                                    <div className="text-xs uppercase tracking-[0.16em] text-muted">
                                        {stat.label}
                                    </div>
                                    <div className="mt-2 font-display text-lg font-semibold text-five">
                                        {stat.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            data-aos="fade-up"
                            className="space-y-4 text-sm leading-7 text-five sm:text-base sm:leading-8"
                        >
                            <p>{profile.summary}</p>
                            <p>
                                {education.degree}, {education.school} (
                                {education.dates}).{" "}
                                <span className="font-semibold text-three">
                                    {education.note}
                                </span>
                                .
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            className="flex flex-wrap gap-3"
                        >
                            <a
                                href={profile.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                            >
                                WhatsApp
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-linkedin"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
