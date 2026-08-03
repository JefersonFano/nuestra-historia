<template>

<div

class="viewer"

@click="$emit('close')"

>


<div

class="polaroid"

@click.stop

>


<img

:src="image"

/>



<div class="info">


<span>

{{date}}

</span>


<h2>

{{title}}

</h2>


<p>

{{text}}

</p>


</div>


</div>


</div>

</template>



<script setup>


defineProps({

image:String,

date:String,

title:String,

text:String

})


defineEmits([

"close"

])


</script>



<style scoped>


.viewer{


position:fixed;

inset:0;

background:

rgba(0,0,0,.85);


backdrop-filter:

blur(15px);


display:flex;

justify-content:center;

align-items:center;


z-index:100;


}



.polaroid{


background:white;

padding:20px;

border-radius:5px;


width:min(450px,90vw);


color:#111;


transform:

rotate(-2deg);


animation:

show .7s ease;


}



img{


width:100%;

border-radius:3px;


}



.info{


padding:25px 10px;


}



span{


font-size:.8rem;

color:#777;

letter-spacing:.3em;


}



h2{


margin-top:15px;

font-size:2rem;


}



p{


margin-top:15px;

line-height:1.6;

color:#555;


}



@keyframes show{


from{

opacity:0;

transform:

scale(.6)

rotate(-10deg);

}


to{

opacity:1;

transform:

scale(1)

rotate(-2deg);

}


}



</style>