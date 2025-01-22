import React, { useState } from 'react'
import { shuffle } from '@/utils/shuffle.js'
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

export default function BeforeUseCallback() {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = (searchTerm) => {
        console.log(users[0]);

        const filteredUsers = allUsers
            .filter(user => user.includes(searchTerm));
        setUsers(filteredUsers);
    };

    return (
        <div>
            <h1 className='font-extrabold text-2xl text-emerald-400'>Only useState</h1>
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