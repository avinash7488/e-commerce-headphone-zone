// function account(){
//     location.href="./login.html"
// }

   
    // function storeData(event){
    //     event.preventDefault()
        let form=document.getElementById("container")

       
    
    
    let arr=JSON.parse(localStorage.getItem("userData"))||[]
    let name=arr[0].name
    container.append(name)
    // console.log(name)}