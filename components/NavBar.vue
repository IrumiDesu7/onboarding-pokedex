<template>
  <nav>
    <ul class="flex p-4 gap-3 justify-end font-semibold">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/my-pokemon">My Pokemon List</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
