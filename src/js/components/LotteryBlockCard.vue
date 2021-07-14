<template>
    <div class="card lottery-block-card" v-if="data">
        <div class="card-header bordered">
            <div class="float-right ticket-code">
                ticket #12942
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="card-body">
            <div class="token-won">
                token won
            </div>
            <div class="token-won-number">
                10,284 MeseX
            </div>
            <div class="winning-numbers-title">
                WINNING NUMBERS
            </div>
            <div class="winning-numbers-block-container">
                <div class="winning-numbers-block disabled">1</div>
                <div class="winning-numbers-block">2</div>
                <div class="winning-numbers-block disabled">20</div>
                <div class="winning-numbers-block">13</div>
                <div class="winning-numbers-block disabled">14</div>
                <div class="winning-numbers-block">15</div>
                <div class="clearfix"></div>
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
.lottery-block-card {
    padding: 1.3rem .9rem !important;

    .card-body {
        border-bottom: 1px solid #FFF;
    }

    .ticket-code {
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.03em;
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
    .winning-numbers-title {
        margin-top: 25px;
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
            width: 29px;
            height: 29px;
            background: rgba(152, 135, 156, 0.5);
            border: 2px solid #98879C;
            border-radius: 3px;
            padding-top: 5px;
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
}
</style>
