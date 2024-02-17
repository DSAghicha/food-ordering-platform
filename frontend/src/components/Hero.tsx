import { HeroImg } from "@/assets";
import { FC } from "react";

const Hero: FC = () => {
    return (
        <div>
            <img src={HeroImg} className="w-full max-h-[600px] object-cover" />
        </div>
    );
};

export default Hero;
