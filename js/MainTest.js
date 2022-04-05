import Navbar from "./Navbar.js";
import Text from "./Text.js";
import Images from "./Images.js";

export default {
    name: 'MainTest',
    components: {Navbar, Text, Images},
    data() {
        return {
            current: 0,
            answer: null,
            questions: [
                {
                    question: 'Начинаем с простенького. Судя по мультфильму, Чебурашка и Гена много гуляли и ходили пешком. А вот если бы они устали, то могли бы спокойно воспользоваться любым другим способом передвижения, кроме одного. Какого?',
                    images: ['/imgs/var1.jpg', '/imgs/var2.jpg', '/imgs/var3.jpg', '/imgs/var4.jpg'],
                    answer: 'Верный ответ такой-то.',
                    correct: 2
                },
                {
                    question: 'Начинаем с простенького. Судя по мультфильму, Чебурашка и Гена много гуляли и ходили пешком. А вот если бы они устали, то могли бы спокойно воспользоваться любым другим способом передвижения, кроме одного. Какого?',
                    images: ['/imgs/var1.jpg', '/imgs/var2.jpg', '/imgs/var3.jpg', '/imgs/var4.jpg'],
                    answer: 'Верный ответ такой-то.',
                    correct: 2
                }
            ],
            total: 0,
            results: {
                0: 'Все не верно',
                1: 'Все верно'
            }
        }
    },
    methods: {
        handleAnswer(answer) {
            this.answer = answer
            if (answer === this.questions[this.current].correct) {
                this.total += 1
            }
        },
        handleNext() {
            this.current += 1
            this.answer = null
        }
    },
    template: `
        <div class="main">
            <div class="wrapp">
                <img src="/imgs/leafs1.png" alt="" class="leafs1">
                <img src="/imgs/leafs2.png" alt="" class="leafs2">
                <div class="content">
                    <Navbar :current="current" :count="questions.length" />
                    <Text v-if='current < questions.length' :text="answer === null ? questions[current].question : questions[current].answer" :show-next="answer !== null" @next="handleNext" />
                    <Text v-else :text="results[total]" />
                    <Images v-if="current < questions.length" :images="questions[current].images" :answer="answer" :correct="questions[current].correct" @answer="handleAnswer" />
                    <div v-else />
                </div>
            </div>
        </div>
`
}