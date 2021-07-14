<template>
    <div class="token-converter-form-group">
        <div class="token-converter-form-group__title">
            {{title}}
        </div>
        <div class="token-converter-form-group__container mt-2">
            <div class="token-converter-form-group__select-token" :class="{'selected' : selectedTokenObject}">
                <el-select size="small" @input="handleInput" v-model="selectedToken">
                    <img v-if="selectedTokenObject" slot="prefix" :src="selectedTokenObject.image" class="token-converter-form-group__selected-token_thumbnail">
                    <el-option v-for="(d, index) in data" :key="index" :label="d.value" :value="d.value">
                        <img :src="d.image" class="token-converter-form-group__select-token_thumbnail">
                        {{d.label}}
                    </el-option>
                </el-select>
            </div>
            <div class="token-converter-form-group__input-token-value">
                <el-input size="small" @input="handleInput" v-model="tokenValue" class="input" :class="{'mr-1' : maxButton}"></el-input>
                <b-button size="sm" v-if="maxButton" variant="outline-white">MAX</b-button>
            </div>
        </div>
        <div v-if="showTokenInfo && selectedToken" class="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: ()=> {
                return [
                    {
                        label: 'Bitcoin',
                        value: 'BTC',
                        image: '/images/btc.png',
                    },
                    {
                        label: 'Peercoin',
                        value: 'PPC',
                        image: '/images/Peercoin.png',
                    }
                ]
            }
        },

        value: {},

        title: {
            type: String,
            default: ()=> {
                return 'from'
            }
        },

        maxButton: {
            type: Boolean,
            default: ()=> {
                return false
            }
        },

        showTokenInfo: {
            type: Boolean,
            default: ()=> {
                return false
            }
        }
    },
    watch: {
        value(val) {
            this.selectedToken = val ? val.token : ''
            this.tokenValue = val ? val.value : ''
        }
    },
    computed: {
        selectedTokenObject() {
            if(this.data) {
                let index = this.data.findIndex(p => p.value === this.selectedToken)

                if(index > -1)
                    return this.data[index]
            }

            return null
        }
    },
    data() {
        let self = this

        return {
            selectedToken: self.value ? self.value.token : '',
            tokenValue: self.value ? self.value.value : '',
            componentUUID: self.generateComponentUUID()
        }
    },
    methods: {
        handleInput () {
            let returnVal = {
                token: this.selectedToken,
                value: this.tokenValue,
            }

            // if(!this.selectedToken && !this.tokenValue)
            //     returnVal = null

            this.$emit('input', returnVal)
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss">

.token-converter-form-group__select-token_thumbnail {
    margin-right: 5px;
    margin-left: -5px;
    width: 25px !important;
    height: 25px !important;
    object-fit: contain;
}
.token-converter-form-group__selected-token_thumbnail {
    margin-left: -5px;
    margin-top: 5px;
    width: 25px !important;
    height: 25px !important;
    object-fit: contain;
}
.token-converter-form-group {
    background: #484B5C;
    border-radius: 10px;
    padding:12px;

    .token-converter-form-group__title {
        font-weight: 900;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    .token-converter-form-group__container {
        display: flex;

        .token-converter-form-group__select-token {
            width: 89px;

            &.selected {
                .el-select {
                    .el-input {
                        .el-input__inner {
                            margin-left: 30px;
                        }
                    }
                }
            }

            .el-select {
                .el-input {
                    .el-input__inner {
                        padding:0;
                        background: transparent;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        color: #FFFFFF;
                        border: none;
                    }

                    &.el-input--small {
                        .el-input__inner {
                            font-size: 12px;
                        }
                    }

                    .el-select__caret {
                        color: #FFF;
                        font-size: 18px;
                    }
                }
            }


        }

        .token-converter-form-group__input-token-value {
            width: 160px;
            display: flex;
            justify-content: flex-end;

            .input {
                width: 100px;

                .el-input__inner {
                    padding:10px;
                    letter-spacing: 1px;
                    color: #FFFFFF;
                    background: #676B82;
                    border-radius: 5px;
                    border: none;
                }

                &.el-input--small {
                    .el-input__inner {
                        height: 32px;
                        font-size: 15px;
                        line-height: 18px;
                        letter-spacing: 1px;
                        color: #C7C7C7;
                    }
                }
            }
            .btn {
                height: 32px;
                padding-left: 15px;
                padding-right: 15px;
                font-weight: 900;
                font-size: 10px;
                border: 2px solid #FFFFFF !important;
                border-radius: 6px !important;
            }
        }
    }
}
</style>
