export default class Pokemon {
    constructor(data, img) {
        this.name = data.name
        this.description = data.url || "https://pokeapi.co/api/v2/pokemon/" + this.name
        this.weight = data.weight
        this.height = data.height || "unknown"
        this.types = data.types
        this.img = img || data.img
        this.user = "ethan"
        this._id = data._id
    }

    get WildTemplate() {
        return /*html*/`
        <div class="card col-10 offset-1 bg-success text-light p-2 my-5 game-font text-uppercase">
        <h4>${this.name}</h4>
        <img src="${this.img}" alt="${this.name}" class="card-img-top">
        <p>Types: ${this.WildTypes}</p>
        <p>Weight: ${this.weight}</p>
        ${this.Buttons}
        </div>
        `
    }

    get WildTypes() {
        if (this.types.length > 1) {
            return this.types[0].type.name + ", " + this.types[1].type.name
        }
        return this.types[0].type.name
    }

    get Buttons() {
        if (this._id) {
            return `<button class="btn btn-danger border-dark" onclick="app.PokemonController.releasePokemon()">Release</button>`
        }
        return `<button class="btn btn-primary border-dark" onclick="app.PokemonController.catchPokemon()">Catch</button>`
    }
}
