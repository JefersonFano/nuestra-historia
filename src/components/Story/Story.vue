<template>

<section class="story">


    <div class="progress">

        <span
        v-for="(item,index) in memories"
        :key="index"
        :class="{active:index===current}"
        >
        </span>

    </div>



    <div class="container">


        <MemoryCard

        v-for="(item,index) in memories"

        :key="index"

        v-show="current===index"

        :image="item.image"

        :date="item.date"

        :title="item.title"

        :text="item.text"

        :orientation="item.orientation"

        />



        <button
        v-if="current < memories.length-1"
        class="next"
        @click="next"
        >

        ❤️ Siguiente recuerdo

        </button>



        <button
        v-else
        class="next"
        @click="finish"
        >

        ✨ Ver nuestros recuerdos

        </button>



    </div>


</section>

</template>



<script setup>


import {
ref
}
from "vue"


import {
gsap
}
from "gsap"



import MemoryCard from "./MemoryCard.vue"



const emit = defineEmits([

"complete"

])



const current = ref(0)



const memories=[


{
date:"Nuestro inicio",

title:"El día que todo comenzó",

text:
"Una coincidencia terminó convirtiéndose en una de las historias más bonitas que me han pasado.",

image:"/images/story/momento1.jpg",

orientation:"vertical"

},


{
date:"Nuestros momentos",

title:"Pequeñas cosas que significan mucho",

text:
"No fueron solo grandes momentos. Fueron risas, conversaciones y pequeños detalles que hicieron todo especial.",

image:"/images/story/momento2.jpg",

orientation:"horizontal"

},


{
date:"Hoy",

title:"Nuestra historia continúa",

text:
"Este capítulo todavía se está escribiendo, y quiero seguir llenándolo de recuerdos contigo.",

image:"/images/story/momento3.jpg",

orientation:"horizontal"

}


]



function next(){


gsap.to(

".container",

{

opacity:0,

y:-40,

duration:.5,

onComplete(){


current.value++



gsap.fromTo(

".container",

{

opacity:0,

y:40

},

{

opacity:1,

y:0,

duration:.8

}

)


}

}

)


}




function finish(){


emit("complete")


}



</script>



<style scoped>


.story{


min-height:100svh;

width:100%;

background:#050505;

color:white;

display:flex;

justify-content:center;

align-items:center;

overflow:hidden;

position:relative;

padding:40px 0;


}



.container{


width:min(900px,88%);

height:auto;

text-align:center;

display:flex;

flex-direction:column;

align-items:center;


}



.progress{


position:absolute;

right:40px;

top:50%;

transform:translateY(-50%);

display:flex;

flex-direction:column;

gap:15px;


}



.progress span{


width:10px;

height:10px;

border-radius:50%;

background:#555;

transition:.4s;


}



.progress span.active{


background:white;

transform:scale(1.5);


}



.next{


margin-top:25px;

margin-bottom:20px;

padding:16px 35px;

border-radius:40px;

background:white;

color:black;

font-size:1rem;

border:none;

cursor:pointer;


transition:.3s;


}



.next:hover{


transform:scale(1.05);


}



@media(max-width:700px){


.story{

padding:25px 0;

}



.container{

width:85%;

}



.next{

font-size:.9rem;

padding:14px 28px;

}

.progress{

right:20px;

}


}



</style>