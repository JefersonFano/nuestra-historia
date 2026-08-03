<template>

<section class="letter-scene">


<div class="ambient"></div>



<div

class="envelope-container"

:class="state"

@click="openLetter"

>


<div class="envelope">


<div class="front"></div>


<div class="flap"></div>


<div class="seal">

❤

</div>


</div>



<div class="paper">


<h1>
Para ti ❤️
</h1>



<div class="writing-area">

<p>
{{visibleText}}
<span class="cursor">|</span>
</p>

</div>



</div>



</div>




<button
v-if="state==='finished'"
@click.stop="$emit('complete')"
>
Continuar ✨
</button>


</section>

</template>



<script setup>

import {
ref
}
from "vue"

const writingArea=ref(null)

const emit=defineEmits([
"complete"
])


const state=ref("closed")


const visibleText=ref("")



const fullText=

`No sabía cómo guardar todos estos momentos,
así que decidí crear este pequeño lugar para nosotros.

Cada recuerdo que viste representa una pequeña parte
de nuestra historia.

Gracias por cada sonrisa, cada conversación,
cada momento y cada detalle.

Espero que sigamos creando muchos capítulos más juntos.

Con mucho cariño ❤️

De yo para tú :v`




function openLetter(){


if(state.value!=="closed")
return


state.value="opening"



setTimeout(()=>{


state.value="writing"


typeWriter()


},3500)



}



function typeWriter(){


let index=0


const speed=120



const timer=setInterval(()=>{


visibleText.value+=fullText[index]


index++



if(index>=fullText.length){


clearInterval(timer)


setTimeout(()=>{


state.value="finished"


},1500)


}



},speed)


}


</script>



<style scoped>


.letter-scene{


height:100vh;

background:

radial-gradient(

circle at center,

#252525,

#000

);


display:flex;

justify-content:center;

align-items:center;

flex-direction:column;

overflow:hidden;

}



.ambient{


position:absolute;

inset:0;


background:

radial-gradient(

circle,

rgba(255,255,255,.08),

transparent 60%

);


}




.envelope-container{


position:relative;

width:340px;

height:260px;

cursor:pointer;

perspective:1200px;

animation:

floatEnvelope 5s infinite ease-in-out;


}



@keyframes floatEnvelope{


0%,100%{

transform:translateY(0);

}


50%{

transform:translateY(-15px);

}


}



.envelope{


width:300px;

height:200px;

position:absolute;

bottom:0;

left:10px;


background:

linear-gradient(

145deg,

#9c526c,

#633044

);


border-radius:8px;


overflow:hidden;


box-shadow:

0 30px 80px rgba(0,0,0,.8);


}




.front{


position:absolute;

bottom:0;

width:100%;

height:100%;


background:

linear-gradient(

145deg,

#b56b84,

#7a3c55

);


clip-path:

polygon(

0 100%,

100% 100%,

100% 40%,

50% 75%,

0 40%

);


}




.flap{


position:absolute;

top:0;

width:0;

height:0;


border-left:150px solid transparent;

border-right:150px solid transparent;

border-top:110px solid #c47b92;


transform-origin:top;

transition:

1.2s;


z-index:3;


}




.seal{

animation: glow 2s infinite;

position:absolute;

top:80px;
left:130px;

width:40px;
height:40px;

border-radius:50%;

background:#dca1b5;

color:white;

display:flex;
align-items:center;
justify-content:center;

z-index:4;

}

@keyframes glow{

0%,100%{

box-shadow:
0 0 10px rgba(255,150,180,.3);

}

50%{

box-shadow:
0 0 35px rgba(255,150,180,.9);

}

}




.paper{


position:absolute;


width:300px;

min-height:430px;


background:

#fffaf2;


left:10px;


bottom:20px;


padding:30px;


box-sizing:border-box;


color:#333;


font-family:

"Georgia",
serif;


line-height:1.8;


transform:

translateY(0);


transition:

transform 2.5s cubic-bezier(.2,1.4,.4,1),
opacity 1.5s;


opacity:0;


z-index:2;


box-shadow:

0 20px 60px rgba(0,0,0,.5);


}



.opening .flap,
.writing .flap,
.finished .flap{


transform:

rotateX(180deg);


}



.opened .seal{


opacity:0;


}



.writing .paper,
.finished .paper{


transform:

translateY(-210px);


opacity:1;


}




h1{


text-align:center;

font-size:2rem;

margin-bottom:25px;


}



.cursor{


animation:

blink 1s infinite;


}



@keyframes blink{


50%{

opacity:0;

}

}




button{

margin-top:40px;

padding:16px 45px;

border:none;

border-radius:50px;

background:
linear-gradient(
135deg,
#fff,
#ddd
);

box-shadow:
0 10px 40px rgba(255,255,255,.25);

font-size:1rem;

cursor:pointer;

animation:appear 1s;

z-index:20;

}



@keyframes buttonAppear{


from{

opacity:0;

transform:translateY(40px);

}


to{

opacity:1;

}


}


</style>