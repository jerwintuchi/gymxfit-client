"use client";

import { CalendarClockIcon, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";


const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: CalendarClockIcon,
        label: "Attendance",
        href: "/attendance"
    }
]
export const SidebarRoutes = () => {
    const routes = guestRoutes;
    return (
        <div className="flex flex-col w-full group">
            {
                routes.map((route) => (
                    <SidebarItem
                        key={route.href}
                        label={route.label}
                        icon={route.icon}
                        href={route.href}
                    />
                ))
            }
        </div>
    );
}
