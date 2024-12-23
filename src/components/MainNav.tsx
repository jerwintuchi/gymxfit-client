"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function MainNav() {
    const currentRoute = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-3 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black/0 to-gray-900/50 backdrop-blur-sm border-b border-gray-800">
            <div className="flex justify-between items-center gap-4">
                <div className="flex gap-4">
                    <Link href="/landing">
                        <Button variant="ghost" className="text-white hover:bg-black hover:text-white/55 text-md">
                            Home
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost" className="text-white hover:bg-black hover:text-white/55 text-md">
                            About
                        </Button>
                    </Link>

                    <NavigationMenu className="text-black">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className=" grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <ListItem href="/sign-in" title="Sign In" className="hover:bg-black hover:text-white">
                                            Access your personalized workout.
                                        </ListItem>
                                        <ListItem href="/sign-up" title="Register" className="hover:bg-black hover:text-white">
                                            Join us today and unlock exclusive features crafted just for you.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
