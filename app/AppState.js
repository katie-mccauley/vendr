import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  /** @type {Number} */
  money = 0

  snacks = [
    new Snack('Mountain Sprite', 2.50, "https://www.gannett-cdn.com/-mm-/9654460bcc7c4d3aa4d71d76ad695dc90914afac/c=0-653-3000-2348/local/-/media/2018/01/08/USATODAY/USATODAY/636510282265390646-MTN-DEW-ICE.JPG"),
    new Snack('Root Dew', 5.75, "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00012000180613/a710f15faa3fb7541195985095120bab_large.png&width=512&type=webp&quality=80")
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
