<template>
  <div class="p-3">
    <BackButton />
    <p v-if="$fetchState.pending">Fetching pokemon detail...</p>
    <p v-else-if="$fetchState.error">An error occurred :</p>
    <div v-else>
      <div class="flex justify-center items-center gap-5 my-3">
        <img
          class="shadow rounded-full"
          :src="currPokemon.sprites.front_default"
          alt=""
          @click="catchPokemon(currPokemon.forms[0].name)"
        />
        <h3 class="text-h3 font-semibold">
          {{ capitalizeFirstLetter(currPokemon.forms[0].name) }}
        </h3>
      </div>
      <p>{{ catchStatus }}</p>
      <div class="flex flex-col gap-3">
        <div class="bg-info-10 p-2 rounded-md">
          <p class="text-h6 font-semibold">Stats</p>
          <ul>
            <li v-for="(stat, index) in currPokemon.stats" :key="index">
              {{ stat.stat.name }} :
              {{ stat.base_stat }}
            </li>
          </ul>
        </div>
        <div class="bg-info-20 p-2 rounded-md">
          <p class="text-h6 font-semibold">Types</p>
          <ul>
            <li v-for="(type, index) in currPokemon.types" :key="index">
              {{ capitalizeFirstLetter(type.type.name) }}
            </li>
          </ul>
        </div>
        <div class="bg-info-20 p-2 rounded-md">
          <p class="text-h6 font-semibold">Moves</p>
          <ul>
            <li v-for="(move, index) in currPokemon.moves" :key="index">
              {{ capitalizeFirstLetter(move.move.name) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BackButton from '../components/BackButton.vue'
export default {
  components: { BackButton },
  data() {
    return {
      currPokemon: [],
      catchStatus: 'Click image to catch the pokemon!',
    }
  },
  async fetch() {
    await this.getPokemons()
  },
  methods: {
    async getPokemons() {
      const data = await this.$axios.get(
        `/pokemon/${this.$route.params.pokemon}`
      )
      this.currPokemon = data.data
    },
    capitalizeFirstLetter(str) {
      return str[0].toUpperCase() + str.slice(1).toLowerCase()
    },
    addPokemon(pokemon) {
      this.$store.commit('pokemon/catch', pokemon)
    },
    ...mapMutations({
      removeCatched(pokemon) {
        this.$store.commit('pokemon/remove', pokemon)
      },
    }),
    catchPokemon(pokemon) {
      this.catchStatus = 'catching...'
      setTimeout(() => {
        if (Math.round(Math.random()) === 0) {
          this.catchStatus = 'failed to catch'
        } else {
          this.addPokemon(pokemon)
          this.catchStatus = 'pokemon catched!'
        }
      }, 2000)
    },
  },
}
</script>
