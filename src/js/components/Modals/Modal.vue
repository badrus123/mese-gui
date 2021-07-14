<template>
    <b-modal :id="name" :hide-footer="hideFooter" modal-class="custom-modal">
        <template v-if="title" #modal-title>
            {{title}}
        </template>

        <slot></slot>
    </b-modal>
</template>

<script>

export default {
    props: {
        name: {
            type: String,
            default: ()=> {
                return ''
            }
        },

        title: {
            type: String,
            default: ()=> {
                return ''
            }
        },

        hideFooter: {
            type: Boolean,
            default: ()=> {
                return false
            }
        },
    },
    data() {
        let self = this

        return {
            componentUUID: self.generateComponentUUID()
        }
    },
    methods: {

    },
    mounted(){
    }
}
</script>

<style lang="scss">

</style>
