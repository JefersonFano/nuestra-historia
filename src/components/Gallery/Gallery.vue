<template>

<section class="gallery">


<Particles />


<div class="title">


<h1>
Nuestros momentos
</h1>


<p>
Pequeños recuerdos flotando en nuestra historia.
</p>


</div>



<div class="space">


<FloatingMemory

v-for="(photo,index) in photos"

:key="index"

:data="photo"

:index="index"

@select="openPhoto"

/>


</div>



<MemoryViewer

v-if="selected !== null"

:data="photos[selected]"

@close="closePhoto"

/>



<button

v-if="finished"

class="continue"

@click="emit('complete')"

>
Continuar nuestra historia ✨

</button>



</section>

</template>



<script setup>


import {ref,computed} from "vue"


import FloatingMemory from "./FloatingMemory.vue"

import MemoryViewer from "./MemoryViewer.vue"

import Particles from "./Particles.vue"



const selected=ref(null)


const viewed=ref([])



const emit = defineEmits([
"complete"
])



const photos=[


{
image:"/images/story/foto1.jpg",
date:"Nuestro comienzo",
title:"La primera foto",
text:"Primera interacción - Michi tiburón.",
rotation:-10,
size:180
},


{
image:"/images/story/foto2.jpg",
date:"Nuestros momentos",
title:"Dibujitos",
text:"Pinté para ti y tú para mi.",
rotation:8,
size:220
},


{
image:"/images/story/foto3.jpg",
date:"Un día especial",
title:"Kuromichi",
text:"El primer ramo junto a una michi kuromi.",
rotation:-6,
size:170
},


{
image:"/images/story/foto4.jpg",
date:"Ese día",
title:"Lo lograste",
text:"Orgulloso de la persona que eres.",
rotation:12,
size:230
},


{
image:"/images/story/foto5.jpg",
date:"Cuto",
title:"Cuto",
text:"Cuto.",
rotation:-15,
size:160
},


{
image:"/images/story/foto6.jpg",
date:"Fotito favorita",
title:"Tus hojitos",
text:"Cada día tiene algo nuevo.",
rotation:6,
size:200
},


{
image:"/images/story/foto7.jpg",
date:"Una experiencia más",
title:"Manitos",
text:"Palmas en un lienzo intercambiadas.",
rotation:-8,
size:180
},


{
image:"/images/story/foto8.jpg",
date:"Siempre juntos",
title:"Un instante perfecto",
text:"Una pequeña parte de nuestra historia.",
rotation:10,
size:210
},


{
image:"/images/story/foto9.jpg",
date:"Más recuerdos",
title:"Otro momento especial",
text:"Todavía quedan muchos por vivir.",
rotation:-12,
size:190
},


{
image:"/images/story/foto10.jpg",
date:"Un día más",
title:"Miradas",
text:"El cruce de miradas es único.",
rotation:7,
size:220
},


{
image:"/images/story/foto11.jpg",
date:"Un detalle",
title:"Algo pequeño",
text:"Pero importante para mí.",
rotation:-5,
size:170
},


{
image:"/images/story/foto12.jpg",
date:"Y esto continúa",
title:"Mimidos",
text:"Todavía faltan muchos capítulos.",
rotation:14,
size:230
}

]



const finished=computed(()=>{

return viewed.value.length===photos.length

})



function openPhoto(index){

selected.value=index


if(!viewed.value.includes(index)){

viewed.value.push(index)

}

}



function closePhoto(){

selected.value=null

}



</script>



<style scoped>


.gallery{

height:100vh;

background:#050505;

color:white;

overflow:hidden;

position:relative;

}



.title{

position:absolute;

top:70px;

width:100%;

text-align:center;

z-index:5;

}



h1{

font-size:clamp(3rem,7vw,6rem);

}


p{

color:#aaa;

margin-top:20px;

}



.space{

position:absolute;

inset:0;

}



.continue{

position:absolute;

bottom:50px;

left:50%;

transform:translateX(-50%);

background:white;

color:black;

border:none;

padding:18px 40px;

border-radius:40px;

font-size:1.1rem;

cursor:pointer;

z-index:20;

animation:pulse 2s infinite;

}



@keyframes pulse{

50%{

transform:translateX(-50%) scale(1.08);

}

}



</style>