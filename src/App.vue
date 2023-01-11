<template>
  <div class="container mb-8">

    <router-link
        class="mr-7 text-5xl hover:text-black transition"
        to="/"
        active-class="border-b"
    >Home</router-link
    >
    <router-link
        class="mr-7 text-5xl hover:text-black transition"
        to="/about"
        active-class="border-b"
    >About</router-link
    >
    <router-link
        class="text-5xl hover:text-black transition"
        to="/quote"
        active-class="border-b"
    >Quote</router-link
    >
  </div>
  <RouterView />
</template>
<style scoped>
</style>
