export default {
    props: ['src'],
    emits: ['next'],
    template: `<div class="image"><img @click="$emit('next')" v-bind:src="src" alt=""></div>`
}