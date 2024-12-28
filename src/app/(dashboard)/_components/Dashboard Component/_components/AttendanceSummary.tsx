const AttendanceSummary = ({ }) => {
    const dummyExpiryDate = "2024-12-27";
    return (
        <div className="card bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Attendance Summary</h3>
            <div className="flex justify-between mb-4">
                <span className="text-sm">Weekly Visits:</span>
                <p>{"weeklyVisits"}</p>
            </div>
            <div className="flex justify-between mb-4">
                <span className="text-sm">Monthly Visits:</span>
                <p>{"monthlyVisits"}</p>
            </div>
            <div className="flex justify-between">
                <span className="text-sm">Membership Expiry:</span>
                {1 ? (
                    <p>{dummyExpiryDate}</p>
                ) : (
                    <p>No expiration</p>
                )}
            </div>
        </div>
    );
}

export default AttendanceSummary;
