import axios from 'axios';

export default {
    deposit(store, payload) {
        store.commit('deposit', payload);
    },
    withdraw(store, payload) {
        axios.get('/check/owner')
            .then(res => {
                store.commit('withdraw', payload);
            })
    }
}


