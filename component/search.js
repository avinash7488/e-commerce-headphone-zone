let data;
let getData=async (query)=>{
    const url=`https://nameless-wildwood-80835.herokuapp.com/api/posts`
    let res=await fetch(url);
    data=await res.json();
    console.log(data)
    // return data.articles
    append(data)
    
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
let filter6=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="HIFIMAN"
    })
    console.log(filter)
    append(filter)
}
let filter1=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="AKG"
    })
    console.log(filter)
    append(filter)
}
let filter2=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="ALTIAT"
    })
    console.log(filter)
    append(filter)
}
let filter3=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="AUDIO-TECHNICA"
    })
    console.log(filter)
    append(filter)
}
let filter4=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="BEYERDYNAMIC"
    })
    console.log(filter)
    append(filter)
}
let filter5=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="GRADO"
    })
    console.log(filter)
    append(filter)
}
let filter7=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="MEZE"
    })
    console.log(filter)
    append(filter)
}
let filter8=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="MONOPRICE"
    })
    console.log(filter)
    append(filter)
}
let filter9=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="SENHEISER"
    })
    console.log(filter)
    append(filter)
}
let filter10=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="SHURE"
    })
    console.log(filter)
    append(filter)
}
let filter11=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="SONY"
    })
    console.log(filter)
    append(filter)
}
let filter12=async()=>{
    let filter=data.filter((el)=>{
     return el.name==="V-MODA"
    })
    console.log(filter)
    append(filter)
}
let showelem=(el)=>{

    localStorage.setItem("headphone",JSON.stringify(el))
    window.location.href="addcart.html"
    }
    let filter13=async()=>{
        let filter=data.filter((el)=>{
         return el.categories==="headphone"
        })
        console.log(filter)
        append(filter)
    }
    let filter14=async()=>{
        let filter=data.filter((el)=>{
         return el.categories==="earphone"
        })
        console.log(filter)
        append(filter)
    }
    let filter15=async()=>{
        let filter=data.filter((el)=>{
         return el.categories==="wireless earbuds"
        })
        console.log(filter)
        append(filter)
    }
    let sort1=async()=>{
        let sort=data.sort((a,b)=>{
            return a.price-b.price
        })
        append(sort)
    }
    let sort2=async()=>{
        let sort=data.sort((a,b)=>{
            return b.price-a.price
        })
        append(sort)
    }
    let price1=async()=>{
        let filter=data.filter((el)=>{
         return +(el.price)<=10000
        })
        console.log(filter)
        append(filter)
    }
    let price2=async()=>{
        let filter=data.filter((el)=>{
         return +(el.price)>10000&&+(el.price)<=15000
        })
        console.log(filter)
        append(filter)
    }
    let price3=async()=>{
        let filter=data.filter((el)=>{
         return +(el.price)>15000&&+(el.price)<=20000
        })
        console.log(filter)
        append(filter)
    }
    let price4=async()=>{
        let filter=data.filter((el)=>{
         return +(el.price)>20000&&+(el.price)<=25000
        })
        console.log(filter)
        append(filter)
    }
    let price5=async()=>{
        let filter=data.filter((el)=>{
         return +(el.price)>25000&&+(el.price)<=30000
        })
        console.log(filter)
        append(filter)
    }
 
    
export {getData,filter1,filter2,filter3,filter4,filter5,filter6,filter7,filter8,filter9,filter10,filter11,filter12,filter13,filter14,filter15,sort1,sort2,price1,price2,price3,price4,price5}















//FOR TESTING USE ONLY

// let data;
// let getData=async (query)=>{
//     const url=`https://nameless-wildwood-80835.herokuapp.com/api/posts`
//     let res=await fetch(url);
//      data=await res.json();
//     console.log(data)
//     // return data.articles
//     append(data) 
//     //filter1(data)
// }

// let append=(data)=>{
//     let cont=document.getElementById("display")
//     cont.innerHTML=null;
//     data.forEach((el)=>{
//         let div=document.createElement("div")
//         div.addEventListener("click", ()=>{
//             showelem(el)
//         })
//         div.setAttribute("class", "news")
//         let img=document.createElement("img")
//         img.src=el.mainimg
//         let name=document.createElement("h4")
//         name.innerText=`${el.name}-${el.model}`
//         name.style.color="rgb(68,68,68)"
//         let desc=document.createElement("p")
//         desc.innerText=`${el.description}`
//         desc.style.color="#63444e"
//         desc.style.fontSize="14px"
//         let ratediv=document.createElement("div")
//         ratediv.setAttribute("id","rate")
//         let rateimg=document.createElement("img")
//         rateimg.src="data:image/jpeg;base64,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"
//         let rating=document.createElement("h3")
//         rating.innerText=el.rating
//         rating.style.marginTop="10px"
//         ratediv.append(rateimg,rating)
//         let costdiv=document.createElement("div")
//         costdiv.setAttribute("id","costdiv")
//         let cost=document.createElement("h3")
//         cost.innerText=`₹${el.price}`
//         cost.style.color="#3c07ff"
//         let x=Number(el.price)+(0.4*Number(el.price))
//         let highcost=document.createElement("h3")
//         highcost.innerText=`₹${Math.ceil(x)}`
//         highcost.style.textDecoration="line-through"
//         costdiv.append(cost,highcost)
//         div.addEventListener("click",()=>{
//             showelem(el)
//         })
//         div.append(img,name,desc,costdiv,ratediv)
//         cont.append(div)
//     })
// }
// let showelem=(el)=>{

//     localStorage.setItem("headphone",JSON.stringify(el))
//     window.location.href="addcart.html"
//     }


//     function filter1(){
//         //let query = document.getElementById("query").value;
//        let copy_data = data.filter(function (el){
//           return el.name=="SONY";
//         })
//         console.log('copy_data:', copy_data)
    
//         append(copy_data)
//     }
    
 
    
// export {getData,filter1}









// let main=async()=>{
//     // let query=localStorage.getItem("query");
//    let query="headphone"
//     let data=await getData(query)
//     append(data)

// }