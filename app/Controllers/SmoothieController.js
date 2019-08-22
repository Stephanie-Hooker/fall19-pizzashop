import SmoothieService from "../Services/SmoothieService.js";


let _smoothieService = new SmoothieService()

function _draw() {
  let template = ``
  let smoothies = _smoothieService.Smoothie
  smoothies.forEach((smoothie, index) => {
    template += smoothie.getTemplate(index)

  })
  document.querySelector("#smoothie").innerHTML = template
}





export default class SmoothieController {
  constructor() {
    console.log("smoothie controller linked")
  }

  addSmoothie(event) {
    event.preventDefault()
    let form = event.target
    let newSmoothie = {
      name: form.name.value,
      // size: form.size.value,
      // price: form.size.value,
      // imgUrl: form.imgUrl.value,
      // ingredients: form.ingredients.value,
    }
    _smoothieService.addSmoothie(newSmoothie)
    _draw()
  }

  addIngredient(event, smoothieIndex) {
    event.preventDefault()
    let form = event.target
    let newIngredient = form.ingredient.value
    _smoothieService.addIngredient(newIngredient, smoothieIndex)
    _draw()
  }

  deleteSmoothie(index) {
    _smoothieService.deleteSmoothie(index)
    _draw()
  }

  deleteIngredient(smoothieIndex, ingredientIndex) {
    _smoothieService.deleteIngredient(smoothieIndex, ingredientIndex)
    _draw()
  }
}