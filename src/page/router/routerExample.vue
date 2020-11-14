<template>
    <div class="router-example-page">
        <div class="router-example__area">
            <div class="title"><h3>Router Example</h3></div>
            <div><h4>URL Param : {{$route.params.userId}}</h4></div>
            <div><h4>URL Query : {{$route.query.userName}}</h4></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'routerExample'

}
</script>

<style scoped lang="scss">
.router-example-page{
    display: flex;justify-content: center;
    align-items: center;flex-direction:column;
    height:100vh;
    .router-example__area{
        width: 350px;height: 250px;
        .title{color: $color__vue;height: 24px; line-height: 24px;}
    }
}
</style>