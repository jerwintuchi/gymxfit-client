function Notifications() {
    return (
        <div className="card bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <ul className="list-disc pl-5">
                <li>You have a reminder for membership renewal.</li>
                <li>Your attendance has been marked as low this week.</li>
            </ul>
        </div>
    );
}

export default Notifications;
