Vue.component('message', {
    data() {
        return {
            isVisible: true
        };
    },
    props: ['title', 'body'],
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title}}
                <button type="button" @click="hideMessage">x</button>
            </div>
            <div class="message-body">
                {{ body}}
            </div>
        </article>
    `,

    methods: {
        hideMessage() {
            this.isVisible = false;
        }
    }

});
new Vue({
    el: '#root'
});