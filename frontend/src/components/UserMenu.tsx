import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";

const UserMenu: FC = () => {
    const { user, logout } = useAuth0();

    console.log(user);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                {user && user.picture ? (
                    <img
                        src={user.picture}
                        className="rounded-full w-[40px] h-[40px]"
                        alt="pp"
                    />
                ) : (
                    <CircleUserRound className="text-orange-500" />
                )}

                {user && user.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link
                        to="/user-profile"
                        className="font font-bold hover:text-orange-500"
                    >
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        className="flex flex-1 font-bold bg-orange-500"
                        onClick={() => logout()}
                    >
                        Logout
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
