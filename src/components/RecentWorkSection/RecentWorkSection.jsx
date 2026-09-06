import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../projects";

const RecentWorkSection = () => {
    return (
        <section id="RecentWork" className="section-wrap">
            <div className="section-inner">
                <div data-aos="fade-up" className="section-heading">
                    <div className="section-kicker">My recent Work</div>
                    <div className="section-title">Portfolio</div>
                    <div className="section-rule" />
                </div>
                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectItem project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWorkSection;
