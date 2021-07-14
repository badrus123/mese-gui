<template>
    <modal name="ModalConnectWallet" :hide-footer="true">
        <div class="ModalConnectWallet__container">
            <div class="ModalConnectWallet__container-header">
                <div class="img-wallet-connect-icon">
                    <img src="/images/ConnecWallet-Icon.svg">
                </div>
                <div class="title">
                    connect a wallet
                </div>
            </div>
            <div class="ModalConnectWallet__container-content">
                <div class="input-group">
                    <input type="text" id="wallet-name" value="MESE Wallet" class="form-control" disabled>
                    <b-tooltip target="install">{{ tooltipText }}</b-tooltip>
                    <b-button variant="outline-white" @click="connectToWallet" v-if="wallet">
                        Connect
                    </b-button>                    
                    <b-button variant="outline-white" @click="installWallet" id="install" v-else>
                        Install
                    </b-button>
                </div>
                <div class="mt-4 mb-4 text-center">
                    <span class="or">OR</span>
                </div>
                <div>
                    <label class="arcc-account-label"><small>Connect your ARCC.One account to access member benefits</small></label>
                    <div class="input-group">
                        <p class="form-control">
                            <img src="/images/Arcc-Icon.svg">
                        </p>
                        <b-button variant="outline-white">Connect</b-button>
                    </div>
                </div>
                <div class="mt-3 text-center">
                    <router-link to="/help" class="how-to">
                        <span style="margin-right: 10px;">NEED HELP</span><need-help-icon :width="20" :height="20" color="#FFF"/>
                    </router-link>
                </div>
            </div>
        </div>
    </modal>
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
        hideFooter: {
            type: Boolean,
            default: ()=> {
                return false
            }
        },
        wallet: {
            type: Boolean,
            default: false
        },
        walletConnected: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            componentUUID: this.generateComponentUUID(),
            selectedWallet: '',
            walletName: 'MESE Wallet',
            walletMsg: 'is not installed.',
            installWalletLink: 'https://chrome.google.com/webstore/',
            tooltipText: 'MESE Wallet is a blockchain wallet that makes it easy to use Algorand-based applications on the web.'
        }
    },
    methods: {
        checkWalletStatus() {
            if (typeof MESE !== 'undefined') {
                return true;
            } else {
                return false;
            }
        },
        connectToWallet() {
            if (this.wallet) {
                MESE.connect({name: 'MESE Dex' , ledger: 'TestNet'})
                .then(() => {
                    if (this.$store.state.selectedAccount == '') {
                        // Get user wallet accounts
                        this.$store.dispatch('getWalletAccounts');
                    } else {
                        localStorage.setItem("accountAddress", this.$store.state.selectedAccount);
                        this.$store.commit('SET_IS_AUTH', true);
                        this.$store.commit('SET_WALLET', 'MESE');
                    }
                })
                .catch((error) => {
                    if (error.message.startsWith("[RequestErrors.NotAuthorized]")) {
                        console.log("No accounts in the wallet.")
                    }
                })
            }            
        },
        installWallet() {
            window.open(this.installWalletLink, "MESE Wallet", '_blank');
        }
        
    },
    mounted() {
        
    }
}
</script>

<style lang="scss">
.ModalConnectWallet__container {
    margin-top: -20px;
    padding: 20px;
    .ModalConnectWallet__container-header {
        text-align: center;
        border-bottom: 2px solid #FFF;
        padding-bottom: 20px;

        .title {
            margin-top: 20px;
            font-weight: 600;
            font-size: 26px;
            line-height: 16px;

            letter-spacing: 3px;
            text-transform: uppercase;

            color: #FFFFFF;
        }
    }

    .ModalConnectWallet__container-content {
        padding-bottom: 20px;
        padding-top: 20px;

        .input-group {
            background: #5A4F5D;
            border-radius: 10px;
            padding:10px;
        }

        .form-control {
            background: transparent;
            color: #FFF;
            border: none;
        }

        .or {
            font-weight: 600;
            font-size: 20px;
            line-height: 16px;
            letter-spacing: 3px;
            color: #FFFFFF;
        }

        .algo-wallet-label {
            a, small {
                color: #EFA0A9;
            }
        }

        .arcc-account-label {
            font-weight: 500;
            font-size: 14px;
            line-height: 120%;
            text-align: center;
            color: #FFFFFF;
        }

        .how-to {
            font-weight: bold;
            font-size: 16px;
            text-align: center;
            color: #FFFFFF;
        }

        .wallet-connected {
            cursor: auto;
        }
    }

    .img-wallet-connect-icon {
        img {
            margin-top: -30px;
        }
    }
}
</style>
