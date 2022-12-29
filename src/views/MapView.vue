<template>
  <div id="map" class="h-5 w-5"></div>
</template>

<script>
import L from "leaflet";

export default {
  name: "MapView",

  mounted() {
    // створюємо нову карту із вибраними координатами та збільшуємо масштаб
    this.map = L.map("map").setView([51.505, -0.09], 13);

    // додаємо тайли карти з OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(this.map);
  },
};
</script>

<style scoped></style>
