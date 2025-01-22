let state = { pokemons: [] }
let listeners = new Set()

// Function to fetct data and update the state
const getPokemns = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await resp.json()
    console.log("Fetched Pokemons:", data.results);
    state = { ...state, pokemons: data.results }
    listeners.forEach(listener => listener())
}

const getState = () => {
    console.log("Current state:", state);
    return state;
}

// const subscribe = (listener) => {
//     listeners.push(listener)
//     console.log("Subscribed listener:", listener);
//     return () => {
//         listeners = listeners.filter(l => l !== listener)
//     }
// }

const subscribe = (listener) => {
    listeners.add(listener)
    console.log("Subscribed listener:", listener);
    return () => listeners.delete(listener)
}

export { getState, subscribe, getPokemns }