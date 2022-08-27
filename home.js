
let ss_arr = [
     `  <div id="cont1">   
     <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/DX170_HomepageBanner_Desktop_1400x.jpg?v=1661155879" alt="">
     <div>
     <h1>CLASSY AND STYLISH</h1>
     <h5>MADE IN INDIA UNDER 2K</h5>
     <button>SEE MORE</button>
     </div>
 </div>`,
 ` <div id="cont2">
 <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Shouer-S12_HomepageBanner_Desktop_1400x.jpg?v=1661157094" alt="">
<div>
 <h1 class="header">MEET THE OVERACHIVER</h1>
 <h5>SELECT THAT GOES WITH YOUR WIBE</h5>
 <button>EXPLORE MORE</button>
</div>
</div>`,
`<div id="cont3">
<img src="https://cdn.shopify.com/s/files/1/0153/8863/files/KA-Series_HomepageBanner_Desktop_1400x.jpg?v=1661158197" alt="">
<div>
<h1 class="header">TIME TO (PORTABLE) PARTY</h1>
<h5>ALWAYS SOMETHING NEW TO EXPLORE</h5>
<button>SEE MORE</button>
</div>
</div>`,
`<div id="cont2">
<img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Altiat-Cal10_HomepageBanner_Desktop_1400x.jpg?v=1661336399" alt="">
<div>
<h1 class="header">CLASSY CANS WITH CALIBER</h1>
<h5>MADE IN INDIA BY AND AUDIOPHILES: ALTIAT CAL.1H</h5>
<button>SHOP NOW</button>
</div>
</div>`
];


let count = 0;
let ss = document.querySelector("#slideshow");
ss.innerHTML=ss_arr[count];

let start_ss = () =>{
count++;
if(count=== ss_arr.length){
    count=0;
}

let ss = document.querySelector("#slideshow");
ss.innerHTML=ss_arr[count];

}
setInterval(start_ss,3000);


//****CHART TOPPING HEADPHONES**** 


let get_this = async (categ) =>{

    let res = await fetch('https://nameless-wildwood-80835.herokuapp.com/api/posts');
    let data = await res.json();
    
   public_pro(data,categ);

}

let public_pro = (data,categ)=>{
    
let cont = document.querySelector("#contt");
cont.innerHTML=null;

let new_data=data.filter((ele)=>{
    return ele.categories === categ && Number(ele.rating)>=4
})

//console.log(new_data)
data = new_data
data.length=5;

data.forEach(function(ele,i){

let name = document.createElement("h5");
name.innerText=ele.name+"-"+ele.model;

let img = document.createElement("img");
img.src=ele.mainimg;

let dis = document.createElement("p");
dis.innerText=ele.description;

let price = document.createElement("h5");
price.innerText=` ₹${ele.price} - ${Number(ele.price)+Number(ele.price)*0.4}`;

let rating = document.createElement("img");
rating.setAttribute("class","rating");
if(ele.rating == 4.1 || ele.rating == 4.3 || ele.rating == 4 || ele.rating == 4.2 || ele.rating == 4.4 ){
    rating.src="https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg";
}
if(ele.rating == 4.6 || ele.rating == 4.7 || ele.rating == 4.5  ){
    rating.src="https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg";
}
if(ele.rating == 4.8 || ele.rating == 5 || ele.rating == 4.9){
    rating.src="https://t3.ftcdn.net/jpg/02/82/28/04/240_F_282280461_TGstFnrgEjDyiGfTxndBizvibaNrJrCd.jpg";
}

let img_div= document.createElement("div");
img_div.setAttribute("class","img_div")
let img0 = document.createElement("img");
img0.src="https://cdn-icons-png.flaticon.com/512/890/890807.png";
let img1 = document.createElement("img");
img1.src="https://cdn-icons-png.flaticon.com/512/587/587369.png";
let img2 = document.createElement("img");
img2.src="https://cdn-icons-png.flaticon.com/512/660/660354.png";
let img3 = document.createElement("img");
img3.src="https://cdn-icons-png.flaticon.com/512/1/1816.png";
let img4 = document.createElement("img");
img4.src="https://cdn-icons-png.flaticon.com/512/2861/2861528.png";

img_div.append(img0,img1,img2,img3,img4);


let card = document.createElement("div");
card.setAttribute("class","card")
card.addEventListener("click",()=>{
   
console.log(ele)

})
card.append(img,name,dis,price,img_div,rating)

cont.append(card)

})

}

get_this("workfrom home")
// all fun calling

let top_pro1=()=>{
    let bt = document.querySelector("#btn1");
    bt.style.backgroundColor="#3c07FF";
    bt.style.color="white";
    document.querySelector("#btn3").style=null;
    document.querySelector("#btn4").style=null;
    let btn = document.querySelector("#btn2");
    btn.style.backgroundColor="#E6E6E6";
    btn.style.color="black";
    get_this("headphone");
}
top_pro1()

let top_pro2=()=>{
   let bt = document.querySelector("#btn1");
    bt.style.backgroundColor="#E6E6E6"
    bt.style.color="black"
    document.querySelector("#btn3").style=null;
    document.querySelector("#btn4").style=null;
    let btn = document.querySelector("#btn2");
    btn.style.backgroundColor="#3c07FF";
    btn.style.color="white";
    get_this("earphone");
}

let top_pro3=()=>{
    let bt = document.querySelector("#btn1");
    bt.style.backgroundColor="#E6E6E6"
    bt.style.color="black"
    document.querySelector("#btn2").style=null;
    document.querySelector("#btn4").style=null;
    let btn = document.querySelector("#btn3");
    btn.style.backgroundColor="#3c07FF";
    btn.style.color="white";
    get_this("work from home")
}

let top_pro4=()=>{
    let bt = document.querySelector("#btn1");
    bt.style.backgroundColor="#E6E6E6"
    bt.style.color="black"
    document.querySelector("#btn2").style=null;
    document.querySelector("#btn3").style=null;
    btn1.style.backgroundColor="#E6E6E6";
    btn1.style.color="black";
    let btn = document.querySelector("#btn4");
    btn.style.backgroundColor="#3c07FF";
    btn.style.color="white";
    get_this("wireless earbuds")
}

let insta = document.querySelector(".stories");
insta.addEventListener("click",()=>{
    window.location.href="https://www.instagram.com/reel/ChZv3Y1uDxA/"
});

let getthis_data1 = () =>{

    localStorage.setItem("pro_page_key",("earpthone"));
    //window.location.href="";

};

let getthis_data2 = () => {

    localStorage.setItem("pro_page_key",("headphone"));
//window.location.href="";

};

let getthis_data3 = () => {

    localStorage.setItem("pro_page_key",("wireless earbuds"));
    //window.location.href="";

};

let getthis_data4 = () => {

    localStorage.setItem("pro_page_key",("wireless headphones"));
//window.location.href="";

};

let getthis_data5 = () => {

    localStorage.setItem("pro_page_key",("earphone"));
//window.location.href="";

}

let getthis_data6 = () => {

    localStorage.setItem("pro_page_key",("work from home"));
//window.location.href="";

}




                     



