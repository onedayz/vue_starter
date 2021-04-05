<template>
    <div class="text-label" :style="{'color':color, 'font-size': labelSize, 'font-weight' : bold? 'bold' : '400'}">
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'TextLabel',
    props: {
        text: {default:'',type:[String, Number]},
        color: {default:'#333',type:[String]},
        size: {default:14,type:[String, Number]},
        bold: {default: false, type: Boolean}
    },
    computed:{
        labelSize(){
            return this.size.toString().replace(/[^0-9]/g,'') + 'px';
        }
    }
};
</script>

<style scoped lang="scss">
.text-label{
    display: inline-flex;
    min-width:180px;
    &+.text-label{margin-top: 4px;}
}
</style>