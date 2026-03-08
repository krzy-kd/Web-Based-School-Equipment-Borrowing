function searchItem(){

let input=document.getElementById("search").value.toLowerCase()

let table=document.getElementById("itemsTable")

let tr=table.getElementsByTagName("tr")

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[0]

if(td){

let txt=td.textContent

tr[i].style.display=txt.toLowerCase().includes(input)?"":"none"

}

}

}