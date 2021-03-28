import { createStore } from 'vuex';
import account from './account'

const store = createStore({
  modules: {
    account
  }
})

export default store;