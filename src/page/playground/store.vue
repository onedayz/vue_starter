<template>
    <div class="level-5-page">
        <div class="level-center">
            <div class="level-center-row">
                <div class="row-title">스토어</div>
                <div>
                    스토어(Vuex)는, 전역 저장소의 개념으로 사용되기 때문에,
                    본 페이지에서 스토어의 값을 수정하면 동일한 값을 활용하는 다른 Vue 코드에서도 값이 변해야 합니다.
                    이를 예시로 보여드리기 위해 이 페이지에서는 아래와 같은 4개의 버튼을 정의하였으며,
                    각 버튼을 누르면 Store의 state에 정의된 <b>language</b> 변수의 값이 각각 변하게 됩니다.

                    그리고 이 값은 다국어 처리를 위해 서비스 전역에서 활용될 사용자의 언어라는 컨셉이며
                    그 값을 가시적으로 보기 위해 GNB의 우측 상단에 해당 값을 표기하고 있습니다.
                </div>
                <div class="select-language">
                    <toy-button :primary="lang === 'ko'" solid @click="changeLanguage('ko')">한국어(KO)</toy-button>
                    <toy-button :primary="lang === 'en'" solid @click="changeLanguage('en')">영어(EN)</toy-button>
                    <toy-button :primary="lang === 'es'" solid @click="changeLanguage('es')">스페인어(ES)</toy-button>
                    <toy-button :primary="lang === 'it'" solid @click="changeLanguage('it')">이태리어(IT)</toy-button>
                </div>
                <div class="row-explain">
                    현재 language의 값을 수정하는 파일은 store.vue 이지만,
                    Store의 state로부터 값을 호출해서 활용하는 frameHead.vue 또한 같이 변하는 것을 알 수 있습니다.
                    이를 통해 우리는 사용자 정보나 메뉴정보와 같은 데이터를 Store에서 보관하고 활용할 수 있습니다.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lang : this.$store.getters.getLanguage
        };
    },
    computed: {
    },
    methods: {
        changeLanguage(language){
            this.lang = language;
            this.$store.dispatch('changeLanguage',  language);
        }
    }
};
</script>
<style scoped lang="scss">
.level-5-page {
    display: flex;
    height: 80%;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    .level-center {
        width: 750px;
        height: 40%;
        min-height: 400px;
        border: 1px solid $color__gray-400;
        border-radius: 10px;
        padding: 10px 20px;
        position: relative;
        word-break: keep-all;

        .level-center-row {
            margin-top: 8px;

            .flex-area {
                display: flex;
            }

            &.edit-area {
                margin-top: 32px;
            }
        }
    }

    .row-title {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid $color__gray-400;
        padding-bottom: 6px;
        margin-bottom: 12px;
    }
    .select-language{
        display: inline-flex; align-items: center; margin-top: 16px;
        p{margin-bottom: 0;}
        .ur-button + .ur-button, .ur-button + .ur-text-field{margin-left: 4px;}
        .ur-text-field{width: 60px;}
    }

    .row-explain {
        margin-top: 4px;
        color: $color__gray-600;
        font-size: 14px;
        position: absolute;
        bottom: 10px; left: 8px;
    }
}
</style>