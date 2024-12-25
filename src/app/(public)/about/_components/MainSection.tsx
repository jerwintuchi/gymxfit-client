import { MainSectionProps } from "@/lib/about-page-props.ts/about-page-props";



const MainHeroSection = ({ aboutDescription, missionParagraph, valuesList, iframeMap, contactDetails }: MainSectionProps) => {


    return (
        <div className="pt-[70px] bg-black text-white overflow-hidden">
            <section className="py-14 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* About Section  */}
                    <div>
                        {aboutDescription} {/* COMPONENT PROPS*/}{/* About Section Description */}
                        {missionParagraph} {/* COMPONENT PROPS*/}{/* About Mission Description */}
                        {valuesList} {/* COMPONENT PROPS*/}{/* About Values Description */}
                    </div>


                    <div>
                        {/* Map Section */}
                        {iframeMap}
                        {/* Contact Details and Social Links */}
                        {contactDetails}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainHeroSection;
