<template>
  <!-- Виведення списку постів і карти залишились без змін, але видалено виведення коментарів -->
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold mb-2">Список постів</h1>
      <input
        v-model="filterText"
        type="text"
        class="border rounded px-2 py-1 text-black"
        placeholder="Фільтрувати за заголовком"
      />
    </div>
    <ul class="list-reset">
      <TransitionGroup name="list" tag="li">
        <li v-for="post in filteredPosts" :key="post.id" class="mb-4">
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-xl font-bold mb-2 text-black">{{ post.title }}</h2>
            <p class="text-gray-700 mb-4">{{ post.body }}</p>
            <div class="flex justify-between items-center">
              <div v-if="post.comments" class="text-gray-600 text-sm">
                Коментарів: {{ post.comments.length }}
              </div>
              <button
                @click="showStatistics(post.id)"
                class="bg-green-700 text-white rounded px-4 py-2"
              >
                Показати статистику
              </button>
            </div>
          </div>
        </li>
      </TransitionGroup>
    </ul>
    <div class="flex justify-center">
      <p
        class="bg-amber-400 hover:bg-amber-500 w-10 h-10 m-2 flex items-center justify-center rounded text-black cursor-pointer transition-all"
        @click="goToPage(i)"
        v-for="i in numberOfPages"
      >
        {{ i }}
      </p>
    </div>
    <div
      :class="selectedPostId ? 'block' : 'hidden'"
      class="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto"
    >
      <div class="container mx-auto px-4 py-4">
        <div class="bg-white rounded shadow p-4">
          <h2 class="text-xl font-bold mb-2 text-black">Статистика</h2>
          <canvas ref="chart"></canvas>
          <button
            @click="closeStatistics"
            class="bg-red-500 text-white rounded px-4 py-2"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="selectedPostId"
      class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-40"
      @click="closeStatistics"
    ></div>
  </div>
</template>
<script>
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      posts: [],
      filterText: "",
      selectedPostId: null,
      myChart: null,
      currentPage: 1,
      postsPerPage: 10,
    };
  },
  computed: {
    filteredPosts() {
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      const post = this.posts.slice(startIndex, endIndex);
      return post.filter((post) =>
        post.title.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
    numberOfPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.posts = response.data;
      this.posts.forEach(async (post) => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
        );
        post.comments = response.data;
      });
    });
  },
  methods: {
    showStatistics(postId) {
      this.selectedPostId = postId;
      const post = this.posts.find((post) => post.id === postId);
      const labels = post.comments.map((comment) => comment.email);
      const data = post.comments.map((comment) => comment.email.length);
      this.myChart = new Chart(this.$refs.chart, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Кількість символів у пошті коментаторів",
              data: data,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",

              borderWidth: 1,
            },
          ],
        },
      });
    },
    goToPage(page) {
      this.currentPage = page;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    closeStatistics() {
      this.myChart.destroy();
      this.selectedPostId = null;
    },
  },
};
</script>
<style scoped lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
.modal {
  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
