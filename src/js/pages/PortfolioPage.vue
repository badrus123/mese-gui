<template>
    <div id="PortfolioPage" class="page">
        <div class="PortfolioTitle">
            Portfolio
        </div>

        <div>
            <div class="box mt-5">
                <div class="title">
                    Account Overview
                </div>
                <div class="content mt-3">
                    <div class="row">
                        <div class="col-md-6">
                            <balance-chart-card :data="balances"/>
                        </div>
                        <div class="col-md-6">
                            <chart-card title="PORTFOLIO VALUE" type="line-chart1" :data="portfolioSeries"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box mt-5">
                <div class="title">
                    Pools
                </div>
                <div class="content mt-3">
                    <div class="row">
                        <div class="col-md-6" v-for="(pool, index) in pools">
                            <token-harvest-card
                                :title="pool.tokenName"
                                :sub-title="pool.tokenCode"
                                :data="pool"
                                :is-multiplier="pool.tokenMultiplier ? true : false"
                                :multiplier-number="pool.tokenMultiplier"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="box mt-5">
                <div class="title">
                    Farms
                </div>
                <div class="content mt-3">
                    <div class="row">
                        <div class="col-md-6" v-for="(farm, index) in farms">
                            <token-harvest-card
                                :title="farm.tokenName"
                                :sub-title="farm.tokenCode"
                                :data="farm"
                                :is-multiplier="farm.tokenMultiplier ? true : false"
                                :multiplier-number="farm.tokenMultiplier"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="box mt-5">
                <div class="title">
                    Lottery Tickets
                </div>
                <div class="content mt-3">
                    <div class="row">
                        <div class="col-md-3 mb-4" v-for="ticket in tickets">
                            <lottery-block-card :data="ticket"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            accountInfo: {},
            balances: [],
            portfolioSeries: [
                {
                    name: "Series 1",
                    data: [1, 2, 3, 4, 5, 6, 2,4,2,3,2,5,2,6,4,6,4,5,4,2,5,3,2,7,2,4],
                    color: '#43956B'
                }
            ],
            pools: [
                {
                    tokenName: 'ethereum pool',
                    tokenCode: 'ETH-BNB',
                    tokenImage: '/images/Ethereum.png',
                    tokenMultiplier: null,
                    tokenEarned: ['131 ETH-BNB'],
                    tokenAPR: ['202.04%'],
                    tokenStaked: ['1,045 ETH-BNB'],
                    tokenLiquidity: ['$10,1000','13 ETH','13 BNB'],
                },
                {
                    tokenName: 'ethereum pool',
                    tokenCode: 'ETH-BNB',
                    tokenImage: '/images/Ethereum.png',
                    tokenMultiplier: null,
                    tokenEarned: ['131 ETH-BNB'],
                    tokenAPR: ['202.04%'],
                    tokenStaked: ['1,045 ETH-BNB'],
                    tokenLiquidity: ['$10,1000','13 ETH','13 BNB'],
                },
            ],
            farms: [
                {
                    tokenName: 'ETH-BNB LP FARM',
                    tokenCode: 'ETH-BNB',
                    tokenImage: '/images/Ethereum.png',
                    tokenMultiplier: 40,
                    tokenEarned: ['$420'],
                    tokenAPR: ['202.04%'],
                    tokenStaked: ['1,045 ETH','1,045 BNB LP'],
                    tokenLiquidity: ['$10,1000'],
                },
                {
                    tokenName: 'ETH-BNB LP FARM',
                    tokenCode: 'ETH-BNB',
                    tokenImage: '/images/Ethereum.png',
                    tokenMultiplier: 40,
                    tokenEarned: ['$420'],
                    tokenAPR: ['202.04%'],
                    tokenStaked: ['1,045 ETH','1,045 BNB LP'],
                    tokenLiquidity: ['$10,1000'],
                },
            ],
            tickets: [
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
                {
                    code: '12942',
                    won: '10,284',
                    winningNumbers: [
                        {
                            number: 1,
                            selected: true,
                        },
                        {
                            number: 2,
                            selected: false,
                        },
                        {
                            number: 20,
                            selected: true,
                        },
                        {
                            number: 13,
                            selected: false,
                        },
                        {
                            number: 14,
                            selected: true,
                        },
                        {
                            number: 15,
                            selected: false,
                        },
                    ],
                },
            ]
        }
    },
    computed: {
        ...mapState(['walletLoaded', 'selectedAccount']),
    },
    watch: {
        walletLoaded() {
            this.loadPortfolio();
        },
        selectedAccount(oldVal) {
            this.balances = [];
            if (oldVal != '')
                this.loadPortfolio();
        }
    },
    mounted() {
        this.loadPortfolio();
    },
    methods: {
        loadPortfolio() {
            this.$store.state.wallets.forEach(wallet => {
                for (const [address, assets] of Object.entries(wallet)) {
                    if (address == this.$store.state.selectedAccount) {
                        assets.forEach(asset => {
                            var balance = {"label": asset["Asset"], "amount": asset["Amount"], "value": asset["Value"], "color": this.getRandomColor()}
                            this.balances.push(balance)
                        });
                    }
                    break
                }
            });
            this.balances.sort((a, b) => ((a.amount * a.value) < (b.amount * b.value)) ? 1 : -1 )
        },
        successCallback(result) {
            this.accountInfo = result;

            // Get Asset Info for first three assets
            if (result.assets.length > 0) {
                this.assetInfo(result.assets);
            }
        },
        failureCallback(error) {
            console.log(error)
        },
        async assetInfo(assets) {
            let assetsObj = [];
            let i = 0;

            //let totalAmountOfThreeAssets 
            let total = 100,
                segmentMax = 60,
                remaining = total;
            let assetsCount = assets.lenght;
            //console.log(this.colors)
            await Promise.all(assets.map(async (asset) => {
                //const assetData = await client.getAssetByID(asset["asset-id"]).do();

                // Randomly assign percentage starting from the range of 0-59
                let percentage = Math.floor(Math.random() * segmentMax); 
                if (i === assetsCount) {
                    percentage = remaining;
                }
                remaining -= percentage;
                segmentMax = remaining;

                // Generate random colors
                this.colors[i] = this.getRandomColor();

                let data = {value: percentage, color: this.colors[i], label: assetData.params['unit-name'], amount: asset.amount}
                assetsObj.push(data)
                i++;
            }))

            // Assign data to Balances array
            this.balances = assetsObj;

        },
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }
}
</script>

<style lang="scss">
#PortfolioPage {
    .PortfolioTitle {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFF;
        line-height: 36px;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }

    .chartContainer__portfolio {
        margin-top: -40px;
        margin-bottom: -20px;
    }

    .chatFilter__portfolio {
        position: absolute;
        left:0;
        top:0;
        z-index: 10;
    }
}
</style>
