<template>
    <div>
        <span class="root-title">Lorem ipsum</span>
        <div v-for="item in items" :key="item" class="mt-4">
            <div class="div-flex" v-if="item % 2 ===1">
                <img src="/images/Placeholder.png" class="mr-5 images">
                <div class="mt-3 ml-5">
                    <span class="title">Lorem ipsum</span>
                    <p class="desc mt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                </div>
            </div>
            <div class="div-flex" v-else>
                <div class="mt-3 mr-5">
                    <span class="title">Lorem ipsum</span>
                    <p class="desc mt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                </div>
                <img src="/images/Placeholder.png" class="image-right ml-5 images">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Wallet2Component",
    data() {
        return {
            items: [1, 2, 3, 4]
        }
    },
}
</script>

<style scoped>
.root-title{
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 45px;
    line-height: 60px;
    letter-spacing: 3px;
    color: #FFFFFF;
}
.div-flex {
    display: flex;
}
.title{
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 3px;
    color: #FFFFFF;
}
.desc{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3px;
    max-width: 350px;
    color: #FFFFFF;
}
.image-right{
   margin-top: -15rem;
}
@media screen and (min-width: 4001px) {
    .desc{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 24px;
        letter-spacing: 3px;

        color: #FFFFFF;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 30px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
}
@media screen and (min-width: 2501px) and (max-width: 4000px) {
    .desc{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 24px;
        letter-spacing: 3px;

        color: #FFFFFF;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 30px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
}
@media screen and (min-width: 1600px) and (max-width: 2500px) {
    .desc{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 24px;
        letter-spacing: 3px;

        color: #FFFFFF;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 30px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
}
@media screen and (max-width: 1599px) {
    .desc{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3px;

        color: #FFFFFF;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
}
@media screen and (max-width: 700px) {
    .desc{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3px;

        color: #FFFFFF;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    .div-flex {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .image-right{
        margin-top: 0;
    }
}
</style>
