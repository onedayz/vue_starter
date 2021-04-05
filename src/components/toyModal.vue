<template>
    <div class="toy-modal" v-show="state.opener">
        <div class="toy-modal__block"></div>
        <div class="toy-modal__popup" :style="modalStyle">
            <div class="toy-modal__popup-head">
                <span class="title-label">{{title}}</span>
                <toy-icon class="close-icon" icon="times" @click="close"></toy-icon>
            </div>
            <div class="toy-modal__popup-content">
                <slot/>
            </div>
            <div class="toy-modal__popup-foot" v-if="$slots['action']">
                <slot name="action"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, computed, reactive} from 'vue';

export default defineComponent({
    name: 'toyModal',
    props: {
        title: {
            type: String,
        },
        width: {type: [Number, String], default: ''},
        height: {type: [Number, String], default: ''},
    },
    setup(props) {
        const state = reactive({
            opener: false
        });
        const regNum = (value) => value.toString().replace(/[^0-9]/g,'');
        const modalStyle = computed(() => {
            let style = {};
            if(props.width){ style['width'] = regNum(props.width) + 'px';}
            if(props.height){ style['height'] =  regNum(props.height) + 'px';}
            return style;
        });
        const open = () => {state.opener = true;}
        const close = () => {state.opener = false;}


        return { state, modalStyle, open, close };
    }
})
</script>

<style lang="scss">
$modal__padding: 12px;
.toy-modal{
    position: fixed; left: 0; top: 0; width: 100%; height: 100vh;
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
    .toy-modal__block{
        position:absolute; left: 0; top: 0; z-index: 1001;
        width: 100%; height: 100%; background-color: rgba(0,0,0,0.3);
    }
    .toy-modal__popup{
        z-index: 1002; background-color: $color__white;
        position: relative; min-width: 200px; min-height: 100px;
        .toy-modal__popup-head{
            height: 24px; display: flex; align-items: center;padding: $modal__padding;
            .title-label{font-size: 20px; font-weight: bold;}
            .close-icon{position: absolute; right: $modal__padding; cursor: pointer;}
        }
        .toy-modal__popup-content{
            margin-bottom: 48px; padding: 0 $modal__padding; font-size: 14px;
        }
        .toy-modal__popup-foot{
            position: absolute; right: $modal__padding; bottom: $modal__padding;
        }
    }
}
</style>