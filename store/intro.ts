interface State {
  isIntroShown: boolean
}

export const state = (): State => ({
  isIntroShown: false,
})

export const getters = {
  isIntroShown: (state: State) => state.isIntroShown,
}

export const mutations = {
  introFinished: (state: State) => {
    state.isIntroShown = true
  },
}
