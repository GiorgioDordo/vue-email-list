const {createApp} = Vue 

createApp ({
    data() {
        return {
            emails: '',
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        }    
    },
    methods: {
        getEmails() {
            axios.get(this.apiUrl)
            .then(function(response) {
            console.log(response);
            });
        }
    }
}).mount('#app')