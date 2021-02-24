import PokemonController from "./Controllers/PokemonController.js";

class App {
  PokemonController = new PokemonController();
}

window["app"] = new App();
