import React from "react";
import { cases } from "../../content/identity";
import { projects } from "../../projects";
import SectionHeading from "../ui/SectionHeading";
import StackField from "../visual/StackField";

const CaseCard = ({ item, featured = false }) => {
    return (
        <article
            data-reveal
            className={`surface-card relative overflow-hidden p-7 ${
                featured ? "sm:grid sm:grid-cols-[1.15fr_0.85fr] sm:items-center sm:p-10" : ""
            }`}
        >
            {featured ? (
                <div className="pointer-events-none absolute -right-8 top-0 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
            ) : (
                <p className="pointer-events-none absolute -right-1 -top-5 font-display text-6xl text-white/[0.04]">
                    {item.title}
                </p>
            )}
            <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                    {item.kicker}
                </p>
                <h3
                    className={`mt-4 font-display text-paper ${
                        featured ? "text-5xl sm:text-6xl" : "text-3xl"
                    }`}
                >
                    {item.title}
                </h3>
                <p className="mt-3 text-sm text-paper/85">
                    {[item.company, item.role, item.language].filter(Boolean).join(" · ")}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{item.blurb}</p>
                {item.highlights?.length ? (
                    <ol className="mt-5 space-y-2">
                        {item.highlights.map((line) => (
                            <li key={line} className="flex gap-3 text-sm leading-6 text-paper/80">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                                {line}
                            </li>
                        ))}
                    </ol>
                ) : null}
                <ul className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((chip) => (
                        <li
                            key={chip}
                            className="rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/80"
                            style={{
                                borderColor: "rgba(148, 197, 232, 0.18)",
                                background: "rgba(255,255,255,0.03)",
                            }}
                        >
                            {chip}
                        </li>
                    ))}
                </ul>
            </div>
            {featured ? (
                <div className="pointer-events-none relative mx-auto mt-8 hidden h-52 w-full max-w-md sm:mt-0 sm:block">
                    <StackField />
                </div>
            ) : null}
        </article>
    );
};

const ProjectCard = ({ project, large = false }) => {
    const { title, liveDemo, github, language, image, blurb } = project;
    return (
        <article
            data-reveal
            className={`surface-card group flex flex-col justify-between gap-5 p-5 transition duration-500 hover:-translate-y-1 ${
                large ? "sm:flex-row sm:items-stretch" : ""
            }`}
        >
            <div className={`overflow-hidden rounded-2xl ${large ? "sm:w-[46%]" : ""}`}>
                <img
                    src={require(`../../images/projects/${image}`)}
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                    alt={title}
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div
                className={`flex flex-col justify-between gap-4 px-1 pb-1 ${
                    large ? "sm:w-[54%] sm:py-3" : ""
                }`}
            >
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        Personal demo
                    </p>
                    <div className="mt-2 flex items-start justify-between gap-3">
                        <h3 className="font-display text-2xl text-paper">{title}</h3>
                        <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
                            {language}
                        </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted">{blurb}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={github}
                        className="btn-ghost tap-target px-4 text-sm"
                    >
                        GitHub
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={liveDemo}
                        className="btn-wa tap-target px-4 text-sm"
                    >
                        Live demo
                    </a>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    const [leadCase, ...workCases] = cases;
    const [lead, ...rest] = projects;

    return (
        <section id="projects" className="section-wrap">
            <div className="section-inner">
                <SectionHeading
                    index={4}
                    kicker="Projects"
                    title="Cases from the work, then selected demos."
                >
                    EasyChat, Dawn and the private app, Saray Jewellery, a freelance booking
                    site, then Tartus academic work. Personal GitHub demos keep only the
                    published links.
                </SectionHeading>

                <div className="mt-16">
                    <CaseCard item={leadCase} featured />
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    {workCases.map((item) => (
                        <CaseCard key={item.id} item={item} />
                    ))}
                </div>

                <div className="mt-16 flex items-end justify-between gap-6">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                            Selected personal work
                        </p>
                        <p className="mt-3 max-w-xl font-display text-3xl text-paper">
                            Published demos only.
                        </p>
                    </div>
                    <div className="hairline hidden w-40 sm:block" />
                </div>

                <div className="mt-8">
                    <ProjectCard project={lead} large />
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
