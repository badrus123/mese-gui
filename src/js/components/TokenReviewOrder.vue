<template>
    <div class="token-review-order">
        <div class="token-review-order__header">
            <div class="token-review-order__title">
                confirm buy eth
            </div>
            <div class="token-review-order__timer">
                10s
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="token-review-order__body mt-2">
            <b-list-group>
                <b-list-group-item>
                    <div class="title-group">
                        amount
                    </div>
                    <div class="value-group mt-1">
                        0.048 eth (87.374853 usdt)
                    </div>
                </b-list-group-item>
                <b-list-group-item>
                    <div class="title-group">
                        rate
                    </div>
                    <div class="value-group mt-1">
                        1 eth = 1,830.726 usdt
                    </div>
                </b-list-group-item>
                <b-list-group-item>
                    <div class="title-group">
                        fee
                    </div>
                    <div class="value-group mt-1">
                        0.00
                    </div>
                </b-list-group-item>
                <b-list-group-item>
                    <div class="title-group">
                        method
                    </div>
                    <div class="value-group mt-1">
                        usdt crypto wallet
                    </div>
                </b-list-group-item>
                <b-list-group-item>
                    <div class="title-group">
                        total cost
                    </div>
                    <div class="value-group mt-1">
                        87.374853 usdt
                    </div>
                </b-list-group-item>
            </b-list-group>
            <b-button variant="primary" class="mt-4" block>CONFIRM</b-button>
            <b-button variant="outline-white" @click="cancel()" class="mt-2" block>CANCEL</b-button>
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
        cancel() {
            this.$emit('cancelled')
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss">
.token-review-order {
    .token-review-order__header {
        .token-review-order__title {
            font-weight: 900;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;
            float: left;
        }

        .token-review-order__timer {
            font-weight: 900;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 2px;
            text-transform: capitalize;
            color: #E01212;

            float:right;
        }
    }
    .token-review-order__body {
        .title-group {
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        .value-group {
            font-weight: bold;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }
}
</style>
