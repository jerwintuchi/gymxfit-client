
export default function Attendance() {
    return (
        <div className="text-white min-h-screen w-full bg-black">
            <h1 className="text-4xl font-bold mb-6">Attendance</h1>
            <input
                type="date"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
            />
        </div>
    )
}
