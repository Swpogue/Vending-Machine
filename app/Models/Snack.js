
export class Snack {
  constructor(data) {
  this.name = data.name
  this.price = data.price
  this.imgUrl = data.imgUrl
   }


get ListTemplate(){
return`

<div class="col-1 selectable text-center" onclick="app.snackController.setActive('${this.name}') ">
            <h1 h1 title = "${this.name}" > ${this.price}</h1 >
      </div >`
}

get ActiveTemplate() {
  return `
<div class="col-8">
  <div class="elevation-5 rounded text-center p-3">
      <h1 class="price">${this.price}</h1>
      <h2>${this.name}</h2>
  </div>
</div>`
}












}


  