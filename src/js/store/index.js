import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state : {
        menuVisibility: 'COLLAPSED',
        isAuth: null,
        wallets: [],
        walletInstalled: null,
        selectedWallet: '',
        walletAccounts: [],
        selectedAccount: '',
        walletLoaded: false
    },
    mutations : {
        SET_MENU_VISIBILITY (state, value) {
            state.menuVisibility = value
        },
        SET_IS_AUTH (state, value) {
            state.isAuth = value
        },
        SET_WALLET_INSTALLED (state, value) {
            state.walletInstalled = value
        },
        SET_WALLET (state, value) {
            state.selectedWallet = value
        },
        SET_WALLET_ACCOUNTS (state, value) {
            state.walletAccounts = value
        },
        SET_WALLET_ACCOUNT (state, value) {
            state.selectedAccount = value
        },
        SET_WALLET_LOADED (state, value) {
            state.walletLoaded = value
        },
        SET_WALLET_BALANCE(state, value) {
            state.wallets.push(value)
        }
    },
    modules: {

    },
    actions: {
        checkWalletInstalled(context) {
            return new Promise((resolve, reject) => {
                if (typeof MESE !== 'undefined') {
                    context.commit('SET_WALLET_INSTALLED', true)
                    resolve(true)
                } else {
                    context.commit('SET_WALLET_INSTALLED', false)
                    reject(false)
                }
            })
        },
        getWalletAccounts(context) {
            return new Promise((resolve, reject) => {
                MESE.accounts({
                    ledger: 'TestNet'
                })
                .then((d) => {
                    resolve(true)
                    context.commit('SET_IS_AUTH', true)
                    context.commit('SET_WALLET', 'MESE');
                    context.commit('SET_WALLET_ACCOUNTS', d);

                    // Select wallet account
                    if (d.length > 0) {
                        // Check if account already exist in browser storage
                        if (!localStorage.getItem("accountAddress")) {
                            // If account not found in storage, set first account from wallet
                            localStorage.setItem("accountAddress", d[0].address);
                            // Save account in vuex store
                            context.commit('SET_WALLET_ACCOUNT', d[0].address);
                        } else {
                            // If account found, save it in vuex store from browser storage
                            context.commit('SET_WALLET_ACCOUNT', localStorage.getItem("accountAddress"));
                        }
                    }
                }).catch(() => {
                    reject(false)
                    context.commit('SET_IS_AUTH', false)
                    context.commit('SET_WALLET', '');
                })
            })
        },
    }
})
