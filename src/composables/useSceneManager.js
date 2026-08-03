import { ref } from "vue"


const currentScene = ref("intro")


const scenes=[

"intro",

"universe",

"lights",

"title",

"story",

"gallery",

"letter",

"final"

]


export function useSceneManager(){


function nextScene(){

    const index =
    scenes.indexOf(
        currentScene.value
    )


    if(index < scenes.length - 1){

        currentScene.value =
        scenes[index + 1]

    }

}



function goTo(scene){

    if(
        scenes.includes(scene)
    ){

        currentScene.value = scene

    }

}



return {

    currentScene,

    nextScene,

    goTo

}


}