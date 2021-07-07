import mutations from './mutations'
import state from './state'
import getters from './getters'
//     actions不能是大写
import actions from './actions'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  state,
  getters,
  actions,
})
