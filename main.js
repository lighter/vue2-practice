Vue.component('task-list', {
    template: `
     <div><task v-for="task in tasks">{{ task.task }}</task></div>
    `,

    data() {
        return {
            tasks: [
                { task: 'AAAAA', complete: true },
                { task: 'BBBBB', complete: true },
                { task: 'CCCCC', complete: true },
                { task: 'DDDDD', complete: true },
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});