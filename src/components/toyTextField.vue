<template>
    <input class="toy-text-field" type="text" :value="value" @input="$emit('update:value', $event.target.value)"/>
</template>

<script>
export default {
    name: 'toyTextField',
    props: {value:{type: String, default: ''}}
}
</script>

<style scoped lang="scss">
.toy-text-field{
    display: inline-flex;
    font-size: $font__size-default;
    height: $toy-button__height;
    line-height: calc(#{$toy-button__height} + 2px);
    min-width: $toy-button__min-width;
    background-color: $toy-button__background-color;
    border: $toy-button__border-width solid $color__gray-300;
    border-radius: $toy-button__border-radius;
    padding: $component__default-padding;
    &:hover{background-color: $third__color;}
}
</style>