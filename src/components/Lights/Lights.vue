<template>

<section class="lights">


<canvas ref="canvas"></canvas>


</section>


</template>


<script setup>

import {
ref,
onMounted,
onBeforeUnmount
}
from "vue"



const emit = defineEmits([
"complete"
])


const canvas = ref(null)


let ctx

let animation



let left = {

x:-100,

y:0,

size:8,

color:"#9fdcff",

trail:[]

}



let right = {

x:0,

y:0,

size:8,

color:"#ffd1e8",

trail:[]

}



function resize(){


canvas.value.width =
window.innerWidth


canvas.value.height =
window.innerHeight


left.y =
canvas.value.height/2


right.y =
canvas.value.height/2


right.x =
canvas.value.width+100


}



function drawParticle(light){


light.trail.push({

x:light.x,

y:light.y

})



if(light.trail.length>40){

light.trail.shift()

}



light.trail.forEach(
(p,i)=>{


ctx.beginPath()


ctx.fillStyle =
`rgba(255,255,255,${
i/100
})`


ctx.arc(

p.x,

p.y,

3,

0,

Math.PI*2

)


ctx.fill()


})



}



function drawLight(light){


ctx.beginPath()


ctx.shadowBlur=60


ctx.shadowColor=
light.color


ctx.fillStyle=
light.color



ctx.arc(

light.x,

light.y,

light.size,

0,

Math.PI*2

)



ctx.fill()


ctx.shadowBlur=0


}




function animate(){


ctx.clearRect(

0,

0,

canvas.value.width,

canvas.value.height

)



left.x += 1.8

right.x -= 1.8



drawParticle(left)

drawParticle(right)


drawLight(left)

drawLight(right)



const distance =
Math.abs(
left.x-right.x
)



if(distance<30){


flash()



return


}



animation =
requestAnimationFrame(
animate
)


}




function flash(){


ctx.fillStyle="white"


ctx.fillRect(

0,

0,

canvas.value.width,

canvas.value.height

)



setTimeout(()=>{


emit("complete")


},700)


}




onMounted(()=>{


ctx =
canvas.value.getContext("2d")


resize()


animate()


window.addEventListener(
"resize",
resize
)


})



onBeforeUnmount(()=>{


cancelAnimationFrame(
animation
)


})



</script>


<style scoped>


.lights{


position:absolute;

inset:0;

background:transparent;

}


canvas{


width:100%;

height:100%;

position:absolute;


}


</style>