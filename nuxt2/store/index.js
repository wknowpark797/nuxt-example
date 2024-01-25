export const state = () => ({
    posts: [],
})

export const getters = {

}

export const mutations = {
    addPost(state, payload) {
        state.posts.unshift(payload);
    },
    removePost(state, payload) {
        const index = state.posts.findIndex(value => value.id === payload.id);
        state.posts.splice(index, 1);
    }
}

// 비동기
export const actions = {
    add({ commit }, payload) {
        commit('addPost', payload);
    },
    remove({ commit }, payload) {
        commit('removePost', payload);
    }
}