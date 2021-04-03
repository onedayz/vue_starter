<template>
    <div class="frame">
        <div class="app-content" :class="{'folding' : foldable}"><router-view/></div>
        <side-frame :foldable="foldable" @toggle="toggleSide"/>
    </div>
</template>

<script>
import sideFrame from '@page/frame/sideFrame';

export default {
    name: 'frame',
    components: {sideFrame},
    data(){return {foldable: false}},
    methods:{
        toggleSide(){
            this.foldable = !this.foldable;
        }
    }
}
</script>

<style scoped lang="scss">
$_router-view__padding: 20px;
.app-content{
    position: relative; overflow-y: auto; padding: 10px 20px;
    left: $frame-side__width; transition: width $frame-side__fold-time;
    height: 100vh; width: calc(100% - 270px);
}
</style>


<style lang="scss">
@font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: local("Noto Sans KR Regular"), local("NotoSansKR-Regular"), url('~@assets/font/NotoSansKR-Regular.otf');
}
@font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: local("Noto Sans KR Bold"), local("NotoSansKR-Bold"), url('~@assets/font/NotoSansKR-Bold.otf');
}
.app-content.folding{width: calc(100% - #{$frame-side__width-folding}*2 - 4px); left: $frame-side__width-folding;}
</style>