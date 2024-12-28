import React from "react";
import Exercises from "./Exercises";

export default function ProgramCalendar() {


    return (
        <div className="p-6 max-w-7xl mx-auto bg-black">
            <div className="flex flex-row justify-start">
                <h1 className="text-4xl font-bold mb-8 text-gray-100">
                    Weekly Workout Program
                </h1>
            </div>

            <Exercises />
        </div>
    );
}
