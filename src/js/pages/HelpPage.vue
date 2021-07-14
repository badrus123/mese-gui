<template>
    <div id="HelpPage" class="page">
        <div class="HelpTitle">
            Need some help?
        </div>

        <div class="row mt-3">
            <div class="col-7 m-auto pt-5 pb-5">
                <search-group placeholder="Search topic here"/>
            </div>
        </div>

        <div class="mt-5 box">
            <div class="title">
                Getting started
            </div>
            <div class="content">
                Don’t know where to start? Here are some articles to help you get started making your first trade.
            </div>
        </div>
        <div class="mt-5 box">
            <div class="title">
                Creating and funding your wallet
            </div>
            <div class="content">
                <b-list-group class="article-list">
                    <b-list-group-item href="/help/example">
                        <div class="article-list__title">
                            Article title here
                        </div>
                        <div class="article-list__desc">
                            Article summary here
                        </div>
                    </b-list-group-item>
                    <b-list-group-item href="/help/example">
                        <div class="article-list__title">
                            Article title here
                        </div>
                        <div class="article-list__desc">
                            Article summary here
                        </div>
                    </b-list-group-item>
                </b-list-group>
            </div>
        </div>
        <div class="mt-5 box">
            <div class="title">
                Help 2
            </div>
            <div class="content">
                <b-list-group class="article-list">
                    <b-list-group-item href="/help/example">
                        <div class="article-list__title">
                            Article title here
                        </div>
                        <div class="article-list__desc">
                            Article summary here
                        </div>
                    </b-list-group-item>
                    <b-list-group-item href="/help/example">
                        <div class="article-list__title">
                            Article title here
                        </div>
                        <div class="article-list__desc">
                            Article summary here
                        </div>
                    </b-list-group-item>
                </b-list-group>
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
            liquiditySeries: [
                {
                    name: "Series 1",
                    data: [1, 2, 3, 4, 5, 6, 2,4,2,3,2,5,2,6,4,6,4,5,4,2,5,3,2,7,2,4],
                    color: '#43956B'
                }
            ],
        }
    }
}
</script>

<style lang="scss">
#HelpPage {
    .sidebar-sticky {
        z-index: 30;
        top: 70px;
        position: sticky;
        margin-top: -30px;
    }

    .HelpTitle {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFF;
        line-height: 36px;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }

   .article-list {
       background: #202020;
       .list-group-item {
           padding: 30px;
       }
       .article-list__title {
           font-weight: 900;
           font-size: 22px;
           line-height: 26px;
           letter-spacing: 3px;
           color: #FFFFFF;
       }
       .article-list__desc {
           margin-top: 20px;
           font-size: 18px;
           line-height: 22px;
           letter-spacing: 3px;
           color: #FFFFFF;
       }
   }
}
</style>
