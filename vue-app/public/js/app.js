new Vue({
    el: '#root',
    data: {
        skills: []
    },
    mounted() {
        axios.get('/skills').then(response => {
            console.log(response);
            console.log(response.data);
            this.skills = response.data;
        });
    }
});