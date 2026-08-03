<template>

<div

class="floating-photo"

:class="orientation"

:style="position"

ref="photo"

@click="select"

>


<img

:src="image"

/>


</div>


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

image:String,

orientation:String,

index:Number,

position:Object

})


const emit = defineEmits([

"select"

])


const photo = ref(null)



onMounted(()=>{


gsap.fromTo(

photo.value,

{

opacity:0,

scale:.8,

filter:"blur(20px)",

y:50

},

{

opacity:.35,

scale:1,

filter:"blur(2px)",

y:0,

duration:2,

delay:props.index*.2,

ease:"power3.out"

}

)



// movimiento flotante


gsap.to(

photo.value,

{

y:"+=25",

x:"+=10",

rotation:"+=4",

duration:

4+Math.random()*3,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

}

)



})




function select(){


emit(

"select",

props.index

)


}


</script>



<style scoped>


.floating-photo{


position:absolute;

cursor:pointer;

overflow:hidden;

border-radius:18px;


box-shadow:

0 30px 80px rgba(0,0,0,.8);


transition:.5s;


opacity:.7;

backdrop-filter:blur(3px);

filter:blur(2px);


}



.floating-photo:hover{


opacity:1;

filter:blur(0);

transform:

scale(1.1)

translateY(-10px);


}



img{


width:100%;

height:100%;

object-fit:cover;


}



.vertical{


width:230px;

height:360px;


}



.horizontal{


width:420px;

height:260px;


}



.square{


width:300px;

height:300px;


}



</style>