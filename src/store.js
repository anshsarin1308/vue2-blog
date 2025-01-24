import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    blogs: [],
    search: ''
  },
  mutations: {
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setSearch(state, search) {
      state.search = search;
    }
  },
  actions: {
    fetchBlogs({ commit }) {
      Vue.http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        commit('setBlogs', response.body.slice(0, 10)); 
      });
    },
    updateSearch({ commit }, search) {
      commit('setSearch', search);
    }
  },
  getters: {
    filteredBlogs: state => {
      return state.blogs.filter(blog => blog.title.match(state.search));
    },
    getSearch: state => state.search
  }
});
