<template>
    <div :id="'bar-chart-1-' + componentUUID" class="chartHeight"></div>
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
                    type: "bar",
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
                        show: true,
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
                    opposite: true,
                    labels: {
                        show: true,
                        style: {
                            colors: '#FFF',
                        },
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
            }

            var chart = new ApexCharts(document.querySelector("#bar-chart-1-" + this.componentUUID), options);

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
