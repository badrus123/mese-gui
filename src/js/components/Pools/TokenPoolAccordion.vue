<template>
    <div :class="['token-pools-accordion','token-pools-accordion-'+componentUUID]">
        <b-list-group>
            <template v-for="i in totalDummyData">
                <token-pool-accordion-row>
                    <token-pool-accordion-content/>
                </token-pool-accordion-row>
            </template>
        </b-list-group>
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

        totalDummyData: {
            type: Number,
            default: ()=> {
                return 2
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
            priceHistorySeries: [
                {
                    name: "Series 1",
                    data: [1,4,3,2,4, 6, 2,4,2,3],
                    color: '#43956B'
                }
            ],
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
.token-pools-accordion {
    .list-group {
        background: rgba(32, 32, 32, 1);
    }
    .token-pools-accordion__container {
        margin: 0 15px;
    }
    .token-pools-accordion__container:nth-child(1) {
        width: 280px;
        margin-left: 0;
    }
    .token-pools-accordion__container:nth-child(2) {
        width: 180px;
    }
    .token-pools-accordion__container:nth-child(3) {
        width: 120px;
    }
    .token-pools-accordion__container:nth-child(4) {
        width: 120px;
    }
    .token-pools-accordion__container:nth-child(5) {
        width: 120px;
    }
    .token-pools-accordion__container:nth-child(6) {
        width: 100px;
        margin-right: 0;
        margin-left: 0;
    }
    .token-pools-accordion__token-info {
        display: flex;

        .token-pools-accordion__token-info__img {
            width: 60px;
            text-align: center;
            padding-top: 20px;
            padding-left: 10px;
            margin-right: 18px;

            img {
                width: 55px;
                height: 55px;
                object-fit: contain;
            }
        }
        .token-pools-accordion__token-info__desc {
            width: 200px;

            .token-pools-accordion__token-info__name {
                font-style: normal;
                font-weight: 900;
                font-size: 20px;
                line-height: 30px;
                letter-spacing: 3px;
                color: #FFFFFF;
            }
            .token-pools-accordion__token-info__code {
                font-weight: 500;
                font-size: 13px;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .token-pools-accordion__token-info__link-pair {
                font-weight: 500;
                font-size: 10px;
                line-height: 30px;
                letter-spacing: 1px;
                text-decoration-line: underline;

                a {
                    color: #81F1F9;
                }
            }
        }
    }
    .token-pools-accordion__box {
        .token-pools-accordion__box-title {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            letter-spacing: 1px;
            color: #EFA0A9;
        }
        .token-pools-accordion__box-value {
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #FFFFFF;

            &.mini {
                font-size: 14px;
            }
        }
        .token-pools-accordion__box-info {
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            letter-spacing: 1.5px;
            color: #C7C7C7;
        }
    }
    .token-pools-accordion__switch {
        display: flex;
        align-items: center;
        justify-content: center;
        .accordion-toggle-btn {
            font-weight: bold;
            font-size: 12px;
            line-height: 25px;
            letter-spacing: 2px;
            text-transform: capitalize;
            color: #81F1F9 !important;
        }
    }
    .collapsed > .when-open,
    .not-collapsed > .when-closed {
        display: none;
    }
    .token-pools-accordion__content {
        padding: 40px !important;
        background: #4F4552;
        .chartContainer__portfolio {
            margin-top: -40px;
            margin-bottom: -20px;
        }
    }

    .card-widget {
        border-radius: 8px;
        height: 620px;padding:20px !important;
    }
}
</style>
