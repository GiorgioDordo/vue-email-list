const {createApp} = Vue 

createApp ({
    data() {
        return {
            emails: '',
        }
    }
})

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(function(response) {
    console.log(response);
    }
);