import Vue from 'vue'
import Vuex from 'vuex'
import bookInfoStore from './bookInfoStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        bookInfoStore
    }
})
