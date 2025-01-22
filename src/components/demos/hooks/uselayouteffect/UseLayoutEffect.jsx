import React, { useState, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {
    const [boxWidth, setBoxWidth] = useState(0);
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        // Measure the width of the box immediately after rendering
        if (boxRef.current) {
            console.log(boxRef.current);
            setBoxWidth(boxRef.current.offsetWidth);
        }
    });

    return (
        <>
            <h1>LayoutEffect</h1>
            <div>
                <div ref={boxRef}
                    style={{
                        width: '90%',
                        height: '100px',
                        backgroundColor: 'lightblue'
                    }}>
                    Resize Me!
                </div>
                <p>The box width is: {boxWidth}px</p>
            </div>
        </>
    )
}


export default UseLayoutEffect