import { VendorsController } from "./Controllers/VendorsController.js";


class App {

  vendorsController = new VendorsController()
}

window["app"] = new App();


