<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">BALANCE</div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <vc-donut class="donut-chart soft-black" v-bind="balanceChartProps">
                        <small>
                            <strong>{{this.total_value}}</strong>
                            <br>
                            USD
                        </small>

                        <template slot="legend">
                            <ul class="legends">
                                <li v-for="(data, index) in balanceChartProps.top_tokens"
                                    :style="{'--legend-border-color' : data.color}"
                                    :key="index">
                                    <div class="title">
                                        {{data.label}}
                                    </div>
                                    <div class="info">
                                        <strong>{{data.amount}}</strong> | <span class="text-grey">10 USD</span>
                                    </div>
                                </li>
                            </ul>
                        </template>
                    </vc-donut>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: ()=> {
                return []
            }
        },
        size: {
            type: Number,
            default: ()=> {
                return 250
            }
        },
    },
    data() {
        return {
            total_value: 0,
            componentUUID: this.generateComponentUUID()
        }
    },
    computed: {
        balanceChartProps() {
            for (var index in this.data) {
                var asset_value = this.data[index]["amount"] * this.data[index]["value"]
                this.total_value += asset_value
            }
            var sections = []
            for (var index in this.data) {
                asset_value = this.data[index]["amount"] * this.data[index]["value"]
                sections.push({"value": Math.round((asset_value / this.total_value) * 100), "color": this.data[index]["color"]})
            }

            return {
                size: this.size,
                sections: sections,
                top_tokens: this.data.slice(0, 3),
                thickness: 10,
                hasLegend: true,
                legendPlacement: 'right'
            }
        }
    },
    methods: {

    },
    mounted() {
        
    }
}
</script>

<style lang="scss">

</style>
