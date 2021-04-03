<template>
    <div class="head-frame">
        <div class="head-title" @click="$router.push('/home')">Vue Starter</div>
        <div class="head-menu" v-for="(menu, idx) in headMenu" :key="idx" @click="$router.push(menu.url)">
            {{menu.name}}
        </div>
        <div class="user-language">
            Language : {{$store.getters.getLanguage}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'headFrame',
    data(){
        return{
            headMenu: [
                {name: 'Playground', url: '/playground'}
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.head-frame{
    height: $frame-head__height;
    line-height: $frame-head__height;
    background-color: $color__gray-50;
    color: $font__color-default;
    border-bottom: 1px solid $color__blue-gray-200;
    box-shadow: 0 1px 2px 2px $color__blue-gray-200;
    .head-title{
        display: inline-flex; width: 200px; padding-left:20px; cursor: pointer;
        color: $color__vue; font-size: 20px;font-weight: bold;
    }
    .head-menu{
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        width: 120px; height: 95%;
        user-select: none;
        &:hover{background-color: $color__gray-200;}
        &:active{background-color: $color__gray-300;}
    }
    .user-language{
        position: absolute;
        right: 20px;
        top: 0;
    }
}
</style>