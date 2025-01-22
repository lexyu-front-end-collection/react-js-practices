import './stopwatch.css'
import React, { useState, useEffect, useRef } from 'react';


function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning])


    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
        const date = new Date(startTimeRef.current);
        console.log('ISO 格式:', date.toISOString());                    // 2024-12-11T14:11:08.000Z
        console.log('本地時間:', date.toLocaleString());                 // 2024/12/11 下午10:11:08
        console.log('本地時間(完整):', date.toLocaleString('zh-TW', {   // 2024年12月11日 下午10:11:08
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }));
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatter() {
        let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000 % 60));
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);
        hours = hours.toString().padStart(2, '0')
        mins = mins.toString().padStart(2, '0')
        seconds = seconds.toString().padStart(2, '0')
        milliseconds = milliseconds.toString().padStart(2, '0')
        return `${hours}:${mins}:${seconds}:${milliseconds}`
    }


    return (
        <div className='stopwatch'>
            <div className='display'>
                <div>Stopwatch</div>
                <div>{formatter()}</div>
            </div>
            <div className='control'>
                <button className='start-btn' onClick={start}>Start</button>
                <button className='stop-btn' onClick={stop}>Stop</button>
                <button className='reset-btn' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch