import React, { useInsertionEffect } from 'react';

function UseInsertionEffect() {
    useInsertionEffect(() => {
        // Create a style tag and insert dynamic CSS
        const style = document.createElement('style');
        style.textContent = `
            .dynamic-class {
                color: red;
                background-color: yellow;
                padding: 10px;
                font-size: 2em;
            }
        `;
        document.head.appendChild(style);

        // Cleanup function to remove the style tag when the component umnounts
        return () => {
            document.head.removeChild(style);
        };

    }, [])

    return (
        <div>
            <h1>InsertionEffect</h1>
            <div className='dynamic-class mt-10'>
                Styled with useInsertionEffect
            </div>
        </div>
    )
}

export default UseInsertionEffect