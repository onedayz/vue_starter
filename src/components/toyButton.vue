<template>
    <div class="toy-button no-select" :class="buttonClazz" :style="buttonStyle"><slot/></div>
</template>

<script>
import {computed, defineComponent, reactive} from 'vue';
export default defineComponent({
    name: 'toyButton',
    props: {
        size:    {  type: [Number, String], default : 0                     },
        solid:   {  type: Boolean,          default : false                 },
        primary: {  type: Boolean,          default : false, required: false},
        option:  {  type: Object,           default : () => {}              },
    },
    setup (props) {
        const buttonClazz = computed(() => {
            let clazz = [];
            if(props.solid){clazz.push('toy-button__solid')}
            if(props.primary){clazz.push('toy-button__color-primary')}
            return clazz
        });
        const buttonStyle = computed(() => {
            let style = {};
            if(props.size){ style['width'] = props.size + 'px';}
            return style;
        });
        return {buttonClazz, buttonStyle};
    }
})
</script>