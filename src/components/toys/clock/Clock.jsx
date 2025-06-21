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
        <div className="flex flex-col items-center justify-center w-screen min-h-screen p-0 bg-fixed bg-center bg-no-repeat bg-cover backdrop-blur" style={{ backgroundImage: "url(../../../assets/background.jpg)" }}>
            <div className="text-white text-6xl font-bold font-mono text-center [text-shadow:3px_3px_5px_hsla(0,3%,38%,0.78)]">
                <span>{time.toLocaleTimeString()}</span>
            </div>

            <div className="text-white text-6xl font-bold font-mono text-center [text-shadow:3px_3px_5px_hsla(0,3%,38%,0.78)]">
                <span>{formatter()}</span>
            </div>
        </div>
    )
}

export default Clock