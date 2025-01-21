import React, { useState, useEffect } from 'react';

const UseEffectWindowEvent = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Event Listener added");

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("Event Listener removed");
        };
    }, [])

    useEffect(() => {
        document.title = `Window Size: ${width} x ${height}`
        console.log(`title updated`);
    }, [width, height])

    return (
        <>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </>
    )
}

export default UseEffectWindowEvent
