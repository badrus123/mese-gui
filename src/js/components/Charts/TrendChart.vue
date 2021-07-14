<template>
    <div :id="'trend-chart-' + componentUUID" class="chartHeight"></div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
    props: {
        data: {
            type: Object,
            default: ()=> {
                return null
            }
        },

        height: {
            type: Number,
            default: ()=> {
                return 80
            }
        },

        series: {
            type: Array,
            default: ()=> {
                return []
            }
        },

        type: {
            type: String,
            default: ()=> {
                return 'area'
            }
        }
    },
    data() {
        let self = this

        return {
            componentUUID: self.generateComponentUUID()
        }
    },
    methods: {
        generateTrendChart() {
            let options = {
                chart: {
                    height: this.height,
                    type: this.type,
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
                series: this.series,
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

            if(this.type === 'line')
                delete options.fill

            var chart = new ApexCharts(document.querySelector("#trend-chart-" + this.componentUUID), options);

            chart.render();
        }
    },
    mounted(){
        this.generateTrendChart()
    }
}
</script>

<style lang="scss">
.trendChart {

}
</style>
