import React from 'react'
import { checkDayTime } from '@/app/utils/time-checker'


const TIME_NOW_IN_HRS = new Date().getHours()

const currentTime = checkDayTime(TIME_NOW_IN_HRS);
const capitalizedTime = currentTime.charAt(0).toUpperCase() + currentTime.slice(1);

type GreetingHeaderProps = {
    displayName: string,
}

const GreetingHeader = ({displayName} : GreetingHeaderProps) => {

    return (
        <>
            <div className='container'>
                <h1 className='text-6xl font-sans slide-in'>
                    Good {capitalizedTime} <a className='text-gray-400'>{displayName}</a>
                </h1>
            </div>

        </>
    )
}

export default GreetingHeader;
