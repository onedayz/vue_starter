<template>
    <div class="menu-frame">
        <menu-unit :menus="menuData[0].children"/>
    </div>
</template>

<script>
import menuUnit from './menuUnit'
import menuData from '@/menuData'

export default {
    name: 'menuFrame',
    components: {menuUnit},
    props: {menus: {type: Array, default: () => []}},
    data() {
        return {
            menuData: menuData
        }
    },
    methods: {
        moveTo(url) {
            this.$router.push(url);
        },

    }
}
</script>

<style scoped lang="scss">
.menu-frame {
    position: absolute;
    top: $frame-side__title-height;
    padding: 0 0 $frame-side__padding 0;
    min-height: 32px;
    width: 100%;
    border-top: $border__default;
    opacity: 1;
    height: calc(100vh - #{$frame-side__title-height} - #{$frame-side__padding});
    overflow-y: auto;
}
</style>
<style lang="scss">
.folding .menu-frame {
    opacity: 0;
}
</style>