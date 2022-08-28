



document.getElementById("result").style.display="none";
document.getElementById("result1").style.display="none";
document.getElementById("result2").style.display ="none";

document.paysy1.onclick = function(){
let findva = document.querySelector("#paysy1").checkq.value;
if(findva=="check1"){
    document.getElementById("result").style.display="block";
}else{
    document.getElementById("result").style.display="none";
}
if(findva=="check2"){
    document.getElementById("result1").style.display="block";
}else{
    document.getElementById("result1").style.display="none";
} 
if(findva=="check3"){
    document.getElementById("result2").style.display="block";
}else{
    document.getElementById("result2").style.display ="none";
}

}




let arr = JSON.parse(localStorage.getItem("datastore"));
let arr2=JSON.parse(localStorage.getItem("finalcheck"))||[];
printpro(arr)
function printpro(arr){
    let bag=0;
arr.forEach(function(ele){
let div=document.createElement("div");
let div1=document.createElement("div");
let img=document.createElement("img");
img.setAttribute("src",ele.mainimg);
let div2=document.createElement("div");
div2.setAttribute("class","brandname")
let p1=document.createElement("p");
p1.innerText=`${ele.name} - ${ele.model}`;
let p2=document.createElement("p");
p2.innerText=ele.description;
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
let arr1=[];

let findbutton=document.getElementById("finkey");
findbutton.addEventListener("click",function(){
    let fivalue=document.getElementById("va1").value;
let fivalue1=document.getElementById("va1").value;
let fivalue2=document.getElementById("va1").value;
let fivalue3=document.getElementById("va1").value;
if(fivalue=="" && fivalue1=="" && fivalue2=="" && fivalue3==""){
alert("Fill All Card Details");
}else{
    arr.forEach(function(ele){
        arr2.push(ele);
    localStorage.setItem("finalcheck",JSON.stringify(arr2));
    })
    localStorage.setItem("datastore",JSON.stringify(arr1));
    window.location.href = "success.html";
}
});

let arr3=JSON.parse(localStorage.getItem("userData")) || [];

mynewne(arr3)
function mynewne(arr3){
console.log(arr3);
arr3.forEach(function(el){
console.log(el);
let finmail=el.email;
document.getElementById("showemail").append(finmail);
});
};


let arr4=JSON.parse(localStorage.getItem("addall")) || [];
mynewne(arr4)
function mynewne(arr4){
let finmail=arr4.vill+", "+arr4.city+", "+arr4.state+" -"+arr4.pin;
document.getElementById("showaddd").innerText=finmail;
};