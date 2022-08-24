<template>
  <div class="p-3">
    <p v-if="$fetchState.pending">Fetching pokemon detail...</p>
    <p v-else-if="$fetchState.error">An error occurred :</p>
    <div v-else>
      <div class="flex justify-center items-center gap-5">
        <img
          class="shadow rounded-full"
          :src="currPokemon.sprites.front_default"
          alt=""
        />
        <h3 class="text-h3 font-semibold">
          {{ capitalizeFirstLetter(currPokemon.forms[0].name) }}
        </h3>
      </div>
      <p class="text-h6 font-semibold">Moves :</p>
      <ul>
        <li v-for="(move, index) in currPokemon.moves" :key="index">
          {{ move.move.name }}
        </li>
      </ul>
      <p class="text-h6 font-semibold">Types :</p>
      <ul>
        <li v-for="(type, index) in currPokemon.types" :key="index">
          {{ type.type.name }}
        </li>
      </ul>
    </div>
    <cm-button variant="gray"
      ><NuxtLink to="/">Back to home</NuxtLink></cm-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      currPokemon: {},
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
      this.currPokemon = await data.data
    },
    capitalizeFirstLetter(str) {
      return str[0].toUpperCase() + str.slice(1).toLowerCase()
    },
  },
}
</script>
