<template>
  <div class="container mx-auto">
    <p class="text-5xl mb-4">У проєкті підключено бібліотеку стилів Tailwind, можна використовувати її.</p>
    <p class="text-5xl">Завдання знаходяться на сторінках
      <router-link class="border-b hover:border-b-2 transition-all" to="/about">About</router-link>
      та
      <router-link class="border-b hover:border-b-2 transition-all" to="/quote">Quote</router-link>
      .
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>

</style>
