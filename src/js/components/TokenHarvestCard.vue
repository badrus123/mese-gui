<template>
    <div class="card" v-if="data">
        <div class="card-header bordered">
            <div class="float-left pt-2">
                <div class="card-title">{{title}}</div>
                <div class="card-subtitle" :class="{'pt-1 pb-2' : isMultiplier}">
                    <b-badge v-if="isMultiplier" variant="outline-info">{{ multiplierNumber }}x Multiplier</b-badge>
                    <span v-else>{{subTitle}}</span>
                </div>
            </div>
            <img :src="data.tokenImage" class="float-right">
            <div class="clearfix"></div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    EARNED:
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-12" v-for="(earned) in data.tokenEarned">
                            {{ earned }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    APR:
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-12" v-for="(apr) in data.tokenAPR">
                            {{ apr }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    TOKEN STAKED:
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-12" v-for="(staked) in data.tokenStaked">
                            {{ staked }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    LIQUIDITY:
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-12" v-for="(liquidity) in data.tokenLiquidity">
                            {{ liquidity }}
                        </div>
                    </div>
                </div>
            </div>
            <b-button variant="secondary" class="mt-4" block size="sm">HARVEST</b-button>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: ()=> {
                return ''
            }
        },

        subTitle: {
            type: String,
            default: ()=> {
                return ''
            }
        },

        isMultiplier: {
            type: Boolean,
            default: ()=> {
                return false
            }
        },

        multiplierNumber: {
            type: Number,
            default: ()=> {
                return 0
            }
        },

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

</style>
