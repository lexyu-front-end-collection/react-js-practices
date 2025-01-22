import './clock.css'
import React, { useState, useEffect } from 'react';

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    function formatter() {
        let hours = time.getHours().toString().padStart(2, "0")
        let minutes = time.getMinutes().toString().padStart(2, "0")
        let seconds = time.getSeconds().toString().padStart(2, "0")
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12
        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }

    return (
        <div className='container'>
            <div className='clock'>
                <span>{time.toLocaleTimeString()}</span>
            </div>
            
            <div className='clock'>
                <span>{formatter()}</span>
            </div>
        </div>
    )
}

export default Clock