function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user==="admin" && pass==="admin123"){

localStorage.setItem("auth","true")
window.location="dashboard.html"

}else{
alert("Invalid Login")
}

}