import React, { useEffect, useSyncExternalStore } from 'react';
import { getPokemns, getState, subscribe } from '@/utils/pokemon_store';

function UseSyncExternalStore() {

    const state = useSyncExternalStore(subscribe, getState); // getServerSnapshot
    console.log("Current pokemons after update:", state.pokemons); // 確認更新後的 pokemons

    useEffect(() => {
        console.log("Fetching Pokemons..."); 
        getPokemns();
    }, [])

    return (
        <div>
            <h2 className='text-2xl'>UseSyncExternalStore + useEffect</h2>
            <ul>
                {state.pokemons.length === 0 ? (
                    <h3>Loading...</h3>
                ) : (
                    state.pokemons.map((pokemon) => (
                        <li key={pokemon.name} style={{ textAlign: 'left' }}>
                            {pokemon.name}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default UseSyncExternalStore