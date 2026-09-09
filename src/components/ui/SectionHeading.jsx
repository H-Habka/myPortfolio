import React from "react";

const SectionHeading = ({ index, kicker, title, children }) => {
    return (
        <div className="section-heading flex flex-col items-start gap-4" data-reveal>
            <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-cyan">
                    {String(index).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-cyan/50" />
                <p className="section-kicker">{kicker}</p>
            </div>
            <h2 className="section-title">{title}</h2>
            {children ? (
                <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                    {children}
                </p>
            ) : null}
            <div className="hairline mt-2 w-40" />
        </div>
    );
};

export default SectionHeading;
