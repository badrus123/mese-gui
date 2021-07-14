<template>
    <div id="HelpDetailPage" class="page">
        <div class="HelpDetailTitle">
            Need some help?
        </div>

        <div class="row mt-3">
            <div class="col-7 m-auto pt-5 pb-5">
                <search-group placeholder="Search topic here"/>
            </div>
        </div>

        <breadcrumb :list="breadCrumbsData"></breadcrumb>
        <div class="mt-3 box">
            <div class="title">
                How do I create an Ethereum wallet?
            </div>
            <div class="sub-title mt-3">
                Sub heading
            </div>
            <div class="content mt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadCrumbsData: [
                {
                    to: '/help',
                    name: 'Help',
                },
                {
                    to: '/help',
                    name: 'Creating and funding your wallet',
                },
                {
                    to: '',
                    name: 'How do I create an Ethereum wallet?',
                }
            ],
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
#HelpDetailPage {
    .sidebar-sticky {
        z-index: 30;
        top: 70px;
        position: sticky;
        margin-top: -30px;
    }

    .HelpDetailTitle {
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
