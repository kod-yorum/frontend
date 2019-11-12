import Vue from 'vue'
import Vuex from 'vuex'

import global from '@/store/global'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    global
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
