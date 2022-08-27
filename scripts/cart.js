import {navbar} from './script/navbar.js'

 let navbarBox = document.getElementById('navbar_outer')
 navbarBox.innerHTML = navbar()





let arr = JSON.parse(localStorage.getItem("productpage")) || [];
   
    function mysefun(arr) {
        let bag = 0;
        document.querySelector("tbody").innerHTML = "";
        arr.forEach(function(el, i) {
           
            let tr1 = document.createElement("tr");
            let td1 = document.createElement("td");
            let div1 = document.createElement("div");
            div1.setAttribute("id", "protd");
            let div2 = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("src", el.imag);
            let div3 = document.createElement("div");
            let h31 = document.createElement("h3");
            h31.innerText = el.brand;
            let p1 = document.createElement("p");
            p1.innerText = el.procolor + " / " + el.fun;
            let p2 = document.createElement("p");
            p2.innerText = el.price;

             //it's part of total

             let bag1=1;
            let td2 = document.createElement("td");
            let div4 = document.createElement("div");
            div4.setAttribute("id", "quacheck");
            let span1 = document.createElement("span");
            span1.innerText = "-";
            let span2 = document.createElement("span");
            span2.setAttribute("id", "quanti");
            span2.innerText=1;
            let span3 = document.createElement("span");
            span3.innerText = "+";
           function fundqua(bag1){
                console.log(bag1);
            }
           
            let div5 = document.createElement("div");
            div5.setAttribute("id", "removekey");
            let u1 = document.createElement("u");
            u1.innerText = "REMOVE";
            u1.addEventListener("click", function() {
                removedata(i);
            });
            let td3 = document.createElement("td");
            let span4 = document.createElement("span");
            span4.setAttribute("id", "sym");
            let span5 = document.createElement("span");
            
            
            //it's part of total
            span5.setAttribute("id", "totalp");
            span5.innerText=el.price;
                bag = bag + Number(el.price);
            


            tr1.append(td1, td2, td3);
            td1.append(div1);
            div1.append(div2, div3);
            div2.append(img);
            div3.append(h31, p1, p2);
            div5.append(u1);
            td2.append(div4, div5);
            div4.append(span1, span2, span3);
            td3.append(span4, span5);
            document.getElementById("procontainer").append(tr1);
        })
        totalprice(bag);
    }
 mysefun(arr);

    function totalprice(bag) {
        let p10 = document.createElement('p');
        p10.innerText = bag;
        document.getElementById("findpr").append(p10);
    }

    function removedata(i) {
        arr.splice(i, 1);
        mysefun(arr);
        localStorage.setItem("productpage", JSON.stringify(arr));
        window.location.reload();
    };


    textbox.style.display = "none";
    function myfun() {
        let textbox = document.getElementById("textbox");
        if (textbox.style.display === "none") {
            textbox.style.display = "block";
        } else {
            textbox.style.display = "none";
        }
    }