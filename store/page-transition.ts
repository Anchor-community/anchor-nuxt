interface State {
  isInPageTransition: boolean
}

export const state = (): State => ({
  isInPageTransition: false,
})

export const getters = {
  isInPageTransition: (state: State) => state.isInPageTransition,
}

export const mutations = {
  startPageTransition: (state: State) => {
    state.isInPageTransition = true
  },
  finishPageTransition: (state: State) => {
    state.isInPageTransition = false
  },
}
