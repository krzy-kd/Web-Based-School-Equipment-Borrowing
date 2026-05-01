const data = {
Basketball:['Ball','Pump','Cone','Whistle','Scoreboard'],
Swimming:['Goggles','Cap','Kickboard'],
Tennis:['Racket','Balls'],
Soccer:['Ball','Net'],
Badminton:['Racket','Shuttlecock']
};

let cart = [];

function loadCategory(cat){
let container = document.getElementById('items');
container.innerHTML='';

data[cat].forEach(item=>{
let div=document.createElement('div');
div.className='item';
div.innerHTML=`<h3>${item}</h3><p>Available</p>`;
div.onclick=()=>addToCart(item);
container.appendChild(div);
});
}

function addToCart(item){
cart.push(item);
renderCart();
}

function renderCart(){
let list=document.getElementById('cartList');
list.innerHTML='';
cart.forEach(i=>{
let li=document.createElement('li');
li.innerText=i;
list.appendChild(li);
});
document.getElementById('total').innerText=cart.length;
}

function borrow(){
localStorage.setItem('borrowLogs', JSON.stringify(cart));
alert('Borrowed Successfully');
cart=[];
renderCart();
}
