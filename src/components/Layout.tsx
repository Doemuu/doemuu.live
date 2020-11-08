import * as React from "react";

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <React.Fragment>
            <main style={{minHeight: '100vh'}}>
                {props.children}
            </main>
        </React.Fragment>
    );
}
