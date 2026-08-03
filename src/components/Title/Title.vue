<template>

<section class="title-scene">


    <div class="glow"></div>


    <div class="content">


        <h1 ref="titleRef">

            Nuestra

            <br>

            Historia

        </h1>


        <p ref="subtitleRef">

            Una historia que empezó
            sin darnos cuenta...

        </p>


        <button
            ref="buttonRef"
            @click="startStory"
        >

            ❤️ Comenzar nuestro viaje

        </button>


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



const emit = defineEmits([

"complete"

])



const titleRef = ref(null)

const subtitleRef = ref(null)

const buttonRef = ref(null)



onMounted(()=>{


const tl = gsap.timeline()



tl.fromTo(

titleRef.value,

{

opacity:0,

y:50,

filter:"blur(20px)"

},

{

opacity:1,

y:0,

filter:"blur(0px)",

duration:2,

ease:"power3.out"

}

)



.fromTo(

subtitleRef.value,

{

opacity:0,

y:30

},

{

opacity:1,

y:0,

duration:1.5,

ease:"power3.out"

},

"-=0.8"

)



.fromTo(

buttonRef.value,

{

opacity:0,

scale:.8

},

{

opacity:1,

scale:1,

duration:1,

ease:"back.out"

}

)



})




function startStory(){


gsap.to(

".title-scene",

{

opacity:0,

duration:1,

onComplete(){

emit("complete")

}

}

)


}



</script>



<style scoped>


.title-scene{


height:100vh;

width:100%;

display:flex;

justify-content:center;

align-items:center;

background:

radial-gradient(

circle,

#ffffff 0%,

#f7f7f7 45%,

#eaeaea 100%

);

color:#111;

overflow:hidden;


}



.glow{


position:absolute;

width:500px;

height:500px;


background:

radial-gradient(

circle,

rgba(255,200,220,.45),

transparent 70%

);


filter:blur(80px);


}



.content{


position:relative;

text-align:center;

z-index:2;

padding:30px;


}



h1{


font-size:

clamp(

4rem,

10vw,

8rem

);


font-weight:700;

line-height:.9;

letter-spacing:-.05em;


}



p{


margin-top:40px;

font-size:clamp(

1.2rem,

3vw,

2rem

);


color:#555;


}



button{


margin-top:60px;

padding:18px 40px;


border-radius:50px;


background:#111;


color:white;


font-size:1.1rem;


transition:.3s;


}


button:hover{


transform:scale(1.05);


}



</style>