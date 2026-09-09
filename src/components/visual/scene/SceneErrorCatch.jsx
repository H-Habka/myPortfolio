import React from "react";

class SceneErrorCatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { failed: false };
    }

    static getDerivedStateFromError() {
        return { failed: true };
    }

    render() {
        if (this.state.failed) return this.props.fallback;
        return this.props.children;
    }
}

export default SceneErrorCatch;
