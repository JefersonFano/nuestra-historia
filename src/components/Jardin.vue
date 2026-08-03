<template>

<section class="garden-scene">


<div class="sky"></div>



<div class="garden">


<div
v-for="flower in flowers"
:key="flower.id"
class="flower"
:style="{
left:flower.left,
animationDelay:flower.delay,
transform:`scale(${flower.size}) rotate(${flower.rotate}deg)`
}"
>


<div class="stem"></div>


<div 
class="head"
:class="flower.type"
>

<div class="petals">

</div>

</div>


</div>


</div>



<div
v-if="showMessage"
class="message"
>


<p>
Siempre voy a tomar tu mano,
<br>
incluso en los capítulos que todavía
<br>
nos quedan por escribir ❤️
</p>


<p>

Porque lo más bonito no fue solo
<br>
recordar lo que vivimos,
<br>
sino imaginar todo lo que aún
<br>
nos falta vivir.

</p>



<h2>

¿Te gustaría continuar creando
<br>
momentos y memorias juntos?

</h2>


</div>



</section>


</template>



<script setup>

import {
ref,
onMounted
}
from "vue"



const flowers=ref([])

const showMessage=ref(false)



const flowerTypes=[

"lily",
"daisy",
"rose",
"small"

]



function growGarden(){



for(let i=0;i<45;i++){


flowers.value.push({

id:i,

left:
Math.random()*90+"%",

delay:
(i*0.15)+"s",

type:
flowerTypes[
Math.floor(
Math.random()*flowerTypes.length
)
],

size:
Math.random()*0.6+0.7,

rotate:
Math.random()*40-20

})


}



setTimeout(()=>{

showMessage.value=true


},8500)



}



onMounted(()=>{

growGarden()

})


</script>

<style scoped>


.garden-scene{

height:100vh;

overflow:hidden;

position:relative;

background:

linear-gradient(

180deg,

#090612,

#211126,

#46233d

);


}



.sky{

position:absolute;

inset:0;


background:

radial-gradient(

circle at 50% 20%,

rgba(255,255,255,.15),

transparent 40%

);


}



.garden{

position:absolute;

bottom:0;

width:100%;

height:60%;

}



.flower{

position:absolute;

bottom:0;

opacity:0;

animation:

growFlower 2.5s ease forwards;

}



.stem{

height:140px;

width:6px;

background:

linear-gradient(
90deg,
#2f6935,
#6aa34c,
#2f6935
);

border-radius:20px;

position:relative;

}


.stem::after{

content:"";

position:absolute;

width:40px;

height:20px;

background:#4b8d3c;

border-radius:100% 0;

left:-25px;

top:70px;

transform:
rotate(-25deg);

}

.daisy .petals{

width:55px;
height:55px;

position:absolute;

top:-30px;
left:-25px;


background:

radial-gradient(
ellipse,
white 60%,
transparent 65%
);


border-radius:50%;


}



.daisy .petals::before{


content:"";

position:absolute;

inset:0;


background:

conic-gradient(

white 0deg 20deg,
transparent 20deg 30deg,
white 30deg 50deg,
transparent 50deg 60deg,
white 60deg 80deg,
transparent 80deg 90deg,
white 90deg 110deg,
transparent 110deg 120deg,
white 120deg 140deg,
transparent 140deg 150deg,
white 150deg 170deg,
transparent 170deg 180deg

);


border-radius:50%;

}



.daisy .petals::after{

content:"";

position:absolute;

width:18px;

height:18px;

background:#ffd84d;

border-radius:50%;

top:18px;

left:18px;

box-shadow:
0 0 10px #ffd84d;

}

.rose .petals{


width:60px;

height:60px;

position:absolute;

top:-35px;

left:-30px;


background:

radial-gradient(

circle at center,

#ff7a9b 10%,

#e91e63 35%,

#9c0035 70%

);


border-radius:50%;


box-shadow:

inset 0 0 15px rgba(0,0,0,.3);


}



.rose .petals::before{

content:"";

position:absolute;

width:35px;

height:35px;

top:12px;

left:12px;


border-radius:50%;


background:

radial-gradient(

circle,

#ffb0c8,

#d41455

);


}



.rose .petals::after{

content:"";

position:absolute;

width:20px;

height:20px;

top:20px;

left:20px;


border-radius:50%;


background:#8b0032;

}

.lily .petals{

width:70px;

height:45px;

position:absolute;

top:-35px;

left:-35px;


background:

radial-gradient(

ellipse,

#fff,

#f3a6c8

);


border-radius:

50% 50% 50% 0;


transform:

rotate(-25deg);


}


.lily .petals::before{

content:"";

position:absolute;

width:70px;

height:45px;

background:

radial-gradient(

ellipse,

white,

#e884b0

);


border-radius:

50% 50% 0 50%;


transform:

rotate(55deg);

}

.flower{

animation:

growFlower 2.5s ease forwards,
wind 5s infinite ease-in-out;

}



@keyframes wind{


0%,100%{

margin-left:0;

}



50%{

margin-left:8px;

}

}



.head{

width:55px;

height:55px;

border-radius:50%;

position:absolute;

top:-30px;

left:-25px;

}



.lily{

background:

radial-gradient(

circle,

white,

#f5a8c7

);

}



.daisy{

background:

radial-gradient(

circle,

#ffd84d 15%,

white 20%,

white 60%,

#ffe8a0

);

}



.rose{

background:

radial-gradient(

circle,

#ff315f,

#8b0032

);

}



.small{

width:35px;

height:35px;

background:#b78cff;

}



@keyframes growFlower{


0%{

transform:

scale(0)

translateY(100px)
rotate(-30deg);

opacity:0;

}



100%{

transform:

scale(1)
translateY(0)
rotate(0);

opacity:1;

}


}



.message{

position:absolute;

top:20%;

width:100%;

text-align:center;

color:white;


font-family:

Georgia,serif;


font-size:1.4rem;

line-height:2;


animation:

appear 3s ease;


}



.message h2{


margin-top:50px;

font-size:2rem;


}



@keyframes appear{


from{

opacity:0;

transform:

translateY(50px);

}


to{

opacity:1;

transform:none;

}


}


</style>