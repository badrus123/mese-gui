<template>
    <div>
        <b-navbar id="LayoutHeader">
            <b-button class="toggle-btn-sidebar" @click="toggleMenu" type="submit">
                <img :src="$store.state.menuVisibility === 'VISIBLE' ? '/images/Hamburger-Menu-Collapse.svg' : '/images/Hamburger-Menu.svg'"/>
            </b-button>

            <div class="flex">
                <b-navbar-brand href="#">
                    <img src="/images/MESE-DEX-17-logo.svg"/>
                </b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                    <b-button
                        v-if="!$store.state.isAuth"
                        size="sm"
                        @click="$bvModal.show('ModalConnectWallet');"
                        variant="primary"
                        class="connect-wallet-btn"
                        type="submit"
                    >
                        Connect Wallet
                    </b-button>
                    <b-dropdown v-else-if="$store.state.isAuth" right class="wallet-dropdown custom-dropdown" size="sm" variant="primary" toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                            <img :src="'images/Mese-Logo.svg'" :alt="walletName" class="wallet-logo" />
                            <span>Account: </span>
                            <span>{{ selectedAddressFormatted }}</span>
                        </template>
                        <div class="wallet-dropdown-content px-4 py-3">
                            <div class="selected-account px-3 py-3" v-if="walletAccounts.length > 0">
                                <div><strong>Selected Account</strong></div>
                                <div class="mt-1 account">{{ selectedAccountAddress }}</div>
                            </div>
                            <div v-else>
                                <span class="no-account">You do not have any accounts in your wallet. Create or import an account to use the wallet.</span>
                            </div>
                            <div class="box mt-4">
                                <div v-if="walletAccounts.length > 1">
                                    <div class="title">
                                        Select Another Account
                                    </div>
                                    <div class="content mt-3 mb-5">
                                        <b-button
                                            size="sm"
                                            class="mb-3"
                                            variant="outline-white" block
                                            v-for="(account, index) in otherAccounts" :key="index"
                                            @click="selectAccount(account.address)"
                                        >
                                            {{ shorten(account.address, 24) }}
                                        </b-button>
                                    </div>
                                </div>
                                <hr>
                                <div class="mt-3 text-center">
                                    <b-button @click="logout()" variant="link" class="btn-logout">
                                        <span class="mr-2">LOG OUT</span> <logout-icon color="#FFF"/>
                                    </b-button>
                                </div>
                            </div>
                        </div>
                    </b-dropdown>
                </b-navbar-nav>
            </div>
        </b-navbar>
        <modal-connect-wallet
            v-if="!isAuth"
            :wallet="wallet"
            :walletConnected="walletConnected"
        />
        <admin-sidebar></admin-sidebar>
        <div class="overlay" @click="$store.state.menuVisibility = 'COLLAPSED'" :class="{'active' : $store.state.menuVisibility === 'VISIBLE'}"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data : function () {
        return {
            auth: false,
            notification : [
                {id: 1, content : "Welcome"}
            ],
            wallet: false,
            walletConnected: false,
            walletName: '',
            walletAccounts: [],
            selectedAccountAddress: ''
        }
    },
    mounted() {
        let self = this
        document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode === 27) {
                if(self.$store.state.menuVisibility === 'VISIBLE')
                    self.$store.commit('SET_MENU_VISIBILITY','COLLAPSED')
            }
        };
        // Load Wallet
        this.connectToWallet()
    },
    methods : {
        logout() {
            this.auth = false;
            localStorage.removeItem('accountAddress');
            localStorage.clear();
            delete axios.defaults.headers.common['Authorization'];
            this.$store.commit('SET_IS_AUTH', false)
            return;
        },
        toggleMenu() {
            if(this.$store.state.menuVisibility === 'COLLAPSED')
                this.$store.commit('SET_MENU_VISIBILITY','VISIBLE')
            else
                this.$store.commit('SET_MENU_VISIBILITY','COLLAPSED')
        },
        connectToWallet() {
            // Load wallet
            this.$store.dispatch('checkWalletInstalled').then(response => {
                if (response) {
                    if (!this.walletConnected) {
                        // Get user wallet accounts
                        this.$store.dispatch('getWalletAccounts').then(() =>
                        {
                            this.walletName = this.$store.state.selectedWallet;
                            if (this.$store.state.walletAccounts.length > 0) {
                                this.walletAccounts = this.$store.state.walletAccounts;
                                this.selectedAccountAddress = localStorage.getItem("accountAddress");

                                // Load Algo SDK
                                // we should only connect when we need to retrieve information
                                this.getAccountBalance()
                            }
                            this.walletConnected = true
                        })
                    }
                } else {
                    console.log("Wallet not installed")
                }
                // Set wallet available
                this.wallet = true

            }).catch((e) => {
                console.error("Error checking if wallet is installed", e);
            });
        },
        selectAccount(address) {
            localStorage.setItem("accountAddress", address);
            this.$store.commit('SET_WALLET_ACCOUNT', address);
        },
        shorten(str,n) {
            if (str && n){
                if (str.length > n) {
                    let separator = ' ';
                    let wordcount = str.split(' ').length
                    if (str.length <= n) return str;

                    let newStr = '';
                    if (wordcount > 1) {
                        newStr = str.substr(0, str.lastIndexOf(separator, n)) + ' ...';
                    } else {
                        newStr = str.substring(0, (n-3))+' ...'
                    }
                    return newStr
                } else {
                    return (str.match(RegExp(".{"+n+"}\\S*"))||[str])[0];
                }
            }
        },
        shortenMiddle(str, prefixN, suffixN) {
            var newStr = '';
            if (str && prefixN && suffixN) {
                if (str.length > prefixN && str.length > suffixN) {
                    newStr = str.substring(0, prefixN) + ' ...' + str.substr(str.length - suffixN);
                    return newStr
                } else {
                    return (str.match(RegExp(".{"+n+"}\\S*"))||[str])[0];
                }
            }
        }
    },
    computed: {
        ...mapState(['isAuth', 'walletLoaded', 'selectedAccount', 'walletLoaded']),
        selectedAccount() {
            return this.$store.state.selectedAccount
        },
        otherAccounts() {
            if (this.walletAccounts.length > 1) {
                let filtered = []
                filtered = this.walletAccounts.filter(account => account.address != this.selectedAccount)
                return filtered;
            } else {
                return null
            }
        },
        selectedAddressFormatted() {
            if (this.selectedAccountAddress !== '') {
                return this.shortenMiddle(this.selectedAccountAddress, 6, 4);
            }
        }
    },
    watch: {
        isAuth() {
            // Update wallet name
            this.walletName = this.$store.state.selectedWallet;
        },
        walletLoaded(newVal) {
            if (newVal === false) {
                let that = this
                setTimeout(function() {
                    that.connectToWallet()
                }, 100);
            }
        },
        selectedAccount() {
            this.connectToWallet()
            this.selectedAccountAddress = localStorage.getItem("accountAddress");
            this.walletAccounts = this.$store.state.walletAccounts;
        }
    }
}
</script>

