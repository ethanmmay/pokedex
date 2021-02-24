
// @ts-ignore
export const pokemonAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 5000
})

// @ts-ignore
export const sandboxAPI = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/ethangithub/pokemon',
    timeout: 5000
})