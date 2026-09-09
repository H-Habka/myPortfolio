import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { education, profile } from "../content/identity";
import { publicUrl } from "../utils/publicUrl";

const stats = [
    {
        icon: FaMedal,
        label: "Experience",
        value: "4+ years",
        delay: "0",
    },
    {
        icon: MdLocationOn,
        label: "Based in",
        value: "Al Ain / Abu Dhabi",
        delay: "120",
    },
    {
        icon: AiOutlineProject,
        label: "Current role",
        value: "Sole engineer, EasySales",
        delay: "240",
    },
];

const AboutMeSection = () => {
    return (
        <section id="about" className="section-wrap">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading">
                    <div className="section-kicker">Get to know</div>
                    <div className="section-title">About Me</div>
                    <div className="section-rule" />
                </div>
                <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div
                        data-aos="fade-right"
                        className="relative mx-auto h-[320px] w-60"
                    >
                        <div className="absolute left-4 top-4 h-full w-full rounded-3xl border border-two/40 bg-two/25" />
                        <img
                            src={publicUrl(profile.photo)}
                            alt={profile.name}
                            className="relative h-[320px] w-60 rounded-3xl object-cover object-top shadow-card transition duration-500 ease-out hover:-translate-y-1"
                        />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            {stats.map((stat) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.label}
                                        data-aos="fade-up"
                                        data-aos-delay={stat.delay}
                                        className="surface-card flex flex-col items-center gap-2 px-2 py-5 text-center transition duration-300 hover:border-three/40"
                                    >
                                        <Icon className="text-xl text-three md:text-2xl" />
                                        <div className="text-xs font-semibold text-five sm:text-sm">
                                            {stat.label}
                                        </div>
                                        <div className="text-[11px] text-muted sm:text-xs">
                                            {stat.value}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div
                            data-aos="fade-up"
                            className="space-y-4 text-left text-sm leading-7 text-five sm:text-base sm:leading-8"
                        >
                            <p>{profile.summary}</p>
                            <p>
                                {education.degree}, {education.school} (
                                {education.dates}).{" "}
                                <span className="font-semibold text-four">
                                    {education.note}
                                </span>
                                .
                            </p>
                        </div>
                        <div data-aos="fade-up">
                            <a href="#Contact" className="btn-primary">
                                Let&apos;s Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
