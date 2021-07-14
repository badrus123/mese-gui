<template>
    <div id="WrappedPage" class="page">
        <div class="WrappedTitle">
            Wrapped
        </div>

        <div class="row mt-3">
            <div class="col-7 m-auto pt-5 pb-5">
                <search-group placeholder="Search by token name, symbol or address.."/>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-8" style="padding-right: 120px">
                <div class="box">
                    <div class="title">
                        What are wrapped tokens?
                    </div>

                    <div class="sub-title mt-3">
                        Sub heading
                    </div>

                    <div class="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                        </p>
                    </div>
                </div>

            </div>
            <div class="col-md-4">
                <div class="card borderless sidebar-sticky">
                    <div class="card-body" style="height: 550px">
                        <token-swap :show-reverse-button="false" show-token-info/>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5 box">
            <div class="title">
                Top Tokens

                <b-button variant="outline-white" class="float-right btn-view-all">View all</b-button>
                <div class="clearfix"></div>
            </div>

            <div class="mt-4">
                <top-token-table/>
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
#WrappedPage {
    .sidebar-sticky {
        z-index: 30;
        top: 70px;
        position: sticky;
        margin-top: -30px;
    }

    .WrappedTitle {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFF;
        line-height: 36px;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }
}
</style>
