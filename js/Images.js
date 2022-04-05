import Image from "./Image.js";

export default {
    name: 'Images',
    props: ['images', 'answer', 'correct'],
    components: {Image},
    emits: ['answer'],
    template: `
        <div class="images">
            <Image v-for="(image, index) in images" v-bind:src="image" @answer="!answer && $emit('answer', index)" 
                :class="{image__success: answer !== null && correct === index, image__failure: answer !== null && answer !== correct && answer === index}"
                :style="{pointerEvents: answer !== null && 'none'}" />
        </div>   
    `
}