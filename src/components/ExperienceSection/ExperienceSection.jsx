import React from "react";
import ExperienceItem from "./ExperienceItem";
import {
    frontendSkills,
    platformSkills,
    work,
} from "../../content/identity";

const ExperienceSection = () => {
    return (
        <section id="Experience" className="section-wrap">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading">
                    <div className="section-kicker">Roles so far</div>
                    <div className="section-title">Experience</div>
                    <div className="section-rule" />
                </div>

                <ol className="mt-14 grid gap-4">
                    {work.map((item) => (
                        <li
                            key={`${item.title}-${item.dates}`}
                            data-aos="fade-up"
                            className="surface-card flex flex-col gap-1 px-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                        >
                            <div>
                                <p className="font-display text-lg font-semibold text-five">
                                    {item.title}
                                </p>
                                <p className="text-sm text-three">
                                    {[item.company, item.location]
                                        .filter(Boolean)
                                        .join(" · ")}
                                </p>
                                {item.teaser ? (
                                    <p className="mt-1 text-sm text-muted">
                                        {item.teaser}
                                    </p>
                                ) : null}
                            </div>
                            <p className="shrink-0 text-sm text-muted">
                                {item.dates}
                            </p>
                        </li>
                    ))}
                </ol>

                <div data-aos="fade-up" className="section-heading mt-20">
                    <div className="section-kicker">What I work with</div>
                    <div className="section-title">Skills</div>
                    <div className="section-rule" />
                </div>
                <div className="mt-14 grid items-start gap-6 md:grid-cols-2">
                    <div
                        data-aos="fade-right"
                        className="surface-card flex flex-col items-center gap-6 px-5 py-8 sm:px-8"
                    >
                        <p className="font-display text-center text-xl font-semibold text-five sm:text-2xl">
                            Frontend &amp; Mobile
                        </p>
                        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                            {frontendSkills.map((title) => (
                                <ExperienceItem title={title} key={title} />
                            ))}
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="surface-card flex flex-col items-center gap-6 px-5 py-8 sm:px-8"
                    >
                        <p className="font-display text-center text-xl font-semibold text-five sm:text-2xl">
                            Backend, Shopify &amp; Craft
                        </p>
                        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                            {platformSkills.map((title) => (
                                <ExperienceItem title={title} key={title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
