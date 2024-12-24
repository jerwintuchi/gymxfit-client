import React from "react";
import HeroSection from "../_components/HeroSection";
import FeaturesSection from "../_components/FeaturesSection";
import BenefitsSection from "../_components/BenefitsSection";
import FooterSection from "../_components/FooterSection";
import SuccessStoriesSection from "../_components/SuccessStoriesSection";


const LandingPage = () => {
    return (
        <div className=" bg-black text-white overflow-hidden"> {/* Added overflow-hidden */}
            {/* Hero Section */}
            <header aria-label="Hero Section">
                <HeroSection
                    title="Empower Your Fitness Journey"
                    description="The all-in-one fitness app for tracking workouts, monitoring progress, and staying motivated."
                    bgImageUrl="/static/greek-back.jpg"
                />
            </header>
            {/* Features Section */}
            <FeaturesSection />
            {/* Benefits Section */}
            <BenefitsSection />
            {/*Success Stories Section */}
            <SuccessStoriesSection />
            {/* Footer Section */}
            <FooterSection />

        </div >
    );
};

export default LandingPage;