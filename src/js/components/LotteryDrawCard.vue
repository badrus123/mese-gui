<template>
    <div class="lottery-draw-card-component">
        <div class="card lottery-draw-card">
            <div class="card-header bordered">
                <div class="ticket-date">
                    APR 20, 2020
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="card-body mb-0">
                <div class="token-won">
                    total pot
                </div>
                <div class="token-won-number">
                    15,000 MeseX
                </div>
                <div class="line mt-3 mb-3"></div>
                <div class="">
                    <table class="table table-mini table-borderless mt-2">
                        <thead>
                        <tr>
                            <th class="text-left">
                                Winner
                            </th>
                            <th class="text-left">
                                N0. Matched
                            </th>
                            <th class="text-left">
                                Price Pot
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-left">
                                2
                            </td>
                            <td class="text-left">
                                6
                            </td>
                            <td class="text-left">
                                8,000
                            </td>
                        </tr>
                        <tr>
                            <td class="text-left text-grey">
                                1
                            </td>
                            <td class="text-left text-grey">
                                5
                            </td>
                            <td class="text-left text-grey">
                                3,000
                            </td>
                        </tr>
                        <tr>
                            <td class="text-left text-grey">
                                5
                            </td>
                            <td class="text-left text-grey">
                                4
                            </td>
                            <td class="text-left text-grey">
                                2,000
                            </td>
                        </tr>
                        <tr>
                            <td class="text-left text-grey">
                                5
                            </td>
                            <td class="text-left text-grey">
                                3
                            </td>
                            <td class="text-left text-grey">
                                1,000
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="text-left text-grey">
                                Burned:
                            </td>
                            <td class="text-left text-grey">
                                1,000
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="line mt-3 mb-3"></div>
                <div class="winning-numbers-title">
                    WINNING NUMBERS
                </div>
                <div class="winning-numbers-block-container">
                    <div class="winning-numbers-block disabled">1</div>
                    <div class="winning-numbers-block">2</div>
                    <div class="winning-numbers-block disabled">20</div>
                    <div class="winning-numbers-block">13</div>
                    <div class="winning-numbers-block disabled">13</div>
                    <div class="winning-numbers-block">15</div>
                    <div class="winning-numbers-block disabled">15</div>
                    <div class="clearfix"></div>
                </div>
                <div class="my-ticket-balance">
                    <div class="card">
                        <div class="my-ticket-balance___content">
                            <div class="my-ticket-balance___content-each">
                                <div class="my-ticket-balance___content-each-name">
                                    my tickets
                                </div>
                                <div class="my-ticket-balance___content-each-value">
                                    2
                                </div>
                            </div>
                            <div class="my-ticket-balance___content-each">
                                <div class="my-ticket-balance___content-each-name">
                                    mesex won
                                </div>
                                <div class="my-ticket-balance___content-each-value">
                                    10,284
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <b-button block size="sm" variant="link" class="accordion-toggle-btn mt-3" v-b-toggle="'lottery-history-detail-' + componentUUID">
                    <span class="when-open">HIDE</span>
                    <span class="when-closed">YOUR WINNINGS</span>
                    <span class="when-open"><font-awesome-icon icon="chevron-up"/></span>
                    <span class="when-closed"><font-awesome-icon icon="chevron-down"/></span>
                </b-button>

                <b-collapse :id="'lottery-history-detail-'+componentUUID">
                    <div class="lottery-history-detail">
                        <div v-for="i in 5" class="mb-2">
                            <div class="line mb-3"></div>
                            <div class="ticket-code">
                                TICKET 123
                            </div>
                            <div class="winning-numbers-title mt-2">
                                WINNING NUMBERS
                            </div>
                            <div class="winning-numbers-block-container">
                                <div class="winning-numbers-block disabled">1</div>
                                <div class="winning-numbers-block">2</div>
                                <div class="winning-numbers-block disabled">20</div>
                                <div class="winning-numbers-block">13</div>
                                <div class="winning-numbers-block disabled">13</div>
                                <div class="winning-numbers-block">15</div>
                                <div class="winning-numbers-block disabled">15</div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="mt-2">
                                <div class="row">
                                    <div class="col-md-6">
                                        AWARDS:
                                    </div>
                                    <div class="col-md-6">
                                        5,039 Mesex
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        APY:
                                    </div>
                                    <div class="col-md-6">
                                        4.22%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-collapse>
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

        type: {
            type: String,
            default: ()=> {
                return 'POOL'
            }
        }
    },
    data() {
        let self = this

        return {
            componentUUID: self.generateComponentUUID()
        }
    },
    methods: {
    },
    mounted(){
    }
}
</script>

<style lang="scss">
.lottery-draw-card-component {
    .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #FFF;
    }
    .winning-numbers-title {
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
            width: 16.66%;
            padding-top: 3%;
            padding-bottom: 3%;
            background: rgba(152, 135, 156, 0.5);
            border: 2px solid #98879C;
            border-radius: 3px;
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
    .ticket-code {
        font-size: 10px;
        line-height: 15px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }
}
.lottery-draw-card {
    padding: 1.3rem .9rem !important;
    padding-bottom: 0 !important;

    .card-body {
    }

    .ticket-date {
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.03em;
        text-align: center;
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

    .my-ticket-balance {
        .card {
            margin-top: 10px;
            padding:5px !important;
            .my-ticket-balance___content {
                display: flex;
                .my-ticket-balance___content-each {
                    text-align: center;
                    width: 50%;
                    border-right: 1px solid #FFF;

                    &:last-child {
                        border-right: none;
                    }
                    .my-ticket-balance___content-each-name {
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        letter-spacing: 0.01em;
                        text-transform: uppercase;
                        color: #FFFFFF;
                    }
                    .my-ticket-balance___content-each-value {
                        margin-top: 5px;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 21px;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
    .accordion-toggle-btn {
        font-weight: bold;
        font-size: 12px;
        line-height: 25px;
        letter-spacing: 2px;
        color: #81F1F9 !important;
    }
    .collapsed > .when-open,
    .not-collapsed > .when-closed {
        display: none;
    }
}

.lottery-history-detail {
    background: #4F4552;
    padding: 15px;
    border-left: 2px solid #FFF !important;
    border-right: 2px solid #FFF !important;
    border-bottom: 2px solid #FFF !important;
    margin-left: -16px;
    margin-right: -16px;
    margin-bottom: -16px;
    max-height: 400px;
    overflow-y: scroll;

    /* width */
    &::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #FFF;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #FFF;
    }
}
</style>
