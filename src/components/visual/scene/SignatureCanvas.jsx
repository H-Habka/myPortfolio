import React, { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerMotion } from "../../../utils/motion";
import { refreshScroll } from "../../../utils/refreshScroll";
import { createSceneTextures } from "./canvasTextures";
import ProductStack from "./ProductStack";
import { sceneRig } from "./sceneRig";

const Lights = () => (
    <>
        <ambientLight intensity={0.72} />
        <directionalLight position={[3.2, 3.6, 2.4]} intensity={1.05} color="#e8f1f8" />
        <pointLight position={[-2.4, 1.2, 2.1]} intensity={0.95} color="#3ee0d0" />
        <pointLight position={[2.2, -0.8, 1.4]} intensity={0.55} color="#8b7cff" />
    </>
);

const SignatureCanvas = ({ mobile, onContextLost }) => {
    const [live, setLive] = useState(true);
    const pack = useMemo(() => createSceneTextures(mobile), [mobile]);

    useEffect(() => () => pack.dispose(), [pack]);

    useEffect(() => {
        registerMotion();
        sceneRig.live = true;
        sceneRig.progress = 0;

        const trigger = ScrollTrigger.create({
            trigger: "#home",
            start: "top top",
            endTrigger: "#about",
            end: "center center",
            scrub: 0.65,
            onUpdate: (self) => {
                sceneRig.progress = self.progress;
            },
        });

        const onPointer = (event) => {
            if (mobile) return;
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = (event.clientY / window.innerHeight) * 2 - 1;
            sceneRig.pointerX = Math.max(-1, Math.min(1, x));
            sceneRig.pointerY = Math.max(-1, Math.min(1, y));
        };

        const host = document.getElementById("home");
        const io = new IntersectionObserver(
            ([entry]) => {
                const next = Boolean(entry?.isIntersecting);
                sceneRig.live = next;
                setLive(next);
            },
            { rootMargin: "12% 0px", threshold: 0.05 }
        );
        if (host) io.observe(host);

        window.addEventListener("pointermove", onPointer, { passive: true });
        refreshScroll();
        const late = window.setTimeout(refreshScroll, 320);

        return () => {
            trigger.kill();
            io.disconnect();
            window.removeEventListener("pointermove", onPointer);
            window.clearTimeout(late);
            sceneRig.live = false;
        };
    }, [mobile]);

    return (
        <Canvas
            className="signature-canvas"
            events={null}
            frameloop={live ? "always" : "never"}
            dpr={mobile ? 1 : [1, 1.5]}
            camera={{ position: [0.12, 0.08, mobile ? 5.55 : 4.85], fov: mobile ? 40 : 35 }}
            resize={{ debounce: 200, scroll: false }}
            style={{ pointerEvents: "none", touchAction: "none" }}
            gl={{
                antialias: !mobile,
                alpha: true,
                stencil: false,
                powerPreference: mobile ? "low-power" : "high-performance",
            }}
            onCreated={({ gl }) => {
                gl.setClearColor(0x000000, 0);
                const canvas = gl.domElement;
                canvas.style.pointerEvents = "none";
                canvas.setAttribute("aria-hidden", "true");
                const onLost = (event) => {
                    event.preventDefault();
                    sceneRig.live = false;
                    setLive(false);
                    onContextLost?.();
                };
                canvas.addEventListener("webglcontextlost", onLost, false);
            }}
        >
            <Lights />
            <ProductStack textures={pack.textures} mobile={mobile} />
        </Canvas>
    );
};

export default SignatureCanvas;
