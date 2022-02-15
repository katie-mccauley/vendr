export class Snack {
  constructor(name, price) {
    this.name = name,
      this.price = price
  }

  get Template() {
    return `
    <div class="col-6">
      <h2>${this.name}</h2>
      <h2>${this.price}</h2>
      <button onclick="app.vendorsController.buyMe('${this.name}')">Buy me</button>
    </div>`
  }
}


