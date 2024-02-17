import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Auth0ProviderWithNavigate } from "./auth";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0ProviderWithNavigate>
                <AppRoutes />
            </Auth0ProviderWithNavigate>
        </BrowserRouter>
    </React.StrictMode>
);
