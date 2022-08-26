import {getData,filter1,filter2,filter3,filter4,filter5,filter6,filter7,filter8,filter9,filter10,filter11,filter12,filter13,filter14,filter15,sort1,sort2,price1,price2,price3,price4,price5} from "../component/search.js"
document.querySelector("body").onload=getData();

let brand=document.createElement("div");
document.querySelector("#brandbut2").addEventListener("click", function(){
    
    document.querySelector("#brandbut2").innerHTML=` <button id="brandbut1"><p><i class="arrowup"></i></p></button>`
let div=document.querySelector("#brand")
brand.innerHTML=null;

brand.innerHTML=`
<input type="checkbox" id="brand1"  name="brand1">
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
<input type="checkbox" id="brand11" value="sony" name="brand11">
<label for="brand11">Sony (2)</label><br>
<input type="checkbox" id="brand12" name="brand12">
<label for="brand12">V-MODA (6)</label><br>

`

div.append(brand)
document.getElementById('brand1').addEventListener("click", function() {
    filter1()
})
document.getElementById('brand2').addEventListener("click", function() {
    filter2()
})
document.getElementById('brand3').addEventListener("click", function() {
    filter3()
})
document.getElementById('brand4').addEventListener("click", function() {
    filter4()
})
document.getElementById('brand5').addEventListener("click", function() {
    filter5()
})
document.getElementById('brand6').addEventListener("click", function() {
     filter6()
})
document.getElementById('brand7').addEventListener("click", function() {
    filter7()
})
document.getElementById('brand8').addEventListener("click", function() {
    filter8()
})
document.getElementById('brand9').addEventListener("click", function() {
    filter9()
})
document.getElementById('brand10').addEventListener("click", function() {
    filter10()
})
document.getElementById('brand11').addEventListener("click", function() {
    filter11()
})
document.getElementById('brand12').addEventListener("click", function() {
    filter12()
})
document.querySelector("#brandbut1").addEventListener("click",()=>{
    brand.innerHTML=null;
    window.location.reload();
})

})



let cat=document.createElement("div")
document.querySelector("#productbut2").addEventListener("click", function(){
    document.querySelector("#productbut2").innerHTML=` <button id="productbut1"><p><i class="arrowup"></i></p></button>`

    let div=document.querySelector("#product")
    cat.innerHTML=null;
    cat.innerHTML=`
    <input type="checkbox" id="head" name="wired">Headphone
  <br>
  <input type="checkbox" id="ear" name="wired">Wireless Earbuds
  <br>
  <input type="checkbox" id="earphones" name="wired">Earphones
  <br>
    `
    div.append(cat)
    document.getElementById('head').addEventListener("click", function() {
        filter13()
    })
    document.getElementById('ear').addEventListener("click", function() {
        filter15()
    })
    document.getElementById('earphones').addEventListener("click", function() {
        filter14()
    })
    document.querySelector("#productbut1").addEventListener("click",()=>{
        cat.innerHTML=null;
        window.location.reload();
    })
})
let div1=document.createElement("div")
document.querySelector("#pricebut2").addEventListener("click", () => {
    document.querySelector("#pricebut2").innerHTML=` <button id="pricebut1"><p><i class="arrowup"></i></p></button>`

    let price=document.querySelector("#price")
    div1.innerHTML=null;
    div1.innerHTML=`<button id="htl">High to low</button>
    <button id="lth">Low to high</button>`
    price.append(div1)
    document.getElementById('lth').addEventListener("click", function() {
        sort1()
    })
    document.getElementById('htl').addEventListener("click", function() {
        sort2()
    })
    document.querySelector("#pricebut1").addEventListener("click",()=>{
        price.innerHTML=null;
        window.location.reload();
    })
})


let avail=document.createElement("div")
document.querySelector("#availbut2").addEventListener("click",function() {
    document.querySelector("#availbut2").innerHTML=` <button id="availbut1"><p><i class="arrowup"></i></p></button>`

    let div=document.querySelector("#available")
  avail.innerHTML=null;
  avail.innerHTML=`<input type="checkbox" id="c1" name="c1">
  <label for="c1">In Stock </label><br>
  <input type="checkbox" id="c2" name="c2">
  <label for="c2">Out of Stock</label><br>`
div.append(avail)
document.querySelector("#availbut1").addEventListener("click",()=>{
    avail.innerHTML=null;
    window.location.reload();
})
})
document.querySelector("#price1").addEventListener("click",()=>{
    price1()
})
document.querySelector("#price2").addEventListener("click",()=>{
    price2()
})
document.querySelector("#price3").addEventListener("click",()=>{
    price3()
})
document.querySelector("#price4").addEventListener("click",()=>{
    price4()
})
document.querySelector("#price5").addEventListener("click",()=>{
    price5()
})