<template>
  <div class="container mx-auto">
    <div class="mb-10">
      <p class="text-4xl mb-3">Використовуючи файл quote.json створити кнопку яка геренує випадкові цитати з цього файлу</p>

    </div>
    <div>
      <button class="bg-green-700 p-3 rounded hover:bg-green-800 transition-all  mb-8" @click="getRandomQuote">Get a new quote</button>
      <p class="text-5xl">{{ quote }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import quotes from "../assets/quotes.json";
import { ref,onMounted  } from 'vue'
let quote = ref("");
const getRandomQuote = () => {
  quote.value = quotes[Math.floor(Math.random() * quotes.length)]
}
onMounted(() => {
  getRandomQuote()
})
</script>
<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
