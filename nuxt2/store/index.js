export const state = () => ({
    counter: 0
})

export const getters = {
    getCounter(state) {
        return state.counter
    }
}

export const mutations = {
    increment(state) {
        state.counter++
    }
}

// 비동기
export const actions = {
    
}