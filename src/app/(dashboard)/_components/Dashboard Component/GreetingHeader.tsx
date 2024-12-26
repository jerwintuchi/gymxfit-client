"use client";

import React from 'react'
import { checkDayTime } from '@/app/utils/time-checker'
import { useUserContext } from '@/app/contextProviders/UserProvider';

const TIME_NOW_IN_HRS = new Date().getHours()

const currentTime = checkDayTime(TIME_NOW_IN_HRS)

const GreetingHeader = () => {
    const { role } = useUserContext();

    return (
        <>
            <div className='justify-center'>
                <h1 className='text-4xl'>
                    Good {currentTime} , {role}
                </h1>
            </div>

        </>
    )
}

export default GreetingHeader;
