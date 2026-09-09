import React from "react";
import { profile } from "../../content/identity";
import { publicUrl } from "../../utils/publicUrl";
import { refreshScroll } from "../../utils/refreshScroll";

const Portrait = ({ className, priority = false }) => {
    return (
        <picture>
            <source type="image/webp" srcSet={publicUrl(profile.photoDisplay)} />
            <img
                src={publicUrl(profile.photo)}
                alt={`${profile.name}, ${profile.title}`}
                width={720}
                height={900}
                className={className}
                decoding="async"
                fetchPriority={priority ? "high" : "low"}
                loading={priority ? "eager" : "lazy"}
                onLoad={priority ? refreshScroll : undefined}
            />
        </picture>
    );
};

export default Portrait;
