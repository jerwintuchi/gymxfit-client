import { SignedIn } from "@clerk/nextjs";
import { Navbar } from "./_components/Sidebar Components/navbar";
import Sidebar from "./_components/Sidebar Components/sidebar";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <SignedIn>
                <div className="h-[80px] md:pl-40 fixed inset-y-0 w-full z-50">
                    <Navbar /> {/* navbar for signed in users */}
                </div>
                <div className="hidden md:flex h-full w-40 flex-col fixed inset-y-0 z-50">
                    <Sidebar />
                </div>
                <main className="md:pl-40 pt-[80px] h-fit flex min-h-screen bg-[#ffffff]">
                    {children}
                </main>
            </SignedIn>
        </div>
    );
}

export default DashboardLayout;