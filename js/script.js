import { cardComponent } from "../Component/cardComponent.js";
import { product } from "../Data/dataProduct.js";
console.log(product);
let renderArea = document.querySelector("#card-area")
product.map( (product)=>{
    renderArea.innerHTML += cardComponent(product)
}

)
