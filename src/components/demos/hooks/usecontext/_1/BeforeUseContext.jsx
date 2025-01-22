import React, { useState } from 'react';
import '@/components/demos/hooks/usecontext/non-ctx.css';

function BeforeUseContext() {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <div>
            <h2 className='text-3xl'>Parent Before UseContext</h2>
            <ChildToggle setIsToggle={setIsToggle} />
            <ChildDisplay isToggle={isToggle} />
        </div>
    );
}


const ChildToggle = ({ setIsToggle }) => {

    return (
        <div className='ct'>
            <h3>Child Toggle</h3>
            <button onClick={() => setIsToggle(prevState => !prevState)}>Toggle State</button>
        </div>
    )
}


const ChildDisplay = ({ isToggle }) => {

    return (
        <div className='cd'>
            <h3>Child Display</h3>
            <p>Current State: {isToggle ? "Yes" : "No"}</p>
        </div>
    )
}

export default BeforeUseContext