import React, { useState } from 'react'
import { fakeData } from '@/utils/fake.js'


function BeforeUseMemo() {
    const [count, setCount] = useState(0)
    const [items] = useState(fakeData)
    const selected = items.find(item => item.isSelected);

    console.log("BeforeUseMemo - Selected Item:", selected);
    console.log("BeforeUseMemo - Count:", count);

    return (
        <div>
            <h1>BeforeMemoDemo</h1>
            <h3>Count: {count}</h3>
            <h3>Selected Item: {selected ? selected.id : 'None'}</h3>
            <button
                className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default BeforeUseMemo