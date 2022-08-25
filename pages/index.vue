<template>
  <div>
    <h5 class="flex justify-center font-bold text-h5">Pokemon List</h5>
    <div class="pokemon-container">
      <p class="ml-3">Total owned : {{ pokemon.length }}</p>
      <div
        v-for="(item, index) in pokemons"
        :key="index"
        class="rounded-md m-3 p-3 font-semibold bg-gray-50"
      >
        <NuxtLink :to="item.name[0].toLowerCase() + item.name.slice(1)">
          <p>{{ item.name }}</p>
        </NuxtLink>
      </div>
    </div>
    <ThePagination />
  </div>
</template>

<script>
import ThePagination from '../components/ThePagination.vue'
export default {
  name: 'IndexPage',
  components: {
    ThePagination,
  },
  data() {
    return {
      pokemons: [],
    }
  },
  async fetch() {
    await this.getPokemons()
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemon.catched
    },
  },
  methods: {
    async getPokemons() {
      const data = await this.$axios.get('/pokemon/?offset=20&limit=20')
      this.pokemons = data.data.results.map((pokemon) => ({
        name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
        url: pokemon.url,
      }))
    },
  },
}
</script>
