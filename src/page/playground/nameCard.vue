<template>
    <div class="name-card">
        <h5>{{name}}</h5>
        <div class="button">
            <toy-button @click="showDetail" :solid="solid" :primary="primary">Get Info</toy-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {type:String, default: ''},
        primary: {type: Boolean, default: false},
        solid: {type: Boolean, default: false}
    },
    data(){
        return {}
    },
    methods: {
        showDetail(){
            this.$emit('search', this.name);
        }
    }
}
</script>

<style scoped lang="scss">
.name-card{
    position: relative;
    border: 1px solid $color__blue-gray-700;
    border-radius: 10px;
    background-color: $color__gray-600;
    color: $color__gray-200;
    width: 180px; height: 80px;
    padding: 8px 12px;
    &+.name-card{margin-left: 12px;}
    .button{position: absolute; bottom: 12px; right: 12px;}
}
</style>