import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../projects";

const RecentWorkSection = () => {
    return (
        <div
            id="RecentWork"
            className="w-screen flex flex-col gap-10 items-center pt-10"
        >
            <div
                data-aos="zoom-out"
                data-aos-offset="200"
                className="flex flex-col gap-2 items-center text-center"
            >
                <div className="text-lg text-four">My recent Work</div>
                <div className="text-3xl text-two">Portfolio</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 ">
                {projects.map((project) => (
                    <ProjectItem project={project} key={project.id}/>
                ))}
            </div>
        </div>
    );
};

export default RecentWorkSection;
