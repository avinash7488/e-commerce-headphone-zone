let form = document.querySelector('form');
let login = (event)=>{
    event.preventDefault();
     let data = JSON.parse(localStorage.getItem('userData'))||[];
     let email = form.email.value;
     let pass = form.password.value;
     let x = data.filter((el)=>{
       
        return el.email===email;
     })
     console.log(x[0]);
     let y = data.filter((el)=>{
         return el.password===pass;
      })
    if(x.length>0 && y.length>0){
     alert('Login Successfull!');
     localStorage.setItem('log',true)
     localStorage.setItem('user', JSON.stringify(x[0]))
     window.location.href='checkout.html'
    }else if(x.length<=0){
     alert("User doesn't exist, Sign Up");
     window.location.href='signup.html';
    }else if(y.length<=0){
     alert("Wrong credentials")
    }
 }
 form.addEventListener('submit', login)