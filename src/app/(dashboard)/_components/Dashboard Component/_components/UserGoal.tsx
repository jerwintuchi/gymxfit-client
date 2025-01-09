import { useEffect, useState } from 'react';
import GoalDropdown from './GoalDropdown';
import axios from 'axios';
import { useUserContext } from '@/app/contextProviders/UserProvider';
import { showPromiseToast } from '@/app/utils/toasts/showPromiseToast';


const UserGoal = () => {
    const { goal, userId, dispatch } = useUserContext();
    const [currentGoal, setCurrentGoal] = useState(goal || 'What is your fitness goal?');

    useEffect(() => {
        if (goal) {
            setCurrentGoal(goal);
        }
    }, [goal]);

    const handleGoalUpdate = async (selectedGoal: string) => {
        if (goal === selectedGoal) {
            console.log('Goal is already selected no need to update');
            return;
        }

        // Create a promise for the goal update request
        const goalUpdatePromise = axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}/users/update/goal`, {
            userId: userId,
            goal: selectedGoal,
        });

        // Call the reusable toast function
        showPromiseToast(goalUpdatePromise, {
            loading: 'Updating goal...',
            success: 'Goal updated successfully!',
            error: 'Error updating goal',
        });

        // Handle the response and update state if the request is successful
        try {
            const response = await goalUpdatePromise;
            if (response.status === 200) {
                setCurrentGoal(selectedGoal);
                dispatch({ type: 'SET_USER', payload: { goal: selectedGoal } });
                console.log('Goal updated successfully to', selectedGoal);
            }
        } catch (error) {
            console.error('Error updating goal:', error);
        }
    };

    let goalDisplay;

    switch (goal) {
        case 'BULK':
            goalDisplay = 'Bulking';
            break;
        case 'CUT':
            goalDisplay = 'Cutting';
            break;
        case 'BODY_RECOMPOSITION':
            goalDisplay = 'Body Recompositioning';
            break;
        case 'LEAN_BULK':
            goalDisplay = 'Lean Bulking';
            break;
        default:
            goalDisplay = 'setting up my Goal';
    }

    return (

        <div className="flex flex-col bg-gray-900 p-4 rounded-lg border border-gray-800">
            <p className="text-center text-lg font-semibold mb-4">{goal ? (`I'm currently ${goalDisplay}`) : ('What is your fitness goal?')}</p>
            <GoalDropdown goal={currentGoal} setGoal={handleGoalUpdate} />
            <div>
            </div>

        </div>
    );
};

export default UserGoal;
