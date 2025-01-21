import React, { useState, useEffect } from 'react';

const UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [color, setColor] = useState('green');

    // Effect : Runs on every render
    useEffect(() => {
        console.log('Effect 1: This runs on EVERY render');
        document.title = `Count: ${count} | Name: ${name}`;
    });

    // Effect with empty dependency array - runs ONLY ONCE when component mounts
    useEffect(() => {
        console.log('Effect 2 with []: This runs ONLY ONCE when component mounts');
        document.title = `App Initialized`;
    }, []);

    // Effect : Runs only when count changes
    useEffect(() => {
        console.log('Effect 3: This runs only when COUNT changes');
        document.title = `Count: ${count} ${color}`;

        return () => {
            // Some Clean Up Code
            console.log('Effect 3 cleanup');
        }
    }, [count, color]);

    function add() {
        setCount(count => count + 1)
    }

    function subtract() {
        setCount(count => count - 1)
    }

    function changeColor() {
        setColor(color => color === 'green' ? 'red' : 'green');
    }

    return (
        <div>
            <h1 style={{ color: color }} className='text-2xl mb-4'>useEffect Demo</h1>
            <p className='text-center'>Count: {count}</p>
            <div className='flex justify-evenly my-8'>
                <button onClick={add}>
                    Increment Count
                </button>
                <button onClick={subtract}>
                    Decrement Count
                </button>
                <button onClick={changeColor}>
                    Toggle Color
                </button>
            </div>
            <div className='mt-6 mb-2 text-cyan-700'>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
            </div>
            <p>Name: {name}</p>
            <div className='mt-4'>
                <p>Open the console to see when each effect runs!</p>
            </div>
        </div>
    );
};

export default UseEffectDemo;