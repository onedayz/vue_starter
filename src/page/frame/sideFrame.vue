<template>
    <div class="side-frame" :class="{'folding' : foldable}">
        <div class="title" @click="$router.push('/home')">
            <h2></h2>
        </div>
        <toy-icon class="folding-icon" icon="angle-up" size="18" @click="toggleSide"></toy-icon>
        <span class="presented-label">presented by Grey</span>
        <menu-frame/>
    </div>
</template>

<script>
import menuFrame from './menu/menuFrame';

export default {
    components:{menuFrame},
    props: {
        foldable: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
        }
    },
    methods: {
        toggleSide(){
            this.$emit('toggle');
        },
        moveTo(url){
            this.$router.push(url);
        }
    }
}
</script>

<style scoped lang="scss">
.side-frame{
    position: absolute;
    left: 0;top: calc(#{$frame-head__height} + 5px);
    width: $frame-side__width; height: calc( 100vh - #{$frame-head__height});
    background-color: $color__gray-50;
    transition: width $frame-side__fold-time, color $frame-side__fold-time;
    border-right: 1px solid $color__blue-gray-200;
    box-shadow: 1px 0 2px 2px $color__blue-gray-200;
    .title{
        height: $frame-side__title-height;
        display: flex; align-items: center;padding: 0 12px;
        transition: transform $frame-side__fold-time;
    }
    .presented-label{
        position: absolute; bottom: 10px; right: 8px;
        font-weight: bold; font-size: 12px; color: $color__blue-gray-200;
        transition: top $frame-side__fold-time;
    }
    .folding-icon{
        position: absolute; right: 10px; top: 18px; cursor: pointer;
        transform: rotate(270deg); transition: transform $frame-side__fold-time;
    }
}


.side-frame.folding {
    width: $frame-side__width-folding;
    .title{
        position: absolute; top: 172px; left: -134px; font-size: 12px;
        transform: rotate(90deg); transition: width $frame-side__fold-time, transform $frame-side__fold-time;
        h2{padding-left: 14px; border-left: $border__default; }
    }
    .presented-label{transform: rotate(90deg); bottom: 64px; width: 112px; left: -38px; transition: all $frame-side__fold-time;}
    .folding-icon{transform: rotate(90deg); width: 16px !important;}
}
</style>