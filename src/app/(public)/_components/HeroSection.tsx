import { Button } from "@/components/ui/button";
import { HeroSectionProps } from "@/lib/landing-page-props/sections-props";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ title, description, bgImageUrl }: HeroSectionProps) => {
    return (
        console.log(bgImageUrl),
        <section className={`relative h-[calc(100vh-70px)] flex flex-col justify-center items-center bg-cover bg-center`}
            style={{ backgroundImage: `url(${bgImageUrl})` }}> {/* Replace the image dynamically */}
            <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
            <div className="flex flex-col items-center relative z-10 text-center">
                <Image src={"/static/mainlogo-nobg.png"} height={300} width={300} alt={"Gymxfit Logo"} />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">{title}</h1>
                <p className="text-lg md:text-xl mb-8">{description}</p>
                <Link href="/sign-up">
                    <Button variant="ghost" className="bg-white  text-black py-3 px-6 rounded-full font-medium hover:bg-gray-200 transition duration-300">
                        Start Now
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection;