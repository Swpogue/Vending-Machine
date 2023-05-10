import { SnackController } from "./Controllers/SnackController.js";
import { MoneyController } from "./Controllers/MoneyController.js"
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  snackController = new SnackController();

  moneyController = new MoneyController()

}

window["app"] = new App();
