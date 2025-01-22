import React, { useEffect, useState } from 'react';

function BeforeUseSyncExternalStore() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemns = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const data = await resp.json()
            setPokemons(data.results)
        }
        console.log("Fetching Pokemons..."); 
        getPokemns();
    }, [])

    return (
        <div>
            <h2 className='text-2xl'>Before UseSyncExternalStore (useEffect + useState)</h2>
            <ul>
                {pokemons.length === 0 ? (
                    <h3>Loading...</h3>
                ) : (
                    pokemons.map((pokemon) => (
                        <li key={pokemon.name} style={{ textAlign: 'left' }}>
                            {pokemon.name}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default BeforeUseSyncExternalStore