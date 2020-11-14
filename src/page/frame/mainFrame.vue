<template>
    <div class="frame">
        <gnb-frame></gnb-frame>
        <router-view class="main-router"/>
    </div>
</template>

<script>
import gnbFrame from "@page/frame/gnbFrame";
export default {
    name: 'frame',
    components: {gnbFrame}
}
</script>

<style scoped lang="scss">
$_router-view__padding: 20px;
.main-router{
    padding: $_router-view__padding;
    height: calc(100vh - (#{$frame-head__height} + #{$_router-view__padding}*2));
    > div{background-color: $color__white;}
}
</style>