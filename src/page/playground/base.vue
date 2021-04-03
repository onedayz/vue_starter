<template>
    <div class="level-1-page">
        <div class="level-row">
            <div class="level-cell">
                <div class="cell-title">1. 콜론(:)과 at(@) 사용하기</div>
                <p>입력하는 값: <span>{{text1}}</span></p>
                <input :value="text1" @input="text1 = $event.target.value"/>
                <div class="cell-explain">
                    <span>input태그에 :value와 @input 으로 사용자의 입력과 값을 매핑</span>
                </div>
            </div>
            <div class="level-cell">
                <div class="cell-title">2. v-model로 콜론&at 대체하기</div>
                <p>입력하는 값: <span>{{text2}}</span></p>
                <input v-model="text2"/>
                <div class="cell-explain">
                    <span>input태그에 사용된 :value와 @input을 v-model로 대체</span>
                </div>
            </div>
        </div>
        <div class="level-row">
            <div class="level-cell">
                <div class="cell-title">3. Computed 활용하기</div>
                <p>변수가 실제 가진 값: <span>{{originMoney1}}</span></p>
                <p>셋째자리에 컴마(,)찍기 : <span>{{changeWon1}}</span></p>
                <input v-model="originMoney1"/>
                <div class="cell-explain">
                    <span>computed를 활용하여 입력된 값에 화폐단위를 붙이고 셋째자리에 컴마를 찍는 프로세스를 추가</span>
                </div>
            </div>
            <div class="level-cell">
                <div class="cell-title">4. 이벤트에 메소드 매핑하기</div>
                <p>변수가 실제 가진 값: <span>{{originMoney2}}</span></p>
                <p>셋째자리에 컴마(,)찍기 : <span>{{changeWon2}}</span></p>
                <input :value="originMoney2" @input="checkNumber"/>
                <span v-show="showValidateMsg" class="validate-msg">숫자만 입력가능합니다.</span>
                <button @click="originMoney2-=100">-100</button>
                <button @click="addMoney">+100</button>
                <div class="cell-explain">
                    <span>버튼 클릭이벤트 & 값 입력시 발생하는 @input 이벤트에 숫자인지 체크하는 메서드 추가</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text1: '',
            text2: '',
            originMoney1: 1000,
            originMoney2: 1000,
            showValidateMsg: false
        };
    },
    computed: {
        changeWon1(){
            return '₩ ' + this.originMoney1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        changeWon2(){
            return '₩ ' + this.originMoney2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    },
    methods: {
        checkNumber(event){
            this.showValidateMsg = /[^0-9]/g.test(event.target.value)
            this.originMoney2 = event.target.value = (this.showValidateMsg? this.originMoney2 : event.target.value*1);
        },
        addMoney(){
            this.originMoney2+=100
        }
    }
};
</script>
<style scoped lang="scss">
.level-1-page{
    display: flex; height: 100%; width: 100%; flex-direction: column;
    .level-row{height:30%; width: 100%; display: flex;justify-content: space-around; min-height: 230px; }
    .level-row + .level-row{ margin-top: 20px;}
    .level-cell{
        height:90%;width:40%; border: 1px solid $color__gray-400;
        border-radius: 10px;padding: 10px 20px; position:relative;
        min-width: 550px; margin: 12px;
    }
    .cell-title{font-size:16px;font-weight: bold; border-bottom: 1px solid $color__gray-400;padding-bottom: 10px;margin-bottom: 16px;}
    .validate-msg{position: absolute;left: 20px;margin-top: 26px;font-size: 12px;color: red;}
    .cell-explain{position: absolute; bottom: 10px; color: $color__gray-600; font-size: 14px;}
}
</style>