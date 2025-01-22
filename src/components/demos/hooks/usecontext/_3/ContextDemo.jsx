import React, { useState, createContext, useContext } from 'react';
import '@/components/demos/hooks/usecontext/ctx.css';

export const GlobalContext = createContext();

function ContextDemo() {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <GlobalContext.Provider value={{ isToggle, setIsToggle }}>
            <div>
                <p className='text-3xl'>Parent Context</p>
                <p className='text-2xl'>(createContext + useContext)</p>
                <ChildToggle />
                <ChildDisplay />
            </div>
        </GlobalContext.Provider>
    );
}


const ChildToggle = () => {
    const { setIsToggle } = useContext(GlobalContext);
    return (
        <div className='ct'>
            <h3>Child Toggle</h3>
            <button onClick={() => setIsToggle(prevState => !prevState)}>Toggle State</button>
        </div>
    )
}


const ChildDisplay = () => {
    const { isToggle } = useContext(GlobalContext);
    return (
        <div className='cd'>
            <h3>Child Display</h3>
            <p>Current State: {isToggle ? "Yes" : "No"}</p>
        </div>
    )
}

export default ContextDemo