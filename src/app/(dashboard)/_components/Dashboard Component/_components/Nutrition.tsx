import React from 'react';

const Nutrition = () => {
    return (
        <div className="bg-slate-700 rounded-lg p-6 shadow-md flex-grow h-fit">
            <div className="flex justify-between items-center mb-4"> {/* Header with buttons container */}
                <h2 className="text-xl font-semibold text-gray-200 lg:text-4xl">Nutrition</h2>
                <div className="flex space-x-2"> {/* Button group */}
                    <button className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-3 rounded-md text-sm">
                        Track
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-3 rounded-md text-sm">
                        History
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-3 rounded-md text-sm">
                        Macros
                    </button>
                </div>
            </div>

            <div className="mb-6"> {/* Description container */}
                <p className="text-gray-400 text-sm lg:text-lg">Track your daily calorie intake, macros, and meals here.</p>
            </div>

            <div> {/* Macros section */}
                <h3 className="text-lg font-semibold mt-2 text-gray-200 lg:text-2xl">My Macros</h3>
                <dl className="mt-4 space-y-2 text-gray-400 text-sm lg:text-lg"> {/* Definition list for key-value pairs */}
                    <div className='macro group text-gray-400 '>
                        <div className="flex justify-between lg:text-md">
                            <dt>Current Calories:</dt>
                            <dd className='text-gray-200'>1500</dd>
                        </div>
                        <div className="flex justify-between lg:text-md">
                            <dt>Remaining Calories:</dt>
                            <dd className='text-gray-200'>500</dd>
                        </div>
                        <div className="flex justify-between lg:text-md">
                            <dt>Protein:</dt>
                            <dd className='text-gray-200'>50g</dd>
                        </div>
                        <div className="flex justify-between lg:text-md">
                            <dt>Carbs:</dt>
                            <dd className='text-gray-200'>100g</dd>
                        </div>
                        <div className="flex justify-between lg:text-md">
                            <dt>Fat:</dt>
                            <dd className='text-gray-200'>25g</dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Nutrition;