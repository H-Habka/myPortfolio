import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ExperienceItem = ({ item }) => {
    return (
        <div className="flex w-full gap-3 px-1 py-2.5">
            <BsFillCheckCircleFill
                size={15}
                className="mt-1 shrink-0 text-three"
            />
            <div className="flex w-full flex-col gap-2">
                <div className="text-sm font-semibold text-five">
                    {item.title}
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-two to-four"
                        style={{ width: `${item.progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
