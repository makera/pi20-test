export default {
    name: 'Text',
    props: ['text', 'showNext'],
    emits: ['next'],
    template: `
        <div class="text">
            <div>{{text}}</div>
            <div v-if="showNext" class="button button__active">
                <svg @click="$emit('next')" width="134" height="135" viewBox="0 0 134 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M117.345 58.956C124.719 63.1819 124.719 73.8181 117.345 78.044L49.9691 116.653C42.6358 120.855 33.5 115.561 33.5 107.109L33.5 29.8908C33.5 21.4389 42.6359 16.1445 49.9691 20.3468L117.345 58.956Z"
                          fill="#44D300"/>
                    <path d="M112.5 53.4737C119.833 57.7076 119.833 68.2924 112.5 72.5263L51 108.033C43.6667 112.267 34.5 106.975 34.5 98.507L34.5 27.493C34.5 19.0252 43.6667 13.7328 51 17.9667L112.5 53.4737Z"
                          fill="#B8FF31"/>
                </svg>
            </div>
        </div>    
    `
}