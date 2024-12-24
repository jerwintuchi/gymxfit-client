import { GoGoal } from "react-icons/go";
import { RiUserCommunityFill } from "react-icons/ri";
import { TfiViewListAlt } from "react-icons/tfi";

const FeaturesSection = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-black to-gray-900">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <TfiViewListAlt size={64} className="mx-auto mb-4" /> {/*Workouts Icon */}
                    <h2 className="text-2xl font-semibold mb-2">Track Your Workouts</h2>
                    <p className="text-gray-300">Easily log your exercises, sets, reps, and track your progress over time.</p>
                </div>
                <div className="text-center">
                    <GoGoal size={64} className="mx-auto mb-4" /> {/* Goals Icon */}
                    <h2 className="text-2xl font-semibold mb-2">Stay Motivated</h2>
                    <p className="text-gray-300">Set goals, track your achievements, and stay motivated on your fitness journey.</p>
                </div>
                <div className="text-center">
                    <RiUserCommunityFill size={64} className="mx-auto mb-4" /> {/* Community Icon */}
                    <h2 className="text-2xl font-semibold mb-2">Real-Time Community (Coming Soon)</h2>
                    <p className="text-gray-300">Connect with other fitness enthusiasts, participate in challenges, and find your support system.</p>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;