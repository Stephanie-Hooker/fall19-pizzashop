import Pizza from "../Models/Pizza.js";

let _state = {
  pizzas: [new Pizza({
    name: "Pepperoni",
    size: "XL",
    toppings: ["cheese", "sauce", "pepperoni"],
    crust: "pan",
    price: 2
  })]
}

export default class PizzaService {
  deleteTopping(pizzaIndex, toppingIndex) {
    _state.pizzas[pizzaIndex].toppings.splice(toppingIndex, 1)
    this.savePizzas()
  }
  deletePizza(index) {
    _state.pizzas.splice(index, 1)
    this.savePizzas()
  }
  addTopping(newTopping, pizzaIndex) {
    _state.pizzas[pizzaIndex].toppings.push(newTopping)
    this.savePizzas()
  }
  addPizza(newPizza) {
    _state.pizzas.push(new Pizza(newPizza))
    console.log(_state.pizzas)
    this.savePizzas()
  }
  constructor() {
    console.log("Howdy from pizza service........")
    this.loadPizzas()
  }
  get Pizza() {
    return _state.pizzas.map(pizza => new Pizza(pizza))
  }

  loadPizzas() {
    let savedPizzas = JSON.parse(localStorage.getItem("pizzas"))
    if (savedPizzas) {
      _state.pizzas = savedPizzas
    }
  }

  savePizzas() {
    localStorage.setItem("pizzas", JSON.stringify(_state.pizzas))
  }
}