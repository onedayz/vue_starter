<template>
    <div class="toy-button no-select"><slot/></div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'toyButton',
})
</script>

<style scoped lang="scss">
.toy-button{
    display: inline-flex;
    cursor: pointer;
    font-size: $font__size-default;
    height: $toy-button__height;
    line-height: calc(#{$toy-button__height} + 2px);
    min-width: $toy-button__min-width;
    background-color: $toy-button__background-color;
    color: #333;
    border: $toy-button__border-width solid $color__gray-300;
    border-radius: $toy-button__border-radius;
    padding: $component__default-padding;
    justify-content: center;
    &:hover{background-color: $color__gray-50;}
    &:active{background-color: $color__gray-200;}
}
.toy-button + .toy-button {margin-left: 4px;}
</style>