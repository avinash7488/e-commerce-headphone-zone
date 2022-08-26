
let ss_arr = ['https://cdn.shopify.com/s/files/1/0153/8863/files/DX170_HomepageBanner_Desktop_1400x.jpg?v=1661155879',
'https://cdn.shopify.com/s/files/1/0153/8863/files/Shouer-S12_HomepageBanner_Desktop_1400x.jpg?v=1661157094',
'https://cdn.shopify.com/s/files/1/0153/8863/files/KA-Series_HomepageBanner_Desktop_1400x.jpg?v=1661158197'];

let slideshow = document.querySelector("#slideshow");
let count=0;
slideshow.src=ss_arr[count];
function increment(){
count++;
if(count===ss_arr.length){
 count=0;
}
slideshow.src=ss_arr[count];
//console.log(count)
}
setInterval(increment,4000)

//****CHART TOPPING HEADPHONES**** 

let get_this = async (categ) =>{

    let res = await fetch('https://nameless-wildwood-80835.herokuapp.com/api/posts');
    let data = await res.json();
    //console.log(data);
    public_pro(data,categ);

}

let public_pro = (data,categ)=>{
    
let cont = document.querySelector("#contt");
cont.innerHTML=null;

data = data .filter((ele)=>{
    return ele.rating>4.5 && ele.categories===categ;
})

console.log(data)

data.forEach(({rating,categories,name,id,mainimg,model,description,price})=>{

let i = document.createElement("img");
i.src=mainimg;

let title = document.createElement("h4");
title.innerText= name +" - "+model;

let info = document.createElement("p");
info.innerText=description;

let pri = document.createElement("h4");
pri.style.color="#3c07FF";
pri.innerText=`From ₹${price}"---"${Number(price)+Number(price)*0.4}`

let star = document.createElement("img");//**********************

let card = document.querySelector("div");
card.className="card_pro";

card.append(title,info,pri);
cont.append(card)


})

}

// all fun calling

let top_pro1=()=>{
    get_this("headphone");
}

let top_pro2=()=>{
//    let bt = document.querySelector("#btn1");
//     bt.style.backgroundColor="#E6E6E6"
//     bt.style.color="black"
//     document.querySelector("#btn3").style=null;
//     document.querySelector("#btn4").style=null;
//     let btn = document.querySelector("#btn2");
//     btn.style.backgroundColor="#3c07FF";
//     btn.style.color="white";
    get_this("earphone");
}

let top_pro3=()=>{
    // let bt = document.querySelector("#btn1");
    // bt.style.backgroundColor="#E6E6E6"
    // bt.style.color="black"
    // document.querySelector("#btn2").style=null;
    // document.querySelector("#btn4").style=null;
    // let btn = document.querySelector("#btn3");
    // btn.style.backgroundColor="#3c07FF";
    // btn.style.color="white";
    get_this("work from home")
}

let top_pro4=()=>{
    // let bt = document.querySelector("#btn1");
    // bt.style.backgroundColor="#E6E6E6"
    // bt.style.color="black"
    // document.querySelector("#btn2").style=null;
    // document.querySelector("#btn3").style=null;
    // //btn1.style.backgroundColor="#E6E6E6";
    // //btn1.style.color="black";
    // let btn = document.querySelector("#btn4");
    // btn.style.backgroundColor="#3c07FF";
    // btn.style.color="white";
    get_this("wireless earbuds")
}


                     



