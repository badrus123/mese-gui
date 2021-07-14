<template>
    <div :id="'line-chart-2-' + componentUUID" class="chartHeight"></div>
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
        }
    },
    data() {
        let self = this

        return {
            componentUUID: self.generateComponentUUID()
        }
    },
    methods: {
        generateChart() {
            let options = {
                chart: {
                    height: this.height,
                    type: "line",
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
                        style: {
                            colors: '#FFF',
                        },
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
                        minWidth: 40,
                        show: false,
                        style: {
                            colors: '#FFF',
                        },
                    }
                },
                markers: {
                    size: 10,
                    strokeWidth: 0,
                    hover: {
                        size: 14,
                    }
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 7,
                    dashArray: 0,
                },
                series: this.series,
            }

            var chart = new ApexCharts(document.querySelector("#line-chart-2-" + this.componentUUID), options);

            chart.render();
        }
    },
    mounted(){
        this.generateChart()
    }
}
</script>

<style lang="scss">
.Chart {

}
</style>
