let arr = JSON.parse(localStorage.getItem("datastore")) || [];
    
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

let key1=document.getElementById("button1");
    key1.addEventListener("click",function(){
        let ar3=[];
    let data1=document.getElementById("fi1").value;
        let data2=document.getElementById("fi2").value;
        let data3=document.getElementById("fi3").value;
        let data4=document.getElementById("fi4").value;
        let data5=document.getElementById("fi5").value;
        let data6=document.getElementById("fi6").value;
        let data7=document.getElementById("fi7").value;
// if(data1=="" && data2=="" && data3=="" && data4=="" && data5=="" && data6=="" && data7==""){
    // alert("Fill All Address")

    let obj={"vill":data3,"city":data4,"state":data5,"pin":data6};

    localStorage.setItem("addall",JSON.stringify(obj));
    
    window.location.href="payment.html";
    });

    let arr3=JSON.parse(localStorage.getItem("userData")) || [];
console.log(arr3)
mynewne(arr3)
function mynewne(arr3){
    console.log(arr3);
arr3.forEach(function(el){
    console.log(el);
let finmail=el.email;
document.getElementById("showmail").append(finmail);
});
    };