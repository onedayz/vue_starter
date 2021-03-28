<template>
    <div class="empty-class">
        <h4>잔고 : {{$store.getters.getValue}}</h4>
        <h4>등급 : {{$store.getters.getGrade}}</h4>
        <toy-button primary solid @click="deposit">deposit</toy-button>
        <toy-button solid @click="withdraw">withdraw</toy-button>
    </div>
</template>

<script>
export default {
    methods: {
        deposit(){
            this.$store.dispatch('deposit', 10000);
        },
        withdraw(){
            this.$store.dispatch('withdraw', 10000);
        },
    }
}
</script>

<style scoped lang="scss">
$_padding : 20px;
h3{color: red;}
.empty-class{
    padding: 20px;
    h3{color: green;}
}

</style>

<style>
h3{color:blue;}
</style>





