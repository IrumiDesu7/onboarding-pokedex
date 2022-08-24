<template>
  <div>
    <h5 class="flex justify-center font-bold text-h5">Pokemon List</h5>
    <div class="pokemon-container">
      <div
        v-for="(pokemon, index) in pokemons"
        :key="index"
        class="shadow rounded-md m-3 p-3 font-semibold bg-gray-50"
      >
        <NuxtLink :to="pokemon.name[0].toLowerCase() + pokemon.name.slice(1)">
          <p>{{ pokemon.name }}</p>
        </NuxtLink>
        <p>Total owned : 0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      pokemons: [],
    }
  },
  async fetch() {
    await this.getPokemons()
  },
  methods: {
    async getPokemons() {
      const data = await this.$axios.get('/pokemon')
      this.pokemons = data.data.results.map((pokemon) => ({
        name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
        url: pokemon.url,
      }))
    },
  },
}
</script>

<style>
.shadow {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
