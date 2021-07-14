<template>
    <div class="token-farms-accordion-row">
            <div class="borders">
                <div class="token-pools-accordion__container token-farms-accordion__token-info">
                    <div class="token-farms-accordion__token-info__img">
                        <img src="/images/Ethereum.png">
                    </div>
                    <div class="token-farms-accordion__token-info__desc">
                        <div class="token-farms-accordion__token-info__name">
                            BITCOIN FARMS
                        </div>
                        <div class="token-farms-accordion__token-info__code">
                            BTC-ETH
                        </div>
                        <div class="token-farms-accordion__token-info__link-pair">
                            <router-link to="/explore/token/example/pair/example">VIEW PAIR</router-link>
                        </div>
                    </div>
                </div>
                <div class="token-pools-accordion__container token-farms-accordion__box">
                    <div class="token-farms-accordion__box-title">
                        EARNED
                    </div>
                    <div class="token-farms-accordion__box-value">
                        $25 (Today)
                    </div>
                    <div class="token-farms-accordion__box-info">
                        $350 (Total)
                    </div>
                </div>
                <div class="token-pools-accordion__container token-farms-accordion__box">
                    <div class="token-farms-accordion__box-title">
                        APR <need-help-icon :width="20" :height="20" class="ml-3" color="#FFF"/>
                    </div>
                    <div class="token-farms-accordion__box-value mini">
                        110.30% (1y)
                    </div>
                    <div class="token-farms-accordion__box-info">
                        <div>
                            9.19% (1m)
                        </div>
                        <div class="mt-n2">
                            0.31% (1d)
                        </div>
                    </div>
                </div>
                <div class="token-pools-accordion__container token-farms-accordion__box">
                    <div class="token-farms-accordion__box-title">
                        Multiplier <need-help-icon :width="20" :height="20" class="ml-3" color="#FFF"/>
                    </div>
                    <div class="token-farms-accordion__box-value mini">
                        40x
                    </div>
                </div>
                <div class="token-pools-accordion__container token-farms-accordion__box">
                    <div class="token-farms-accordion__box-title">
                        LIQUIDITY <need-help-icon :width="20" :height="20" class="ml-3" color="#FFF"/>
                    </div>
                    <div class="token-farms-accordion__box-value mini">
                        $5,234,985
                    </div>
                    <div class="token-farms-accordion__box-info">
                        <div>
                            3,440 BTC
                        </div>
                        <div class="mt-n2">
                            1,900 ETH
                        </div>
                    </div>
                </div>
                <div class="token-pools-accordion__container token-farms-accordion__switch">
                    <b-button block size="sm" variant="link" class="accordion-toggle-btn" v-b-toggle="'token-farms-accordion-'+componentUUID+'__collapse'">
                                    <span class="mr-1">
                                        Details
                                    </span>
                        <span class="when-open"><font-awesome-icon icon="chevron-up"/></span>
                        <span class="when-closed"><font-awesome-icon icon="chevron-down"/></span>
                    </b-button>
                </div>
            </div>
        <b-collapse :id="'token-farms-accordion-'+componentUUID+'__collapse'" accordion="my-accordion">
            <b-list-group-item class="token-farms-accordion__content">
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
    padding: 15px;
}
@media screen and (max-width: 700px) {
    .borders{
        width: 100%;
        display:flex;
        flex-direction: column;
    }
}
.token-farms-accordion-row {
    .list-group {
        background: rgba(32, 32, 32, 1);
    }
    .token-pools-accordion__container {
        margin: 0 15px;
    }
    .token-pools-accordion__container:nth-child(1) {
        width: 280px;
        margin-left: 0;
    }
    .token-pools-accordion__container:nth-child(2) {
        width: 180px;
    }
    .token-pools-accordion__container:nth-child(3) {
        width: 120px;
    }
    .token-pools-accordion__container:nth-child(4) {
        width: 120px;
    }
    .token-pools-accordion__container:nth-child(5) {
        width: 120px;
    }
    .token-pools-accordion__container:nth-child(6) {
        width: 100px;
        margin-right: 0;
        margin-left: 0;
    }
    .token-farms-accordion__token-info {
        display: flex;

        .token-farms-accordion__token-info__img {
            width: 60px;
            text-align: center;
            padding-top: 20px;
            padding-left: 10px;
            margin-right: 18px;
            img {
                width: 55px;
                height: 55px;
                object-fit: contain;
            }
        }
        .token-farms-accordion__token-info__desc {
            width: 200px;

            .token-farms-accordion__token-info__name {
                font-style: normal;
                font-weight: 900;
                font-size: 20px;
                line-height: 30px;
                letter-spacing: 3px;
                color: #FFFFFF;
            }
            .token-farms-accordion__token-info__code {
                font-weight: 500;
                font-size: 13px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .token-farms-accordion__token-info__link-pair {
                font-weight: 500;
                font-size: 10px;
                line-height: 30px;
                letter-spacing: 1px;
                text-decoration-line: underline;

                a {
                    color: #81F1F9;
                }
            }
        }
    }
    .token-farms-accordion__box {
        .token-farms-accordion__box-title {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            letter-spacing: 1px;
            color: #EFA0A9;
        }
        .token-farms-accordion__box-value {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #FFFFFF;

            &.mini {
                font-size: 14px;
            }
        }
        .token-farms-accordion__box-info {
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            letter-spacing: 1.5px;
            color: #C7C7C7;
        }
    }
    .token-farms-accordion__switch {
        display: flex;
        align-items: center;
        justify-content: center;
        .accordion-toggle-btn {
            font-weight: bold;
            font-size: 12px;
            line-height: 25px;
            letter-spacing: 2px;
            text-transform: capitalize;
            color: #81F1F9 !important;
        }
    }
    .collapsed > .when-open,
    .not-collapsed > .when-closed {
        display: none;
    }
    .token-farms-accordion__content {
        padding: 40px !important;
        background: #4F4552;
        .chartContainer__portfolio {
            margin-top: -40px;
            margin-bottom: -20px;
        }
    }
}
</style>
