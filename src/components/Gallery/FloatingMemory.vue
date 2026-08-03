<template>

<div

class="memory"

@click="$emit('select',index)"

:style="style"

>


<img :src="data.image">


</div>

</template>



<script setup>


import {computed} from "vue"


const props=defineProps({

data:Object,

index:Number

})


defineEmits([
"select"
])



const positions=[

["15%","12%"],
["20%","70%"],
["55%","15%"],
["60%","70%"],
["40%","45%"],
["75%","20%"],
["70%","75%"],
["35%","75%"],
["80%","45%"],
["15%","45%"],
["45%","20%"],
["85%","70%"]

]



const style=computed(()=>{


let p=positions[props.index]


return{

top:p[0],

left:p[1],

width:props.data.size+"px",

transform:
`rotate(${props.data.rotation}deg)`

}


})


</script>



<style scoped>


.memory{

position:absolute;

cursor:pointer;

filter:blur(7px);

opacity:.35;

transition:.6s;

animation:float 8s ease-in-out infinite;

}



.memory:hover{

filter:blur(0);

opacity:1;

scale:1.1;

}



img{

width:100%;

border-radius:10px;

}



@keyframes float{


50%{

margin-top:-25px;

}

}



</style>