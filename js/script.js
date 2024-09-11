const {createApp} = Vue 

createApp ({
    data() {
        return {
            emails: '',
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }    
    },
    methods: {
        getEmails() {
            for(let i = 0; i < 10; i++) {
            axios.get(this.apiUrl)
            .then(function(response) {
            console.log(response.data.response);
            });
        }
        }
    },
    mounted() {
        this.getEmails();
    },
}).mount('#app');