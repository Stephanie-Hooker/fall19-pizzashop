import Smoothie from "../Models/smoothie.js";

let _state = {
  smoothies: [new Smoothie({
    name: "strawberry",
    size: "large",
    price: "$",
    ingredients: ["strawberries", "yogurt", "banana", "sugar"],

  })]
}


export default class SmoothieService {
  deleteIngredient(smoothieIndex, ingredientIndex) {
    _state.smoothies[smoothieIndex].ingredients.splice(ingredientIndex, 1)
    this.savedSmoothies()
  }
  deleteSmoothie(index) {
    _state.smoothies.splice(index, 1)
    this.savedSmoothies()
  }
  addSmoothie(newSmoothie) {
    _state.smoothies.push(new Smoothie(newSmoothie))
    this.savedSmoothies()
  }
  addIngredient(newIngredient, smoothieIndex) {
    _state.smoothies[smoothieIndex].ingredients.push(newIngredient)
    this.savedSmoothies()
  }

  constructor() {
    console.log("smoothie Service linked")
    this.loadSmoothies()
  }

  get Smoothie() {
    return _state.smoothies.map(smoothie => new Smoothie(smoothie))
  }
  loadSmoothies() {
    let savedSmoothies = JSON.parse(localStorage.getItem("smoothies"))
    if (savedSmoothies) {
      _state.smoothies = savedSmoothies
    }
  }
  savedSmoothies() {
    localStorage.setItem("smoothies", JSON.stringify(_state.smoothies))
  }
}


