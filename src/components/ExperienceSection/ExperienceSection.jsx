import React from "react";
import ExperienceItem from "./ExperienceItem";
import { FrontEndExperinces, BackEndExperinces } from "../../Experinces";

const ExperienceSection = () => {
    return (
        <div id="Experience" className="w-screen lg:h-screen flex flex-col gap-10 items-center pt-10">
            <div
                data-aos="zoom-out"
                data-aos-offset="200"
                className="flex flex-col gap-2 items-center text-center"
            >
                <div className="text-lg text-four">What Skills I Have</div>
                <div className="text-3xl text-two">My Experience</div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-11/12 sm:w-8/12 mx-auto justify-between">
                <div
                    data-aos="fade-right"
                    data-aos-offset="100"
                    className="group hover:bg-transparent  rounded-xl flex-1 bg-two flex flex-col items-center py-6 gap-6 border-2 border-two"
                >
                    <p className="text-center text-2xl text-five group-hover:text-white">
                        FrontEnd Developer
                    </p>
                    <div className="grid gap-2 grid-cols-2 ">
                        {FrontEndExperinces.map((item) => (
                            <ExperienceItem item={item} />
                        ))}
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-offset="100"
                    className="group hover:bg-transparent  rounded-xl flex-1 bg-two flex flex-col items-center py-6 gap-6 border-2 border-two "
                >
                    <p className="text-center text-2xl text-five group-hover:text-white">
                        Backend Developer
                    </p>
                    <div className="grid gap-2 grid-cols-2 ">
                        {BackEndExperinces.map((item) => (
                            <ExperienceItem item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
