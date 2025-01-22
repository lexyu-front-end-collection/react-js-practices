import React, { useEffect, useState } from 'react'


function BeforeUseReducer() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("BeforeUseReducer rendered with counter:", counter);
    }, [counter]);

    return (
        <>
            <h1>Before UseReducer</h1>
            <p>Count: {counter}</p>
            <div className='flex justify-start gap-8'>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => setCounter(prev => prev + 1)}
                >
                    +
                </button>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => setCounter(prev => prev - 1)}>
                    -
                </button>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => setCounter(prev => prev * 2)}>
                    *
                </button>
            </div>
        </>
    )
}

export default BeforeUseReducer