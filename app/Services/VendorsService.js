import { ProxyState } from "../AppState.js";

class VendorsService {
  addMoney() {
    console.log("this is the service");
    ProxyState.money += 3
    console.log(ProxyState.money);
  }
  constructor() {
    console.log("this is the vendorsservice");
  }

  buyMe(name) {
    let snack = ProxyState.snacks.find(s => s.name == name)
    console.log(snack)
    if (snack.price <= ProxyState.money) {
      ProxyState.money -= snack.price
    } else {
      alert("can't buy ths item")
    }
  }


}

export const vendorsService = new VendorsService()