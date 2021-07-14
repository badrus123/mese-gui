<template>
    <div id="ExplorePage" class="page">
        <div class="exploreTitle">
            Explore
        </div>

        <div class="row mt-3">
            <div class="col-7 m-auto pt-5 pb-5">
                <search-group placeholder="Search by token name, symbol or address.."/>
            </div>
        </div>

        <div class="mt-3 mb-2">
            <div class="category-box-title">
                browse by category
            </div>

            <div class="row mt-2">
                <div class="col-md-3">
                    <div class="category-box brown" @click="$router.push('/explore/category/top-gainer')">
                        <div class="img">
                            <img src="/images/TopGainer-Icon.svg" alt="dashboard icon">
                        </div>
                        <div class="title">
                            TOP GAINERS
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="category-box green" @click="$router.push('/explore/category/stablecoins')">
                        <div class="img">
                            <img src="/images/StableCoin-Icon.svg" alt="dashboard icon">
                        </div>
                        <div class="title">
                            STABLECOINS
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="category-box purple" @click="$router.push('/explore/category/wrapped-coins')">
                        <div class="img">
                            <img src="/images/Wrapped-Tokens-Icon.svg" alt="dashboard icon">
                        </div>
                        <div class="title">
                            wrapped coins
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="category-box blue">
                        <div class="img">
                        </div>
                        <div class="title">
                            BLOCK
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
    }
}
</script>

<style lang="scss">
#ExplorePage {
    .exploreTitle {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFF;
        line-height: 36px;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }

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
        text-align: center;
        cursor: pointer;

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
            width: 60%;
            height: 200px;
            left:0;
            right:0;
            margin: auto;

            img {
                text-align: center;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .title {
            padding-top: 220px;
            font-size: 18px;
            line-height: 40px;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: 600;
            color: #FFFFFF;
        }
    }

    .chartHeight {
        margin-top: -20px;
        margin-bottom: -20px;
    }
}
</style>
