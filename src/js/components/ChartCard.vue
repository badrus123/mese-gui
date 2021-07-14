<template>
    <div class="card chart-card">
        <div class="card-header">
            <div class="card-title">{{ title }}</div>
        </div>
        <div class="card-body">
            <div class="chart-card__filter">
                <b-button variant="outline-white" @click.prevent="filterBy = '24h'" :class="{'active': filterBy === '24h'}" class="mr-2 btn-period-filter">24h</b-button>
                <b-button variant="outline-white" @click.prevent="filterBy = '1w'" :class="{'active': filterBy === '1w'}" class="mr-2 btn-period-filter">1w</b-button>
                <b-button variant="outline-white" @click.prevent="filterBy = '1m'" :class="{'active': filterBy === '1m'}" class="mr-2 btn-period-filter">1m</b-button>
            </div>
            <component :is="type" class="chart-card__statistics" :height="height" :series="data"/>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ()=> {
                return ''
            }
        },
        type: {
            type: String,
            default: ()=> {
                return 'area-chart1'
            }
        },
        height: {
            type: Number,
            default: ()=> {
                return 295
            }
        },
        data: {
            type: Array,
            default: ()=> {
                return []
            }
        },
    },
    data() {
        let self = this

        return {
            filterBy: '24h',
            componentUUID: self.generateComponentUUID()
        }
    },
    computed: {
        balanceChartProps() {
            return {
                size: this.size,
                sections: this.data,
                thickness: 10,
                hasLegend: true,
                legendPlacement: 'right'
            }
        }
    },
    methods: {

    },
    mounted(){

    }
}
</script>

<style lang="scss">
.chart-card {
    .chart-card__statistics {
        margin-top: -40px;
        margin-bottom: -20px;
    }
    .chart-card__filter {
        position: absolute;
        left:0;
        top:0;
        z-index: 10;
    }

    .btn-period-filter {
        border: 2px solid #979797 !important;
        color:#979797 !important;

        &.active {
            border: 2px solid #FFF !important;
            color:#FFF !important;
        }
    }
}
</style>
