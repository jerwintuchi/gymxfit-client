import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'


type GoalOptions = {
    goal: string;
    setGoal: (position: string) => void
}
export default function GoalDropdown({ goal, setGoal, }: GoalOptions) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='text-white border-white border-2 rounded-full px-4 py-2 hover:bg-white hover:text-black'>Set Goal</DropdownMenuTrigger>
            <DropdownMenuContent className='bg-gray-900 text-white '>
                <DropdownMenuLabel>Select your goal</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={goal} onValueChange={setGoal}>
                    <DropdownMenuRadioItem value="Bulking">Bulking</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Cutting">Cutting</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Body Recompositioning">Body Recompositioning</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Lean Bulking">Lean Bulking</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
