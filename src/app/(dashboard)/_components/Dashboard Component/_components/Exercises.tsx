import React from 'react'

export default function Exercises() {
    // Define the dummy data structure
    const sampleExercises: Record<string, { name: string; sets: number; reps: number }[]> = {
        "Day 1": [
            { name: "Push-ups", sets: 3, reps: 10 },
            { name: "Squats", sets: 3, reps: 12 },
            { name: "Plank", sets: 3, reps: 30 }, // Seconds instead of reps
        ],
        "Day 2": [
            { name: "Pull-ups", sets: 3, reps: 8 },
            { name: "Lunges", sets: 3, reps: 10 },
            { name: "Sit-ups", sets: 3, reps: 15 },
        ],
        "Day 3": [
            { name: "Bench Press", sets: 3, reps: 8 },
            { name: "Deadlifts", sets: 3, reps: 6 },
            { name: "Overhead Press", sets: 3, reps: 8 },
        ],
        "Day 4": [
            { name: "Squats", sets: 3, reps: 10 },
            { name: "Push-ups", sets: 3, reps: 12 },
            { name: "Plank", sets: 3, reps: 30 }, // Seconds instead of reps
        ],
        "Day 5": [
            { name: "Pull-ups", sets: 3, reps: 8 },
            { name: "Lunges", sets: 3, reps: 10 },
            { name: "Sit-ups", sets: 3, reps: 15 },
        ],
        "Day 6": [
            { name: "Bench Press", sets: 3, reps: 8 },
            { name: "Deadlifts", sets: 3, reps: 6 },
            { name: "Overhead Press", sets: 3, reps: 8 },
        ],
        "Day 7": [
            { name: "Squats", sets: 3, reps: 10 },
            { name: "Push-ups", sets: 3, reps: 12 },
            { name: "Plank", sets: 3, reps: 30 }, // Seconds instead of reps
            { name: "Pull-ups", sets: 3, reps: 8 },
            { name: "Lunges", sets: 3, reps: 10 },
            { name: "Sit-ups", sets: 3, reps: 15 },
        ],
    };

    return (
        <button> {/* Will make this a popup modal for the contents to be editable */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(sampleExercises).map(([day, exercises], index) => (
                    <div
                        key={index}
                        className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 hover:border-gray-200"
                    >
                        <h3 className="text-2xl font-semibold text-gray-200 mb-4">{day}</h3>
                        <ul className="space-y-3">
                            {exercises.map((exercise, idx) => (
                                <li key={idx} className="text-gray-400">
                                    <p className="font-medium text-gray-100">{exercise.name}</p>
                                    <p className="text-sm">{exercise.sets} Sets × {exercise.reps} Reps</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </button>
    )
}
