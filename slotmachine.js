let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')
// let value=document.getElementsByClassName('value')

let inputspeed= document.getElementById('inputspeed')
let spin = document.getElementById('spin')

 let mac= document.getElementById('mac')
let values=[
'😎','🤩','😰','😶','😁','😌','🥰', '😍','🧐','🤪','🥳','😂','😡','🤤','😴','🤐','🤫'
]
function getRandamValue()
{
    return values[Math.floor(Math.random()*17)];
    // math.random humme 0 se 1 ke bich mei koi bhi random value deta hai 
    // 17 se multiply isliye taki wo 16 ko cross na kar skke kyuki apni array ka last element 16 hai 
    // Math.floor ka kaam niche likha hai 
    //  1.53  =>  1
    // 16.9=> 16
    // 10.45=>10
}
let animationId;
function updateAnimation(newSpeed){
    if(Date.now==20)
    {
        clearInterval(animationId);
    }
    if(animationId) clearInterval(animationId)
    animationId=setInterval(()=>{
        value1.innerText=getRandamValue()
        value2.innerText=getRandamValue()
        value3.innerText=getRandamValue()
        
    },1000/newSpeed)
}





spin.onclick= function()
{
    // alert('you just click spin')
    // value1.style.animationIterationCount = "infinite";
    // updateAnimation(ab);
    // console.log(ab);
    // document.documentElement.style.setProperty('--duration',1000)
    // document.documentElement.style.setProperty('--speed',3);
    // updateAnimation(3);
    // document.documentElement.style.setProperty('--speed',1);
    // updateAnimation(1);
    // document.getElementsByClassName("slot").style.animationIterationCount = "10";
    // var ab ;
    // console.log('hello aatish ')
    value1.style.animationName="slotspin";
    value1.style.animationIterationCount="10";
    value1.style.animationDuration= "0.1s";
    value2.style.animationName="slotspin";
    value2.style.animationIterationCount="10";
    value2.style.animationDuration= "0.2s";
    value3.style.animationName="slotspin";
    value3.style.animationIterationCount="10";
    value3.style.animationDuration= "0.5s";
    // updateAnimation(5);



}
    
// inputspeed.onchange=function(ev)
// {
    

//     // document.documentElement=> this is 'root'
//     document.documentElement.style.setProperty('--speed',ev.target.value)

//     // ev.target.value mtlb jo humne  input box mei likha hai 
//     // speed wo property hai jisko hum change karna chah rhe hai 
     
//     // updateAnimation(ev.target.value)
//     // this update function is to change the speed at which the 
//     // the element are changing 
// }
   

 