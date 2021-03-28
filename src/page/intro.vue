<template>
    <div class="intro-page">
        <h3>Intro</h3>
        <toy-button @click="call">Call Axios</toy-button>
    </div>
</template>

<script>
export default {
    name: 'intro',
    methods: {
        call(){

            this.axios.get('/uri')
            .then(res =>{

            }).catch(err => {

            })

            this.axios.post('/uri',{
                param1: 'value1',
                param2: 'value1'
            }).then(res =>{

            }).catch(err => {

            })

            this.axios.delete('/uri')
                .then(res =>{

                }).catch(err => {

            })

            this.axios.put('/uri', {
                param1: 'value1',
                param2: 'value1'
            }).then(res =>{

            }).catch(err => {

            })
        }




    },
    beforeRouteLeave(to, from, next){
        console.log(from.path + ' -> ' + to.path);
        next();
    }
}
</script>
