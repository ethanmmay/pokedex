import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";


//Private
function _drawAPIPokemon() {
    let pokemon = ProxyState.APIPokemon
    let template = ''
    pokemon.forEach(p => template += `<li onclick="app.PokemonController.encounterPokemon('${p.description}')">${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</li>`)
    document.getElementById("api-pokemon").innerHTML = template
}

function _drawWildPokemon() {
    if (ProxyState.wildPokemon) {
        document.getElementById("wild-pokemon").innerHTML = ProxyState.wildPokemon.WildTemplate
    } else {
        document.getElementById("wild-pokemon").innerHTML = ''
    }
}

function _drawTeamPokemon() {
    let pokemon = ProxyState.teamPokemon
    let template = ''
    pokemon.forEach(p => template += `<li onclick="app.PokemonController.viewPokemon('${p._id}')">${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</li>`)
    document.getElementById("team-pokemon").innerHTML = template
}

//Public
export default class PokemonController {
  constructor() {
    ProxyState.on("APIPokemon", _drawAPIPokemon);
    ProxyState.on("wildPokemon", _drawWildPokemon);
    ProxyState.on("teamPokemon", _drawTeamPokemon);
    this.getAPIPokemon()
    this.getTeamPokemon()
  }

  getAPIPokemon() {
    pokemonService.getAPIPokemon()
  }

  getTeamPokemon() {
    pokemonService.getTeamPokemon()
  }

  next() {
    pokemonService.next()
  }

  prev() {
    pokemonService.prev()
  }

  encounterPokemon(url) {
    pokemonService.encounterPokemon(url)
  }

  catchPokemon() {
    pokemonService.catchPokemon()
  }

  releasePokemon() {
    pokemonService.releasePokemon()
  }

  viewPokemon(id) {
    pokemonService.viewPokemon(id)
  }

}
