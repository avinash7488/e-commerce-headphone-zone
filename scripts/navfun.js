let get_data1 = () =>{

    localStorage.setItem("pro_page_key",("earphone"));
    window.location.href="./product1.html";

};

let get_data2 = () => {

    localStorage.setItem("pro_page_key",("headphone"));
    window.location.href="./product1.html";

};

let get_data3 = () => {

    localStorage.setItem("pro_page_key",("wireless earbuds"));
     window.location.href="./product1.html";

};

let get_data4 = () => {

    localStorage.setItem("pro_page_key",("wireless headphones"));
window.location.href="./product1.html";

};

let get_data5 = () => {

    localStorage.setItem("pro_page_key",("earphone"));
window.location.href="./product1.html";

}

let get_data6 = () => {

    localStorage.setItem("pro_page_key",("work from home"));
window.location.href="./product1.html";

}




//brand

let getBrand1 = () => {

    localStorage.setItem("pro_page_brand",("AUDIO-TECHNICA"));
window.location.href="./product1.html";

}

let getBrand2 = () => {

    localStorage.setItem("pro_page_brand",("SONY"));
window.location.href="./product1.html";

}
let getBrand3 = () => {

    localStorage.setItem("pro_page_brand",("BEYERDYNAMIC"));
window.location.href="./product1.html";

}
let getBrand4 = () => {

    localStorage.setItem("pro_page_brand",("HIFIMAN"));
window.location.href="./product1.html";

}
let getBrand5 = () => {

    localStorage.setItem("pro_page_brand",("SENNHEISER"));
window.location.href="./product1.html";

}

//search------------->
// document.getElementById('nav_search').addEventListener()
let search = document.getElementById('nav_search')
 function searchRes(search){
    if(event.key === 'Enter'){
        console.log('search:', search.value)
        localStorage.setItem("pro_page_key",search.value);
        window.location.href="./product1.html";
    }
    
}

// document.getElementById('nav_search').innerHTML = searchRes();
