import { useUserContext } from "@/app/contextProviders/UserProvider";





const UserInformation = () => {
    const { firstName, role } = useUserContext();

    //const [lastVisit, setLastVisit] = useState<string | null>(null);

    /*useEffect(() => {
        setLastVisit(new Date().toISOString()); // Format after hydration
    }, []);*/

    return (
        <div className="card bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">User Information</h3>
            <div className="flex justify-between mb-4">
                <span className="text-sm">Name:</span>
                <p>{firstName || 'User'}</p>
            </div>
            <div className="flex justify-between mb-4">
                <span className="text-sm">Role:</span>
                <p>{role ? role : 'User'}</p>
            </div>
            <div className="flex justify-between mb-4">
                <span className="text-sm">Total Visits:</span>
                <p>{"totalVisits"}</p>
            </div>
            <div className="flex justify-between">
                <span className="text-sm">Last Visit:</span>
                <p>{"lastVisit"}</p>
            </div>
        </div>
    );
}

export default UserInformation;
