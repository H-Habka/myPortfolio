import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ExperienceItem = ({ title }) => {
    return (
        <div className="flex w-full items-center gap-3 px-1 py-3">
            <BsFillCheckCircleFill
                size={15}
                className="shrink-0 text-three"
            />
            <div className="text-sm font-semibold text-five">{title}</div>
        </div>
    );
};

export default ExperienceItem;
