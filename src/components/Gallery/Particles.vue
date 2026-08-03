<template>

<div>

<span

v-for="p in particles"

:key="p.id"

class="particle"

:style="{

left:p.x+'%',

top:p.y+'%',

width:p.s+'px',

height:p.s+'px'

}"

>


</span>


</div>

</template>



<script setup>


const particles=Array.from(
{length:80},
(_,i)=>({

id:i,

x:Math.random()*100,

y:Math.random()*100,

s:Math.random()*3+1

})

)


</script>



<style scoped>


.particle{

position:absolute;

background:white;

border-radius:50%;

opacity:.5;

animation:

blink 4s infinite,

move 15s infinite linear;


}



@keyframes move{


from{

transform:translateY(0);

}


to{

transform:translateY(-100px);

}


}



@keyframes blink{


50%{

opacity:.1;

}

}


</style>