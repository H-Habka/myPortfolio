import { useEffect, useState } from "react";

export function useActiveSection(ids, fallback = "home") {
    const [active, setActive] = useState(fallback);

    useEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if (!elements.length) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, [ids]);

    return active;
}
