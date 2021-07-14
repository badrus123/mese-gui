<template>
    <div class="token-swap">
        <div class="please-connect-wallet" v-if="!$store.state.isAuth">
            <b-button variant="primary" size="sm" block @click="$bvModal.show('ModalConnectWallet');">Connect Wallet</b-button>
        </div>
        <div v-else>
            <template v-if="state === 'DEFAULT'">
                <div class="token-balance">
                    <div class="token-balance___title">
                        YOUR TOKEN BALANCE
                    </div>
                    <div class="card">
                        <div class="token-balance___content">
                            <div class="token-balance___content-each">
                                <template v-if="tokenFrom.token">
                                    <div class="token-balance___content-each-name">
                                        {{ tokenFrom.token }}
                                    </div>
                                    <div class="token-balance___content-each-value">
                                        10,000
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="pt-1">
                                        <div class="token-balance___content-each-value">
                                            -
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="token-balance___content-each">
                                <template v-if="tokenTo.token">
                                    <div class="token-balance___content-each-name">
                                        {{ tokenTo.token }}
                                    </div>
                                    <div class="token-balance___content-each-value">
                                        10,000
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="pt-1">
                                        <div class="token-balance___content-each-value">
                                            -
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <token-converter-form-group :show-token-info="showTokenInfo" v-model="tokenFrom" class="mt-3" title="From"/>
                <div class="mt-3 mb-3 text-center" v-if="showReverseButton">
                    <reverse-icon @click="tokenFrom && tokenTo ? swapToken() : null" :class="[!tokenFrom || !tokenTo ? 'disabled-object' : 'cursor-pointer']" :width="35" :height="35"/>
                </div>

                <token-converter-form-group v-model="tokenTo" class="mt-3" title="To"/>

                <b-button @click="state = 'REVIEW_ORDER'" variant="primary" class="mt-4" block>Review Order</b-button>
            </template>
            <template v-else-if="state === 'REVIEW_ORDER'">
                <token-review-order @cancelled="state = 'DEFAULT'"/>
            </template>
        </div>
        <div class="mt-2 text-center">
            <b-button block variant="link" class="btn-footer" v-if="$store.state.isAuth">
                <span class="mr-2">SETTINGS</span><setting-icon :width="15" :height="15" color="#FFF"/>
            </b-button>
            <b-button block variant="link" class="btn-footer" style="margin-top: -30px;">
                <span class="mr-2">NEED HELP</span><need-help-icon :width="15" :height="15" color="#FFF"/>
            </b-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: ()=> {
                return null
            }
        },

        type: {
            type: String,
            default: ()=> {
                return 'POOL'
            }
        },

        showTokenInfo: {
            type: Boolean,
            default: ()=> {
                return false
            }
        },

        showReverseButton: {
            type: Boolean,
            default: ()=> {
                return true
            }
        }
    },
    data() {
        let self = this

        return {
            state: 'DEFAULT',
            tokenFrom: '',
            tokenTo: '',
            componentUUID: self.generateComponentUUID()
        }
    },
    watch: {
        tokenFrom (val) {
            if(val && this.tokenTo) {
                if(val.token === this.tokenTo.token) {
                    val.token = ''
                }
            }
        },
        tokenTo (val) {
            if(val && this.tokenFrom) {
                if(val.token === this.tokenFrom.token) {
                    val.token = ''
                }
            }
        },
    },
    methods: {
        swapToken() {
            let tempTokenFrom = this.tokenFrom
            this.tokenFrom = this.tokenTo
            this.tokenTo = tempTokenFrom
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss">
.token-swap {
    .please-connect-wallet {
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;

        .btn {
            font-weight: 900;
            font-size: 11px;
            line-height: 30px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }

    .btn-footer {
        color: #FFF !important;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 1.5px;

        span {
            font-weight: 900;
            font-size: 8px;
            line-height: 40px;
            letter-spacing: 2px;
            text-decoration-line: underline;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }

    .token-balance {
        .token-balance___title {
            font-weight: 900;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        .card {
            margin-top: 10px;
            padding:10px 5px !important;
            .token-balance___content {
                display: flex;
                .token-balance___content-each {
                    text-align: center;
                    width: 50%;
                    border-right: 1px solid #FFF;

                    &:last-child {
                        border-right: none;
                    }
                    .token-balance___content-each-name {
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        letter-spacing: 0.01em;
                        text-transform: uppercase;
                        color: #FFFFFF;
                    }
                    .token-balance___content-each-value {
                        margin-top: 5px;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 21px;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
}
</style>
