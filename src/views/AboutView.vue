<template>
  <div class="container mx-auto ">
    <div class="mb-10">
      <p class="text-4xl mb-3">Використовуючи файл about.json відобразити на сторінці:
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
    <div class="flex justify-around">
      <div class="w-[30%] h-auto">
        <img class="w-[100%] h-[100%] object-cover object-center" :src="about.photo">
      </div>
      <div>
        <p class="text-5xl mb-3">{{ about.name }}</p>
        <p class="text-5xl mb-3">{{ new Date(new Date() - new Date(about.birthday)).getFullYear() - 1970 }} yo</p>
        <p class="text-5xl pb-3 hover:border-b transition-all" >  <a :href="'mailto:'+ about.email">{{ about.email }}</a></p>
        <p class="text-5xl pb-3 hover:border-b transition-all" >  <a :href="'tel:'+ about.phone">{{ about.phone }}</a></p>
        <p class="text-5xl mb-3">{{ about.city }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import about from '../assets/about.json'
</script>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
