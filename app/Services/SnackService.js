import { appState } from "../AppState.js"



class SnackService{

setActive(snackName){
  console.log('setting active in the service', snackName)
  let foundSnack = appState.snack.find(s => s.name == snackName)
  console.log(foundSnack);



}








}