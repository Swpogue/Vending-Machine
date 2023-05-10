import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnack() {
  let snack = appState.snack
  let template = ''
  snack.forEach(s => template += s.ListTemplate)
  
}


export class SnackController {
  constructor(){
console.log("Controller Snack");
  




}
}