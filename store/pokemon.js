export const state = () => ({
  catched: [],
})

export const mutations = {
  catch(state, pokemon) {
    state.catched.push(pokemon)
  },
  remove(state, pokemon) {
    state.catched.splice(state.list.indexOf(pokemon), 1)
  },
}
