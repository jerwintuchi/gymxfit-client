"use client";

import { MainSectionProps } from "@/lib/about-page-props.ts/about-page-props";
import { useState, useEffect } from "react";
import SpinnerLoader from "@/components/mediaLoader";

const iFrameStyle = {
    border: 0,
};

const MainHeroSection = ({ aboutDescription, missionParagraph, valuesList }: MainSectionProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleIframeLoad = () => {
        console.log("iframe loaded");
        setIsLoading(false);
    };

    // Add a timeout as a fallback in case the onLoad event fails (optional)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isLoading) handleIframeLoad()
        }, 500); // 5 millisecond fallback
        return () => clearTimeout(timeout);
    }, [isLoading]);

    return (
        <div className="pt-[70px] bg-black text-white overflow-hidden">
            <section className="py-16 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Text Section */}
                    <div>
                        <h1 className="text-4xl font-bold mb-6">About Us</h1>
                        <p className="text-lg mb-8 text-gray-300">{aboutDescription}</p>
                        <p className="text-lg mb-8 text-gray-300">
                            Our app is designed to complement your training, providing you with the tools you need to track your
                            progress, stay motivated, and connect with our community.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-300">{missionParagraph}</p>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
                        {valuesList}
                    </div>

                    {/* Map Section */}
                    <div>
                        <div className="rounded-3xl overflow-hidden relative">
                            {/* Spinner */}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                                    <SpinnerLoader src={"/static/tube-spinner.svg"} width={100} height={100} />
                                </div>
                            )}

                            {/* iFrame */}
                            <iframe
                                id="map-iframe"
                                src="https://www.google.com/maps/embed?pb=!4v1735036020427!6m8!1m7!1s-edeTeluKLjM_nuj_r3E3Q!2m2!1d14.70648285365623!2d120.9904085808995!3f323.1020580590271!4f-9.197778090185608!5f0.7820865974627469"
                                width="737"
                                height="450"
                                style={iFrameStyle}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                onLoad={handleIframeLoad}
                                className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
                            />
                        </div>
                        <div className="mt-6">
                            <h2 className="text-3xl font-semibold mb-2">Visit Us</h2>
                            <br />
                            <p className="text-lg text-gray-300">
                                <strong className="text-2xl">Gymxfit</strong>
                                <br />
                                191 Paso De Blas Rd.
                                <br />
                                Valenzuela City, 1442, Philippines
                                <br />
                                {"(+63) 0977 649 5770"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainHeroSection;
