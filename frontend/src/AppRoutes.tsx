import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts";
import { HomePage } from "./pages";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <HomePage />
                    </Layout>
                }
            />
            <Route
                path="/user-profile"
                element={<span>User Profile Page</span>}
            />
            <Route path="*" element={<span>404 Page</span>} />
        </Routes>
    );
};

export default AppRoutes;
