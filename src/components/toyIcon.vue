<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="$props.class"
         :viewBox="`0 0 ${width} ${height}`" :style="iconStyle">
        <path fill="currentColor" :d="svgPath" />
    </svg>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { defineComponent, computed } from 'vue';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
library.add(fas)

export default defineComponent({
    name: 'toyIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "fas",
            required: false
        },
        class: String,
        size: {type: [Number, String], default: ''},
        small: {type: Boolean, default: false},
        medium: {type: Boolean, default: false},
        large: {type: Boolean, default: false},
    },
    setup(props) {
        const definition = computed(() =>
            findIconDefinition({prefix: props.type, iconName: props.icon})
        );

        console.log('definition',definition);
        const width = computed(() => definition.value.icon[0]);
        const height = computed(() => definition.value.icon[1]);
        const svgPath = computed(() => definition.value.icon[4]);
        const iconStyle = computed(() =>{
            let style = {};
            if(props.small){style.width = '12px';}
            else if(props.large){style.width = '18px';}
            else if(props.size){style.width = props.size + 'px';}
            else{style.width = '14px';}
            return style;
        });
        return { width, height, svgPath, iconStyle };
    }
})
</script>

<style scoped>

</style>