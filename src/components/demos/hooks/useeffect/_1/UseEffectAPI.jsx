import React, { useState, useEffect } from 'react';

function UseEffectAPI() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // https://jsonplaceholder.typicode.com/todos
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    // Occur Twice
    // useEffect(() => {
    //     console.log(`1. isLoading = ${isLoading}`);
    // })

    useEffect(() => {
        console.log(`2. isLoading = ${isLoading}`);
    }, [isLoading])

    return (
        <>
            <button onClick={() => setIsLoading(prevState => !prevState)}>{isLoading ? "Stop" : "Start"}</button>
            <h1 className='text-2xl'>useEffect API</h1>
            <div>
                <ol>
                    {
                        Array.isArray(data) && data.length > 1
                            ? data.map((item) => (<li key={item.id}>{item.id} - {item.title}</li>))
                            : <li>{data.id}. {data.title}</li>
                    }
                </ol>
            </div>
        </>
    )
}

export default UseEffectAPI