"use client"

import React, { useEffect, useState } from 'react'
import SpinnerLoader from '@/components/mediaLoader';
const iFrameStyle = {
    border: 0,
};

export default function IframeMap() {

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
    )
}
