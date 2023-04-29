

let data=JSON.parse(localStorage.getItem("headphone"))
let append=(data)=>{
    let cont=document.getElementById("display")
    cont.innerHTML=null;
console.log(data)
let newdiv=document.createElement("div")
newdiv.setAttribute("id","newdiv")
        let div=document.createElement("div")
        div.setAttribute("id", "card")

        let img=document.createElement("img")
        img.src=data.mainimg
  


        let left=document.createElement("div")
        left.setAttribute("id", "left")
        let leftimg=document.createElement("div")
        
        let img1=document.createElement("img")
        img1.style.height="60px"
        img1.style.width="60px"
        let img2=document.createElement("img")
        let img3=document.createElement("img")
        let img4=document.createElement("img")
        let img5=document.createElement("img")
        let img6=document.createElement("img")
        let img7=document.createElement("img")
        let img8=document.createElement("img")
        img1.src=data.bimg1
        img1.addEventListener("click",()=>{
            localStorage.setItem("images",data.bimg1)
          img.src=data.bimg1
          })
        img2.src=data.bimg2
        img2.addEventListener("click",()=>{
            localStorage.setItem("images",data.bimg2)
          img.src=data.bimg2
          })
        img3.src=data.bimg3
        img3.addEventListener("click",()=>{
            localStorage.setItem("images",data.bimg3)
          img.src=data.bimg3
          })
        img4.src=data.bimg4
        img4.addEventListener("click",()=>{
            localStorage.setItem("images",data.bimg4)
          img.src=data.bimg4
          })
        img5.src=data.bimg5
        img5.addEventListener("click",()=>{
            localStorage.setItem("images",data.bimg5)
          img.src=data.bimg5
          })
        img6.src=data.bimg6
        img6.addEventListener("click",()=>{
            localStorage.setItem("images",data.bimg6)
          img.src=data.bimg6
          })
        img7.src=data.bimg7
        img7.addEventListener("click",()=>{
            localStorage.setItem("images",data.bimg7)
          img.src=data.bimg7
          })
        img8.src=data.bimg8
        img8.addEventListener("click",()=>{
            localStorage.setItem("images",data.bimg8)
          img.src=data.bimg8
          })
        leftimg.append(img1,img2,img3,img4,img5,img6,img7,img8)
        

        let brandname=document.createElement("h3")
        brandname.innerText=data.name
        brandname.setAttribute("id", "brandname")
        left.append(img,leftimg)
        let name=document.createElement("h4")
        name.innerText=`${data.name}-${data.model}`
        name.setAttribute("id","name")
        let desc=document.createElement("p")
        desc.innerText=`${data.description}`
        desc.setAttribute("id","desc")
        let ratediv=document.createElement("div")
        ratediv.setAttribute("id","rate")
        let rateimg=document.createElement("img")
        rateimg.src="data:image/jpeg;base64,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"
        let rating=document.createElement("h3")
        rating.innerText=data.rating
        rating.setAttribute("class", "rating")
       
        ratediv.append(rateimg,rating)
        let costdiv=document.createElement("div")
        costdiv.setAttribute("id","costdiv")
        let cost=document.createElement("h3")
        cost.innerText=`₹${data.price}`
        cost.setAttribute("class","cost")
        
        let x=Number(data.price)+(0.4*Number(data.price))
        let highcost=document.createElement("h3")
        highcost.innerText=`MRP: ₹${Math.ceil(x)}`
       highcost.setAttribute("id","highcost")
       let xdiv=document.createElement("div")
        let p=document.createElement("p")
        p.innerText="Is our price too high?"
        p.style.fontSize="14px"
        p.style.marginTop="50px"
        p.style.color="#a0a0a0"
        xdiv.append(p)
        costdiv.append(cost,highcost,xdiv)
        
        costdiv.setAttribute("id","costdiv")
        let p1=document.createElement("p")
        p1.innerText="Or ₹ 2,333 (Simpl/Bajaj/Zest/Cards) "
        p1.style.marginTop="-10px"
        p1.style.marginBottom="50px"
      let imgdiv=document.createElement("div")
      imgdiv.setAttribute("id","imgdiv")
      let sideimg1=document.createElement("img")
      sideimg1.src=data.sideimg1
      sideimg1.addEventListener("click",()=>{
        localStorage.setItem("images",data.sideimg1)
      window.location.href="image.html"
      })
      let sideimg2=document.createElement("img")
      sideimg2.src=data.sideimg2
      sideimg2.addEventListener("click",()=>{
        localStorage.setItem("images",data.sideimg2)
      window.location.href="image.html"
      })
      let sideimg3=document.createElement("img")
      sideimg3.src=data.sideimg3
      sideimg3.addEventListener("click",()=>{
        localStorage.setItem("images",data.sideimg3)
      window.location.href="image.html"
      })
      imgdiv.append(sideimg1,sideimg2,sideimg3)
      let button=document.createElement("button")
      button.addEventListener("click",()=>{
      adddata(data)
      })
      button.innerText="Add to Cart"
      button.setAttribute("id","buttoncart")
      button.addEventListener("click",()=>{
        alert("Added to cart")
      })
      let button2=document.createElement("button")
      button2.innerText="CONFUSED? TALK TO A HEADPHONE GURU"
      button2.setAttribute("id","buttoncart2")
      button2.addEventListener("click",()=>{
      alert("Please Contact our 24/7 Helpline")
      })
        newdiv.append(brandname,name,desc,ratediv,costdiv,p1,imgdiv,button,button2)
        div.append(left,newdiv)
        cont.append(div)
    
}
append(data)
let adddata=(data)=>{
  let arr=JSON.parse(localStorage.getItem("datastore"))||[];
  arr.push(data)
    localStorage.setItem("datastore",JSON.stringify(arr))
}
// let val;
// let pinchange=()=>{
//   document.querySelector("#codepin").innerHTML=`DELIVERY & SHIPPING <br><input id="pincode1" placeholder="400001">
//   <button onclick="pinchange2()"> CHANGE</button>`
//   val=document.querySelector("#pincode1").value
  
// }
// let pinchange2=()=>{
// document.querySelector("codepin").innerHTML=`DELIVERY & SHIPPING <br><h3 id="pincode">${val}</h3>
// <button onclick="pinchange2()"> CHANGE</button>`
// }