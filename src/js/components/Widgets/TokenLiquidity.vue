<template>
    <div class="token-liquidity">
        <div class="please-connect-wallet" v-if="!$store.state.isAuth">
            <b-button variant="primary" size="sm" block @click="$bvModal.show('ModalConnectWallet');">Connect Wallet</b-button>
        </div>
        <div v-else>
            <template v-if="state === 'DEFAULT'">
                <div class="token-price-pool">
                    <div class="token-price-pool___title">
                        prices and pool share
                    </div>
                    <div class="card">
                        <div class="token-price-pool___content">
                            <div class="token-price-pool___content-each">
                                <div class="token-price-pool___content-each-value">
                                    41.3975
                                </div>
                                <div class="token-price-pool___content-each-name">
                                    PPC PER ETH
                                </div>
                            </div>
                            <div class="token-price-pool___content-each">
                                <div class="token-price-pool___content-each-value">
                                    0.0423
                                </div>
                                <div class="token-price-pool___content-each-name">
                                    ETH PER PPC
                                </div>
                            </div>
                            <div class="token-price-pool___content-each">
                                <div class="token-price-pool___content-each-value">
                                    9.45%
                                </div>
                                <div class="token-price-pool___content-each-name">
                                    SHARE OF POOL
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <token-converter-form-group v-model="tokenFrom" max-button class="mt-3" title="From"/>
                <div class="mt-3 mb-3 text-center">
                    <span class="unit-measurement-text">1 eth : 15 ppc</span>
                    <info-icon :width="20" :height="20"/>
                </div>
                <token-converter-form-group v-model="tokenTo" max-button class="mt-3" title="To"/>

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
    },
    mounted(){
    }
}
</script>

<style lang="scss">
.token-liquidity {
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

    .token-price-pool {
        margin-top: 37px;
        .token-price-pool___title {
            font-weight: 900;
            font-size: 14px;
            line-height: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        .card {
            margin-top: 10px;
            padding:5px !important;
            .token-price-pool___content {
                display: flex;
                align-items: center;
                .token-price-pool___content-each {
                    text-align: center;
                    width: 33%;
                    padding-top: 10px;
                    padding-bottom: 10px;

                    &:last-child {
                        border-right: none;
                    }
                    .token-price-pool___content-each-name {
                        font-weight: 900;
                        font-size: 8px;
                        line-height: 14px;
                        text-align: center;
                        color: #FFFFFF;
                        margin-top: 5px;
                    }
                    .token-price-pool___content-each-value {
                        font-weight: 900;
                        font-size: 12px;
                        line-height: 14px;
                        text-align: center;
                        letter-spacing: 1px;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }

    .unit-measurement-text {
        font-weight: 500;
        font-size: 14px;
        line-height: 40px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-right: 5px;
    }
}
</style>
