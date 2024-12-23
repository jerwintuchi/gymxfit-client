import { MainNav } from "@/components/MainNav";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex flex-col bg-black overflow-hidden">
            {/* Navbar */}
            <div className="h-[70px] fixed top-0 w-full z-50 bg-black">
                <MainNav />
            </div>
            {/* Main Content */}
            <main className="pt-[70px] flex-1 w-full overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default PublicLayout;
