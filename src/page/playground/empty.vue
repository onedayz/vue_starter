<template>
    <div class="empty-class">
        <h3>{{money}} => {{currency}}</h3>
        <input v-model="money"/>
        <toy-button @click="deposit" solid primary>100원 입금</toy-button>
        <toy-button @click="withdraw" solid>100원 출금</toy-button>
    </div>
</template>

<script>
import commonUtil from '@/util/commonUtil'

export default {
    data(){
        return {
            money: 0
        }
    },
    computed: {
        currency() {
            return '\\' + commonUtil.getCurrency(this.money);
        }
    },
    created() {
        this.setBase();
    },
    methods: {
        deposit(){
            this.money += 100;
        },
        withdraw(){
            this.money -= 100;
            this.setBase();
        },
        setBase(){
            if(this.money <= 0) this.money = 0;
        }
    }
}
</script>

<style scoped>
.empty-class{padding: 20px;}
</style>




