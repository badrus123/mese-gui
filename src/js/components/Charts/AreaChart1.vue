<template>
    <div :id="'area-chart-3-' + componentUUID" class="chartHeight"></div>
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
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 0.5,
                        opacityFrom: 0.5,
                        opacityTo: 0.9,
                        stops: [0,90,100]
                    }
                },
            }

            var chart = new ApexCharts(document.querySelector("#area-chart-3-" + this.componentUUID), options);

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
