<template>
    <div class="search-group" :class="{'focused' : focused}">
        <b-input-group>
            <b-input-group-prepend is-text>
                <font-awesome-icon icon="search"/>
            </b-input-group-prepend>

            <b-form-input @focus="onFocus()" @blur="onBlur()" type="text" :placeholder="placeholder"></b-form-input>
        </b-input-group>
    </div>
</template>

<script>

export default {
    props: {
        placeholder: {}
    },
    data() {
        let self = this

        return {
            focused: false,
            componentUUID: self.generateComponentUUID()
        }
    },
    methods: {
        onFocus(val) {
            this.focused = true
        },
        onBlur(val) {
            this.focused = false
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss">

</style>
