import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pessoas: [
      {
        nome: 'Witerlland',
        sobrenome: 'Silva',
        email: 'witerlland@outlook.com',
        telefone: '(77) 9.8117-3302',
        pessoa_juridica: false,
        cpf: '861.425.355-97',
        cnpj: null
      }
    ]
  },
  mutations: {
      nova_pessoa(state, pessoa){
        state.pessoas.push(pessoa)
      },

      editar_pessoa(state, {id, pessoa}){
        state.pessoas[id] = pessoa
      },

      deletar_pessoa(state, id){
        state.pessoas.splice(id, 1)
      }
  },
  actions: {
    NOVA_PESSOA: function(context, pessoa){
      context.commit('nova_pessoa', pessoa)
    },

    EDITAR_PESSOA: function(context, {id, pessoa}){
      context.commit('editar_pessoa', {
        id,
        pessoa
      })
    },

    DELETAR_PESSOA: function(context, id){
      context.commit('deletar_pessoa', id)
    }
  },
  modules: {
  },
  getters: {
    pessoas: state => {
      return state.pessoas
    },

    pessoa: state => id => {
      return state.pessoas[id]
    }
  }
})
