
export default class Smoothie {
  constructor(data) {
    console.log("smoothie created")
    this.name = data.name
    this.size = data.size || null
    this.price = data.price || null
    this.ingredients = data.ingredients || []


  }

  getTemplate(index) {
    let template = `
    <div class="col-4">
            <h1>${this.name}</h1>
            <h3>${this.size}</h3>
            <h3>${this.price}</h3>
            <ul>`
    template += this.drawIngredients(index)
    template += ` </ul>
            <form onsubmit="app.controllers.smoothieController.addIngredient(event, ${index})"> 
              <div class="form-group">
                <label for="ingredient">ingredient</label>
                <input type="text" class="form-control" name="ingredient" placeholder="add ingredients" required>
                </div>
                 <button type="submit">+</button>
              </form>
              
              <button type ="button" onclick="app.controllers.smoothieController.deleteSmoothie(${index})">X</button>
              </div>
    `
    return template
  }

  drawIngredients(smoothieIndex) {
    let ingredientTemplate = ''
    this.ingredients.forEach((i, ingredientIndex) => {
      ingredientTemplate += `<li>${i}<span onclick="app.controllers.smoothieController.deleteIngredient(${smoothieIndex}, ${ingredientIndex})">X</span></li>`
    });
    return ingredientTemplate

  }


}