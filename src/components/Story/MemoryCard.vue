<template>

<article 
class="memory-card"
:class="orientation"
ref="card"
>


    <div class="photo-container">


        <img
        :src="image"
        :alt="title"
        />


    </div>



    <div class="info">


        <span class="date">

            {{ date }}

        </span>


        <h2>

            {{ title }}

        </h2>


        <p>

            {{ text }}

        </p>


    </div>


</article>

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


const props = defineProps({

date:String,

title:String,

text:String,

image:String,

orientation:String

})



const card=ref(null)



onMounted(()=>{


gsap.fromTo(

card.value,

{

opacity:0,

y:100,

scale:.95,

filter:"blur(15px)"

},

{

opacity:1,

y:0,

scale:1,

filter:"blur(0px)",

duration:1.5,

ease:"power3.out"

}

)


})


</script>



<style scoped>


.memory-card{


width:min(900px,90vw);

margin:auto;

}





.photo-container{


overflow:hidden;

border-radius:30px;

box-shadow:

0 30px 80px rgba(0,0,0,.5);


}



img{

width:100%;

object-fit:cover;

border-radius:30px;

}


/* Fotos verticales */

.vertical img{


height:45vh;

max-height:420px;

object-fit:contain;

background:#111;

}



/* Fotos horizontales */

.horizontal img{


height:35vh;

max-height:320px;

object-fit:cover;

}


.memory-card.vertical{

width:min(450px,90vw);

}


.memory-card.horizontal{

width:min(900px,90vw);

}


.memory-card:hover img{


transform:scale(1.08);


}



.info{


padding:40px 20px;


}



.date{


font-size:.8rem;

letter-spacing:.5em;

color:#aaa;

text-transform:uppercase;


}



h2{


font-size:

clamp(

2rem,

5vw,

4rem

);


font-weight:500;

margin-top:20px;


}



p{


font-size:1.2rem;

color:#ccc;

line-height:1.8;

margin-top:20px;


}



</style>