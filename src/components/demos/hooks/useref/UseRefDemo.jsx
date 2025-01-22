import React, { useState, useEffect, useRef } from 'react'


function UseRefDemo() {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const inputRef = useRef(null);

    function stateCounter() {
        setCount(count + 1);
    }

    function refCounter() {
        countRef.current++;
        console.log(countRef.current);

    }

    function handleRefClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    useEffect(() => {
        console.log("Component Rendered");
    });

    useEffect(() => {
        console.log(inputRef);
    }, [])

    return (
        <div>
            <h1>UseRef Demo 1</h1>
            <h2>Count: {count}</h2>
            <button 
            className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
            onClick={stateCounter}>State Click</button>
            <div className='my-8'>
                <h2>Count: {countRef.current}</h2>
                <button 
                className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                onClick={() => {
                    refCounter();
                    handleRefClick();
                }}>Ref Click</button>
                <input className='my-4 ml-4 text-black font-extrabold' ref={inputRef} />
            </div>
        </div>
    )
}

export default UseRefDemo