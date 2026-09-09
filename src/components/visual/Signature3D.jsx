import React, { Suspense, useState } from "react";
import { useSceneCapability } from "../../hooks/useSceneCapability";
import StackField from "./StackField";
import SceneErrorCatch from "./scene/SceneErrorCatch";

const SignatureCanvas = React.lazy(() => import("./scene/SignatureCanvas"));

const Signature3D = () => {
    const { ready, enabled, mobile } = useSceneCapability();
    const [lost, setLost] = useState(false);

    const frame = (node) => (
        <div className="h-full min-h-[inherit] w-full" aria-hidden>
            {node}
        </div>
    );

    if (!ready || !enabled || lost) {
        return frame(<StackField />);
    }

    return frame(
        <SceneErrorCatch fallback={<StackField />}>
            <Suspense fallback={<StackField />}>
                <SignatureCanvas mobile={mobile} onContextLost={() => setLost(true)} />
            </Suspense>
        </SceneErrorCatch>
    );
};

export default Signature3D;
