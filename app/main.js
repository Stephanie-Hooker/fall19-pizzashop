import ValuesController from "./Controllers/ValuesController.js";
import PizzaController from "./Controllers/PizzaController.js";
import SmoothieController from "./Controllers/SmoothieController.js";


class App {
    constructor() {
        this.controllers = {
            valuesController: new ValuesController(),
            pizzaController: new PizzaController(),
            smoothieController: new SmoothieController(),
        }
    }
}

window['app'] = new App()