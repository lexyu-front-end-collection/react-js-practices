import React, { useState, useCallback } from 'react'
import { shuffle } from '@/hooks/utils.js'
import Search from '@/components/demos/hooks/usecallback/Search'

const allUsers = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Isaac",
    "Jack"
];

export default function UseCallback() {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback((searchTerm) => {
        console.log(users[0]);

        const filteredUsers = allUsers
            .filter(user => user.includes(searchTerm));
        setUsers(filteredUsers);
    }, []);

    return (
        <div>
            <h1 className='font-extrabold text-2xl text-emerald-400'>useCallback + useState + useMemo</h1>
            <div className='mt-10 flex'>
                <button className='mr-4' onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
                <Search onChange={handleSearch} />
            </div>
            <ul className='text-amber-600 mt-8 font-extrabold'>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    )
}