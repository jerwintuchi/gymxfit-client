import React from 'react'
import GoalDropdown from './GoalDropdown'


export default function UserGoal() {
    const [goal, setGoal] = React.useState('setting my goal');

    return (
        <div className="flex flex-col bg-gray-900 p-4 rounded-lg border border-gray-800">
            <p className='text-center text-lg font-semibold mb-4'>I&apos;m currently {goal}</p>
            <GoalDropdown goal={goal} setGoal={setGoal} />
        </div>
    )
}
