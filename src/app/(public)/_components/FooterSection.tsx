import { Button } from "@/components/ui/button";
import Link from "next/link";

const FooterSection = () => {
    return (
        <section className="py-8 px-6 md:px-12 lg:px-24 bg-gray-900 text-center">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Fitness Journey?</h2>
                <p className="text-lg text-gray-300 mb-6">
                    Take the first step towards a healthier, stronger, and more confident you.
                    Download the Gymxfit app today and start achieving your goals!
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <Link href="/sign-up" prefetch={true}>
                        <Button className="bg-gray-500 border text-white py-6 px-8 rounded-md text-lg font-medium hover:bg-white hover:text-black transition duration-300">
                            Get Started Now
                        </Button>
                    </Link>
                    <Link href="/about" prefetch={true}>
                        <Button className="bg-transparent border border-white text-white py-3 px-8 rounded-md text-lg font-medium hover:bg-gray-600 hover:text-white transition duration-300">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-6">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Gymxfit. All rights reserved.</p>
            </div>
        </section>
    );
};

export default FooterSection;
