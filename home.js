
let ss_arr = ['https://cdn.shopify.com/s/files/1/0153/8863/files/DX170_HomepageBanner_Desktop_1400x.jpg?v=1661155879',
'https://cdn.shopify.com/s/files/1/0153/8863/files/Shouer-S12_HomepageBanner_Desktop_1400x.jpg?v=1661157094',
'https://cdn.shopify.com/s/files/1/0153/8863/files/KA-Series_HomepageBanner_Desktop_1400x.jpg?v=1661158197'];

let slideshow = document.querySelector("#slideshow");
let count=0;
slideshow.src=ss_arr[count];
function increment(){
count++;
if(count===ss_arr.length){
 count=0;
}
slideshow.src=ss_arr[count];
//console.log(count)
}
setInterval(increment,3000)

