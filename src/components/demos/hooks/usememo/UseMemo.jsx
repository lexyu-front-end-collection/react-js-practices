import React, { useState, useMemo } from 'react'
import { fakeData } from '@/utils/fake.js'


function UseMemo() {
    const [count, setCount] = useState(0)
    const [items] = useState(fakeData)

    // 只會在組件初次渲染時執行一次
    const selected = useMemo(() => {
        const selectedItem = items.find(item => item.isSelected);
        console.log("UseMemo - Selected Item:", selectedItem);
        return selectedItem;
    }, [])

    // 每當 count 或 items 發生變化時，這個計算都會被重新執行。
    const selectedCountItem = useMemo(() => {
        const countItem = items.find(item => item.id == count);
        console.log("UseMemo - Selected Count Item:", countItem);
        return countItem;
    }, [count, items])

    return (
        <div>
            <h1>MemoDemo</h1>
            <h3>Count: {count}</h3>
            <h3>Selected Count: {selectedCountItem ? selectedCountItem.id : 'None'}</h3>
            <h3>Selected Item: {selected ? selected.id : 'None'}</h3>
            <button
                className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default UseMemo