import Image from "next/image";
const BenefitsSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-black">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="relative aspect-w-1 aspect-h-1 md:aspect-auto md:h-[400px] sm:h-[120px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black mix-blend-multiply rounded-3xl"></div> {/* Vignette Overlay */}
                    <Image
                        src={"/static/woman-px-nobg.png"}
                        alt="Benefits Image"
                        width={300}
                        height={300}
                        style={{ height: "auto", width: "auto" }}
                        className="rounded-3xl "
                    />
                </div>
                <div className="text-white">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight"> {/* Responsive font size */}
                        Achieve Your Fitness Goals
                    </h2>
                    <ul className="space-y-4 text-base md:text-lg list-disc pl-6"> {/* Responsive font size */}
                        <li className="flex items-start md:items-center gap-2"> {/* Improved list item alignment */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 mt-1 md:mt-0 shrink-0"> {/* Added margin top on mobile and shrink-0 */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            User-friendly interface for easy tracking.
                        </li>
                        <li className="flex items-start md:items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 mt-1 md:mt-0 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Data-driven insights to optimize your workouts.
                        </li>
                        <li className="flex items-start md:items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 mt-1 md:mt-0 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Personalized plans to help you reach your goals faster.
                        </li>
                        <li className="flex items-start md:items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500 mt-1 md:mt-0 shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Stay motivated and engaged with progress tracking.
                        </li>
                    </ul>
                </div>
            </div>
        </section >

    )
}
export default BenefitsSection;