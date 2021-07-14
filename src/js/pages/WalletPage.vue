<template>
    <div class="page">
        <div class="titleWallet">
            mese wallet
        </div>
        <div class="row mt-3">
            <div class="col-7 m-auto pt-5 pb-5">
                <search-group placeholder="Search topic here"/>
            </div>
        </div>
        <wallet-component small="big"></wallet-component>
        <wallet2-component></wallet2-component>
        <wallet-component small="small" class="mt-4"></wallet-component>

    </div>
</template>

<script>
import WalletComponent from "../components/wallet/WalletComponent";
import Wallet2Component from "../components/wallet/Wallet2Component";
export default {
    name: "WalletPage",
    components: {Wallet2Component, WalletComponent}
}
</script>

<style scoped>
    .titleWallet {
        font-weight: 600;
        font-size: 30px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFF;
        line-height: 36px;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }
</style>
