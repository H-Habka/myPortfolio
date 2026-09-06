import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { FaMedal } from "react-icons/fa";

const stats = [
    {
        icon: FaMedal,
        label: "Experince",
        value: "+4 year",
        delay: "0",
    },
    {
        icon: MdPeopleOutline,
        label: "Followers",
        value: "+1000 followers",
        delay: "120",
    },
    {
        icon: AiOutlineProject,
        label: "Projetcs",
        value: "+40 Completed",
        delay: "240",
    },
];

const AboutMeSection = () => {
    return (
        <section id="about" className="section-wrap">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading">
                    <div className="section-kicker">Get To Know</div>
                    <div className="section-title">About Me</div>
                    <div className="section-rule" />
                </div>
                <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div
                        data-aos="fade-right"
                        className="relative mx-auto w-60"
                    >
                        <div className="absolute inset-3 translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-br from-two/70 to-transparent" />
                        <img
                            src={require("../images/aboutme.webp")}
                            alt="Hossien Habka"
                            className="relative h-[320px] w-60 rounded-3xl object-cover shadow-card transition duration-500 ease-out hover:-translate-y-1 hover:rotate-1"
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
                            className="space-y-4 text-sm leading-7 text-five/85 sm:text-base sm:leading-8"
                        >
                            <p>
                                I am a FrontEnd Developer Fully Able to Work
                                Under Work and Time Preasure, I Can Handle Any{" "}
                                <span className="font-semibold text-four">
                                    Problem Solving
                                </span>{" "}
                                Issues, Able to Write Clean and Managable Code.
                                well acquainted with{" "}
                                <span className="font-semibold text-four">
                                    SOLID
                                </span>{" "}
                                Principles and{" "}
                                <span className="font-semibold text-four">
                                    Design Patterns
                                </span>
                                ,worked on multiple sites such as{" "}
                                <span className="font-semibold text-four">
                                    CMS
                                </span>
                                , and I Have alot Of Experience of working with
                                a Team.
                            </p>
                            <p>
                                I Achieved{" "}
                                <span className="font-semibold text-four">
                                    Albasel Award
                                </span>{" "}
                                Four Times in my Study as Being in the First
                                Three Places, I Achieved the First Place in my
                                First, Second, Fourth and Fifth Year and i
                                Graduated With Graduation Rate of{" "}
                                <span className="font-semibold text-four">
                                    91.1%
                                </span>
                                .
                            </p>
                        </div>
                        <div data-aos="fade-up">
                            <a href="#Contact" className="btn-primary">
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
