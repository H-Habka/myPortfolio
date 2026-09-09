import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneRig } from "./sceneRig";

const Screen = ({ map, width, height }) => {
    return (
        <mesh>
            <planeGeometry args={[width, height]} />
            <meshStandardMaterial
                map={map}
                roughness={0.38}
                metalness={0.12}
                emissive="#3ee0d0"
                emissiveIntensity={0.08}
                emissiveMap={map}
                toneMapped={false}
            />
        </mesh>
    );
};

const Bezel = ({ width, height, depth = 0.06, color = "#0b1622" }) => (
    <mesh position={[0, 0, -depth / 2 - 0.004]}>
        <boxGeometry args={[width + 0.06, height + 0.06, depth]} />
        <meshStandardMaterial
            color={color}
            roughness={0.32}
            metalness={0.28}
            emissive="#102033"
            emissiveIntensity={0.35}
        />
    </mesh>
);

const Token = ({ map, position, scale = 0.42 }) => (
    <group position={position}>
        <mesh>
            <boxGeometry args={[scale, scale, scale]} />
            <meshStandardMaterial
                map={map}
                roughness={0.28}
                metalness={0.22}
                emissive="#5b8cff"
                emissiveIntensity={0.12}
                emissiveMap={map}
                toneMapped={false}
            />
        </mesh>
    </group>
);

const Dust = ({ count }) => {
    const points = useRef();
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i += 1) {
            arr[i * 3] = (Math.random() - 0.5) * 7.5;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 5.2;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 4.4;
        }
        return arr;
    }, [count]);

    useFrame((_, delta) => {
        if (!points.current || !sceneRig.live) return;
        points.current.rotation.y += delta * 0.035;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.018}
                color="#3ee0d0"
                transparent
                opacity={0.42}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
};

const Beams = () => {
    const geometry = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-1.42, 0.28, -0.15),
            new THREE.Vector3(-0.2, 0.05, 0.2),
            new THREE.Vector3(1.12, -0.12, 0.28),
        ]);
        return new THREE.BufferGeometry().setFromPoints(curve.getPoints(32));
    }, []);
    const geometryB = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-0.1, -0.88, 0.5),
            new THREE.Vector3(0.35, -0.2, 0.2),
            new THREE.Vector3(0.82, 0.78, -0.28),
        ]);
        return new THREE.BufferGeometry().setFromPoints(curve.getPoints(28));
    }, []);

    return (
        <group>
            <line geometry={geometry}>
                <lineBasicMaterial color="#3ee0d0" transparent opacity={0.42} />
            </line>
            <line geometry={geometryB}>
                <lineBasicMaterial color="#5b8cff" transparent opacity={0.32} />
            </line>
        </group>
    );
};

const ProductStack = ({ textures, mobile }) => {
    const root = useRef();
    const dash = useRef();
    const phone = useRef();
    const code = useRef();
    const store = useRef();
    const tokens = useRef();

    useFrame((state) => {
        if (!sceneRig.live || !root.current) return;
        const t = state.clock.elapsedTime;
        const p = sceneRig.progress;
        const ease = p * p * (3 - 2 * p);

        root.current.rotation.y =
            sceneRig.pointerX * (mobile ? 0.08 : 0.2) + ease * 0.62;
        root.current.rotation.x =
            sceneRig.pointerY * (mobile ? 0.04 : 0.1) + 0.08 - ease * 0.14;
        root.current.position.y = Math.sin(t * 0.42) * 0.05;
        root.current.position.z = -ease * 0.35;

        if (dash.current) {
            dash.current.position.set(-1.38 - ease * 0.22, 0.32 + Math.sin(t * 0.7) * 0.03, -0.18);
            dash.current.rotation.set(0.1, 0.46 + ease * 0.28, -0.04);
        }
        if (phone.current) {
            phone.current.position.set(1.18 + ease * 0.08, -0.12 + Math.sin(t * 0.55 + 1) * 0.04, 0.32);
            phone.current.rotation.set(0.12, -0.38 - ease * 0.18, 0.05);
        }
        if (code.current) {
            code.current.position.set(-0.12, -0.92 + ease * 0.12, 0.55);
            code.current.rotation.set(0.58 - ease * 0.12, 0.12, 0.02);
        }
        if (store.current) {
            store.current.position.set(0.72, 0.88 - ease * 0.08, -0.42);
            store.current.rotation.set(-0.08, -0.22, 0.06);
            store.current.visible = !mobile;
        }
        if (tokens.current) {
            tokens.current.rotation.y = t * 0.22 + ease * 0.4;
            tokens.current.position.y = 0.05 + ease * 0.2;
        }
    });

    return (
        <group ref={root} scale={mobile ? 0.78 : 1}>
            <group ref={dash}>
                <Bezel width={2.15} height={1.34} />
                <Screen map={textures.dashboard} width={2.15} height={1.34} />
            </group>

            <group ref={phone}>
                <Bezel width={0.72} height={1.48} depth={0.08} color="#081018" />
                <Screen map={textures.phone} width={0.72} height={1.48} />
            </group>

            <group ref={code}>
                <Bezel width={1.72} height={0.94} color="#101018" />
                <Screen map={textures.code} width={1.72} height={0.94} />
            </group>

            <group ref={store}>
                <Bezel width={1.28} height={0.72} />
                <Screen map={textures.store} width={1.28} height={0.72} />
            </group>

            <group ref={tokens} position={[0.05, 0.1, -0.05]}>
                <Token map={textures.react} position={[-0.55, 0.55, 0.7]} scale={0.34} />
                <Token map={textures.next} position={[0.58, 0.42, 0.62]} scale={0.3} />
                {!mobile ? (
                    <>
                        <Token map={textures.shop} position={[-0.15, -0.15, -0.85]} scale={0.28} />
                        <Token map={textures.node} position={[0.95, -0.7, 0.05]} scale={0.26} />
                    </>
                ) : null}
            </group>

            <Beams />
            <Dust count={mobile ? 70 : 180} />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.42, 0]}>
                <ringGeometry args={[1.42, 1.455, 64]} />
                <meshBasicMaterial color="#3ee0d0" transparent opacity={0.34} />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.44, 0]}>
                <ringGeometry args={[1.82, 1.845, 64]} />
                <meshBasicMaterial color="#5b8cff" transparent opacity={0.18} />
            </mesh>
        </group>
    );
};

export default ProductStack;
