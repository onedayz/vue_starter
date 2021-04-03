<template>
    <div class="app-outer">
        <head-frame></head-frame>
        <router-view/>
    </div>
</template>

<script>

import headFrame from '@page/frame/headFrame';

export default {
    name: 'App',
    components: {headFrame}
}
</script>

<style lang="scss">
body{
    color: $font__color-default;

    background-color: $color__gray-50;
    overflow-y: hidden;
    font-family: "Noto Sans KR", Arial, sans-serif;
}
</style>

<style lang="scss">
@import '~@/scss/globalClass.scss';
</style>