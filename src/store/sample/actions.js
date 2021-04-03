import axios from 'axios';

export default {
    changeLanguage(store, language) {
        store.commit('changeLanguage', language);
    },
    setUserInfo(store, payload) {
        axios.get('/user/'+payload)
            .then(res => {
                store.commit('setUserInfo', res.data);
            })
    }
}


