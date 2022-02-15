import { ProxyState } from "../AppState.js";
import { vendorsService } from "../Services/VendorsService.js";

function _drawMoney() {
  let money = ProxyState.money
  document.getElementById("money").innerText = money.toString()
  console.log(money);

}


function _drawSnacks() {
  let snacks = ProxyState.snacks
  let template = ''
  snacks.forEach(s => template += s.Template)
  document.getElementById("snacks").innerHTML = template
}

export class VendorsController {

  constructor() {
    console.log("hello from vendor controller")
    ProxyState.on('money', _drawMoney)
    ProxyState.on('snacks', _drawSnacks)
    _drawSnacks()
  }
  addMoney() {
    // vendorsService.snack()
    console.log("cloicked");
    vendorsService.addMoney()
  }

  buyMe(name) {
    console.log("this is the buy me button");
    vendorsService.buyMe(name)
  }
}