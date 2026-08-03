<template>

<div class="viewer" @click="$emit('close')">


<div class="card" @click.stop>


<img :src="data.image">


<div class="info">


<span>{{data.date}}</span>


<h2>
{{data.title}}
</h2>


<p>
{{data.text}}
</p>


</div>


</div>


</div>

</template>



<script setup>


defineProps({

data:Object

})


defineEmits([
"close"
])


</script>



<style scoped>


.viewer{

position:fixed;

inset:0;

background:rgba(0,0,0,.9);

display:flex;

align-items:center;

justify-content:center;

z-index:100;

}



.card{

background:white;

color:#111;

padding:20px;

width:min(450px,90vw);

transform-origin:center;

animation:

memoryOpen 1s cubic-bezier(.2,1.4,.4,1);


}



@keyframes memoryOpen{


0%{

opacity:0;

transform:

scale(.2)

rotate(-20deg);

filter:blur(20px);

}



100%{

opacity:1;

transform:

scale(1)

rotate(0);

filter:blur(0);

}


}



img{

width:100%;

}



.info{

padding:20px;

}



span{

color:#777;

letter-spacing:3px;

}



@keyframes open{


from{

scale:.5;

opacity:0;

}


to{

scale:1;

opacity:1;

}


}



</style>