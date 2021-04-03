<template>
    <div class="modal-button">
        <toy-button :color="color" solid @click="openModal">{{btnText}}</toy-button>
        <toy-modal ref="modal" :title="title" small>
            {{content}}
            <template #action>
                <toy-button @click="closeModal" primary solid>확인</toy-button>
                <toy-button @click="closeModal">취소</toy-button>
            </template>
        </toy-modal>
    </div>
</template>

<script>
export default {
    name: 'ModalButton',
    props: {
        btnText:    {default: 'OPEN',       type: String},
        color:      {default: 'default',    type: String},
        title:      {default: 'Title',           type: String},
        content:    {default: 'Content',           type: String},
    },
    computed: {
        modal() {
            return this.$refs.modal;
        }
    },
    methods: {
        openModal()  { this.modal.open(); },
        closeModal() { this.modal.close(); },
    }
};
</script>

<style scoped lang="scss">
.modal-button{
    display: inline-flex;
    &+.modal-button{margin-left: 8px;}
}
</style>