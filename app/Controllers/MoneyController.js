import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"
import { setText } from "../Utils/Writer.js";

function _drawMoney() {
  console.log('drawing money');
  let money = appState.money
  let template = ''
  for (let i = 0; i < money; i++) {
    template = money
  }
  setText('money', template)
}



export class MoneyController {
  constructor() {
    console.log('hello from the money controller')
    appState.on('money', _drawMoney)
  }
  addMoney() {
     console.log('adding coin')
    moneyService.addMoney()
  }

}
