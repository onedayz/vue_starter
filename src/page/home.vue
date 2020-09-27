<template>
    <div class="home">
        <img src="@assets/logo.png">
        <h3>Vue.js Starter by <b>Grey</b></h3>
    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>

<style scoped lang="scss">
.home{
    display: flex; flex-direction: column;
    justify-content: center;align-items: center;height: 100vh;
    h3{color:$color__vue;}
    b{color:$color__gray-600;}
}
</style>