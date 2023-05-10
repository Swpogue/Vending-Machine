import { appState } from "../AppState.js"

class MoneyService {

  addMoney() {
      appState.money++
      console.log('adding money', appState.money);
  }

  decreaseMoney() {
      appState.money  -= .25
      console.log('decreasing money', appState.money);
      }

}

export const moneyService = new MoneyService()