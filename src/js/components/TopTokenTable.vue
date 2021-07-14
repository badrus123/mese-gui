<template>
    <div>
        <table class="table dark border-0 table-striped">
            <thead>
            <tr>
                <th>Token Name</th>
                <th>Liquidity</th>
                <th>Volume</th>
                <th>Price</th>
                <th>24H Change</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <img src="/images/Ethereum.png" class="mr-3" width="40px">
                    <strong class="text-uppercase">Token Name</strong>
                </td>
                <td><span>$306,394,294</span></td>
                <td><span>$306,394,294</span></td>
                <td><span>$55,485</span></td>
                <td><span class="text-success">+3.00%</span></td>
            </tr>
            <tr>
                <td>
                    <img src="/images/Ethereum.png" class="mr-3" width="40px">
                    <strong class="text-uppercase">Token Name</strong>
                </td>
                <td><span>$306,394,294</span></td>
                <td><span>$306,394,294</span></td>
                <td><span>$55,485</span></td>
                <td><span class="text-danger">-2.00%</span></td>
            </tr>
            <tr>
                <td>
                    <img src="/images/Ethereum.png" class="mr-3" width="40px">
                    <strong class="text-uppercase">Token Name</strong>
                </td>
                <td><span>$306,394,294</span></td>
                <td><span>$306,394,294</span></td>
                <td><span>$55,485</span></td>
                <td><span class="text-success">+3.00%</span></td>
            </tr>
            <tr>
                <td>
                    <img src="/images/Ethereum.png" class="mr-3" width="40px">
                    <strong class="text-uppercase">Token Name</strong>
                </td>
                <td><span>$306,394,294</span></td>
                <td><span>$306,394,294</span></td>
                <td><span>$55,485</span></td>
                <td><span class="text-danger">-2.00%</span></td>
            </tr>
            <tr>
                <td>
                    <img src="/images/Ethereum.png" class="mr-3" width="40px">
                    <strong class="text-uppercase">Token Name</strong>
                </td>
                <td><span>$306,394,294</span></td>
                <td><span>$306,394,294</span></td>
                <td><span>$55,485</span></td>
                <td><span class="text-success">+3.00%</span></td>
            </tr>
            </tbody>
        </table>

        <div class="simple-pagination simple-pagination-container-center" style="margin-top: 30px;">
            <div class="simple-pagination__prev">
                <font-awesome-icon icon="chevron-left"/>
            </div>
            <div class="simple-pagination__number">Page 1 of 20</div>
            <div class="simple-pagination__next">
                <font-awesome-icon icon="chevron-right"/>
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
    },
    data() {
        let self = this

        return {
            componentUUID: self.generateComponentUUID(),
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
        }
    },
    methods: {
    },
    mounted(){
    }
}
</script>

<style lang="scss">
.lottery-block-card {
    padding: 1.3rem .9rem !important;

    .card-body {
        border-bottom: 1px solid #FFF;
    }

    .ticket-code {
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .token-won {
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .token-won-number {
        margin-top: 5px;
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        line-height: 31px;
        color: #FFFFFF;
    }
    .winning-numbers-title {
        margin-top: 25px;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        text-align: center;
        color: #FFFFFF;
    }
    .winning-numbers-block-container {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        .winning-numbers-block {
            width: 29px;
            height: 29px;
            background: rgba(152, 135, 156, 0.5);
            border: 2px solid #98879C;
            border-radius: 3px;
            padding-top: 5px;
            font-weight: 900;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            letter-spacing: 0.015em;
            text-transform: uppercase;
            margin-right: 5px;
            margin-bottom: 5px;
            color: #FFFFFF;

            &.disabled {
                color: #676767;
                background: rgba(103, 103, 103, 0.5);
                border: 2px solid #676767;
            }
        }
    }
}
</style>
