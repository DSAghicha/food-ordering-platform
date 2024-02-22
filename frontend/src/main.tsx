import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Auth0ProviderWithNavigate } from "./auth";
import "./global.css";

const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Auth0ProviderWithNavigate>
                    <AppRoutes />
                </Auth0ProviderWithNavigate>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
