<template>

<section class="intro">


<Universe/>


<div class="content">


<h1 ref="textRef">

{{ currentText }}

</h1>


</div>


</section>

</template>


<script setup>

import {
ref,
onMounted
}
from "vue"


import {
gsap
}
from "gsap"


import Universe from "../Universe/Universe.vue"



const emit = defineEmits([

"complete"

])



const textRef=ref(null)



const currentText=ref("")



const phrases=[


"Si alguien...",


"me hubiera dicho...",


"que un día existiría una persona...",


"capaz de cambiar mi mundo...",


"jamás le habría creído."



]



async function playIntro(){


for(
let phrase of phrases
){


currentText.value=phrase



await showText()



await hideText()



}



emit("complete")



}



function showText(){


return new Promise(resolve=>{


gsap.fromTo(

textRef.value,

{

opacity:0,

y:40,

filter:"blur(10px)"

},

{

opacity:1,

y:0,

filter:"blur(0px)",

duration:1.5,

ease:"power3.out",

onComplete:resolve

}


)


})


}



function hideText(){


return new Promise(resolve=>{


gsap.to(

textRef.value,

{

opacity:0,

y:-30,

filter:"blur(10px)",

delay:1.5,

duration:1,

ease:"power3.in",

onComplete:resolve

}


)


})


}



onMounted(()=>{


playIntro()


})



</script>


<style scoped>


.intro{


height:100vh;

position:relative;

display:flex;

align-items:center;

justify-content:center;

overflow:hidden;


}



.content{


position:relative;

z-index:10;

text-align:center;


}



h1{


color:white;

font-size:clamp(2rem,6vw,4rem);

font-weight:300;

max-width:900px;

padding:30px;

line-height:1.5;


}



</style>