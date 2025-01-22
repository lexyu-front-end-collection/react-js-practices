import React, { useRef, useImperativeHandle, forwardRef } from 'react'


function UseImperativeHandle() {
    const inputRef = useRef(null);

    return (
        <div className='flex flex-col items-center'>
            <h1>ImperativeHandle</h1>
            <CustomInput ref={inputRef} />
            <button
                className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded' onClick={() => inputRef.current.focus()}>
                Focus Input
            </button>
            <button
                className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded' onClick={() => inputRef.current.clear()}>
                Clear Input
            </button>
        </div>
    )
}

const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    // Expose methods or properties to the parent using useImperativeHandle
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current.focus(),
        clear: () => inputRef.current.value = '',
    }));
    return <input
        className='text-black font-extrabold w-1/2'
        ref={inputRef} type='text' placeholder='Child Compoent Input Text' />
})


export default UseImperativeHandle