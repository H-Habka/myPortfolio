import React, { useMemo, useState } from "react";
import { skillOrbit } from "../../content/identity";

const RING_RADIUS = [78, 132, 186];
const SIZE = 440;
const CX = SIZE / 2;
const CY = SIZE / 2;

const place = (count, index, radius) => {
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    return {
        x: CX + radius * Math.cos(angle),
        y: CY + radius * Math.sin(angle),
    };
};

const nodes = skillOrbit.flatMap((ring) =>
    ring.items.map((name, index) => ({
        name,
        ring: ring.ring,
        ...place(ring.items.length, index, RING_RADIUS[ring.ring]),
    }))
);

const SkillOrbit = () => {
    const [active, setActive] = useState(nodes[0].name);

    const activeNode = useMemo(
        () => nodes.find((node) => node.name === active) || nodes[0],
        [active]
    );

    return (
        <div className="relative mx-auto aspect-square w-full max-w-[440px]">
            <svg
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="h-full w-full"
                role="img"
                aria-label="Interactive skill orbit"
            >
                <defs>
                    <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#3EE0D0" stopOpacity="0.18" />
                        <stop offset="70%" stopColor="#5B8CFF" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#070d14" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <circle cx={CX} cy={CY} r="210" fill="url(#orbitGlow)" />

                {RING_RADIUS.map((radius) => (
                    <circle
                        key={radius}
                        cx={CX}
                        cy={CY}
                        r={radius}
                        className="orbit-ring"
                        fill="none"
                        stroke="rgba(148, 197, 232, 0.16)"
                    />
                ))}

                {nodes.map((node) => (
                    <line
                        key={`spoke-${node.name}`}
                        x1={CX}
                        y1={CY}
                        x2={node.x}
                        y2={node.y}
                        stroke={
                            active === node.name
                                ? "rgba(62, 224, 208, 0.55)"
                                : "rgba(148, 197, 232, 0.08)"
                        }
                        strokeWidth={active === node.name ? 1.2 : 0.6}
                    />
                ))}

                {nodes.map((node) => {
                    const isActive = active === node.name;
                    return (
                        <g
                            key={node.name}
                            className="skill-node"
                            style={{
                                transformOrigin: `${node.x}px ${node.y}px`,
                                animationDelay: `${node.ring * 0.35}s`,
                            }}
                        >
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r="16"
                                fill="transparent"
                                className="cursor-pointer"
                                onMouseEnter={() => setActive(node.name)}
                                onFocus={() => setActive(node.name)}
                                onClick={() => setActive(node.name)}
                                tabIndex={0}
                                role="button"
                                aria-label={node.name}
                                aria-pressed={isActive}
                            />
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r={isActive ? 9 : 5.5}
                                fill={isActive ? "#3EE0D0" : "#162536"}
                                stroke={isActive ? "#3EE0D0" : "#5B8CFF"}
                                strokeOpacity={isActive ? 1 : 0.7}
                                className="pointer-events-none"
                            />
                            {isActive ? (
                                <text
                                    x={node.x}
                                    y={node.y + (node.y < CY ? -16 : 22)}
                                    textAnchor="middle"
                                    fill="#e8f1f8"
                                    fontSize="10"
                                    fontFamily="IBM Plex Mono, monospace"
                                    className="pointer-events-none uppercase"
                                    letterSpacing="0.14em"
                                >
                                    {node.name}
                                </text>
                            ) : null}
                        </g>
                    );
                })}

                <circle
                    cx={CX}
                    cy={CY}
                    r="46"
                    fill="rgba(11, 22, 34, 0.92)"
                    stroke="rgba(62, 224, 208, 0.35)"
                />
            </svg>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="max-w-[7.5rem] text-center">
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan">
                        Focus
                    </p>
                    <p className="mt-1 font-display text-xl leading-none text-paper">
                        {activeNode.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SkillOrbit;
