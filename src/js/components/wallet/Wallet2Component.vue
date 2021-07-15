<template>
    <b-container fluid class="my-5">
        <h2>Lorem ipsum</h2>
        <b-row class="mt-5" align-h="between">
            <b-col md="6"  sm="12" v-for="item in items" :key="item" >
                <div v-if="item % 2 === 0" >
                    <span>Lorem ipsum</span>
                    <p class="desc">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis
                    </p>
                    <b-img src="/images/Placeholder.png" fluid-grow></b-img>
                </div>
                <div v-if="item % 2 === 1">
                    <b-img src="/images/Placeholder.png" fluid-grow></b-img>
                    <span class="title">Lorem ipsum</span>
                    <p class="desc">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis
                    </p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "Wallet2Component",
    data() {
        return {
            items: [1, 2, 3, 4]
        };
    }
};
</script>

<style scoped>
.root-title {
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 2em;
    color: #ffffff;
}
.title {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 1.5em;
    color: #ffffff;
    margin-bottom: 1vw;
    margin-top: 0.25vw;
}
.desc {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    max-width: 50%;
    color: #ffffff;
}
</style>
