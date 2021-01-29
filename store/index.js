import axios from 'axios'
import {API_ENDPOINT} from '@/models/constants/api'
import error from "@/layouts/error";


export const state = () => ({
  postsLoaded: [],
  loading: false,
  error: null
})

export const mutations = {
  setPosts (state, posts) {
    state.postsLoaded = posts
    state.loading = !state.loading
  },
  addPost (state, post) {
    state.postsLoaded.push(post)
  },
  editPost (state, post) {
    const postIndex = state.postsLoaded.findIndex(i =>
      i.id === post.id
    )
    state.postsLoaded[postIndex] = post
  },
  setError (state, error) {
    state.error = error
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

export const actions = {
  nuxtServerInit ({dispatch}) {
    return Promise.all([
      dispatch('loadPost')
    ]);
  },
  loadPost({commit}) {
    commit('setLoading', true)
    return axios.get(`${API_ENDPOINT}/posts.json`)
      .then(res => {
        // Добавление ID согласно объекту в Firebase
        const postsArray = []
        for (let key in res.data) {
          postsArray.push({...res.data[key], id: key})
        }
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => {
        let err = 'Error: Network Error'
        commit('setError', err)
      })
      .finally( () => {
        commit('setLoading', false)
      })
  },
  addPost ({commit, dispatch}, post) {
    return axios.post(`${API_ENDPOINT}/posts.json`, post)
      .then(res => {
        commit('addPost', {...post, id: res.data.name})
        dispatch('loadPost')
      })
      .catch(e => console.log(e))
  },
  deletePost ({dispatch}, id) {
    axios.delete(`${API_ENDPOINT}/posts/${id}.json`)
      .then(res => {
        dispatch('loadPost')
      })
  },
  editPost ({commit}, post) {
    return axios.put(`${API_ENDPOINT}/posts/${post.id}.json`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  },
  setLoading ({commit}, payload) {
    commit('setLoading', payload)
  }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  },
  getLoading (state) {
    return state.loading
  },
  getError (state) {
    return state.error
  }
}
