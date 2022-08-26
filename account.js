  let form=document.getElementById("container")

       
    
    
    let arr=JSON.parse(localStorage.getItem("userData"))||[]
    let name="HELLO USER"
     container.append(name)


function storeData(){
    // location.href="./login.html"

container2.innerText=null;
 
      
    // console.log(name)}

    let data=document.getElementById("container2")

       
    
    
    let array=JSON.parse(localStorage.getItem("user"))||[]

    let firstname=document.createElement("p")
    let name1=array.name
    firstname.innerText="First-name :      "+" " +name1

    let lastname=document.createElement("p")
    let name2=array.last_name
    lastname.innerText="Last-name : "+" " +name2

    let password=document.createElement("p")
    let name3=array.email
    password.innerText="E-mail : "+" " +name3
    
  

    
    let mobile=document.createElement("p")
    let name4=array.mobile
    mobile.innerText="mobile : "+" -----------"

    let div=document.createElement("div")
    let edit=document.createElement("button")
    edit.innerText="edit"
   
     
    let log=document.createElement("button")
    log.innerText="LOGOUT"
    log.addEventListener("click",function(){
let data2=JSON.parse( localStorage.getItem("user"))
data2=null;
window.location.reload();
    })
     
     
div.append(edit,log)

    container2.append(firstname,lastname,password,mobile,div)}
   


  function account2(event){
    let mobile=document.createElement("p")
  
    mobile.innerText="RAISE A TICKET"
    
    container2.append(mobile)}

  