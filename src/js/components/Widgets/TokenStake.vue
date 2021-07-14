<template>
    <div class="token-stake-container">
        <div class="please-connect-wallet" v-if="!$store.state.isAuth">
            <b-button variant="primary" size="sm" block @click="$bvModal.show('ModalConnectWallet');">Connect Wallet</b-button>
        </div>
        <div v-else>
            <template v-if="state === 'DEFAULT'">
                <div class="token-stake pt-4">
                    <div class="token-stake___title">
                        your tokens
                    </div>
                    <div class="row your-tokens mt-2">
                        <div class="col-7 label py-2">available tokens:</div>
                        <div class="col-5 value py-2">50,000</div>
                    </div>
                    <div class="row your-tokens">
                        <div class="col-7 label py-2">tokens staked:</div>
                        <div class="col-5 value py-2">2,000</div>
                    </div>
                    <div class="row your-tokens">
                        <div class="col-7 label py-2">APR:</div>
                        <div class="col-5 value py-2">118.76%</div>
                    </div>
                </div>
                <token-converter-form-group class="mt-4" title="From"/>

                <b-button @click="state = 'REVIEW_ORDER'" variant="primary" class="mt-4" block>Review Order</b-button>
            </template>
            <template v-else-if="state === 'REVIEW_ORDER'">
                <token-review-order @cancelled="state = 'DEFAULT'"/>
            </template>
        </div>
        <div class="mt-5 text-center">
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
.token-stake-container {
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

    .token-stake {
        .token-stake___title {
            font-weight: 900;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #FFFFFF;
            border-bottom: 3px solid #FFF;
            padding-bottom: 10px;
        }

        .your-tokens {
            .label {
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .value {
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: #FFFFFF;
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
