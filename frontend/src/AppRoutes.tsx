import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<span>Home Page</span>} />
            <Route
                path="/user-profile"
                element={<span>User Profile Page</span>}
            />
            <Route path="*" element={<span>404 Page</span>} />
        </Routes>
    );
};

export default AppRoutes;
