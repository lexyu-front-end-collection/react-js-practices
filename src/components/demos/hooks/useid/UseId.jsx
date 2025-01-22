import React, { useId } from 'react';

function UseId() {
    const id = useId();
    const id2 = useId();

    console.log('Generated ID 1:', id);
    console.log('Generated ID 2:', id2);

    return (
        <div>
            <h1>UseId Demo</h1>
            <div>
                <label htmlFor={id}>Enter Text</label>
                <input className='my-4 ml-4 text-black font-extrabold' id={id} type="text" />
                <br />
                <label htmlFor={id2}>Enter Text 2</label>
                <input className='my-4 ml-4 text-black font-extrabold' id={id2} type="text" />
            </div>
        </div>
    )
}

export default UseId