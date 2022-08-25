<template>
  <div>
    <h1 class="text-md ml-3">This is my pokemon list</h1>
    <div
      v-for="(owned, index) in pokemon"
      :key="index"
      class="rounded-md m-3 p-3 font-semibold bg-gray-50"
    >
      <NuxtLink :to="owned">
        <p>{{ owned[0].toUpperCase() + owned.slice(1) }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pokemon() {
      return this.$store.state.pokemon.catched
    },
  },
}
</script>
