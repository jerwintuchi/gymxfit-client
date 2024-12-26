import React from 'react'
import { checkDayTime } from '@/app/utils/time-checker'
import { useUserContext } from '@/app/contextProviders/UserProvider'

const TIME_NOW_IN_HRS = new Date().getHours()

const currentTime = checkDayTime(TIME_NOW_IN_HRS);
const capitalizedTime = currentTime.charAt(0).toUpperCase() + currentTime.slice(1);

const GreetingHeader = () => {
    const { firstName } = useUserContext();
    const displayName = firstName || "User";

    return (
        <>
            <div className='justify-center'>
                <h1 className='text-4xl'>
                    Good {capitalizedTime}, {displayName}
                </h1>
            </div>

        </>
    )
}

export default GreetingHeader;
