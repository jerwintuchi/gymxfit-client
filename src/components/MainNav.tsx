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

export function MainNav() {
    return (
        <nav className="bg-black backdrop-filter backdrop-blur-sm text-white p-2 sticky top-0 z-50">
            <div className="flex justify-center items-center p-2 gap-4">
                <div className="flex gap-4">
                    <Link href="/landing">
                        <Button variant="ghost" className="hover:bg-white hover:text-black">
                            Home
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost" className="hover:bg-white hover:text-black">
                            About
                        </Button>
                    </Link>
                </div>
                <NavigationMenu className="text-black">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className=" grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <ListItem href="/sign-in" title="Sign In" className="hover:bg-black hover:text-white">
                                        Access your personalized workout dashboard.
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
