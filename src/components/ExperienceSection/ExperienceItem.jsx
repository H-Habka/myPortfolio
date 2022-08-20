import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ExperienceItem = ({item}) => {
    return (
        <div data-aos="zoom-out" data-aos-offset="100" className="flex gap-2 px-2 py-2 w-full ">
            <BsFillCheckCircleFill size={16} className="mt-1 text-one group-hover:text-five"/>
            <div className="flex flex-col justify-between font-bold gap-3 w-full">
                <div className="group-hover:text-three">{item.title}</div>
                <div className="">
                    <div className="relative w-full h-2 rounded-full bg-one group-hover:bg-three">
                        <div className="absolute -top-1 w-4 h-4 rounded-full bg-four group-hover:bg-two"
                        style={{left : `${item.progress-10}%`}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
