import { createStore } from 'vuex';
import sample from './sample'

const store = createStore({
  modules: {
    sample
  }
})

export default store;