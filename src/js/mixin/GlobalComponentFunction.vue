<script>
export default {
    methods: {
        generateComponentUUID(length = 10) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return 'component-' + result;
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        getAccountBalance() {
            // ## Check backend status ##
            // ## called from AdminNavbar
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/web/connect`)
                .then(response => {
                    if (response.status == 200) {
                        // Get wallet balances
                        this.$store.state.walletAccounts.forEach(account => {
                            axios.get(`${process.env.VUE_APP_BACKEND_URL}/web/portfolio/${account.address}`)
                                .then(response => {
                                    if (response.status == 200) {
                                        // Store wallet info
                                        var wallet_balance = {}
                                        wallet_balance[account.address] = response.data
                                        this.$store.commit("SET_WALLET_BALANCE", wallet_balance)

                                        // Set wallet as loaded
                                        this.$store.commit('SET_WALLET_LOADED', true)
                                    }
                                })
                                .catch(error => console.log(`Error ${error}`))
                        });
                    }
                })
                .catch(error => console.log(`Error ${error}`))
        }
    }
};
</script>
