import { createStore } from 'vuex';
import { state } from './modules/usuarioState';
import { mutations } from './modules/usuarioMutations'
import { actions } from './modules/usuarioActions';
import { getters } from './modules/usuarioGetters';

export default createStore({
  state,
  mutations,
  actions,
  getters,
});


