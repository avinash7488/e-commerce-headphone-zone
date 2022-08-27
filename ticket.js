let data = JSON.parse(localStorage.getItem("userData")) || [];

class User {
  constructor(name,email, pass,last_name) {
    this.name = name;
this.last_name=last_name
    this.email = email;
    this.password = pass;
  }
  checkData = (email) => {
    if (
      this.name.length <= 0 ||
   
      this.email.length <= 0 ||
      this.password.length <= 0
    ) {
      alert("fill the correct info");
      return 0;
    }
    let flag = false;
    data.forEach((el) => {
      if (el.email == email) {
        flag = true;
        return flag;
      }
    });
    return flag;
  };
}

let form = document.querySelector("form");
let addUser = (event) => {
  event.preventDefault();
  let name = form.name.value;
  let last_name = form.last_name.value;
  let email = form.email.value;
  let phone = form.phone.value;
  let url = form.url.value;
  let user = new User(name,email,phone,url,last_name);
  let flag = user.checkData(email);
  if (flag) {
    alert("ticket already exist");
   // window.location.reload();
    return;
  }
  if (flag !== 0) {
    alert("Thanks for raise your ticket")
    data.push(user);
    // localStorage.setItem("userData", JSON.stringify(data));
    window.location.href="home.html";
  }
};
form.addEventListener("submit", addUser);