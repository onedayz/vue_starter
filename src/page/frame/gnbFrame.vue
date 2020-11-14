<template>
    <div class="gnb-frame">
        <div class="sub-title">Grey PJT Sub Title</div>
        <div class="gnb-menu" v-for="(menu, idx) in gnbMenu" :key="idx" @click="moveTo(menu.url)">
            {{menu.name}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'gnbFrame',
    data(){
        return{
            gnbMenu: [
                {name: 'Intro', url: '/main/intro'},
                {name: 'Front-end', url: '/main/front'},
                {name: 'Back-end', url: '/main/back'},
            ]
        }
    },
    methods: {
        moveTo(url){
            this.$router.push(url);
        }
    }
}
</script>

<style scoped lang="scss">
.gnb-frame{
    height: $frame-head__height;
    line-height: $frame-head__height;
    background-color: $primary__color;
    color: $font__color-default;
    .sub-title{display: inline-flex; width: 200px; padding-left:20px;}
    .gnb-menu{
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        width: 120px;
        user-select: none;
        &:hover{background-color: $second__color;}
        &:active{background-color: $third__color;}
    }
}
</style>