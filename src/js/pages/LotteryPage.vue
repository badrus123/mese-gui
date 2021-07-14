<template>
    <div id="LotteryPage" class="page">
        <div class="LotteryPageTitle">
            LOTTERY
        </div>

        <div class="mt-3">
            <div class="box">
                <div class="content">
                    <b-tabs content-class="mt-3" class="borderless-nav-tabs">
                        <b-tab title="NEXT DRAW" title-item-class="mr-4" active>
                            <div class="alert alert-info mt-4">
                                Buy your tickets with Mese Tokens. <br>
                                Win if 2, 3 or 4 of your ticket numbers match!
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="card">
                                        <div class="text-center">
                                            <div class="LotteryPage__info-title">
                                                next draw
                                            </div>
                                            <div class="LotteryPage__info-value">
                                                6 Hours 46 Minutes
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mt-3">
                                        <div class="text-center">
                                            <div class="LotteryPage__info-title">
                                                total pot
                                            </div>
                                            <div class="LotteryPage__info-value">
                                                40,000 MeseX
                                            </div>
                                            <div>
                                                <b-button block size="sm" variant="link" class="accordion-toggle-btn" v-b-toggle="'total-pot-details'">
                                                    <span class="mr-2">
                                                        Details
                                                    </span>
                                                    <span class="when-open"><font-awesome-icon icon="chevron-up"/></span>
                                                    <span class="when-closed"><font-awesome-icon icon="chevron-down"/></span>
                                                </b-button>
                                            </div>
                                            <b-collapse :id="'total-pot-details'" class="px-5">
                                                <table class="table table-mini table-borderless mt-2">
                                                    <thead>
                                                    <tr>
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
                                                            <span style="font-size: 16px">6</span>
                                                        </td>
                                                        <td class="text-left">
                                                            <span style="font-size: 16px">20,000</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left text-grey">
                                                            5
                                                        </td>
                                                        <td class="text-left text-grey">
                                                            10,000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left text-grey">
                                                            4
                                                        </td>
                                                        <td class="text-left text-grey">
                                                            5,000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left text-grey">
                                                            3
                                                        </td>
                                                        <td class="text-left text-grey">
                                                            2,000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left text-grey">
                                                            To Burn:
                                                        </td>
                                                        <td class="text-left text-grey">
                                                            3,000
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </b-collapse>
                                        </div>
                                    </div>
                                    <div class="card mt-3">
                                        <div class="text-center">
                                            <div class="LotteryPage__info-title">
                                                your token
                                            </div>
                                            <div class="LotteryPage__info-value">
                                                2,000 MeseX
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <b-button size="lg" block variant="secondary">
                                            BUY TICKETS
                                        </b-button>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="LotteryPage__your-tickets">
                                        <div class="LotteryPage__your-tickets__title">
                                            YOUR TICKETS
                                        </div>
                                        <div class="LotteryPage__your-tickets__content mt-4">
                                            <token-pick-form-group v-for="(ticket, index) in tickets" :key="index"
                                                                   v-model="ticket.numbers"
                                                                   :ticket-code="ticket.code" class="mb-3"
                                                                   :ticket-date="ticket.date"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="PAST DRAWS">
                            <label for=""><small>SORT BY</small></label>
                            <div>
                                <b-dropdown
                                    no-flip
                                    menu-class="w-100"
                                    class="sort-by-dropdown" style="width: 250px" text="RECENT DRAWS">
                                    <b-dropdown-item link-class="py-0" class="mb-1" disabled>
                                        <template #default>
                                            <div class="line"></div>
                                        </template>
                                    </b-dropdown-item>
                                    <b-dropdown-item>WINNINGS</b-dropdown-item>
                                </b-dropdown>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-3 mb-4" v-for="i in 8">
                                    <lottery-draw-card/>
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>

        <div class="mb-5 mt-5">
            <b-button block variant="link" to="/help" class="btn-footer">
                <span class="mr-3">NEED HELP</span><need-help-icon :width="25" :height="25" color="#FFF"/>
            </b-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tickets: [
                {
                    code: '11223344',
                    date: '20 april 2021',
                    numbers: [23,43,3,23,2,3]
                },
                {
                    code: '11223344',
                    date: '20 april 2021',
                    numbers: []
                }
            ]
        }
    }
}
</script>

<style lang="scss">
#LotteryPage {
    .sidebar-sticky {
        z-index: 30;
        top: 70px;
        position: sticky;
        margin-top: -30px;
    }

    .LotteryPageTitle {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFF;
        line-height: 36px;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }

    .LotteryPage__info-title {
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .LotteryPage__info-value {
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        color: #FFFFFF;
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

    .LotteryPage__your-tickets {
        padding:20px;
        background: #5A4F5D;
        border-radius: 5px;

        .LotteryPage__your-tickets__title {
            text-align: center;
            font-weight: bold;
            font-size: 22px;
            line-height: 26px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }

    .alert-info {
        font-weight: 900;
        font-size: 20px;
        line-height: 30px;
        text-transform: uppercase;
    }

    .btn-footer {
        color: #FFF !important;
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 1.5px;

        span {
            font-weight: 900;
            font-size: 15px;
            line-height: 40px;
            letter-spacing: 2px;
            text-decoration-line: underline;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }
}
</style>
