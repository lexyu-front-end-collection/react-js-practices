import React, { useEffect, useState } from 'react'

const IntervalProblem = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(0);

    // Problem
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1);
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })


    useEffect(() => {
        const timer = setInterval(() => {
            setState(state + 1);
        }, 500)

        return () => {
            clearInterval(timer)
        }
    })

    return (
        <>
            <h1>Interval Problem 1</h1>
            <h2>Count (with delay of 1s): {count}</h2>
            <h2>State (with delay of 1s): {state}</h2>
        </>
    )
}


export default IntervalProblem