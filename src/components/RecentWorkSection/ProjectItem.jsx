import React from "react";

const ProjectItem = ({ project }) => {
    const { title, liveDemo, github, language, image } = project;
    return (
        <article
            data-aos="fade-up"
            className="surface-card flex flex-col justify-between gap-5 p-5 transition duration-300 hover:-translate-y-1 hover:border-three/30"
        >
            <div className="overflow-hidden rounded-xl">
                <img
                    src={require(`../../images/projects/${image}`)}
                    className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
                    alt={title}
                />
            </div>
            <div className="flex flex-col gap-4 px-1 pb-1">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold leading-snug text-five">
                        {title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-four">
                        {language}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={github}
                        className="btn-ghost px-4 py-2 text-sm"
                    >
                        Github
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={liveDemo}
                        className="btn-primary px-4 py-2 text-sm"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectItem;
