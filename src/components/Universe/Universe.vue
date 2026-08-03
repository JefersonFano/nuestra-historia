<template>

<canvas
ref="canvas"
class="canvas"
/>

</template>


<script setup>

import {

ref,

onMounted,

onBeforeUnmount

}

from "vue"



const emit=defineEmits([

"complete"

])



const canvas=ref(null)


let ctx

let animation



let stars=[]



function resize(){


canvas.value.width=
window.innerWidth


canvas.value.height=
window.innerHeight



}



function createStars(){


stars=[]



for(
let i=0;i<250;i++
){


stars.push({


x:
Math.random()*canvas.value.width,


y:
Math.random()*canvas.value.height,


size:
Math.random()*2,


alpha:
Math.random(),


speed:
Math.random()*0.02


})


}


}




function draw(){


ctx.clearRect(

0,

0,

canvas.value.width,

canvas.value.height

)



stars.forEach(star=>{


star.alpha+=star.speed



if(star.alpha>=1){

star.speed*=-1

}


if(star.alpha<=0.2){

star.speed*=-1

}



ctx.beginPath()


ctx.fillStyle=
`rgba(255,255,255,${star.alpha})`


ctx.arc(

star.x,

star.y,

star.size,

0,

Math.PI*2

)


ctx.fill()



})



animation=requestAnimationFrame(draw)


}




onMounted(()=>{


ctx=
canvas.value.getContext("2d")


resize()

createStars()

draw()



window.addEventListener(
"resize",
resize
)



setTimeout(()=>{


emit("complete")


},8000)



})



onBeforeUnmount(()=>{


cancelAnimationFrame(animation)



})



</script>



<style scoped>


.canvas{


position:absolute;

inset:0;

width:100%;

height:100%;

z-index:1;


background:black;


}


</style>