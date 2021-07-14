<template>
    <div class="">
            <div class="borders">
                <div class="token-pools-accordion__container token-pools-accordion__token-info">
                    <div class="token-pools-accordion__token-info__img">
                        <img src="/images/Ethereum.png">
                    </div>
                    <div class="token-pools-accordion__token-info__desc">
                        <div class="token-pools-accordion__token-info__name">
                            BITCOIN POOL
                        </div>
                        <div class="token-pools-accordion__token-info__code">
                            BTC-ETH
                        </div>
                        <div class="token-pools-accordion__token-info__link-pair">
                            <router-link to="/explore/token/example/pair/example">VIEW PAIR</router-link>
                        </div>
                    </div>
                </div>
                <div class="token-pools-accordion__container token-pools-accordion__box">
                    <div class="token-pools-accordion__box-title">
                        EARNED
                    </div>
                    <div class="token-pools-accordion__box-value">
                        4,200 ETH-BTC-lp
                    </div>
                    <div class="token-pools-accordion__box-info">
                        APR: 1.04%
                    </div>
                </div>
                <div class="token-pools-accordion__container token-pools-accordion__box">
                    <div class="token-pools-accordion__box-title">
                        STAKED
                    </div>
                    <div class="token-pools-accordion__box-value">
                        <div class="row">
                            <div class="col-6">
                                1.000
                            </div>
                            <div class="col-6">
                                ETH
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                50.000
                            </div>
                            <div class="col-6">
                                BTC
                            </div>
                        </div>
                    </div>
                </div>
                <div class="token-pools-accordion__container token-pools-accordion__box">
                    <div class="token-pools-accordion__box-title">
                        APR <need-help-icon :width="20" :height="20" class="ml-3" color="#FFF"/>
                    </div>
                    <div class="token-pools-accordion__box-value mini">
                        110.30% (1y)
                    </div>
                    <div class="token-pools-accordion__box-info">
                        <div>
                            9.19% (1m)
                        </div>
                        <div class="mt-n2">
                            0.31% (1d)
                        </div>
                    </div>
                </div>
                <div class="token-pools-accordion__container token-pools-accordion__box">
                    <div class="token-pools-accordion__box-title">
                        LIQUIDITY <need-help-icon :width="20" :height="20" class="ml-3" color="#FFF"/>
                    </div>
                    <div class="token-pools-accordion__box-value mini">
                        $5,234,985
                    </div>
                    <div class="token-pools-accordion__box-info">
                        <div>
                            3,440 BTC
                        </div>
                        <div class="mt-n2">
                            1,900 ETH
                        </div>
                    </div>
                </div>
                <div class="token-pools-accordion__container token-pools-accordion__switch">
                    <b-button block size="sm" variant="link" class="accordion-toggle-btn" v-b-toggle="'token-pools-accordion-'+componentUUID+'__collapse'">
                                    <span class="mr-1">
                                        Details
                                    </span>
                        <span class="when-open"><font-awesome-icon icon="chevron-up"/></span>
                        <span class="when-closed"><font-awesome-icon icon="chevron-down"/></span>
                    </b-button>
                </div>
            </div>
        <b-collapse :id="'token-pools-accordion-'+componentUUID+'__collapse'" accordion="my-accordion">
            <b-list-group-item class="token-pools-accordion__content">
                <slot></slot>
            </b-list-group-item>
        </b-collapse>
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

        totalDummyData: {
            type: Number,
            default: ()=> {
                return 2
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
            priceHistorySeries: [
                {
                    name: "Series 1",
                    data: [1,4,3,2,4, 6, 2,4,2,3],
                    color: '#43956B'
                }
            ],
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
.borders{
    background-color: #202020;
    border: 1px solid #FFFFFF;
    width: 100%;
    display:flex;
    padding: 0px 15px;
}
@media screen and (max-width: 700px) {
    .borders{
        width: 100%;
        display:flex;
        flex-direction: column;
    }
}
</style>
