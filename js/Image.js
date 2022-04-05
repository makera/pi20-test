export default {
    props: ['src'],
    emits: ['answer'],
    template: `<div class="image"><img @click="$emit('answer')" v-bind:src="src" alt=""></div>`
}