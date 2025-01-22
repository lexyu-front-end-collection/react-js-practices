import React, { useState, useEffect, useRef } from 'react';



function UseRefDemo2() {

    const onClick = () => {
        inputRef.current.focus()
        inputRef.current.value = "Hello World"
        console.log(inputRef.current.value);
    };

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    });

    // -------------------------------------------

    const [count, setCount] = useState(0);
    const previousCount = useRef(0);
    
    useEffect(() => {
        previousCount.current = count;
    }, [count]);

    //--------------------------------------------

    // 更新 previousCount.current 不會重新渲染Component
    useEffect(() => {
        const interval = setInterval(() => {
            previousCount.current += 1; // 更新 previousCount.current
            console.log("Updated previousCount.current to:", previousCount.current);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div>
                <h1>UseRef Demo 2</h1>
                <input type="text" ref={inputRef} className='text-black font-extrabold' />
                <br />
                <button
                    className='my-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={onClick}>Click</button>

            </div>
            <div>
                <h3>Count: {count}</h3>
                <h3>Previous Count: {previousCount.current}</h3>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => setCount(prev => prev + 1)}>Increment Counter</button>
            </div>
        </>
    )
}

export default UseRefDemo2