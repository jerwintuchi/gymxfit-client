
import Link from 'next/link';

function UserDashboard() {
    return (
        <>
            <main className="container mx-auto p-4">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">My Account</h2>
                    <div className="card bg-gray-100 p-4 rounded-lg">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-semibold">Name:</h3>
                            <p>John Doe</p>
                        </div>
                        {/* ... other account details with the same flex layout */}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                    <ul className="list-disc">
                        <li>Last Login: 2024-12-25 10:00 AM</li>
                        <li>Last Attendance: 2024-12-24 11:00 AM</li>
                    </ul>
                </section>

                <Link href="/attendance">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Attendance</button>
                </Link>
            </main>
        </>
    );
}

export default UserDashboard;