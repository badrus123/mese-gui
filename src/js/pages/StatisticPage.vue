<template>
    <div id="StatisticPage" class="page">
        <div class="StatisticTitle">
            mese STATISTICS
        </div>

        <div class="row mt-3">
            <div class="col-7 m-auto pt-5 pb-5">
                <search-group placeholder="Search by token name, symbol or address.."/>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <chart-card title="LIQUIDITY" class="card-statistic" style="border-radius: 15px;" type="area-chart1" :data="liquiditySeries"/>
            </div>
            <div class="col-md-6">
                <chart-card title="LIQUIDITY" class="card-statistic" style="border-radius: 15px;" type="bar-chart1" :data="liquiditySeries"/>
            </div>
        </div>

        <div class="mt-5 box">
            <div class="title">
                Top Tokens

                <b-button variant="outline-white" class="float-right btn-view-all">View all</b-button>
                <div class="clearfix"></div>
            </div>

            <div class="mt-4">
                <top-token-table/>
            </div>
        </div>
        <div class="mt-5 box">
            <div class="title">
                Top Pairs

                <b-button variant="outline-white" class="float-right btn-view-all">View all</b-button>
                <div class="clearfix"></div>
            </div>

            <div class="mt-4">
                <top-pairs-table/>
            </div>
        </div>
        <div class="mt-5 box">
            <div class="title">
                Transactions

                <div class="sort-by__text float-right">
                    <span class="mr-2">SORT BY</span>
                    <b-dropdown
                        no-flip
                        menu-class="w-100"
                        class="sort-by-dropdown" style="width: 250px" text="SWAPS">
                        <b-dropdown-item link-class="py-0" class="mb-1" disabled>
                            <template #default>
                                <div class="line"></div>
                            </template>
                        </b-dropdown-item>
                        <b-dropdown-item>APR</b-dropdown-item>
                        <b-dropdown-item>MULTIPLIER</b-dropdown-item>
                        <b-dropdown-item>EARNED</b-dropdown-item>
                        <b-dropdown-item>LIQUIDITY</b-dropdown-item>
                    </b-dropdown>
                </div>

                <div class="clearfix"></div>
            </div>

            <div class="mt-4">
                <transaction-table/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            liquidityFilterBy: '24h',
            volumeFilterBy: '24h',

            dummySeriesGreen: [
                {
                    name: "Series 1",
                    data: [1, 2, 3, 4, 5, 6, 2],
                    color: '#589878'
                }
            ],
            dummySeriesRed: [
                {
                    name: "Series 1",
                    data: [1, 2, 3, 4, 5, 6, 2],
                    color: '#B11A1A'
                }
            ],
            liquiditySeries: [
                {
                    name: "Series 1",
                    data: [1, 2, 3, 4, 5, 6, 2,4,2,3,2,5,2,6,4,6,4,5,4,2,5,3,2,7,2,4],
                    color: '#43956B'
                }
            ],
        }
    }
}
</script>

<style lang="scss">
#StatisticPage {
    .card-statistic {
        padding:40px !important;
    }
    .sidebar-sticky {
        z-index: 30;
        top: 70px;
        position: sticky;
        margin-top: -30px;
    }

    .StatisticTitle {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFF;
        line-height: 36px;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }

    .chartContainer__statistics {
        margin-top: 30px;
        margin-bottom: -20px;
    }

    .chatFilter__portfolio {
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

    .sort-by__text {
        margin-right: 20px;
        padding-top: 10px;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
}
</style>
