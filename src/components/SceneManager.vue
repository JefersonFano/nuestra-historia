<template>

<div class="scene-container">


    <Intro
        v-if="currentScene === 'intro'"
        @complete="nextScene"
    />


    <Universe
        v-if="currentScene === 'universe'"
        @complete="nextScene"
    />

    <Lights
        v-if="currentScene === 'lights'"
        @complete="nextScene"
    />

    <Title
        v-if="currentScene === 'title'"
        @complete="nextScene"
    />

    <Story
        v-if="currentScene === 'story'"
        @complete="nextScene"
    />

    <Gallery
        v-if="currentScene === 'gallery'"
        @complete="nextScene"
    />

    <Letter
        v-if="currentScene === 'letter'"
        @complete="nextScene"
    />
    
    <Jardin
        v-if="currentScene === 'final'"
    />

</div>

</template>


<script setup>

import Intro from "./Intro/Intro.vue"

import Universe from "./Universe/Universe.vue"

import Lights from "./Lights/Lights.vue"

import Title from "./Title/Title.vue"

import Story from "./Story/Story.vue"

import Gallery from "./Gallery/Gallery.vue"

import Letter from "./Letter/Letter.vue"

import Jardin from "./Jardin.vue"

import {
    useSceneManager
}
from "../composables/useSceneManager"


const {

    currentScene,

    nextScene

}=useSceneManager()


</script>


<style scoped>

.scene-container{

width:100%;

height:100vh;

overflow:hidden;

background:#000;

}

</style>