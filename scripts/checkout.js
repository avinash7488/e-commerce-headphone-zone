import {navbar} from './script/navbar.js'

 let navbarBox = document.getElementById('navbar_outer')
 navbarBox.innerHTML = navbar()



let arr = JSON.parse(localStorage.getItem("productpage")) || [];
    printpro(arr)
    function printpro(arr){
        let bag=0;
    arr.forEach(function(ele){
    let div=document.createElement("div");
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",ele.imag);
    let div2=document.createElement("div");
    div2.setAttribute("class","brandname")
    let p1=document.createElement("p");
    p1.innerText=ele.brand;
    let p2=document.createElement("p");
    p2.innerText=ele.procolor;
    let div3=document.createElement("div");
    div3.setAttribute("class","lastprice")
    let p3=document.createElement("p");
    p3.innerText="₹"+ele.price;
    bag=bag+Number(ele.price);
    div1.append(img);
    div2.append(p1,p2);
    div3.append(p3);
    div.append(div1,div2,div3);
    document.querySelector("#showprod").append(div)
});
totalpri(bag);
    };


    function totalpri(bag){
      let finalpri= "₹"+bag.toFixed(2);
    document.getElementById("totalprice").innerText=finalpri;
    document.getElementById("totalp").innerText=finalpri;
    }


    let findkey=document.getElementById("button1");
    findkey.addEventListener("click",function(){
        window.location.href = "payment.html";
    })