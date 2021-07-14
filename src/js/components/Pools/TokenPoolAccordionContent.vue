<template>
    <div class="token-pools-accordion-content d-flex is-justify-space-around">
        <div class="chart-box">
            <div class="card borderless mb-4 card-chart-gradient">
                <div class="card-header">
                    <div class="card-title small-title">
                        PRICE HISTORY
                    </div>
                </div>
                <div class="card-body">
                    <line-chart3 class="chartContainer__portfolio" :height="150" :series="priceHistorySeries"/>
                </div>
            </div>
            <div class="card borderless mb-4 card-chart-gradient">
                <div class="card-header">
                    <div class="card-title small-title">
                        LIQUIDITY
                    </div>
                </div>
                <div class="card-body">
                    <area-chart1 class="chartContainer__portfolio" :height="150" :series="priceHistorySeries"/>
                </div>
            </div>
            <div class="card borderless mb-4 card-chart-gradient">
                <div class="card-header">
                    <div class="card-title small-title">
                        VOLUME
                    </div>
                </div>
                <div class="card-body">
                    <bar-chart1 class="chartContainer__portfolio" :height="150" :series="priceHistorySeries"/>
                </div>
            </div>
        </div>
        <div class="widget-box">
            <div class="card borderless card-widget">
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
.token-pools-accordion-content {
    .card-widget {
        border-radius: 8px;
        height: 600px;padding:20px !important;
    }
}
</style>
