import { FC } from "react";
import { Link } from "react-router-dom";
import { Logo, MobileNav } from ".";

const Header: FC = () => {
    return (
        <header className="border-b-2 border-b-orange-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    className="text-3xl font-bold tracking-tight text-orange-500"
                    to="/"
                >
                    <Logo />
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
