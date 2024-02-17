import { Menu } from "lucide-react";
import { FC } from "react";
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
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    Welcome to <Logo />
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">
                        Login
                    </Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
