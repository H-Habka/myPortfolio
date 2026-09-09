import React from "react";

const StackField = () => {
    return (
        <svg
            viewBox="0 0 560 420"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
        >
            <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3EE0D0" />
                    <stop offset="50%" stopColor="#5B8CFF" />
                    <stop offset="100%" stopColor="#8B7CFF" />
                </linearGradient>
                <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.2" />
                </filter>
            </defs>

            <rect
                x="36"
                y="42"
                width="210"
                height="148"
                rx="14"
                stroke="url(#lineGrad)"
                strokeOpacity="0.7"
            />
            <rect x="48" y="56" width="186" height="14" rx="4" fill="#3EE0D0" fillOpacity="0.16" />
            <rect x="48" y="82" width="78" height="48" rx="6" fill="#5B8CFF" fillOpacity="0.14" />
            <rect x="136" y="82" width="98" height="22" rx="5" fill="#E8F1F8" fillOpacity="0.08" />
            <rect x="136" y="112" width="70" height="18" rx="5" fill="#3EE0D0" fillOpacity="0.22" />

            <rect
                x="372"
                y="88"
                width="118"
                height="214"
                rx="22"
                stroke="url(#lineGrad)"
                strokeOpacity="0.75"
            />
            <circle cx="431" cy="278" r="8" stroke="#3EE0D0" strokeOpacity="0.7" />
            <circle cx="431" cy="168" r="28" stroke="#5B8CFF" strokeOpacity="0.45" />
            <path
                d="M418 168 a13 13 0 0 1 26 0 a13 13 0 0 1 -10 12"
                stroke="#3EE0D0"
                strokeOpacity="0.8"
            />
            <rect x="394" y="210" width="74" height="8" rx="4" fill="#E8F1F8" fillOpacity="0.12" />
            <rect x="394" y="226" width="54" height="8" rx="4" fill="#E8F1F8" fillOpacity="0.08" />
            <rect x="394" y="246" width="74" height="16" rx="8" fill="#3EE0D0" fillOpacity="0.28" />

            <g transform="translate(214 188)">
                <rect x="0" y="0" width="52" height="52" rx="10" stroke="#5B8CFF" strokeOpacity="0.7" />
                <rect x="22" y="22" width="52" height="52" rx="10" stroke="#3EE0D0" strokeOpacity="0.55" />
                <rect x="44" y="44" width="52" height="52" rx="10" stroke="#8B7CFF" strokeOpacity="0.5" />
            </g>

            <g transform="translate(246 318)">
                <ellipse cx="36" cy="10" rx="36" ry="10" stroke="#3EE0D0" strokeOpacity="0.7" />
                <path d="M0 10 V34 C0 40 16 44 36 44 C56 44 72 40 72 34 V10" stroke="#5B8CFF" strokeOpacity="0.55" />
                <ellipse cx="36" cy="22" rx="36" ry="10" stroke="#8B7CFF" strokeOpacity="0.35" />
            </g>

            <path
                className="flow-line"
                d="M246 116 C300 116 320 160 340 188 C352 206 360 220 372 220"
                stroke="url(#lineGrad)"
                strokeWidth="1.4"
                strokeDasharray="6 8"
                style={{ animation: "dash-flow 8s linear infinite" }}
            />
            <path
                className="flow-line"
                d="M266 240 C300 250 320 280 282 338"
                stroke="url(#lineGrad)"
                strokeWidth="1.4"
                strokeDasharray="6 8"
                style={{ animation: "dash-flow 10s linear infinite reverse" }}
            />
            <path
                className="flow-line"
                d="M318 338 C360 338 390 300 431 302"
                stroke="url(#lineGrad)"
                strokeWidth="1.4"
                strokeDasharray="6 8"
                style={{ animation: "dash-flow 9s linear infinite" }}
            />

            {[
                [246, 116],
                [340, 188],
                [266, 240],
                [282, 338],
                [431, 302],
            ].map(([x, y], i) => (
                <circle
                    key={`${x}-${y}`}
                    className="node-pulse"
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#3EE0D0"
                    style={{
                        animation: `pulse-node 2.8s ease-in-out ${i * 0.35}s infinite`,
                        transformOrigin: `${x}px ${y}px`,
                    }}
                />
            ))}
        </svg>
    );
};

export default StackField;
