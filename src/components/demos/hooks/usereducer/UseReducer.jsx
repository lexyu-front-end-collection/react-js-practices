import React, { useEffect, useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'multiply':
            return { count: state.count * 2 };
        default:
            console.log("No Action Type");
            return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    useEffect(() => {
        console.log("UseReducer rendered with count:", state.count);
    }, [state.count]);

    return (
        <>
            <h1>UseReducer</h1>
            <p>Count: {state.count}</p>
            <div className='flex justify-start gap-8'>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => dispatch({ type: 'increment' })}>
                    +
                </button>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => dispatch({ type: 'decrement' })}>
                    -
                </button>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => dispatch({ type: 'multiply' })}>
                    *
                </button>
            </div>
        </>
    )
}

export default UseReducer