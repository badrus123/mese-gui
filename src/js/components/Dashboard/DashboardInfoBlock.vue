<template>
    <div class="blockInfo">
        <div class="blockInfo__inner">
            <div class="d-flex">
                <div class="blockInfo__inner-info-section">
                    <div class="blockInfo__inner-title">
                        {{ title }}
                    </div>
                    <div class="blockInfo__inner-amount">
                        {{ currency }} {{ amount }}
                    </div>
                </div>
                <div class="blockInfo__inner-chart-section">
                    <div :id="'blockInfo__inner-trend-chart-' + componentUUID" class="chartHeight"></div>
                </div>
                <div class="blockInfo__inner-icon-section">
                    <font-awesome-icon class="blockInfo__inner-icon" icon="arrow-up"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ApexCharts from 'apexcharts'
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        currency: {
            type: String,
            default: '$'
        },
        amount: {
            type: String,
            default: '0'
        }
    },
    data() {
        let self = this

        return {
            componentUUID: self.generateComponentUUID()
        }
    },
    filters: {
        formatDecimal(num) {
            if (num == Math.floor(num)) {
                return num
            }
            return num.toFixed(2)
        }
    },

    methods: {
        generateTrendChart() {
            var options = {
                chart: {
                    height: 85,
                    type: "area",
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                grid: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2,
                    dashArray: 0,
                },
                colors: ['#77D2CA'],
                series: [
                    {
                        name: "Series 1",
                        data: [45, 52, 38, 45, 19, 23, 2]
                    }
                ],
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 1,
                        stops: [100, 60, 30]
                    }
                },
            }

            var chart = new ApexCharts(document.querySelector("#blockInfo__inner-trend-chart-" + this.componentUUID), options);

            chart.render();
        }
    },
    mounted() {
        this.generateTrendChart()
    },
    destroyed() {
    },
}
</script>

<style lang="scss">
.blockInfo {
    background: linear-gradient(90deg, rgba(63,66,119, 0.4) -0.08%, rgba(28, 30, 73, 0.4) 100%);
    border-radius: 30px;
    padding:15px;

    .blockInfo__inner {
        background: linear-gradient(90deg, #3F4277 0.06%, #1C1E49 100.06%);
        border-radius: 30px;
        padding:15px 25px;

        .blockInfo__inner-info-section {
            width: 30%;
        }

        .blockInfo__inner-chart-section {
            width: 60%;
        }

        .blockInfo__inner-icon-section {
            width: 10%;
            text-align: right;
        }

        .blockInfo__inner-title {
            font-weight: bold;
            font-size: 12px;
        }

        .blockInfo__inner-amount {
            font-weight: 300;
            font-size: 12px;
        }

        .blockInfo__inner-icon {
            color: #8EFBAD;
            padding-top: 5px;
            font-size: 20pt;
        }

        .chartHeight {
            margin-top: -35px;
            margin-bottom: -30px;
        }
    }
}

</style>
