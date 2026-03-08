const ctx=document.getElementById('chart')

new Chart(ctx,{

 type:'bar',

 data:{

 labels:['Basketball','Volleyball','HDMI','Frisbee'],

 datasets:[{
 label:'Available Quantity',
 data:[5,4,7,6]
 }]

 }

})