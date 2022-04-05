export default {
    name: 'Navbar',
    props: ['current', 'count'],
    template: `
        <div class="nav">
            <a v-for="index in count" href="#" class="link" :class="{'link__active': current + 1 >= index}"></a>
        </div>
    `
}