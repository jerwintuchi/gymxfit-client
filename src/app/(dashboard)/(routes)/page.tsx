"use client"

import { useUserContext } from '@/app/contextProviders/UserProvider'
import React from 'react'

export default function Dashboard() {
    const currentUser = useUserContext();
    return (
        <div>
            {currentUser.role}
        </div>
    )
}
