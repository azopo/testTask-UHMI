<template>
  <div class="container mx-auto ">
    <div class="mb-10">
      <p class="text-4xl mb-3">Використовуючи файл assets/about.json відобразити на сторінці:
      </p>
      <ul class="text-2xl">
        <li>Фото</li>
        <li>Ім'я</li>
        <li>Скільки повних років</li>
        <li><span class="font-bold">Посилання</span> на пошту</li>
        <li><span class="font-bold">Посилання</span> на телефон
        </li>
        <li>Місто
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import about from '../assets/about.json'
</script>

<style scoped>
</style>
