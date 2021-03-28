<template>
    <div class="empty-class">
       <name-card v-for="(name, idx) in member" :key="idx" :name="name"
                  :solid="idx%2 === 0" :primary="idx%4 === 0"
                  @search="searchUser"
       />
    </div>
</template>

<script>
import NameCard from '@page/playground/nameCard';
export default {
    components: {NameCard},
    data(){
        return {
            member: ['Ain', 'Closer', 'Faker', 'Khan']
        }
    },
    computed: {
    },
    methods: {
        searchUser(name){
            this.axios.get('/user/' + name)
            .then(res => {
                // 유저 정보를 가져 온 이후 프로세스
            })
        }
    }
}
</script>

<style scoped>
.empty-class{padding: 20px; display: flex; flex-direction: row;}
</style>




