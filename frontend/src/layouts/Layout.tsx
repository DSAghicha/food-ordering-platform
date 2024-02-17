import { Footer, Header, Hero } from "@/components";
import { Props } from "@/interfaces";
import { FC } from "react";

const Layout: FC<Props> = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
