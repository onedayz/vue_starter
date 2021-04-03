<template>
    <div class="menu-unit" v-for="(menu) in menus" :key="menu.id">
        <div class="menu-name" :class="['menu-name__depth-'+depth, $route.path === menu.url? 'current-menu': '']"
             @click="menu.hasChild? toggleMenu(menu.idx) : moveTo(menu.url)">
            {{menu.name}}
            <toy-icon v-if="menu.hasChild" class="folding-icon" :class="'menu-folding__' + menu.idx"
                      icon="angle-up" size="12"></toy-icon>
        </div>
        <div v-if="menu.hasChild" class="menu-child" :class="'menu-child__' + menu.idx">
            <menu-unit :menus="menu.children" :depth="menu.depth"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menuUnit',
    props: {
        menus: {type: [Array, Object], default:() => {}},
        depth: {type: Number, default: 1},
    },
    computed:{
        nameClazz(){
            return ['menu-name__depth-'+this.depth];
        },
    },
    data(){
        return{
            foldable: true
        }
    },
    methods: {
        toggleMenu(mIdx){
            let menuFoldIcon = document.getElementsByClassName('menu-folding__' + mIdx)[0];
            menuFoldIcon.style['transform'] = menuFoldIcon.style['transform'] !== 'rotate(180deg)'? 'rotate(180deg)' : '';

            let childMenuGroup = document.getElementsByClassName('menu-child__' + mIdx)[0];
            childMenuGroup.style['opacity'] = childMenuGroup.style['opacity'] !== '0'? '0' : '1';
            childMenuGroup.style['max-height'] = childMenuGroup.style['max-height'] !== '0px'? '0px' : '1000px';
            childMenuGroup.style['pointer-events'] = childMenuGroup.style['pointer-events'] !== 'none'? 'none' : '';
        },
        moveTo(url){
            this.$router.push(url);
        }
    }
}
</script>

<style scoped lang="scss">
$_unit-padding: 14px;
$_unit-height: 50px;
.menu-unit{
    height: auto;
    cursor: pointer;
}
.menu-name{
    width:auto;position: relative;min-height: $_unit-height;
    padding: 0 $_unit-padding; line-height: $_unit-height;
    &:hover{background-color: mix(white, $color__vue, 20%); color: $font__color-default;}
    &:active{background-color: $color__vue; color: $font__color-default;}
}
.folding-icon{
    position: absolute;top: 14px; right: $_unit-padding*2;
    cursor: pointer; transition: transform $menu__fold-time;
}
.menu-child{
    max-height: 1000px;
    transition: opacity $frame-side__fold-time, max-height $menu__fold-time;
}
.current-menu{
    background-color: mix(white, $color__vue, 30%); color: $font__color-default;
    &:hover{background-color: mix(white, $color__vue, 10%);}
    &:active{background-color: $color__vue;}
}
</style>