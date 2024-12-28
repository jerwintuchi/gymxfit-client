const RecentActivity = ({ }) => {
    return (
        <div className="card bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <ul className="list-disc pl-5">
                <li>Last Login: {"new Date().toLocaleString()"}</li>
                <li>Last Attendance: {"1 ? new Date(0).toLocaleString()"}</li>
            </ul>
        </div>
    );
}

export default RecentActivity;
