import { LogoutOptions, useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound, Menu } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Logo } from ".";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";

const MobileNav: FC = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated && user ? (
                        <span className="flex items-center font-bold gap-2">
                            {user.picture ? (
                                <img
                                    src={user.picture}
                                    className="rounded-full w-[40px] h-[40px]"
                                    alt="pp"
                                />
                            ) : (
                                <CircleUserRound className="text-orange-500" />
                            )}
                            {user.email}
                        </span>
                    ) : (
                        <>
                            Welcome to <Logo />
                        </>
                    )}
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MobileNavLinks logout={logout} />
                    ) : (
                        <Button
                            className="flex-1 font-bold bg-orange-500"
                            onClick={async () => await loginWithRedirect()}
                        >
                            Login
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

const MobileNavLinks: FC<MobileNavLinksProp> = ({
    logout,
}: MobileNavLinksProp) => {
    return (
        <>
            <Link
                to="/user-profile"
                className="font font-bold hover:text-orange-500"
            >
                User Profile
            </Link>
            <Separator />
            <Button
                className="flex flex-1 font-bold bg-orange-500"
                onClick={() => logout()}
            >
                Logout
            </Button>
        </>
    );
};

type MobileNavLinksProp = {
    logout: (options?: LogoutOptions | undefined) => Promise<void>;
};

export default MobileNav;
