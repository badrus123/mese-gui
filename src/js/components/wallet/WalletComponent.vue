<template>
    <b-container fluid>
        <!-- <div class="div-flex"> -->
            <b-row  align-h="between" align-v="center">
                 <b-col cols="12" class="d-md-none">
                    <b-img src="/images/mobile.png" fluid-grow></b-img>
                </b-col>
                <b-col cols="12" sm="6" md="8">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p class="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis mollit velit esse cillum anim id est laborum.</p>
                    <b-button block size="sm" variant="primary" class="button-install mt-4">install plug-in</b-button>
                </b-col>
                <b-col cols="12" sm="6" md="4" class="d-none d-md-block">
                    <b-img src="/images/mobile.png" fluid-grow></b-img>
                </b-col>
            </b-row>
        <!-- </div> -->
    </b-container>
</template>

<script>
export default {
    name: "WalletComponent",
    props:{
        small:String
    }
}
</script>

<style scoped>


.button-install{
    width: 215px;
    height: 52px;
}
@media screen and (min-width: 4001px) {
    p{
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
        font-weight: 900;
        font-size: 75px;
        line-height: 60px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    .title2{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 50px;
        line-height: 50px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    .images{
        width: 100%;
    }
    .div-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
    }
}
@media screen and (min-width: 2501px) and (max-width: 4000px) {
    p{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 35px;
        letter-spacing: 5px;
        color: #FFFFFF;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 95px;
        line-height: 60px;
        letter-spacing: 8px;
        color: #FFFFFF;
    }
    .title2{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 55px;
        line-height: 50px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    .images{
        width: 70%;
    }
    .div-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
    }
    .button-install{
        width: 215px;
        height: 52px;
        font-size: large;
    }
}
@media screen and (min-width: 1600px) and (max-width: 2500px) {
    .div-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 45px;
        line-height: 60px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    .title2{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 50px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    p{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
}
@media screen and (max-width: 1599px) {
    .div-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 45px;
        line-height: 60px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    .title2{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 50px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    p{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
}
@media screen and (max-width: 700px) {
    .div-flex{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 45px;
        line-height: 60px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    .title2{
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 50px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    p{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3px;
        color: #FFFFFF;
    }
    .images{
        width: 100%;
        margin-top: 3rem;
    }
}
</style>
