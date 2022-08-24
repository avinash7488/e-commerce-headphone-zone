import getData from "../component/search.js"
getData()



let brand=document.createElement("div")
document.querySelector("#brand").addEventListener("click", function(){
let div=document.querySelector("#brand")
brand.innerHTML=null;
brand.innerHTML=`<input type="checkbox" id="brand1" name="brand1">
<label for="brand1">AKG (1)</label><br>
<input type="checkbox" id="brand2" name="brand2">
<label for="brand2">Altiat (9)</label><br>
<input type="checkbox" id="brand3" name="brand3">
<label for="brand3">Audio- Technica (2)</label><br>
<input type="checkbox" id="brand4" name="brand4">
<label for="brand4">Beyerdynamic (6)</label><br>
<input type="checkbox" id="brand5" name="brand5">
<label for="brand5">Grado (1008)</label><br>
<input type="checkbox" id="brand6" name="brand6">
<label for="brand6">HiFiMAN(456)</label><br>
<input type="checkbox" id="brand7" name="brand7">
<label for="brand7">Meze (234)</label><br>
<input type="checkbox" id="brand8" name="brand8">
<label for="brand8">Monoprice (35)</label><br>
<input type="checkbox" id="brand9" name="brand9">
<label for="brand9">Senheiser (1)</label><br>
<input type="checkbox" id="brand10" name="brand10">
<label for="brand10">Shure (9)</label><br>
<input type="checkbox" id="brand11" name="brand11">
<label for="brand11">Sony (2)</label><br>
<input type="checkbox" id="brand12" name="brand12">
<label for="brand12">V-MODA (6)</label><br>
`
div.append(brand)
})
let cat=document.createElement("div")
document.querySelector("#product").addEventListener("click", function(){
    let div=document.querySelector("#product")
    cat.innerHTML=null;
    cat.innerHTML=`
    <input type="checkbox" id="wired" name="wired">
    <label for="brand12">Wired Headphones(37)</label><br>
    `
    div.append(cat)
})
let div1=document.createElement("div")
document.querySelector("#price").addEventListener("click", () => {
    let price=document.querySelector("#price")
    div1.innerHTML=null;
    div1.innerHTML=`<button id="htl">High to low</button>
    <button id="lth">Low to high</button>`
    price.append(div1)
})


let avail=document.createElement("div")
document.querySelector("#available").addEventListener("click",function(e) {
    let div=document.querySelector("#available")
  avail.innerHTML=null;
  avail.innerHTML=`<input type="checkbox" id="c1" name="c1">
  <label for="c1">In Stock </label><br>
  <input type="checkbox" id="c2" name="c2">
  <label for="c2">Out of Stock</label><br>`
div.append(shoe1)
})