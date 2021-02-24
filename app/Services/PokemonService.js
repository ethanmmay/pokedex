import {
    ProxyState
} from "../AppState.js";
import PokemonController from "../Controllers/PokemonController.js";
import Pokemon from "../Models/Pokemon.js";
import {
    pokemonAPI, sandboxAPI
} from "./AxiosService.js";

class PokemonService {

    async getAPIPokemon() {
        try {
            const res = await pokemonAPI.get('pokemon')
            ProxyState.APIPokemon = res.data.results.map(p => new Pokemon(p))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
        } catch (error) {
            console.error(error)
        }
    }

    async next() {
        try {
            const res = await pokemonAPI.get(ProxyState.next)
            ProxyState.APIPokemon = res.data.results.map(p => new Pokemon(p))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
        } catch (error) {
            console.error(error)
        }
    }

    async prev() {
        try {
            const res = await pokemonAPI.get(ProxyState.prev)
            ProxyState.APIPokemon = res.data.results.map(p => new Pokemon(p))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.previous
        } catch (error) {
            console.error(error)
        }
    }

    async encounterPokemon(url) {
        try {
            const res = await pokemonAPI.get(url)
            ProxyState.wildPokemon = new Pokemon(res.data, res.data.sprites.front_default)
        } catch (error) {
            console.error(error)
        }
    }

    async viewPokemon(id) {
        try {
            ProxyState.wildPokemon = ProxyState.teamPokemon.find(p => p._id == id)
        } catch (error) {
            console.log(error)
        }
    }

    async catchPokemon() {
        try {
            const res = await sandboxAPI.post('', ProxyState.wildPokemon)
            ProxyState.wildPokemon = null
            this.getTeamPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    async releasePokemon() {
        try {
            const res = await sandboxAPI.delete(ProxyState.wildPokemon._id)
            ProxyState.wildPokemon = null
            this.getTeamPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    async getTeamPokemon() {
        try {
            const res = await sandboxAPI.get('')
            ProxyState.teamPokemon = res.data.map(p => new Pokemon(p))
        } catch (error) {
            console.error(error)
        }
    }


}

export const pokemonService = new PokemonService();