<template>
    <div class="level-3-page">
        <div class="level-center">
            <div class="level-center-row">
                <div class="row-title">1. 라이프 사이클</div>
                <div> created 라이프 사이클에 채워진 값 : <b>{{createText}}</b></div>
                <div> mounted 라이프 사이클에 채워진 값 : <b>{{mountText}}</b></div>
                <div> 현재 값 : <b>{{text1}}</b></div>
            </div>
            <div class="level-center-row">
                <div class="row-title">2. Watch</div>
                <div class="flex-area">
                    <div class="before">{{beforeText}}</div>
                    &nbsp;→&nbsp;
                    <div class="after">{{afterText}}</div>
                </div>
            </div>
            <div class="level-center-row edit-area">
                <div class="row-title">Text 수정해보기</div>
                <div class="flex-area">
                    <input v-model="text1"/>
                    <toy-button solid primary @click="addAlphabet">Next Alphabet</toy-button>
                </div>
            </div>

            <div class="row-explain">
                <span>text1 변수의 기본값은 data 영역에서 정의한 'A'</span> <br>
                <span>created/mounted 라이프사이클에 text1의 값을 추가하여 다른 변수에 할당</span><br>
                <span>watch 기능으로 text1 변수의 변화를 체크가능</span><br>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        this.createText = this.text1
        this.addAlphabet();
    },
    mounted(){
        this.mountText = this.text1
        this.addAlphabet();
    },
    data() {
        return {
            text1: 'A',
            createText: '',
            mountText: '',
            beforeText: '',
            afterText: '',
            sampleStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            idx: 1
        };
    },
    watch: {
        text1(afterValue, beforeValue){
            this.beforeText = beforeValue;
            this.afterText = afterValue;
            console.log(beforeValue + ' -> ' + afterValue)
        }
    },
    methods: {
        addAlphabet(){
            if(this.idx > 25){
                this.idx = 0;
            }
            this.text1 += this.sampleStr[this.idx++];
        }
    }
};
</script>
<style scoped lang="scss">
.level-3-page {
    display: flex;
    height: 80%;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    .level-center{
        width: 40%;min-width: 450px;
        height: 40%;min-height:400px;
        border: 1px solid $color__gray-400;
        border-radius: 10px;padding: 10px 20px; position:relative;
        .level-center-row{margin-top: 8px; .flex-area{display: flex;} &.edit-area{margin-top:32px;}}
    }
    .row-title{
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid $color__gray-400;
        padding-bottom: 6px;
        margin-bottom: 12px;
    }
    .row-explain {
        position: absolute;
        bottom: 10px; left: 20px;
        color: $color__gray-600;
    }
}
</style>