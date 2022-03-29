import Image from './image.js'

export default {
    data() {
        return {
            current: 0,
            questions: [
                {
                    images: ['/imgs/var1.jpg', '/imgs/var2.jpg', '/imgs/var3.jpg', '/imgs/var4.jpg']
                },
                {
                    images: ['/imgs/var2.jpg', '/imgs/var3.jpg', '/imgs/var4.jpg', '/imgs/var1.jpg']
                }
            ],
        }
    },
    components: {Image},
    template: `<div class="images">
                   <Image v-for="image in questions[current].images" v-bind:src="image" @next="current += 1" />
               </div>`
}