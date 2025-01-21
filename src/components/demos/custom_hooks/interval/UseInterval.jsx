import React, { useEffect, useRef, useState } from 'react'

function useInterval(callback, delay) {
    const savedCallback = useRef(callback);

    // 記住最新的 callback 
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // 設定 interval
    useEffect(() => {
        // 如果 delay 是 null,不執行
        if (delay === null) return;

        const id = setInterval(() => savedCallback.current(), delay);

        // cleanup function 清理 interval
        return () => clearInterval(id);
    }, [delay]);
}


const UseIntervalDemo = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(0);

    useInterval(() => {
        setCount(count + 1);
    }, 1000);

    useInterval(() => {
        setState(state + 1);
    }, 500);

    return (
        <>
            <h2>Count (with delay of 1s): {count}</h2>
            <h2>State (with delay of 500ms): {state}</h2>
        </>
    )
}

export default UseIntervalDemo