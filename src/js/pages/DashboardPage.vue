<template>
    <div id="DashboardPage" class="page">
        <div class="dashboardTitle">
            SEAMLESS TOKEN SWAPS ANYTIME, ANYWHERE.
        </div>
        <div class="row mt-5">
            <div class="col-9">
                <div class="dashboardDesc">
                    ARCC is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-4 mb-3">
                <dashboard-info-block title="Block 1" amount="500"/>
            </div>
            <div class="col-md-4 mb-3">
                <dashboard-info-block title="Block 2" amount="500"/>
            </div>
            <div class="col-md-4 mb-3">
                <dashboard-info-block title="Block 3" amount="500"/>
            </div>
            <div class="col-md-4 mb-3">
                <dashboard-info-block title="Block 1" amount="500"/>
            </div>
            <div class="col-md-4 mb-3">
                <dashboard-info-block title="Block 2" amount="500"/>
            </div>
            <div class="col-md-4 mb-3">
                <dashboard-info-block title="Block 3" amount="500"/>
            </div>
        </div>

        <div class="row startTradingBtn" v-if="!$store.state.isAuth">
            <div class="col-4 m-auto">
                <b-button block size="lg" variant="primary">START TRADING NOW</b-button>
            </div>
        </div>

        <div v-if="$store.state.isAuth" class="authStatistic">
            <div class="box mt-5">
                <div class="title">
                    Your Personal Details
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
                    Active Investments
                </div>
                <div class="content mt-3">
                    <div class="row">
                        <div class="col-md-6" v-for="(investment) in activeInvestments">
                            <token-harvest-card
                                :title="investment.tokenName"
                                :sub-title="investment.tokenCode"
                                :data="investment"
                                :is-multiplier="investment.tokenMultiplier ? true : false"
                                :multiplier-number="investment.tokenMultiplier"
                            />
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

            activeInvestments: [
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
                    tokenName: 'ETH-BNB LP FARM',
                    tokenCode: 'ETH-BNB',
                    tokenImage: '/images/Ethereum.png',
                    tokenMultiplier: 40,
                    tokenEarned: ['$420'],
                    tokenAPR: ['202.04%'],
                    tokenStaked: ['1,045 ETH','1,045 BNB LP'],
                    tokenLiquidity: ['$10,1000'],
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

            let total = 100,
                segmentMax = 60,
                remaining = total;
            let assetsCount = assets.lenght;
            await Promise.all(assets.map(async (asset) => {
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

            console.log("assetsObj: ", assetsObj)

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
#DashboardPage {
    padding-top: 60px;
    .dashboardTitle {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        line-height: 36px;
        letter-spacing: 3px;
    }

    .dashboardDesc {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 2px;
        text-transform: capitalize;
        font-feature-settings: 'case' on;
        color: #FFFFFF;
    }

    .authStatistic {
        margin-top: 120px;
    }

    .startTradingBtn {
        margin-top: 70px;
    }
}

</style>
