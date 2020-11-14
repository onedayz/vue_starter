<template>
    <div class="rampart">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style scoped lang="scss">
.frame-head{
    height: $frame-head__height;
    background-color: $primary__color;
    color: $color__white;
    display: flex;
    align-items: flex-end;
}
.middle{
    height: 64px;
    background-color: $color__red-300;
}
</style>
<style lang="scss">
body{
    color: $font__color-default;
    background-color: $color__gray-800;
}
</style>

<style lang="scss">
@import '~@/scss/globalClass.scss';
</style>