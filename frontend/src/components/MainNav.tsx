import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";
import { UserMenu } from ".";
import { Button } from "./ui/button";

const MainNav: FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (
                <UserMenu />
            ) : (
                <Button
                    variant="ghost"
                    className="font-bold text-xl hover:text-orange-500 hover:bg-white"
                    onClick={async () => await loginWithRedirect()}
                >
                    Login
                </Button>
            )}
        </span>
    );
};

export default MainNav;
