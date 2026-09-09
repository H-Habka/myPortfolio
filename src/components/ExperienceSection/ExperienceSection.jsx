import React from "react";
import ExperienceItem from "./ExperienceItem";
import {
    frontendSkills,
    platformSkills,
    work,
} from "../../content/identity";

const featured = work.filter((item) => item.featured);
const rest = work.filter((item) => !item.featured);

const ExperienceSection = () => {
    return (
        <section id="Experience" className="section-wrap">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading">
                    <div className="section-kicker">Roles so far</div>
                    <div className="section-title">Experience</div>
                    <div className="section-rule" />
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2">
                    {featured.map((item) => (
                        <article
                            key={item.company}
                            data-aos="fade-up"
                            className="surface-card relative overflow-hidden p-7"
                        >
                            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-two/10 blur-2xl" />
                            <p className="font-display text-3xl font-semibold text-three">
                                {item.company}
                            </p>
                            <p className="mt-3 text-lg font-semibold text-five">
                                {item.title}
                            </p>
                            <p className="mt-1 text-sm text-muted">
                                {[item.location, item.dates]
                                    .filter(Boolean)
                                    .join(" · ")}
                            </p>
                            {item.teaser ? (
                                <p className="mt-4 text-sm leading-7 text-four">
                                    {item.teaser}
                                </p>
                            ) : null}
                        </article>
                    ))}
                </div>

                <ol className="mt-5 grid gap-3">
                    {rest.map((item) => (
                        <li
                            key={`${item.title}-${item.dates}`}
                            data-aos="fade-up"
                            className="surface-card flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                        >
                            <div>
                                <p className="font-display font-semibold text-five">
                                    {item.title}
                                </p>
                                <p className="text-sm text-muted">
                                    {[item.company, item.location]
                                        .filter(Boolean)
                                        .join(" · ")}
                                </p>
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
                <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
                    <div
                        data-aos="fade-right"
                        className="surface-card flex flex-col gap-6 px-5 py-8 sm:px-8"
                    >
                        <p className="font-display text-xl font-semibold text-five sm:text-2xl">
                            Frontend &amp; Mobile
                        </p>
                        <div className="grid w-full grid-cols-1 gap-x-6 sm:grid-cols-2">
                            {frontendSkills.map((title) => (
                                <ExperienceItem title={title} key={title} />
                            ))}
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="surface-card flex flex-col gap-6 px-5 py-8 sm:px-8"
                    >
                        <p className="font-display text-xl font-semibold text-five sm:text-2xl">
                            Backend, Shopify &amp; Craft
                        </p>
                        <div className="grid w-full grid-cols-1 gap-x-6 sm:grid-cols-2">
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
