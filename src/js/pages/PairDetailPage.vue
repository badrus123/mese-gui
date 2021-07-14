<template>
    <div id="PairDetailPage" class="page">
        <div class="row">
            <div class="col-7 m-auto pt-3 pb-5">
                <search-group placeholder="Search by token name, symbol or address.."/>
            </div>
        </div>

        <div class="box">
            <div class="title">
                ETH-PPC Pair
            </div>

            <div class="mt-3">
                <div class="row">
                    <div class="col-md-8">
                        <div class="statistics__token-price">
                            $200.15
                        </div>
                        <div class="statistics__token-chart mt-3">
                            <b-button variant="outline-white" @click.prevent="tokenPeriodFilterBy = '24h'" :class="{'active': tokenPeriodFilterBy === '24h'}" class="mr-2 btn-period-filter">24h</b-button>
                            <b-button variant="outline-white" @click.prevent="tokenPeriodFilterBy = '1w'" :class="{'active': tokenPeriodFilterBy === '1w'}" class="mr-2 btn-period-filter">1w</b-button>
                            <b-button variant="outline-white" @click.prevent="tokenPeriodFilterBy = '1m'" :class="{'active': tokenPeriodFilterBy === '1m'}" class="mr-2 btn-period-filter">1m</b-button>

                            <div class="mt-2">
                                <line-chart2 class="chartContainer__portfolio" :height="295" :series="tokenSeries"/>
                            </div>
                        </div>

                        <div class="statistics__token-details mb-2">
                            <div class="title">
                                token details
                            </div>
                            <div class="row pt-3">
                                <div class="col-md-4">
                                    <div class="statistics__token-details-box">
                                        <div class="statistics__token-details-box-title">
                                            Total Liquidity
                                        </div>
                                        <div class="statistics__token-details-box-content">
                                            <span class="number">$13,400</span>
                                            <font-awesome-icon icon="caret-down" class="icon down"/>
                                            <span class="text-danger">-7.85%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="statistics__token-details-box">
                                        <div class="statistics__token-details-box-title">
                                            Volume (24h)
                                        </div>
                                        <div class="statistics__token-details-box-content">
                                            <span class="number">$13,400</span>
                                            <font-awesome-icon icon="caret-up" class="icon up"/>
                                            <span class="text-success">+7.85%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="statistics__token-details-box">
                                        <div class="statistics__token-details-box-title">
                                            Fees (24h)
                                        </div>
                                        <div class="statistics__token-details-box-content">
                                            <span class="number">$1000</span>
                                            <font-awesome-icon icon="caret-up" class="icon up"/>
                                            <span class="text-success">+7.85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="box mt-5">
                            <div class="title">
                                Account Overview
                            </div>
                            <div class="content">
                                ARCC is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        <div class="box mt-5">
                            <div class="title">
                                about peercoin
                            </div>
                            <div class="content">
                                ARCC is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card borderless sidebar-sticky">
                            <div class="card-body">
                                <b-tabs content-class="mt-3" fill class="mt-n3">
                                    <b-tab title="SWAP" active>
                                        <token-swap/>
                                    </b-tab>
                                    <b-tab title="ADD LIQUIDITY">
                                        <token-liquidity/>
                                    </b-tab>
                                    <b-tab title="STAKE">
                                        <token-stake/>
                                    </b-tab>
                                </b-tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="box">
                            <div class="title">
                                Available Ethereum Pools
                            </div>
                            <div class="content">
                                <token-pool-accordion :total-dummy-data="1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tokenPeriodFilterBy: '24h',
            tokenSeries: [
                {
                    name: "Series 1",
                    data: [4, 2, 4, 2, 5, 6, 2],
                    color: '#87C09A'
                }
            ],
        }
    }
}
</script>

<style lang="scss">
#PairDetailPage {
    .sidebar-sticky {
        z-index: 30;
        top: 70px;
        position: sticky;
        margin-top: -30px;
    }
   .statistics__token-price {
       font-weight: 900;
       font-size: 35px;
       line-height: 40px;
       letter-spacing: 3px;
       color: #FFFFFF;
   }

    .statistics__token-chart {
        .btn-period-filter {
            border: 2px solid #979797 !important;
            color:#979797 !important;

            &.active {
                border: 2px solid #FFF !important;
                color:#FFF !important;
            }
        }
    }

    .statistics__token-details {
        margin-top: 30px;
        .title {
            font-weight: 900;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #FFFFFF;
            padding-bottom: 20px;
            border-bottom: 2px solid #FFF;
        }

        .statistics__token-details-box {
            .statistics__token-details-box-title {
                font-weight: 100 !important;
                font-size: 16px;
                line-height: 40px;
                letter-spacing: 1.5px;
                text-transform: none;
                padding-bottom: 0;
                border:none;
                color: #FFFFFF;
            }

            .statistics__token-details-box-content {
                .number {
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 40px;
                    letter-spacing: 3px;
                    color: #FFFFFF;
                }

                .text-danger {
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 40px;
                    letter-spacing: 3px;
                }

                .icon {
                    padding-top: 5px;
                    font-size: 30px;
                    margin-left: 5px;
                    margin-right: 5px;

                    &.down {
                        color: #B11A1A;
                    }

                    &.up {
                        color: #589878;
                    }
                }
            }
        }
    }
}
</style>
