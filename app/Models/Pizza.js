



export default class Pizza {
  constructor(data) {

    console.log("Salutations from pizza. Ah a talking pizza!!!")
    this.name = data.name
    this.size = data.size || null
    this.toppings = data.toppings || []
    this.crust = data.crust || null
    this.price = data.price || null

  }

  getTemplate(index) {
    let template =
      `
        <div class="col-4">
            <h1>${this.name}</h1>
            <h3>${this.size}</h3>
            <h3>${this.crust}</h3>
            <ul>`
    template += this.drawToppings(index)
    template += `    </ul>
            <form onsubmit="app.controllers.pizzaController.addTopping(event, ${index})"> 
              <div class="form-group">
                <label for="topping">topping</label>
                <input type="text" class="form-control" name="topping" placeholder="pizza topping" required>
                </div>
                <button type="submit">+</button>
              </form>
              <h3>price: ${this.price}</h3>
              <button type ="button" onclick="app.controllers.pizzaController.deletePizza(${index})">X</button>
        </div>
    `
    return template
  }
  drawToppings(pizzaIndex) {
    let toppingTemplate = ""
    this.toppings.forEach((t, toppingIndex) => {
      toppingTemplate += `<li>${t}<span onclick="app.controllers.pizzaController.deleteTopping(${pizzaIndex}, ${toppingIndex})">X</span></li>`
    });
    return toppingTemplate
  }
}