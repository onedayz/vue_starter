<template>
    <div class="home">
        <img src="@assets/logo.png">
        <h3>Vue.js Starter by <b>Grey</b></h3>
    </div>
</template>

<script>
import {useRouter} from 'vue-router';

export default {
    name: 'home',
    setup(){
        const router = useRouter();
        const moveTo = (url) => {router.push(url)};
        const moveToRouterSample = (url) => {
            router.push({
                path: url,
                query: {userName: 'Grey'}
            })
        };
        return {moveTo, moveToRouterSample}
    }
}
</script>

<style scoped lang="scss">
.home{
    display: flex; flex-direction: column;
    justify-content: center;align-items: center;height: 100vh;
    h3{color:$color__vue;}
    b{color:$color__gray-500;}

    .example-link__area{
        min-width: 250px; min-height: 200px;
        padding: 10px;
        display: flex; flex-direction: column;
        justify-content: flex-start;
        .title{
            color: $color__vue;height:24px;
            line-height: 24px;
        }
    }
}
</style>