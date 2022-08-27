

let count=0;

let div1 = document.querySelector("#slider>div:nth-child(1)")
let div2 = document.querySelector("#slider>div:nth-child(2)")
let div3 = document.querySelector("#slider>div:nth-child(3)")
let div4 = document.querySelector("#slider>div:nth-child(4)")


let start = ()=>{
count++;

if(count===1){
    div1.style.backgroundColor="yellow";
    div2.style.backgroundColor="";
    div3.style.backgroundColor="";
    div4.style.backgroundColor="";
}
if(count===2){
    div1.style.backgroundColor="";
    div2.style.backgroundColor="yellow";
    div3.style.backgroundColor="";
    div4.style.backgroundColor="";
}
if(count===3){
    div1.style.backgroundColor="";
    div2.style.backgroundColor="";
    div3.style.backgroundColor="yellow";
    div4.style.backgroundColor="";
}
if(count===4){
    div1.style.backgroundColor="";
    div2.style.backgroundColor="";
    div3.style.backgroundColor="";
    div4.style.backgroundColor="yellow";
    count=0;
}

console.log(count);
}


//setInterval(start,1000)


let get_this = async (categ) =>{

    let res = await fetch('https://nameless-wildwood-80835.herokuapp.com/api/posts');
    let data = await res.json();
    console.log(data);
   public_pro(data,categ);

}

let public_pro = (data,categ)=>{
    
let cont = document.querySelector("#mainbox");

// data = data .filter((ele)=>{
//     return ele.rating>3 && ele.categories===categ;
// })
data.length=6;
console.log(data)

// data = data .filter((ele)=>{
//     return ele.rating>4.5 && ele.categories===categ;
// })

data.forEach(function(ele){

let name = document.createElement("h6");
name.innerText=ele.name+"-"+ele.model;

let img = document.createElement("img");
img.src=ele.mainimg;

let dis = document.createElement("p");
dis.innerText=ele.description;

let price = document.createElement("h5");
price.innerText=`From ₹${ele.price} - ${Number(ele.price)+Number(ele.price)*0.4}`;

let rating = document.createElement("img");
rating.setAttribute("class","rating");
if(ele.rating < Number(4.8) && ele.rating >= Number(4.5) ){
    rating.src="https://cdn-icons-png.flaticon.com/512/991/991984.png";
}
if(ele.rating > Number(4.8)){
    rating.src="https://cdn-icons-png.flaticon.com/512/991/991986.png";
}
if(ele.rating > Number(4.8)){
    rating.src="https://cdn-icons-png.flaticon.com/512/991/991986.png";
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
card.append(img,name,dis,price,img_div,rating)

cont.append(card)

})

}

get_this("workfrom home")