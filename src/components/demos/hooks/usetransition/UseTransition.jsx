import React, { useState, useTransition } from 'react';

function UseTransition() {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, startTranstion] = useTransition();

    const items = Array.from({ length: 100000 }, (_, index) => `Item ${index + 1}`);

    const handleFilter = (event) => {
        const value = event.target.value;
        setQuery(value);

        startTranstion(() => {
            const filtered = items.filter((item) => {
                return item.toLowerCase().includes(value.toLowerCase())
            });
            setFilteredItems(filtered);
        })

    }

    return (
        <div>
            <h1>UseTransition</h1>
            <input
                className='text-red-800 font-extrabold my-10'
                type="text"
                value={query}
                onChange={handleFilter}
                placeholder='Search items...' />

            {isPending && <h3>Loading...</h3>}

            {!isPending && (
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index}
                            className='list-disc ml-6'>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UseTransition