import React, { useState, useDeferredValue } from 'react';

function UseDeferredValue() {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 1000;

    const items = Array.from({ length: 2500 }, (_, index) => `Item ${index + 1}`);

    const deferredQuery = useDeferredValue(query);

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(deferredQuery.toLowerCase())
    )

    const startIndex = currentPage * itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div>
            <h1>DeferredValueExample</h1>
            <input
                className='text-red-400 my-3 font-extrabold'
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder='Search items...' />

            {query !== deferredQuery && <h3>Loading</h3>}

            <br />

            <span className='text-red-400 my-3 font-extrabold'>{` Page ${currentPage + 1} of ${totalPages} `}</span>
            <div className='flex gap-4 my-4'>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}>
                    Previous
                </button>
                <button
                    className='mt-4 bg-blue-400 hover:bg-gray-700 text-white px-4 py-2 rounded'
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={currentPage === totalPages - 1}>
                    Next
                </button>
            </div>

            {
                query === deferredQuery &&
                <ul>
                    {currentItems.map((item, index) => (
                        <li key={index} style={{ textAlign: 'left' }}>
                            {item}
                        </li>
                    ))}
                </ul>
            }



        </div>
    )
}

export default UseDeferredValue