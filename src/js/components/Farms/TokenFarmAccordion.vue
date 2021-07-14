<template>
    <div :class="['token-farms-accordion','token-farms-accordion-'+componentUUID]">
        <b-list-group>
            <template v-for="i in totalDummyData">
                <token-farm-accordion-row>
                    <token-farm-accordion-content/>
                </token-farm-accordion-row>
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
.token-farms-accordion {
    .list-group {
        background: rgba(32, 32, 32, 1);
    }
}
</style>
