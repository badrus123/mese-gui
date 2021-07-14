<template>
    <div id="FarmsPage" class="page">
        <div class="FarmPageTitle">
            Farms
        </div>

        <div class="row mt-3">
            <div class="col-7 m-auto pt-5 pb-5">
                <search-group placeholder="Search by token name, symbol or address.."/>
            </div>
        </div>

        <div class="mt-3">
            <div class="box">
                <div class="title">
                    <div class="float-left">
                        <b-form-checkbox class="stacked-switch" switch>
                            STAKED ONLY
                        </b-form-checkbox>
                    </div>
                    <div class="float-right">
                        <b-dropdown
                            no-flip
                            menu-class="w-100"
                            class="sort-by-dropdown" style="width: 250px" text="Hottest">
                            <b-dropdown-item link-class="py-0" class="mb-1" disabled>
                                <template #default>
                                    <div class="line"></div>
                                </template>
                            </b-dropdown-item>
                            <b-dropdown-item>APR</b-dropdown-item>
                            <b-dropdown-item>MULTIPLIER</b-dropdown-item>
                            <b-dropdown-item>EARNED</b-dropdown-item>
                            <b-dropdown-item>LIQUIDITY</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="content">
                    <token-farm-accordion/>
                </div>
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
#FarmsPage {
    .sidebar-sticky {
        z-index: 30;
        top: 70px;
        position: sticky;
        margin-top: -30px;
    }

    .FarmPageTitle {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFF;
        line-height: 36px;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }

    .btn-view-all {
        border: 2px solid #FFFFFF !important;
        border-radius: 5px !important;
        font-weight: normal !important;
        font-size: 12px !important;
        line-height: 25px !important;
    }

    .stacked-switch {
        .custom-control-input {
            &:checked {
                ~.custom-control-label {
                    &::before {
                        background-color: #007bff !important;
                    }
                    &::after {
                        transform: translateX(1.1rem) !important;
                    }
                }
            }
        }
        .custom-control-label {
            font-weight: 900;
            font-size: 13px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #FFFFFF;
            padding-left: 20px !important;
            &::before {
                width: 2.7rem !important;
                height: 1.6rem !important;
                background: #6F6F76 !important;
                border-radius: 16px !important;
            }

            &::after {
                width: calc(1.5rem - 4px) !important;
                height: calc(1.5rem - 4px) !important;
                background-color: #FFF !important;
                border-radius: 1rem !important;
                top: calc(0.28rem + 2px) !important;
                left: calc(-2.25rem + 3px) !important;
            }
        }
    }
}
</style>
