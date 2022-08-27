let zip=JSON.parse(localStorage.getItem("pro_page_key"));

import {getData,filter1,filter2,filter3,filter4,filter5,filter6,filter7,filter8,filter9,filter10,filter11,filter12,filter13,filter14,filter15,sort1,sort2,price1,price2,price3,price4,price5} from "../component/search.js"


let main=async(zip)=>{
    const url=`https://nameless-wildwood-80835.herokuapp.com/api/posts`
    let res = await fetch(url)
   let data=await res.json();
   console.log(data)
    display(zip,data)
}

let append=(data)=>{
    let cont=document.getElementById("display")
    cont.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div")
        div.addEventListener("click", ()=>{
            showelem(el)
        })
        div.setAttribute("class", "news")
        let img=document.createElement("img")
        img.src=el.mainimg
        let name=document.createElement("h4")
        name.innerText=`${el.name}-${el.model}`
        name.style.color="rgb(68,68,68)"
        let desc=document.createElement("p")
        desc.innerText=`${el.description}`
        desc.style.color="#63444e"
        desc.style.fontSize="14px"
        let ratediv=document.createElement("div")
        ratediv.setAttribute("id","rate")
        let rateimg=document.createElement("img")
        rateimg.src="data:image/jpeg;base64,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"
        let rating=document.createElement("h3")
        rating.innerText=el.rating
        rating.style.marginTop="10px"
        ratediv.append(rateimg,rating)
        let costdiv=document.createElement("div")
        costdiv.setAttribute("id","costdiv")
        let cost=document.createElement("h3")
        cost.innerText=`₹${el.price}`
        cost.style.color="#3c07ff"
        let x=Number(el.price)+(0.4*Number(el.price))
        let highcost=document.createElement("h3")
        highcost.innerText=`₹${Math.ceil(x)}`
        highcost.style.textDecoration="line-through"
        costdiv.append(cost,highcost)
        div.addEventListener("click",()=>{
            showelem(el)
        })
        div.append(img,name,desc,costdiv,ratediv)
        cont.append(div)
    })
}

let display=(zip,data)=>{
let newdata=data.filter((el)=>{
    return el.categories===zip
})
append(newdata)
}


if(zip){
    // console.log(newdata)
    document.querySelector("body").onload=main(zip)
}
else{
document.querySelector("body").onload=getData();
}
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