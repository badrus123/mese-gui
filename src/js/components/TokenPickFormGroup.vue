<template>
    <div class="token-picker-form-group">
        <div class="token-picker-form-group__header">
            <div class="m-auto" style="width: 450px;">
                <div class="text-right">
                    <div class="token-picker-form-group__date text-right">
                        {{ticketDate}}
                    </div>
                    <div class="token-picker-form-group__ticket-code text-right mt-2">
                        TICKET #{{ticketCode}}
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="token-picker-form-group__container mt-3">
            <div class="token-picker-form-group__result">
                <div v-for="i in 6" class="each">
                    {{ value[i-1] }}
                </div>
            </div>
        </div>
        <div v-if="showButton" class="token-picker-form-group__buttons mt-2">
            <b-button size="lg" class="mx-2" @click="quickPick()" variant="primary" style="width: 220px;">quick pick</b-button>
            <b-button size="lg" v-if="state === 'DEFAULT'" @click="state = 'PICK_NUMBER'" class="mx-2" variant="outline-white" style="width: 220px;">pick numbers</b-button>
            <b-button size="lg" v-else-if="state === 'PICK_NUMBER'" @click="clearPick()" class="mx-2" variant="outline-white" style="width: 220px;">clear picks</b-button>
        </div>
        <div class="token-picker-form-group__container mt-4" v-if="state === 'PICK_NUMBER'">
            <div class="token-picker-form-group__pick-number">
                <div class="token-picker-form-group__pick-number__container">
                    <template v-for="i in 49" >
                        <div class="each" :class="{'picked' : selectedNumber.includes(i)}" @click="pick(i)">
                            {{i}}
                        </div>
                    </template>
                    <b-button size="lg" class="mx-3 mt-3" @click="confirmPick" block variant="primary">confirm pick</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {},

        ticketCode: {
            type: String,
            default: ()=> {
                return ''
            }
        },

        ticketDate: {
            type: String,
            default: ()=> {
                return ''
            }
        },
    },
    watch: {
        value(val) {
            this.selectedNumber = val || []

            if(this.state === 'DEFAULT') {
                if(val && val.length === 6)
                    this.showButton = false
                else
                    this.showButton = true
            }
        }
    },
    data() {
        let self = this

        return {
            state: 'DEFAULT',
            selectedNumber: self.value || [],
            showButton: true,
            componentUUID: self.generateComponentUUID()
        }
    },
    methods: {
        handleInput () {
            let returnVal = this.selectedNumber
            this.$emit('input', returnVal)
        },

        clearPick() {
            this.selectedNumber = []
            this.$emit('input', this.selectedNumber)
        },

        pick(number) {
            this.selectedNumber.push(number)
            this.$emit('input', this.selectedNumber)
        },

        quickPick() {
            this.selectedNumber = []

            for(let i = 1;i<=6;i++) {
                this.selectedNumber.push(this.getRandomInt(1,49))
            }

            this.$emit('input', this.selectedNumber)
        },

        confirmPick() {
            if(this.selectedNumber && this.selectedNumber.length === 6)
                this.showButton = false
            else
                this.showButton = true

            this.state = 'DEFAULT'
        }
    },
    mounted(){
        if(this.value && this.value.length === 6)
            this.showButton = false
    }
}
</script>

<style lang="scss">
.token-picker-form-group {
    background: #202020;
    border-radius: 4px;
    padding:25px 30px;

    .token-picker-form-group__header {
        font-weight: 900;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FFFFFF;

        .token-picker-form-group__date {
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.015em;
            text-transform: uppercase;
            color: #CECECE;
        }
        .token-picker-form-group__ticket-code {
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.015em;
            text-transform: uppercase;
            color: #CECECE;
        }
    }
    .token-picker-form-group__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .token-picker-form-group__result {
        display: flex;
        align-items: center;
        justify-content: center;
        .each {
            width: 67px;
            height: 67px;
            padding: 18px;
            text-align: center;
            background: rgba(152, 135, 156, 0.5);
            border: 2px solid #98879C;
            border-radius: 5px;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 10px;
            font-weight: 900;
            font-size: 20px;
            letter-spacing: 0.015em;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }

    .token-picker-form-group__pick-number {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .token-picker-form-group__pick-number__container {
            width: 450px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
        }
        .each {
            width: 50px;
            height: 50px;
            padding: 8px;
            text-align: center;
            background: rgba(152, 135, 156, 0.5);
            border: 2px solid #98879C;
            border-radius: 5px;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 10px;
            font-weight: 900;
            font-size: 20px;
            letter-spacing: 0.015em;
            text-transform: uppercase;
            color: #FFFFFF;
            cursor: pointer;

            &.picked {
                background: rgba(103, 103, 103, 0.5) !important;
                border: 2px solid #676767 !important;
                color: #676767 !important;
            }
        }
        .break {
            flex-basis: 100%;
            height: 0;
        }
    }
}
</style>
