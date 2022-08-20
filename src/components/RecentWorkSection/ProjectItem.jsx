import React from "react";

const ProjectItem = ({ project }) => {
    const {title, liveDemo, github, language, image } = project;
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="600"
            className="bg-two flex flex-col p-4 rounded-2xl gap-6 justify-between"
        >
            <div className="w-fit mx-auto rounded-2xl overflow-hidden">
                <img
                    src={require(`../../images/projects/${image}`)}
                    className="w-[300px] h-[300px] hover:scale-150 hover:rotate-[25deg] transition-all duration-500 brightness-50 hover:brightness-100 border-2 border-one"
                    alt="image"
                />
            </div>
            <div className="flex flex-col gap-4">
                <div className="font-semibold text-lg ">{title} / {language}</div>
                <div className="flex gap-2 text-xl font-semibold">
                    <a target="_blank" href={github} className="px-4 py-3 rounded-xl border border-four hover:bg-two hover:text-four bg-four">
                        Github
                    </a>
                    <a target="_blank" href={liveDemo} className="px-4 py-3 rounded-xl border border-three hover:bg-two hover:text-four bg-three">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
