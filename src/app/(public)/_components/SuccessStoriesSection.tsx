import Image from "next/image";

const SuccessStoriesSection = () => {
    const stories = [
        {
            name: "Toji F.",
            testimonial: "This app completely changed how I track my workouts. I’ve never been this consistent!",
            image: "/static/toji.webp",
        },
        {
            name: "Maki Z.",
            testimonial: "The features are incredible! I've hit my weightlifting PRs thanks to the progress tracking tools.",
            image: "/static/maki.webp",
        },
        {
            name: "Ohma T.",
            testimonial: "From feeling lost to being in control of my fitness journey, this app made all the difference.",
            image: "/static/ohma.webp",
        },
    ];

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-8 md:px-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Real Stories, Real Transformations
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                    Join thousands of others who have transformed their fitness journeys.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center bg-gradient-to-tr from-black to-gray-900  hover:bg-gradient-to-tl hover:from-black hover:to-gray-900"
                        >
                            <Image
                                src={story.image}
                                alt={`${story.name}'s transformation`}
                                width={100}
                                height={100}
                                style={{ width: "auto", height: "auto" }}
                                className="rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-gray-300"><cite>{story.name}</cite></h3>
                            <p className="text-gray-400">&quot;{story.testimonial}&quot;</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;