<style lang="scss">
#LayoutHeader {
    padding:5px 10px;
    color: #FFF;
    z-index: 31;
    position: fixed;
    width: 100%;
    background: #15151A;
    box-shadow: 0px 2px 6px rgba(166, 166, 166, 0.25);
    border-bottom: 1px solid #FFF;

    .connect-wallet-btn {
        border:none;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: bold;
    }

    .wallet-dropdown {
        .dropdown-toggle {
            border:none;
            border-radius: 5px;
            padding: 10px 20px;
            font-weight: bold;

            .wallet-logo {
                height: 23px;
                margin-top: -4px;
                padding-right: 20px;
            }
        }

        .wallet-dropdown-content {
            width: 350px;
            .selected-account {
                background: #5A4F5D;
                border-radius: 4px;

                font-size: 12px;
                line-height: 16px;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: #FFFFFF;

                .account {
                    overflow-wrap: anywhere;
                }
            }

            .btn-logout {
                color: #FFF !important;
                font-weight: 600;
                font-size: 12px !important;
                line-height: 16px;
                letter-spacing: 1.5px;

                span {
                    text-decoration-line: underline;
                }
            }

            .box {
                .title {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }
            }

            .no-account {
                font-size: 13px;
            }
        }
    }

    .toggle-btn-sidebar {
        border:none;
        background: transparent;
        position: absolute;
        color: #FFF;
        border-radius: 5px;
        padding: 5px 13px;
        font-weight: bold;
        line-height: 0;

        img {
            width: 30px;
        }
    }
}


.overlay {
    display: none;
    position: fixed;
    /* full screen */
    width: 100vw;
    height: 100vh;
    /* transparent black */
    background: rgba(0, 0, 0, 0.7);
    /* middle layer, i.e. appears below the sidebar */
    z-index: 20;
    opacity: 0;
    /* animate the transition */
    transition: all 0.5s ease-in-out;
}
/* display .overlay when it has the .active class */
.overlay.active {
    display: block;
    opacity: 1;
}
.flex{
    display: flex;
    margin: 0 auto;
    width: 80%;
    justify-content: space-between;
}

</style>
