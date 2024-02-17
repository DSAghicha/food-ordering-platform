import { FC } from "react";
import { Button } from "./ui/button";

const MainNav: FC = () => {
    return (
        <Button
            variant="ghost"
            className="font-bold text-xl hover:text-orange-500 hover:bg-white"
        >
            Login
        </Button>
    );
};

export default MainNav;
