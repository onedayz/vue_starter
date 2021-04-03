<template>
    <div class="level-2-page">

        <!--  v-for   -->
        <div class="level-column">
            <div class="column-title">1. v-for</div>
            <div class="box-list" v-for="(member, idx) in sampleArr" :key="idx">
                {{member.no}}. 이름: {{member.name}} ({{member.age}})
            </div>
            <div class="row-explain">
                <span>v-for로 배열형 데이터의 수만큼 &lt;div&gt;생성</span>
            </div>
        </div>

        <!--  v-if/else & v-show   -->
        <div class="level-column">
            <div class="column-title">2.  v-if/else & v-show</div>
            <div class="box-list" v-for="(member, idx) in sampleArr" :key="idx" v-show="member.no%2 === pivot">
                {{member.no}}. 이름: {{member.name}} ({{member.age}})
            </div>
            <div class="button-area">
                <toy-button @click="pivot = 1" solid primary full>홀</toy-button>
                <toy-button @click="pivot = 0" solid color="red" full>짝</toy-button>
            </div>
            <div class="odd-even-text">
                <div v-if="pivot === 1">홀</div>
                <div v-else>짝</div>
            </div>
            <div class="row-explain">
                <span>v-show 조건으로 홀/짝수 번째 데이터만 보여줌</span>
                <br>
                <span>(상단 리스트는 v-show, 하단의 대문자는 v-if/else)</span>
            </div>
        </div>

        <!--  :class   -->
        <div class="level-column">
            <div class="column-title">3.  :class</div>
            <div class="box-list" :class="{'dark-box-list' : member.age < 30}"
                 v-for="(member, idx) in sampleArr" :key="idx">
                {{member.no}}. 이름: {{member.name}} ({{member.age}})
            </div>
            <div class="row-explain">
                <span>데이터가 가진 조건을 분기로 &lt;div&gt;에 class 부여</span>
                <br>
                <span>조건: age값이 30미만은 다크모드로</span>
            </div>
        </div>

        <!--  :style   -->
        <div class="level-column">
            <div class="column-title">4.  :style</div>
            <div class="box-list" :style="{'background-color' : member.color, 'color': (20 < member.age && member.age < 30)? 'white' : 'black'}"
                 v-for="(member, idx) in sampleArr" :key="idx">
                {{member.no}}. 이름: {{member.name}} ({{member.age}})
            </div>
            <div class="row-explain">
                <span>데이터가 가진 조건을 분기로 &lt;div&gt;에 style 부여</span>
                <br>
                <span>조건:<br>1. background-color: 데이터의 color 값<br>2. color: age 값이 20~30인 경우 하얀색</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sampleArr:[
                {no : 1, name: 'Kainy',     age: 13, color: '#f4511e'},
                {no : 2, name: 'Edan',      age: 54, color: '#03a9f4'},
                {no : 3, name: 'Amic',      age: 28, color: '#ce93d8'},
                {no : 4, name: 'Seraphin',  age: 17, color: '#ffeb3b'},
                {no : 5, name: 'Dobby',     age: 46, color: '#76ff03'},
                {no : 6, name: 'Roser',     age: 33, color: '#607d8b'},
                {no : 7, name: 'Faker',     age: 25, color: '#b71c1c'},
                {no : 8, name: 'Khan',      age: 26, color: '#00897b'},
                {no : 9, name: 'Teddy',     age: 23, color: '#ffb74d'},
            ],
            pivot: 0
        };
    },
};
</script>
<style scoped lang="scss">
.level-2-page {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;

    .level-column {
        height: 86%;
        width: 20%;
        display: flex;
        min-width: 230px;
        border: 1px solid $color__gray-400;
        border-radius: 10px;padding: 10px 20px; position:relative;
        flex-direction: column;
    }

    .level-column + .level-column {
        margin-left: 20px;
    }

    .column-title {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid $color__gray-400;
        padding-bottom: 10px;
        margin-bottom: 2px;
    }
    .box-list{
        height: 32px;display: flex;align-items: center;padding: 0 4px;
        background-color: $color__gray-300;margin-top: 8px; color:$color__black;
    }

    .button-area{
        display: flex; position: absolute; bottom: 212px;
        width: calc(100% - 20px); left: 10px;
    }

    .odd-even-text{
        position: absolute;bottom: 84px;left: 0;
        width: 100%;height: 120px;
        display: flex;justify-content: center;align-items: center;
        font-size: 80px;font-weight: bold;
    }

    .row-explain {
        position: absolute;
        bottom: 10px; left: 8px;
        color: $color__gray-600;
        font-size: 14px;
    }
    .dark-box-list{
        background-color: $color__gray-900;
        color: $color__gray-200;
    }
}
</style>