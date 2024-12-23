import { MainNav } from "@/components/MainNav";


const PublicLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="h-screen">
            {/* Navbar */}
            <div className="h-[70px] fixed inset-y-0 w-full z-50">
                <MainNav />
            </div>
            {/* Main Content */}
            <main className="pt-[70px] h-full w-full bg-black no-scroll">
                {children}
            </main>
        </div>
    );
};

export default PublicLayout;
