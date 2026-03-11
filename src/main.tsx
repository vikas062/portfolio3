import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: any }> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error: any) {
        return { hasError: true, error };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 20, background: 'red', color: 'white', position: 'fixed', inset: 0, zIndex: 9999 }}>
                    <h1>Something went wrong.</h1>
                    <pre>{this.state.error?.toString()}</pre>
                    <pre>{this.state.error?.stack}</pre>
                </div>
            );
        }
        return this.props.children;
    }
}

window.addEventListener('error', (event) => {
    const div = document.createElement('div');
    div.style.cssText = 'padding: 20px; background: red; color: white; position: fixed; inset: 0; z-index: 9999;';
    div.innerHTML = `<h1>Global Error</h1><pre>${event.error?.stack || event.message}</pre>`;
    document.body.appendChild(div);
});

createRoot(document.getElementById("root")!).render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);
