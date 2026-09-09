import React from "react";
import { shipped } from "../../content/identity";
import { projects } from "../../projects";
import SectionHeading from "../ui/SectionHeading";
import StackField from "../visual/StackField";

const ProjectCard = ({ project, large = false }) => {
    const { title, liveDemo, github, language, image } = project;
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
                />
            </div>
            <div className={`flex flex-col justify-between gap-4 px-1 pb-1 ${large ? "sm:w-[54%] sm:py-3" : ""}`}>
                <div>
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-2xl text-paper">{title}</h3>
                        <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
                            {language}
                        </span>
                    </div>
                    {large ? (
                        <p className="mt-3 text-sm leading-7 text-muted">
                            Selected personal work. Live demo and source as published.
                        </p>
                    ) : null}
                </div>
                <div className="flex flex-wrap gap-2">
                    <a target="_blank" rel="noreferrer" href={github} className="btn-ghost px-4 py-2 text-sm">
                        GitHub
                    </a>
                    <a target="_blank" rel="noreferrer" href={liveDemo} className="btn-wa px-4 py-2 text-sm">
                        Live demo
                    </a>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    const [lead, ...rest] = projects;
    const easychat = shipped[0];

    return (
        <section id="projects" className="section-wrap">
            <div className="section-inner">
                <SectionHeading
                    index={4}
                    kicker="Projects"
                    title="Shipped product, then selected work."
                >
                    EasyChat is on the Play Store and App Store. Personal work below uses the published GitHub and demo links.
                </SectionHeading>

                <article
                    data-reveal
                    className="surface-card relative mt-16 overflow-hidden p-8 sm:grid sm:grid-cols-[1.1fr_0.9fr] sm:items-center sm:p-10"
                >
                    <div className="pointer-events-none absolute -right-8 top-0 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
                    <div className="relative">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                            Featured product
                        </p>
                        <h3 className="mt-4 font-display text-5xl text-paper sm:text-6xl">
                            {easychat.title}
                        </h3>
                        <p className="mt-3 text-lg text-paper/85">
                            {easychat.company} · {easychat.language}
                        </p>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                            {easychat.blurb}
                        </p>
                    </div>
                    <div className="pointer-events-none relative mx-auto mt-8 hidden h-52 w-full max-w-md sm:mt-0 sm:block">
                        <StackField />
                    </div>
                </article>

                <div className="mt-5">
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
