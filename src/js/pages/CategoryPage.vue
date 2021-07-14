<template>
    <div id="CategoryPage" class="page">
        <div class="row">
            <div class="col-7 m-auto pt-5 pb-5">
                <search-group placeholder="Search by token name, symbol or address.."/>
            </div>
        </div>

        <div class="mt-3 mb-2">
            <div class="row mt-2">
                <div class="col-md-12" v-if="$route.params.category === 'top-gainer'">
                    <div class="category-box brown">
                        <div class="img">
                            <img src="/images/TopGainer-Icon.svg" alt="dashboard icon">
                        </div>
                        <div class="title">
                            TOP GAINERS
                            <div class="sub-title">
                                the biggest % gains in the last 24 hours
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" v-if="$route.params.category === 'stablecoins'">
                    <div class="category-box green">
                        <div class="img">
                            <img src="/images/StableCoin-Icon.svg" alt="dashboard icon">
                        </div>
                        <div class="title">
                            STABLECOINS
                            <div class="sub-title">
                                the biggest % gains in the last 24 hours
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" v-if="$route.params.category === 'wrapped-coins'">
                    <div class="category-box purple">
                        <div class="img">
                            <img src="/images/Wrapped-Tokens-Icon.svg" alt="dashboard icon">
                        </div>
                        <div class="title">
                            wrapped coins
                            <div class="sub-title">
                                the biggest % gains in the last 24 hours
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" v-if="$route.params.category === 'block'">
                    <div class="category-box blue">
                        <div class="img">
                        </div>
                        <div class="title">
                            BLOCK
                            <div class="sub-title">
                                the biggest % gains in the last 24 hours
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5 box">
            <div class="title">
                Featured Tokens
            </div>

            <div class="mt-4">
                <featured-token-table/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
#CategoryPage {
    .category-box-title {
        font-weight: 600;
        font-size: 20px;
        line-height: 40px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    .category-box {
        border-radius: 8px;
        padding:15px;
        position: relative;
        cursor: pointer;
        height: 250px;

        &.brown {
            border: 4px solid rgba(226, 202, 196, 0.3);
            border-radius: 8px;
            background: linear-gradient(180deg, #E2CAC4 0%, #C89D94 100%);
        }

        &.green {
            background: linear-gradient(180deg, #A9D2B5 0%, #68A478 100%);
            border: 4px solid rgba(169, 210, 181, 0.3);
            border-radius: 8px;
        }

        &.purple {
            background: linear-gradient(180deg, #D9BDDC 0%, #B382B7 100%);
            border: 4px solid rgba(217, 189, 220, 0.3);
            border-radius: 8px;
        }

        &.blue {
            background: linear-gradient(180deg, #BDD6DC 0%, #7BADB8 100%);
            border: 4px solid rgba(189, 214, 220, 0.3);
            border-radius: 8px;
        }

        .img {
            position: absolute;
            height: 200px;
            width: 200px;
            right:60px;
            margin: auto;

            img {
                text-align: center;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .title {
            position: absolute;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: 900;
            color: #FFFFFF;
            left:60px;
            top: 90px;
            font-size: 58px;
            line-height: 40px;

            .sub-title {
                margin-top: 30px;
                font-weight: 900;
                font-size: 22px;
                line-height: 40px;
            }
        }
    }

    .chartHeight {
        margin-top: -20px;
        margin-bottom: -20px;
    }
}
</style>
