"use client";

import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { FaInstagram, FaSquareFacebook } from 'react-icons/fa6'

//type for social links that ensures type safety if it starts with https
// Template literal type that enforces the string to start with "https://"
type SocialLink = {
    link: `https://${string}`, // This enforces the link to start with "https://"
    icon: IconType,
};



// Object for storing social media links with type-safety
const socialObjects: Record<string, SocialLink> = {
    facebook: {
        link: "https://www.facebook.com/gxfliftingclub",
        icon: FaSquareFacebook,
    },
    instagram: {
        link: "https://www.instagram.com/gxfliftingclub",
        icon: FaInstagram,
    },
};



export default function Contacts() {
    return (
        <div className="mt-6">
            <h2 className="text-3xl font-semibold flex flex-row justify-center">Visit Us</h2>
            <br />
            <div className="container flex flex-col gap-2 items-start">
                <p className="text-lg text-gray-300 text-left" >
                    <strong className="text-2xl">Gymxfit</strong>
                    <br />
                    191 Paso De Blas Rd.
                    <br />
                    Valenzuela City, 1442, Philippines
                    <br />
                    (+63) 0977 649 5770
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href={socialObjects.facebook.link}>
                        {socialObjects.facebook.icon({ size: 32, className: "hover:text-[#316FF6]" })}
                    </Link>
                    <Link href={socialObjects.instagram.link}>
                        {socialObjects.instagram.icon({ size: 32, className: "hover:text-[#C23785]" })}
                    </Link>
                </div>
            </div>{ /*  */}
        </div>
    )
}
