<template>
    <div class="level-4-page">
        <div class="level-column">
            <div class="column-title">1. Custom Component</div>
            <div class="column-content custom-component">
                <text-label text="abc"/>
                <text-label :text="customText1"/>
                <text-label :text="customText2" color="#00897b" bold/>
                <text-label :text="customText3" size="32"/>
            </div>
            <br>
            <hr>
            <div class="column-content">
                <div class="modal-button__box">
                    <modal-button/>
                    <span>모달 버튼 기본형</span>
                </div>
                <div class="modal-button__box">
                    <modal-button color="primary" :btn-text="modalButtonLabel"/>
                    <span>모달 버튼 색상 및 버튼 라벨을 props로 변경</span>
                </div>
                <div class="modal-button__box">
                    <modal-button color="red" :title="modalButtonTitle1" :content="modalButtonContent1" btn-text="삭제"/>
                    <span>버튼 라벨 변경 및 모달 타이틀과 컨텐츠추가</span>
                </div>
            </div>
            <div class="row-explain">
                <span>text-label과 modal-button 으로 제작된 커스텀 컴포넌트</span>
                <br>
                <span>(각각 원소스는 TextLabel.vue, ModalButton.vue 이다)</span>
            </div>
        </div>

    </div>
</template>

<script>
import TextLabel from './TextLabel';
import ModalButton from './ModalButton';

export default {
    components: {TextLabel, ModalButton},
    data() {
        return {
            customText1: 'This is Custom Component',
            customText2: 'Color RGB #00897b and Bold',
            customText3: 'Font Size 32px',

            modalButtonLabel: '열려라 참깨',
            modalButtonTitle1: '주의',
            modalButtonContent1: '해당 게시글을 정말로 삭제하시겠습니까?',
        };
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.level-4-page{
    display: flex;
    height: 80%;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    .level-column {
        height: 60%;
        width: 30%;
        display: flex;
        min-width: 230px;
        border: 1px solid $color__gray-400;
        border-radius: 10px;padding: 10px 20px; position:relative;
        flex-direction: column;
        &+.level-column{width: 50%; min-width: 735px;}
    }

    .column-title {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid $color__gray-400;
        padding-bottom: 10px;
        margin-bottom: 16px;
    }
    hr{width:100%;}
    .column-content{
        p{margin: 2px 0 8px 0;}
        &+.column-content{margin-top: 16px;}
        .column-sub-title{font-weight: bold}

        .modal-button__box{
            margin-top: 12px;
        }
    }
    .custom-component{display: flex; flex-direction: column;}
    .row-explain {
        position: absolute;
        bottom: 10px; left: 8px;
        color: $color__gray-600;
        font-size: 14px;
    }
}
</style>