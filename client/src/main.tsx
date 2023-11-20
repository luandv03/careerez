import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}>
        <React.StrictMode>
            <BrowserRouter>
                <MantineProvider>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </MantineProvider>
            </BrowserRouter>
        </React.StrictMode>
    </GoogleOAuthProvider>
);
