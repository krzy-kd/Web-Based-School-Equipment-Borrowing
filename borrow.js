function borrowItem(name){

let history=JSON.parse(localStorage.getItem("history"))||[]

history.push({
item:name,
date:new Date().toLocaleDateString(),
status:"Borrowed"
})

localStorage.setItem("history",JSON.stringify(history))

alert("Item Borrowed Successfully")

}