<script>
export default {
    name: 'commonMixin',
    created(){
        this.setBase();
    },
    data(){
        return {
            money : 0
        }
    },
    methods:{
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

</style>