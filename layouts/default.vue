<template>
  <div class="h-screen">
    <NavBar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>
