import React from "react";
import ExperienceItem from "./ExperienceItem";
import { FrontEndExperinces, BackEndExperinces } from "../../Experinces";

const ExperienceSection = () => {
    return (
        <section id="Experience" className="section-wrap">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading">
                    <div className="section-kicker">What Skills I Have</div>
                    <div className="section-title">My Experience</div>
                    <div className="section-rule" />
                </div>
                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    <div
                        data-aos="fade-right"
                        className="surface-card flex flex-col items-center gap-6 px-5 py-8 sm:px-8"
                    >
                        <p className="font-display text-center text-xl font-semibold text-five sm:text-2xl">
                            FrontEnd Development
                        </p>
                        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                            {FrontEndExperinces.map((item) => (
                                <ExperienceItem
                                    item={item}
                                    key={item.title}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="surface-card flex flex-col items-center gap-6 px-5 py-8 sm:px-8"
                    >
                        <p className="font-display text-center text-xl font-semibold text-five sm:text-2xl">
                            Backend Development
                        </p>
                        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                            {BackEndExperinces.map((item) => (
                                <ExperienceItem
                                    item={item}
                                    key={item.title}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
