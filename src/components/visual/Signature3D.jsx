import React, { Suspense } from "react";
import { useSceneCapability } from "../../hooks/useSceneCapability";
import StackField from "./StackField";
import SceneErrorCatch from "./scene/SceneErrorCatch";

const SignatureCanvas = React.lazy(() => import("./scene/SignatureCanvas"));

const Signature3D = () => {
    const { ready, enabled, mobile } = useSceneCapability();

    const frame = (node) => (
        <div className="h-full min-h-[inherit] w-full">{node}</div>
    );

    if (!ready || !enabled) {
        return frame(<StackField />);
    }

    return frame(
        <SceneErrorCatch fallback={<StackField />}>
            <Suspense fallback={<StackField />}>
                <SignatureCanvas mobile={mobile} />
            </Suspense>
        </SceneErrorCatch>
    );
};

export default Signature3D;
