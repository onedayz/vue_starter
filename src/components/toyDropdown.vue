<template>
    <div class="toy-dropdown no-select" @click="toggleList">
        {{showValue}}
        <toy-icon :icon="state.isExpand? 'angle-up': 'angle-down'" :size="10"></toy-icon>
        <div class="toy-dropdown__list" v-show="state.isExpand">
            <div class="toy-dropdown__list-item" v-for="(item, idx) in items" :key="item.value+'_'+idx" @click="selectItem(idx)">
                <span>{{item.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue';
export default defineComponent({
    name: 'toyDropdown',
    props:{
        value: {
            type: [String, Array, Object],
            default: () => {
                return 'boolean';
            }
        },
        items: {
            type:Array,
            default: () => [
                {idx: 0, text: 'Boolean', value: 'boolean'},
                {idx: 1, text: 'Number', value: 'number'},
                {idx: 2, text: 'String', value: 'string'},
                {idx: 3, text: 'Array', value: 'array'},
                {idx: 4, text: 'Object', value: 'object'},
            ]
        }
    },
    setup (props, { emit }) {
        const state = reactive({
            isExpand: false
        });
        const showValue = computed(() => {
            for(let item of props.items){
                if(item.value === props.value){
                    return item.text;
                }
            }
            return '';
        });
        const toggleList = () => {state.isExpand = !state.isExpand;}
        const selectItem = (idx) => {
            emit('update:value', props.items[idx].value);
        }

        return {state, showValue, toggleList, selectItem}
    }
})
</script>

<style scoped lang="scss">
.toy-dropdown{
    position: relative;
    display: inline-flex;
    cursor: pointer;
    font-size: $font__size-default;
    height: $toy-button__height;
    line-height: calc(#{$toy-button__height} + 2px);
    min-width: $toy-button__min-width;
    background-color: $toy-button__background-color;
    border: $toy-button__border-width solid $color__gray-300;
    padding: $component__default-padding;
    justify-content: space-between;
    &:hover{background-color: $color__gray-50;}
    &:active{background-color: $color__gray-200;}

    .toy-dropdown__list{
        position: absolute;
        top: $toy-button__height;
        border: $toy-button__border-width solid $color__gray-300;
        background-color: $color__white;
        left: -1px;
        span{padding: $component__default-padding;}
    }

    .toy-dropdown__list-item{
        min-width: calc(#{$toy-button__min-width} + 2*#{nth($component__default-padding,2)});
        &:hover{background-color: $third__color;}
        &:active{background-color: $second__color;}
    }
}
</style>