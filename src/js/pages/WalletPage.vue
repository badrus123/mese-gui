<template>
<b-container fluid>
    <!-- <div class="page"> -->
        <div class="titleWallet">
            mese wallet
        </div>
        <!-- <div class="row mt-3"> -->
            <!-- <div class="col-7 m-auto pt-5 pb-5"> -->
        <b-row align-h="center">
            <b-col cols="12" md="8" class="searchBar">
                <search-group placeholder="Search topic here" />
            </b-col>
        </b-row>
            <!-- </div> -->
        <!-- </div> -->
        <b-row align-v="center">
            <b-col cols="12">
                <wallet-component small="big"></wallet-component>
            </b-col>
        </b-row>
        <wallet2-component></wallet2-component>
        <wallet-component small="small" class="mt-4"></wallet-component>
    <!-- </div> -->
</b-container>
</template>

<script>
import WalletComponent from "../components/wallet/WalletComponent";
import Wallet2Component from "../components/wallet/Wallet2Component";
export default {
    name: "WalletPage",
    components: { Wallet2Component, WalletComponent }
};
</script>

<style scoped>
.searchBar{
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.titleWallet {
    font-weight: 600;
    font-size: 30px;
    color: #ffffff;
    border-bottom: 1px solid #fff;
    line-height: 36px;
    letter-spacing: 3px;
    padding-bottom: 10px;
    text-transform: uppercase;
}
</style>
