import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export const MobileSidebar = () => {
    return (
        <div className="text-white">
            <Sheet aria-describedby="mobile-navigation">
                <SheetTrigger className="md:hidden pr-4 hover:opacity-50 transition">
                    <Menu />
                </SheetTrigger>
                <SheetContent side="top" className="p-0 bg-black border-none" aria-describedby="mobile-navigation-content">
                    {/* Adding an accessible title */}
                    <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </div>
    );
};
