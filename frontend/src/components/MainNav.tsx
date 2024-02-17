import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";
import { Button } from "./ui/button";

const MainNav: FC = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            variant="ghost"
            className="font-bold text-xl hover:text-orange-500 hover:bg-white"
            onClick={async () => await loginWithRedirect()}
        >
            Login
        </Button>
    );
};

export default MainNav;
