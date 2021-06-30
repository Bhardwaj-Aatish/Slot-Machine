let value1=document.getElementById(‘value1’) 
let value2=document.getElementById(‘value2’)
let value3=document.getElementById(‘value3’)
let inpSpeed=document.getElementById(‘inpSpeed’)
let spin=document.getElementById(‘spin’)
let slot=document.getElementsByClassName(‘slot’)
     let values=[ ‘:watch:’,‘:hourglass:’,‘:phone:’,‘:open_umbrella:’,‘:slight_smile:’,‘:wheel_of_dharma:’,‘:radioactive:’,‘:heart:’ ] 
     function getRandomValue(){ return values[Math.floor(Math.random()*8)] }
      let animationId;
       function updateAnimation(newSpeed)
       { if (animationId) clearInterval(animationId) animationId=setInterval(()=>
        { value1.innerText=getRandomValue() value2.innerText=getRandomValue() value3.innerText=getRandomValue() },1000/newSpeed ) }
         spin.onclick=function(){ updateAnimation(ev.target.value) 
        } 
        inpSpeed.onchange=function(ev){ 
            // console.log(‘value changed’,ev.target.value)
             //document.documentElement => this is “:root” of css document.documentElement.style.setProperty(’–speed’,ev.target.value) }let value1=document.getElementById(‘value1’) let value2=document.getElementById(‘value2’) let value3=document.getElementById(‘value3’) let inpSpeed=document.getElementById(‘inpSpeed’) let spin=document.getElementById(‘spin’) let slot=document.getElementsByClassName(‘slot’) let values=[ ‘:watch:’,‘:hourglass:’,‘:phone:’,‘:open_umbrella:’,‘:slight_smile:’,‘:wheel_of_dharma:’,‘:radioactive:’,‘:heart:’ ] function getRandomValue(){ return values[Math.floor(Math.random()*8)] } let animationId; function updateAnimation(newSpeed){ if (animationId) clearInterval(animationId) animationId=setInterval(()=>{ value1.innerText=getRandomValue() value2.innerText=getRandomValue() value3.innerText=getRandomValue() },1000/newSpeed ) } spin.onclick=function(){ updateAnimation(ev.target.value) } inpSpeed.onchange=function(ev){ // console.log(‘value changed’,ev.target.value) //document.documentElement => this is “:root” of css document.documentElement.style.setProperty(’–speed’,ev.target.value) }
    