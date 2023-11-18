import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MantineProvider } from "@mantine/core";

import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}>
        <React.StrictMode>
            <BrowserRouter>
                <MantineProvider>
                    <App />
                </MantineProvider>
            </BrowserRouter>
        </React.StrictMode>
    </GoogleOAuthProvider>
);
